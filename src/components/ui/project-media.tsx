"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import type { Project } from "@/data/projects";
import { useInViewport } from "@/hooks/use-in-viewport";
import { useMotionBudget } from "@/hooks/use-motion-budget";
import { cn } from "@/lib/utils";

export type MediaVariant = "card" | "modal";

const AUTOPLAY_MS = 4500;
/** Above this count, individual dots stop being clickable targets and start being noise. */
const MAX_DOTS = 8;

const sizesFor = (variant: MediaVariant) =>
  variant === "card"
    ? "(max-width: 768px) 100vw, (max-width: 1400px) 50vw, 33vw"
    : "(max-width: 1024px) 100vw, 700px";

const CAROUSEL_COPY = {
  en: { prev: "Previous image", next: "Next image", goTo: (n: number) => `Go to image ${n}` },
  es: { prev: "Imagen anterior", next: "Imagen siguiente", goTo: (n: number) => `Ir a la imagen ${n}` },
} as const;

/**
 * Slides move as well as fade. The old version cross-faded two centred
 * screenshots that looked alike, which read as a blur rather than as a change
 * of slide — you could not tell it had advanced, or in which direction.
 */
const slideVariants = {
  enter: (direction: number) => ({
    x: direction >= 0 ? "6%" : "-6%",
    opacity: 0,
    scale: 0.985,
  }),
  center: { x: "0%", opacity: 1, scale: 1 },
  exit: (direction: number) => ({
    x: direction >= 0 ? "-6%" : "6%",
    opacity: 0,
    scale: 0.985,
  }),
};

