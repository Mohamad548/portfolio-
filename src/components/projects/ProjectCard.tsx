import Link from "next/link";
import { ArrowUpLeft, ExternalLink } from "lucide-react";
import type { Project } from "@/data/types";
import { categoryLabels } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const cat = categoryLabels[project.category];

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-bg-soft/80 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]",
        className,
      )}
    >
      <div
        className="h-1.5 w-full"
        style={{
          background: `linear-gradient(90deg, ${project.accent}, transparent)`,
        }}
      />
      <div className="p-6">
        <div className="mb-4 flex items-start justify-between gap-3">
          <span className="rounded-full border border-border bg-white/5 px-3 py-1 text-xs text-text-muted">
            {cat.fa}
          </span>
          {project.year ? (
            <span className="font-mono text-xs text-text-muted">{project.year}</span>
          ) : null}
        </div>

        <h3 className="font-display text-xl font-semibold tracking-tight text-text transition-colors group-hover:text-accent-2">
          {project.title}
        </h3>
        <p className="mt-1 font-mono text-[11px] text-text-muted">{project.titleEn}</p>
        <p className="mt-3 text-sm leading-7 text-text-muted">{project.summary}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-accent-soft px-2 py-1 font-mono text-[11px] text-accent-2"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4 text-sm">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 font-medium text-text hover:text-accent-2"
          >
            جزئیات
            <ArrowUpLeft className="h-4 w-4" />
          </Link>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-text-muted hover:text-accent-2"
            >
              مشاهده سایت
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
