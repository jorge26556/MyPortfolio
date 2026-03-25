export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription?: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  startDate?: string;
  endDate?: string;
}

export const projectsData: Project[] = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    shortDescription: "A modern e-commerce platform built with Next.js and Stripe.",
    longDescription: "A fully responsive e-commerce platform featuring product management, shopping cart, and secure checkout via Stripe API.",
    imageUrl: "/images/projects/ecommerce.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/johndoe/ecommerce",
    featured: true,
    startDate: "2025-01",
    endDate: "2025-06"
  },
  {
    id: "project-2",
    title: "Task Management App",
    shortDescription: "A collaborative task management tool for remote teams.",
    imageUrl: "/images/projects/taskapp.jpg",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    githubUrl: "https://github.com/johndoe/task-app",
    featured: false,
    startDate: "2024-08",
    endDate: "2024-12"
  }
];
