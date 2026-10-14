import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Link2,
  Code2,
  ArrowUpLeft,
} from "lucide-react";
import { profile } from "@/data/profile";
import { getFeaturedProjects } from "@/data/projects";

export function Footer() {
  const featured = getFeaturedProjects().slice(0, 4);
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-bg-elevated">
      <div className="container-page section-pad grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div className="lg:col-span-1">
          <p className="font-display text-lg font-semibold">{profile.nameFa}</p>
          <p className="font-mono mt-1 text-xs text-accent-2">{profile.titleEn}</p>
          <p className="mt-4 text-sm leading-7 text-text-muted">
            {profile.taglineFa}
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold text-text">ناوبری</p>
          <ul className="space-y-2 text-sm text-text-muted">
            <li>
              <Link href="/about" className="hover:text-accent-2">
                درباره من
              </Link>
            </li>
            <li>
              <Link href="/skills" className="hover:text-accent-2">
                مهارت‌ها
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-accent-2">
                نمونه‌کارها
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-accent-2">
                تماس
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold text-text">پروژه‌های برجسته</p>
          <ul className="space-y-2 text-sm text-text-muted">
            {featured.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/projects/${p.slug}`}
                  className="inline-flex items-center gap-1 hover:text-accent-2"
                >
                  {p.title}
                  <ArrowUpLeft className="h-3.5 w-3.5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold text-text">تماس</p>
          <ul className="space-y-3 text-sm text-text-muted">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent-2" />
              <a href={`tel:${profile.phoneRaw}`} className="hover:text-text" dir="ltr">
                {profile.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-accent-2" />
              <a href={`mailto:${profile.email}`} className="hover:text-text" dir="ltr">
                {profile.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Link2 className="h-4 w-4 text-accent-2" />
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text"
                dir="ltr"
              >
                LinkedIn
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent-2" />
              {profile.cityFa}
            </li>
            <li className="flex items-center gap-2 text-text-muted/70">
              <Code2 className="h-4 w-4" />
              GitHub (به‌زودی)
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-text-muted sm:flex-row">
          <p>
            © {year} {profile.nameEn}. همه حقوق محفوظ است.
          </p>
          <p className="font-mono">Next.js · TypeScript · Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
