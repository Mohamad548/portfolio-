import Link from "next/link";
import { ArrowRight, Code2, Gauge, LayoutTemplate, ShoppingBag, type LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { PagesDictionary } from "@/i18n/dictionaries";
import { getI18n } from "@/i18n/server";
import { techIcons } from "./tech-icons";

type ServiceKey = keyof PagesDictionary["home"]["services"]["items"];

const serviceIcons: Record<ServiceKey, LucideIcon> = {
  ui: LayoutTemplate,
  web: Code2,
  performance: Gauge,
  wordpress: ShoppingBag,
};

export async function ServicesSection() {
  const { t, link } = await getI18n();
  const copy = t.pages.home.services;

  return (
    <section id="services" className="section-pad" aria-labelledby="services-heading">
      <div className="container-page">
        <SectionHeading
          id="services-heading"
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
          align="center"
        />
        <div className="services-layout">
          <div className="grid gap-4 sm:grid-cols-2">
            {(Object.keys(serviceIcons) as ServiceKey[]).map((key, i) => {
              const Icon = serviceIcons[key];
              return (
                <FadeIn key={key} delay={i * 0.05} className="h-full">
                  <article className="service-card glass-panel">
                    <span className="icon-tile">
                      <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-lg font-bold text-text">{copy.items[key].title}</h3>
                    <p className="mt-2 text-sm leading-7 text-text-muted">{copy.items[key].description}</p>
                  </article>
                </FadeIn>
              );
            })}
          </div>

          <div className="tech-panel glass-panel-strong">
            <h3 className="text-lg font-bold text-text">{copy.techTitle}</h3>
            <p className="mt-1 text-sm leading-7 text-text-muted">{copy.techDescription}</p>
            <ul className="tech-grid" dir="ltr">
              {techIcons.map(({ name, color, path }) => (
                <li key={name} className="tech-tile">
                  <svg viewBox="0 0 24 24" width="30" height="30" fill={color} aria-hidden="true">
                    <path d={path} />
                  </svg>
                  <span>{name}</span>
                </li>
              ))}
            </ul>
            <Link href={link("/skills")} className="focus-ring section-more mt-5">
              {copy.viewSkills} <ArrowRight size={16} aria-hidden="true" className="mirror-rtl" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
