"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMotionBudget } from "@/hooks/use-motion-budget";

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: "fade" | "scale" | "slide-up";
  strength?: number;
  className?: string;
}

/**
 * Reveals its children once, the first time they scroll into view.
 *
 * The previous implementation drove opacity from scroll position through a
 * spring, which had two problems: it built four springs per instance and only
 * ever read one of them, and the `fade` variant faded content back out as the
 * section left the viewport — so sections went blank while still on screen.
 */
export function ScrollReveal({
  children,
  variant = "fade",
  strength = 40,
  className,
}: ScrollRevealProps) {
  const motionBudget = useMotionBudget();

  if (motionBudget === "none") {
    return <div className={cn("relative", className)}>{children}</div>;
  }

  const hidden = {
    fade: { opacity: 0 },
    scale: { opacity: 0, scale: 0.97 },
    "slide-up": { opacity: 0, y: strength },
  }[variant];

  return (
    <motion.div
      initial={hidden}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
      className={cn("relative", className)}
    >
      {children}
    </motion.div>
  );
}
