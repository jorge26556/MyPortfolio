export type SkillCategory =
  | "AI & Agents"
  | "Automation & Low-code"
  | "Frontend"
  | "Backend & Data"
  | "Cloud"
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
  { id: "s-openai", name: "OpenAI API", category: "AI & Agents" },
  { id: "s-mcp", name: "MCP", category: "AI & Agents" },
  { id: "s-n8n", name: "n8n", category: "AI & Agents" },
  { id: "s-claude-code", name: "Claude Code", category: "AI & Agents" },
  { id: "s-codex", name: "Codex", category: "AI & Agents" },
  { id: "s-antigravity", name: "Antigravity", category: "AI & Agents" },
  { id: "s-notebooklm", name: "NotebookLM", category: "AI & Agents" },
  { id: "s-stitch", name: "Stitch", category: "AI & Agents" },

  { id: "s-powerplatform", name: "Power Platform", category: "Automation & Low-code" },
  { id: "s-powerapps", name: "Power Apps", category: "Automation & Low-code" },
  { id: "s-powerautomate", name: "Power Automate", category: "Automation & Low-code" },
  { id: "s-powerbi", name: "Power BI", category: "Automation & Low-code" },
  { id: "s-dataverse", name: "Dataverse", category: "Automation & Low-code" },
  { id: "s-rpa-python", name: "Python RPA", category: "Automation & Low-code" },
  { id: "s-apps-script", name: "Google Apps Script", category: "Automation & Low-code" },
  { id: "s-google-sheets", name: "Google Sheets", category: "Automation & Low-code" },
  { id: "s-gws", name: "Google Workspace", category: "Automation & Low-code" },
  { id: "s-m365", name: "Microsoft 365", category: "Automation & Low-code" },

  { id: "s-react", name: "React", category: "Frontend" },
  { id: "s-ts", name: "TypeScript", category: "Frontend" },
  { id: "s-js", name: "JavaScript", category: "Frontend" },
  { id: "s-nextjs", name: "Next.js", category: "Frontend" },
  { id: "s-tailwind", name: "Tailwind CSS", category: "Frontend" },
  { id: "s-html", name: "HTML", category: "Frontend" },
  { id: "s-css", name: "CSS", category: "Frontend" },

  { id: "s-python", name: "Python", category: "Backend & Data" },
  { id: "s-django", name: "Django", category: "Backend & Data" },
  { id: "s-node", name: "Node.js", category: "Backend & Data" },
  { id: "s-sql", name: "SQL", category: "Backend & Data" },
  { id: "s-sqlserver", name: "SQL Server", category: "Backend & Data" },
  { id: "s-pg", name: "PostgreSQL", category: "Backend & Data" },

  { id: "s-azure", name: "Azure", category: "Cloud" },
  { id: "s-supabase", name: "Supabase", category: "Cloud" },
  { id: "s-vercel", name: "Vercel", category: "Cloud" },
  { id: "s-hostinger", name: "Hostinger", category: "Cloud" },

  { id: "s-git", name: "Git", category: "Tools" },
  { id: "s-github", name: "GitHub", category: "Tools" },
  { id: "s-figma", name: "Figma", category: "Tools" },
  { id: "s-vscode", name: "Visual Studio Code", category: "Tools" },
  { id: "s-wordpress", name: "WordPress", category: "Tools" },
];
