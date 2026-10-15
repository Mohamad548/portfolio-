import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../src/${path}`, import.meta.url), "utf8");

const projectsSource = await read("data/projects.ts");
const dictionaries = {
  fa: await read("i18n/dictionaries/fa/projects.ts"),
  ckb: await read("i18n/dictionaries/ckb/projects.ts"),
  en: await read("i18n/dictionaries/en/projects.ts"),
};

const slugs = [...projectsSource.matchAll(/slug: "([^"]+)"/g)].map((match) => match[1]);

test("portfolio includes the approved Instagram shop project", () => {
  assert.match(projectsSource, /slug: "instagram-shop-deployment",\s*category: "next-app",\s*featured: true/);
  assert.match(dictionaries.fa, /title: "فرانت‌اند دیپلوی نکست و وردپرس"/);
});

test("every project is translated in every locale", () => {
  assert.ok(slugs.length > 0);
  for (const [locale, source] of Object.entries(dictionaries)) {
    for (const slug of slugs) {
      const key = /^[a-z]\w*$/.test(slug) ? `${slug}:` : `"${slug}":`;
      assert.ok(source.includes(key), `${locale} is missing project "${slug}"`);
    }
  }
});
