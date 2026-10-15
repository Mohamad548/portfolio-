import type { MetadataRoute } from "next";
import { navLinks } from "@/data/profile";
import { projects } from "@/data/projects";
import { locales, localizePath } from "@/i18n/config";

const base = "https://mohamadmahmodi.ir";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...navLinks.map((link) => link.href),
    ...projects.map((project) => `/projects/${project.slug}`),
  ];
  const lastModified = new Date();

  return paths.flatMap((path) => {
    const languages = Object.fromEntries(
      locales.map((locale) => [locale, `${base}${localizePath(locale, path)}`]),
    );
    return locales.map((locale) => ({
      url: `${base}${localizePath(locale, path)}`,
      lastModified,
      alternates: { languages },
    }));
  });
}
