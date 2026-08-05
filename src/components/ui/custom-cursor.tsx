"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const opacity = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 250, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // A fine pointer is necessary but not sufficient — respect reduced motion too.
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => setIsEnabled(finePointer.matches && !reducedMotion.matches);
    sync();

    finePointer.addEventListener("change", sync);
    reducedMotion.addEventListener("change", sync);
    return () => {
      finePointer.removeEventListener("change", sync);
      reducedMotion.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) return;

    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      // Driving opacity through a motion value keeps pointer movement off
      // React's render path entirely.
      opacity.set(1);
    };

    // `closest` walks a handful of ancestors. The previous version also called
    // getComputedStyle on every mouseover, forcing a synchronous style recalc
    // on each one.
    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      setIsHovered(Boolean(target?.closest('button, a, [role="button"], [data-hover="true"]')));
    };

    const hide = () => opacity.set(0);
    const show = () => opacity.set(1);

    window.addEventListener("mousemove", moveMouse, { passive: true });
    window.addEventListener("mouseover", handleHover, { passive: true });
    document.addEventListener("mouseleave", hide);
    document.addEventListener("mouseenter", show);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mouseover", handleHover);
      document.removeEventListener("mouseleave", hide);
      document.removeEventListener("mouseenter", show);
    };
  }, [isEnabled, mouseX, mouseY, opacity]);

  if (!isEnabled) return null;

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden size-10 rounded-full border border-primary/30 mix-blend-difference md:block"
        style={{
          x: smoothX,
          y: smoothY,
          opacity,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovered ? 1.5 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      {/* Target Dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden size-1.5 rounded-full bg-primary mix-blend-difference md:block"
        style={{
          x: mouseX,
          y: mouseY,
          opacity,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovered ? 4 : 1,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      />
    </>
  );
}
