import { BadgeCheck, Briefcase, ExternalLink, FileCode2, LifeBuoy, ShieldCheck, type LucideIcon } from "lucide-react";
import type { ExperienceId } from "@/data/experience";
import { liveSites } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { PagesDictionary } from "@/i18n/dictionaries";
import { getI18n } from "@/i18n/server";

type PrincipleKey = keyof PagesDictionary["home"]["trust"]["principles"];

const webJobs = ["kasra", "shahin"] as const satisfies readonly ExperienceId[];

const principleIcons: Record<PrincipleKey, LucideIcon> = {
  honest: ShieldCheck,
  quality: FileCode2,
  support: LifeBuoy,
};

export async function TrustSection() {
  const { t } = await getI18n();
  const copy = t.pages.home.trust;

  return (
    <section id="trust" className="section-pad" aria-labelledby="trust-heading">
      <div className="container-page">
        <SectionHeading
          id="trust-heading"
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
          align="center"
        />
        <div className="trust-grid">
          <div className="trust-card glass-panel">
            <h3 className="trust-card-title">
              <Briefcase size={18} aria-hidden="true" /> {copy.experienceTitle}
            </h3>
            <ul className="space-y-4">
              {webJobs.map((id) => {
                const job = t.experience[id];
                return (
                  <li key={id} className="border-b border-border pb-4 last:border-0 last:pb-0">
                    <p className="font-bold text-text">{job.company}</p>
                    <p className="mt-0.5 text-sm text-text-muted">{job.title}</p>
                    <p className="mt-1 text-xs text-text-soft">{job.period}</p>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="trust-card glass-panel">
            <h3 className="trust-card-title">
              <BadgeCheck size={18} aria-hidden="true" /> {copy.liveTitle}
            </h3>
            <ul className="space-y-2">
              {liveSites.map(({ slug, url, host }) => (
                <li key={slug}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring live-site-link"
                  >
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-semibold text-text">
                        {t.projects[slug].title}
                      </span>
                      <span className="block text-xs text-text-soft" dir="ltr">
                        {host}
                      </span>
                    </span>
                    <ExternalLink size={15} aria-hidden="true" className="shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <ul className="grid gap-4">
            {(Object.keys(principleIcons) as PrincipleKey[]).map((key) => {
              const Icon = principleIcons[key];
              return (
                <li key={key} className="trust-principle glass-panel">
                  <span className="icon-tile !h-11 !w-11">
                    <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-bold text-text">{copy.principles[key].title}</h3>
                    <p className="mt-1 text-sm leading-7 text-text-muted">{copy.principles[key].description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
