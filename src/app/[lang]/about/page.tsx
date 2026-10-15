import type { Metadata } from "next";
import Image from "next/image";
import { certificates } from "@/data/certificates";
import { profile } from "@/data/profile";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { pageMetadata } from "@/i18n/metadata";
import { getI18n } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getI18n();
  return pageMetadata(locale, "/about", {
    title: t.pages.about.title,
    description: t.profile.about,
  });
}

export default async function AboutPage() {
  const { t, link, formatNumber } = await getI18n();
  const copy = t.pages.about;
  const [certificate] = certificates;
  const certificateCopy = t.certificates[certificate.id];

  const details = [
    [copy.details.born, formatNumber(profile.birthYear, { useGrouping: false })],
    [copy.details.maritalStatus, t.profile.maritalStatus],
    [copy.details.military, t.profile.military],
    [copy.details.residence, t.profile.city],
  ];

  return (
    <div className="section-pad">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <FadeIn>
          <div className="glass overflow-hidden rounded-3xl p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src={profile.photo}
                alt={t.ui.brand.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 90vw, 420px"
                priority
              />
            </div>
          </div>
          <dl className="mt-6 grid grid-cols-2 gap-3 text-sm">
            {details.map(([term, value]) => (
              <div key={term} className="rounded-2xl border border-border bg-bg-soft/70 p-4">
                <dt className="text-xs text-text-muted">{term}</dt>
                <dd className="mt-1 font-medium">{value}</dd>
              </div>
            ))}
          </dl>
        </FadeIn>

        <div>
          <SectionHeading eyebrow="ABOUT" title={copy.title} description={t.ui.brand.role} />
          <FadeIn delay={0.08}>
            <p className="text-base leading-9 text-text-muted">{t.profile.about}</p>
          </FadeIn>

          <FadeIn delay={0.16} className="mt-10">
            <h3 className="font-display mb-4 text-xl font-semibold">{copy.journeyTitle}</h3>
            <ol className="relative space-y-6 border-s border-border ps-6">
              {copy.journey.map((item) => (
                <li key={item} className="relative text-sm leading-7 text-text-muted">
                  <span className="absolute -start-[1.9rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent-2 bg-bg" />
                  {item}
                </li>
              ))}
            </ol>
          </FadeIn>

          <FadeIn delay={0.22} className="mt-10">
            <div className="overflow-hidden rounded-3xl border border-border bg-bg-soft/70">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-4">
                <div>
                  <p className="font-medium">{certificateCopy.title}</p>
                  <p className="text-xs text-text-muted">
                    {certificateCopy.issuer} · {certificateCopy.year}
                  </p>
                </div>
                <Button href={link("/certificates")} variant="outline" className="!py-2">
                  {copy.viewCertificate}
                </Button>
              </div>
              <div className="relative aspect-[16/10]">
                <Image
                  src={certificate.image}
                  alt={certificateCopy.title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 90vw, 640px"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
