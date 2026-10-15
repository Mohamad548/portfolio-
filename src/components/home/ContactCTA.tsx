import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { getI18n } from "@/i18n/server";

export async function ContactCTA() {
  const { t, link } = await getI18n();
  const copy = t.pages.home.contact;

  return (
    <section id="contact-cta" className="container-page pb-20 pt-4" aria-labelledby="contact-heading">
      <div className="contact-panel glass-panel-strong">
        <div className="contact-orbit" aria-hidden="true" />
        <div className="relative z-10">
          <span className="eyebrow-pill mb-5">
            <Sparkles size={15} aria-hidden="true" /> {copy.eyebrow}
          </span>
          <h2
            id="contact-heading"
            className="text-3xl font-extrabold leading-relaxed tracking-tight md:text-4xl"
          >
            {copy.heading}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-8 text-text-muted">{copy.description}</p>
        </div>
        <div className="relative z-10 flex shrink-0 flex-col items-start gap-5">
          <Button href={link("/contact")} className="!px-7 !py-3.5">
            {copy.cta} <ArrowRight size={18} aria-hidden="true" className="mirror-rtl" />
          </Button>
          <a
            href={`mailto:${profile.email}`}
            className="focus-ring inline-flex items-center gap-2 rounded-md text-sm text-text-muted hover:text-accent"
            dir="ltr"
          >
            <Mail size={16} aria-hidden="true" />
            {profile.email}
          </a>
        </div>
      </div>
    </section>
  );
}
