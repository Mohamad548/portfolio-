import { cn } from "@/lib/utils";

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "start",
}: {
  id?: string;
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
      {eyebrow ? <p className="eyebrow-pill mb-4">{eyebrow}</p> : null}
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-[0.95rem] leading-8 text-text-muted md:text-base">{description}</p>
      ) : null}
    </div>
  );
}
