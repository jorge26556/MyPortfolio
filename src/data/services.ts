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
    id: "service-ai",
    title: {
      es: "Agentes de IA e integraciones",
      en: "AI agents and integrations",
    },
    shortDescription: {
      es: "Agentes que no solo conversan: consultan datos y ejecutan tareas en las herramientas que ya usa tu negocio.",
      en: "Agents that do more than chat: they query data and carry out tasks in the tools your business already uses.",
    },
    icon: "ai-icon",
    features: [
      {
        es: "Agentes conectados vía MCP y APIs",
        en: "Agents connected through MCP and APIs",
      },
      {
        es: "Asistentes con OpenAI API",
        en: "Assistants built on the OpenAI API",
      },
      {
        es: "Orquestación de flujos con n8n",
        en: "Workflow orchestration with n8n",
      },
    ],
  },
  {
    id: "service-automation",
    title: {
      es: "Automatización de procesos y RPA",
      en: "Process automation and RPA",
    },
    shortDescription: {
      es: "Automatizaciones que eliminan tareas repetitivas y conectan sistemas que hoy se operan a mano.",
      en: "Automations that remove repetitive tasks and connect systems that are still operated by hand.",
    },
    icon: "sparkles-icon",
    features: [
      {
        es: "Flujos en Power Automate",
        en: "Power Automate flows",
      },
      {
        es: "RPA con Python",
        en: "RPA with Python",
      },
      {
        es: "Integración entre sistemas",
        en: "System-to-system integration",
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
    id: "service-google-workspace",
    title: {
      es: "Soluciones con Google Workspace",
      en: "Google Workspace solutions",
    },
    shortDescription: {
      es: "Automatizaciones y herramientas internas sobre Google Sheets y el resto de Google Workspace.",
      en: "Automations and internal tools built on Google Sheets and the rest of Google Workspace.",
    },
    icon: "workspace-icon",
    features: [
      {
        es: "Automatizaciones con Apps Script",
        en: "Apps Script automations",
      },
      {
        es: "Google Sheets como base operativa",
        en: "Google Sheets as an operational backbone",
      },
      {
        es: "Integración con APIs externas",
        en: "External API integration",
      },
    ],
  },
  {
    id: "service-fullstack",
    title: {
      es: "Plataformas web full-stack",
      en: "Full-stack web platforms",
    },
    shortDescription: {
      es: "Aplicaciones web completas, del frontend a la base de datos, pensadas para crecer.",
      en: "Complete web applications, from frontend to database, built to scale.",
    },
    icon: "server-icon",
    features: [
      {
        es: "Frontend con React y Next.js",
        en: "Frontend with React and Next.js",
      },
      {
        es: "Backend con Django o Node.js y SQL",
        en: "Backend with Django or Node.js and SQL",
      },
      {
        es: "Integración con herramientas de negocio",
        en: "Business tool integration",
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
];
