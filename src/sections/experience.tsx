"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Container } from "@/components/ui/container";
import { useLanguage } from "@/components/providers/language-provider";
import { experienceData } from "@/data/experience";
import { Calendar, Briefcase, MapPin } from "lucide-react";

export const ExperienceSection = () => {
  const { t, lang } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="experience"
      className="relative overflow-hidden py-24"
      ref={containerRef}
    >
      <Container>
        <div className="flex flex-col gap-12">
          <div className="flex max-w-2xl flex-col gap-4">
            <h2 className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl">
              {t.sectionTitles.experience}
            </h2>
            <div className="h-1 w-20 rounded-full bg-primary/20" />
          </div>

          <div className="relative mt-20">
            <div className="absolute top-0 bottom-0 left-4 hidden w-[2px] bg-border/20 sm:block md:left-1/2 md:-translate-x-1/2">
              <motion.div
                style={{ scaleY, originY: 0 }}
                className="absolute inset-0 bg-linear-to-b from-primary via-primary/50 to-transparent"
              />
            </div>

            <div className="space-y-24">
              {experienceData.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  className={`relative flex flex-col items-center gap-8 md:flex-row ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="absolute top-0 left-4 z-10 hidden sm:block md:left-1/2 md:-translate-x-1/2">
                    <div className="relative flex h-3 w-3 items-center justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        className="absolute inset-0 animate-ping rounded-full bg-primary/30"
                      />
                      <div className="relative h-2 w-2 rounded-full bg-primary" />
                    </div>
                  </div>

                  <div className="group w-full md:w-[45%]">
                    <div className="glass relative rounded-[2.5rem] p-8 transition-all duration-500 hover:border-primary/30 group-hover:-translate-y-2 group-hover:shadow-primary/5">
                      <div className="flex flex-col gap-6">
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <span className="flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                            <Calendar className="size-3" />
                            {exp.startDate} — {exp.endDate}
                          </span>
                          {exp.location && (
                            <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground/80">
                              <MapPin className="size-3" />
                              {exp.location[lang]}
                            </span>
                          )}
                        </div>

                        <div>
                          <h3 className="mb-1 text-2xl font-bold text-foreground">
                            {exp.role[lang]}
                          </h3>
                          <div className="flex items-center gap-2 text-lg font-semibold text-muted-foreground/80 transition-colors duration-300 group-hover:text-primary">
                            <Briefcase className="size-4" />
                            {exp.company}
                          </div>
                        </div>

                        <ul className="space-y-4">
                          {exp.description.map((item, i) => (
                            <li
                              key={i}
                              className="flex gap-4 text-sm leading-relaxed text-muted-foreground"
                            >
                              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary/40 transition-transform duration-300 group-hover:scale-125" />
                              {item[lang]}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-2 flex flex-wrap gap-2.5 border-t border-primary/5 pt-6">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-xl border border-primary/10 bg-primary/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-primary/70 transition-all duration-300 hover:border-primary/30 hover:text-primary"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-[45%]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
