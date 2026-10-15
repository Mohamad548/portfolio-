import type { Dictionary } from "../types";

export const projects: Dictionary["projects"] = {
  "insta-shop-direct": {
    title: "Insta Shop Direct — Instagram Shop for WooCommerce",
    summary:
      "A WordPress/WooCommerce plugin that turns Instagram DMs and comments into a full shop: product cards in DMs, step-by-step ordering, card-to-card or online payment, an inbox, comment replies and post publishing — backed by a secure Node.js broker for the official Meta connection.",
    role: "Designed and built the plugin, OAuth broker and relay",
    features: [
      "Product cards with image, live price and a buy button in DMs",
      "WooCommerce orders placed inside the chat, from variation to shipping method",
      "Card-to-card payment with receipt, or a 48-hour online payment link",
      "Inbox, manual replies and per-conversation bot pause",
      "Public and private comment replies and keyword auto-replies",
      "Publishing photos, carousels and reels, and linking posts to products",
      "Central OAuth broker: no token or App Secret is stored on the shop site",
      "Messenger-agnostic conversation engine, expandable to Telegram and WhatsApp",
    ],
    problem:
      "Instagram shops take orders by hand in DMs: asking for address and phone, sending card numbers, checking receipts and re-entering everything on the website. It's slow, error-prone and disconnected from the site's stock and prices.",
    solution:
      "A sales bot inside WordPress that uses WooCommerce's own products, prices, shipping methods and gateways to run the whole purchase in DMs. Meta is reached through a separate secure broker. The project is still being tested in Meta's Development mode and needs App Review before public release.",
    sections: {
      "dm-catalog": {
        title: "Product showcase in DMs",
        description:
          "The admin adds WooCommerce products to the Instagram shop; customers get a product card in DMs via a keyword, a comment or a post link.",
        points: [
          "Generic Template product card with image, name, live price and “View on site” and “Buy” buttons",
          "Per-product keywords and post-to-product links",
          "Automatic product DM when someone comments on a linked post",
          "The keyword “products” shows a carousel of every active product",
          "Ice breakers and editable bot message templates with placeholders",
        ],
      },
      "checkout-flow": {
        title: "Step-by-step ordering in chat",
        description:
          "Purchases run on a state machine: the bot asks for each detail, validates it and finishes with an order summary.",
        points: [
          "Variation selection (color, size, …) for variable products",
          "Name, address, optional postcode and phone, with Persian digit normalization",
          "WooCommerce's own shipping methods with per-method cost",
          "Returning customers reuse their saved details",
          "Cancel at any step; unfinished flows expire after 24 hours",
        ],
      },
      payments: {
        title: "Card-to-card and online payment",
        description:
          "Customers choose card-to-card or a WooCommerce online gateway; both end in a real WooCommerce order.",
        points: [
          "Sends card number, holder name and IBAN, then receives the receipt photo in DMs",
          "SSRF-safe receipt download into a protected folder",
          "Order metabox to approve or reject the receipt, with an automatic DM to the customer",
          "Short online payment link valid for 48 hours, with a VPN warning",
          "“Instagram” column and badge in the orders list, HPOS compatible",
        ],
      },
      "inbox-comments": {
        title: "Inbox and comment management",
        description:
          "Every conversation and comment is visible in the WordPress dashboard so an operator can step in whenever needed.",
        points: [
          "Conversation list, manual replies and per-customer bot pause",
          "Sync of earlier conversations from the Conversations API",
          "Public or private comment replies and comment hiding",
          "Keyword-based comment auto-replies",
          "Bot simulator and a connection diagnostics dashboard",
        ],
      },
      publishing: {
        title: "Publishing and media-to-product links",
        description:
          "The admin publishes posts from the WordPress dashboard and links existing posts to products.",
        points: [
          "Single photos, carousels of up to 10 images, and reels",
          "Caption builder based on product data",
          "Media tab for linking earlier posts to products",
          "Outbound queue to Meta with ordering and retry control",
        ],
      },
      "secure-broker": {
        title: "Secure OAuth broker and relay",
        description:
          "Instagram tokens and the App Secret live only on a central Node.js broker; the plugin talks to it with digital signatures.",
        points: [
          "Site registration with an Ed25519 key and ISD-SIG-V1 signatures on every request",
          "Official Instagram login with a one-time handoff and PKCE",
          "AES-256-GCM token encryption, webhook intake and retries",
          "Rate limiting, SSRF protection, deauthorize and data-deletion support",
          "Vercel relay for Iranian hosts that can't reach the broker directly",
          "Tests: 104 plugin tests, 34 broker tests and an E2E run against a simulated Meta",
        ],
      },
      "multi-channel": {
        title: "Expandable to Telegram and WhatsApp",
        description:
          "The conversation and ordering engine isn't tied to Instagram; it sends messages only through a MessengerInterface, so the same shop can be built for Telegram and WhatsApp.",
        points: [
          "Purchase, order and payment logic is separate from the messenger layer",
          "The Instagram messenger is just one implementation of the interface",
          "Telegram: Bot API with inline buttons; WhatsApp: WhatsApp Cloud API",
          "Same WooCommerce catalog, orders and receipt approval for every channel",
        ],
      },
    },
  },
  shata20: {
    title: "Shata20 — Phone Store with Installment Buying",
    summary:
      "A custom Next.js store for phones, tablets, laptops and gadgets covering cash and installment purchases, from credit checks and digital contracts to shipping. I'm the main storefront front-end developer (about 570 commits) and built the installment and order modules of the admin panel.",
    role: "Main storefront front-end developer; installment and order modules in the admin panel",
    features: [
      "1–12 month installment buying with a live installment calculator",
      "Online credit check with score, grade and credit limit",
      "National identity verification with national ID and birth date",
      "Installment contract with digital signature and Sayad cheque registration",
      "Shipping cost from the Tapin API and in-store pickup",
      "Zibal online payment and retry for failed orders",
      "Role-based admin panel for orders, stock, installments and support",
      "AI support chat with handoff to a human operator",
    ],
    problem:
      "Selling digital goods on installments online required credit checks, identity verification, cheques and contract signing — impossible with off-the-shelf store themes.",
    solution:
      "A custom store with a multi-step installment user panel, national inquiry, smart shipping and an admin panel. The admin panel is built on the Minimal UI template with a base by another developer; my part there is the installment, order, settings, customer and support modules. The backend is the backend team's work.",
    sections: {
      "storefront-catalog": {
        title: "Storefront and product browsing",
        description:
          "Server-rendered home page, filterable category and brand archives, and SEO-ready product pages with color and variant selection.",
        points: [
          "Slider, “Amazing offers” and dedicated Apple, Samsung and Xiaomi rows",
          "Shop, category, brand, tag and search archives with filters, sorting and pagination",
          "Gallery, specs, reviews, Q&A and related accessories",
          "Variant synced to the page URL for Torob compatibility",
          "Product comparison page and an in-page installment calculator",
        ],
      },
      "checkout-shipping": {
        title: "Cart, shipping and payment",
        description:
          "Three-step checkout with real shipping costs and support for both cash and installment purchases.",
        points: [
          "“Current” and “next purchase” baskets",
          "Express post pricing from Tapin based on the address",
          "Packaging choice and in-store pickup on an OpenLayers map",
          "Zibal payment, result page and retry for failed orders",
        ],
      },
      "installment-credit": {
        title: "Credit check and installment buying",
        description:
          "The full installment journey — identity inquiry, credit check, documents, cheque and contract signing — step by step and driven by the case status.",
        points: [
          "Credit report with a 300–900 score gauge, A1–E3 grade and credit limit",
          "Cooldown before re-assessment with a countdown bar",
          "National ID card, cheque image and Sayad receipt uploads with cheque-filling guidance",
          "Steps unlock or lock based on more than 15 case statuses",
          "Digital contract signing via “Emzano” and contract printing",
        ],
      },
      "user-panel": {
        title: "Customer account panel",
        description:
          "A mobile-first account with orders, installments, addresses, lists, notifications and support tickets.",
        points: [
          "Order details with status bar, delivery code, installment table and invoice printing",
          "Credit usage history and tabs for active, settled and cancelled installments",
          "Two-step national identity verification for individuals and companies",
          "SMS one-time-password login with code autofill",
          "Support tickets with file attachments",
        ],
      },
      "admin-operations": {
        title: "Operations admin panel",
        description:
          "Role-based admin menus for managers, operators, warehouse staff, writers and couriers. My share is mostly the installment and order modules.",
        points: [
          "Credit-check review with an assessment form and rejection dialog",
          "Step-by-step installment request details: cheque review, contract and delivery",
          "Tapin panel in orders for box size, weight, parcel status and label printing",
          "Settings for shipping methods, branches, packaging and SMS templates",
        ],
      },
      "support-ecosystem": {
        title: "Smart support and companion tools",
        description: "An AI support chat widget with live operators, plus side tools.",
        points: [
          "Chat connected to SmartWebAI with FAQs, voice messages and operator requests",
          "Tech-support hub in the admin: live chats, archive and AI model settings",
          "shata-print service generating Persian contract PDFs with Puppeteer",
          "Partner panel (early stage) with partner pricing",
        ],
      },
    },
  },
  "logamall-theme": {
    title: "Logamall custom theme",
    summary:
      "A custom WordPress and WooCommerce theme for Logamall, an online store selling sealed-new and stock goods from the Chabahar Free Zone. Lightweight, Persian and right-to-left, with a conversion-focused product page and automated quality checks.",
    role: "Full theme design and development",
    features: [
      "Seven-section homepage configured from a custom \"Theme Config\" panel",
      "Live Ajax search, category mega menu and mobile bottom navigation",
      "Custom product page with gallery, color and size swatches and a mobile purchase bar",
      "Wishlist, photo reviews and product Q&A",
      "CSS and JS loaded only where needed, with no jQuery",
      "Browser tests, Lighthouse and visual regression at four viewport widths",
    ],
    problem:
      "A store with categories ranging from home and kitchen to clothing, camping and handicrafts needed a lightweight, maintainable, mobile-first theme that could be configured from an admin panel without a page builder.",
    solution:
      "A classic hybrid theme on PHP 8.3 and theme.json that customizes WooCommerce through hooks, overrides only three WooCommerce templates, and checks every page with browser tests, Lighthouse and visual diffs before release. The homepage, shop, blog and product page are done; cart and checkout come next.",
    sections: {
      "storefront-homepage": {
        title: "Configurable homepage",
        description:
          "Seven homepage sections are toggled and configured separately in the theme panel, with different behavior on desktop and mobile.",
        points: [
          "Slider with up to 12 slides and separate desktop and mobile images",
          "\"Amazing offers\" with a daily or fixed-date countdown",
          "Best-seller and brand carousels with cards per view set per device",
          "Magazine with Jalali dates, a category grid and promo banners",
        ],
      },
      "header-navigation": {
        title: "Header, mega menu and mobile navigation",
        description: "Marketplace navigation with instant search and a dedicated mobile experience.",
        points: [
          "Live Ajax search scoped by category, with 8 results, thumbnails and prices",
          "Tabbed mega menu with multi-column subcategories and a banner per category",
          "Announcement bar with separate content per device",
          "Drawer menu, full-screen search and a five-item bottom bar",
        ],
      },
      "product-page": {
        title: "Conversion-focused product page",
        description:
          "A custom product page built on WooCommerce's own forms and tuned for Core Web Vitals.",
        points: [
          "Accessible gallery with keyboard, swipe and fullscreen support",
          "Size and color-swatch attributes with a color picker in admin",
          "Variation state rendered on the server to prevent layout shift",
          "One form drives the desktop purchase card and the sticky mobile bar",
        ],
      },
      "trust-community": {
        title: "Accounts, reviews and Q&A",
        description: "Logged-in interactions built with security and shopper trust in mind.",
        points: [
          "Login dialog on the product page with rate limiting that resumes the shopper's action",
          "Account-backed wishlist that migrates the guest list",
          "Photo reviews with real file-type checks, metadata stripping and a verified-buyer badge",
          "Product Q&A and per-product return terms",
        ],
      },
      "performance-quality": {
        title: "Speed, SEO and automated quality gates",
        description: "A lightweight theme with page-scoped assets and a quality gate before release.",
        points: [
          "CSS and JS only where needed, with a preloaded self-hosted font",
          "Fallback SEO with Open Graph and JSON-LD that steps aside for SEO plugins",
          "Puppeteer, Lighthouse and visual regression at four viewport widths",
          "SVG icons from a curated registry and RTL-first logical CSS",
        ],
      },
    },
  },
  "ghahghah-theme": {
    title: "Ghahghah custom theme",
    summary:
      "A custom WordPress theme and companion plugin for Ghahghah, a corn-snack brand with a factory in Sanandaj: a catalog site for 9 flavors with wholesale and dealership request forms and SMS notifications.",
    role: "Full theme and plugin design and development",
    features: [
      "Custom product post type with flavor filter, search and sorting",
      "Wholesale, dealership and contact forms over the REST API",
      "Melipayamak pattern SMS to the applicant and the admin",
      "\"Theme Config\" panel with 19 tabs and one-click setup",
      "Built-in SEO with JSON-LD and Core Web Vitals tuning",
      "Mobile-first Persian experience with bottom navigation and Jalali dates",
    ],
    problem:
      "Ghahghah doesn't sell online; it needed a site that presents its flavors, introduces the factory and collects requests from wholesale buyers and distributors.",
    solution:
      "A classic theme with no page builder or WooCommerce, plus a Core plugin for the product and inquiry post types, rate-limited REST forms with automatic SMS, and a setup wizard that turns an empty install into the full site in one click.",
    sections: {
      "flavor-catalog": {
        title: "Flavor catalog",
        description: "Nine corn-snack flavors on a custom post type, with no shop logic.",
        points: [
          "Lemon, vinegar, pizza, shallot yogurt, parsley onion, ketchup, cheese, chicken and pepper",
          "Flavor filter, search and sorting with clean URLs",
          "Live header search across products and articles",
          "Product pages with gallery, flavor, weight and packaging",
        ],
      },
      "wholesale-agency": {
        title: "Wholesale and dealership requests",
        description:
          "Lead capture for wholesale buyers and regional distributors, with validation, spam protection and SMS.",
        points: [
          "Wholesale, dealership and contact forms submitted over REST",
          "Province and city pickers and mobile-number normalization",
          "Rate limit of 8 requests per 10 minutes per IP",
          "Separate wholesale and dealership inboxes, with SMS to applicant and admin",
        ],
      },
      "admin-setup": {
        title: "Admin panel and one-click setup",
        description: "The client configures everything from a Persian panel without writing code.",
        points: [
          "\"Theme Config\" panel with 19 tabs in 5 groups",
          "Five-step wizard after theme activation",
          "Pages, 9 products, articles and menus created automatically",
          "Core plugin bundled in the theme and a demo package for full-site install",
        ],
      },
      "speed-seo": {
        title: "Speed and SEO",
        description: "Core Web Vitals tuning and structured data without depending on an SEO plugin.",
        points: [
          "Preloaded LCP image and non-blocking CSS",
          "Speculation Rules and a Google Map that loads only on click",
          "JSON-LD for organization, product, article and FAQ",
          "CLS of at most 0.079 on every measured page",
        ],
      },
      "mobile-experience": {
        title: "Mobile-first Persian experience",
        description: "An accessible right-to-left interface designed for phones first.",
        points: [
          "Bottom navigation with a selectable icon per item",
          "Keyboard-accessible drawer menu and 44px touch targets",
          "Flavor slider with separate mobile and desktop images",
          "Yekan Bakh font with Persian digits and Jalali dates",
        ],
      },
    },
  },
  "anbar-one": {
    title: "Anbar One — warehouse and accounting ERP",
    summary:
      "A multi-tenant SaaS ERP for inventory, sales and accounting, built for the Eminence group. It covers everything from product intake and approval and transfers between warehouses to invoices, a POS counter and automatic journal vouchers, with an admin panel, a company work panel and a shared API.",
    role: "Full-stack design and development",
    features: [
      "Multiple warehouses and shops with a cardex and weighted-average valuation",
      "Proformas, invoices, POS, returns and seller commissions",
      "Event-driven accounting with automatic vouchers, fiscal years and year-end closing",
      "Treasury, cheques, petty cash, bank reconciliation and financial reports",
      "Multi-company with 11 roles, separation of duties and per-company backups",
      "Tickets, chat and WebRTC support calls with screen sharing",
    ],
    problem:
      "Stock across several warehouses and shops, sales and accounting were tracked in separate, manual tools, which led to stock discrepancies, late vouchers and no real access control.",
    solution:
      "A single platform where every operational document, from goods receipts to sales invoices, raises a finance event that a posting engine turns into a journal voucher. About three months of work produced 138 data models, roughly 615 permission-guarded endpoints and 177 pages in the work panel.",
    sections: {
      "inventory-warehouses": {
        title: "Multi-warehouse inventory",
        description:
          "Stock across warehouses, shops, return quarantine and scrap, with approvals and a full movement history.",
        points: [
          "Product approval flow from draft to approved, with finance review",
          "Stock requests and transfers with partial-receipt discrepancy handling",
          "Quantity and value cardex with weighted average and a reconciliation report",
          "Barcode labels, stock counts and purchase goods receipts",
        ],
      },
      "sales-pipeline": {
        title: "Sales, proformas and POS",
        description: "The full sales cycle from proforma to delivery, with finance and warehouse gates.",
        points: [
          "Proforma, invoice, finance approval, warehouse dispatch and delivery",
          "POS counter, sales returns and commission reports",
          "Customers with credit limits and debt aging",
          "Purchase invoices, vendors and goods receipts",
        ],
      },
      "accounting-engine": {
        title: "Event-driven accounting",
        description:
          "Operational documents raise finance events, and a posting engine turns them into journal vouchers.",
        points: [
          "Chart of accounts, manual and automatic vouchers with an approval lifecycle",
          "Fiscal years and periods, period locks and year-end closing",
          "Banks and cash desks, cheques, petty cash and bank reconciliation",
          "Balance sheet, profit and loss, cash flow and integrity checks",
        ],
      },
      "saas-multitenancy": {
        title: "Multi-company platform and permissions",
        description: "Many companies on one platform, with role-based access, separation of duties and backups.",
        points: [
          "Company signup that creates a warehouse, admin, chart of accounts and trial plan",
          "Per-company data isolation at the request and Prisma level",
          "11 roles, separation of duties, delegation and field- and menu-level access",
          "Platform backup and restore plus scheduled per-company backups",
        ],
      },
      "site-sync-support": {
        title: "Website sync and real-time support",
        description:
          "Publishing products to the WooCommerce store through Smart Assistant, plus online support tools.",
        points: [
          "Publish products to the site with publish-status tracking",
          "Price and stock sync and website orders turned into invoices (partly still in progress)",
          "Tickets, direct chat and real-time SSE notifications",
          "WebRTC voice calls with screen sharing and Melipayamak SMS",
        ],
      },
    },
  },
  "smart-content-assistant": {
    title: "Smart Assistant",
    summary:
      "A SaaS platform for running several WooCommerce stores: it generates product, post and category content with AI, optimizes images and publishes straight to WordPress — with an admin panel, a store-owner panel and a custom backend.",
    role: "Main full-stack developer (500+ backend commits)",
    features: [
      "Product, post and category content from prompt templates with structured JSON output",
      "“Waiting for AI” queue with scheduled generation and publishing",
      "SEO fields compatible with Rank Math and Yoast",
      "Seven-step add-product wizard",
      "WebP conversion, logo overlay and AI-generated promo banners",
      "Automatic sync of products, posts, categories and orders across stores",
      "USD pricing and order and invoice notifications on Telegram",
      "Multi-site admin panel and user panel with operators and permissions",
    ],
    problem:
      "Store teams wrote descriptions, SEO, images and publishing by hand for every product, separately on each WordPress site — slow and inconsistent.",
    solution:
      "A central panel with a “waiting for AI” queue, prompt templates and scheduled automation that produces content and media and publishes via the WooCommerce REST API to stores such as Voltazhin, Takkenar, Chirokala and Eminence.",
    sections: {
      "ai-content-engine": {
        title: "AI content engine",
        description:
          "Pending items go to the AI model with a prompt template; the structured output is saved and published after the user edits it.",
        points: [
          "Prompt and JSON Schema built from each template's output structure",
          "Preview and edit output before saving",
          "Meta title, meta description, focus keyword and slug for Rank Math and Yoast",
          "Periodic generation with configurable spacing between items",
          "Automatic new product and article suggestions from competitor analysis",
        ],
      },
      "product-wizard-media": {
        title: "Product wizard and image processing",
        description: "Adding a product in seven steps, with automatic image, logo and banner processing.",
        points: [
          "Steps: name and category, gallery, summary, description, type and price, SEO, submit",
          "WebP conversion and srcset generation with sharp",
          "Store logo overlay with selectable size",
          "AI promo banner inserted after the description's first paragraph",
          "Reading product labels from photos and extracting specs with AI",
        ],
      },
      "multisite-sync": {
        title: "Multi-store sync",
        description:
          "Each store connects with an Application Password and data syncs periodically in both directions with WooCommerce.",
        points: [
          "Products, posts and categories every 10 minutes; orders every hour",
          "Publishing simple, variable and tiered-price products",
          "USD-to-toman price conversion and bulk price updates",
          "Persian error messages for WordPress connection failures",
        ],
      },
      "orders-notifications": {
        title: "Orders, invoices and notifications",
        description:
          "WooCommerce orders appear in the panel; notifications and invoices go out automatically by status.",
        points: [
          "Order list and details with status editing",
          "Scheduled Telegram order notifications without duplicates",
          "Public invoice page, PDF export and sending invoices to Telegram",
          "SMS with configurable rules for admins",
        ],
      },
      "ai-infrastructure": {
        title: "AI infrastructure and deployment",
        description:
          "A multi-provider AI layer with usage tracking and a dedicated proxy, on a server with automated deployment.",
        points: [
          "Provider and model choice: Gemini, OpenAI, OpenRouter and Ollama",
          "Token usage and estimated cost in the panel",
          "Xray managed from the backend for reliable Gemini access",
          "Deployment with GitHub Actions, GHCR and PM2",
          "PostgreSQL with its own schema alongside the ERP database",
        ],
      },
    },
  },
  "warehouse-ops": {
    title: "WooCommerce Warehouse Manager",
    summary:
      "The “Warehouse” module of the Word Flow plugin: authorized operators edit price, sale price, quantity and stock status of WooCommerce products and variations in one fast table, then export or print reports.",
    role: "Module author (part of the Word Flow plugin)",
    features: [
      "Simple products and every variation with image, SKU, category and attributes",
      "Double-click inline editing of price, sale price, quantity and status",
      "Bulk save of up to 200 rows with a pending-changes bar",
      "Search, category, product type and stock-status filters",
      "Stats cards, Excel-friendly CSV export and printable report",
      "Access only for permitted operators",
    ],
    problem:
      "Warehouse operators had to open each product's edit screen to update price and stock, and needed access to the whole WordPress dashboard to do it.",
    solution:
      "A dedicated AJAX table under the Products menu with inline editing and bulk save, gated by Word Flow's granular permissions.",
    sections: {
      "inventory-grid": {
        title: "Unified inventory table",
        description:
          "Every product and variation in one paginated table, so operators work without opening product pages.",
        points: [
          "Each variation on its own row labelled “Color: … · Size: …”",
          "Covers published, draft, private and pending products",
          "Updates go through WooCommerce CRUD, not direct database writes",
          "“Warehouse” submenu only for permitted operators",
        ],
      },
      "inline-editing": {
        title: "Inline editing and bulk save",
        description: "Operators edit several rows and save or discard them all at once.",
        points: [
          "Double-click to edit, with changed rows highlighted",
          "“n unsaved changes” bar with discard and save",
          "Bulk save of up to 200 rows with success and failure report",
          "Warning before leaving with unsaved changes",
        ],
      },
      "filters-reports": {
        title: "Filters, stats and reports",
        description: "Search, live stats and exports for stock control.",
        points: [
          "Live search and category, type and stock-status filters",
          "Total, in-stock, out-of-stock and low-stock cards using WooCommerce's threshold",
          "11-column Excel-friendly CSV export (up to 5,000 rows)",
          "Print view with site name, date and active filters",
        ],
      },
    },
  },
  "mobile-auth": {
    title: "Mobile Auth — Phone Login",
    summary:
      "A WordPress/WooCommerce plugin for phone-number login and sign-up with SMS one-time codes, a header popup, a replaced My Account page and phone verification at checkout.",
    role: "Plugin author",
    features: [
      "Combined login and sign-up with phone number and SMS code",
      "Melipayamak pattern SMS with several fallback routes",
      "One box per digit and a resend timer",
      "Header login popup with configurable selectors",
      "Replaced My Account form and wp-login",
      "Required phone verification for guests at checkout",
    ],
    problem:
      "Default WordPress/WooCommerce email-and-password forms are slow and error-prone for Iranian users, and guest checkout happens without a valid phone number.",
    solution:
      "A single-field “log in or sign up with your phone” flow that sends the code with a Melipayamak pattern, creates or logs in the user automatically and attaches the number to the WooCommerce order.",
    sections: {
      "otp-flow": {
        title: "Code-based login flow",
        description:
          "Users enter only their number. A code with configurable length and expiry is sent, and on confirmation they're logged in or signed up automatically.",
        points: [
          "Iranian number normalization and Persian/Arabic digit conversion",
          "4–8 digit codes with 1–60 minute expiry",
          "Automatic user creation with the number saved as billing phone",
          "Safe redirect back to the previous page after login",
        ],
      },
      "sms-gateway": {
        title: "SMS gateway integration",
        description:
          "Codes are sent with a Melipayamak pattern; on failure the other routes are tried in order.",
        points: [
          "Order: SOAP, then the new pattern-send API, then REST endpoints",
          "Pattern variables extracted from the template text",
          "Persian error messages for common failures such as the carrier blacklist",
          "Test-SMS button in the admin panel",
        ],
      },
      "woocommerce-checkout": {
        title: "Checkout integration",
        description:
          "When a guest with a full cart reaches checkout, the phone-login popup opens and the verified number is attached to the order.",
        points: [
          "Disables guest checkout while backing up and restoring WooCommerce settings",
          "Autofills the billing phone",
          "Saves the number on the order when it's created",
        ],
      },
      "ui-customization": {
        title: "Customizable form and popup",
        description: "Admins set the login form's look and placement from a tabbed Persian panel.",
        points: [
          "Background image, logo and button labels",
          "Login and sign-up form field builder",
          "CSS selectors for opening the popup from theme buttons",
          "[mobile_auth_login_register] shortcode and one-click login page creation",
        ],
      },
    },
  },
  "irankala-companion": {
    title: "IranKala Companion",
    summary:
      "A modular companion plugin for the IranKala theme that redesigns the WooCommerce account area, the header account menu and theme texts without editing theme files.",
    role: "Plugin developer",
    features: [
      "New account dashboard for desktop and mobile with order stats",
      "No-reload navigation between account sections with prefetch and cache",
      "Visibility and order control for 14 account menu items",
      "Theme text overrides without editing files",
      "Product discovery on the dashboard: popular categories, sale and newest",
      "Settings panel inside the theme menu with module toggles",
    ],
    problem:
      "Changes to the commercial IranKala theme were lost on every update, and the default WooCommerce account page was slow and not configurable.",
    solution:
      "A modular plugin with a service container and a settings panel embedded in the theme options, redesigning the account area via hooks and WooCommerce template overrides.",
    sections: {
      "account-dashboard": {
        title: "Account dashboard",
        description:
          "WooCommerce account templates are replaced with custom versions, with separate desktop and mobile layouts.",
        points: [
          "Cards for active and completed orders, cart and wishlist",
          "Time-based Persian greeting and complete-your-profile prompt",
          "Popular categories and sale, featured and new product sliders",
          "Cached stats and products for fast loading",
        ],
      },
      "soft-navigation": {
        title: "Fast no-reload navigation",
        description:
          "Moving between account sections fetches only the content needed instead of reloading the full page.",
        points: [
          "Lightweight JSON response per account section",
          "Hover prefetch and a 60-second cache",
          "Stale requests cancelled with AbortController",
          "URL sync via the History API, loading skeleton and full-reload fallback",
        ],
      },
      "account-menu-control": {
        title: "Account menu control",
        description:
          "The store manager decides which items appear in the header menu and account sidebar, and in what order.",
        points: [
          "14-item catalog: orders, addresses, order tracking, notifications, compare and more",
          "Automatic detection of other plugins' wallet endpoints",
          "Sidebar ordering with up/down buttons",
          "User card with name and phone number",
        ],
      },
      "modular-architecture": {
        title: "Modular architecture and theme integration",
        description:
          "The core uses a service container, each feature is an independent module, and settings appear inside the theme's own panel.",
        points: [
          "Toggleable modules and a hook for registering external modules",
          "Runs only when the IranKala theme is active",
          "“Companion” tab in theme settings with secure AJAX saving",
          "Text overrides via gettext filters",
        ],
      },
    },
  },
  velocitycore: {
    title: "VelocityCore — Speed Optimization",
    summary:
      "A modular WordPress speed plugin built from a real store's (Kasra Eminence) Lighthouse report, optimizing images, CSS and JS, caching, CLS, the database and accessibility.",
    role: "Plugin developer for Kasra Eminence",
    features: [
      "Audit tool with server scan, live browser scan and JSON export",
      "Smart lazy-loading and LCP image preload",
      "JS delayed until first interaction and non-blocking CSS",
      "Browser cache and Gzip rules in .htaccess",
      "Manual or weekly database cleanup",
      "CLS fixes and accessibility improvements",
    ],
    problem:
      "The store scored about 59 on Performance with CLS around 0.7, over 200 requests and roughly 10 MB of resources.",
    solution:
      "Each Lighthouse finding became a separate toggleable module, and a built-in audit tool scans requests and exports JSON for deeper analysis.",
    sections: {
      "performance-audit": {
        title: "Performance audit and analysis",
        description:
          "The plugin reads the page server-side or measures it in the browser with the Performance API, then stores the resource list and issues.",
        points: [
          "HTML parsing: scripts, styles, images, srcset and iframes",
          "Size and cache-header check for each resource",
          "Automatic issue detection: request count, heavy pages, TTFB, unsized images",
          "Last 15 reports kept, with JSON copy, download and delete",
        ],
      },
      "asset-optimization": {
        title: "CSS and JavaScript optimization",
        description:
          "Scripts are deferred or delayed until the first interaction, and non-critical CSS loads without blocking render.",
        points: [
          "JS delayed until scroll, touch or keyboard, with configurable timeout",
          "Extensible exclusion list via a filter",
          "Critical CSS to prevent layout flashes",
          "Removes unneeded home-page CSS/JS and extra Elementor assets",
        ],
      },
      "images-cls": {
        title: "Images, layout stability and accessibility",
        description:
          "Images get dimensions, decoding=async and lazy-loading to cut download size and layout shift.",
        points: [
          "Width and height added to images across the HTML output",
          "First images excluded from lazy-load, with hero preload",
          "srcset limits and aspect-ratio space reservation",
          "Zoom up to 5×, 44 px minimum touch targets and aria-labels",
        ],
      },
      "cache-cleanup": {
        title: "Caching, database and core cleanup",
        description:
          "Cache and compression rules are written in one click, and the database is cleaned manually or weekly.",
        points: [
          "One-year cache headers for static files and Gzip",
          "Cleanup of revisions, trash, spam and transients with WP-Cron",
          "Disables emoji, oEmbed and XML-RPC and tunes Heartbeat",
          "Removes all data and cron jobs on uninstall",
        ],
      },
    },
  },
  "word-flow": {
    title: "Word Flow",
    summary:
      "A granular access-control plugin for WooCommerce operators and sellers, with a restricted operator dashboard and a warehouse panel.",
    role: "Plugin author",
    features: [
      "Per-user granular access across 5 modules: orders, products, posts, pages and media",
      "Base role with ready defaults and overrides",
      "WordPress capabilities rewritten on the fly for operators",
      "Menu filtering, blocked-page redirects and hidden buttons",
      "“Sections manager” and “My activities” panels",
      "Warehouse module with inline price and stock editing",
    ],
    problem:
      "WordPress's default roles are coarse: an operator gets either the whole dashboard or nothing.",
    solution:
      "A module-and-action permission registry that rewrites real WordPress capabilities for each operator and hides menus and buttons they aren't allowed to use.",
    sections: {
      "permission-engine": {
        title: "Granular permission engine",
        description:
          "Each action (such as “delete coupon” or “edit brand”) maps to WordPress capabilities, and only those stay active for the operator.",
        points: [
          "Module and action registry: categories, brands, tags, attributes, reviews and coupons",
          "user_has_cap rewriting, with create and delete controlled via map_meta_cap",
          "Role defaults and extension filters",
          "Public wf_user_can() API for other plugins",
        ],
      },
      "operator-workspace": {
        title: "Restricted operator dashboard",
        description:
          "Operators see only the menus and buttons they're allowed to use and land on their first permitted section after login.",
        points: [
          "Removed menus and redirects away from blocked pages",
          "Hidden add, import and delete actions",
          "“My activities” shortcuts based on permissions",
          "Safe media upload with file type and size limits",
        ],
      },
      "sections-manager": {
        title: "Sections and operator management",
        description:
          "The site admin searches users, makes them operators and saves permissions without reloading.",
        points: [
          "Live user search by name, email or username",
          "Load role defaults and adjust them",
          "Operator list with active module counts",
          "Sidebar UI with no-reload tabs",
        ],
      },
    },
  },
  "eminence-catalog": {
    title: "Eminence Product Catalog",
    summary:
      "A brand-based catalog plugin that shows WooCommerce products in brand tabs and a fast, SEO-ready table, and builds toman prices from USD prices and the daily rate.",
    role: "Plugin developer",
    features: [
      "Custom tabs with logo, order and several brands per tab",
      "AJAX loading per brand and direct brand links",
      "Smart “in stock” and “call us” (WhatsApp) statuses",
      "USD-to-toman pricing at the daily rate",
      "Excel export with images, printing and Schema.org",
    ],
    problem:
      "An audio and power equipment store with many brands and fluctuating USD prices had no up-to-date, printable, fast catalog for customers.",
    solution:
      "A catalog on WooCommerce brands with logo tabs, AJAX loading, Excel export and printing, and a USD-to-toman tool per brand group.",
    sections: {
      "brand-tabs": {
        title: "Brand tabs and product table",
        description:
          "The catalog is organized into logo tabs, and each brand's products appear in a responsive table with smart statuses.",
        points: [
          "Logo picked from the media library; several brands per tab",
          "Columns for row, category, image, name, short description and price",
          "“Direct contact” WhatsApp button with a prefilled message naming the product",
          "Manual drag-and-drop product ordering",
        ],
      },
      "usd-pricing": {
        title: "USD pricing and daily rate",
        description: "The admin enters USD prices and the plugin builds WooCommerce toman prices at the daily rate.",
        points: [
          "USD price for simple products and each variation",
          "Toman price = USD × rate, synced to the variable parent",
          "Rate stored per brand group",
          "Bulk percentage price increases",
        ],
      },
      "export-print": {
        title: "Excel export and printing",
        description: "Customers or admins get each brand's list as an Excel file or a printout.",
        points: [
          "XLSX generated without an external library",
          "Embedded images and a title with the item count",
          "Landscape A4 printing: USD column for admins, price for the public",
        ],
      },
      "seo-performance": {
        title: "SEO and speed",
        description: "Structured data and optimized loading make the catalog search-engine ready.",
        points: [
          "ItemList JSON-LD with Product, Brand and Offer",
          "Per-row microdata and Open Graph tags",
          "Inline critical CSS for better LCP",
          "Assets load only on the catalog page",
        ],
      },
    },
  },
  "live-chat-box": {
    title: "WP Live Chat Box — Store Chat Assistant",
    summary:
      "A Persian chat assistant for WooCommerce stores that answers customers automatically using FAQs, product search, order tracking and, optionally, cloud AI.",
    role: "Plugin author",
    features: [
      "Chat widget with history, typing indicator and product cards",
      "Three intelligence modes: local (no API), hybrid and cloud",
      "Optional OpenAI, Gemini, OpenRouter and DeepSeek connection",
      "Persian product search and in-chat order tracking",
      "FAQ bank with similarity matching",
      "WhatsApp button on products and Iranian messenger links",
    ],
    problem:
      "Customers ask the same questions about stock, price, shipping and order status, manual replies are slow, and foreign AI APIs aren't always reachable from Iran.",
    solution:
      "A layered reply pipeline — greeting, FAQ, product search, order tracking, local site knowledge and finally optional AI — that also works without international internet. It's an automated assistant, not live chat with a human operator.",
    sections: {
      "smart-pipeline": {
        title: "Smart reply pipeline",
        description:
          "Each message passes through several layers in turn to find the fastest, most accurate answer from the site's own data.",
        points: [
          "Intent detection: address, phone, shipping, search, compare and list",
          "FAQ matching by text similarity and keyword score",
          "Conversation memory for follow-ups like “what's the price?”",
          "Local responder from an index of products, posts and pages",
        ],
      },
      "ai-integration": {
        title: "Optional cloud AI",
        description:
          "In hybrid or cloud mode, the question is sent to a language model with related products and the chat history.",
        points: [
          "Supports OpenAI, Gemini, OpenRouter and DeepSeek",
          "System prompt with role, tone, language and business context",
          "Short answers, with prices and links taken only from real data",
          "Proxy support and a connection-test button in the panel",
        ],
      },
      "product-search": {
        title: "Product search and order tracking",
        description:
          "Persian text is normalized and products are scored; an order number shows the order's status and items.",
        points: [
          "Live search while typing, with product cards",
          "Multi-product comparison and an “in stock only” filter",
          "Order lookup by number with Persian digit conversion",
          "Persian order status and item list",
        ],
      },
      "widget-customization": {
        title: "Widget design and placement",
        description: "The widget's look, position and pages are configured from a Persian panel.",
        points: [
          "Colors, font, size, shadow and saved color palettes",
          "Mobile-only or desktop-only display and page selection",
          "WhatsApp, phone, Rubika, Soroush, Eitaa and Bale links",
          "Configurable welcome message",
        ],
      },
    },
  },
  "mirkazmi-consultation": {
    title: "Mirkazmi Consultation",
    summary:
      "A legal-consultation form plugin for the Mirkazmi law firm that stores and tracks requests and sends pattern SMS to the admin and the client.",
    role: "Plugin author",
    features: [
      "Consultation form on a page and in a popup",
      "Topic, urgency and time-package selection",
      "Paid packages with card number display and copy",
      "Requests panel with status and Jalali dates",
      "Pattern SMS to the admin and the client",
      "Floating “urgent call” button",
    ],
    problem:
      "Consultation requests from the law firm's site weren't recorded or tracked in a structured way, and the office wasn't notified of new ones right away.",
    solution:
      "Page and popup consultation forms with time packages and card-to-card payment, a request admin panel with statuses, and automatic SMS for the admin and client.",
    sections: {
      "consultation-form": {
        title: "Page and popup consultation form",
        description: "Clients fill in a short form on a dedicated page or in the “Book a session” popup.",
        points: [
          "Two shortcodes for page and popup",
          "Criminal, property, contract and administrative topics",
          "Secure AJAX submission and a personalized success message",
          "Compatible with Woodmart and Elementor popups",
        ],
      },
      "packages-payment": {
        title: "Consultation packages and payment",
        description: "Consultation times are defined as packages; paid ones show payment details after submission.",
        points: [
          "15-minute, 30-minute and in-person packages",
          "Edit label, price and payment requirement from the panel",
          "Show and copy the card number in one click",
        ],
      },
      "requests-admin": {
        title: "Requests admin panel",
        description: "All requests are tracked in a dedicated panel with status and Jalali date.",
        points: [
          "“Pending”, “called” and “closed” statuses",
          "AJAX status changes",
          "Request counts per status",
          "Jalali date conversion",
        ],
      },
      "sms-notifications": {
        title: "Pattern SMS and urgent call",
        description:
          "Each request triggers a pattern SMS to the admin and the client, and an urgent call button is always available on the site.",
        points: [
          "Name, phone, topic, urgency, time and amount variables",
          "Several fallback send routes and Persian error codes",
          "Connection test and test SMS",
          "Urgent call button with configurable position, color and size",
        ],
      },
    },
  },
  kazhol: {
    title: "Kazhol",
    summary:
      "A WordPress and WooCommerce store for phones, tablets and accessories, run by an official digital-goods importer in Tehran, with a mobile-first shopping experience and same-day delivery in the city.",
    role: "WordPress & WooCommerce setup and management",
    features: [
      "Samsung, Xiaomi, iPhone and Honor catalog organized by series",
      "Bottom navigation, search and mobile-number sign-in",
      "Wishlist and order tracking",
      "Payment gateway, trust seal and 18-month warranty",
    ],
    problem:
      "Phone prices and stock change constantly, and mobile shoppers need to find a model fast and trust the seller.",
    solution:
      "A WooCommerce store with series-based menus, a mobile-first interface and trust signals, with prices and stock kept up to date.",
    sections: {
      "mobile-catalog": {
        title: "Phone and tablet catalog",
        description:
          "Products are organized by brand and series so shoppers land directly on the model they want.",
        points: [
          "Samsung A, M, S, Note and Z Fold/Flip series",
          "Xiaomi Redmi, POCO and Mi, plus iPhone 12 to 14",
          "Tablets and accessories such as cases and headphones",
          "Series-based mega menu and product search",
        ],
      },
      "mobile-shopping": {
        title: "Mobile-first shopping",
        description: "Most orders come from phones, and the store interface is built around that.",
        points: [
          "Bottom bar: home, categories, cart, wishlist and account",
          "Sign-in and sign-up with a mobile number",
          "Wishlist and order tracking",
          "Device activation guide",
        ],
      },
      "trust-delivery": {
        title: "Trust, payment and delivery",
        description:
          "Trust signals and fast shipping reduce hesitation when buying expensive devices.",
        points: [
          "Same-day delivery across Tehran's 22 districts",
          "18-month warranty and e-commerce trust seal",
          "IranKish payment gateway",
          "Phone and WhatsApp support",
        ],
      },
    },
  },
  eboshin: {
    title: "Eboshin",
    summary:
      "A WordPress and WooCommerce store for digital goods and home appliances that offers online, in-store and installment purchases side by side.",
    role: "WordPress & WooCommerce setup and management",
    features: [
      "Phones, tablets, laptops, consoles and home appliances in one store",
      "Mobile navigation, mobile-number sign-in and wishlist",
      "Online ordering, in-store pickup and installment purchases",
      "Partner buying, a returns policy and an authenticity guarantee",
    ],
    problem:
      "A retailer with a physical branch, installment buyers and trade partners wanted every sales channel available on one website.",
    solution:
      "A WooCommerce store with a broad catalog, a mobile-first interface and dedicated pages for in-store, installment and partner purchases.",
    sections: {
      "product-range": {
        title: "Product range",
        description: "From phones and consoles to home appliances, all in one catalog.",
        points: [
          "iPhone, Samsung and Xiaomi phones",
          "Tablets, laptops, all-in-ones and game consoles",
          "Home appliances and lighting",
          "Accessories such as chargers, headsets, speakers and cases",
        ],
      },
      "shopping-experience": {
        title: "Shopping experience",
        description: "A mobile-first interface that shortens the path from finding a product to paying.",
        points: [
          "Bottom navigation bar and product search",
          "Mobile-number sign-in",
          "Wishlist and order tracking",
          "FAQ and phone activation guide",
        ],
      },
      "omnichannel-sales": {
        title: "Online, in-store and installment sales",
        description: "The website works alongside the physical branch and covers several ways to buy.",
        points: [
          "In-store purchase and branch pickup",
          "Installment purchases",
          "Partner buying for resellers",
          "Fast shipping, authenticity guarantee and returns policy",
        ],
      },
    },
  },
  "kasra-eminence": {
    title: "Kasra Eminence",
    summary:
      "A WooCommerce store for pro audio gear, stabilizers and batteries. My part: the custom catalog and speed plugins, content and data management through Smart Assistant, and the integration API with the warehouse system.",
    role: "Custom plugins, content management and integration",
    features: [
      "Brand catalog with USD pricing at the daily rate",
      "Speed plugin built from this site's Lighthouse report",
      "Product sync and content generation with Smart Assistant",
      "Integration API with the Anbar One ERP for price, stock and publish status",
    ],
    problem:
      "Hundreds of products with fluctuating currency prices, technical descriptions and warehouse stock made manual store management slow and error-prone.",
    solution:
      "The site runs on WooCommerce with a ready-made theme, and my custom tools cover the catalog, speed, content and the warehouse connection.",
    sections: {
      "live-store": {
        title: "Store and custom plugins",
        description: "Two custom plugins written for this business run on the live store.",
        points: [
          "Eminence Catalog: brand tabs, USD pricing and Excel export",
          "VelocityCore: optimization based on the site's Lighthouse report",
          "Categories for speaker units, speakers, connectors, stabilizers and batteries",
        ],
      },
      "content-ops": {
        title: "Content management with Smart Assistant",
        description: "Products and categories sync with the Smart Assistant platform and their content is AI-generated.",
        points: [
          "Scheduled sync of products, categories and orders",
          "Product descriptions and SEO from prompt templates",
          "Bulk price updates from the USD rate",
        ],
      },
      "erp-integration": {
        title: "Warehouse system integration",
        description:
          "A secure API between Smart Assistant and the Anbar One ERP exchanges products, prices and stock.",
        points: [
          "Products, prices and stock pulled from the warehouse with an integration key",
          "“Ready for site”, “published” and “completed” statuses reported to the ERP",
          "Product deletions notified to the warehouse",
        ],
      },
    },
  },
  chirokala: {
    title: "Chirokala",
    summary:
      "A home-appliance online store on WordPress and WooCommerce with a broad category tree, whose category content and product sync run through Smart Assistant.",
    role: "Store setup, category architecture and content management",
    features: [
      "Eight parent categories and 18+ subcategories",
      "AI-written, SEO-ready description for every category",
      "Ajax filtering on the shop page",
      "Custom glassmorphism theme (in development)",
    ],
    problem:
      "A seller with a large, varied home-appliance catalog needed a Persian online store with tidy categories and SEO content.",
    solution:
      "The store launched on WooCommerce with a ready-made theme and Elementor, a multi-level category tree was built, and category descriptions were generated with AI and synced. A custom theme is being developed separately.",
    sections: {
      "storefront-catalog": {
        title: "Storefront and product catalog",
        description: "A live store focused on high-demand home appliances in the Iranian market.",
        points: [
          "Featured sections for samovars, vacuum cleaners, blanket washers and heaters",
          "Before/after discount prices and stock status",
          "Technical spec table on product pages",
        ],
      },
      "category-architecture": {
        title: "Category architecture and SEO",
        description:
          "A multi-level category tree with long, consistent descriptions generated with Smart Assistant and synced to WordPress.",
        points: [
          "Categories such as large appliances, kitchen, heating and cooling, and water purification",
          "Three-part descriptions: introduction, benefits and call to action",
          "Scheduled two-way sync with WordPress",
        ],
      },
      "custom-theme": {
        title: "Custom theme (in development)",
        description: "An object-oriented WordPress theme with a glassmorphism design to replace the ready-made one.",
        points: [
          "Autoloader and separate classes for admin, options and WooCommerce",
          "Settings panel with color picker and media uploader",
          "Home page with hero, popular categories, special offers and brands",
          "Ajax cart and overridden shop templates",
        ],
      },
    },
  },
  "sanduq-bilal": {
    title: "Bilal Habashi Fund",
    summary:
      "An admin panel for an interest-free loan fund covering members, deposits, loans and installments, with a Telegram bot for members and automatic notifications to the manager.",
    role: "Full-stack design and development",
    features: [
      "Dashboard with members, active loans, repayments and fund balance",
      "Member management with national ID and monthly amount",
      "Loans with a guard against a second loan while one is active",
      "Telegram bot for balance, loan remaining, receipts and loan requests",
      "Telegram receipt approval in the panel with automatic payment entry",
      "Automatic installment due reminders",
    ],
    problem:
      "Running the fund by hand with a ledger and scattered messages made deposits, loan balances and receipts hard to track and opaque.",
    solution:
      "A mobile-first web panel with a Jalali calendar and a Telegram bot through which members send receipts and loan requests that the admin approves in the panel.",
    sections: {
      "member-fund": {
        title: "Members and fund management",
        description: "Member details, deposits and the fund's overall status on the dashboard and in reports.",
        points: [
          "Member table with national ID, Jalali join date and monthly amount",
          "Per-member deposit details with payment history",
          "Fund status, operational stats and cash-flow reports",
          "Final fund balance calculation",
        ],
      },
      "loans-repayments": {
        title: "Loans and installment repayments",
        description: "Loan entry, balance tracking and installment recording, with business rules on the server.",
        points: [
          "Loans with amount, date, repayment term and status",
          "No new loan for a member with an active one",
          "Installments deducted from the loan balance on receipt approval",
          "List of approved requests awaiting disbursement",
        ],
      },
      "telegram-bot": {
        title: "Member Telegram bot",
        description: "Members link their account with their national ID and use the bot menu for fund services.",
        points: [
          "Menu: payment, deposit balance, payment list, loan request, loan remaining",
          "Receipt photos for personal or family payments",
          "Loan requests with result notifications",
          "Long polling or webhook, with proxy support",
        ],
      },
      "receipt-approval": {
        title: "Receipt approval and notifications",
        description:
          "Submitted receipts enter an approval queue; once approved they become payments and everyone is notified.",
        points: [
          "Receipt queue with pending, approved and rejected-with-reason statuses",
          "Family receipts split across several members",
          "Editable message templates for member, group and manager",
          "Installment reminders with configurable lead days",
        ],
      },
    },
  },
  "whatsapp-ledger": {
    title: "HesabTrack — WhatsApp Receipt Manager",
    summary:
      "A prototype web panel that receives customer messages and payment receipts through the official WhatsApp Business webhook so an accountant can review, approve or reject them.",
    role: "Full-stack design and development",
    features: [
      "Official WhatsApp Cloud API webhook",
      "Message, caption and attachment storage without duplicates",
      "Review inbox with colored statuses",
      "Stats dashboard and auto refresh",
    ],
    problem:
      "Receipts customers send on WhatsApp get lost in chats, and the accountant has no structured way to review them.",
    solution:
      "Incoming WhatsApp messages are stored in PostgreSQL via Meta's webhook and managed in a web inbox with “new, reviewing, approved, rejected” statuses.",
    sections: {
      "webhook-ingestion": {
        title: "Receiving WhatsApp messages",
        description: "An Express backend endpoint verifies and receives WhatsApp Cloud API events.",
        points: [
          "Handshake with a verify token",
          "Messages extracted from Meta's event structure",
          "Image or document type and ID stored",
          "Upsert to avoid duplicates",
        ],
      },
      "review-inbox": {
        title: "Receipt review inbox",
        description: "A two-column interface for browsing messages and deciding on each receipt.",
        points: [
          "Colored statuses: new, reviewing, approved, rejected",
          "Message text, number and send time in the Persian calendar",
          "“Approve receipt” and “Reject transaction” buttons",
          "Stats cards and a review progress bar",
        ],
      },
    },
  },
  ocfr: {
    title: "OCFR — Image Analysis and Persian OCR",
    summary:
      "A prototype web tool that extracts Persian and English text, dominant colors, dimensions and geometric shapes from an image using FastAPI.",
    role: "Front-end and API design and development",
    features: [
      "Drag-and-drop upload with preview",
      "Persian and English OCR with EasyOCR",
      "5 dominant colors via K-Means",
      "Simple shape detection and file details",
    ],
    problem: "Extracting Persian text and basic details from images usually needs scattered or offline tools.",
    solution:
      "A simple Next.js interface connected to a Python API that runs OCR and several computer-vision analyses in one request.",
    sections: {
      "persian-ocr": {
        title: "Persian text extraction",
        description: "Bilingual OCR with EasyOCR on CPU, behind a simple upload interface.",
        points: [
          "Low-confidence results filtered out",
          "Right-to-left text with a copy button",
          "Persian error message when the service is unavailable",
          "Other analyses still run if OCR fails",
        ],
      },
      "vision-analysis": {
        title: "Visual image analysis",
        description: "Classic computer-vision analysis with OpenCV and NumPy.",
        points: [
          "K-Means clustering with colors converted to hex",
          "Canny edge detection and contour finding",
          "Shape classification: rectangle, square or circle",
        ],
      },
    },
  },
  speedwordpress: {
    title: "Speed WordPress — Speed Monitoring & Optimization",
    summary:
      "A WordPress speed monitoring and optimization system: a log-collector plugin, an analysis backend and a Next.js dashboard that finds the slowest URLs and applies optimization rules remotely — plus a standalone “Site Optimizer” plugin.",
    role: "Full-stack design and development",
    features: [
      "Response time, TTFB, memory and queries recorded per request",
      "Batched log sending with WP-Cron and de-duplication",
      "Automatic analysis and Persian reports",
      "Suggested optimization rules applied in one click",
      "Before/after response-time comparison",
      "Standalone plugin with scanning, domain blocking and database cleanup",
    ],
    problem:
      "WordPress site owners didn't know exactly which page, AJAX request or query was slowing their site down.",
    solution:
      "An automated loop: the plugin records and sends per-request metrics, the backend analyzes them and builds reports, and the admin enables an optimization rule for that URL from the panel.",
    sections: {
      "agent-plugin": {
        title: "Log-collector plugin",
        description: "A lightweight WordPress plugin that records metrics at the end of each request and sends them in batches.",
        points: [
          "URL, status code, response time, memory and queries recorded",
          "Slow-query profiling only while logging",
          "De-duplication, noise filtering and sensitive-parameter scrubbing",
          "REST API for status, settings and log sending",
        ],
      },
      "analysis-dashboard": {
        title: "Analysis backend and monitoring dashboard",
        description:
          "An Express and MongoDB service analyzes logs, and a Next.js dashboard shows exactly which URLs need optimizing.",
        points: [
          "Per-site thresholds and issue severity scoring",
          "Scheduled reports and alerts when logs stop arriving",
          "Response-time charts and a filterable log table",
          "Encrypted WordPress connection credentials",
        ],
      },
      "optimization-rules": {
        title: "Log-driven optimization",
        description:
          "An “observe, group, suggest, apply” path that turns report findings into executable rules in WordPress.",
        points: [
          "Rule suggestions with confidence and toggles",
          "Guest page cache, lazy-load and script defer",
          "Selective plugin disabling per URL or AJAX action",
          "Rule rollback and before/after impact comparison",
        ],
      },
      "site-optimizer": {
        title: "Standalone Site Optimizer plugin",
        description: "A modular plugin that detects and blocks slow resources in the dashboard and front end, with no external service.",
        points: [
          "Automatic scan of dashboard menus and front-end pages",
          "Slow domains blocked or delayed with allow and block lists",
          "Lighthouse-style image analysis",
          "Safe cleanup of orphaned database tables with preview",
        ],
      },
    },
  },
};
