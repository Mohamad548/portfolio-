import type { ExperienceBase } from "./types";

export const experience = [
  { id: "kasra", type: "work" },
  { id: "shahin", type: "work" },
  { id: "assembler", type: "work" },
  { id: "maktab", type: "course" },
  { id: "edu", type: "education" },
] as const satisfies readonly ExperienceBase[];

export type ExperienceId = (typeof experience)[number]["id"];
