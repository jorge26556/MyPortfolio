"use client";

import { Container } from "@/components/ui/container";
import { useLanguage } from "@/components/providers/language-provider";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { skillsData, SkillCategory } from "@/data/skills";

const categories: SkillCategory[] = ["Frontend", "Backend", "Database", "Cloud & Platform", "Tools"];

export const SkillsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 relative">
      <Container>
        <ScrollReveal variant="fade">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                {t.sectionTitles.skills}
              </h2>
              <div className="h-1 w-20 bg-primary/20 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => {
                const categorySkills = skillsData.filter((s) => s.category === category);
                if (categorySkills.length === 0) return null;

                return (
                  <div key={category} className="group relative p-8 rounded-3xl border border-white/10 dark:border-white/5 bg-white/5 dark:bg-white/[0.02] backdrop-blur-2xl shadow-xl hover:shadow-2xl hover:border-white/20 transition-all duration-500">
                    <h3 className="text-lg font-bold mb-6 text-foreground/80 tracking-wider uppercase">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {categorySkills.map((skill) => (
                        <div
                          key={skill.id}
                          className="px-4 py-2 rounded-xl bg-white/10 dark:bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default flex items-center gap-2 group/skill shadow-sm"
                        >
                          <span className="text-sm font-medium group-hover/skill:text-primary transition-colors">
                            {skill.name}
                          </span>
                          {skill.proficiencyPercentage && (
                              <div className="w-1 h-1 rounded-full bg-primary/40 group-hover/skill:scale-150 transition-transform" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};
