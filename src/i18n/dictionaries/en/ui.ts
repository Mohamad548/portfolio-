import type { UiDictionary } from "../types";

export const ui: UiDictionary = {
  brand: { name: "Mohamad Mahmodi", role: "Front-End Developer" },
  skipLink: "Skip to main content",
  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    aiStudio: "AI Studio",
    certificates: "Certificates",
    contact: "Contact",
  },
  header: {
    mainNav: "Main navigation",
    mobileNav: "Mobile navigation",
    openMenu: "Open main menu",
    closeMenu: "Close main menu",
    cta: "Let's talk",
    drawerCta: "Start a collaboration",
  },
  language: { switcherLabel: "Change language" },
  social: {
    groupLabel: "Social networks",
    linkLabel: "{network} {handle} (opens in a new tab)",
    networks: { instagram: "Instagram", telegram: "Telegram", whatsapp: "WhatsApp" },
  },
  phone: {
    label: "Phone call: choose a number",
    title: "Phone call",
    prompt: "Which number would you like to call?",
  },
  projects: {
    categories: {
      "live-site": "Live sites",
      "wp-plugin": "WordPress plugins",
      "next-app": "React / Next apps",
      system: "Ops systems",
    },
    all: "All",
    view: "View project",
    live: "Live site",
    searchLabel: "Search projects",
    searchPlaceholder: "Search projects or technologies...",
    resultCount: "{count} projects",
    empty: "No projects match this filter.",
  },
  aiGallery: {
    all: "All",
    kinds: { image: "Images & banners", video: "Videos" },
    filterLabel: "Filter samples",
    enlarge: "View {title} full size",
    close: "Close",
    videoFallback: "Your browser can't play this video.",
  },
};
