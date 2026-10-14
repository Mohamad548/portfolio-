import type { SkillGroup } from "./types";

export const skillGroups: SkillGroup[] = [
  {
    id: "html-css",
    title: "HTML و CSS",
    titleEn: "HTML & CSS",
    icon: "layout",
    items: [
      { name: "HTML5 / CSS3", level: "expert" },
      { name: "Responsive / Flexbox / Grid", level: "expert" },
      { name: "Tailwind CSS", level: "advanced" },
      { name: "SASS / Bootstrap", level: "advanced" },
      { name: "Headless UI / SVG", level: "advanced" },
    ],
  },
  {
    id: "javascript",
    title: "JavaScript",
    titleEn: "JavaScript",
    icon: "code",
    items: [
      { name: "ES6+", level: "advanced" },
      { name: "Async / Promises", level: "advanced" },
      { name: "DOM / SPA Vanilla", level: "advanced" },
      { name: "Error Handling", level: "advanced" },
    ],
  },
  {
    id: "typescript",
    title: "TypeScript",
    titleEn: "TypeScript",
    icon: "braces",
    items: [
      { name: "Types & Interfaces", level: "advanced" },
      { name: "Generics & Classes", level: "intermediate" },
    ],
  },
  {
    id: "react",
    title: "React و کتابخانه‌ها",
    titleEn: "React & Libraries",
    icon: "atom",
    items: [
      { name: "Hooks / Context / Suspense", level: "advanced" },
      { name: "Redux / React Query", level: "advanced" },
      { name: "React Hook Form", level: "advanced" },
      { name: "MUI / Styled Components", level: "advanced" },
      { name: "React Router / i18next", level: "advanced" },
    ],
  },
  {
    id: "next",
    title: "Next.js",
    titleEn: "Next.js",
    icon: "triangle",
    items: [
      { name: "App Router / Pages Router", level: "advanced" },
      { name: "SSR / SSG / CSR", level: "advanced" },
      { name: "Layouts / Middleware", level: "advanced" },
      { name: "Server Components", level: "intermediate" },
    ],
  },
  {
    id: "wordpress",
    title: "وردپرس و افزونه",
    titleEn: "WordPress & Plugins",
    icon: "wordpress",
    items: [
      { name: "WooCommerce Customization", level: "advanced" },
      { name: "Custom Plugin Architecture", level: "advanced" },
      { name: "Theme Development", level: "advanced" },
      { name: "AJAX / Shortcodes / Admin UI", level: "advanced" },
    ],
  },
  {
    id: "tools",
    title: "ابزارها",
    titleEn: "Tools",
    icon: "wrench",
    items: [
      { name: "Git / GitHub", level: "advanced" },
      { name: "Figma (UI collaboration)", level: "intermediate" },
      { name: "Photoshop / CorelDRAW", level: "intermediate" },
      { name: "MySQL / Node.js (پایه)", level: "intermediate" },
    ],
  },
];
