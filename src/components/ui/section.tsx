import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
}

export function Section({
  containerSize = "xl",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("relative py-16 sm:py-20 lg:py-24", className)}
      {...props}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
