"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Dialog } from "@base-ui/react/dialog";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { Project } from "@/data/projects";
import { useLanguage } from "@/components/providers/language-provider";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface MediaShowcaseProps {
  project: Project;
  lang: "en" | "es";
  eager?: boolean;
  className?: string;
  variant?: "card" | "modal";
}

function MediaSlideshow({
  urls,
  caption,
  eager = false,
  showControls = true,
  variant = "card",
}: {
  urls: string[];
  caption?: string;
  eager?: boolean;
  showControls?: boolean;
  variant?: "card" | "modal";
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered || urls.length <= 1) return;

    const timer = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % urls.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, [urls.length, isHovered]);

  return (
    <div
      className="relative h-full w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {urls.map((url, i) => (
        <div 
          key={`${url}-${i}`}
          className={cn(
            "absolute inset-0 transition-opacity duration-700",
            i === currentIndex ? "opacity-100" : "opacity-0"
          )}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center blur-2xl opacity-40 scale-110"
            style={{ backgroundImage: `url(${url})` }}
          />
          <Image
            src={url}
            alt={`Slide ${i + 1}`}
            fill
            loading={eager && i === 0 ? "eager" : "lazy"}
            sizes={variant === "card" ? "(max-width: 768px) 100vw, (max-width: 1400px) 50vw, 33vw" : "100vw"}
            quality={92}
            className={cn(
              "transition-transform duration-700 relative z-10",
              "object-contain"
            )}
          />
        </div>
      ))}

      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/28 via-transparent to-transparent" />

      {caption && (
        <div className="absolute inset-x-4 bottom-4 z-20 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-left text-xs font-medium leading-relaxed text-white/90 backdrop-blur-md">
          {caption}
        </div>
      )}

      {showControls && urls.length > 1 && (
        <div className="absolute bottom-4 right-4 z-20 flex gap-1.5">
          {urls.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setCurrentIndex(i);
              }}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === currentIndex ? "w-5 bg-white" : "w-2 bg-white/45 hover:bg-white/80"
              )}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function MediaShowcase({ project, lang, eager = false, className, variant = "card" }: MediaShowcaseProps) {
  const isProd = process.env.NODE_ENV === 'production';
  const prefix = isProd ? "/MyPortfolio" : "";

  if (project.mediaType === "slideshow" && project.slideshowUrls) {
    return (
      <MediaSlideshow
        urls={project.slideshowUrls.map(url => url.startsWith('/') ? `${prefix}${url}` : url)}
        caption={project.mediaCaption?.[lang]}
        eager={eager}
        variant={variant}
      />
    );
  }

  if (project.mediaType === "video" && project.videoUrl) {
    const videoUrl = project.videoUrl.startsWith('/') ? `${prefix}${project.videoUrl}` : project.videoUrl;
    const placeholderUrl = project.imageUrl?.startsWith('/') ? `${prefix}${project.imageUrl}` : project.imageUrl;

    return (
      <div className="relative h-full w-full bg-black/20">
        {placeholderUrl && (
          <div 
            className="absolute inset-0 bg-cover bg-center blur-2xl opacity-35 scale-110"
            style={{ backgroundImage: `url(${placeholderUrl})` }}
          />
        )}
        <video
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className={cn(
            "h-full w-full relative z-10",
            "object-contain",
            className
          )}
          poster={placeholderUrl}
        />
      </div>
    );
  }

  if (project.imageUrl) {
    const imageUrl = project.imageUrl.startsWith('/') ? `${prefix}${project.imageUrl}` : project.imageUrl;
    return (
      <div className="relative h-full w-full bg-black/5">
        <div 
          className="absolute inset-0 bg-cover bg-center blur-3xl opacity-45 scale-110"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <Image
          src={imageUrl}
          alt={project.title[lang]}
          fill
          loading={eager ? "eager" : "lazy"}
          sizes={variant === "card" ? "(max-width: 768px) 100vw, (max-width: 1400px) 50vw, 33vw" : "100vw"}
          quality={90}
          className={cn(
            "relative z-10",
            "object-contain",
            className
          )}
        />
      </div>
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
      No media
    </div>
  );
}

function ProjectDetailDialog({
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
  const detailText =
    lang === "en"
      ? {
          overview: "Project overview",
          stack: "Applied stack",
          close: "Close",
          preview: "Project preview",
        }
      : {
          overview: "Resumen del proyecto",
          stack: "Tecnologías aplicadas",
          close: "Cerrar",
          preview: "Vista del proyecto",
        };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-[70] bg-slate-950/70 backdrop-blur-md transition-opacity duration-200 data-[ending-style]:opacity-0" />
        <Dialog.Popup className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6">
          <div className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-t-[2rem] border border-white/10 bg-background shadow-2xl shadow-black/30 sm:rounded-[2rem]">
            <Dialog.Close
              aria-label={detailText.close}
              className="absolute top-4 right-4 z-20 flex size-11 items-center justify-center rounded-full border border-border/60 bg-background/85 text-foreground shadow-lg backdrop-blur-sm transition-colors hover:bg-muted"
            >
              <X className="size-5" />
            </Dialog.Close>

            <div className="grid min-h-0 flex-1 grid-cols-1 overflow-hidden lg:grid-cols-[minmax(0,1.2fr)_minmax(340px,0.8fr)]">
              <div className="relative min-h-[320px] bg-slate-950 sm:min-h-[400px] lg:min-h-full">
                <div className="absolute inset-0 overflow-hidden">
                  <MediaShowcase project={project} lang={lang} eager={eagerMedia} variant="modal" />
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/55 to-transparent" />
                <div className="absolute left-5 bottom-5 z-10">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/65">
                    {detailText.preview}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="border-white/10 bg-white/12 text-white backdrop-blur-sm">
                      {project.category}
                    </Badge>
                    {project.featured && (
                      <Badge className="border-white/10 bg-primary/30 text-white backdrop-blur-sm">
                        {t.projects.featured}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>

              <div className="min-h-0 overflow-y-auto p-5 sm:p-7 lg:p-8">
                <div className="mb-5 pr-12">
                  <Dialog.Title className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
                    {project.title[lang]}
                  </Dialog.Title>
                  <Dialog.Description className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {project.shortDescription[lang]}
                  </Dialog.Description>
                </div>

                <div className="mb-6 flex flex-wrap gap-2.5">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-primary/15 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary/85"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-6">
                  <section>
                    <h4 className="mb-2 text-sm font-bold uppercase tracking-[0.22em] text-primary/80">
                      {detailText.overview}
                    </h4>
                    <p className="text-sm leading-7 text-foreground/88 sm:text-[15px]">
                      {project.longDescription?.[lang] ?? project.shortDescription[lang]}
                    </p>
                  </section>

                  <section>
                    <h4 className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-primary/80">
                      {detailText.stack}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={`${project.id}-${tag}`}
                          className="rounded-full border border-border/60 bg-muted/50 px-3 py-1.5 text-sm text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </section>

                  <div className="flex flex-col gap-3 border-t border-border/60 pt-5 sm:flex-row">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
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
                        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border/70 bg-background px-5 py-3 font-semibold text-foreground transition-colors hover:bg-muted"
                      >
                        <ExternalLink className="size-4" />
                        {t.projects.liveDemo}
                      </a>
                    )}

                    <Dialog.Close className="inline-flex items-center justify-center rounded-2xl border border-border/70 bg-background px-5 py-3 font-semibold text-foreground transition-colors hover:bg-muted sm:ml-auto">
                      {detailText.close}
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

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { t, lang } = useLanguage();
  const [open, setOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [-16, 16]);
  const eagerMedia = project.featured && index < 2;
  const detailButtonLabel = lang === "en" ? "View details" : "Ver detalles";

  return (
    <>
      <motion.div
        ref={cardRef}
        role="button"
        tabIndex={0}
        layout
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: index * 0.1,
          duration: 0.5,
          ease: [0.23, 1, 0.32, 1],
        }}
        onClick={() => setOpen(true)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setOpen(true);
          }
        }}
        className="group relative flex w-full flex-col overflow-hidden rounded-3xl glass text-left transition-all duration-500 md:hover:-translate-y-2 md:hover:border-primary/30 md:hover:shadow-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-black/10">
          <motion.div
            style={{ y: translateY }}
            className="relative -top-[6%] h-[112%] w-full transition-transform duration-700 ease-out md:group-hover:scale-[1.03]"
          >
            <MediaShowcase project={project} lang={lang} eager={eagerMedia} />
          </motion.div>

          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/32 via-transparent to-transparent opacity-70 transition-opacity duration-300 md:group-hover:opacity-85" />

          <div className="absolute inset-x-4 bottom-4 z-10 flex items-end justify-between gap-3">
            <div className="rounded-full border border-white/14 bg-black/28 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/92 backdrop-blur-sm">
              {project.category}
            </div>
            <div className="rounded-full border border-white/14 bg-black/28 px-3 py-1.5 text-xs font-semibold text-white/92 backdrop-blur-sm">
              {detailButtonLabel}
            </div>
          </div>

          <div className="absolute inset-0 z-10 flex items-center justify-center gap-3 bg-background/22 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 lg:group-hover:opacity-100">
            {project.githubUrl && (
              <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 font-medium text-primary-foreground shadow-lg">
                <GithubIcon size={16} />
                {t.projects.viewCode}
              </span>
            )}
            {project.liveUrl && (
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 font-medium text-secondary-foreground shadow-lg">
                <ExternalLink className="h-4 w-4" />
                {t.projects.liveDemo}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="mb-2 flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary/80">
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

          <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-muted-foreground text-balance">
            {project.shortDescription[lang]}
          </p>

          <div className="mt-auto flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="border-primary/10 bg-primary/5 text-[10px] font-bold uppercase tracking-wider opacity-70"
              >
                {tag}
              </Badge>
            ))}
            {project.tags.length > 4 && (
              <span className="text-[10px] text-muted-foreground">+{project.tags.length - 4}</span>
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
