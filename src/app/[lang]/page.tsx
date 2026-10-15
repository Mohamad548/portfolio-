import Link from "next/link";
import { ArrowRight, ArrowUpRight, Braces, Check, Code2, Sparkles } from "lucide-react";
import { AiStudioTeaser } from "@/components/ai-studio/AiStudioTeaser";
import { Hero } from "@/components/home/Hero";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WorkProcess } from "@/components/home/WorkProcess";
import { TrustSection } from "@/components/home/TrustSection";
import { ContactCTA } from "@/components/home/ContactCTA";
import { FadeIn } from "@/components/motion/FadeIn";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile, socialLinks } from "@/data/profile";
import { localizeProjects } from "@/i18n/content";
import { format } from "@/i18n/format";
import { getI18n } from "@/i18n/server";

const siteUrl = "https://mohamadmahmodi.ir";

export default async function HomePage() {
  const { locale, t, link, formatNumber } = await getI18n();
  const home = t.pages.home;
  const projects = localizeProjects(t);
  const featured = projects.filter((project) => project.featured);

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: t.ui.brand.name,
    jobTitle: t.ui.brand.role,
    url: `${siteUrl}${link("/")}`,
    image: `${siteUrl}${profile.photo}`,
    email: `mailto:${profile.email}`,
    sameAs: [profile.linkedin, ...socialLinks.map((item) => item.href)],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero />

      <section id="featured-projects" className="section-pad" aria-labelledby="featured-heading">
        <div className="container-page">
          <div className="section-header-row">
            <SectionHeading
              id="featured-heading"
              eyebrow={home.featured.eyebrow}
              title={home.featured.title}
              description={home.featured.description}
            />
            <Link href={link("/projects")} className="focus-ring section-more">
              {home.featured.viewAll} <ArrowRight size={16} aria-hidden="true" className="mirror-rtl" />
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, i) => (
              <FadeIn key={project.slug} delay={Math.min(i * 0.05, 0.25)} className="h-full">
                <ProjectCard project={project} locale={locale} t={t.ui} />
              </FadeIn>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-text-muted">
            <span className="font-semibold text-accent">
              {format(home.featured.count, { count: formatNumber(projects.length) })}
            </span>{" "}
            {home.featured.countNote}
          </p>
        </div>
      </section>

      <ServicesSection />
      <WorkProcess />

      <section id="ai-approach" className="pb-6" aria-labelledby="ai-heading">
        <div className="container-page ai-section glass-panel-strong">
          <div className="ai-visual" aria-hidden="true">
            <div className="ai-orbit orbit-one" />
            <div className="ai-orbit orbit-two" />
            <div className="ai-core">
              <Sparkles size={39} strokeWidth={1.2} />
            </div>
            <span className="ai-floating ai-floating-code">
              <Code2 size={22} />
            </span>
            <span className="ai-floating ai-floating-design">
              <Braces size={22} />
            </span>
            <div className="ai-visual-label">
              <span className="status-dot" /> HUMAN CREATIVITY + AI
            </div>
          </div>
          <div className="relative">
            <span className="eyebrow-pill mb-5">
              <Sparkles size={15} aria-hidden="true" /> {t.profile.aiExperience}
            </span>
            <h2 id="ai-heading" className="text-3xl font-extrabold leading-[1.7] tracking-tight">
              {home.ai.headingLead}
              <br />
              <span className="text-accent">{home.ai.headingHighlight}</span>
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-8 text-text-muted">{t.profile.aiApproach}</p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-text-muted">
              {home.ai.points.map((text) => (
                <span key={text} className="inline-flex items-center gap-1.5">
                  <Check size={14} className="text-accent" aria-hidden="true" />
                  {text}
                </span>
              ))}
            </div>
            <Link
              href={link("/about")}
              className="focus-ring mt-7 inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-accent"
            >
              {home.ai.more} <ArrowUpRight size={16} aria-hidden="true" className="mirror-rtl" />
            </Link>
          </div>
        </div>
      </section>
      <AiStudioTeaser />

      <TrustSection />
      <ContactCTA />
    </>
  );
}
