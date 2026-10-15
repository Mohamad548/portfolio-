import type { Metadata } from "next";
import { Caveat, Vazirmatn, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { profile } from "@/data/profile";
import { localeMeta, locales } from "@/i18n/config";
import { I18nProvider } from "@/i18n/client";
import { pageMetadata } from "@/i18n/metadata";
import { getI18n } from "@/i18n/server";
import "../globals.css";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic", "latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "600",
  display: "swap",
  preload: false,
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getI18n();
  const { name, role } = t.ui.brand;
  const title = `${name} | ${role}`;

  return {
    ...pageMetadata(locale, "/", { description: t.profile.tagline }),
    metadataBase: new URL("https://mohamadmahmodi.ir"),
    title: { default: title, template: `%s | ${name}` },
    openGraph: {
      title,
      description: t.profile.tagline,
      locale: localeMeta[locale].openGraph,
      type: "website",
      images: [{ url: profile.photo }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: t.profile.tagline,
      images: [profile.photo],
    },
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { locale, dir, t } = await getI18n();

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${vazirmatn.variable} ${jetbrains.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <I18nProvider locale={locale} t={t.ui}>
          <a href="#main-content" className="skip-link">{t.ui.skipLink}</a>
          <Header />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
