"use client";

import dynamic from "next/dynamic";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { profileData } from "@/data/profile";
import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Magnetic } from "@/components/ui/magnetic";
import { SocialLinks } from "@/components/ui/social-links";

const HeroCanvas = dynamic(
  () => import("@/components/ui/hero-canvas").then((mod) => mod.HeroCanvas),
  {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-primary/5 animate-pulse" />,
  }
);

export function HeroSection() {
  const { t, lang } = useLanguage();
  const heroRoles = t.hero.role
    .split("|")
    .map((role) => role.trim())
    .filter(Boolean);
  const [primaryRole, ...secondaryRoles] = heroRoles;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const textX = useTransform(smoothX, [-0.5, 0.5], [-16, 16]);
  const textY = useTransform(smoothY, [-0.5, 0.5], [-16, 16]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-hidden pt-24 pb-14 sm:pt-28 sm:pb-20 lg:min-h-screen lg:pt-32 lg:pb-24"
    >
      <div className="absolute inset-0 z-0">
        <HeroCanvas pointerX={smoothX} pointerY={smoothY} />
      </div>

      <Container className="relative z-10">
        <div className="pointer-events-none absolute inset-x-6 top-1/2 -z-10 h-[28rem] -translate-y-1/2 rounded-full bg-background/70 blur-3xl dark:bg-background/35 sm:inset-x-16 lg:h-[32rem]" />

        <motion.div
          style={{ perspective: 1200 }}
          className="w-full"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            style={{ rotateX, rotateY }}
            className="mx-auto flex max-w-5xl flex-col items-center text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex rounded-full border border-primary/15 bg-background/80 px-4 py-1.5 text-sm font-semibold tracking-wider text-indigo-700 shadow-sm shadow-primary/5 backdrop-blur-md dark:border-white/10 dark:bg-white/[0.07] dark:text-indigo-200 dark:shadow-transparent">
                {t.hero.greeting} {profileData.name}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              style={{ x: textX, y: textY }}
              className="mb-4 max-w-[12ch] text-5xl font-black tracking-tight text-balance sm:text-6xl lg:text-7xl xl:text-8xl"
            >
              <span className="drop-shadow-xl">{profileData.name}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease: [0.23, 1, 0.32, 1] }}
              className="mb-6 max-w-4xl text-lg font-semibold tracking-tight text-balance text-indigo-700 sm:text-2xl lg:text-3xl dark:text-indigo-300"
            >
              {primaryRole}
            </motion.p>

            {secondaryRoles.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.22, ease: [0.23, 1, 0.32, 1] }}
                className="mb-8 flex max-w-3xl flex-wrap justify-center gap-2.5"
              >
                {secondaryRoles.map((role) => (
                  <span
                    key={role}
                    className="rounded-full border border-slate-200/80 bg-white/80 px-3 py-1.5 text-sm text-slate-600 shadow-sm shadow-slate-200/30 backdrop-blur-md dark:border-white/8 dark:bg-white/[0.06] dark:text-slate-300"
                  >
                    {role}
                  </span>
                ))}
              </motion.div>
            )}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28, ease: [0.23, 1, 0.32, 1] }}
              className="mb-10 max-w-3xl px-1 text-base leading-relaxed text-balance text-slate-600 sm:text-lg lg:text-xl dark:text-slate-300/90"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.34, ease: [0.23, 1, 0.32, 1] }}
              className="flex w-full max-w-xl flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Magnetic strength={0.12}>
                <Button
                  size="lg"
                  className="group h-14 w-full rounded-2xl border border-transparent bg-linear-to-r from-indigo-600 via-primary to-violet-500 px-8 text-base text-white shadow-[0_18px_40px_-18px_rgba(99,102,241,0.55)] transition-all hover:from-indigo-500 hover:via-primary hover:to-violet-400 hover:shadow-[0_22px_44px_-20px_rgba(99,102,241,0.65)] active:scale-95 dark:from-indigo-400 dark:via-violet-400 dark:to-fuchsia-400 dark:text-slate-950 dark:shadow-[0_18px_40px_-18px_rgba(129,140,248,0.35)] sm:w-auto"
                  onClick={() =>
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {t.hero.ctaPrimary}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Magnetic>

              <Magnetic strength={0.12}>
                <Button
                  variant="outline"
                  size="lg"
                  className="group h-14 w-full rounded-2xl border border-slate-200/80 bg-white/78 px-8 text-base text-slate-800 shadow-lg shadow-slate-200/35 backdrop-blur-md transition-all hover:bg-white active:scale-95 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-100 dark:shadow-transparent dark:hover:bg-white/[0.10] sm:w-auto"
                  onClick={() => {
                    const isProd = process.env.NODE_ENV === "production";
                    const basePath = isProd ? "/MyPortfolio" : "";
                    window.open(`${basePath}${lang === "es" ? "/cv_es.pdf" : "/cv_en.pdf"}`, "_blank");
                  }}
                >
                  <Download className="mr-2 h-5 w-5 transition-transform group-hover:-translate-y-1" />
                  {t.hero.ctaSecondary}
                </Button>
              </Magnetic>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-12"
            >
              <SocialLinks className="flex-wrap justify-center" />
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent" />
    </section>
  );
}
