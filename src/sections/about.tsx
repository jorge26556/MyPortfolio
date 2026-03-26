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

            <div className="glass group relative overflow-hidden rounded-[2rem] p-8 transition-all duration-500 hover:shadow-primary/5 md:p-12">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative z-10 flex flex-col gap-6">
                <h3 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  {lang === "en" ? "Professional & Tech Focus" : "Profesional & Enfoque Tecnológico"}
                </h3>
                <div className="flex flex-col gap-4">
                  {t.about.content.map((paragraph, i) => (
                    <p key={i} className="text-base leading-relaxed text-muted-foreground md:text-lg md:leading-loose">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};
