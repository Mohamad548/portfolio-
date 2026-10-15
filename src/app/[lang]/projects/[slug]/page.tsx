import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projectCover, projects } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { localizeProject } from "@/i18n/content";
import { pageMetadata } from "@/i18n/metadata";
import { getI18n } from "@/i18n/server";
import { cn } from "@/lib/utils";

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
            <span className="rounded-full border border-border px-3 py-1 text-xs text-text-muted">
              {t.ui.projects.engagement[project.engagement]}
            </span>
            {project.status ? (
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs text-amber-800">
                {t.ui.projects.status[project.status]}
              </span>
            ) : null}
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

          <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-bg-soft">
            <Image
              src={projectCover(project.slug)}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
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

      {project.sections.length > 0 ? (
        <section aria-labelledby="capabilities" className="container-page mt-16 max-w-5xl md:mt-20">
          <FadeIn className="mx-auto max-w-3xl">
            <h2 id="capabilities" className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
              {copy.capabilities}
            </h2>
            <p className="mt-2 text-xs text-text-muted">{copy.imagesNote}</p>
          </FadeIn>

          <div className="mt-10 space-y-14 md:space-y-20">
            {project.sections.map((section, index) => (
              <FadeIn key={section.id} className="grid items-center gap-6 md:grid-cols-2 md:gap-12">
                <div
                  className={cn(
                    "relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-bg-soft",
                    index % 2 === 1 && "md:order-last",
                  )}
                >
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    sizes="(max-width: 767px) 100vw, 480px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <span
                    className="block h-1 w-10 rounded-full"
                    style={{ background: project.accent }}
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 font-display text-xl font-semibold">{section.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-text-muted">{section.description}</p>
                  <ul className="mt-4 space-y-2">
                    {section.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-7 text-text-muted">
                        <span
                          className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: project.accent }}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
