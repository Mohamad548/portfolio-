import type { Metadata } from "next";
import Image from "next/image";
import { Award } from "lucide-react";
import { certificates } from "@/data/certificates";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";

export const metadata: Metadata = {
  title: "گواهی‌ها",
};

export default function CertificatesPage() {
  return (
    <div className="section-pad">
      <div className="container-page max-w-4xl">
        <SectionHeading
          eyebrow="CERTIFICATES"
          title="گواهی‌ها و دوره‌ها"
          description="مدارک آموزشی مرتبط با مسیر فرانت‌اند و React."
        />

        <div className="space-y-8">
          {certificates.map((cert, i) => (
            <FadeIn key={cert.id} delay={i * 0.08}>
              <article className="overflow-hidden rounded-3xl border border-border bg-bg-soft/70">
                <div className="flex flex-wrap items-start gap-4 border-b border-border p-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent-2">
                    <Award className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-semibold">{cert.title}</h3>
                    <p className="mt-1 text-sm text-text-muted">
                      {cert.issuer}
                      {cert.hours ? ` · ${cert.hours}` : ""} · {cert.year}
                    </p>
                    <p className="font-mono mt-2 text-xs text-accent-2">{cert.titleEn}</p>
                  </div>
                </div>
                {cert.image ? (
                  <a href={cert.image} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="relative aspect-[16/11] bg-black/20">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-contain p-4"
                        sizes="(max-width: 896px) 100vw, 896px"
                      />
                    </div>
                  </a>
                ) : null}
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
