import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { localizeAiMedia } from "@/i18n/content";
import { getI18n } from "@/i18n/server";
import { AiCapabilities } from "./AiCapabilities";
import { AiGallery } from "./AiGallery";

export async function AiStudioTeaser() {
  const { t, link } = await getI18n();
  const copy = t.pages.home.aiStudio;
  const featured = localizeAiMedia(t)
    .filter((item) => item.featured)
    .slice(0, 3);

  return (
    <section id="ai-studio" className="section-pad" aria-label={copy.title}>
      <div className="container-page">
        <div className="section-header-row">
          <SectionHeading eyebrow="AI STUDIO" title={copy.title} description={copy.description} />
          <Link href={link("/ai-studio")} className="focus-ring section-more">
            {copy.cta} <ArrowRight size={16} aria-hidden="true" className="mirror-rtl" />
          </Link>
        </div>
        {featured.length > 0 ? <AiGallery items={featured} filterable={false} /> : <AiCapabilities />}
      </div>
    </section>
  );
}
