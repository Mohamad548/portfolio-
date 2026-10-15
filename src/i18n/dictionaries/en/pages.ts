import type { PagesDictionary } from "../types";

export const pages: PagesDictionary = {
  home: {
    hero: {
      available: "Open to work",
      greeting: "Hi, I'm Mohamad Mahmodi",
      headingLead: "Your ideas,",
      headingHighlight: "lasting web experiences.",
      description:
        "Designing and building modern interfaces with React, Next.js and WordPress, with a sharp eye for user experience and the power of AI tools.",
      techLabel: "Core technologies",
      aiPill: "Limitless design with AI",
      viewProjects: "View projects",
      startCollaboration: "Start a collaboration",
      photoAlt: "Mohamad Mahmodi, front-end developer",
      badgeTop: "From idea to experience",
      badgeBottom: "Creativity, powered by AI",
      badgeBottomNote: "Smart development, human precision",
    },
    expertise: {
      label: "Areas of expertise",
      items: {
        interfaces: {
          title: "Modern, responsive interfaces",
          description: "From design details to a smooth experience on every screen",
        },
        stack: {
          title: "Built with Next.js & WordPress",
          description: "Stores, dashboards and plugins tailored to real project needs",
        },
        ai: {
          title: "Creativity with AI",
          description: "From building interfaces to realistic ad banners and videos with AI",
        },
      },
    },
    featured: {
      title: "Selected projects",
      description: "From a real need to a usable experience: a few examples of my work.",
      viewAll: "All projects",
      count: "{count} projects",
      countNote: "across web development, e-commerce and practical tools",
    },
    ai: {
      headingLead: "Bigger ideas,",
      headingHighlight: "fresh possibilities.",
      points: ["Exploring visual ideas", "Building and problem solving", "Reviewing output carefully"],
      more: "More about me",
    },
    aiStudio: {
      title: "AI-made ad images & videos",
      description:
        "Realistic ad banners and seamless videos made with Google Flow and specialized AI tools, guided by precise prompting from idea to final cut.",
      cta: "Enter the AI Studio",
    },
    toolkit: {
      label: "Skills and tools",
      title: "Tools in service of ideas",
      description: "My core expertise is front-end, backed by an understanding of the full path to shipping a web product.",
      viewAll: "All skills",
      cards: {
        frontend: {
          title: "Front-end",
          tools: "React · Next.js · TypeScript",
          note: "Building interfaces and practical dashboards",
        },
        wordpress: {
          title: "WordPress",
          tools: "WordPress · WooCommerce · PHP",
          note: "Online stores and custom plugins",
        },
        ai: {
          title: "Artificial intelligence",
          tools: "Prompt Engineering · Google Flow",
          note: "Development, ad banners and videos with AI",
        },
        backend: {
          title: "Backend & databases",
          tools: "Node.js · MySQL · PostgreSQL",
          note: "Familiar with backend and various databases",
        },
      },
    },
    contact: {
      eyebrow: "Your next project, maybe together",
      heading: "Let's give your idea a great start.",
      description:
        "I'm ready to design a fresh experience, build your website or join your team. Let's talk about what you have in mind.",
      cta: "Let's talk",
    },
  },
  about: {
    title: "About me",
    details: {
      born: "Born",
      maritalStatus: "Marital status",
      military: "Military service",
      residence: "Based in",
    },
    journeyTitle: "Career path",
    journey: [
      "2020 — Started with WordPress and e-commerce stores",
      "2022 — Front-end development and WooCommerce customization at Shahin Tejarat",
      "2023 — Maktab Sharif React / Next.js bootcamp (400+ hours)",
      "2025+ — Next.js dashboards, custom plugins, AI content tools and AI image & video production",
    ],
    viewCertificate: "View certificate",
  },
  skills: {
    title: "Technical skills",
    description:
      "From React, Next.js and WordPress to AI-assisted design, development and image & video production, plus familiarity with Node.js, MySQL and PostgreSQL.",
  },
  experience: {
    title: "Work & education",
    description:
      "A path from hardware and WordPress to Next.js dashboards and custom e-commerce tools.",
    types: { work: "Work", education: "Education", course: "Course" },
  },
  certificates: {
    title: "Certificates & courses",
    description: "Training credentials related to front-end and React.",
  },
  projects: {
    title: "Projects & portfolio",
    description:
      "From live stores to OTP and warehouse plugins, the Smart Content panel and Next.js systems.",
  },
  aiStudio: {
    title: "AI image & video studio",
    description:
      "Realistic ad banners and seamless videos made with Google Flow and specialized AI tools — natural, professional results that don't look artificial.",
    toolsLabel: "Main tools",
    capabilities: {
      adBanners: {
        title: "Realistic ad banners",
        description: "Product shots and campaign banners with natural light, materials and detail, ready for websites, stores and social media.",
      },
      realisticVideo: {
        title: "Realistic, seamless videos",
        description: "Clips that keep characters, setting and lighting consistent from start to finish, with no jumps between scenes.",
      },
      prompting: {
        title: "Precise prompting",
        description: "Turning ideas and ad briefs into structured prompts that control framing, style, camera motion and detail.",
      },
    },
    galleryTitle: "Image & video samples",
    galleryDescription: "A selection of banners and clips I've designed and produced with AI.",
    emptyTitle: "Samples are coming soon",
    emptyDescription: "Want to see ad banners and videos right now? Send me a message and I'll share samples.",
    emptyCta: "Request samples",
  },
  projectDetail: {
    back: "Back to projects",
    viewLive: "View live site",
    discussSimilar: "Discuss a similar project",
    problem: "Problem",
    solution: "Solution",
    role: "My role",
    technologies: "Technologies",
    features: "Key features",
  },
  contact: {
    title: "Let's work together",
    description:
      "Message me about a front-end project, a WordPress plugin, a Next.js dashboard or store optimization.",
    channels: { phone: "Phone", email: "Email", linkedin: "LinkedIn", location: "Location" },
    socialTitle: "Social networks",
    socialNote: "The fastest way to get in touch",
    form: {
      title: "Send a quick message",
      note: "Clicking send opens your default email app with a collaboration subject.",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      message: "Message",
      messagePlaceholder: "Tell me about the project or role...",
      submit: "Send email",
      mailSubject: "Collaboration / front-end project",
    },
  },
  notFound: {
    title: "Page not found",
    description: "This page doesn't exist or has been moved.",
    home: "Back to home",
    projects: "View projects",
  },
  footer: {
    available: "Open to a new collaboration",
    exploreTitle: "Get to know me",
    links: {
      about: "About me",
      skills: "Skills",
      projects: "Projects",
      aiStudio: "AI images & videos",
      contact: "Contact & collaboration",
    },
    featuredTitle: "Selected projects",
    rights: "© {year} {name} — All rights reserved.",
    signature: "Crafted with care, creativity and a little code",
  },
};
