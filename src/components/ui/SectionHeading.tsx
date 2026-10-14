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
        "mb-10 max-w-2xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow ? (
        <p className="font-mono mb-3 text-xs tracking-[0.18em] text-accent-2 uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-text md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-8 text-text-muted">{description}</p>
      ) : null}
    </div>
  );
}
