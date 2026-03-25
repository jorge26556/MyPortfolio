export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'dribbble' | 'behance' | string;
  url: string;
  icon?: string;
}

export interface Profile {
  name: string;
  role: string;
  bio: string;
  avatarUrl: string;
  email: string;
  location: string;
  socials: SocialLink[];
  resumeUrl?: string;
}

export const profileData: Profile = {
  name: "John Doe",
  role: "Full Stack Developer",
  bio: "Passionate developer crafting digital experiences.",
  avatarUrl: "/images/avatar.jpg",
  email: "hello@johndoe.com",
  location: "New York, USA",
  socials: [
    {
      platform: "github",
      url: "https://github.com/johndoe",
      icon: "github-icon"
    },
    {
      platform: "linkedin",
      url: "https://linkedin.com/in/johndoe",
      icon: "linkedin-icon"
    }
  ],
  resumeUrl: "/files/resume.pdf"
};
