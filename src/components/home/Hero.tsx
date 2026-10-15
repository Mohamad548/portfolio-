import Image from "next/image";
import { ArrowRight, Code2, FolderKanban, Globe2, TrendingUp, Trophy } from "lucide-react";
import { profile } from "@/data/profile";
import { liveSites, projects } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { getI18n } from "@/i18n/server";

export async function Hero() {
  const { t, link, formatNumber } = await getI18n();
  const hero = t.pages.home.hero;
  const stats = [
    {
      key: "years",
      icon: Trophy,
      value: `${formatNumber(new Date().getFullYear() - profile.careerStartYear)}+`,
    },
    { key: "projects", icon: FolderKanban, value: formatNumber(projects.length) },
    { key: "live", icon: Globe2, value: formatNumber(liveSites.length) },
  ] as const;

  return (
    <section id="hero" className="hero-section" aria-labelledby="hero-heading">
      <svg className="hero-curves" viewBox="0 0 1440 720" preserveAspectRatio="none" aria-hidden="true">
        <path d="M-40 520C260 380 520 640 860 500S1300 260 1500 340" />
        <path d="M-40 580C300 450 560 700 900 560S1320 330 1500 410" />
      </svg>

      <div className="container-page hero-layout">
        <div className="hero-copy">
          <p className="hero-eyebrow">
            {hero.greeting} <span aria-hidden="true">👋</span>
          </p>
          <h1 id="hero-heading" className="hero-heading">
            {hero.headingLead}
            <span className="hero-highlight">{hero.headingHighlight}</span>
          </h1>
          <p className="hero-description">{hero.description}</p>
          <div className="hero-actions">
            <Button href={link("/projects")} className="!px-7 !py-3.5">
              {hero.viewProjects} <ArrowRight size={18} aria-hidden="true" className="mirror-rtl" />
            </Button>
            <Button href={link("/contact")} variant="outline" className="!px-7 !py-3.5">
              {hero.startCollaboration}
            </Button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-orb" aria-hidden="true" />
          <div className="hero-photo">
            <Image
              src="/images/hero-portrait.webp"
              alt={hero.photoAlt}
              fill
              priority
              sizes="(max-width: 767px) 88vw, (max-width: 1279px) 46vw, 560px"
              className="object-cover"
            />
          </div>

          <p className="hero-script hero-script-top" dir="ltr" aria-hidden="true">
            Creative. Clean. User Friendly.
          </p>
          <p className="hero-script hero-script-bottom" dir="ltr" aria-hidden="true">
            Build Modern Web Experiences
          </p>

          <div className="hero-float hero-float-growth">
            <span className="hero-float-icon">
              <TrendingUp size={18} aria-hidden="true" />
            </span>
            <span>
              <strong>{hero.growthCard.title}</strong>
              <small>{hero.growthCard.description}</small>
            </span>
            <svg className="hero-chart" viewBox="0 0 120 44" aria-hidden="true">
              <path d="M2 40 L26 30 L48 34 L72 18 L96 22 L118 4" />
              <path d="M2 40 L26 30 L48 34 L72 18 L96 22 L118 4 L118 44 L2 44 Z" className="hero-chart-fill" />
            </svg>
          </div>

          <div className="hero-float hero-float-code">
            <span className="hero-float-icon">
              <Code2 size={18} aria-hidden="true" />
            </span>
            <span>
              <strong>{hero.modernCard.title}</strong>
              <small>{hero.modernCard.description}</small>
            </span>
          </div>
        </div>
      </div>

      <div className="container-page">
        <ul className="hero-stats" aria-label={hero.statsLabel}>
          {stats.map(({ key, icon: Icon, value }) => (
            <li key={key} className="hero-stat">
              <span className="hero-stat-icon">
                <Icon size={20} aria-hidden="true" />
              </span>
              <p>
                <strong dir="ltr">{value}</strong>
                <span>{hero.stats[key]}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
