export type ProjectCategory =
  | "live-site"
  | "wp-plugin"
  | "next-app"
  | "system";

export type SkillLevel = "expert" | "advanced" | "intermediate";

export interface Project {
  slug: string;
  title: string;
  titleEn: string;
  summary: string;
  summaryEn: string;
  category: ProjectCategory;
  featured?: boolean;
  role: string;
  stack: string[];
  features: string[];
  featuresEn: string[];
  problem: string;
  solution: string;
  liveUrl?: string;
  accent: string;
  year?: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  titleEn: string;
  icon: string;
  items: { name: string; level: SkillLevel }[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  titleEn: string;
  company: string;
  companyEn: string;
  period: string;
  periodEn: string;
  description: string;
  descriptionEn: string;
  type: "work" | "education" | "course";
}

export interface Certificate {
  id: string;
  title: string;
  titleEn: string;
  issuer: string;
  year: string;
  hours?: string;
  image?: string;
}
