"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpLeft } from "lucide-react";
import { navLinks, profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-border bg-[rgba(7,11,20,0.86)] backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="container-page flex h-[var(--header-h)] items-center justify-between gap-4">
        <Link href="/" className="focus-ring group flex items-center gap-3 rounded-full">
          <span className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-accent/40">
            <Image
              src={profile.photo}
              alt={profile.nameFa}
              fill
              className="object-cover"
              sizes="40px"
              priority
            />
          </span>
          <span className="leading-tight">
            <span className="font-display block text-sm font-semibold text-text">
              {profile.nameFa}
            </span>
            <span className="font-mono text-[11px] text-text-muted">
              {profile.titleEn}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "focus-ring rounded-full px-3.5 py-2 text-sm transition-colors",
                  active
                    ? "bg-accent-soft text-accent-2"
                    : "text-text-muted hover:bg-white/5 hover:text-text",
                )}
              >
                {link.labelFa}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button href="/contact" variant="outline" className="!py-2">
            تماس
          </Button>
          <Button href="/projects" className="!py-2">
            نمونه‌کارها
            <ArrowUpLeft className="h-4 w-4" />
          </Button>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden"
          aria-label={open ? "بستن منو" : "باز کردن منو"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-bg-elevated lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-3 text-sm text-text-muted hover:bg-white/5 hover:text-text"
              >
                {link.labelFa}
              </Link>
            ))}
            <Button href="/contact" className="mt-2 w-full">
              ارتباط با من
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
