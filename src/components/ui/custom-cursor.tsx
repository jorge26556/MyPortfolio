"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth tracking config
  const springConfig = { damping: 20, stiffness: 250, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const checkDesktop = () => {
      // Hide on touch devices or small screens
      setIsDesktop(window.matchMedia("(pointer: fine)").matches);
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);

    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("button") || 
        target.closest("a") || 
        target.dataset.hover === "true" ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mouseover", handleHoverStart);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("resize", checkDesktop);
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mouseover", handleHoverStart);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isDesktop) return null;

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] size-10 rounded-full border border-primary/30 mix-blend-difference hidden md:block"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovered ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />
      
      {/* Target Dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] size-1.5 rounded-full bg-primary mix-blend-difference hidden md:block"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovered ? 4 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      />
    </>
  );
}
