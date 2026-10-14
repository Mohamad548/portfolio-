import type { Metadata } from "next";
import Image from "next/image";
import { profile } from "@/data/profile";
import { certificates } from "@/data/certificates";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "درباره من",
  description: profile.aboutFa,
};

export default function AboutPage() {
  return (
    <div className="section-pad">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <FadeIn>
          <div className="glass overflow-hidden rounded-3xl p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src={profile.photo}
                alt={profile.nameFa}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 90vw, 420px"
                priority
              />
            </div>
          </div>
          <dl className="mt-6 grid grid-cols-2 gap-3 text-sm">
            {[
              ["تولد", String(profile.birthYear)],
              ["وضعیت", profile.maritalStatusFa],
              ["نظام وظیفه", profile.militaryFa],
              ["محل سکونت", profile.cityFa],
            ].map(([k, v]) => (
              <div key={k} className="rounded-2xl border border-border bg-bg-soft/70 p-4">
                <dt className="text-xs text-text-muted">{k}</dt>
                <dd className="mt-1 font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </FadeIn>

        <div>
          <SectionHeading
            eyebrow="ABOUT"
            title="درباره من"
            description={profile.titleFa}
          />
          <FadeIn delay={0.08}>
            <p className="text-base leading-9 text-text-muted">{profile.aboutFa}</p>
            <p className="mt-6 font-mono text-sm leading-7 text-text-muted/80" dir="ltr">
              {profile.aboutEn}
            </p>
          </FadeIn>

          <FadeIn delay={0.16} className="mt-10">
            <h3 className="font-display mb-4 text-xl font-semibold">مسیر حرفه‌ای</h3>
            <ol className="relative space-y-6 border-r border-border pr-6">
              {[
                "۲۰۲۰ — شروع با وردپرس و فروشگاه‌های تجارت الکترونیک",
                "۲۰۲۲ — توسعه فرانت و سفارشی‌سازی ووکامرس در شاهین تجارت",
                "۲۰۲۳ — بوت‌کمپ React / Next.js مکتب شریف (+۴۰۰ ساعت)",
                "۲۰۲۵+ — پنل‌های Next، افزونه‌های اختصاصی و ابزارهای AI محتوا",
              ].map((item) => (
                <li key={item} className="relative text-sm leading-7 text-text-muted">
                  <span className="absolute top-1.5 -right-[1.9rem] h-3 w-3 rounded-full border-2 border-accent-2 bg-bg" />
                  {item}
                </li>
              ))}
            </ol>
          </FadeIn>

          {certificates[0] ? (
            <FadeIn delay={0.22} className="mt-10">
              <div className="overflow-hidden rounded-3xl border border-border bg-bg-soft/70">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-4">
                  <div>
                    <p className="font-medium">{certificates[0].title}</p>
                    <p className="text-xs text-text-muted">
                      {certificates[0].issuer} · {certificates[0].year}
                    </p>
                  </div>
                  <Button href="/certificates" variant="outline" className="!py-2">
                    مشاهده گواهی
                  </Button>
                </div>
                {certificates[0].image ? (
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={certificates[0].image}
                      alt={certificates[0].title}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 90vw, 640px"
                    />
                  </div>
                ) : null}
              </div>
            </FadeIn>
          ) : null}
        </div>
      </div>
    </div>
  );
}
