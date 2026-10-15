"use client";

import { createContext, use, type ReactNode } from "react";
import { localeMeta, localizePath, type Locale } from "./config";
import type { UiDictionary } from "./dictionaries/types";

type I18nContextValue = { locale: Locale; t: UiDictionary };

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({
  locale,
  t,
  children,
}: I18nContextValue & { children: ReactNode }) {
  return <I18nContext value={{ locale, t }}>{children}</I18nContext>;
}

/** Locale-aware helpers for Client Components. */
export function useI18n() {
  const value = use(I18nContext);
  if (!value) throw new Error("useI18n must be used inside <I18nProvider>.");

  const { locale, t } = value;
  return {
    locale,
    t,
    dir: localeMeta[locale].dir,
    link: (path: string) => localizePath(locale, path),
  };
}
