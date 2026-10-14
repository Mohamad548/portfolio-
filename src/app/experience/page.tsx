import type { Metadata } from "next";
import { Briefcase, GraduationCap, BookOpen } from "lucide-react";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";

export const metadata: Metadata = {
  title: "سوابق",
};

const typeMeta = {
  work: { label: "شغلی", icon: Briefcase },
  education: { label: "تحصیلی", icon: GraduationCap },
  course: { label: "دوره", icon: BookOpen },
};

export default function ExperiencePage() {
  return (
    <div className="section-pad">
      <div className="container-page max-w-3xl">
        <SectionHeading
          eyebrow="EXPERIENCE"
          title="سوابق شغلی و تحصیلی"
          description="مسیر کاری از سخت‌افزار و وردپرس تا پنل‌های Next.js و ابزارهای اختصاصی فروشگاهی."
        />

        <div className="space-y-5">
          {experience.map((item, i) => {
            const meta = typeMeta[item.type];
            const Icon = meta.icon;
            return (
              <FadeIn key={item.id} delay={i * 0.06}>
                <article className="rounded-3xl border border-border bg-bg-soft/70 p-6">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1 text-xs text-text-muted">
                      <Icon className="h-3.5 w-3.5 text-accent-2" />
                      {meta.label}
                    </span>
                    <span className="font-mono text-xs text-text-muted">
                      {item.period}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-accent-2">{item.company}</p>
                  <p className="mt-4 text-sm leading-8 text-text-muted">
                    {item.description}
                  </p>
                  <p className="mt-3 font-mono text-xs leading-6 text-text-muted/70" dir="ltr">
                    {item.titleEn} @ {item.companyEn} · {item.periodEn}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </div>
  );
}
