import { aiMedia, type AiMediaId } from "@/data/ai-studio";
import { projects } from "@/data/projects";
import type { AiMedia, AiMediaBase, AiMediaCopy, Project } from "@/data/types";
import type { Dictionary } from "./dictionaries/types";

export function localizeProjects(t: Dictionary): Project[] {
  return projects.map((project) => ({ ...project, ...t.projects[project.slug] }));
}

export function localizeProject(t: Dictionary, slug: string): Project | undefined {
  const project = projects.find((p) => p.slug === slug);
  return project && { ...project, ...t.projects[project.slug] };
}

export function localizeAiMedia(t: Dictionary): AiMedia[] {
  const items: readonly (AiMediaBase & { id: AiMediaId })[] = aiMedia;
  return items.map((item) => {
    const copy: AiMediaCopy = t.aiMedia[item.id];
    return { ...item, ...copy };
  });
}
