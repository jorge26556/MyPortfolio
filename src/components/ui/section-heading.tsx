import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  description?: string;
  align?: "start" | "center";
  className?: string;
}

/**
 * The single heading treatment for every top-level section.
 *
 * These used to be written inline, which drifted into four different looks:
 * a `.text-gradient` variant, two hand-rolled `bg-clip-text` gradients at
 * different sizes, and one flat `text-foreground` heading — plus three
 * different accent-rule colours.
 */
export function SectionHeading({
  title,
  description,
  align = "start",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex max-w-2xl flex-col gap-4",
        centered && "mx-auto items-center text-center",
        className
      )}
    >
      <h2 className="text-gradient text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
        {title}
      </h2>

      <div
        className={cn(
          "h-1 w-20 rounded-full bg-linear-to-r from-primary to-violet-400",
          centered && "mx-auto"
        )}
      />

      {description && (
        <p className="mt-2 text-base leading-relaxed text-balance text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