function MediaSlideshow({
  urls,
  caption,
  eager = false,
  variant = "card",
  label,
  lang,
}: {
  urls: string[];
  caption?: string;
  eager?: boolean;
  variant?: MediaVariant;
  label: string;
  lang: "en" | "es";
}) {
  const copy = CAROUSEL_COPY[lang];
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  // Once someone takes manual control, stop yanking the slide out from under them.
  const [userTookOver, setUserTookOver] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const isVisible = useInViewport(containerRef, { rootMargin: "0px" });
  const motionBudget = useMotionBudget();

  const total = urls.length;
  const isInteractive = variant === "modal";
  const animate = motionBudget !== "none";

  const goTo = useCallback(
    (next: number, dir: number, manual = true) => {
      if (manual) setUserTookOver(true);
      setDirection(dir);
      setIndex(((next % total) + total) % total);
    },
    [total]
  );

  const next = useCallback((manual = true) => goTo(index + 1, 1, manual), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1, -1), [goTo, index]);

  // Autoplay stops when off-screen, hovered, manually driven, or motion-reduced.
  useEffect(() => {
    if (total <= 1 || isPaused || userTookOver || !isVisible || !animate) return;
    const timer = window.setInterval(() => next(false), AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [total, isPaused, userTookOver, isVisible, animate, next]);

  // Arrow keys only make sense where the slideshow is the focus of the screen.
  useEffect(() => {
    if (!isInteractive || total <= 1) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isInteractive, total, next, prev]);

  const nextUrl = urls[(index + 1) % total];

  return (
    <div
      ref={containerRef}
      className="group/slides relative h-full w-full overflow-hidden bg-linear-to-br from-primary/10 via-background to-background"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={animate ? slideVariants : undefined}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          drag={isInteractive && total > 1 ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.18}
          onDragEnd={(_, info) => {
            if (info.offset.x < -60 || info.velocity.x < -400) next();
            else if (info.offset.x > 60 || info.velocity.x > 400) prev();
          }}
          className="absolute inset-0 cursor-default"
        >
          <Image
            src={urls[index]}
            alt={`${label} — ${index + 1}/${total}`}
            fill
            priority={eager && index === 0}
            loading={eager && index === 0 ? "eager" : "lazy"}
            sizes={sizesFor(variant)}
            draggable={false}
            className="object-contain select-none"
          />
        </motion.div>
      </AnimatePresence>

      {/* Warms the next frame so the transition never lands on a blank panel. */}
      {total > 1 && (
        <div className="pointer-events-none absolute size-px opacity-0" aria-hidden="true">
          <Image src={nextUrl} alt="" width={16} height={16} sizes="16px" />
        </div>
      )}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/45 to-transparent" />

      {caption && (
        <div className="absolute inset-x-4 bottom-14 z-20 rounded-2xl border border-white/10 bg-black/45 px-4 py-3 text-left text-xs font-medium leading-relaxed text-white/90 backdrop-blur-md">
          {caption}
        </div>
      )}

      {total > 1 && (
        <>
          {isInteractive && (
            <>
              <SlideArrow side="left" onClick={prev} label={copy.prev} />
              <SlideArrow side="right" onClick={() => next()} label={copy.next} />
            </>
          )}

          <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between gap-3 px-4 pb-4">
            {total <= MAX_DOTS ? (
              // On a card the dots are read-only: the card itself is the click
              // target, and nesting buttons inside a role="button" both breaks
              // assistive tech and makes the tap behaviour unpredictable.
              <div className="flex gap-1.5" aria-hidden={!isInteractive}>
                {urls.map((_, i) =>
                  isInteractive ? (
                    <button
                      key={i}
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        goTo(i, i > index ? 1 : -1);
                      }}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        i === index ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
                      )}
                      aria-label={copy.goTo(i + 1)}
                      aria-current={i === index}
                    />
                  ) : (
                    <span
                      key={i}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        i === index ? "w-6 bg-white" : "w-2 bg-white/50"
                      )}
                    />
                  )
                )}
              </div>
            ) : (
              // 18 dots is not a control, it is decoration. A counter plus a
              // progress rail tells you where you are and how much is left.
              <div className="flex flex-1 items-center gap-3">
                <span className="rounded-full border border-white/15 bg-black/45 px-2.5 py-1 text-[11px] font-semibold tabular-nums text-white/90 backdrop-blur-sm">
                  {index + 1} / {total}
                </span>
                <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/20">
                  <div
                    className="h-full rounded-full bg-white transition-[width] duration-500 ease-out"
                    style={{ width: `${((index + 1) / total) * 100}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

function SlideArrow({
  side,
  onClick,
  label,
}: {
  side: "left" | "right";
  onClick: () => void;
  label: string;
}) {
  const Icon = side === "left" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
      }}
      aria-label={label}
      className={cn(
        "absolute top-1/2 z-30 flex size-11 -translate-y-1/2 items-center justify-center rounded-full",
        "border border-white/20 bg-black/45 text-white backdrop-blur-md",
        "transition hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
        // Stays out of the way on desktop until you approach, always reachable on touch.
        "opacity-100 md:opacity-0 md:group-hover/slides:opacity-100 md:focus-visible:opacity-100",
        side === "left" ? "left-3" : "right-3"
      )}
    >
      <Icon className="size-5" />
    </button>
  );
}

export function MediaShowcase({
  project,
  lang,
  eager = false,
  variant = "card",
  className,
}: {
  project: Project;
  lang: "en" | "es";
  eager?: boolean;
  variant?: MediaVariant;
  className?: string;
}) {
  const title = project.title[lang];

  if (project.mediaType === "slideshow" && project.slideshowUrls) {
    return (
      <MediaSlideshow
        urls={project.slideshowUrls}
        caption={project.mediaCaption?.[lang]}
        eager={eager}
        variant={variant}
        label={title}
        lang={lang}
      />
    );
  }

  if (project.mediaType === "video" && project.videoUrl) {
    const posterUrl = project.posterUrl ?? project.imageUrl;

    // In the grid we show the poster only. These recordings are 16–32 MB each,
    // and three of them autoplaying at once was the single heaviest thing on
    // the page. The real video is mounted by the detail dialog on demand.
    if (variant === "card") {
      return (
        <div className="relative h-full w-full bg-linear-to-br from-primary/12 via-background to-background">
          {posterUrl && (
            <Image
              src={posterUrl}
              alt={title}
              fill
              loading={eager ? "eager" : "lazy"}
              sizes={sizesFor("card")}
              className={cn("object-contain", className)}
            />
          )}
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <span className="flex size-14 items-center justify-center rounded-full border border-white/25 bg-black/45 text-white shadow-lg backdrop-blur-md transition-transform duration-300 md:group-hover:scale-110">
              <Play className="size-6 translate-x-px fill-current" />
            </span>
          </div>
        </div>
      );
    }

    return (
      <div className="relative h-full w-full bg-black">
        <video
          src={project.videoUrl}
          autoPlay
          loop
          muted
          playsInline
          controls
          preload="auto"
          poster={posterUrl}
          className={cn("h-full w-full object-contain", className)}
        />
      </div>
    );
  }

  if (project.imageUrl) {
    return (
      <div className="relative h-full w-full bg-linear-to-br from-primary/8 via-background to-background">
        <Image
          src={project.imageUrl}
          alt={title}
          fill
          loading={eager ? "eager" : "lazy"}
          sizes={sizesFor(variant)}
          className={cn("object-contain", className)}
        />
      </div>
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center bg-muted text-sm text-muted-foreground">
      {lang === "en" ? "No preview available" : "Sin vista previa"}
    </div>
  );
}
