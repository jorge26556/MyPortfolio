"use client";

import { useEffect, useState } from "react";

export type MotionBudget = "full" | "reduced" | "none";

interface NavigatorWithHints extends Navigator {
  deviceMemory?: number;
}

/**
 * How much decorative motion this visitor's machine should be asked to run.
 *
 * - `none`    — the visitor asked for reduced motion, or there is no WebGL.
 *               Render a static fallback; do not mount a canvas.
 * - `reduced` — low-end hardware (few cores, little RAM, coarse pointer).
 *               Cheap CSS motion is fine, WebGL is not.
 * - `full`    — everything on.
 *
 * Always starts at `none` so the server-rendered markup and the first client
 * paint agree; it upgrades after mount once the real capabilities are known.
 */
export function useMotionBudget(): MotionBudget {
  const [budget, setBudget] = useState<MotionBudget>("none");

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const evaluate = () => {
      if (reducedMotion.matches) return setBudget("none");

      const nav = navigator as NavigatorWithHints;
      const cores = nav.hardwareConcurrency ?? 4;
      const memory = nav.deviceMemory ?? 4;
      const coarsePointer = window.matchMedia("(pointer: coarse)").matches;

      // Integrated-graphics laptops and phones are where the 3D hero stutters.
      if (cores <= 4 || memory <= 4 || coarsePointer) return setBudget("reduced");

      setBudget(hasWebGL() ? "full" : "reduced");
    };

    evaluate();
    reducedMotion.addEventListener("change", evaluate);
    return () => reducedMotion.removeEventListener("change", evaluate);
  }, []);

  return budget;
}

function hasWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2") ?? canvas.getContext("webgl");
    if (!gl) return false;
    // A software rasterizer will technically answer, but it cannot keep 60fps.
    const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
    if (debugInfo) {
      const renderer = String(gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL));
      if (/swiftshader|llvmpipe|software/i.test(renderer)) return false;
    }
    return true;
  } catch {
    return false;
  }
}
