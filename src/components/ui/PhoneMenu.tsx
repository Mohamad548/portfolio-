"use client";

import { useId, useRef, useState } from "react";
import { phoneNumbers } from "@/data/profile";
import { useDismiss } from "@/hooks/use-dismiss";
import { useI18n } from "@/i18n/client";
import { cn } from "@/lib/utils";

const phoneGlyph =
  "M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z";

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" className={className}>
      <path d={phoneGlyph} />
    </svg>
  );
}

export function PhoneMenu() {
  const { t, dir } = useI18n();
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useDismiss(open, setOpen, { containerRef: panelRef, triggerRef: buttonRef, initialFocus: "a" });

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={t.phone.label}
        title={t.phone.title}
        className={cn("social-button social-button--phone", open && "is-active")}
      >
        <PhoneIcon />
      </button>

      <div
        ref={panelRef}
        id={panelId}
        hidden={!open}
        dir={dir}
        className="absolute bottom-[calc(100%+0.85rem)] right-0 z-30 w-60 rounded-2xl border border-blue-100 bg-white/95 p-2 shadow-[0_18px_45px_rgba(48,86,142,0.18)] backdrop-blur-xl"
      >
        <p className="px-3 pb-2 pt-1 text-xs font-semibold text-text-muted">{t.phone.prompt}</p>
        <ul className="space-y-1">
          {phoneNumbers.map((phone) => (
            <li key={phone.href}>
              <a
                href={phone.href}
                onClick={() => setOpen(false)}
                className="focus-ring flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-text transition-colors hover:bg-blue-50 hover:text-accent"
              >
                <bdi dir="ltr">{phone.display}</bdi>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <PhoneIcon className="h-4 w-4" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
