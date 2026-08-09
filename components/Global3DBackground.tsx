"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from "three";

function FloatingPolyhedron({ position, color, scale }: { position: [number, number, number]; color: string; scale: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.25;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2} position={position}>
      <mesh ref={meshRef} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.2}
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>
    </Float>
  );
}

function ScrollResponsiveParticles() {
  const particlesRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (particlesRef.current && typeof window !== "undefined") {
      const scrollOffset = window.scrollY * 0.001;
      particlesRef.current.rotation.y = scrollOffset * 0.5 + state.clock.getElapsedTime() * 0.05;
      particlesRef.current.position.y = -scrollOffset * 2;
    }
  });

  return (
    <group ref={particlesRef}>
      <Stars radius={60} depth={60} count={2500} factor={4} saturation={1} fade speed={1} />
    </group>
  );
}

export default function Global3DBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-60">
      <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#2563eb" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#38bdf8" />

        <ScrollResponsiveParticles />

        {/* 3D Polyhedrons positioned along page scroll flow */}
        <FloatingPolyhedron position={[-8, 6, -5]} color="#2563eb" scale={1.8} />
        <FloatingPolyhedron position={[9, -4, -8]} color="#38bdf8" scale={2.2} />
        <FloatingPolyhedron position={[-7, -15, -6]} color="#1d4ed8" scale={1.5} />
        <FloatingPolyhedron position={[8, -25, -7]} color="#2563eb" scale={2} />
        <FloatingPolyhedron position={[-6, -35, -5]} color="#38bdf8" scale={1.6} />
      </Canvas>
    </div>
  );
}
