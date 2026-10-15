import type { AiMediaBase } from "./types";

export const aiStudioTools = ["Google Flow", "Veo", "Imagen"] as const;

export const aiCapabilities = ["adBanners", "realisticVideo", "prompting"] as const;

export type AiCapability = (typeof aiCapabilities)[number];

/**
 * Samples live in `public/ai-studio/`. Every `id` added here must also get a
 * title and description in `src/i18n/dictionaries/{fa,ckb,en}/ai-media.ts`.
 */
export const aiMedia = [] as const satisfies readonly AiMediaBase[];

export type AiMediaId = (typeof aiMedia)[number]["id"];
