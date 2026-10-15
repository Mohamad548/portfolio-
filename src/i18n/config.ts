export const locales = ["fa", "ckb", "en"] as const;

export type Locale = (typeof locales)[number];

export type Direction = "rtl" | "ltr";

export const defaultLocale: Locale = "fa";

export const localeCookie = "site-locale";

type LocaleMeta = {
  nativeName: string;
  shortLabel: string;
  dir: Direction;
  /**
   * BCP 47 tag for `Intl` number formatting. It must resolve identically in Node and every
   * browser to avoid hydration mismatches; browsers often lack `ckb` data, so Sorani uses
   * `ar-IQ`, which has the same Arabic-Indic digits.
   */
  intl: string;
  openGraph: string;
};

export const localeMeta: Record<Locale, LocaleMeta> = {
  fa: { nativeName: "فارسی", shortLabel: "FA", dir: "rtl", intl: "fa-IR", openGraph: "fa_IR" },
  ckb: { nativeName: "کوردی (سۆرانی)", shortLabel: "KU", dir: "rtl", intl: "ar-IQ", openGraph: "ckb_IQ" },
  en: { nativeName: "English", shortLabel: "EN", dir: "ltr", intl: "en-US", openGraph: "en_US" },
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (locales as readonly string[]).includes(value);
}

/** Prefixes an app path (e.g. `/about`) with the locale segment. */
export function localizePath(locale: Locale, path: string) {
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/** Swaps the locale segment of an already-localized pathname. */
export function switchLocalePath(pathname: string, next: Locale) {
  const [, current, ...rest] = pathname.split("/");
  return isLocale(current) ? localizePath(next, rest.length ? `/${rest.join("/")}` : "/") : localizePath(next, pathname);
}
