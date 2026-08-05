"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLanguage } from "@/components/providers/language-provider";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { achievementsData } from "@/data/achievements";
import { Award, GraduationCap, Quote, Mic, PlusSquare } from "lucide-react";

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Award":
      return <Award className="size-5 text-yellow-400" />;
    case "Certification":
      return <GraduationCap className="size-5 text-blue-400" />;
    case "Publication":
      return <Quote className="size-5 text-green-400" />;
    case "Speaking":
      return <Mic className="size-5 text-purple-400" />;
    default:
      return <PlusSquare className="size-5 text-primary" />;
  }
};

export const AchievementsSection = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="achievements" className="relative overflow-hidden py-24">
      <Container>
        <ScrollReveal variant="slide-up">
          <div className="flex flex-col gap-12">
            <SectionHeading title={t.sectionTitles.achievements} />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {achievementsData.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="surface surface-hover h-full p-6">
                    <div className="flex gap-6">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-muted/50 shadow-inner transition-all duration-500 group-hover:scale-110 group-hover:border-primary/30 group-hover:bg-primary/5">
                        {getCategoryIcon(achievement.category)}
                      </div>

                      <div className="flex flex-col gap-2">
                        <div className="flex flex-col">
                          <h3 className="text-lg font-bold leading-tight text-foreground transition-colors group-hover:text-primary">
                            {achievement.title[lang]}
                          </h3>
                          <span className="mt-1 text-xs font-semibold uppercase tracking-widest text-primary/60">
                            {achievement.issuer ? achievement.issuer[lang] : ""}
                            {achievement.date ? ` • ${achievement.date[lang]}` : ""}
                          </span>
                        </div>
                        {achievement.description && (
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            {achievement.description[lang]}
                          </p>
                        )}
                        {achievement.url && (
                          <a
                            href={achievement.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 flex items-center gap-1 text-xs font-bold text-primary underline-offset-4 hover:underline"
                          >
                            {lang === "en" ? "View credential" : "Ver credencial"}
                            <span className="text-[10px] opacity-70">↗</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};
