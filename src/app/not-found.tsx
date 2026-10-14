import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="font-mono text-sm text-accent-2">404</p>
      <h1 className="font-display mt-3 text-3xl font-semibold">صفحه پیدا نشد</h1>
      <p className="mt-3 max-w-md text-text-muted">
        این مسیر وجود ندارد یا جابه‌جا شده است.
      </p>
      <Button href="/" className="mt-8">
        بازگشت به خانه
      </Button>
      <Link href="/projects" className="mt-4 text-sm text-text-muted hover:text-accent-2">
        مشاهده نمونه‌کارها
      </Link>
    </div>
  );
}
