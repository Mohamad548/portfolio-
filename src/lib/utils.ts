import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function levelLabel(level: string, locale: "fa" | "en" = "fa") {
  const map = {
    expert: { fa: "خبره", en: "Expert" },
    advanced: { fa: "پیشرفته", en: "Advanced" },
    intermediate: { fa: "متوسط", en: "Intermediate" },
  } as const;
  return map[level as keyof typeof map]?.[locale] ?? level;
}
