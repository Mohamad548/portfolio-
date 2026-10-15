import type { PagesDictionary } from "../types";

export const pages: PagesDictionary = {
  home: {
    hero: {
      greeting: "Hi, I'm Mohamad Mahmodi",
      headingLead: "Web design & development",
      headingHighlight: "focused on user experience",
      description:
        "A web developer focused on modern user interfaces, fast websites and professional digital experiences.",
      viewProjects: "View projects",
      startCollaboration: "Start a collaboration",
      photoAlt: "Mohamad Mahmodi working on a laptop at his desk",
      growthCard: { title: "Growth & progress", description: "Continuous learning" },
      modernCard: { title: "Modern web development", description: "Creative solutions" },
      statsLabel: "At a glance",
      stats: {
        years: "Years in web development",
        projects: "Projects in the portfolio",
        live: "Live websites & systems",
      },
    },
    featured: {
      eyebrow: "Selected work",
      title: "A few of my recent projects",
      description:
        "Real projects built with a focus on design, technical quality, performance and user experience.",
      viewAll: "View all projects",
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
    services: {
      eyebrow: "Skills & services",
      title: "What I offer",
      description:
        "Technical skill, careful design and attention to detail, combined to build professional web experiences.",
      items: {
        ui: {
          title: "UI development",
          description: "Precise, responsive and user-friendly interfaces.",
        },
        web: {
          title: "Modern web development",
          description: "Professional websites with sound architecture and maintainable code.",
        },
        performance: {
          title: "Performance optimization",
          description: "Faster loading, smoother experience and stronger technical metrics.",
        },
        wordpress: {
          title: "WordPress & e-commerce",
          description: "Designing, customizing and extending store solutions that fit the business.",
        },
      },
      techTitle: "Tools & technologies",
      techDescription: "Technologies I have used in real, shipped projects.",
      viewSkills: "Skill details",
    },
    process: {
      eyebrow: "How we work together",
      title: "A simple path to a successful project",
      description: "Every step is transparent, so you always know where the project stands.",
      steps: {
        discover: {
          title: "Consultation & discovery",
          description: "Understanding the business goal, audience and exact scope.",
        },
        plan: {
          title: "Design & planning",
          description: "Defining page structure, interface and the technical roadmap.",
        },
        build: {
          title: "Development",
          description: "Clean, responsive, maintainable code with feedback at each stage.",
        },
        deliver: {
          title: "Delivery & support",
          description: "Final testing, launch and ongoing improvement and maintenance.",
        },
      },
    },
    trust: {
      eyebrow: "Track record",
      title: "Trust is the greatest asset",
      description:
        "Instead of made-up quotes, see my real work history and websites that are live right now.",
      experienceTitle: "Work experience",
      liveTitle: "Live websites & systems",
      principles: {
        honest: {
          title: "Transparent reporting",
          description: "I share project status, limits and timelines exactly as they are.",
        },
        quality: {
          title: "Maintainable code",
          description: "Clean, documented structure so the project can keep growing after handoff.",
        },
        support: {
          title: "Support after launch",
          description: "Bug fixes, speed improvements and new features down the road.",
        },
      },
    },
    contact: {
      eyebrow: "Let's work together",
      heading: "Let's stay in touch",
      description:
        "If your project needs a web developer, or you'd like to talk through a digital idea, I'd be happy to hear from you.",
      cta: "Contact me",
      emailLabel: "Send an email",
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
    capabilities: "Features and capabilities in detail",
    imagesNote: "Images in this section are illustrative, not real product screenshots.",
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
