import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { localizeProjects } from "@/i18n/content";
import { format } from "@/i18n/format";
import { getI18n } from "@/i18n/server";

const exploreLinks = [
  { key: "about", href: "/about" },
  { key: "skills", href: "/skills" },
  { key: "projects", href: "/projects" },
  { key: "aiStudio", href: "/ai-studio" },
  { key: "contact", href: "/contact" },
] as const;

export async function Footer() {
  const { t, link, formatNumber } = await getI18n();
  const copy = t.pages.footer;
  const featured = localizeProjects(t)
    .filter((project) => project.featured)
    .slice(0, 3);
  const year = formatNumber(new Date().getFullYear(), { useGrouping: false });

  return (
    <footer className="mt-auto border-t border-blue-100/80 bg-white/55">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_0.8fr_1.1fr] lg:gap-14 lg:py-16">
        <div>
          <Link href={link("/")} className="focus-ring inline-block rounded-lg text-xl font-bold text-text">
            {t.ui.brand.name}
            <span className="text-accent">.</span>
          </Link>
          <p className="mt-2 text-xs text-accent">{t.ui.brand.role}</p>
          <p className="mt-4 max-w-xs text-sm leading-8 text-text-muted">{t.profile.tagline}</p>
          <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-3 py-1.5 text-[11px] text-text-muted">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {copy.available}
          </span>
          <SocialLinks className="mt-6 rtl:justify-end" />
        </div>

        <div>
          <p className="mb-5 text-sm font-bold text-text">{copy.exploreTitle}</p>
          <ul className="space-y-3 text-sm text-text-muted">
            {exploreLinks.map(({ key, href }) => (
              <li key={key}>
                <Link href={link(href)} className="focus-ring rounded transition-colors hover:text-accent">
                  {copy.links[key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-5 text-sm font-bold text-text">{copy.featuredTitle}</p>
          <ul className="space-y-3 text-sm text-text-muted">
            {featured.map((p) => (
              <li key={p.slug}>
                <Link
                  href={link(`/projects/${p.slug}`)}
                  className="focus-ring inline-flex items-start gap-1.5 rounded leading-7 transition-colors hover:text-accent"
                >
                  {p.title}
                  <ArrowUpRight aria-hidden="true" className="mirror-rtl mt-1.5 h-3.5 w-3.5 shrink-0" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-page border-t border-blue-100/80">
        <div className="flex flex-col items-center justify-between gap-3 py-6 text-[11px] text-text-muted sm:flex-row">
          <p>{format(copy.rights, { year, name: t.ui.brand.name })}</p>
          <p className="inline-flex items-center gap-2">
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-accent" />
            {copy.signature}
          </p>
        </div>
      </div>
    </footer>
  );
}
