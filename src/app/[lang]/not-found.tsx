import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { getI18n } from "@/i18n/server";

export default async function NotFound() {
  const { t, link } = await getI18n();
  const copy = t.pages.notFound;

  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="font-mono text-sm text-accent-2">404</p>
      <h1 className="font-display mt-3 text-3xl font-semibold">{copy.title}</h1>
      <p className="mt-3 max-w-md text-text-muted">{copy.description}</p>
      <Button href={link("/")} className="mt-8">
        {copy.home}
      </Button>
      <Link href={link("/projects")} className="mt-4 text-sm text-text-muted hover:text-accent-2">
        {copy.projects}
      </Link>
    </div>
  );
}
