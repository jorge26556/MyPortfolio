"use client";

import { Dialog } from "@base-ui/react/dialog";
import { ExternalLink, X } from "lucide-react";
import type { Project } from "@/data/projects";
import type { useLanguage } from "@/components/providers/language-provider";
import { Badge } from "@/components/ui/badge";
import { GithubIcon } from "@/components/ui/github-icon";
import { MediaShowcase } from "@/components/ui/project-media";

const COPY = {
  en: {
    overview: "Project overview",
    stack: "Applied stack",
    close: "Close",
    preview: "Project preview",
  },
  es: {
    overview: "Resumen del proyecto",
    stack: "Tecnologías aplicadas",
    close: "Cerrar",
    preview: "Vista del proyecto",
  },
} as const;

export function ProjectDetailDialog({
  project,
  lang,
  t,
  open,
  onOpenChange,
  eagerMedia,
}: {
  project: Project;
  lang: "en" | "es";
  t: ReturnType<typeof useLanguage>["t"];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  eagerMedia: boolean;
}) {
  const copy = COPY[lang];
  const hasLinks = Boolean(project.githubUrl || project.liveUrl);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-[70] bg-slate-950/70 backdrop-blur-md transition-opacity duration-300 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0" />

        {/*
          The Popup owns the fade so Base UI's transition attributes apply to a
          single element; the panel inside reads them through `group-data-*` to
          add its own motion — a sheet that rises on phones, a card that scales
          in on desktop.
        */}
        <Dialog.Popup className="group fixed inset-0 z-[80] flex items-end justify-center transition-opacity duration-300 outline-none data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 sm:items-center sm:p-6">
          <div
            className={[
              "relative flex w-full max-w-6xl flex-col overflow-hidden bg-background shadow-2xl shadow-black/40",
              "max-h-[94dvh] rounded-t-[1.75rem] border border-border/60 sm:max-h-[90dvh] sm:rounded-[1.75rem]",
              "transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
              "group-data-[starting-style]:translate-y-8 group-data-[ending-style]:translate-y-8",
              "sm:group-data-[starting-style]:translate-y-0 sm:group-data-[starting-style]:scale-[0.97]",
              "sm:group-data-[ending-style]:translate-y-0 sm:group-data-[ending-style]:scale-[0.97]",
            ].join(" ")}
          >
            {/* Grab affordance: signals the sheet is dismissable on touch. */}
            <div className="mx-auto mt-2.5 h-1.5 w-10 shrink-0 rounded-full bg-border sm:hidden" />

            <div className="flex min-h-0 flex-1 flex-col lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.85fr)]">
              {/* ── Media ─────────────────────────────────────────────
                  Bounded by aspect ratio on narrow screens so it can never
                  crowd out the description; fills the column on desktop. */}
              <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-slate-950 sm:aspect-[16/9] lg:aspect-auto lg:h-full lg:min-h-[26rem]">
                <MediaShowcase project={project} lang={lang} eager={eagerMedia} variant="modal" />

                <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-black/50 to-transparent" />

                <div className="pointer-events-none absolute top-4 left-4 z-30 flex flex-wrap gap-2">
                  <Badge className="border-white/15 bg-black/50 text-white backdrop-blur-md">
                    {project.category}
                  </Badge>
                  {project.featured && (
                    <Badge className="border-white/15 bg-primary/70 text-white backdrop-blur-md">
                      {t.projects.featured}
                    </Badge>
                  )}
                </div>

                <Dialog.Close
                  aria-label={copy.close}
                  className="absolute top-3.5 right-3.5 z-30 flex size-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition hover:bg-black/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                >
                  <X className="size-5" />
                </Dialog.Close>
              </div>

              {/* ── Details ───────────────────────────────────────── */}
              <div className="flex min-h-0 flex-1 flex-col">
                <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-5 sm:p-7 lg:p-8">
                  <p className="mb-2 text-[11px] font-semibold tracking-[0.28em] text-primary/70 uppercase">
                    {copy.preview}
                  </p>

                  <Dialog.Title className="text-2xl font-black tracking-tight text-balance text-foreground sm:text-3xl">
                    {project.title[lang]}
                  </Dialog.Title>

                  <Dialog.Description className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {project.shortDescription[lang]}
                  </Dialog.Description>

                  <section className="mt-7">
                    <h4 className="mb-2 text-xs font-bold tracking-[0.22em] text-primary/80 uppercase">
                      {copy.overview}
                    </h4>
                    <p className="text-sm leading-7 text-foreground/90 sm:text-[15px]">
                      {project.longDescription?.[lang] ?? project.shortDescription[lang]}
                    </p>
                  </section>

                  {/* The tag list used to appear twice — as badges under the
                      title and again here. One canonical place is enough. */}
                  <section className="mt-7">
                    <h4 className="mb-3 text-xs font-bold tracking-[0.22em] text-primary/80 uppercase">
                      {copy.stack}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary/90"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </section>
                </div>

                {/* Pinned outside the scroll area: on a phone the actions were
                    previously only reachable after scrolling the whole body. */}
                <div className="shrink-0 border-t border-border/60 bg-background/95 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] backdrop-blur-sm sm:px-7 sm:py-5 lg:px-8">
                  <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                      >
                        <GithubIcon size={16} />
                        {t.projects.viewCode}
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-border/70 bg-background px-5 text-sm font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                      >
                        <ExternalLink className="size-4" />
                        {t.projects.liveDemo}
                      </a>
                    )}

                    <Dialog.Close
                      className={[
                        "inline-flex h-12 items-center justify-center rounded-2xl border border-border/70 bg-background px-5 text-sm font-semibold text-foreground",
                        "transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                        hasLinks ? "sm:ml-auto" : "",
                      ].join(" ")}
                    >
                      {copy.close}
                    </Dialog.Close>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
