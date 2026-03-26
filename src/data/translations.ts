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
      role: "Ingeniero de Sistemas y Computación | Full-Stack Developer | Generative AI Builder | Power Platform Developer | Agentic Software Engineer",
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
        "Ingeniero de Sistemas y Computación enfocado en desarrollo de aplicaciones, automatización de procesos y soluciones tecnológicas orientadas al negocio, con especial énfasis en Power Platform e inteligencia artificial.",
        "Experiencia en el diseño e implementación de soluciones con Power Apps, Power Automate, Dataverse, SQL y Python dentro del ecosistema Microsoft, impulsando la optimización y eficiencia operativa.",
        "Con formación en desarrollo full-stack (React, Node.js, Django), construyo soluciones end-to-end, escalables y centradas en el usuario, integrando IA generativa y automatización (RPA)."
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
      role: "Systems and Computer Engineer | Full-Stack Developer | Generative AI Builder | Power Platform Developer | Agentic Software Engineer",
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
        "Systems and Computer Engineer focused on application development, process automation, and business-oriented technology solutions, with special emphasis on Power Platform and artificial intelligence.",
        "Experienced in designing and implementing solutions with Power Apps, Power Automate, Dataverse, SQL, and Python within the Microsoft ecosystem, driving operational optimization and efficiency.",
        "With training in full-stack development (React, Node.js, Django), I build end-to-end, scalable, and user-centered solutions, integrating generative AI and automation (RPA)."
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
