"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, ChevronRight, Menu, X } from "lucide-react";
import { navLinks } from "@/data/profile";
import { useDismiss } from "@/hooks/use-dismiss";
import { useI18n } from "@/i18n/client";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { cn } from "@/lib/utils";
import { BrandAvatar } from "./BrandAvatar";
import { isActiveLink } from "./nav-utils";

const subscribeNoop = () => () => {};

export function MobileNavigation({ pathname }: { pathname: string }) {
  const { t, dir, link } = useI18n();
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const titleId = useId();
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const mounted = useSyncExternalStore(subscribeNoop, () => true, () => false);
  const isRtl = dir === "rtl";

  useDismiss(open, setOpen, { containerRef: drawerRef, triggerRef: toggleRef, initialFocus: "nav a" });

  useEffect(() => {
    if (!open) return;

    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    function onDesktopChange(event: MediaQueryListEvent) {
      if (event.matches) setOpen(false);
    }
    desktopQuery.addEventListener("change", onDesktopChange);

    return () => {
      root.style.overflow = previousOverflow;
      desktopQuery.removeEventListener("change", onDesktopChange);
    };
  }, [open]);

  function close() {
    setOpen(false);
    toggleRef.current?.focus();
  }

  return (
    <div className="lg:hidden">
      <button
        ref={toggleRef}
        type="button"
        className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-100 bg-white/80 text-text transition-colors hover:bg-blue-50"
        aria-label={t.header.openMenu}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen(true)}
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Portaled to body: the header's backdrop-filter would otherwise trap position:fixed inside it. */}
      {mounted &&
        createPortal(
          <div className="lg:hidden">
            <div
              aria-hidden="true"
              className={cn(
                "fixed inset-0 z-[60] bg-[#0f2547]/35 backdrop-blur-[3px] transition-[opacity,visibility] duration-300",
                open ? "visible opacity-100" : "invisible opacity-0",
              )}
            />
            <div
              ref={drawerRef}
              id={menuId}
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              inert={!open}
              className={cn(
                "fixed inset-y-0 z-[70] flex w-[min(20.5rem,86vw)] flex-col border-white bg-white/95 backdrop-blur-2xl duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                isRtl
                  ? "right-0 border-l shadow-[-12px_0_40px_rgba(48,86,142,0.18)]"
                  : "left-0 border-r shadow-[12px_0_40px_rgba(48,86,142,0.18)]",
                open && "visible translate-x-0 transition-transform",
                !open && "invisible transition-[transform,visibility]",
                !open && (isRtl ? "translate-x-full" : "-translate-x-full"),
              )}
            >
              <div className="flex items-center justify-between gap-3 border-b border-blue-100/80 px-5 py-4">
                <Link href={link("/")} onClick={() => setOpen(false)} className="focus-ring flex items-center gap-3 rounded-xl">
                  <BrandAvatar />
                  <span id={titleId} className="text-sm font-bold text-text">
                    {t.brand.name}
                    <span className="text-accent">.</span>
                  </span>
                </Link>
                <button
                  type="button"
                  onClick={close}
                  aria-label={t.header.closeMenu}
                  className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-white text-text transition-colors hover:bg-blue-50"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav aria-label={t.header.mobileNav} className="flex-1 overflow-y-auto px-3 py-4">
                <ul className="flex flex-col gap-1">
                  {navLinks.map((item) => {
                    const href = link(item.href);
                    const active = isActiveLink(pathname, href, item.href === "/");

                    return (
                      <li key={item.key}>
                        <Link
                          href={href}
                          onClick={() => setOpen(false)}
                          aria-current={active ? "page" : undefined}
                          className={cn(
                            "focus-ring flex items-center justify-between rounded-xl px-4 py-3 text-sm transition-colors",
                            active
                              ? "bg-blue-50 font-semibold text-accent"
                              : "text-text-muted hover:bg-blue-50 hover:text-text",
                          )}
                        >
                          {t.nav[item.key]}
                          <ChevronRight aria-hidden="true" className="mirror-rtl h-4 w-4 opacity-60" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="space-y-5 border-t border-blue-100/80 px-5 py-5">
                <Button href={link("/contact")} onClick={() => setOpen(false)} className="w-full">
                  {t.header.drawerCta}
                  <ArrowUpRight aria-hidden="true" className="mirror-rtl h-4 w-4" />
                </Button>
                <SocialLinks className="justify-center" />
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
