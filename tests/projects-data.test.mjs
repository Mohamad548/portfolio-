import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../src/${path}`, import.meta.url), "utf8");

const projectsSource = await read("data/projects.ts");
const dictionaries = {
  fa: await read("i18n/dictionaries/fa/projects.ts"),
  ckb: await read("i18n/dictionaries/ckb/projects.ts"),
  en: await read("i18n/dictionaries/en/projects.ts"),
};

const projectBlocks = projectsSource
  .split(/\n  \{\n/)
  .slice(1)
  .map((block) => ({
    slug: block.match(/slug: "([^"]+)"/)[1],
    category: block.match(/category: "([^"]+)"/)[1],
    liveUrl: block.match(/liveUrl: "([^"]+)"/)?.[1],
    sections: [...(block.match(/sections: \[([^\]]*)\]/)?.[1] ?? "").matchAll(/"([^"]+)"/g)].map(
      (match) => match[1],
    ),
  }));

const exists = (path) =>
  access(new URL(`../public${path}`, import.meta.url)).then(
    () => true,
    () => false,
  );

test("portfolio includes the Insta Shop Direct plugin as a featured WordPress plugin", () => {
  assert.match(
    projectsSource,
    /slug: "insta-shop-direct",\s*category: "wp-plugin",\s*engagement: "custom",\s*featured: true/,
  );
  assert.match(dictionaries.fa, /title: "Insta Shop Direct — فروشگاه اینستاگرامی ووکامرس"/);
  assert.match(dictionaries.fa, /تلگرام و واتس‌اپ/);
});

test("the empty AdminHub scaffold is no longer listed", () => {
  assert.doesNotMatch(projectsSource, /adminhub/);
});

test("the live-sites stat counts each public site once", () => {
  const hosts = projectBlocks
    .filter(({ liveUrl, category }) => liveUrl && category !== "wp-plugin")
    .map(({ liveUrl }) => new URL(liveUrl).hostname.replace(/^www\./, ""));
  assert.equal(new Set(hosts).size, hosts.length, `duplicate live hosts: ${hosts.join(", ")}`);
});

test("every project is translated in every locale", () => {
  assert.ok(projectBlocks.length > 0);
  for (const [locale, source] of Object.entries(dictionaries)) {
    for (const { slug } of projectBlocks) {
      const key = /^[a-z]\w*$/.test(slug) ? `${slug}:` : `"${slug}":`;
      assert.ok(source.includes(key), `${locale} is missing project "${slug}"`);
    }
  }
});

test("every project has a cover and every section has an image", async () => {
  for (const { slug, sections } of projectBlocks) {
    assert.ok(await exists(`/images/projects/${slug}.webp`), `missing cover for "${slug}"`);
    for (const section of sections) {
      const path = `/images/projects/${slug}/${section}.webp`;
      assert.ok(await exists(path), `missing section image ${path}`);
    }
  }
});
