import type { Metadata } from "next";
import { BookOpen, Briefcase, GraduationCap, type LucideIcon } from "lucide-react";
import { experience } from "@/data/experience";
import type { ExperienceType } from "@/data/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { pageMetadata } from "@/i18n/metadata";
import { getI18n } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getI18n();
  return pageMetadata(locale, "/experience", {
    title: t.ui.nav.experience,
    description: t.pages.experience.description,
  });
}

const typeIcons: Record<ExperienceType, LucideIcon> = {
  work: Briefcase,
  education: GraduationCap,
  course: BookOpen,
};

export default async function ExperiencePage() {
  const { t } = await getI18n();
  const copy = t.pages.experience;

  return (
    <div className="section-pad">
      <div className="container-page max-w-3xl">
        <SectionHeading eyebrow="EXPERIENCE" title={copy.title} description={copy.description} />

        <div className="space-y-5">
          {experience.map((item, i) => {
            const Icon = typeIcons[item.type];
            const entry = t.experience[item.id];
            return (
              <FadeIn key={item.id} delay={i * 0.06}>
                <article className="rounded-3xl border border-border bg-bg-soft/70 p-6">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1 text-xs text-text-muted">
                      <Icon className="h-3.5 w-3.5 text-accent-2" />
                      {copy.types[item.type]}
                    </span>
                    <span className="font-mono text-xs text-text-muted">{entry.period}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold">{entry.title}</h3>
                  <p className="mt-1 text-sm text-accent-2">{entry.company}</p>
                  <p className="mt-4 text-sm leading-8 text-text-muted">{entry.description}</p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </div>
  );
}
