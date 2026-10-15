import type { Metadata } from "next";
import { locales, localizePath, type Locale } from "./config";

/** Page metadata with canonical and `hreflang` alternates for every locale. */
export function pageMetadata(
  locale: Locale,
  path: string,
  { title, description }: { title?: string; description?: string },
): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: localizePath(locale, path),
      languages: Object.fromEntries(locales.map((l) => [l, localizePath(l, path)])),
    },
  };
}
