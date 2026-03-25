"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
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
            <div className="flex max-w-2xl flex-col gap-4">
              <h2 className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl">
                {t.sectionTitles.achievements}
              </h2>
              <div className="h-1 w-20 rounded-full bg-primary/20" />
            </div>

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
                  <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/5 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/10 dark:border-white/5 dark:bg-white/[0.02] dark:hover:border-white/10 dark:hover:bg-white/[0.05]">
                    <div className="flex gap-6">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 shadow-inner transition-all duration-500 group-hover:scale-110 group-hover:border-primary/30 group-hover:bg-primary/5">
                        {getCategoryIcon(achievement.category)}
                      </div>

                      <div className="flex flex-col gap-2">
                        <div className="flex flex-col">
                          <h3 className="text-lg font-bold leading-tight text-foreground transition-colors group-hover:text-primary">
                            {achievement.title[lang]}
                          </h3>
                          <span className="mt-1 text-xs font-semibold uppercase tracking-widest text-primary/60">
                            {achievement.issuer ? achievement.issuer[lang] : ""}
                            {achievement.date ? ` • ${achievement.date}` : ""}
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
