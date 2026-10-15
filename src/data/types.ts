export type ProjectCategory =
  | "live-site"
  | "wp-theme"
  | "wp-plugin"
  | "next-app"
  | "system";

export type SkillLevel = "expert" | "advanced" | "intermediate" | "familiar";

export type ExperienceType = "work" | "education" | "course";

export type ProjectStatus = "in-development" | "prototype";

/** `custom`: built from scratch; `customization`: set up and extended on an existing platform or theme. */
export type ProjectEngagement = "custom" | "customization";

export interface ProjectBase {
  slug: string;
  category: ProjectCategory;
  engagement: ProjectEngagement;
  featured?: boolean;
  stack: readonly string[];
  liveUrl?: string;
  accent: string;
  year?: string;
  status?: ProjectStatus;
  /** Ordered ids of the detail-page sections; each has an image at `/images/projects/<slug>/<id>.webp`. */
  sections?: readonly string[];
}

export interface ProjectSectionCopy {
  title: string;
  description: string;
  points: readonly string[];
}

export interface ProjectCopy {
  title: string;
  summary: string;
  role: string;
  features: readonly string[];
  problem: string;
  solution: string;
}

export interface ProjectSection extends ProjectSectionCopy {
  id: string;
  image: string;
}

export type Project = Omit<ProjectBase, "sections"> &
  ProjectCopy & { sections: readonly ProjectSection[] };

export type SkillIcon =
  | "layout"
  | "code"
  | "braces"
  | "atom"
  | "triangle"
  | "wordpress"
  | "sparkles"
  | "database"
  | "clapperboard"
  | "wrench";

export type SkillLabelKey =
  | "aiIdeation"
  | "aiInterfaces"
  | "promptEngineering"
  | "aiAdBanners"
  | "aiRealisticVideo"
  | "nodeBackend"
  | "otherDatabases";

/** Technical names are shown as-is; `labelKey` items are translated per locale. */
export type SkillItem =
  | { name: string; level: SkillLevel }
  | { labelKey: SkillLabelKey; level: SkillLevel };

export interface SkillGroupBase {
  id: string;
  icon: SkillIcon;
  items: readonly SkillItem[];
}

export interface ExperienceBase {
  id: string;
  type: ExperienceType;
}

export interface ExperienceCopy {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface CertificateBase {
  id: string;
  image?: string;
}

export interface CertificateCopy {
  title: string;
  issuer: string;
  year: string;
  hours?: string;
}

export type AiMediaKind = "image" | "video";

export interface AiMediaBase {
  id: string;
  kind: AiMediaKind;
  /** Path under `public/`, e.g. `/ai-studio/perfume-banner.webp`. */
  src: string;
  /** Still frame shown before a video plays. */
  poster?: string;
  /** Intrinsic size; reserves the right aspect ratio before the file loads. */
  width: number;
  height: number;
  tools: readonly string[];
  /** Shown in the AI Studio teaser on the home page. */
  featured?: boolean;
}

export interface AiMediaCopy {
  title: string;
  description: string;
}

export type AiMedia = AiMediaBase & AiMediaCopy;
