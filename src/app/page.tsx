import dynamic from "next/dynamic";
import { HeroSection } from "@/sections/hero-section";
import { Footer } from "@/components/layout/footer";

// Dynamic imports for sections below the fold to reduce initial bundle size
const ProjectsSection = dynamic(() => import("@/sections/ProjectsSection").then(mod => mod.ProjectsSection));
const AboutSection = dynamic(() => import("@/sections/about").then(mod => mod.AboutSection));
const SkillsSection = dynamic(() => import("@/sections/skills").then(mod => mod.SkillsSection));
const ExperienceSection = dynamic(() => import("@/sections/experience").then(mod => mod.ExperienceSection));
const ServicesSection = dynamic(() => import("@/sections/services").then(mod => mod.ServicesSection));
const AchievementsSection = dynamic(() => import("@/sections/achievements").then(mod => mod.AchievementsSection));
const ContactSection = dynamic(() => import("@/sections/contact").then(mod => mod.ContactSection));

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col selection:bg-primary/20">

      {/* Hero Section (Static Import) */}
      <HeroSection />

      {/* Content Sections (Dynamic Imports) */}
      <ProjectsSection />
      <AboutSection />
      <AchievementsSection />
      <SkillsSection />
      <ExperienceSection />
      <ServicesSection />
      
      <ContactSection />
      <Footer />
    </main>
  );
}
