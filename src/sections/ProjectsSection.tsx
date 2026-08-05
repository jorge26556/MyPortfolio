"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/data/projects";
import { useLanguage } from "@/components/providers/language-provider";
import { ProjectCard } from "@/components/ui/project-card";
import { ProjectFilters, ProjectCategory } from "@/components/ui/project-filters";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProjectsSection() {
  const { t, lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const categories: ProjectCategory[] = ["All", "Web", "Mobile", "AI", "Power Platform", "Other"];

  const featuredProjects = useMemo(() => projectsData.filter((p) => p.featured), []);

  // With "All" selected the featured projects are already shown in the grid
  // above, so this list holds the rest. Every card below used to be a second
  // copy of a featured card — including a second copy of its media.
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projectsData.filter((p) => !p.featured);
    return projectsData.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const listHeading =
    activeCategory === "All"
      ? lang === "en"
        ? "More projects"
        : "Más proyectos"
      : t.projects.allProjects;

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
            <SectionHeading
              align="center"
              title={t.sectionTitles.projects}
              description={t.projects.featuredIntro}
            />
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
              {listHeading}
            </h3>
            
            <ProjectFilters 
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              className="mb-12"
            />
          </div>

          {/*
            Keying on the category remounts the cards so their entrance
            animation replays. That replaces the previous `layout` +
            `AnimatePresence popLayout` combination, which measured every card
            in the grid on each render.
          */}
          <div
            key={activeCategory}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index % 4} // Reset animation delay based on grid row
              />
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="flex flex-col items-center justify-center py-24 text-muted-foreground">
              <p className="text-xl">
                {lang === "en"
                  ? "No projects found in this category."
                  : "No hay proyectos en esta categoría."}
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
