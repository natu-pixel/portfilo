"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshWobbleMaterial, OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Floating3DShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} scale={2.2}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshWobbleMaterial
          color="#1d4ed8"
          emissive="#2563eb"
          emissiveIntensity={0.5}
          roughness={0.1}
          metalness={0.8}
          wireframe
          factor={0.3}
          speed={1.5}
        />
      </mesh>
    </Float>
  );
}

function InnerCore() {
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.y -= delta * 0.5;
    }
  });

  return (
    <mesh ref={coreRef} scale={1.2}>
      <octahedronGeometry args={[1, 2]} />
      <meshStandardMaterial
        color="#3b82f6"
        emissive="#1d4ed8"
        emissiveIntensity={0.6}
        wireframe={false}
        roughness={0.2}
      />
    </mesh>
  );
}

export default function Hero3DCanvas() {
  return (
    <div className="w-full h-[400px] md:h-[550px] relative rounded-3xl overflow-hidden bg-neutral-50 border border-neutral-200 shadow-sm">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#2563eb" />

        <Stars radius={50} depth={50} count={1200} factor={4} saturation={1} fade speed={1.5} />
        
        <Floating3DShape />
        <InnerCore />

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs font-mono text-neutral-600 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl border border-neutral-200">
        <span>Interactive 3D Canvas</span>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span> Three.js / R3F</span>
      </div>
    </div>
  );
}
