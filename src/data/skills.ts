import type { SkillGroupBase } from "./types";

export const skillGroups = [
  {
    id: "html-css",
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
    icon: "braces",
    items: [
      { name: "Types & Interfaces", level: "advanced" },
      { name: "Generics & Classes", level: "intermediate" },
    ],
  },
  {
    id: "react",
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
    icon: "wordpress",
    items: [
      { name: "WooCommerce Customization", level: "advanced" },
      { name: "Custom Plugin Architecture", level: "advanced" },
      { name: "Theme Development", level: "advanced" },
      { name: "AJAX / Shortcodes / Admin UI", level: "advanced" },
    ],
  },
  {
    id: "ai-development",
    icon: "sparkles",
    items: [
      { labelKey: "aiIdeation", level: "intermediate" },
      { labelKey: "aiInterfaces", level: "intermediate" },
      { labelKey: "promptEngineering", level: "familiar" },
    ],
  },
  {
    id: "ai-media",
    icon: "clapperboard",
    items: [
      { name: "Google Flow", level: "intermediate" },
      { labelKey: "aiAdBanners", level: "intermediate" },
      { labelKey: "aiRealisticVideo", level: "intermediate" },
    ],
  },
  {
    id: "backend-databases",
    icon: "database",
    items: [
      { labelKey: "nodeBackend", level: "familiar" },
      { name: "MySQL", level: "familiar" },
      { name: "PostgreSQL", level: "familiar" },
      { labelKey: "otherDatabases", level: "familiar" },
    ],
  },
  {
    id: "tools",
    icon: "wrench",
    items: [
      { name: "Git / GitHub", level: "advanced" },
      { name: "Figma (UI collaboration)", level: "intermediate" },
      { name: "Photoshop / CorelDRAW", level: "intermediate" },
    ],
  },
] as const satisfies readonly SkillGroupBase[];

export type SkillGroupId = (typeof skillGroups)[number]["id"];
