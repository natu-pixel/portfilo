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
          color="#d4d4d4"
          emissive="#404040"
          emissiveIntensity={0.3}
          roughness={0.2}
          metalness={0.9}
          wireframe
          factor={0.3}
          speed={1.2}
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
        color="#737373"
        emissive="#262626"
        emissiveIntensity={0.5}
        wireframe={false}
        roughness={0.3}
      />
    </mesh>
  );
}

export default function Hero3DCanvas() {
  return (
    <div className="w-full h-[400px] md:h-[550px] relative rounded-3xl overflow-hidden bg-neutral-900/40 border border-neutral-800 backdrop-blur-md">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#a3a3a3" />

        <Stars radius={50} depth={50} count={1500} factor={3} saturation={0} fade speed={1} />
        
        <Floating3DShape />
        <InnerCore />

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs font-mono text-neutral-400 bg-neutral-950/60 backdrop-blur-md px-4 py-2 rounded-xl border border-neutral-800/80">
        <span>Interactive 3D Canvas</span>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-neutral-300 animate-pulse"></span> Three.js / WebGL</span>
      </div>
    </div>
  );
}
