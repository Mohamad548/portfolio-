"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { projectCategories } from "@/data/projects";
import type { Project, ProjectCategory } from "@/data/types";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { FadeIn } from "@/components/motion/FadeIn";
import { localeMeta } from "@/i18n/config";
import { useI18n } from "@/i18n/client";
import { format } from "@/i18n/format";
import { cn } from "@/lib/utils";

type Filter = "all" | ProjectCategory;

const filters: readonly Filter[] = ["all", ...projectCategories];

export function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const { locale, t } = useI18n();
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLocaleLowerCase(locale);
    return projects.filter((p) => {
      const matchCategory = filter === "all" || p.category === filter;
      const matchQuery =
        !q ||
        p.title.toLocaleLowerCase(locale).includes(q) ||
        p.summary.toLocaleLowerCase(locale).includes(q) ||
        p.stack.some((s) => s.toLowerCase().includes(q));
      return matchCategory && matchQuery;
    });
  }, [projects, filter, query, locale]);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {filters.map((id) => (
            <button
              key={id}
              type="button"
              aria-pressed={filter === id}
              onClick={() => setFilter(id)}
              className={cn(
                "focus-ring rounded-full px-4 py-2 text-sm transition-colors",
                filter === id
                  ? "bg-accent text-white"
                  : "border border-border bg-white/5 text-text-muted hover:text-text",
              )}
            >
              {id === "all" ? t.projects.all : t.projects.categories[id]}
            </button>
          ))}
        </div>
        <label className="relative block w-full max-w-sm">
          <Search className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
          <input
            aria-label={t.projects.searchLabel}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.projects.searchPlaceholder}
            className="focus-ring w-full rounded-full border border-border bg-bg-soft px-10 py-2.5 text-sm text-text outline-none placeholder:text-text-muted"
          />
        </label>
      </div>

      <p className="mb-5 font-mono text-xs text-text-muted">
        {format(t.projects.resultCount, {
          count: filtered.length.toLocaleString(localeMeta[locale].intl),
        })}
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        {filtered.map((project, i) => (
          <FadeIn key={project.slug} delay={Math.min(i * 0.04, 0.24)}>
            <ProjectCard project={project} locale={locale} t={t} />
          </FadeIn>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-2xl border border-border bg-bg-soft/70 p-8 text-center text-text-muted">
          {t.projects.empty}
        </p>
      ) : null}
    </div>
  );
}
