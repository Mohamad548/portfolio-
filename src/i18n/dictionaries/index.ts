import type { Locale } from "../config";
import { ckb } from "./ckb";
import { en } from "./en";
import { fa } from "./fa";
import type { Dictionary } from "./types";

export const dictionaries: Record<Locale, Dictionary> = { fa, ckb, en };

export type { Dictionary, PagesDictionary, ProfileCopy, UiDictionary } from "./types";
