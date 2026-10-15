# Modern Glass Homepage Implementation Plan

> جهت نهایی مطابق ماکاپ روشن انتخاب‌شده کاربر: سفید، آبی یخی و شیشه‌ای؛ معرفی AI و آشنایی بک‌اند/دیتابیس نیز به محتوا اضافه می‌شود. آزمون‌های تطبیق متن سورس با بررسی واقعی build، lint و تعاملات مرورگر جایگزین می‌شوند.

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** بازطراحی صفحه اصلی پورتفولیو با رابط تیره، آبی، شیشه‌ای، فارسی و کاملاً واکنش‌گرا.

**Architecture:** سیستم بصری در CSS مرکزی توسعه می‌یابد و صفحه اصلی از اجزای مستقل Hero، Expertise، FeaturedProjects و ContactCTA تشکیل می‌شود. داده‌های فعلی منبع محتوا می‌مانند و اجزای مشترک Header، Button، SectionHeading و ProjectCard با همان API فعلی ارتقا پیدا می‌کنند.

**Tech Stack:** Next.js 16، React 19، TypeScript، Tailwind CSS 4، Framer Motion، Lucide React

**Spec:** `docs/superpowers/specs/2026-10-15-modern-glass-portfolio-design.md`

## Global Constraints

- زبان و جهت صفحه فارسی و RTL باقی بماند.
- کتابخانه رابط جدید اضافه نشود.
- تمام محتوای فعلی و مسیرهای موجود حفظ شوند.
- حرکت‌ها از `prefers-reduced-motion` پیروی کنند.
- تصویر پروفایل با `next/image` و اندازه پاسخ‌گو بارگذاری شود.
- عنوان پروژه «فرانت‌اند دیپلوی نکست و وردپرس» بدون تغییر باقی بماند.

## Review Focus

- عرض 360 پیکسل: هیچ overflow افقی ایجاد نشود و CTAها قابل لمس بمانند.
- متن بلند فارسی: عنوان‌ها و خلاصه‌ها از کارت خارج نشوند.
- حرکت کاهش‌یافته: انیمیشن‌های تزئینی متوقف یا حذف شوند.
- مرورگر بدون backdrop-filter: کارت‌ها پس‌زمینه مات و خوانا داشته باشند.
- منوی موبایل: با تغییر مسیر بسته شود و خطای lint مربوط به setState در effect نداشته باشد.

---

### Task 1: قرارداد ساختاری صفحه اصلی

**Files:**
- Create: `tests/homepage-structure.test.mjs`
- Modify: `src/app/page.tsx`
- Create: `src/components/home/ExpertiseGrid.tsx`
- Create: `src/components/home/ContactCTA.tsx`

**Interfaces:**
- Consumes: `profile`، `getFeaturedProjects()` و `skillGroups`
- Produces: صفحه اصلی با بخش‌های `hero`، `expertise`، `featured-projects`، `skills` و `contact-cta`

- [ ] **Step 1: Write the failing test**

تست وجود شناسه‌های پنج بخش و رندر ContactCTA را در سورس صفحه بررسی کند.

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/homepage-structure.test.mjs`
Expected: FAIL چون بخش‌های جدید وجود ندارند.

- [ ] **Step 3: Implement the page composition and focused components**

اجزای ExpertiseGrid و ContactCTA را اضافه و ترتیب بخش‌ها را در `page.tsx` پیاده‌سازی کن.

- [ ] **Step 4: Run test to verify it passes**

Run: `node tests/homepage-structure.test.mjs`
Expected: PASS.

- [ ] **Step 5: Commit**

Commit: `feat: compose modern portfolio homepage`

### Task 2: سیستم بصری و اجزای مشترک

**Files:**
- Create: `tests/glass-design-system.test.mjs`
- Modify: `src/app/globals.css`
- Modify: `src/components/ui/Button.tsx`
- Modify: `src/components/ui/SectionHeading.tsx`
- Modify: `src/components/projects/ProjectCard.tsx`

**Interfaces:**
- Consumes: API فعلی Button، SectionHeading و ProjectCard
- Produces: کلاس‌های `glass-panel`، `glass-panel-strong`، `ambient-orb`، `grid-surface` و styling مشترک کارت‌ها

- [ ] **Step 1: Write the failing test**

تست وجود توکن‌های آبی/بنفش، fallback شیشه‌ای، media query کاهش حرکت و کلاس‌های خروجی را بررسی کند.

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/glass-design-system.test.mjs`
Expected: FAIL روی کلاس‌ها و قواعد جدید.

- [ ] **Step 3: Implement the tokens, utilities, and component styling**

CSS مرکزی و سه جزء مشترک را بدون تغییر API عمومی ارتقا بده.

- [ ] **Step 4: Run test to verify it passes**

Run: `node tests/glass-design-system.test.mjs`
Expected: PASS.

- [ ] **Step 5: Commit**

Commit: `feat: add blue glass design system`

### Task 3: هیرو و هدر پریمیوم

**Files:**
- Create: `tests/hero-header-accessibility.test.mjs`
- Modify: `src/components/home/Hero.tsx`
- Modify: `src/components/layout/Header.tsx`

**Interfaces:**
- Consumes: `profile` و `navLinks`
- Produces: هیروی دو ستونه با قاب چندلایه و هدر شیشه‌ای دسترس‌پذیر

- [ ] **Step 1: Write the failing test**

تست وجود نام قابل‌دسترس منوی موبایل، `aria-expanded`، بستن منو از رویداد لینک به‌جای effect، و متن CTA اصلی را بررسی کند.

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/hero-header-accessibility.test.mjs`
Expected: FAIL روی رفتار جدید منو و ساختار هیرو.

- [ ] **Step 3: Implement Hero and Header**

چیدمان تصویری، badgeها، glowها و ناوبری موبایل را پیاده‌سازی و effect مشکل‌دار فعلی را حذف کن.

- [ ] **Step 4: Run test and lint**

Run: `node tests/hero-header-accessibility.test.mjs && npm run lint`
Expected: PASS و lint بدون خطا.

- [ ] **Step 5: Commit**

Commit: `feat: redesign hero and glass navigation`

### Task 4: راستی‌آزمایی نهایی و مرور بصری

**Files:**
- Modify only files required by findings from verification

**Interfaces:**
- Consumes: صفحه کامل Tasks 1–3
- Produces: خروجی build‌شده و بررسی‌شده در دسکتاپ و موبایل

- [ ] **Step 1: Run the complete test set**

Run: `node tests/projects-data.test.mjs && node tests/homepage-structure.test.mjs && node tests/glass-design-system.test.mjs && node tests/hero-header-accessibility.test.mjs`
Expected: تمام تست‌ها PASS.

- [ ] **Step 2: Run static verification**

Run: `npm run lint && npm run build`
Expected: هر دو با exit code صفر.

- [ ] **Step 3: Inspect responsive layouts**

صفحه اصلی را در عرض‌های 360، 768، 1024 و 1440 بررسی کن؛ overflow، خوانایی، focus و منوی موبایل را ثبت کن.

- [ ] **Step 4: Fix any Important findings with RED→GREEN tests**

برای هر یافته مهم ابتدا تست شکست‌خورده اضافه، سپس اصلاح و کل مجموعه را دوباره اجرا کن.

- [ ] **Step 5: Commit**

Commit: `test: verify responsive glass homepage`
