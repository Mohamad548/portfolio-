import type { Metadata } from "next";
import { ArrowUpRight, Clapperboard } from "lucide-react";
import { aiStudioTools } from "@/data/ai-studio";
import { AiCapabilities } from "@/components/ai-studio/AiCapabilities";
import { AiGallery } from "@/components/ai-studio/AiGallery";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { localizeAiMedia } from "@/i18n/content";
import { pageMetadata } from "@/i18n/metadata";
import { getI18n } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getI18n();
  return pageMetadata(locale, "/ai-studio", {
    title: t.ui.nav.aiStudio,
    description: t.pages.aiStudio.description,
  });
}

export default async function AiStudioPage() {
  const { t, link } = await getI18n();
  const copy = t.pages.aiStudio;
  const media = localizeAiMedia(t);

  return (
    <div className="section-pad">
      <div className="container-page">
        <SectionHeading eyebrow="AI STUDIO" title={copy.title} description={copy.description} />

        <div className="-mt-4 mb-10 flex flex-wrap items-center gap-2 md:-mt-6">
          <span className="me-1 text-xs font-semibold text-text-muted">{copy.toolsLabel}</span>
          {aiStudioTools.map((tool) => (
            <span key={tool} className="tech-pill" dir="ltr">
              {tool}
            </span>
          ))}
        </div>

        <AiCapabilities />

        <section aria-labelledby="ai-gallery-heading" className="mt-16">
          <h2 id="ai-gallery-heading" className="text-2xl font-bold tracking-tight text-text">
            {copy.galleryTitle}
          </h2>
          <p className="mt-2 mb-8 text-sm leading-8 text-text-muted">{copy.galleryDescription}</p>

          {media.length > 0 ? (
            <AiGallery items={media} />
          ) : (
            <div className="glass-panel flex flex-col items-center rounded-3xl px-6 py-12 text-center">
              <span className="icon-tile mb-5">
                <Clapperboard size={23} strokeWidth={1.7} aria-hidden="true" />
              </span>
              <p className="text-base font-bold text-text">{copy.emptyTitle}</p>
              <p className="mt-2 max-w-md text-sm leading-7 text-text-muted">{copy.emptyDescription}</p>
              <Button href={link("/contact")} className="mt-6">
                {copy.emptyCta}
                <ArrowUpRight aria-hidden="true" className="mirror-rtl h-4 w-4" />
              </Button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
