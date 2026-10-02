import { type BilingualText } from "@/data/translations";

export interface Project {
  id: string;
  title: BilingualText;
  shortDescription: BilingualText;
  longDescription?: BilingualText;
  mediaType: "image" | "video" | "slideshow";
  imageUrl?: string;
  videoUrl?: string;
  /**
   * Still frame shown in the card for video projects. The video itself is only
   * fetched when the detail dialog opens, so this is what visitors actually
   * download on first paint — every video project should have one.
   */
  posterUrl?: string;
  slideshowUrls?: string[];
  mediaCaption?: BilingualText;
  tags: string[];
  category: "Web" | "Mobile" | "AI" | "Automation" | "Other";
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  startDate?: string;
  endDate?: string;
}

const createSlideUrls = (folder: string, indexes: number[]) =>
  indexes.map((index) => `/projects/slides/${folder}/${index}.webp`);

const barberiAppSlides = createSlideUrls(
  "barberiapp",
  Array.from({ length: 3 }, (_, i) => i + 1)
);

export const projectsData: Project[] = [
  {
    id: "proj-1",
    title: {
      es: "Dislipidemias App",
      en: "Dislipidemias App",
    },
    shortDescription: {
      es: "App Android en Kotlin que estima el riesgo de padecer dislipidemia a partir de los datos del usuario y ofrece información para su prevención y tratamiento.",
      en: "Android app built with Kotlin that estimates the user's risk of dyslipidemia from their data and provides guidance on prevention and treatment.",
    },
    longDescription: {
      es: "La dislipidemia suele pasar desapercibida hasta que aparecen complicaciones. Desarrollé una app móvil que recoge los datos del usuario, calcula una estimación de riesgo y la acompaña de contenido educativo sobre hábitos, prevención y tratamiento, con una interfaz pensada para personas sin conocimientos médicos.",
      en: "Dyslipidemia often goes unnoticed until complications appear. I built a mobile app that collects the user's data, calculates a risk estimate, and pairs it with educational content on habits, prevention, and treatment, in an interface designed for people without medical knowledge.",
    },
    mediaType: "image",
    imageUrl: "/projects/images/dislipidemiasapp-mockup3.webp",
    tags: ["Kotlin", "Android"],
    category: "Mobile",
    featured: true,
  },
  {
    id: "proj-3",
    title: {
      es: "Capa de interoperabilidad para Navega Seguro",
      en: "Interoperability Layer for Navega Seguro",
    },
    shortDescription: {
      es: "API en Node.js que consume los datos marítimos y oceanográficos de las costas colombianas publicados por Navega Seguro y los expone como JSON limpio y reutilizable.",
      en: "Node.js API that consumes the maritime and oceanographic data on the Colombian coasts published by Navega Seguro and exposes it as clean, reusable JSON.",
    },
    longDescription: {
      es: "La información de Navega Seguro no estaba disponible en un formato que otros sistemas pudieran consumir directamente. Construí una capa de interoperabilidad que obtiene esos datos, los normaliza y los publica mediante endpoints REST en JSON, para que otras aplicaciones puedan integrarlos sin depender de la fuente original.",
      en: "Navega Seguro's data was not available in a format other systems could consume directly. I built an interoperability layer that retrieves that data, normalizes it, and publishes it through JSON REST endpoints, so other applications can integrate it without depending on the original source.",
    },
    mediaType: "image",
    imageUrl: "/projects/images/capa-de-interoperablidad-img.webp",
    tags: ["Node.js", "REST API", "JSON"],
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
      es: "Plataforma full-stack para clínicas y consultorios psicológicos que centraliza la información de pacientes y genera informes asistidos por IA, con Django/DRF y React con TypeScript.",
      en: "Full-stack platform for clinics and psychology practices that centralizes patient information and generates AI-assisted reports, built with Django/DRF and React with TypeScript.",
    },
    longDescription: {
      es: "Redactar informes clínicos consume mucho tiempo y exige manejar datos especialmente sensibles. Construí el backend con Django REST Framework y el frontend con React y TypeScript, integré la API de OpenAI para proponer borradores de informes que el profesional revisa antes de emitirlos, cifré los datos sensibles y aislé la información por clínica para que cada organización solo acceda a lo suyo.",
      en: "Writing clinical reports takes a lot of time and involves particularly sensitive data. I built the backend with Django REST Framework and the frontend with React and TypeScript, integrated the OpenAI API to draft reports that the professional reviews before issuing them, encrypted sensitive data, and isolated information per clinic so each organization only accesses its own.",
    },
    mediaType: "video",
    videoUrl: "/projects/videos/clinReportAI-video.mp4",
    posterUrl: "/projects/posters/clinreport-ai.webp",
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
      es: "Plataforma web para el control de la jornada laboral: registra entradas, salidas y descansos, y calcula en tiempo real el tiempo neto trabajado.",
      en: "Web platform for tracking working hours: it records clock-ins, clock-outs, and breaks, and calculates net worked time in real time.",
    },
    longDescription: {
      es: "Llevar el registro de horas a mano genera errores y discusiones sobre el tiempo trabajado. Desarrollé la aplicación con Vite y JavaScript sobre Supabase (PostgreSQL), con dos vistas: un panel donde cada empleado marca su jornada y un panel de administración para revisar los registros y tener trazabilidad de cada movimiento.",
      en: "Tracking hours by hand leads to errors and disputes over time worked. I built the app with Vite and JavaScript on Supabase (PostgreSQL), with two views: a dashboard where each employee logs their day and an admin panel to review records with full traceability of every entry.",
    },
    mediaType: "video",
    videoUrl: "/projects/videos/ControlHorarios-Video.mp4",
    posterUrl: "/projects/posters/control-horarios.webp",
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
      es: "Gestor de finanzas personales con dashboards, KPIs en tiempo real y metas de ahorro, construido con React, TypeScript y Supabase.",
      en: "Personal finance manager with dashboards, real-time KPIs, and savings goals, built with React, TypeScript, and Supabase.",
    },
    longDescription: {
      es: "La idea era ver de un vistazo en qué se va el dinero y cuánto falta para cada meta de ahorro. Construí la app con React y TypeScript sobre Supabase, con gráficas en Recharts para ingresos, gastos y evolución del ahorro, y la desplegué en Vercel. El foco estuvo en que los números se entiendan sin esfuerzo.",
      en: "The goal was to see at a glance where the money goes and how far each savings goal is. I built the app with React and TypeScript on Supabase, with Recharts graphs for income, expenses, and savings progress, and deployed it on Vercel. The focus was on making the numbers effortless to read.",
    },
    mediaType: "video",
    videoUrl: "/projects/videos/MyAccountingApp-Video.mp4",
    posterUrl: "/projects/posters/my-accounting-app.webp",
    tags: ["React", "TypeScript", "CSS", "Supabase", "Recharts", "Lucide", "Vercel"],
    category: "Web",
    featured: true,
  },
  {
    id: "proj-10",
    title: {
      es: "SprintApp",
      en: "SprintApp",
    },
    shortDescription: {
      es: "App empresarial en Power Apps para gestionar proyectos por sprints: productos, tareas y seguimiento por usuario, con flujos de Power Automate sobre SQL y Dataverse.",
      en: "Enterprise Power Apps application for sprint-based project management: products, tasks, and per-user tracking, with Power Automate flows on SQL and Dataverse.",
    },
    longDescription: {
      es: "El equipo necesitaba un único lugar para planificar los sprints y saber quién trabaja en qué. Desarrollé la aplicación en Power Apps con datos en SQL y Dataverse, y automaticé con Power Automate los pasos repetitivos del proceso, de modo que el seguimiento por usuario y por producto quedara centralizado en una sola herramienta.",
      en: "The team needed a single place to plan sprints and know who is working on what. I built the application in Power Apps with data in SQL and Dataverse, and used Power Automate to automate the repetitive steps of the process, so tracking by user and by product lives in one tool.",
    },
    mediaType: "image",
    imageUrl: "/projects/images/sprintapp-dashboard.webp",
    tags: ["Power Apps", "Power Automate", "SQL", "Dataverse"],
    category: "Automation",
    featured: true,
  },
  {
    id: "proj-11",
    title: {
      es: "Sistema de alertas automatizadas",
      en: "Automated Alerting System",
    },
    shortDescription: {
      es: "Sistema en Python que consulta SQL Server, genera gráficas y reportes en Excel por cliente y los envía automáticamente por correo y Microsoft Teams a clientes de varios países.",
      en: "Python system that queries SQL Server, generates per-client charts and Excel reports, and delivers them automatically by email and Microsoft Teams to clients in several countries.",
    },
    longDescription: {
      es: "Los clientes debían recibir reportes periódicos de infracciones y prepararlos a mano tomaba tiempo y generaba errores. Desarrollé en Python un proceso que consulta la base de datos, genera las gráficas y el Excel de cada cliente con pandas y matplotlib, y los entrega por correo y Teams según un calendario. Los destinatarios por país se gestionan en una app que migré de Power Apps a Google Apps Script y Google Sheets, sincronizada con SQL Server. Es un sistema interno de empresa, por eso se muestra un diagrama del flujo en lugar de capturas.",
      en: "Clients needed periodic infraction reports, and building them by hand was slow and error-prone. I built a Python process that queries the database, generates each client's charts and Excel file with pandas and matplotlib, and delivers them by email and Teams on a schedule. Recipients by country are managed in an app I migrated from Power Apps to Google Apps Script and Google Sheets, synced with SQL Server. It is an internal company system, so a flow diagram is shown instead of screenshots.",
    },
    mediaType: "image",
    imageUrl: "/projects/images/alert-system.webp",
    tags: ["Python", "SQL Server", "pandas", "matplotlib", "Google Apps Script", "Google Sheets", "Microsoft Teams"],
    category: "Automation",
    featured: false,
  },
  {
    id: "proj-12",
    title: {
      es: "BarberiAPP Landing Page",
      en: "BarberiAPP Landing Page",
    },
    shortDescription: {
      es: "Landing page para una barbería construida con Next.js y Tailwind CSS, pensada para mostrar los servicios y el estilo de la marca y atraer clientes.",
      en: "Landing page for a barbershop built with Next.js and Tailwind CSS, designed to showcase its services and brand style and attract clients.",
    },
    longDescription: {
      es: "Una barbería compite sobre todo por imagen, así que la web tenía que transmitir el estilo del negocio desde el primer vistazo. La construí con Next.js, React, TypeScript y Tailwind CSS, organizada en secciones orientadas a la conversión: servicios, estilo del local y una llamada clara a contactar.",
      en: "A barbershop competes mostly on image, so the site had to convey the business's style at first glance. I built it with Next.js, React, TypeScript, and Tailwind CSS, organized into conversion-focused sections: services, the shop's style, and a clear call to get in touch.",
    },
    mediaType: "slideshow",
    imageUrl: barberiAppSlides[0],
    slideshowUrls: barberiAppSlides,
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    category: "Web",
    featured: true,
  },
  {
    id: "proj-13",
    title: {
      es: "DyangoTech",
      en: "DyangoTech",
    },
    shortDescription: {
      es: "Sitio web de DyangoTech, el estudio que fundé en 2026 para llevar automatización, software a medida, agentes de IA y páginas web a pymes.",
      en: "Website for DyangoTech, the studio I founded in 2026 to bring automation, custom software, AI agents, and websites to small and mid-sized businesses.",
    },
    longDescription: {
      es: "Fundé DyangoTech para ofrecer a pymes lo que hago en entornos corporativos: automatizar procesos, construir herramientas a medida e integrar Microsoft 365 y Google Workspace. Diseñé y desarrollé el sitio de principio a fin: posicionamiento de la oferta, catálogo de servicios, proyectos y planes, versión bilingüe, SEO y publicación en GitHub Pages con dominio propio.",
      en: "I founded DyangoTech to offer small and mid-sized businesses what I do in corporate environments: process automation, custom tools, and Microsoft 365 and Google Workspace integrations. I designed and built the site end to end: offer positioning, service catalog, projects and plans, a bilingual version, SEO, and deployment on GitHub Pages with a custom domain.",
    },
    mediaType: "image",
    imageUrl: "/projects/images/dyangotech.webp",
    tags: ["HTML", "CSS", "JavaScript", "SEO", "GitHub Pages"],
    category: "Web",
    featured: false,
  },
];
