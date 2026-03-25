"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { MotionValue } from "framer-motion";
import * as THREE from "three";

interface FloatingBlobProps {
  pointerX: MotionValue<number>;
  pointerY: MotionValue<number>;
  isDark: boolean;
}

export function FloatingBlob({ pointerX, pointerY, isDark }: FloatingBlobProps) {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const shellRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1.12, 24), []);

  const palette = isDark
    ? {
        core: "#7b6cff",
        rim: "#c8c3ff",
        inner: "#5346d7",
        coreOpacity: 0.82,
        shellOpacity: 0.18,
        innerOpacity: 0.42,
      }
    : {
        core: "#b5a6ff",
        rim: "#f3f1ff",
        inner: "#8c7af4",
        coreOpacity: 0.72,
        shellOpacity: 0.14,
        innerOpacity: 0.28,
      };

  useFrame((state) => {
    if (!groupRef.current || !coreRef.current || !shellRef.current || !innerRef.current) return;

    const time = state.clock.getElapsedTime();
    const baseX = 2.08;
    const baseY = -0.4;
    const floatX = Math.cos(time * 0.32) * 0.13;
    const floatY = Math.sin(time * 0.46) * 0.18;
    const targetX = baseX + floatX + pointerX.get() * 0.72;
    const targetY = baseY + floatY - pointerY.get() * 0.58;

    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.08);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.08);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, pointerX.get() * 0.24, 0.08);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -pointerY.get() * 0.16, 0.08);

    const wobbleA = Math.sin(time * 1.15) * 0.07;
    const wobbleB = Math.cos(time * 1.45) * 0.05;
    const wobbleC = Math.sin(time * 0.9 + 1.1) * 0.06;

    coreRef.current.scale.set(1.32 + wobbleA, 1.52 + wobbleB, 1.22 + wobbleC);
    coreRef.current.rotation.x = time * 0.11;
    coreRef.current.rotation.y = time * 0.18;
    coreRef.current.rotation.z = time * 0.06;

    shellRef.current.scale.set(1.42 + wobbleA * 0.8, 1.64 + wobbleB * 0.8, 1.3 + wobbleC * 0.8);
    shellRef.current.rotation.x = time * 0.12;
    shellRef.current.rotation.y = time * 0.2;
    shellRef.current.rotation.z = time * 0.07;

    innerRef.current.scale.set(1.04 + wobbleA * 0.45, 1.18 + wobbleB * 0.45, 0.98 + wobbleC * 0.45);
    innerRef.current.position.set(-0.12, -0.18, -0.18);
  });

  return (
    <group ref={groupRef} position={[2.08, -0.4, 0.05]}>
      <mesh ref={shellRef} geometry={geometry}>
        <meshPhysicalMaterial
          color={palette.rim}
          transparent
          opacity={palette.shellOpacity}
          roughness={0.02}
          metalness={0.04}
          clearcoat={1}
          clearcoatRoughness={0.02}
          transmission={0.84}
          thickness={1.8}
          ior={1.28}
          reflectivity={1}
        />
      </mesh>

      <mesh ref={innerRef} geometry={geometry}>
        <meshPhysicalMaterial
          color={palette.inner}
          transparent
          opacity={palette.innerOpacity}
          roughness={0.26}
          metalness={0.04}
          clearcoat={0.45}
          transmission={0.18}
        />
      </mesh>

      <mesh ref={coreRef} geometry={geometry}>
        <meshPhysicalMaterial
          color={palette.core}
          transparent
          opacity={palette.coreOpacity}
          roughness={0.08}
          metalness={0.06}
          clearcoat={1}
          clearcoatRoughness={0.03}
          transmission={0.58}
          thickness={1.35}
          ior={1.22}
          reflectivity={0.95}
          sheen={1}
          sheenColor="#ffffff"
          sheenRoughness={0.24}
        />
      </mesh>
    </group>
  );
}
