"use client";

import { Container } from "@/components/ui/container";
import { useLanguage } from "@/components/providers/language-provider";
import { profileData } from "@/data/profile";
import { SocialLinks } from "@/components/ui/social-links";

export const Footer = () => {
  const { t, lang } = useLanguage();
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border/10 bg-muted/30 pt-16 pb-12">
      <div className="absolute bottom-0 left-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <Container>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="flex flex-col gap-4">
              <span className="bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-2xl font-bold tracking-tighter text-transparent">
                Jorge Gaitan
              </span>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                {profileData.bio}
              </p>
            </div>

            <nav className="flex flex-wrap gap-x-8 gap-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-primary"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col items-center justify-between gap-8 border-t border-border/10 pt-8 md:flex-row">
            <p className="order-2 text-sm font-medium tracking-tight text-muted-foreground md:order-1">
              &copy; {currentYear} —{" "}
              {lang === "en"
                ? `Crafted by ${profileData.name}.`
                : `Creado por ${profileData.name}.`}
            </p>

            <div className="order-1 flex items-center gap-6 md:order-2">
              <SocialLinks className="shrink-0 scale-90 gap-4" />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
