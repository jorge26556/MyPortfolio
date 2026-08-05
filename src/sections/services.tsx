"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLanguage } from "@/components/providers/language-provider";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { servicesData } from "@/data/services";
import { Code, Layout, Server, Sparkles, Database, Bot, Zap } from "lucide-react";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "code-icon": return <Code className="size-6 text-blue-400" />;
    case "server-icon": return <Server className="size-6 text-purple-400" />;
    case "sparkles-icon": return <Zap className="size-6 text-yellow-400" />;
    case "database-icon": return <Database className="size-6 text-orange-400" />;
    case "design-pencil-icon": return <Layout className="size-6 text-pink-400" />;
    case "ai-icon": return <Bot className="size-6 text-indigo-400" />;
    default: return <Sparkles className="size-6 text-primary" />;
  }
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
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative h-full"
                >
                  <div className="surface h-full overflow-hidden p-8 transition-all duration-500 group-hover:border-primary/30">
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

                      <ul className="flex flex-col gap-3 mt-auto pt-6 border-t border-white/5">
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
