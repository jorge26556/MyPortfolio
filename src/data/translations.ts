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
    professionalSummary: string;
    currentFocus: string;
    shortStory: string;
  };
  contact: {
    sendButton: string;
    successMessage: string;
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
      role: "Ingeniero de Sistemas y Computación | Full-Stack Developer | Power Platform Developer | Generative AI Builder | Agentic Software Engineer",
      description:
        "Diseño y desarrollo soluciones digitales modernas, desde aplicaciones web y móviles hasta automatizaciones empresariales y software potenciado por IA. Me enfoco en crear productos funcionales, escalables y centrados en el usuario.",
      ctaPrimary: "Ver proyectos",
      ctaSecondary: "Descargar CV",
    },
    sectionTitles: {
      about: "Sobre Mí",
      projects: "Proyectos Destacados",
      experience: "Experiencia",
      skills: "Habilidades",
      services: "Servicios",
      achievements: "Certificaciones y Logros",
      contact: "Contacto",
    },
    about: {
      professionalSummary:
        "Soy ingeniero de sistemas y computación con más de 4 años de experiencia construyendo aplicaciones, automatizaciones y soluciones tecnológicas orientadas a resolver necesidades reales de negocio y de usuario. Me caracterizo por mi proactividad, dedicación, orientación al detalle y capacidad para trabajar de forma efectiva en equipos multidisciplinarios.",
      currentFocus:
        "A lo largo de mi trayectoria he trabajado en desarrollo de aplicaciones Android, aplicaciones web, bases de datos, automatización de procesos y soluciones empresariales con Microsoft Power Platform. También he fortalecido mi perfil en desarrollo full-stack moderno, integración de inteligencia artificial generativa y exploración de arquitecturas basadas en agentes.",
      shortStory:
        "Actualmente, mi enfoque principal está en el desarrollo de soluciones empresariales con Power Apps, Power Automate, Dataverse, SQL y herramientas Microsoft, mientras continúo profundizando en tecnologías como React, Django, Supabase, automatización inteligente y orquestación de agentes de IA.",
    },
    contact: {
      sendButton: "Enviar mensaje",
      successMessage: "Email copiado con éxito",
    },
    projects: {
      featured: "Destacado",
      featuredIntro:
        "Una selección curada de mis proyectos más relevantes, con tarjetas premium, contenido bilingüe, media destacada y una presentación limpia y profesional.",
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
      role: "Systems and Computer Engineer | Full-Stack Developer | Power Platform Developer | Generative AI Builder | Agentic Software Engineer",
      description:
        "I design and build modern digital solutions, from web and mobile applications to business automation and AI-powered software. I focus on creating functional, scalable, and user-centered products.",
      ctaPrimary: "View projects",
      ctaSecondary: "Download resume",
    },
    sectionTitles: {
      about: "About Me",
      projects: "Featured Projects",
      experience: "Experience",
      skills: "Skills",
      services: "Services",
      achievements: "Certifications & Achievements",
      contact: "Contact",
    },
    about: {
      professionalSummary:
        "I am a Systems and Computer Engineer with more than 4 years of experience building applications, automations, and technology solutions focused on solving real business and user needs. I stand out for my proactivity, dedication, attention to detail, and ability to work effectively in multidisciplinary teams.",
      currentFocus:
        "Throughout my career, I have worked on Android applications, web applications, databases, process automation, and enterprise solutions with Microsoft Power Platform. I have also strengthened my profile in modern full-stack development, generative AI integration, and agent-based software architectures.",
      shortStory:
        "Currently, my main focus is on building enterprise solutions with Power Apps, Power Automate, Dataverse, SQL, and Microsoft tools, while continuing to deepen my expertise in technologies such as React, Django, Supabase, intelligent automation, and AI agent orchestration.",
    },
    contact: {
      sendButton: "Send message",
      successMessage: "Email copied successfully",
    },
    projects: {
      featured: "Featured",
      featuredIntro:
        "A curated selection of my most impactful work, presented with premium cards, bilingual content, elegant motion, and clean professional layouts.",
      all: "All",
      allProjects: "All Projects",
      viewCode: "View Code",
      liveDemo: "Live Demo",
    },
  },
};
