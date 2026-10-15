import { Layers3, Monitor, Sparkles, type LucideIcon } from "lucide-react";
import { getI18n } from "@/i18n/server";
import type { PagesDictionary } from "@/i18n/dictionaries";

type ExpertiseKey = keyof PagesDictionary["home"]["expertise"]["items"];

const icons: Record<ExpertiseKey, LucideIcon> = {
  interfaces: Monitor,
  stack: Layers3,
  ai: Sparkles,
};

export async function ExpertiseGrid() {
  const { t } = await getI18n();
  const { label, items } = t.pages.home.expertise;

  return (
    <section id="expertise" className="container-page" aria-label={label}>
      <div className="expertise-strip glass-panel">
        {(Object.keys(icons) as ExpertiseKey[]).map((key) => {
          const Icon = icons[key];
          return (
            <div key={key} className="expertise-item">
              <span className="icon-tile">
                <Icon size={23} strokeWidth={1.7} aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-sm font-bold text-text">{items[key].title}</h2>
                <p className="mt-1 text-xs leading-6 text-text-muted">{items[key].description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
