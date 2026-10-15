import type { AiCapability, AiMediaId } from "@/data/ai-studio";
import type { CertificateId } from "@/data/certificates";
import type { ExperienceId } from "@/data/experience";
import type { NavKey, SocialNetwork } from "@/data/profile";
import type { ProjectSlug } from "@/data/projects";
import type { SkillGroupId } from "@/data/skills";
import type {
  AiMediaCopy,
  AiMediaKind,
  CertificateCopy,
  ExperienceCopy,
  ExperienceType,
  ProjectCategory,
  ProjectCopy,
  SkillLabelKey,
  SkillLevel,
} from "@/data/types";

/** Strings shared with client components; must stay JSON-serializable. */
export type UiDictionary = {
  brand: { name: string; role: string };
  skipLink: string;
  nav: Record<NavKey, string>;
  header: {
    mainNav: string;
    mobileNav: string;
    openMenu: string;
    closeMenu: string;
    cta: string;
    drawerCta: string;
  };
  language: { switcherLabel: string };
  social: {
    groupLabel: string;
    /** Placeholders: `{network}`, `{handle}`. */
    linkLabel: string;
    networks: Record<SocialNetwork, string>;
  };
  phone: { label: string; title: string; prompt: string };
  projects: {
    categories: Record<ProjectCategory, string>;
    all: string;
    view: string;
    live: string;
    searchLabel: string;
    searchPlaceholder: string;
    /** Placeholder: `{count}`. */
    resultCount: string;
    empty: string;
  };
  aiGallery: {
    all: string;
    kinds: Record<AiMediaKind, string>;
    filterLabel: string;
    /** Placeholder: `{title}`. */
    enlarge: string;
    close: string;
    videoFallback: string;
  };
};

export type ProfileCopy = {
  tagline: string;
  about: string;
  aiExperience: string;
  aiApproach: string;
  maritalStatus: string;
  military: string;
  city: string;
  location: string;
};

type Card = { title: string; description: string };

export type PagesDictionary = {
  home: {
    hero: {
      available: string;
      greeting: string;
      headingLead: string;
      headingHighlight: string;
      description: string;
      techLabel: string;
      aiPill: string;
      viewProjects: string;
      startCollaboration: string;
      photoAlt: string;
      badgeTop: string;
      badgeBottom: string;
      badgeBottomNote: string;
    };
    expertise: {
      label: string;
      items: Record<"interfaces" | "stack" | "ai", Card>;
    };
    featured: {
      title: string;
      description: string;
      viewAll: string;
      /** Placeholder: `{count}`. */
      count: string;
      countNote: string;
    };
    ai: {
      headingLead: string;
      headingHighlight: string;
      points: readonly string[];
      more: string;
    };
    aiStudio: {
      title: string;
      description: string;
      cta: string;
    };
    toolkit: {
      label: string;
      title: string;
      description: string;
      viewAll: string;
      cards: Record<"frontend" | "wordpress" | "ai" | "backend", { title: string; tools: string; note: string }>;
    };
    contact: {
      eyebrow: string;
      heading: string;
      description: string;
      cta: string;
    };
  };
  about: {
    title: string;
    details: Record<"born" | "maritalStatus" | "military" | "residence", string>;
    journeyTitle: string;
    journey: readonly string[];
    viewCertificate: string;
  };
  skills: { title: string; description: string };
  experience: {
    title: string;
    description: string;
    types: Record<ExperienceType, string>;
  };
  certificates: { title: string; description: string };
  projects: { title: string; description: string };
  aiStudio: {
    title: string;
    description: string;
    toolsLabel: string;
    capabilities: Record<AiCapability, Card>;
    galleryTitle: string;
    galleryDescription: string;
    emptyTitle: string;
    emptyDescription: string;
    emptyCta: string;
  };
  projectDetail: {
    back: string;
    viewLive: string;
    discussSimilar: string;
    problem: string;
    solution: string;
    role: string;
    technologies: string;
    features: string;
  };
  contact: {
    title: string;
    description: string;
    channels: Record<"phone" | "email" | "linkedin" | "location", string>;
    socialTitle: string;
    socialNote: string;
    form: {
      title: string;
      note: string;
      name: string;
      namePlaceholder: string;
      email: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      mailSubject: string;
    };
  };
  notFound: {
    title: string;
    description: string;
    home: string;
    projects: string;
  };
  footer: {
    available: string;
    exploreTitle: string;
    links: Record<"about" | "skills" | "projects" | "aiStudio" | "contact", string>;
    featuredTitle: string;
    /** Placeholders: `{year}`, `{name}`. */
    rights: string;
    signature: string;
  };
};

export type Dictionary = {
  ui: UiDictionary;
  pages: PagesDictionary;
  profile: ProfileCopy;
  projects: Record<ProjectSlug, ProjectCopy>;
  skills: {
    groups: Record<SkillGroupId, string>;
    items: Record<SkillLabelKey, string>;
    levels: Record<SkillLevel, string>;
  };
  experience: Record<ExperienceId, ExperienceCopy>;
  certificates: Record<CertificateId, CertificateCopy>;
  aiMedia: Record<AiMediaId, AiMediaCopy>;
};
