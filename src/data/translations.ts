export type Language = 'en' | 'es';

export interface Translations {
  nav: {
    home: string;
    about: string;
    projects: string;
    skills: string;
    experience: string;
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
    skills: string;
    experience: string;
    services: string;
    achievements: string;
    contact: string;
  };
  contact: {
    emailPlaceholder: string;
    messagePlaceholder: string;
    sendButton: string;
    successMessage: string;
  };
}

export const en: Translations = {
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    skills: "Skills",
    experience: "Experience",
    services: "Services",
    contact: "Contact"
  },
  hero: {
    greeting: "Hello, I'm",
    role: "Full Stack Developer",
    description: "I build exceptional and accessible digital experiences for the web.",
    ctaPrimary: "View My Work",
    ctaSecondary: "Download Resume"
  },
  sectionTitles: {
    about: "About Me",
    projects: "Featured Projects",
    skills: "My Skills",
    experience: "Work Experience",
    services: "Services I Offer",
    achievements: "Achievements",
    contact: "Get In Touch"
  },
  contact: {
    emailPlaceholder: "Your email address",
    messagePlaceholder: "How can I help you?",
    sendButton: "Send Message",
    successMessage: "Message sent successfully!"
  }
};

export const es: Translations = {
  nav: {
    home: "Inicio",
    about: "Sobre Mí",
    projects: "Proyectos",
    skills: "Habilidades",
    experience: "Experiencia",
    services: "Servicios",
    contact: "Contacto"
  },
  hero: {
    greeting: "Hola, soy",
    role: "Desarrollador Full Stack",
    description: "Construyo experiencias digitales excepcionales y accesibles para la web.",
    ctaPrimary: "Ver mi trabajo",
    ctaSecondary: "Descargar CV"
  },
  sectionTitles: {
    about: "Sobre Mí",
    projects: "Proyectos Destacados",
    skills: "Mis Habilidades",
    experience: "Experiencia Laboral",
    services: "Servicios que Ofrezco",
    achievements: "Logros",
    contact: "Contáctame"
  },
  contact: {
    emailPlaceholder: "Tu correo electrónico",
    messagePlaceholder: "¿En qué puedo ayudarte?",
    sendButton: "Enviar Mensaje",
    successMessage: "¡Mensaje enviado con éxito!"
  }
};

export const translationsData: Record<Language, Translations> = { en, es };
