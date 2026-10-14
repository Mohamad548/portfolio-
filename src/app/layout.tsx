import type { Metadata } from "next";
import { Vazirmatn, Sora, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { profile } from "@/data/profile";
import "./globals.css";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic", "latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mohamadmahmodi.ir"),
  title: {
    default: `${profile.nameFa} | ${profile.titleFa}`,
    template: `%s | ${profile.nameFa}`,
  },
  description: profile.taglineFa,
  openGraph: {
    title: `${profile.nameEn} — ${profile.titleEn}`,
    description: profile.taglineEn,
    locale: "fa_IR",
    type: "website",
    images: [{ url: profile.photo }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.nameEn} — ${profile.titleEn}`,
    description: profile.taglineEn,
    images: [profile.photo],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazirmatn.variable} ${sora.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
