import { notFound } from "next/navigation";

/** Routes unknown paths to the localized `not-found` page instead of the default one. */
export default function CatchAllPage() {
  notFound();
}
