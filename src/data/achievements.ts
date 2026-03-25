import { type BilingualText } from "@/data/translations";

export interface Achievement {
  id: string;
  title: BilingualText;
  date?: string;
  description?: BilingualText;
  category: string;
  issuer?: BilingualText;
  url?: string;
  icon?: string;
}

export const achievementsData: Achievement[] = [
  {
    id: "ach-1",
    title: {
      es: "Certificación de inglés nivel B2",
      en: "B2 English Certification",
    },
    description: {
      es: "Certificación de dominio del idioma inglés en nivel B2.",
      en: "English language proficiency certification at B2 level.",
    },
    category: "Certification",
    issuer: {
      es: "Open English",
      en: "Open English",
    },
  },
  {
    id: "ach-2",
    title: {
      es: "Linux Essentials",
      en: "Linux Essentials",
    },
    description: {
      es: "Fundamentos de sistemas Linux y operación básica en entornos técnicos.",
      en: "Linux systems fundamentals and basic operation in technical environments.",
    },
    category: "Certification",
    issuer: {
      es: "Linux Essentials",
      en: "Linux Essentials",
    },
  },
  {
    id: "ach-3",
    title: {
      es: "Certificación de prácticas",
      en: "Internship Certification",
    },
    description: {
      es: "Reconocimiento de prácticas profesionales realizadas en el sector público.",
      en: "Recognition of professional internship completed in the public sector.",
    },
    category: "Award",
    issuer: {
      es: "Banco de la República",
      en: "Banco de la República",
    },
  },
  {
    id: "ach-4",
    title: {
      es: "Máster en IA generativa con ChatGPT y Azure",
      en: "Generative AI Master with ChatGPT and Azure",
    },
    description: {
      es: "Formación orientada a IA generativa aplicada a productos y soluciones.",
      en: "Training focused on generative AI applied to products and solutions.",
    },
    category: "Certification",
    issuer: {
      es: "Udemy",
      en: "Udemy",
    },
  },
  {
    id: "ach-5",
    title: {
      es: "IA generativa con Midjourney, ChatGPT y otras IAs",
      en: "Generative AI with Midjourney, ChatGPT, and other AI tools",
    },
    description: {
      es: "Exploración práctica de herramientas de IA generativa para productividad y creatividad.",
      en: "Hands-on exploration of generative AI tools for productivity and creativity.",
    },
    category: "Certification",
    issuer: {
      es: "Udemy",
      en: "Udemy",
    },
  },
  {
    id: "ach-6",
    title: {
      es: "Certificación en creación de páginas web",
      en: "Website Creation Certification",
    },
    description: {
      es: "Bases de creación y publicación de sitios web.",
      en: "Foundations of website creation and publishing.",
    },
    category: "Certification",
    issuer: {
      es: "Platzi",
      en: "Platzi",
    },
  },
  {
    id: "ach-7",
    title: {
      es: "Herramientas de IA para Developers",
      en: "AI Tools for Developers",
    },
    description: {
      es: "Uso de herramientas de IA para acelerar flujos de desarrollo y aprendizaje.",
      en: "Use of AI tools to accelerate development and learning workflows.",
    },
    category: "Certification",
    issuer: {
      es: "Platzi",
      en: "Platzi",
    },
  },
  {
    id: "ach-8",
    title: {
      es: "Web Development Bootcamp",
      en: "Web Development Bootcamp",
    },
    description: {
      es: "Formación en desarrollo web completo, actualmente en progreso.",
      en: "Comprehensive web development training, currently in progress.",
    },
    category: "Certification",
    issuer: {
      es: "Udemy",
      en: "Udemy",
    },
  },
  {
    id: "ach-9",
    title: {
      es: "Machine Learning y Data Science con Python",
      en: "Machine Learning and Data Science with Python",
    },
    description: {
      es: "Aprendizaje aplicado de ciencia de datos y machine learning, en progreso.",
      en: "Applied learning in data science and machine learning, in progress.",
    },
    category: "Certification",
    issuer: {
      es: "Udemy",
      en: "Udemy",
    },
  },
  {
    id: "ach-10",
    title: {
      es: "Django: Crea aplicaciones web robustas con Python",
      en: "Django: Build Robust Web Applications with Python",
    },
    description: {
      es: "Profundización en Django y desarrollo backend, en progreso.",
      en: "Deepening Django and backend development, in progress.",
    },
    category: "Certification",
    issuer: {
      es: "Udemy",
      en: "Udemy",
    },
  },
];
