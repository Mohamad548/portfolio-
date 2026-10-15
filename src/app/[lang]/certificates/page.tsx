import type { Metadata } from "next";
import Image from "next/image";
import { Award } from "lucide-react";
import { certificates } from "@/data/certificates";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { pageMetadata } from "@/i18n/metadata";
import { getI18n } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getI18n();
  return pageMetadata(locale, "/certificates", {
    title: t.ui.nav.certificates,
    description: t.pages.certificates.description,
  });
}

export default async function CertificatesPage() {
  const { t } = await getI18n();

  return (
    <div className="section-pad">
      <div className="container-page max-w-4xl">
        <SectionHeading
          eyebrow="CERTIFICATES"
          title={t.pages.certificates.title}
          description={t.pages.certificates.description}
        />

        <div className="space-y-8">
          {certificates.map((cert, i) => {
            const copy = t.certificates[cert.id];
            return (
              <FadeIn key={cert.id} delay={i * 0.08}>
                <article className="overflow-hidden rounded-3xl border border-border bg-bg-soft/70">
                  <div className="flex flex-wrap items-start gap-4 border-b border-border p-6">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent-2">
                      <Award className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-semibold">{copy.title}</h3>
                      <p className="mt-1 text-sm text-text-muted">
                        {[copy.issuer, copy.hours, copy.year].filter(Boolean).join(" · ")}
                      </p>
                    </div>
                  </div>
                  <a href={cert.image} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="relative aspect-[16/11] bg-black/20">
                      <Image
                        src={cert.image}
                        alt={copy.title}
                        fill
                        className="object-contain p-4"
                        sizes="(max-width: 896px) 100vw, 896px"
                      />
                    </div>
                  </a>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </div>
  );
}
