import type { Metadata } from "next";
import {
  Atom,
  Braces,
  Clapperboard,
  Code2,
  Database,
  Layout,
  Sparkles,
  Triangle,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { skillGroups } from "@/data/skills";
import type { SkillIcon, SkillItem, SkillLevel } from "@/data/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import type { Dictionary } from "@/i18n/dictionaries";
import { pageMetadata } from "@/i18n/metadata";
import { getI18n } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getI18n();
  return pageMetadata(locale, "/skills", {
    title: t.ui.nav.skills,
    description: t.pages.skills.description,
  });
}

const icons: Record<SkillIcon, LucideIcon> = {
  layout: Layout,
  code: Code2,
  braces: Braces,
  atom: Atom,
  triangle: Triangle,
  wordpress: Layout,
  wrench: Wrench,
  sparkles: Sparkles,
  database: Database,
  clapperboard: Clapperboard,
};

const levelWidth: Record<SkillLevel, string> = {
  expert: "w-full",
  advanced: "w-4/5",
  intermediate: "w-3/5",
  familiar: "w-2/5",
};

function skillLabel(item: SkillItem, t: Dictionary) {
  return "labelKey" in item ? t.skills.items[item.labelKey] : item.name;
}

export default async function SkillsPage() {
  const { t } = await getI18n();

  return (
    <div className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="SKILLS"
          title={t.pages.skills.title}
          description={t.pages.skills.description}
        />

        <div className="relative">
          <div className="absolute start-4 top-0 bottom-0 hidden w-px bg-border md:block" />
          <div className="space-y-6">
            {skillGroups.map((group, index) => {
              const Icon = icons[group.icon];
              return (
                <FadeIn key={group.id} delay={index * 0.05}>
                  <div className="relative rounded-3xl border border-border bg-bg-soft/70 p-6 md:ms-10">
                    <span className="absolute -start-[2.15rem] top-8 hidden h-3.5 w-3.5 rounded-full border-2 border-accent-2 bg-bg md:block" />
                    <div className="mb-5 flex items-center gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-accent-2">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="font-display text-xl font-semibold">
                        {t.skills.groups[group.id]}
                      </h3>
                    </div>
                    <ul className="space-y-4">
                      {group.items.map((item) => {
                        const label = skillLabel(item, t);
                        return (
                          <li key={label}>
                            <div className="mb-1.5 flex items-center justify-between gap-3 text-sm">
                              <span>{label}</span>
                              <span className="font-mono text-xs text-text-muted">
                                {t.skills.levels[item.level]}
                              </span>
                            </div>
                            <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                              <div
                                className={`h-full rounded-full bg-gradient-to-l from-accent to-accent-2 ${levelWidth[item.level]}`}
                              />
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
