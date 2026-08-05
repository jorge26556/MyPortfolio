"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLanguage } from "@/components/providers/language-provider";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { servicesData } from "@/data/services";
import { Code, Layout, Server, Sparkles, Database, Bot, Zap } from "lucide-react";

// The 400-weight tints were chosen against the dark theme and washed out on
// white. Each accent now has a darker light-mode partner.
const ICONS: Record<string, { Icon: typeof Code; color: string }> = {
  "code-icon": { Icon: Code, color: "text-blue-600 dark:text-blue-400" },
  "server-icon": { Icon: Server, color: "text-purple-600 dark:text-purple-400" },
  "sparkles-icon": { Icon: Zap, color: "text-amber-600 dark:text-amber-400" },
  "database-icon": { Icon: Database, color: "text-orange-600 dark:text-orange-400" },
  "design-pencil-icon": { Icon: Layout, color: "text-pink-600 dark:text-pink-400" },
  "ai-icon": { Icon: Bot, color: "text-indigo-600 dark:text-indigo-400" },
};

const getIcon = (iconName: string) => {
  const entry = ICONS[iconName];
  if (!entry) return <Sparkles className="size-6 text-primary" />;
  const { Icon, color } = entry;
  return <Icon className={`size-6 ${color}`} />;
};

export const ServicesSection = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <Container>
        <ScrollReveal variant="fade">
          <div className="flex flex-col gap-12">
            <SectionHeading title={t.sectionTitles.services} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: Math.min(index, 3) * 0.08 }}
                  className="group relative h-full"
                >
                  {/* Hover lift is CSS here, matching the project cards. A
                      framer `whileHover` on every card meant six more JS-driven
                      animations for something a transform can do for free. */}
                  <div className="surface h-full overflow-hidden p-8 transition-all duration-500 group-hover:-translate-y-2 group-hover:border-primary/30">
                    {/* Background Glow */}
                    <div className="absolute -right-20 -top-20 size-40 bg-primary/10 blur-[80px] group-hover:bg-primary/20 transition-all duration-500" />
                    
                    <div className="relative z-10 flex flex-col h-full gap-6">
                      <div className="flex size-14 items-center justify-center rounded-2xl border border-border/60 bg-muted/50 transition-all duration-500 group-hover:scale-110 group-hover:border-primary/30 group-hover:bg-primary/10">
                        {getIcon(service.icon)}
                      </div>

                      <div className="flex flex-col gap-3">
                        <h3 className="text-2xl font-bold text-foreground">
                          {service.title[lang]}
                        </h3>
                        {service.shortDescription && (
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {service.shortDescription[lang]}
                          </p>
                        )}
                      </div>

                      <ul className="mt-auto flex flex-col gap-3 border-t border-border/60 pt-6">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3 text-xs font-semibold tracking-wide text-foreground/70 uppercase">
                            <span className="size-1.5 rounded-full bg-primary/60" />
                            {feature[lang]}
                          </li>
                        ))}
                      </ul>
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
