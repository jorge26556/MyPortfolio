"use client";

import { Container } from "@/components/ui/container";
import { useLanguage } from "@/components/providers/language-provider";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const AboutSection = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="about" className="relative overflow-hidden py-24">
      <Container>
        <ScrollReveal variant="slide-up">
          <div className="flex flex-col gap-12">
            <div className="flex max-w-2xl flex-col gap-4">
              <h2 className="text-gradient text-4xl font-bold tracking-tight md:text-5xl">
                {t.sectionTitles.about}
              </h2>
              <div className="h-1 w-20 rounded-full bg-primary/30" />
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="glass group relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-primary/5">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <h3 className="mb-4 text-xl font-bold tracking-tight text-primary">
                  {lang === "en" ? "Professional Summary" : "Resumen profesional"}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground lg:text-base">
                  {t.about.professionalSummary}
                </p>
              </div>

              <div className="glass group relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-500/5">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <h3 className="mb-4 text-xl font-bold tracking-tight text-blue-400 dark:text-blue-300">
                  {lang === "en" ? "Current Focus" : "Enfoque actual"}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground lg:text-base">
                  {t.about.currentFocus}
                </p>
              </div>

              <div className="glass group relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-violet-500/5">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <h3 className="mb-4 text-xl font-bold tracking-tight text-violet-400 dark:text-violet-300">
                  {lang === "en" ? "My Story" : "Mi historia"}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground lg:text-base">
                  {t.about.shortStory}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};
