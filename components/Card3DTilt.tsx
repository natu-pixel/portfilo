"use client";

import { useRef, useState, ReactNode } from "react";

interface Card3DTiltProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
}

export default function Card3DTilt({
  children,
  className = "",
  spotlightColor = "rgba(37, 99, 235, 0.12)",
}: Card3DTiltProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setSpotlightPos({ x, y });

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8; // -8deg max tilt
    const rotateY = ((x - centerX) / centerX) * 8;   // 8deg max tilt

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: "transform 0.15s ease-out",
        transformStyle: "preserve-3d",
      }}
      className={`relative overflow-hidden will-change-transform ${className}`}
    >
      {/* Radial Spotlight Glow Overlay (ReactBits Inspiration) */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-20 rounded-3xl"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${spotlightPos.x}px ${spotlightPos.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
}
