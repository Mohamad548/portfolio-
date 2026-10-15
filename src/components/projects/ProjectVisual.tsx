import Image from "next/image";
import { projectCover } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectVisual({
  slug,
  sizes,
  priority = false,
  className,
}: {
  slug: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("project-visual", className)}>
      <Image src={projectCover(slug)} alt="" fill sizes={sizes} priority={priority} className="object-cover" />
    </div>
  );
}
