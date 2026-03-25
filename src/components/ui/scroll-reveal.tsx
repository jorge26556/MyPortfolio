"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: "fade" | "scale" | "slide-up" | "parallax";
  strength?: number;
  className?: string;
}

export function ScrollReveal({ 
  children, 
  variant = "fade", 
  strength = 40,
  className 
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.2], [strength, 0]);
  const parallax = useTransform(scrollYProgress, [0, 1], [-strength, strength]);

  const smoothOpacity = useSpring(opacity, { damping: 20, stiffness: 100 });
  const smoothScale = useSpring(scale, { damping: 20, stiffness: 100 });
  const smoothY = useSpring(y, { damping: 20, stiffness: 100 });
  const smoothParallax = useSpring(parallax, { damping: 20, stiffness: 100 });

  const getStyle = () => {
    switch (variant) {
      case "fade":
        return { opacity: smoothOpacity };
      case "scale":
        return { opacity: smoothOpacity, scale: smoothScale };
      case "slide-up":
        return { opacity: smoothOpacity, y: smoothY };
      case "parallax":
        return { y: smoothParallax };
      default:
        return {};
    }
  };

  return (
    <motion.div
      ref={ref}
      style={getStyle()}
      className={cn("relative", className)}
    >
      {children}
    </motion.div>
  );
}
