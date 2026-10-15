import Image from "next/image";
import { Clapperboard, ImageIcon, MessageSquareText, type LucideIcon } from "lucide-react";
import { aiCapabilities, type AiCapability } from "@/data/ai-studio";
import { getI18n } from "@/i18n/server";

const visuals: Record<AiCapability, { icon: LucideIcon; image: string }> = {
  adBanners: { icon: ImageIcon, image: "/images/ai-studio/ad-banners.webp" },
  realisticVideo: { icon: Clapperboard, image: "/images/ai-studio/realistic-video.webp" },
  prompting: { icon: MessageSquareText, image: "/images/ai-studio/prompting.webp" },
};

export async function AiCapabilities() {
  const { t } = await getI18n();
  const { capabilities } = t.pages.aiStudio;

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {aiCapabilities.map((key) => {
        const { icon: Icon, image } = visuals[key];
        return (
          <div key={key} className="toolkit-card glass-panel">
            <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-2xl bg-bg-soft">
              <Image
                src={image}
                alt=""
                fill
                sizes="(max-width: 767px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-3">
              <span className="icon-tile shrink-0">
                <Icon size={23} strokeWidth={1.7} aria-hidden="true" />
              </span>
              <h3 className="text-base font-bold">{capabilities[key].title}</h3>
            </div>
            <p className="mt-3 text-xs leading-7 text-text-muted">{capabilities[key].description}</p>
          </div>
        );
      })}
    </div>
  );
}
