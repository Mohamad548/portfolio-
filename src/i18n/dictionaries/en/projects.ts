import type { Dictionary } from "../types";

export const projects: Dictionary["projects"] = {
  "instagram-shop-deployment": {
    title: "Next.js & WordPress Front-End Deployment",
    summary:
      "Persian Instagram storefront built with Next.js and connected to WordPress/WooCommerce for products, orders and a unified shopping experience.",
    role: "Front-end development & deployment",
    features: [
      "Responsive Persian interface for an Instagram storefront",
      "Next.js front end connected to WordPress and WooCommerce",
      "Product discovery and order-capture flow",
      "Shopping experience integrated with Instagram content and DMs",
      "Front-end preparation and deployment",
    ],
    problem:
      "Selling through Instagram needed a fast, cohesive web experience that connected products, orders and the WordPress infrastructure.",
    solution:
      "Built and deployed a Persian Next.js front end alongside WordPress and WooCommerce to deliver a unified, extensible purchase flow.",
  },
  "smart-content-assistant": {
    title: "Smart Content Assistant",
    summary:
      "AI-powered content panel for products and articles with prompt templates, SEO fields and multi-site WordPress sync.",
    role: "Front-end & full product UI",
    features: [
      "Generate descriptions, meta, keywords and slugs from templates",
      "Queue of items waiting for content",
      "Product image optimization and banner insertion",
      "Sync across multiple WordPress stores",
    ],
    problem:
      "Store teams needed consistent, SEO-ready content for hundreds of products, which was impossible to write by hand.",
    solution:
      "A Next.js panel with AI templates, live preview and a direct WordPress API connection for fast publishing.",
  },
  "warehouse-ops": {
    title: "Warehouse Ops Panel",
    summary:
      "Mobile-first warehouse operator panel for price, stock, weight and shipping costs inside the IranKala / ERP store ecosystem.",
    role: "WordPress plugin module & front-end",
    features: [
      "Fast price and stock edits for warehouse staff",
      "Weight and cash-on-delivery shipping cost capture",
      "Integrated with cart and checkout",
      "Stock-request workflows in the ERP panel",
    ],
    problem: "Warehouse operators needed a light mobile panel instead of the heavy WordPress dashboard.",
    solution: "A warehouse module in IranKala Companion plus stock workflows in Eminence ERP.",
  },
  "mobile-auth": {
    title: "Mobile Auth",
    summary: "OTP mobile login and registration plugin with a header popup and WooCommerce account override.",
    role: "Plugin author",
    features: [
      "SMS OTP login and registration",
      "Header login popup",
      "Per-digit OTP boxes with resend timer",
      "Persian admin settings panel",
    ],
    problem: "Stores needed fast mobile sign-in without complicated email and password flows.",
    solution: "A modular plugin with OTP security, shortcodes and WooCommerce integration.",
  },
  "irankala-companion": {
    title: "IranKala Companion",
    summary:
      "Store theme companion plugin: multi-step cart and checkout, wallet, optimization, mobile menu bar and warehouse.",
    role: "Plugin developer",
    features: [
      "Modular architecture without editing the theme",
      "Wallet and top-up flows",
      "LCP slider and page-transition optimization",
      "Shop and single-product settings panels",
    ],
    problem: "The store had to grow without making the main theme fragile.",
    solution: "A companion layer with toggleable modules and separate services.",
  },
  velocitycore: {
    title: "VelocityCore",
    summary:
      "WordPress speed plugin driven by Lighthouse reports: images, cache, CLS, database and accessibility.",
    role: "Plugin developer",
    features: [
      "Lazy-load and LCP preload",
      "Defer/delay scripts",
      "Request scan and JSON export for analysis",
      "Database cleanup and accessibility fixes",
    ],
    problem: "Heavy online stores had poor Core Web Vitals scores.",
    solution: "A modular dashboard with targeted actions for each Lighthouse opportunity.",
  },
  "word-flow": {
    title: "Word Flow",
    summary:
      "Operator and vendor access management with \"My Activities\" and \"Sections Manager\" panels, without the default WordPress menus.",
    role: "Plugin author",
    features: [
      "Tabbed sidebar without page reloads",
      "Granular access to orders and products",
      "Base role plus plugin-level overrides",
      "Isolated prefixes to avoid conflicts",
    ],
    problem: "Vendors shouldn't see the entire WordPress dashboard.",
    solution: "A dedicated admin shell with a capability registry and filtered menus.",
  },
  "eminence-catalog": {
    title: "Eminence Product Catalog",
    summary: "Catalog plugin with brands, custom tabs, AJAX filters, a shortcode and Schema.org SEO.",
    role: "Plugin developer",
    features: [
      "Brand and product management",
      "Image tabs with display order",
      "Responsive front-end UI",
      "[eminence_catalog] shortcode",
    ],
    problem: "A brand-driven catalog that goes beyond the simple WooCommerce product list.",
    solution: "A custom catalog with tabs and fast AJAX loading.",
  },
  "live-chat-box": {
    title: "WP Live Chat Box",
    summary: "Modern live chat widget for WordPress with a class-based architecture.",
    role: "Plugin author",
    features: ["Front-end chat widget", "PSR-4 style structure", "Extensible for live support"],
    problem: "Stores needed a quick conversation channel without a heavy third-party service.",
    solution: "A lightweight chat plugin with a modern UI.",
  },
  "mirkazmi-consultation": {
    title: "Mirkazmi Consultation",
    summary: "Legal consultation form, request management and patterned SMS for a law firm website.",
    role: "Plugin author",
    features: ["Consultation request intake", "Admin request management", "Patterned SMS notifications"],
    problem: "The law firm needed to collect leads and notify clients by SMS.",
    solution: "A dedicated form plugin with SMS notifications.",
  },
  shata20: {
    title: "Shata20 Store",
    summary:
      "Custom shata20.ir store: Next.js customer site and Vite/React admin panel built from scratch, plus partner, credit and operations tooling.",
    role: "Full front-end — storefront & admin panel",
    features: [
      "Custom storefront and user panel (Next.js) on shata20.ir",
      "Full admin panel (Vite + React + MUI) for operations",
      "National ID verification, installments, credit checks and B2B flows",
      "Companion ecosystem: partner panel, printing and OCR",
    ],
    problem:
      "The business needed custom online sales with an admin panel and B2B processes, not a ready-made store theme.",
    solution:
      "Built the complete customer and admin sides on shata20.ir with an API and companion operations tools.",
  },
  kazhol: {
    title: "Kazhol",
    summary: "WordPress online store setup and administration.",
    role: "WordPress setup & administration",
    features: ["Online storefront", "Content and product management"],
    problem: "Launching a reliable store quickly.",
    solution: "WordPress/WooCommerce implementation and customization.",
  },
  eboshin: {
    title: "Eboshin",
    summary: "WordPress online store.",
    role: "WordPress setup & administration",
    features: ["Online storefront", "Product management"],
    problem: "Establishing an online store presence.",
    solution: "Set up a WordPress store.",
  },
  "kasra-eminence": {
    title: "Kasra Eminence",
    summary: "Corporate and store website with the Eminence catalog and custom tooling.",
    role: "Front-end & plugin development",
    features: ["Brand catalog", "Speed optimization", "Companion panels"],
    problem: "Presenting industrial products professionally with scalable content management.",
    solution: "WordPress, custom plugins and Next.js panels.",
  },
  chirokala: {
    title: "Chirokala",
    summary: "WordPress store theme and website.",
    role: "Theme & front-end",
    features: ["Shop pages", "Custom theme work"],
    problem: "The store needed a cohesive look.",
    solution: "WordPress theme development and customization.",
  },
  adminhub: {
    title: "AdminHub — MultiSite Manager",
    summary: "Next.js dashboard for managing multiple sites.",
    role: "Front-end",
    features: ["Central admin panel", "App Router structure"],
    problem: "Managing several web projects was scattered.",
    solution: "A single admin hub built with Next.js.",
  },
  "sanduq-bilal": {
    title: "Sanduq Bilal Habashi",
    summary: "Qard al-Hasan fund admin panel: members, deposits, loans and balance with Next.js and an API.",
    role: "Full-stack front-end",
    features: ["Member and loan tracking", "Currency and date formatting", "Admin authentication"],
    problem: "Transparent fund cash flow without heavy accounting software.",
    solution: "A lightweight web panel with a custom API.",
  },
  "whatsapp-ledger": {
    title: "WhatsApp Accounting Ledger",
    summary: "Record and track accounting transactions through WhatsApp and a web panel.",
    role: "Front-end & integration",
    features: ["WhatsApp event intake", "Ledger view", "Vercel deployment"],
    problem: "Recording transactions quickly from the team's everyday messenger.",
    solution: "Webhooks plus a front-end panel for the ledger.",
  },
  ocfr: {
    title: "OCFR — Image Analysis",
    summary: "Image analysis system with a Next.js 15 front end and a Python/FastAPI backend.",
    role: "Front-end",
    features: ["Image upload and analysis", "Separate API", "App Router"],
    problem: "An image analysis pipeline that could be used on the web.",
    solution: "Separated the Next.js front end from the Python service.",
  },
  speedwordpress: {
    title: "SpeedWordpress Dashboard",
    summary: "Next.js dashboard for monitoring and improving WordPress site speed.",
    role: "Front-end",
    features: ["Validated forms", "State management", "Speed backend integration"],
    problem: "Speed optimization tools needed a modern UI.",
    solution: "A Next.js front end with clean, type-safe developer experience.",
  },
};
