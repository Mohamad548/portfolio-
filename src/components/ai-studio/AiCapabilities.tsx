import { Clapperboard, ImageIcon, MessageSquareText, type LucideIcon } from "lucide-react";
import { aiCapabilities, type AiCapability } from "@/data/ai-studio";
import { getI18n } from "@/i18n/server";

const icons: Record<AiCapability, LucideIcon> = {
  adBanners: ImageIcon,
  realisticVideo: Clapperboard,
  prompting: MessageSquareText,
};

export async function AiCapabilities() {
  const { t } = await getI18n();
  const { capabilities } = t.pages.aiStudio;

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {aiCapabilities.map((key) => {
        const Icon = icons[key];
        return (
          <div key={key} className="toolkit-card glass-panel">
            <span className="icon-tile mb-6">
              <Icon size={23} strokeWidth={1.7} aria-hidden="true" />
            </span>
            <h3 className="text-base font-bold">{capabilities[key].title}</h3>
            <p className="mt-3 text-xs leading-7 text-text-muted">{capabilities[key].description}</p>
          </div>
        );
      })}
    </div>
  );
}
