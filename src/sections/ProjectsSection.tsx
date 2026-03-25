"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "@/data/projects";
import { useLanguage } from "@/components/providers/language-provider";
import { ProjectCard } from "@/components/ui/project-card";
import { ProjectFilters, ProjectCategory } from "@/components/ui/project-filters";
import { Container } from "@/components/ui/container";

export function ProjectsSection() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const categories: ProjectCategory[] = ["All", "Web", "Mobile", "AI", "Power Platform", "Other"];

  const featuredProjects = useMemo(() => 
    projectsData.filter(p => p.featured), 
  []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projectsData;
    return projectsData.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden bg-background">
      {/* Background decoration elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute top-[20%] -right-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] -left-24 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full pointer-events-none" />

      <Container>
        {/* Featured Projects Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {t.sectionTitles.projects}
            </h2>
            <div className="mx-auto h-1.5 w-24 rounded-full bg-gradient-to-r from-primary to-secondary" />
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              {t.projects.featuredIntro}
            </p>
          </motion.div>
        </div>

        {/* Featured Projects Grid */}
        <div className="mb-24 grid grid-cols-1 gap-8 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* All Projects Section */}
        <div className="relative pt-16 border-t border-border/50">
          <div className="mb-12 text-center">
            <h3 className="mb-8 text-2xl font-bold text-foreground">
              {t.projects.allProjects}
            </h3>
            
            <ProjectFilters 
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              className="mb-12"
            />
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {filteredProjects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={index % 4} // Reset animation delay based on grid row
                />
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <div className="flex flex-col items-center justify-center py-24 text-muted-foreground">
              <p className="text-xl">No projects found in this category.</p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
