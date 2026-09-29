export interface SocialLink {
  platform: string;
  url: string;
}

export interface Profile {
  name: string;
  role: string;
  bio: string;
  avatarUrl: string;
  email: string;
  location: string;
  socials: SocialLink[];
  resumeUrl: string;
}

export const profileData: Profile = {
  name: "Jorge Gaitán",
  role: "Ingeniero de Sistemas y Computación",
  bio: "AI Engineer y Full-Stack Developer que construye agentes de IA, automatizaciones y plataformas web para resolver problemas reales de negocio.",
  avatarUrl: "/avatar.png",
  email: "jorgedgaitanr2003@gmail.com",
  location: "Bogotá, Colombia",
  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/jorge26556",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/jorge-david-gaitan-realpe-422835289",
    },
  ],
  resumeUrl: "/Jorge-Gaitan-CV.pdf",
};
