export type Language = "en" | "es";

export type BilingualText = Record<Language, string>;

export interface Translations {
  nav: {
    home: string;
    about: string;
    projects: string;
    experience: string;
    skills: string;
    services: string;
    contact: string;
  };
  hero: {
    greeting: string;
    role: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  sectionTitles: {
    about: string;
    projects: string;
    experience: string;
    skills: string;
    services: string;
    achievements: string;
    contact: string;
  };
  about: {
    content: string[];
  };
  contact: {
    sendButton: string;
    successMessage: string;
    title: string;
    description: string;
  };
  projects: {
    featured: string;
    featuredIntro: string;
    all: string;
    allProjects: string;
    viewCode: string;
    liveDemo: string;
  };
}

export const translationsData: Record<Language, Translations> = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre Mí",
      projects: "Proyectos",
      experience: "Experiencia",
      skills: "Habilidades",
      services: "Servicios",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      role: "AI Engineer & Full-Stack Developer | Agentes de IA & MCP | Automatización & RPA | Power Platform | Google Workspace",
      description:
        "Construyo soluciones digitales que combinan desarrollo, automatización e inteligencia artificial para resolver problemas reales de negocio. Desde aplicaciones web hasta procesos automatizados, mi enfoque es crear productos eficientes, escalables y centrados en el usuario.",
      ctaPrimary: "Ver proyectos",
      ctaSecondary: "Descargar CV",
    },
    sectionTitles: {
      about: "Perfil",
      projects: "Proyectos Destacados",
      experience: "Experiencia",
      skills: "Habilidades",
      services: "Servicios",
      achievements: "Certificaciones y Logros",
      contact: "Contacto",
    },
    about: {
      content: [
        "Ingeniero de Sistemas y Computación que construye soluciones de software, automatización e inteligencia artificial para resolver problemas reales de negocio, desde la idea hasta producción.",
        "Trabajo en tres frentes que se complementan: automatización de procesos con Microsoft Power Platform, Google Workspace, Python y RPA; ingeniería de IA, integrando modelos de lenguaje y agentes con APIs, bases de datos y herramientas externas para que ejecuten tareas reales, no solo conversen; y desarrollo full-stack de plataformas web con React, TypeScript, Node.js, Django y SQL.",
        "Esa combinación me permite entender un proceso de negocio, decidir si conviene resolverlo con low-code, con código a medida o con IA, y entregarlo integrado con los sistemas que la empresa ya usa."
      ],
    },
    contact: {
      sendButton: "Enviar mensaje",
      successMessage: "Email copiado con éxito",
      title: "Construyamos soluciones con impacto real",
      description: "Automatización, desarrollo e inteligencia artificial para llevar tu proyecto al siguiente nivel."
    },
    projects: {
      featured: "Destacado",
      featuredIntro:
        "Una selección de proyectos desarrollados con Power Platform, desarrollo full-stack e inteligencia artificial, enfocados en la automatización de procesos y la creación de soluciones escalables.",
      all: "Todos",
      allProjects: "Todos los proyectos",
      viewCode: "Ver código",
      liveDemo: "Demo en vivo",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      experience: "Experience",
      skills: "Skills",
      services: "Services",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      role: "AI Engineer & Full-Stack Developer | AI Agents & MCP | Automation & RPA | Power Platform | Google Workspace",
      description:
        "I build digital solutions that combine development, automation, and artificial intelligence to solve real business problems. From web applications to automated processes, my focus is on creating efficient, scalable, and user-centered products.",
      ctaPrimary: "View projects",
      ctaSecondary: "Download resume",
    },
    sectionTitles: {
      about: "Profile",
      projects: "Featured Projects",
      experience: "Experience",
      skills: "Skills",
      services: "Services",
      achievements: "Certifications & Achievements",
      contact: "Contact",
    },
    about: {
      content: [
        "Systems and Computer Engineer building software, automation, and AI solutions that solve real business problems, from idea to production.",
        "I work across three complementary fronts: process automation with Microsoft Power Platform, Google Workspace, Python, and RPA; AI engineering, connecting language models and agents to APIs, databases, and external tools so they carry out real tasks, not just chat; and full-stack development of web platforms with React, TypeScript, Node.js, Django, and SQL.",
        "That mix lets me understand a business process, decide whether it's best solved with low-code, custom code, or AI, and deliver it integrated with the systems the company already uses."
      ],
    },
    contact: {
      sendButton: "Send message",
      successMessage: "Email copied successfully",
      title: "Let's build solutions with real impact",
      description: "Automation, development, and AI to take your project to the next level."
    },
    projects: {
      featured: "Featured",
      featuredIntro:
        "A selection of projects developed with Power Platform, full-stack development, and artificial intelligence, focused on process automation and creating scalable solutions.",
      all: "All",
      allProjects: "All Projects",
      viewCode: "View Code",
      liveDemo: "Live Demo",
    },
  },
};
