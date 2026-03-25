export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  icon: string;
  features: string[];
  startingPrice?: string;
}

export const servicesData: Service[] = [
  {
    id: "service-web-dev",
    title: "Web Development",
    shortDescription: "Custom web applications built with modern frameworks.",
    icon: "code-icon",
    features: [
      "Responsive UI/UX implementation",
      "Performance optimization",
      "SEO best practices integration",
      "Cross-browser compatibility"
    ]
  },
  {
    id: "service-ui-design",
    title: "UI/UX Design",
    shortDescription: "Beautiful and intuitive user interfaces.",
    icon: "design-pencil-icon",
    features: [
      "Wireframing & Prototyping",
      "User research & testing",
      "Design systems creation",
      "Interactive mockups"
    ]
  },
  {
    id: "service-backend",
    title: "Backend Development",
    shortDescription: "Robust and scalable server-side solutions.",
    icon: "server-icon",
    features: [
      "RESTful and GraphQL API design",
      "Database architecture",
      "Authentication and security",
      "Cloud deployment & CI/CD"
    ]
  }
];
