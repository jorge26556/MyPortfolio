export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string | 'Present';
  description: string[];
  technologies: string[];
  companyUrl?: string;
  location?: string;
}

export const experienceData: Experience[] = [
  {
    id: "exp-1",
    company: "Tech Solutions Inc.",
    role: "Senior Frontend Engineer",
    startDate: "2022-01",
    endDate: "Present",
    description: [
      "Led the frontend team in rebuilding the core application using React and TypeScript.",
      "Improved application performance by 40% through code splitting and lazy loading.",
      "Mentored junior developers and established code quality standards."
    ],
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    companyUrl: "https://techsolutions.example.com",
    location: "Remote"
  },
  {
    id: "exp-2",
    company: "Digital Agency WebUX",
    role: "Web Developer",
    startDate: "2019-06",
    endDate: "2021-12",
    description: [
      "Developed responsive websites and web applications for various enterprise clients.",
      "Collaborated closely with the design team to implement pixel-perfect UIs."
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "Vue.js", "PHP"],
    location: "London, UK"
  }
];
