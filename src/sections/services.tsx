"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { useLanguage } from "@/components/providers/language-provider";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { servicesData } from "@/data/services";
import { Code, Layout, Server, Sparkles } from "lucide-react";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "code-icon": return <Code className="size-6 text-primary" />;
    case "design-pencil-icon": return <Layout className="size-6 text-blue-400" />;
    case "server-icon": return <Server className="size-6 text-purple-400" />;
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
            <div className="flex flex-col gap-4 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                {t.sectionTitles.services}
              </h2>
              <div className="h-1 w-20 bg-primary/20 rounded-full" />
            </div>

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
                  <div className="h-full p-8 rounded-3xl border border-white/10 dark:border-white/5 bg-white/5 dark:bg-white/[0.02] backdrop-blur-xl transition-all duration-500 overflow-hidden shadow-2xl shadow-black/5 group-hover:border-primary/20">
                    {/* Background Glow */}
                    <div className="absolute -right-20 -top-20 size-40 bg-primary/10 blur-[80px] group-hover:bg-primary/20 transition-all duration-500" />
                    
                    <div className="relative z-10 flex flex-col h-full gap-6">
                      <div className="size-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-500">
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
