import Image from "next/image";
import { profile } from "@/data/profile";

export function BrandAvatar({ priority = false }: { priority?: boolean }) {
  return (
    <span className="relative block h-10 w-10 shrink-0 overflow-hidden rounded-2xl border-2 border-white bg-gradient-to-br from-blue-100 to-blue-200 shadow-[0_5px_14px_rgba(37,99,235,0.2)]">
      <Image
        src={profile.photo}
        alt=""
        fill
        sizes="40px"
        priority={priority}
        className="object-cover object-[center_22%]"
      />
    </span>
  );
}
