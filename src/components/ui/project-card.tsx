"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { useLanguage } from "@/components/providers/language-provider";
import { Badge } from "@/components/ui/badge";
import { MediaShowcase } from "@/components/ui/project-media";
import { ProjectDetailDialog } from "@/components/ui/project-dialog";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { t, lang } = useLanguage();
  const [open, setOpen] = useState(false);

  const eagerMedia = project.featured && index < 2;
  const detailLabel = lang === "en" ? "View details" : "Ver detalles";

  return (
    <>
      {/*
        No per-card `useScroll` parallax and no `layout` prop: with a dozen
        cards on screen that meant a dozen scroll-linked springs plus a full
        layout measurement pass on every render, which is what made scrolling
        feel heavy. The hover lift below is pure CSS.
      */}
      <motion.div
        role="button"
        tabIndex={0}
        aria-haspopup="dialog"
        aria-label={`${project.title[lang]} — ${detailLabel}`}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          delay: Math.min(index, 3) * 0.08,
          duration: 0.45,
          ease: [0.23, 1, 0.32, 1],
        }}
        onClick={() => setOpen(true)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setOpen(true);
          }
        }}
        className="group glass relative flex w-full cursor-pointer flex-col overflow-hidden rounded-3xl text-left transition-all duration-500 focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none md:hover:-translate-y-2 md:hover:border-primary/30 md:hover:shadow-primary/10"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-black/10">
          <div className="h-full w-full transition-transform duration-700 ease-out md:group-hover:scale-[1.03]">
            <MediaShowcase project={project} lang={lang} eager={eagerMedia} />
          </div>

          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent opacity-70 transition-opacity duration-300 md:group-hover:opacity-90" />

          <div className="pointer-events-none absolute top-4 left-4 z-20">
            <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-[10px] font-semibold tracking-[0.2em] text-white/90 uppercase backdrop-blur-md">
              {project.category}
            </span>
          </div>

          {/*
            Replaces the full-cover hover overlay that used to bury the
            screenshot behind a blur and two fake buttons. The card opens the
            dialog; this just tells you so, without hiding the work.
          */}
          <div className="pointer-events-none absolute right-4 bottom-4 z-20 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/45 py-1.5 pr-2.5 pl-3 text-xs font-semibold text-white backdrop-blur-md transition-all duration-300 md:group-hover:bg-primary md:group-hover:pr-3">
            {detailLabel}
            <ArrowUpRight className="size-3.5 transition-transform duration-300 md:group-hover:translate-x-0.5 md:group-hover:-translate-y-0.5" />
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="mb-2 flex items-center gap-2">
            <span className="text-xs font-semibold tracking-wider text-primary/80 uppercase">
              {project.category}
            </span>
            {project.featured && (
              <Badge
                variant="secondary"
                className="h-4 border-primary/20 bg-primary/10 py-0 text-[10px] text-primary"
              >
                {t.projects.featured}
              </Badge>
            )}
          </div>

          <h3 className="mb-2 text-xl font-bold tracking-tight text-foreground transition-colors md:group-hover:text-primary">
            {project.title[lang]}
          </h3>

          <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-balance text-muted-foreground">
            {project.shortDescription[lang]}
          </p>

          <div className="mt-auto flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="border-primary/10 bg-primary/5 text-[10px] font-bold tracking-wider uppercase opacity-70"
              >
                {tag}
              </Badge>
            ))}
            {project.tags.length > 4 && (
              <span className="self-center text-[10px] text-muted-foreground">
                +{project.tags.length - 4}
              </span>
            )}
          </div>
        </div>
      </motion.div>

      <ProjectDetailDialog
        project={project}
        lang={lang}
        t={t}
        open={open}
        onOpenChange={setOpen}
        eagerMedia={eagerMedia}
      />
    </>
  );
}
