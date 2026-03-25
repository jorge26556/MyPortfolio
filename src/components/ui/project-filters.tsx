"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/language-provider";
import { cn } from "@/lib/utils";

export type ProjectCategory = "All" | "Web" | "Mobile" | "AI" | "Design" | "Power Platform" | "Other";

interface ProjectFiltersProps {
  categories: ProjectCategory[];
  activeCategory: ProjectCategory;
  onCategoryChange: (category: ProjectCategory) => void;
  className?: string;
}

export function ProjectFilters({ 
  categories, 
  activeCategory, 
  onCategoryChange,
  className 
}: ProjectFiltersProps) {
  const { t } = useLanguage();

  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-2", className)}>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "relative px-6 py-2 text-sm font-medium transition-colors duration-300 rounded-full border",
            activeCategory === category 
              ? "text-primary-foreground border-primary" 
              : "text-muted-foreground border-border/50 hover:text-foreground hover:border-border"
          )}
        >
          {activeCategory === category && (
            <motion.div
              layoutId="active-filter"
              className="absolute inset-0 z-0 bg-primary rounded-full shadow-lg shadow-primary/20"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">
            {category === "All" ? t.projects.all : category}
          </span>
        </button>
      ))}
    </div>
  );
}
