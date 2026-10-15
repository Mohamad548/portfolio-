import Image from "next/image";
import { ArrowRight, Atom, Code2, MapPin, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { getI18n } from "@/i18n/server";

export async function Hero() {
  const { t, link } = await getI18n();
  const hero = t.pages.home.hero;

  return (
    <section id="hero" className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-halo hero-halo-one" aria-hidden="true" />
      <div className="hero-halo hero-halo-two" aria-hidden="true" />
      <div className="container-page hero-layout">
        <div className="hero-copy">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="eyebrow-pill">
              <Code2 size={16} aria-hidden="true" /> {t.ui.brand.role}
            </span>
            <span className="inline-flex items-center gap-2 text-xs text-text-muted">
              <span className="status-dot" /> {hero.available}
            </span>
          </div>
          <p className="mb-3 text-sm text-text-muted">{hero.greeting}</p>
          <h1 id="hero-heading" className="hero-heading">
            {hero.headingLead}
            <br />
            <span className="gradient-text">{hero.headingHighlight}</span>
          </h1>
          <p className="hero-description">{hero.description}</p>
          <div className="mt-6 flex flex-wrap gap-2.5" aria-label={hero.techLabel}>
            <span className="tech-pill">
              <span className="wordpress-mark" aria-hidden="true">
                W
              </span>{" "}
              WordPress
            </span>
            <span className="tech-pill">
              <span className="next-mark" aria-hidden="true">
                N
              </span>{" "}
              Next.js
            </span>
            <span className="tech-pill">
              <Atom size={19} className="text-sky-600" aria-hidden="true" /> React
            </span>
            <span className="tech-pill tech-pill-ai">
              <Sparkles size={17} aria-hidden="true" /> {hero.aiPill}
            </span>
          </div>
          <div className="hero-actions mt-8 flex flex-wrap gap-3">
            <Button href={link("/projects")} className="!px-7 !py-3.5">
              {hero.viewProjects} <ArrowRight size={18} aria-hidden="true" className="mirror-rtl" />
            </Button>
            <Button href={link("/contact")} variant="outline" className="!px-7 !py-3.5">
              {hero.startCollaboration} <ArrowRight size={17} aria-hidden="true" className="mirror-rtl" />
            </Button>
          </div>
          <p className="mt-6 flex items-center gap-2 text-xs leading-6 text-text-muted">
            <Sparkles size={15} className="text-accent" aria-hidden="true" />{" "}
            {t.profile.aiExperience}
          </p>
        </div>
        <div className="portrait-stage">
          <div className="portrait-backplate" aria-hidden="true" />
          <div className="glass-ribbon ribbon-back" aria-hidden="true" />
          <div className="portrait-frame">
            <div className="portrait-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <Image
              src={profile.photo}
              alt={hero.photoAlt}
              fill
              priority
              sizes="(max-width: 767px) 90vw, (max-width: 1200px) 45vw, 520px"
              className="portrait-photo"
            />
            <div className="portrait-caption">
              <span className="status-dot" />
              <span dir="ltr">MOHAMAD MAHMODI</span>
              <Code2 size={17} aria-hidden="true" />
            </div>
          </div>
          <div className="glass-ribbon ribbon-front" aria-hidden="true" />
          <div className="portrait-badge portrait-badge-top">
            <Atom size={24} aria-hidden="true" />
            <span>
              {hero.badgeTop}
              <span
                className="block text-[10px] font-normal tracking-wide text-text-muted"
                dir="ltr"
              >
                DESIGN · DEVELOP · DELIVER
              </span>
            </span>
          </div>
          <div className="portrait-badge portrait-badge-bottom">
            <Sparkles size={20} aria-hidden="true" />
            <span>
              {hero.badgeBottom}
              <span className="block text-[11px] font-normal text-text-muted">
                {hero.badgeBottomNote}
              </span>
            </span>
          </div>
          <span className="portrait-location">
            <MapPin size={13} aria-hidden="true" /> {t.profile.location}
          </span>
        </div>
      </div>
    </section>
  );
}
