"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { projects, categoryLabels } from "@/data/projects";
import type { ProjectCategory } from "@/data/types";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { FadeIn } from "@/components/motion/FadeIn";
import { cn } from "@/lib/utils";

const filters: Array<{ id: "all" | ProjectCategory; label: string }> = [
  { id: "all", label: "همه" },
  { id: "next-app", label: categoryLabels["next-app"].fa },
  { id: "wp-plugin", label: categoryLabels["wp-plugin"].fa },
  { id: "live-site", label: categoryLabels["live-site"].fa },
  { id: "system", label: categoryLabels["system"].fa },
];

export function ProjectsExplorer() {
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchCat = filter === "all" || p.category === filter;
      const q = query.trim().toLowerCase();
      const matchQ =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.titleEn.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.stack.some((s) => s.toLowerCase().includes(q));
      return matchCat && matchQ;
    });
  }, [filter, query]);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={cn(
                "focus-ring rounded-full px-4 py-2 text-sm transition-colors",
                filter === f.id
                  ? "bg-accent text-white"
                  : "border border-border bg-white/5 text-text-muted hover:text-text",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
        <label className="relative block w-full max-w-sm">
          <Search className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-text-muted" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="جستجو در پروژه‌ها، تکنولوژی..."
            className="focus-ring w-full rounded-full border border-border bg-bg-soft px-10 py-2.5 text-sm text-text outline-none placeholder:text-text-muted"
          />
        </label>
      </div>

      <p className="mb-5 font-mono text-xs text-text-muted">
        {filtered.length} پروژه
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        {filtered.map((project, i) => (
          <FadeIn key={project.slug} delay={Math.min(i * 0.04, 0.24)}>
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-2xl border border-border bg-bg-soft/70 p-8 text-center text-text-muted">
          پروژه‌ای با این فیلتر پیدا نشد.
        </p>
      ) : null}
    </div>
  );
}
