"use client";

import { useId, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Check, ChevronDown, Languages } from "lucide-react";
import { useDismiss } from "@/hooks/use-dismiss";
import { localeMeta, locales, switchLocalePath, type Locale } from "@/i18n/config";
import { useI18n } from "@/i18n/client";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const { locale, t } = useI18n();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useDismiss(open, setOpen, {
    containerRef: panelRef,
    triggerRef,
    initialFocus: "[aria-current='true']",
  });

  function choose(next: Locale) {
    setOpen(false);
    triggerRef.current?.focus();
    if (next !== locale) router.push(switchLocalePath(pathname, next), { scroll: false });
  }

  return (
    <div className="relative">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={`${t.language.switcherLabel}: ${localeMeta[locale].nativeName}`}
        className={cn(
          "focus-ring inline-flex h-11 items-center gap-1.5 rounded-2xl border px-3 text-xs font-semibold transition-colors",
          open
            ? "border-blue-200 bg-blue-50 text-accent"
            : "border-blue-100 bg-white/80 text-text hover:border-blue-200 hover:bg-blue-50 hover:text-accent",
        )}
      >
        <Languages aria-hidden="true" className="h-[18px] w-[18px] text-accent" />
        <span dir="ltr">{localeMeta[locale].shortLabel}</span>
        <ChevronDown
          aria-hidden="true"
          className={cn("h-3.5 w-3.5 opacity-60 transition-transform", open && "rotate-180")}
        />
      </button>

      <div
        ref={panelRef}
        id={panelId}
        hidden={!open}
        className="absolute end-0 top-[calc(100%+0.6rem)] z-10 w-48 rounded-2xl border border-blue-100 bg-white/95 p-1.5 shadow-[0_18px_45px_rgba(48,86,142,0.18)] backdrop-blur-xl"
      >
        <ul className="space-y-0.5">
          {locales.map((option) => {
            const selected = option === locale;
            const meta = localeMeta[option];

            return (
              <li key={option}>
                <button
                  type="button"
                  onClick={() => choose(option)}
                  aria-current={selected}
                  className={cn(
                    "focus-ring flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors",
                    selected
                      ? "bg-blue-50 font-semibold text-accent"
                      : "text-text-muted hover:bg-blue-50 hover:text-text",
                  )}
                >
                  <span lang={option}>{meta.nativeName}</span>
                  {selected ? (
                    <Check aria-hidden="true" className="h-4 w-4" />
                  ) : (
                    <span aria-hidden="true" dir="ltr" className="text-[10px] font-semibold opacity-50">
                      {meta.shortLabel}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
