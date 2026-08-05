"use client";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
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
            <SectionHeading title={t.sectionTitles.skills} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => {
                const categorySkills = skillsData.filter((s) => s.category === category);
                if (categorySkills.length === 0) return null;

                return (
                  <div key={category} className="surface surface-hover group relative p-8">
                    <h3 className="text-lg font-bold mb-6 text-foreground/80 tracking-wider uppercase">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {categorySkills.map((skill) => (
                        <div
                          key={skill.id}
                          className="flex cursor-default items-center gap-2 rounded-xl border border-border/60 bg-muted/40 px-4 py-2 shadow-sm transition-all duration-300 group/skill hover:border-primary/50 hover:bg-primary/5 dark:bg-white/5"
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
