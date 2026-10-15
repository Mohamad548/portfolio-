import type { Metadata } from "next";
import { Link2, Mail, MapPin, Phone, Send, type LucideIcon } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { pageMetadata } from "@/i18n/metadata";
import { getI18n } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getI18n();
  return pageMetadata(locale, "/contact", {
    title: t.ui.nav.contact,
    description: t.pages.contact.description,
  });
}

type Channel = { icon: LucideIcon; label: string; value: string; href?: string };

export default async function ContactPage() {
  const { t } = await getI18n();
  const copy = t.pages.contact;
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(copy.form.mailSubject)}`;

  const channels: Channel[] = [
    { icon: Phone, label: copy.channels.phone, value: profile.phone, href: `tel:${profile.phoneRaw}` },
    { icon: Mail, label: copy.channels.email, value: profile.email, href: `mailto:${profile.email}` },
    { icon: Link2, label: copy.channels.linkedin, value: profile.linkedinLabel, href: profile.linkedin },
    { icon: MapPin, label: copy.channels.location, value: t.profile.city },
  ];

  return (
    <div className="section-pad">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading eyebrow="CONTACT" title={copy.title} description={copy.description} />
          <FadeIn>
            <ul className="space-y-4">
              {channels.map((item) => (
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
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-bg-soft/70 p-4">
              <div>
                <p className="text-sm font-semibold">{copy.socialTitle}</p>
                <p className="mt-1 text-xs text-text-muted">{copy.socialNote}</p>
              </div>
              <SocialLinks />
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.1}>
          <form action={mailto} className="rounded-3xl border border-border bg-bg-soft/70 p-6 md:p-8">
            <h3 className="font-display text-xl font-semibold">{copy.form.title}</h3>
            <p className="mt-2 text-sm text-text-muted">{copy.form.note}</p>
            <div className="mt-6 space-y-4">
              <label className="block text-sm">
                <span className="mb-1.5 block text-text-muted">{copy.form.name}</span>
                <input
                  name="name"
                  required
                  className="focus-ring w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm outline-none"
                  placeholder={copy.form.namePlaceholder}
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block text-text-muted">{copy.form.email}</span>
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
                <span className="mb-1.5 block text-text-muted">{copy.form.message}</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="focus-ring w-full resize-y rounded-xl border border-border bg-bg px-4 py-3 text-sm outline-none"
                  placeholder={copy.form.messagePlaceholder}
                />
              </label>
            </div>
            <Button type="submit" className="mt-6 w-full sm:w-auto">
              {copy.form.submit}
              <Send className="h-4 w-4" aria-hidden="true" />
            </Button>
          </form>
        </FadeIn>
      </div>
    </div>
  );
}
