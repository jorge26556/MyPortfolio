"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="bg-grid-subtle absolute inset-0 opacity-20" />

      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[15%] -left-[10%] h-[600px] w-[600px] rounded-full bg-primary/15 blur-[120px] dark:bg-primary/10 transition-colors duration-1000"
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
          rotate: [0, -45, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[10%] -right-[15%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[100px] dark:bg-blue-800/10 transition-colors duration-1000"
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 80, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-[20%] left-[15%] h-[700px] w-[700px] rounded-full bg-violet-600/10 blur-[140px] dark:bg-violet-950/10 transition-colors duration-1000"
      />

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-radial-gradient(from_50%_50%_at_50%_50%,transparent_0%,var(--background)_100%)" />
    </div>
  );
}
