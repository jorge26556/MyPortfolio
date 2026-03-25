import { type BilingualText } from "@/data/translations";

export interface Project {
  id: string;
  title: BilingualText;
  shortDescription: BilingualText;
  longDescription?: BilingualText;
  mediaType: "image" | "video" | "slideshow";
  imageUrl?: string;
  videoUrl?: string;
  slideshowUrls?: string[];
  mediaCaption?: BilingualText;
  tags: string[];
  category: "Web" | "Mobile" | "AI" | "Power Platform" | "Other";
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  startDate?: string;
  endDate?: string;
}

const createSlideUrls = (folder: string, indexes: number[]) =>
  indexes.map((index) => `/projects/slides/${folder}/${index}.png`);

const sprintAppSlides = createSlideUrls(
  "sprintapp",
  Array.from({ length: 18 }, (_, i) => i + 1)
);

export const projectsData: Project[] = [
  {
    id: "proj-1",
    title: {
      es: "Dislipidemias App",
      en: "Dislipidemias App",
    },
    shortDescription: {
      es: "Aplicación Android desarrollada en Kotlin que ayuda a los usuarios a estimar la probabilidad de padecer dislipidemia, además de brindar información para su prevención y tratamiento.",
      en: "Android application built with Kotlin that helps users estimate the probability of having dyslipidemia, while also providing information for prevention and treatment.",
    },
    longDescription: {
      es: "Proyecto móvil orientado a salud preventiva, enfocado en ofrecer una experiencia accesible para consulta, educación y acompañamiento del usuario alrededor de la dislipidemia.",
      en: "Mobile health-focused project designed to provide an accessible experience for consultation, education, and user guidance around dyslipidemia.",
    },
    mediaType: "image",
    imageUrl: "/projects/images/dislipidemiasapp.jpg",
    tags: ["Kotlin", "Android"],
    category: "Mobile",
    featured: true,
  },
  {
    id: "proj-2",
    title: {
      es: "Calculadora de propinas",
      en: "Tip Calculator",
    },
    shortDescription: {
      es: "Aplicación web desarrollada con JavaScript, HTML y CSS que calcula propinas automáticamente según el porcentaje seleccionado y divide el total de la cuenta entre varias personas.",
      en: "Web application built with JavaScript, HTML, and CSS that automatically calculates tips based on the selected percentage and splits the total bill among multiple people.",
    },
    longDescription: {
      es: "Herramienta ligera para cálculos rápidos enfocada en claridad, usabilidad inmediata y una interfaz simple para contextos cotidianos.",
      en: "Lightweight tool for quick calculations focused on clarity, immediate usability, and a simple interface for everyday contexts.",
    },
    mediaType: "image",
    imageUrl: "/projects/images/calculadoramultiple.jpg",
    tags: ["JavaScript", "HTML", "CSS"],
    category: "Web",
    featured: false,
  },
  {
    id: "proj-3",
    title: {
      es: "Capa de interoperabilidad para Navega Seguro",
      en: "Interoperability Layer for Navega Seguro",
    },
    shortDescription: {
      es: "API desarrollada en Node.js que consume y expone en formato JSON datos marítimos y oceanográficos de las costas de Colombia, integrados desde la aplicación Navega Seguro.",
      en: "Node.js API that consumes and exposes maritime and oceanographic data from the Colombian coasts in JSON format, integrated from the Navega Seguro application.",
    },
    longDescription: {
      es: "Proyecto de interoperabilidad orientado a centralizar y exponer información clave del dominio marítimo colombiano en una estructura reutilizable y clara para consumo externo.",
      en: "Interoperability project focused on centralizing and exposing key data from the Colombian maritime domain in a reusable and clear structure for external consumption.",
    },
    mediaType: "image",
    imageUrl: "/projects/images/capa-de-interoperablidad-img.png",
    tags: ["Node.js", "REST API", "JSON"],
    category: "Web",
    featured: false,
  },
  {
    id: "proj-4",
    title: {
      es: "Calculadora básica en Python",
      en: "Basic Python Calculator",
    },
    shortDescription: {
      es: "Aplicación de escritorio con interfaz gráfica que implementa operaciones básicas como suma, resta, multiplicación, división y porcentajes.",
      en: "Desktop application with a graphical interface that implements basic operations such as addition, subtraction, multiplication, division, and percentages.",
    },
    longDescription: {
      es: "Aplicación de escritorio pensada para practicar lógica y experiencia de usuario en interfaces gráficas, manteniendo una interacción directa y funcional.",
      en: "Desktop application designed to practice logic and user experience in graphical interfaces while keeping interactions direct and functional.",
    },
    mediaType: "image",
    imageUrl: "/projects/images/calculadora-funciones-basicas.png",
    tags: ["Python"],
    category: "Other",
    featured: false,
  },
  {
    id: "proj-5",
    title: {
      es: "Generador de contraseñas seguras",
      en: "Secure Password Generator",
    },
    shortDescription: {
      es: "Aplicación de escritorio desarrollada en Python con Tkinter para generar contraseñas seguras, validar su fortaleza y copiarlas al portapapeles.",
      en: "Desktop application built with Python and Tkinter to generate secure passwords, validate their strength, and copy them to the clipboard.",
    },
    longDescription: {
      es: "Proyecto orientado a seguridad básica y productividad del usuario, con validación de fortaleza y generación rápida de credenciales seguras.",
      en: "Project focused on basic security and user productivity, with strength validation and quick secure credential generation.",
    },
    mediaType: "image",
    imageUrl: "/projects/images/generador-de-contrasenas.png",
    tags: ["Python", "Tkinter", "Regex"],
    category: "Other",
    featured: false,
  },
  {
    id: "proj-6",
    title: {
      es: "Web de agencia de tecnología",
      en: "Technology Agency Website",
    },
    shortDescription: {
      es: "Sitio web desarrollado en WordPress para presentar servicios de desarrollo y diseño digital, alojado en Hostinger y construido con Elementor.",
      en: "Website built with WordPress to showcase development and digital design services, hosted on Hostinger and created with Elementor.",
    },
    longDescription: {
      es: "Sitio orientado a presencia digital y presentación comercial, con enfoque en diseño visual, organización de servicios y publicación eficiente.",
      en: "Website focused on digital presence and commercial presentation, with emphasis on visual design, service organization, and efficient publishing.",
    },
    mediaType: "image",
    imageUrl: "/projects/images/dyangoTech.png",
    tags: ["WordPress", "Elementor", "Hostinger"],
    category: "Web",
    featured: false,
  },
  {
    id: "proj-7",
    title: {
      es: "ClinReport AI",
      en: "ClinReport AI",
    },
    shortDescription: {
      es: "Proyecto full-stack orientado al sector clínico y psicológico. Moderniza la gestión de información y la generación ética de informes, integrando Django/DRF en el backend y React con TypeScript en el frontend.",
      en: "Full-stack project focused on the clinical and psychological sector. It modernizes information management and ethical report generation, integrating Django/DRF on the backend and React with TypeScript on the frontend.",
    },
    longDescription: {
      es: "Incorpora generación asistida con OpenAI API, cifrado de datos sensibles y aislamiento por clínica para ofrecer una solución robusta, ética y moderna para el sector clínico.",
      en: "It includes OpenAI API-assisted generation, encryption of sensitive data, and clinic-level data isolation to provide a robust, ethical, and modern solution for the clinical sector.",
    },
    mediaType: "video",
    videoUrl: "/projects/videos/clinReportAI-video.mp4",
    tags: ["Django", "Django REST Framework", "Python", "React", "TypeScript", "OpenAI API"],
    category: "AI",
    featured: true,
  },
  {
    id: "proj-8",
    title: {
      es: "AppControlHorarios",
      en: "AppControlHorarios",
    },
    shortDescription: {
      es: "Plataforma web para el control de jornadas laborales. Automatiza el registro de entradas, salidas y descansos, calculando el tiempo neto trabajado en tiempo real.",
      en: "Web platform for work schedule control. It automates clock-in, clock-out, and break tracking, calculating net worked time in real time.",
    },
    longDescription: {
      es: "Incluye dashboard para empleados y panel de administración, facilitando control operativo, trazabilidad y una gestión clara del tiempo trabajado.",
      en: "It includes an employee dashboard and an admin panel, enabling operational control, traceability, and clear management of worked time.",
    },
    mediaType: "video",
    videoUrl: "/projects/videos/ControlHorarios-Video.mp4",
    tags: ["Vite", "JavaScript", "Supabase", "PostgreSQL"],
    category: "Web",
    featured: true,
  },
  {
    id: "proj-9",
    title: {
      es: "MyContabilidadApp",
      en: "MyContabilidadApp",
    },
    shortDescription: {
      es: "Gestor financiero personal con dashboards profesionales, KPIs en tiempo real y metas de ahorro personalizadas. El producto combina funcionalidad financiera con una interfaz premium, minimalista y moderna.",
      en: "Personal finance manager with professional dashboards, real-time KPIs, and personalized savings goals. The product combines financial functionality with a premium, minimalist, and modern interface.",
    },
    longDescription: {
      es: "Proyecto enfocado en visualización financiera, experiencia premium y seguimiento claro del estado económico personal dentro de una sola aplicación.",
      en: "Project focused on financial visualization, premium experience, and clear tracking of personal financial status within a single application.",
    },
    mediaType: "video",
    videoUrl: "/projects/videos/MyAccountingApp-Video.mp4",
    tags: ["React", "TypeScript", "CSS", "Supabase", "Recharts", "Lucide", "Vercel"],
    category: "Web",
    featured: false,
  },
  {
    id: "proj-10",
    title: {
      es: "SprintApp",
      en: "SprintApp",
    },
    shortDescription: {
      es: "Aplicación empresarial desarrollada en Power Apps para la gestión de proyectos por sprints. Integra múltiples flujos en Power Automate y conexión con SQL y Dataverse.",
      en: "Enterprise application built with Power Apps for sprint-based project management. It integrates multiple Power Automate flows and connections with SQL and Dataverse.",
    },
    longDescription: {
      es: "Permite gestionar productos, asignar tareas y optimizar el seguimiento del trabajo por usuario y por producto, apoyándose en una experiencia visual tipo slideshow premium con avance automático y navegación manual.",
      en: "It allows product management, task assignment, and work tracking optimization by user and product, supported by a premium slideshow-like visual experience with autoplay and manual navigation.",
    },
    mediaType: "slideshow",
    imageUrl: sprintAppSlides[0],
    slideshowUrls: sprintAppSlides,
    tags: ["Power Apps", "Power Automate", "SQL", "Dataverse"],
    category: "Power Platform",
    featured: true,
  },
  {
    id: "proj-11",
    title: {
      es: "Facturación App",
      en: "Billing App",
    },
    shortDescription: {
      es: "Aplicación orientada a la gestión de provisiones y facturas empresariales. Fue diseñada para facilitar el manejo de información con clientes, exportación de datos y continuidad del flujo hacia gestores de facturación externos.",
      en: "Application focused on enterprise provisioning and invoice management. It was designed to facilitate client information handling, data export, and continuity of the workflow toward external billing managers.",
    },
    longDescription: {
      es: "La vista pública conserva una demostración segura del producto, manteniendo el enfoque en el flujo funcional, la continuidad operativa y la experiencia empresarial general.",
      en: "The public view keeps a safe product demo while preserving the focus on functional flow, operational continuity, and the overall enterprise experience.",
    },
    mediaType: "image",
    imageUrl: "/projects/images/FacturacionAPP.png",
    tags: ["Power Apps", "Power Automate", "SQL", "Dataverse"],
    category: "Power Platform",
    featured: false,
  },
];
