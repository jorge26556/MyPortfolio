"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Copy, Check, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/providers/language-provider";
import { profileData } from "@/data/profile";
import { SocialLinks } from "@/components/ui/social-links";
import { Magnetic } from "@/components/ui/magnetic";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const ContactSection = () => {
  const { lang, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const contactSummary =
    lang === "en"
      ? "I am a Full-Stack and Power Platform Developer passionate about creating pleasant, intuitive, functional, and user-centered applications. I also design enterprise solutions and automations tailored to real business needs."
      : "Soy desarrollador Full-Stack y Power Platform Developer, apasionado por crear aplicaciones agradables, intuitivas, funcionales y centradas en el usuario. También diseño soluciones empresariales y automatizaciones ajustadas a necesidades reales de negocio.";

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <Container>
        <ScrollReveal variant="fade">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
            <motion.div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary ring-1 ring-primary/20">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                {t.nav.contact}
              </div>

              <h2 className="mb-8 text-4xl font-bold tracking-tight text-balance sm:text-6xl">
                {t.contact.title}
              </h2>

              <p className="mb-10 max-w-2xl text-xl leading-relaxed text-muted-foreground">
                {t.contact.description}
              </p>

              <div className="flex flex-col gap-6">
                <div className="group flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-2xl border border-border/50 bg-muted/50 transition-colors group-hover:border-primary/20 group-hover:bg-primary/10">
                    <Mail className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                      Email
                    </p>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="text-lg font-semibold transition-colors hover:text-primary"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>

                <div className="group flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-2xl border border-border/50 bg-muted/50 transition-colors group-hover:border-primary/20 group-hover:bg-primary/10">
                    <ExternalLink className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                      {lang === "en" ? "Socials" : "Redes"}
                    </p>
                    <SocialLinks className="mt-1" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div className="relative">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-primary/10 blur-3xl" />
              <div className="glass rounded-[3rem] p-8 sm:p-14">
                <div className="text-center">
                  <div className="mb-8 inline-flex size-20 items-center justify-center rounded-3xl border border-primary/20 bg-primary/10">
                    <Mail className="size-10 text-primary" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold">
                    {lang === "en" ? "Ready to talk?" : "¿Listo para hablar?"}
                  </h3>
                  <p className="mb-10 text-muted-foreground">
                    {lang === "en"
                      ? "Feel free to reach out if you're looking for a developer, have a question, or just want to connect."
                      : "No dudes en contactarme si estás buscando un desarrollador, tienes alguna pregunta o simplemente quieres conectar."}
                  </p>

                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Magnetic strength={0.2}>
                      <Button
                        size="lg"
                        className="group h-14 w-full rounded-2xl bg-primary px-8 text-primary-foreground hover:bg-primary/90 sm:w-auto"
                        onClick={() => window.location.href = `mailto:${profileData.email}`}
                      >
                        <Mail className="mr-2 size-5" />
                        {t.contact.sendButton}
                      </Button>
                    </Magnetic>
                    <Magnetic strength={0.2}>
                      <Button
                        variant="outline"
                        size="lg"
                        className="relative h-14 w-full overflow-hidden rounded-2xl border-border/50 bg-background/50 px-8 hover:bg-muted sm:w-auto"
                        onClick={copyEmail}
                      >
                        <AnimatePresence mode="wait">
                          {copied ? (
                            <motion.div
                              key="check"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              className="flex items-center"
                            >
                              <Check className="mr-2 size-5 text-green-500" />
                              {t.contact.successMessage}
                            </motion.div>
                          ) : (
                            <motion.div
                              key="copy"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              className="flex items-center"
                            >
                              <Copy className="mr-2 size-5" />
                              {lang === "en" ? "Copy Email" : "Copiar email"}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </Button>
                    </Magnetic>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};
