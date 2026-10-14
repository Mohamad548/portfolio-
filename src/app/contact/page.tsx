import type { Metadata } from "next";
import { Mail, Phone, Link2, MapPin, Send } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "تماس",
  description: "ارتباط با محمد محمودی برای همکاری فرانت‌اند و پروژه‌های وردپرس/Next.js",
};

export default function ContactPage() {
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent("همکاری / پروژه فرانت‌اند")}`;

  return (
    <div className="section-pad">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="CONTACT"
            title="بیایید همکاری کنیم"
            description="برای پروژه فرانت‌اند، افزونه وردپرس، پنل Next.js یا بهینه‌سازی فروشگاه پیام بدهید."
          />
          <FadeIn>
            <ul className="space-y-4">
              {[
                {
                  icon: Phone,
                  label: "تلفن",
                  value: profile.phone,
                  href: `tel:${profile.phoneRaw}`,
                },
                {
                  icon: Mail,
                  label: "ایمیل",
                  value: profile.email,
                  href: `mailto:${profile.email}`,
                },
                {
                  icon: Link2,
                  label: "لینکدین",
                  value: profile.linkedinLabel,
                  href: profile.linkedin,
                },
                {
                  icon: MapPin,
                  label: "موقعیت",
                  value: profile.cityFa,
                },
              ].map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-bg-soft/70 p-4"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent-2">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs text-text-muted">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm hover:text-accent-2"
                        dir="ltr"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        <FadeIn delay={0.1}>
          <form
            action={mailto}
            className="rounded-3xl border border-border bg-bg-soft/70 p-6 md:p-8"
          >
            <h3 className="font-display text-xl font-semibold">ارسال پیام سریع</h3>
            <p className="mt-2 text-sm text-text-muted">
              با کلیک روی ارسال، ایمیل پیش‌فرض سیستم با موضوع همکاری باز می‌شود.
            </p>
            <div className="mt-6 space-y-4">
              <label className="block text-sm">
                <span className="mb-1.5 block text-text-muted">نام</span>
                <input
                  name="name"
                  required
                  className="focus-ring w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm outline-none"
                  placeholder="نام شما"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block text-text-muted">ایمیل</span>
                <input
                  name="email"
                  type="email"
                  required
                  className="focus-ring w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm outline-none"
                  placeholder="you@email.com"
                  dir="ltr"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block text-text-muted">پیام</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="focus-ring w-full resize-y rounded-xl border border-border bg-bg px-4 py-3 text-sm outline-none"
                  placeholder="درباره پروژه یا نقش موردنظر بنویسید..."
                />
              </label>
            </div>
            <Button type="submit" className="mt-6 w-full sm:w-auto">
              ارسال ایمیل
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </FadeIn>
      </div>
    </div>
  );
}
