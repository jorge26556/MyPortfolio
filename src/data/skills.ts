export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "Cloud & Platform"
  | "Tools";
export type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

export interface Skill {
  id: string;
  name: string;
  icon?: string;
  level?: SkillLevel;
  category: SkillCategory;
  proficiencyPercentage?: number;
}

export const skillsData: Skill[] = [
  { id: "s-react", name: "React", category: "Frontend" },
  { id: "s-ts", name: "TypeScript", category: "Frontend" },
  { id: "s-js", name: "JavaScript", category: "Frontend" },
  { id: "s-html", name: "HTML", category: "Frontend" },
  { id: "s-css", name: "CSS", category: "Frontend" },

  { id: "s-python", name: "Python", category: "Backend" },
  { id: "s-node", name: "Node.js", category: "Backend" },

  { id: "s-sql", name: "SQL", category: "Database" },
  { id: "s-sqlserver", name: "SQL Server", category: "Database" },
  { id: "s-pg", name: "PostgreSQL", category: "Database" },

  { id: "s-azure", name: "Azure", category: "Cloud & Platform" },
  { id: "s-supabase", name: "Supabase", category: "Cloud & Platform" },
  { id: "s-dataverse", name: "Dataverse", category: "Cloud & Platform" },
  { id: "s-powerplatform", name: "Power Platform", category: "Cloud & Platform" },
  { id: "s-powerapps", name: "Power Apps", category: "Cloud & Platform" },
  { id: "s-powerautomate", name: "Power Automate", category: "Cloud & Platform" },
  { id: "s-powerbi", name: "Power BI", category: "Cloud & Platform" },
  { id: "s-m365", name: "Microsoft 365", category: "Cloud & Platform" },

  { id: "s-git", name: "Git", category: "Tools" },
  { id: "s-github", name: "GitHub", category: "Tools" },
  { id: "s-figma", name: "Figma", category: "Tools" },
  { id: "s-vscode", name: "Visual Studio Code", category: "Tools" },
  { id: "s-wordpress", name: "WordPress", category: "Tools" },
  { id: "s-hostinger", name: "Hostinger", category: "Tools" },
  { id: "s-n8n", name: "n8n", category: "Tools" },
  { id: "s-codex", name: "Codex", category: "Tools" },
  { id: "s-antigravity", name: "Antigravity", category: "Tools" },
  { id: "s-claude-code", name: "Claude Code", category: "Tools" },
  { id: "s-stitch", name: "Stitch", category: "Tools" },
  { id: "s-notebooklm", name: "NotebookLM", category: "Tools" },
];
