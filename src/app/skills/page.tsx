import type { Metadata } from "next";
import type { ComponentType } from "react";
import {
  Layout,
  Code2,
  Braces,
  Atom,
  Triangle,
  Wrench,
} from "lucide-react";
import { skillGroups } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { levelLabel } from "@/lib/utils";

export const metadata: Metadata = {
  title: "مهارت‌ها",
};

const icons: Record<string, ComponentType<{ className?: string }>> = {
  layout: Layout,
  code: Code2,
  braces: Braces,
  atom: Atom,
  triangle: Triangle,
  wordpress: Layout,
  wrench: Wrench,
};

const levelWidth = {
  expert: "w-full",
  advanced: "w-4/5",
  intermediate: "w-3/5",
} as const;

export default function SkillsPage() {
  return (
    <div className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="SKILLS"
          title="مهارت‌های فنی"
          description="از HTML/CSS و اکوسیستم React/Next تا معماری افزونه وردپرس و ابزارهای روزمره توسعه."
        />

        <div className="relative">
          <div className="absolute top-0 bottom-0 right-4 hidden w-px bg-border md:block" />
          <div className="space-y-6">
            {skillGroups.map((group, index) => {
              const Icon = icons[group.icon] ?? Code2;
              return (
                <FadeIn key={group.id} delay={index * 0.05}>
                  <div className="relative rounded-3xl border border-border bg-bg-soft/70 p-6 md:mr-10">
                    <span className="absolute top-8 -right-[2.15rem] hidden h-3.5 w-3.5 rounded-full border-2 border-accent-2 bg-bg md:block" />
                    <div className="mb-5 flex items-center gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-accent-2">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-semibold">
                          {group.title}
                        </h3>
                        <p className="font-mono text-xs text-text-muted">
                          {group.titleEn}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-4">
                      {group.items.map((item) => (
                        <li key={item.name}>
                          <div className="mb-1.5 flex items-center justify-between gap-3 text-sm">
                            <span>{item.name}</span>
                            <span className="font-mono text-xs text-text-muted">
                              {levelLabel(item.level)}
                            </span>
                          </div>
                          <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                            <div
                              className={`h-full rounded-full bg-gradient-to-l from-accent to-accent-2 ${levelWidth[item.level]}`}
                            />
                          </div>
                        </li>
                      ))}
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
