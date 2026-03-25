// ─── Profile ────────────────────────────────────────────────
export interface Profile {
  name: string;
  role: string;
  bio: string;
  email: string;
  location: string;
  avatarUrl: string;
  resumeUrl?: string;
  social: SocialLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

// ─── Projects ───────────────────────────────────────────────
export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

// ─── Skills ─────────────────────────────────────────────────
export interface SkillCategory {
  categoryKey: string;
  items: Skill[];
}

export interface Skill {
  name: string;
  icon?: string;
  level?: number; // 0-100
}

// ─── Experience ─────────────────────────────────────────────
export interface Experience {
  id: string;
  roleKey: string;
  company: string;
  companyUrl?: string;
  periodKey: string;
  descriptionKeys: string[];
  technologies?: string[];
}

// ─── Services ───────────────────────────────────────────────
export interface Service {
  id: string;
  titleKey: string;
  descriptionKey: string;
  icon?: string;
}

// ─── Achievements ───────────────────────────────────────────
export interface Achievement {
  id: string;
  titleKey: string;
  descriptionKey: string;
  metric?: string;
  icon?: string;
}

// ─── Translations ───────────────────────────────────────────
export type Locale = "en" | "es";

export interface TranslationSet {
  [key: string]: string | TranslationSet;
}

export type Translations = Record<Locale, TranslationSet>;
