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
      es: "Creación de páginas web",
      en: "Website Creation",
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
    date: "2025"
  },
  {
    id: "ach-2",
    title: {
      es: "Herramientas de AI para Developers",
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
    date: "2025"
  },
  {
    id: "ach-3",
    title: {
      es: "IA Generativa con ChatGPT y Azure",
      en: "Generative AI with ChatGPT and Azure",
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
    date: "2024"
  },
  {
    id: "ach-4",
    title: {
      es: "IA Generativa con Midjourney, ChatGPT y otras IAs",
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
    date: "2024"
  },
  {
    id: "ach-5",
    title: {
      es: "NDG Linux Essentials",
      en: "NDG Linux Essentials",
    },
    description: {
      es: "Fundamentos de sistemas Linux y operación básica en entornos técnicos.",
      en: "Linux systems fundamentals and basic operation in technical environments.",
    },
    category: "Certification",
    issuer: {
      es: "Cisco Networking Academy",
      en: "Cisco Networking Academy",
    },
    date: "2022"
  },
  {
    id: "ach-6",
    title: {
      es: "Certificación nivel B2 de inglés",
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
    date: "2020"
  },
  {
    id: "ach-7",
    title: {
      es: "Web Development Bootcamp",
      en: "Web Development Bootcamp",
    },
    description: {
      es: "Formación en desarrollo web completo.",
      en: "Comprehensive web development training.",
    },
    category: "Certification",
    issuer: {
      es: "Udemy",
      en: "Udemy",
    },
    date: "Cursando"
  },
  {
    id: "ach-8",
    title: {
      es: "Machine Learning y Data Science con Python",
      en: "Machine Learning and Data Science with Python",
    },
    description: {
      es: "Aprendizaje aplicado de ciencia de datos y machine learning.",
      en: "Applied learning in data science and machine learning.",
    },
    category: "Certification",
    issuer: {
      es: "Udemy",
      en: "Udemy",
    },
    date: "Cursando"
  },
  {
    id: "ach-9",
    title: {
      es: "Django: Crea aplicaciones web robustas con Python",
      en: "Django: Build Robust Web Applications with Python",
    },
    description: {
      es: "Profundización en Django y desarrollo backend.",
      en: "Deepening Django and backend development.",
    },
    category: "Certification",
    issuer: {
      es: "Udemy",
      en: "Udemy",
    },
    date: "Cursando"
  }
];
