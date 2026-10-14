"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpLeft, Download, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="container-page grid items-center gap-10 py-16 md:grid-cols-[1.15fr_0.85fr] md:py-24 lg:gap-16">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1.5 text-xs text-text-muted"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent-2" />
            {profile.availableFa}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-mono mb-3 text-sm tracking-wide text-accent-2"
          >
            {profile.nameEn}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl font-semibold leading-[1.15] tracking-tight md:text-5xl lg:text-6xl"
          >
            <span className="block text-text">{profile.nameFa}</span>
            <span className="gradient-text mt-2 block text-3xl md:text-4xl lg:text-5xl">
              {profile.headlineFa}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-6 max-w-xl text-base leading-8 text-text-muted md:text-lg"
          >
            {profile.taglineFa}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button href="/projects">
              مشاهده نمونه‌کارها
              <ArrowUpLeft className="h-4 w-4" />
            </Button>
            <Button href="/contact" variant="outline">
              همکاری با من
            </Button>
            <Button href="/about" variant="ghost">
              <Download className="h-4 w-4" />
              درباره و رزومه
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-6 font-mono text-xs text-text-muted"
          >
            <span>Since {profile.yearsSince}</span>
            <span>React · Next.js · WordPress</span>
            <span>{profile.cityEn}</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.25),transparent_55%)] blur-2xl" />
          <div className="glass relative overflow-hidden rounded-[1.75rem] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <div className="mb-3 flex items-center gap-2 px-2 pt-1">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              <span className="font-mono mr-auto text-[11px] text-text-muted">
                portfolio.tsx — {profile.titleEn}
              </span>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src={profile.photo}
                alt={profile.nameFa}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 768px) 90vw, 420px"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#070b14] via-[#070b14]/55 to-transparent p-5">
                <p className="font-display text-lg font-semibold">{profile.titleFa}</p>
                <p className="font-mono text-xs text-accent-2">
                  Maktab Sharif · React Bootcamp
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
