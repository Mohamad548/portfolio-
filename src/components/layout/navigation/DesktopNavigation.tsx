"use client";

import Link from "next/link";
import { navLinks } from "@/data/profile";
import { useI18n } from "@/i18n/client";
import { cn } from "@/lib/utils";
import { isActiveLink } from "./nav-utils";

export function DesktopNavigation({ pathname }: { pathname: string }) {
  const { t, link } = useI18n();

  return (
    <nav aria-label={t.header.mainNav} className="hidden items-center gap-0.5 lg:flex xl:gap-1">
      {navLinks.map((item) => {
        const href = link(item.href);
        const active = isActiveLink(pathname, href, item.href === "/");

        return (
          <Link
            key={item.key}
            href={href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "focus-ring rounded-xl px-2.5 py-2.5 text-[13px] whitespace-nowrap transition-colors xl:px-3",
              active
                ? "bg-blue-50 font-semibold text-accent"
                : "text-text-muted hover:bg-blue-50/80 hover:text-accent",
            )}
          >
            {t.nav[item.key]}
          </Link>
        );
      })}
    </nav>
  );
}
