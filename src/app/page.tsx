import Link from "next/link";
import { ArrowUpLeft, Code2, Boxes, Zap } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/Button";
import { getFeaturedProjects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

const highlights = [
  {
    icon: Code2,
    title: "فرانت‌اند مدرن",
    text: "React، TypeScript و Next.js برای پنل‌ها و تجربه‌های سریع.",
  },
  {
    icon: Boxes,
    title: "اکوسیستم وردپرس",
    text: "افزونه‌های اختصاصی، ووکامرس و فروشگاه‌های عملیاتی.",
  },
  {
    icon: Zap,
    title: "عملکرد و DX",
    text: "بهینه‌سازی سرعت، UI تمیز و معماری ماژولار.",
  },
];

export default function HomePage() {
  const featured = getFeaturedProjects();
  const topSkills = skillGroups
    .flatMap((g) => g.items)
    .filter((i) => i.level === "expert" || i.level === "advanced")
    .slice(0, 10);

  return (
    <>
      <Hero />

      <section className="section-pad border-b border-border">
        <div className="container-page grid gap-4 md:grid-cols-3">
          {highlights.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-bg-soft/70 p-6">
                <item.icon className="mb-4 h-6 w-6 text-accent-2" />
                <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-text-muted">{item.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="section-pad border-b border-border">
        <div className="container-page">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="FEATURED"
              title="پروژه‌های برجسته"
              description="نمونه کارهای کلیدی از پنل‌های هوشمند تا افزونه‌ها و فروشگاه‌های زنده."
            />
            <Button href="/projects" variant="outline">
              همه نمونه‌کارها
              <ArrowUpLeft className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {featured.map((project, i) => (
              <FadeIn key={project.slug} delay={i * 0.06}>
                <ProjectCard project={project} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <SectionHeading
            eyebrow="STACK"
            title="مهارت‌های کلیدی"
            description="ترکیبی از فرانت‌اند مدرن و تجربه عمیق وردپرس/ووکامرس."
          />
          <div className="flex flex-wrap gap-2">
            {topSkills.map((skill) => (
              <span
                key={skill.name}
                className="rounded-full border border-border bg-white/5 px-4 py-2 text-sm text-text-muted"
              >
                {skill.name}
              </span>
            ))}
            <Link
              href="/skills"
              className="rounded-full border border-border-strong bg-accent-soft px-4 py-2 text-sm text-accent-2"
            >
              مشاهده همه مهارت‌ها
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
