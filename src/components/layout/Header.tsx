"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useI18n } from "@/i18n/client";
import { BrandAvatar } from "./navigation/BrandAvatar";
import { DesktopNavigation } from "./navigation/DesktopNavigation";
import { LanguageSwitcher } from "./navigation/LanguageSwitcher";
import { MobileNavigation } from "./navigation/MobileNavigation";

export function Header() {
  const pathname = usePathname();
  const { t, link } = useI18n();

  return (
    <header className="sticky top-4 z-50 mx-auto mt-4 w-[calc(100%_-_2rem)] max-w-[1240px] sm:top-5 sm:mt-5">
      <div className="relative flex min-h-[76px] items-center justify-between gap-4 rounded-[1.5rem] border border-white/90 bg-[var(--glass)] px-4 shadow-[0_10px_40px_rgba(16,44,97,0.07),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-2xl sm:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <MobileNavigation key={pathname} pathname={pathname} />
          <Link href={link("/")} className="focus-ring group flex min-w-0 shrink-0 items-center gap-3 rounded-xl">
            <BrandAvatar priority />
            <span className="leading-tight lg:max-xl:sr-only">
              <span className="block text-sm font-bold text-text sm:text-base">
                {t.brand.name}
                <span className="text-accent">.</span>
              </span>
              <span className="mt-1 block text-[10px] tracking-wide text-text-muted" dir="ltr">
                FRONT-END DEVELOPER
              </span>
            </span>
          </Link>
        </div>

        <DesktopNavigation pathname={pathname} />

        <div className="flex shrink-0 items-center gap-2">
          <LanguageSwitcher />
          <div className="hidden lg:block">
            <Button href={link("/contact")} className="!rounded-xl !px-4 !py-2.5">
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
              {t.header.cta}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
