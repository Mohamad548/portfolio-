import { aiMedia, type AiMediaId } from "@/data/ai-studio";
import { projects, projectSectionImage } from "@/data/projects";
import type {
  AiMedia,
  AiMediaBase,
  AiMediaCopy,
  Project,
  ProjectBase,
  ProjectSectionCopy,
} from "@/data/types";
import type { Dictionary } from "./dictionaries/types";

function localize(t: Dictionary, project: (typeof projects)[number]): Project {
  const { sections: sectionIds = [], ...base }: ProjectBase = project;
  const { sections: sectionCopy, ...copy } = t.projects[project.slug];
  const copies: Partial<Record<string, ProjectSectionCopy>> = sectionCopy ?? {};
  const sections = sectionIds.flatMap((id) => {
    const section = copies[id];
    return section ? [{ id, image: projectSectionImage(project.slug, id), ...section }] : [];
  });
  return { ...base, ...copy, sections };
}

export function localizeProjects(t: Dictionary): Project[] {
  return projects.map((project) => localize(t, project));
}

export function localizeProject(t: Dictionary, slug: string): Project | undefined {
  const project = projects.find((p) => p.slug === slug);
  return project && localize(t, project);
}

export function localizeAiMedia(t: Dictionary): AiMedia[] {
  const items: readonly (AiMediaBase & { id: AiMediaId })[] = aiMedia;
  return items.map((item) => {
    const copy: AiMediaCopy = t.aiMedia[item.id];
    return { ...item, ...copy };
  });
}
