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
    startDate: "Julio 2024",
    endDate: "Diciembre 2024",
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
    company: "Work and Travel",
    role: {
      es: "Lifeguard & Boat Instructor",
      en: "Lifeguard & Boat Instructor",
    },
    startDate: "2022",
    endDate: "2023",
    location: {
      es: "Ohio & Arizona, Estados Unidos",
      en: "Ohio & Arizona, United States",
    },
    description: [
      {
        es: "Experiencias internacionales que fortalecieron mi nivel de inglés, atención al cliente, capacidad de reacción y desenvolvimiento en entornos multiculturales.",
        en: "International experiences that strengthened my English proficiency, customer service skills, reaction capacity, and performance in multicultural environments.",
      },
    ],
    technologies: ["Customer Service", "Emergency Response", "Multicultural Environment"],
  }
];
