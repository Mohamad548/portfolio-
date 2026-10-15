// eslint-disable-next-line @typescript-eslint/no-unused-expressions -- Playwright CLI loads this function expression directly.
async (page) => {
  const assert = (condition, message) => {
    if (!condition) throw new Error(message);
  };
  const results = [];
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto("http://127.0.0.1:3100/");
  await page.evaluate(() => document.fonts.ready);
  for (const width of [360, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    const dimensions = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      content: document.documentElement.scrollWidth,
      mainVisible: document.querySelector("h1").getBoundingClientRect().width > 0,
    }));
    assert(dimensions.content <= dimensions.viewport, `Horizontal overflow at ${width}: ${JSON.stringify(dimensions)}`);
    assert(dimensions.mainVisible, `Hero missing at ${width}`);
    results.push({ width, overflow: false });
  }
  assert(await page.locator("#ai-approach").innerText().then(text => text.includes("بیش از یک سال")), "AI experience is missing");
  assert(await page.locator("#services").innerText().then(text => text.includes("Node.js") && text.includes("MySQL") && text.includes("PostgreSQL")), "Backend technologies are missing");
  await page.setViewportSize({ width: 360, height: 800 });
  const toggle = page.locator("header button[aria-controls]");
  await toggle.click();
  assert(await toggle.getAttribute("aria-expanded") === "true", "Mobile menu did not open");
  await page.keyboard.press("Escape");
  assert(await toggle.getAttribute("aria-expanded") === "false", "Escape did not close mobile menu");
  assert(await toggle.evaluate(element => element === document.activeElement), "Focus did not return to menu toggle");
  await toggle.click();
  await page.getByRole("navigation", { name: "منوی اصلی موبایل" }).getByRole("link", { name: "مهارت‌ها", exact: true }).click();
  await page.waitForURL("**/skills");
  assert(await page.getByRole("button", { name: "باز کردن منوی اصلی", exact: true }).getAttribute("aria-expanded") === "false", "Menu did not reset on navigation");
  assert((await page.locator("main").innerText()).includes("انواع دیگر پایگاه داده"), "Other databases familiarity is missing");
  await page.goto("http://127.0.0.1:3100/projects");
  const input = page.getByPlaceholder("جستجو در پروژه‌ها، تکنولوژی...");
  await input.fill("Insta Shop");
  assert(await page.locator("main article").count() === 1, "Project search did not find the Instagram shop plugin");
  await page.locator("main article").getByRole("link", { name: "مشاهده پروژه", exact: true }).click();
  await page.waitForURL("**/projects/insta-shop-direct");
  assert((await page.locator("h1").innerText()) === "Insta Shop Direct — فروشگاه اینستاگرامی ووکامرس", "Instagram plugin title changed");
  assert(await page.locator("#capabilities").count() === 1, "Project capabilities section is missing");
  await page.goto("http://127.0.0.1:3100/");
  await page.emulateMedia({ reducedMotion: "reduce" });
  assert(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior === "auto"), "Reduced motion scrolling not respected");
  await page.screenshot({ path: "output/portfolio-mobile.png", fullPage: true });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.screenshot({ path: "output/portfolio-desktop.png" });
  await page.screenshot({ path: "output/portfolio-full.png", fullPage: true });
  assert(errors.length === 0, `Browser errors: ${errors.join("; ")}`);
  return { viewports: results, mobileMenu: "pass", projectSearch: "pass", projectRoute: "pass", profileAdditions: "pass", reducedMotion: "pass", browserErrors: errors };
}
