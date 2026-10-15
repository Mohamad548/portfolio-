import { Code2, MessagesSquare, PenTool, Rocket, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { PagesDictionary } from "@/i18n/dictionaries";
import { getI18n } from "@/i18n/server";

type StepKey = keyof PagesDictionary["home"]["process"]["steps"];

const stepIcons: Record<StepKey, LucideIcon> = {
  discover: MessagesSquare,
  plan: PenTool,
  build: Code2,
  deliver: Rocket,
};

export async function WorkProcess() {
  const { t, formatNumber } = await getI18n();
  const copy = t.pages.home.process;

  return (
    <section id="process" className="section-pad" aria-labelledby="process-heading">
      <div className="container-page">
        <SectionHeading
          id="process-heading"
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
          align="center"
        />
        <ol className="process-steps">
          {(Object.keys(stepIcons) as StepKey[]).map((key, i) => {
            const Icon = stepIcons[key];
            return (
              <li key={key} className="process-step">
                <span className="process-icon">
                  <Icon size={24} strokeWidth={1.7} aria-hidden="true" />
                  <span className="process-number">{formatNumber(i + 1)}</span>
                </span>
                <div>
                  <h3 className="text-base font-bold text-text md:text-lg">{copy.steps[key].title}</h3>
                  <p className="mt-1.5 text-sm leading-7 text-text-muted">{copy.steps[key].description}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
