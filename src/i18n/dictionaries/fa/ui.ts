import type { UiDictionary } from "../types";

export const ui: UiDictionary = {
  brand: { name: "محمد محمودی", role: "توسعه‌دهنده فرانت‌اند" },
  skipLink: "رفتن به محتوای اصلی",
  nav: {
    home: "خانه",
    about: "درباره من",
    skills: "مهارت‌ها",
    experience: "سوابق",
    projects: "نمونه‌کارها",
    aiStudio: "استودیو AI",
    certificates: "گواهی‌ها",
    contact: "تماس",
  },
  header: {
    mainNav: "منوی اصلی",
    mobileNav: "منوی اصلی موبایل",
    openMenu: "باز کردن منوی اصلی",
    closeMenu: "بستن منوی اصلی",
    cta: "شروع همکاری",
    drawerCta: "شروع یک همکاری",
  },
  language: { switcherLabel: "تغییر زبان" },
  social: {
    groupLabel: "شبکه‌های اجتماعی",
    linkLabel: "{network} {handle} (در زبانه جدید)",
    networks: { instagram: "اینستاگرام", telegram: "تلگرام", whatsapp: "واتساپ" },
  },
  phone: {
    label: "تماس تلفنی؛ انتخاب شماره",
    title: "تماس تلفنی",
    prompt: "با کدام شماره تماس می‌گیرید؟",
  },
  projects: {
    categories: {
      "live-site": "سایت زنده",
      "wp-plugin": "افزونه وردپرس",
      "next-app": "اپ React / Next",
      system: "سیستم عملیاتی",
    },
    all: "همه",
    view: "مشاهده پروژه",
    live: "نسخه زنده",
    searchLabel: "جستجو در نمونه‌کارها",
    searchPlaceholder: "جستجو در پروژه‌ها، تکنولوژی...",
    resultCount: "{count} پروژه",
    empty: "پروژه‌ای با این فیلتر پیدا نشد.",
  },
  aiGallery: {
    all: "همه",
    kinds: { image: "تصویر و بنر", video: "ویدیو" },
    filterLabel: "فیلتر نمونه‌ها",
    enlarge: "نمایش بزرگ {title}",
    close: "بستن",
    videoFallback: "مرورگر شما از پخش این ویدیو پشتیبانی نمی‌کند.",
  },
};
