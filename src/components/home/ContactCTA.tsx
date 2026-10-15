import Image from "next/image";
import { ArrowRight, Link2, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { getI18n } from "@/i18n/server";

export async function ContactCTA() {
  const { t, link } = await getI18n();
  const copy = t.pages.home.contact;

  return (
    <section id="contact-cta" className="container-page pb-20 pt-6" aria-labelledby="contact-heading">
      <div className="contact-panel">
        <svg className="contact-curves" viewBox="0 0 800 400" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 300C180 220 320 380 520 290S760 180 820 220" />
          <path d="M0 340C200 260 340 420 540 330S770 230 820 270" />
        </svg>

        <div className="contact-copy">
          <p className="eyebrow-pill mb-4">{copy.eyebrow}</p>
          <h2 id="contact-heading" className="section-title">
            {copy.heading}
          </h2>
          <p className="mt-3 max-w-xl text-[0.95rem] leading-8 text-text-muted">{copy.description}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href={link("/contact")} className="!px-7 !py-3.5">
              {copy.cta} <ArrowRight size={18} aria-hidden="true" className="mirror-rtl" />
            </Button>
            <Button href={`mailto:${profile.email}`} variant="outline" className="!px-6 !py-3.5">
              <Mail size={17} aria-hidden="true" /> {copy.emailLabel}
            </Button>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="focus-ring inline-flex items-center gap-2 rounded-md text-sm text-text-muted hover:text-accent"
              dir="ltr"
            >
              <Mail size={16} aria-hidden="true" /> {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-md text-sm text-text-muted hover:text-accent"
              dir="ltr"
            >
              <Link2 size={16} aria-hidden="true" /> {profile.linkedinLabel}
            </a>
          </div>
          <SocialLinks className="mt-6 rtl:justify-end" />
        </div>

        <div className="contact-visual">
          <Image
            src="/images/contact-workspace.webp"
            alt=""
            fill
            sizes="(max-width: 1023px) 90vw, 480px"
            className="object-cover"
          />
          <p className="hero-script contact-script" dir="ltr" aria-hidden="true">
            Good ideas start here
          </p>
        </div>
      </div>
    </section>
  );
}
