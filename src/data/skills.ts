export type SkillCategory = 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Design' | 'Soft Skills';
export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export interface Skill {
  id: string;
  name: string;
  icon: string;
  level: SkillLevel;
  category: SkillCategory;
  proficiencyPercentage?: number;
}

export const skillsData: Skill[] = [
  {
    id: "skill-react",
    name: "React",
    icon: "react-icon",
    level: "Expert",
    category: "Frontend",
    proficiencyPercentage: 95
  },
  {
    id: "skill-node",
    name: "Node.js",
    icon: "node-icon",
    level: "Advanced",
    category: "Backend",
    proficiencyPercentage: 85
  },
  {
    id: "skill-ts",
    name: "TypeScript",
    icon: "ts-icon",
    level: "Advanced",
    category: "Frontend",
    proficiencyPercentage: 90
  },
  {
    id: "skill-figma",
    name: "Figma",
    icon: "figma-icon",
    level: "Intermediate",
    category: "Design",
    proficiencyPercentage: 70
  }
];
