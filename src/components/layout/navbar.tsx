"use client";

import { useState, useEffect, useCallback } from "react";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { useLanguage } from "@/components/providers/language-provider";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "projects", href: "#projects" },
  { key: "experience", href: "#experience" },
  { key: "skills", href: "#skills" },
  { key: "services", href: "#services" },
  { key: "contact", href: "#contact" },
] as const;

export function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // ── Track scroll for glassmorphism effect ──
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Intersection Observer for active section ──
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.key);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  // ── Smooth scroll handler ──
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      setMobileOpen(false);
    },
    []
  );

  // ── Lock body scroll when mobile menu open ──
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-border/30 bg-background/60 shadow-lg shadow-black/5 backdrop-blur-xl backdrop-saturate-150"
            : "bg-transparent"
        )}
      >
        <Container>
          <div className="flex h-16 items-center justify-between lg:h-18">
            {/* ── Logo ── */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="group flex items-center gap-2"
            >
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-transform duration-200 group-hover:scale-105">
                <span className="text-sm font-bold">P</span>
              </div>
              <span className="text-lg font-semibold tracking-tight">
                Portfolio
              </span>
            </a>

            {/* ── Desktop Nav ── */}
            <div className="hidden items-center gap-1 lg:flex">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-full",
                    activeSection === item.href.slice(1)
                      ? "text-primary bg-primary/10 shadow-[0_0_20px_rgba(var(--primary),0.1)]"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  )}
                >
                  {t.nav[item.key as keyof typeof t.nav]}
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      layoutId="active-nav"
                      className="absolute inset-0 rounded-full ring-1 ring-primary/30 -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* ── Desktop Actions ── */}
            <div className="hidden items-center gap-2 lg:flex">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>

            {/* ── Mobile Hamburger ── */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative flex size-10 items-center justify-center rounded-lg transition-colors hover:bg-muted lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <div className="flex w-5 flex-col items-center gap-[5px]">
                <span
                  className={cn(
                    "h-[2px] w-full rounded-full bg-foreground transition-all duration-300",
                    mobileOpen && "translate-y-[7px] rotate-45"
                  )}
                />
                <span
                  className={cn(
                    "h-[2px] w-full rounded-full bg-foreground transition-all duration-300",
                    mobileOpen && "opacity-0"
                  )}
                />
                <span
                  className={cn(
                    "h-[2px] w-full rounded-full bg-foreground transition-all duration-300",
                    mobileOpen && "-translate-y-[7px] -rotate-45"
                  )}
                />
              </div>
            </button>
          </div>
        </Container>
      </nav>

      {/* ── Mobile Menu Overlay ── */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
        onClick={() => setMobileOpen(false)}
      />

      {/* ── Mobile Menu Panel ── */}
      <div
        className={cn(
          "fixed top-0 right-0 z-40 flex h-full w-72 flex-col border-l border-border/30 bg-background/95 backdrop-blur-xl transition-transform duration-300 ease-out lg:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Spacer for navbar height */}
        <div className="h-16" />

        <div className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={cn(
                "rounded-lg px-4 py-3 text-base font-medium transition-colors duration-200",
                activeSection === item.key
                  ? "bg-primary/10 text-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {t.nav[item.key as keyof typeof t.nav]}
            </a>
          ))}
        </div>

        {/* Mobile actions */}
        <div className="flex items-center justify-between border-t border-border/30 px-4 py-4">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </>
  );
}
