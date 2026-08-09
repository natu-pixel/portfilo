"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshWobbleMaterial, OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Central3DTorusKnot() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={2} floatIntensity={2.5}>
      <mesh ref={meshRef} scale={1.6}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <MeshWobbleMaterial
          color="#2563eb"
          emissive="#1d4ed8"
          emissiveIntensity={0.6}
          roughness={0.1}
          metalness={0.9}
          wireframe
          factor={0.4}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

function OrbitingSatellites() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.8;
      groupRef.current.rotation.z += delta * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh position={[3, 1, 0]} scale={0.4}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#38bdf8" emissive="#0284c7" wireframe />
      </mesh>

      <mesh position={[-3, -1, 1]} scale={0.35}>
        <tetrahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#60a5fa" emissive="#1d4ed8" wireframe />
      </mesh>

      <mesh position={[0, -2.5, -2]} scale={0.5}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#1e40af" emissive="#1d4ed8" wireframe />
      </mesh>
    </group>
  );
}

export default function Hero3DCanvas() {
  return (
    <div className="w-full h-[400px] md:h-[550px] relative rounded-3xl overflow-hidden bg-neutral-50 border border-neutral-200 shadow-sm">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[10, 10, 5]} intensity={1.8} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={1.2} color="#2563eb" />

        <Stars radius={50} depth={50} count={1800} factor={4} saturation={1} fade speed={1.8} />
        
        <Central3DTorusKnot />
        <OrbitingSatellites />

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />
      </Canvas>

      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs font-mono text-neutral-600 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl border border-neutral-200">
        <span>High-Detail 3D Mesh Engine</span>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span> Three.js TorusKnot</span>
      </div>
    </div>
  );
}
