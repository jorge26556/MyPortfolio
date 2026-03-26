import { type BilingualText } from "@/data/translations";

export interface Service {
  id: string;
  title: BilingualText;
  shortDescription?: BilingualText;
  icon: string;
  features: BilingualText[];
  startingPrice?: string;
}

export const servicesData: Service[] = [
  {
    id: "service-web-modern",
    title: {
      es: "Desarrollo de aplicaciones web modernas",
      en: "Modern web application development",
    },
    shortDescription: {
      es: "Interfaces rápidas, limpias y escalables para productos digitales actuales.",
      en: "Fast, clean, and scalable interfaces for modern digital products.",
    },
    icon: "code-icon",
    features: [
      {
        es: "Frontend moderno con React",
        en: "Modern frontend with React",
      },
      {
        es: "Experiencias responsivas",
        en: "Responsive experiences",
      },
      {
        es: "Arquitectura escalable",
        en: "Scalable architecture",
      },
    ],
  },
  {
    id: "service-enterprise",
    title: {
      es: "Desarrollo de soluciones empresariales",
      en: "Enterprise solution development",
    },
    shortDescription: {
      es: "Productos orientados a resolver necesidades reales de operación y negocio.",
      en: "Products focused on solving real operational and business needs.",
    },
    icon: "server-icon",
    features: [
      {
        es: "Flujos operativos digitales",
        en: "Digital operational workflows",
      },
      {
        es: "Integración con herramientas de negocio",
        en: "Business tool integration",
      },
      {
        es: "Escalabilidad organizacional",
        en: "Organizational scalability",
      },
    ],
  },
  {
    id: "service-automation",
    title: {
      es: "Automatización de procesos",
      en: "Process automation",
    },
    shortDescription: {
      es: "Automatizaciones que reducen tareas repetitivas y mejoran la productividad.",
      en: "Automations that reduce repetitive tasks and improve productivity.",
    },
    icon: "sparkles-icon",
    features: [
      {
        es: "Flujos en Power Automate",
        en: "Power Automate flows",
      },
      {
        es: "Automatización inteligente",
        en: "Intelligent automation",
      },
      {
        es: "Optimización de tiempos",
        en: "Time optimization",
      },
    ],
  },
  {
    id: "service-power-platform",
    title: {
      es: "Desarrollo con Power Platform",
      en: "Power Platform development",
    },
    shortDescription: {
      es: "Aplicaciones y soluciones empresariales dentro del ecosistema Microsoft.",
      en: "Applications and enterprise solutions inside the Microsoft ecosystem.",
    },
    icon: "database-icon",
    features: [
      {
        es: "Power Apps",
        en: "Power Apps",
      },
      {
        es: "Dataverse y SQL",
        en: "Dataverse and SQL",
      },
      {
        es: "Integración con Microsoft 365",
        en: "Microsoft 365 integration",
      },
    ],
  },
  {
    id: "service-uiux",
    title: {
      es: "Diseño UI/UX",
      en: "UI/UX design",
    },
    shortDescription: {
      es: "Diseño de interfaces agradables, intuitivas y centradas en el usuario.",
      en: "Design of pleasant, intuitive, user-centered interfaces.",
    },
    icon: "design-pencil-icon",
    features: [
      {
        es: "Jerarquía visual clara",
        en: "Clear visual hierarchy",
      },
      {
        es: "Experiencias intuitivas",
        en: "Intuitive experiences",
      },
      {
        es: "Diseño orientado a producto",
        en: "Product-oriented design",
      },
    ],
  },
  {
    id: "service-ai",
    title: {
      es: "Integración de IA en productos digitales",
      en: "AI integration into digital products",
    },
    shortDescription: {
      es: "Capacidades de IA generativa integradas con contexto, automatización y valor real.",
      en: "Generative AI capabilities integrated with context, automation, and real value.",
    },
    icon: "ai-icon",
    features: [
      {
        es: "OpenAI API y asistentes",
        en: "OpenAI API and assistants",
      },
      {
        es: "Agentes y orquestación",
        en: "Agents and orchestration",
      },
      {
        es: "IA aplicada a negocio",
        en: "AI applied to business",
      },
    ],
  },
];
