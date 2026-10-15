import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { localizeProject } from "@/i18n/content";
import { pageMetadata } from "@/i18n/metadata";
import { getI18n } from "@/i18n/server";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { locale, t } = await getI18n();
  const project = localizeProject(t, slug);
  if (!project) return {};
  return pageMetadata(locale, `/projects/${slug}`, {
    title: project.title,
    description: project.summary,
  });
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const { t, link } = await getI18n();
  const project = localizeProject(t, slug);
  if (!project) notFound();

  const copy = t.pages.projectDetail;

  return (
    <div className="section-pad">
      <div className="container-page max-w-3xl">
        <FadeIn>
          <Link
            href={link("/projects")}
            className="mb-8 inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent-2"
          >
            <ArrowLeft className="mirror-rtl h-4 w-4" aria-hidden="true" />
            {copy.back}
          </Link>

          <div
            className="mb-6 h-2 rounded-full"
            style={{
              background: `linear-gradient(90deg, ${project.accent}, transparent)`,
            }}
          />

          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-border px-3 py-1 text-xs text-text-muted">
              {t.ui.projects.categories[project.category]}
            </span>
            {project.year ? (
              <span className="font-mono text-xs text-text-muted" dir="ltr">
                {project.year}
              </span>
            ) : null}
          </div>

          <h1 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            {project.title}
          </h1>
          <p className="mt-5 text-base leading-8 text-text-muted">{project.summary}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.liveUrl ? (
              <Button href={project.liveUrl} external>
                {copy.viewLive}
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </Button>
            ) : null}
            <Button href={link("/contact")} variant="outline">
              {copy.discussSimilar}
            </Button>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          <FadeIn delay={0.08}>
            <div className="h-full rounded-3xl border border-border bg-bg-soft/70 p-6">
              <h2 className="font-display text-lg font-semibold">{copy.problem}</h2>
              <p className="mt-3 text-sm leading-7 text-text-muted">{project.problem}</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.12}>
            <div className="h-full rounded-3xl border border-border bg-bg-soft/70 p-6">
              <h2 className="font-display text-lg font-semibold">{copy.solution}</h2>
              <p className="mt-3 text-sm leading-7 text-text-muted">{project.solution}</p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.16} className="mt-5 rounded-3xl border border-border bg-bg-soft/70 p-6">
          <h2 className="font-display text-lg font-semibold">{copy.role}</h2>
          <p className="mt-3 text-sm text-text-muted">{project.role}</p>
          <h3 className="mt-6 text-sm font-semibold">{copy.technologies}</h3>
          <div className="mt-3 flex flex-wrap gap-2" dir="ltr">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-accent-soft px-2.5 py-1 font-mono text-xs text-accent-2"
              >
                {tech}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-5 rounded-3xl border border-border bg-bg-soft/70 p-6">
          <h2 className="font-display text-lg font-semibold">{copy.features}</h2>
          <ul className="mt-4 space-y-3">
            {project.features.map((f) => (
              <li key={f} className="flex gap-3 text-sm leading-7 text-text-muted">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: project.accent }}
                />
                {f}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </div>
  );
}
