import type { UiDictionary } from "../types";

export const ui: UiDictionary = {
  brand: { name: "محەمەد مەحموودی", role: "گەشەپێدەری فرۆنت-ئێند" },
  skipLink: "بازدان بۆ ناوەڕۆکی سەرەکی",
  nav: {
    home: "سەرەکی",
    about: "دەربارەی من",
    skills: "لێهاتووییەکان",
    experience: "ئەزموونەکان",
    projects: "پڕۆژەکان",
    aiStudio: "ستۆدیۆی AI",
    certificates: "بڕوانامەکان",
    contact: "پەیوەندی",
  },
  header: {
    mainNav: "مێنیوی سەرەکی",
    mobileNav: "مێنیوی مۆبایل",
    openMenu: "کردنەوەی مێنیوی سەرەکی",
    closeMenu: "داخستنی مێنیوی سەرەکی",
    cta: "با قسە بکەین",
    drawerCta: "دەستپێکردنی هاوکاری",
  },
  language: { switcherLabel: "گۆڕینی زمان" },
  social: {
    groupLabel: "تۆڕە کۆمەڵایەتییەکان",
    linkLabel: "{network} {handle} (لە تابێکی نوێدا دەکرێتەوە)",
    networks: { instagram: "ئینستاگرام", telegram: "تێلێگرام", whatsapp: "واتسئاپ" },
  },
  phone: {
    label: "پەیوەندی تەلەفۆنی؛ ژمارەیەک هەڵبژێرە",
    title: "پەیوەندی تەلەفۆنی",
    prompt: "بە کام ژمارەدا پەیوەندی دەکەیت؟",
  },
  projects: {
    categories: {
      "live-site": "ماڵپەڕی زیندوو",
      "wp-plugin": "پێوەکراوی وۆردپرێس",
      "next-app": "ئەپی React / Next",
      system: "سیستەمی کارپێکردن",
    },
    all: "هەموو",
    view: "بینینی پڕۆژە",
    live: "وەشانی زیندوو",
    searchLabel: "گەڕان لە پڕۆژەکاندا",
    searchPlaceholder: "گەڕان لە پڕۆژە و تەکنەلۆژیاکان...",
    resultCount: "{count} پڕۆژە",
    empty: "هیچ پڕۆژەیەک بەم فلتەرە نەدۆزرایەوە.",
  },
  aiGallery: {
    all: "هەموو",
    kinds: { image: "وێنە و بانەر", video: "ڤیدیۆ" },
    filterLabel: "فلتەرکردنی نموونەکان",
    enlarge: "بینینی گەورەی {title}",
    close: "داخستن",
    videoFallback: "وێبگەڕەکەت پشتگیریی لێدانی ئەم ڤیدیۆیە ناکات.",
  },
};
