"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Expand, X } from "lucide-react";
import type { AiMedia, AiMediaKind } from "@/data/types";
import type { UiDictionary } from "@/i18n/dictionaries";
import { useI18n } from "@/i18n/client";
import { format } from "@/i18n/format";
import { cn } from "@/lib/utils";

type Filter = "all" | AiMediaKind;

const filters: readonly Filter[] = ["all", "image", "video"];

const gridSizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";

function MediaPreview({
  item,
  t,
  onEnlarge,
}: {
  item: AiMedia;
  t: UiDictionary["aiGallery"];
  onEnlarge: (item: AiMedia) => void;
}) {
  switch (item.kind) {
    case "image":
      return (
        <button
          type="button"
          onClick={() => onEnlarge(item)}
          aria-label={format(t.enlarge, { title: item.title })}
          className="focus-ring group relative block w-full overflow-hidden rounded-2xl"
        >
          <Image
            src={item.src}
            alt={item.title}
            width={item.width}
            height={item.height}
            sizes={gridSizes}
            className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <span
            aria-hidden="true"
            className="absolute end-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/85 text-accent opacity-0 shadow transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
          >
            <Expand size={16} />
          </span>
        </button>
      );
    case "video":
      return (
        <video
          src={item.src}
          poster={item.poster}
          width={item.width}
          height={item.height}
          controls
          playsInline
          preload="metadata"
          aria-label={item.title}
          className="h-auto w-full rounded-2xl bg-[#0f2547]"
        >
          {t.videoFallback}
        </video>
      );
    default: {
      const unhandled: never = item.kind;
      return unhandled;
    }
  }
}

export function AiGallery({ items, filterable = true }: { items: AiMedia[]; filterable?: boolean }) {
  const { t } = useI18n();
  const copy = t.aiGallery;
  const [filter, setFilter] = useState<Filter>("all");
  const [enlarged, setEnlarged] = useState<AiMedia | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const showFilters = filterable && new Set(items.map((item) => item.kind)).size > 1;
  const visible = filter === "all" ? items : items.filter((item) => item.kind === filter);

  function enlarge(item: AiMedia) {
    setEnlarged(item);
    dialogRef.current?.showModal();
  }

  return (
    <div>
      {showFilters ? (
        <div role="group" aria-label={copy.filterLabel} className="mb-6 flex flex-wrap gap-2">
          {filters.map((id) => (
            <button
              key={id}
              type="button"
              aria-pressed={filter === id}
              onClick={() => setFilter(id)}
              className={cn(
                "focus-ring rounded-full px-4 py-2 text-sm transition-colors",
                filter === id
                  ? "bg-accent text-white"
                  : "border border-border bg-white/5 text-text-muted hover:text-text",
              )}
            >
              {id === "all" ? copy.all : copy.kinds[id]}
            </button>
          ))}
        </div>
      ) : null}

      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {visible.map((item) => (
          <figure key={item.id} className="glass-panel mb-5 break-inside-avoid rounded-3xl p-2">
            <MediaPreview item={item} t={copy} onEnlarge={enlarge} />
            <figcaption className="px-3 pt-3 pb-2">
              <p className="text-sm font-bold text-text">{item.title}</p>
              <p className="mt-1 text-xs leading-6 text-text-muted">{item.description}</p>
              <p className="mt-2 text-[11px] text-accent">
                <span dir="ltr">{item.tools.join(" · ")}</span>
              </p>
            </figcaption>
          </figure>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        aria-label={enlarged?.title}
        onClose={() => setEnlarged(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
        className="m-auto max-h-[92vh] w-[min(64rem,94vw)] overflow-auto rounded-3xl border-0 bg-white p-3 shadow-2xl backdrop:bg-[#0f2547]/60 backdrop:backdrop-blur-sm"
      >
        {enlarged ? (
          <>
            <Image
              src={enlarged.src}
              alt={enlarged.title}
              width={enlarged.width}
              height={enlarged.height}
              sizes="94vw"
              className="mx-auto h-auto max-h-[78vh] w-auto rounded-2xl"
            />
            <div className="flex items-start justify-between gap-4 px-2 pt-3">
              <div>
                <p className="text-sm font-bold text-text">{enlarged.title}</p>
                <p className="mt-1 text-xs leading-6 text-text-muted">{enlarged.description}</p>
              </div>
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                aria-label={copy.close}
                className="focus-ring inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-white text-text transition-colors hover:bg-blue-50"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </>
        ) : null}
      </dialog>
    </div>
  );
}
