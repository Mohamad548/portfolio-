import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "@/data/types";
import { localizePath, type Locale } from "@/i18n/config";
import type { UiDictionary } from "@/i18n/dictionaries";
import { cn } from "@/lib/utils";
import { ProjectVisual } from "./ProjectVisual";

/** Rendered from both server pages and the client explorer, so copy comes in as props. */
export function ProjectCard({
  project,
  locale,
  t,
  className,
}: {
  project: Project;
  locale: Locale;
  t: UiDictionary;
  className?: string;
}) {
  const href = localizePath(locale, `/projects/${project.slug}`);

  return (
    <article className={cn("project-card glass-panel group", className)}>
      <div className="relative">
        <ProjectVisual slug={project.slug} sizes="(max-width: 639px) 92vw, (max-width: 1023px) 46vw, 400px" />
        <div className="project-badges">
          <span className="project-badge">{t.projects.engagement[project.engagement]}</span>
          {project.status ? (
            <span className="project-badge project-badge-status">{t.projects.status[project.status]}</span>
          ) : null}
        </div>
      </div>
      <div className="project-card-content">
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-semibold text-accent">{t.projects.categories[project.category]}</span>
          {project.year ? (
            <span className="font-mono text-[11px] text-text-soft" dir="ltr">
              {project.year}
            </span>
          ) : null}
        </div>
        <h3 className="text-lg font-extrabold leading-8 tracking-tight text-text">
          <Link href={href} className="focus-ring rounded-sm transition-colors hover:text-accent">
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-7 text-text-muted">{project.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5" dir="ltr">
          {project.stack.slice(0, 3).map((tech) => (
            <li key={tech} className="tech-badge">
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap items-center gap-4 pt-5">
          <Link
            href={href}
            className="focus-ring inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-accent"
          >
            {t.projects.view} <ArrowUpRight size={15} aria-hidden="true" className="mirror-rtl" />
          </Link>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-1 rounded-lg text-xs text-text-muted hover:text-accent"
            >
              {t.projects.live} <ExternalLink size={12} aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
