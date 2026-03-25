"use client";

import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import type { MotionValue } from "framer-motion";
import { useTheme } from "next-themes";
import { FloatingBlob } from "./floating-blob";

interface HeroCanvasProps {
  pointerX: MotionValue<number>;
  pointerY: MotionValue<number>;
}

export function HeroCanvas({ pointerX, pointerY }: HeroCanvasProps) {
  const { resolvedTheme, theme } = useTheme();
  const isDark = (resolvedTheme ?? theme ?? "dark") === "dark";

  const palette = isDark
    ? {
        ambient: 0.72,
        directional: "#d7d3ff",
        directionalIntensity: 2.1,
        key: "#8b7cff",
        keyIntensity: 14,
        fill: "#8ed0ff",
        fillIntensity: 6,
        rim: "#ffffff",
        rimIntensity: 7,
        overlay:
          "radial-gradient(circle at 76% 38%, rgba(139, 124, 255, 0.12), transparent 24%), radial-gradient(circle at 20% 72%, rgba(142, 208, 255, 0.08), transparent 20%)",
        fade: "linear-gradient(to bottom, rgba(15, 18, 41, 0.08), transparent 45%, rgba(15, 18, 41, 0.16))",
      }
    : {
        ambient: 0.84,
        directional: "#f2efff",
        directionalIntensity: 1.65,
        key: "#c4b5fd",
        keyIntensity: 8.2,
        fill: "#b9dfff",
        fillIntensity: 3.2,
        rim: "#ffffff",
        rimIntensity: 4.5,
        overlay:
          "radial-gradient(circle at 76% 38%, rgba(196, 181, 253, 0.15), transparent 22%), radial-gradient(circle at 20% 72%, rgba(147, 197, 253, 0.07), transparent 18%)",
        fade: "linear-gradient(to bottom, rgba(255, 255, 255, 0.02), transparent 42%, rgba(255, 255, 255, 0.2))",
      };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <Canvas
        className="h-full w-full"
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 6.8], fov: 40 }}
      >
        <ambientLight intensity={palette.ambient} />
        <directionalLight
          position={[-4, 4, 5]}
          intensity={palette.directionalIntensity}
          color={palette.directional}
        />
        <pointLight position={[2.8, 0.25, 2.4]} intensity={palette.keyIntensity} distance={8} color={palette.key} />
        <pointLight position={[-2.5, -1.4, 1.6]} intensity={palette.fillIntensity} distance={8} color={palette.fill} />
        <pointLight position={[0.8, 2.8, 3.4]} intensity={palette.rimIntensity} distance={10} color={palette.rim} />

        <Float speed={1.6} rotationIntensity={0.35} floatIntensity={0.9}>
          <FloatingBlob pointerX={pointerX} pointerY={pointerY} isDark={isDark} />
        </Float>
      </Canvas>

      <div className="absolute inset-0" style={{ background: palette.overlay }} />
      <div className="absolute inset-0" style={{ background: palette.fade }} />
    </div>
  );
}
