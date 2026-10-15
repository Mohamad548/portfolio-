import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "start",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "start" | "center";
}) {
  return (
    <div
      className={cn(
        "mb-10 max-w-2xl md:mb-12",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow ? (
        <p className={cn("mb-3 inline-flex items-center gap-2 text-xs font-semibold text-accent", align === "center" && "justify-center")}>
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-[1.75rem] leading-[1.6] font-bold tracking-tight text-text md:text-[2.25rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-sm leading-8 text-text-muted md:text-base">{description}</p>
      ) : null}
    </div>
  );
}
