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
      <ProjectVisual project={project} />
      <div className="project-card-content">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <span className="text-[11px] font-medium text-accent">
            {t.projects.categories[project.category]}
          </span>
          {project.year ? (
            <span className="font-mono text-[10px] text-text-muted" dir="ltr">
              {project.year}
            </span>
          ) : null}
        </div>
        <h3 className="text-lg font-extrabold leading-8 tracking-tight text-text">
          <Link href={href} className="focus-ring rounded-sm transition-colors hover:text-accent">
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 text-[13px] leading-7 text-text-muted">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-1.5" dir="ltr">
          {project.stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-blue-100/70 bg-blue-50/60 px-2 py-1 text-[10px] text-[#4a6390]"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-4">
          <Link
            href={href}
            className="focus-ring inline-flex items-center gap-2 rounded-lg text-xs font-semibold text-accent"
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
