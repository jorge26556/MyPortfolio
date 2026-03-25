import { type BilingualText } from "@/data/translations";

export interface Experience {
  id: string;
  company: string;
  role: BilingualText;
  startDate: string;
  endDate: string;
  description: BilingualText[];
  technologies: string[];
  companyUrl?: string;
  location?: BilingualText;
}

export const experienceData: Experience[] = [
  {
    id: "exp-1",
    company: "Process Automation",
    role: {
      es: "Process Excellence Analyst II",
      en: "Process Excellence Analyst II",
    },
    startDate: "Mayo 2025",
    endDate: "Actualidad",
    location: {
      es: "Colombia",
      en: "Colombia",
    },
    description: [
      {
        es: "Actualmente trabajo en el área de Process Automation, donde participo en la gestión y desarrollo de soluciones empresariales usando Power Apps, Power Automate, Dataverse, Teams, SQL y otras herramientas del ecosistema Microsoft.",
        en: "I currently work in the Process Automation area, where I participate in the management and development of enterprise solutions using Power Apps, Power Automate, Dataverse, Teams, SQL, and other Microsoft ecosystem tools.",
      },
      {
        es: "Mi labor se centra en resolver necesidades operativas y de negocio mediante aplicaciones y automatizaciones escalables.",
        en: "My role focuses on solving operational and business needs through scalable applications and automations.",
      },
      {
        es: "Además, he venido explorando Django como alternativa para construir aplicaciones sin dependencia directa de licenciamiento y fortalecer iniciativas de automatización mediante RPA.",
        en: "I have also been exploring Django as an alternative for building applications without direct licensing dependency and for strengthening RPA initiatives.",
      },
    ],
    technologies: ["Power Apps", "Power Automate", "Dataverse", "Teams", "SQL", "Django", "RPA"],
  },
  {
    id: "exp-2",
    company: "Banco de la República",
    role: {
      es: "Prácticas en Banco de la República",
      en: "Internship at Banco de la República",
    },
    startDate: "Semestre 2024-II",
    endDate: "Semestre 2024-II",
    location: {
      es: "Bogotá, Colombia",
      en: "Bogota, Colombia",
    },
    description: [
      {
        es: "Me desempeñé como practicante de Ingeniería de Sistemas en el Departamento de Arquitectura e Innovación Tecnológica.",
        en: "I worked as a Systems Engineering intern in the Enterprise Architecture and Technological Innovation Department.",
      },
      {
        es: "Participé en la actualización de indicadores y diagramas de arquitectura empresarial, así como en el desarrollo y mantenimiento de aplicaciones con Python y herramientas de Microsoft 365 como Power Apps, Power BI y Power Automate.",
        en: "I participated in updating indicators and enterprise architecture diagrams, as well as in the development and maintenance of applications using Python and Microsoft 365 tools such as Power Apps, Power BI, and Power Automate.",
      },
    ],
    technologies: ["Python", "Power Apps", "Power BI", "Power Automate", "Microsoft 365"],
  },
  {
    id: "exp-3",
    company: "Work and Travel 2023",
    role: {
      es: "Lifeguard",
      en: "Lifeguard",
    },
    startDate: "2023",
    endDate: "2023",
    location: {
      es: "Ohio, Estados Unidos",
      en: "Ohio, United States",
    },
    description: [
      {
        es: "Experiencia internacional enfocada en seguridad, atención al cliente y respuesta ante emergencias en entornos acuáticos.",
        en: "International experience focused on safety, customer service, and emergency response in aquatic environments.",
      },
    ],
    technologies: ["Safety", "Customer Service", "Emergency Response"],
  },
  {
    id: "exp-4",
    company: "Work and Travel 2022",
    role: {
      es: "Boat Instructor",
      en: "Boat Instructor",
    },
    startDate: "2022",
    endDate: "2022",
    location: {
      es: "Arizona, Estados Unidos",
      en: "Arizona, United States",
    },
    description: [
      {
        es: "Experiencia internacional orientada a la guía de usuarios, explicación de protocolos de seguridad y acompañamiento en actividades acuáticas.",
        en: "International experience focused on user guidance, safety protocol explanation, and support in aquatic activities.",
      },
    ],
    technologies: ["Instruction", "Safety Protocols", "Customer Guidance"],
  },
];
