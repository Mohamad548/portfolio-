import { notFound } from "next/navigation";
import { lang } from "next/root-params";
import { isLocale, localeMeta, localizePath, type Locale } from "./config";
import { dictionaries } from "./dictionaries";

export async function getLocale(): Promise<Locale> {
  const value = await lang();
  if (!isLocale(value)) notFound();
  return value;
}

/** Locale-aware helpers for Server Components; reads the `[lang]` root param. */
export async function getI18n() {
  const locale = await getLocale();
  const { dir, intl } = localeMeta[locale];

  return {
    locale,
    dir,
    t: dictionaries[locale],
    link: (path: string) => localizePath(locale, path),
    formatNumber: (value: number, options?: Intl.NumberFormatOptions) =>
      value.toLocaleString(intl, options),
  };
}
