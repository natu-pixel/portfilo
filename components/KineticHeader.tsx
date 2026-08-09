"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

interface KineticHeaderProps {
  text: string;
  highlightText?: string;
  className?: string;
}

export default function KineticHeader({ text, highlightText, className = "" }: KineticHeaderProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const letters = containerRef.current.querySelectorAll(".kinetic-char");
    
    animate(letters, {
      translateY: [40, 0],
      opacity: [0, 1],
      duration: 1200,
      delay: stagger(30, { start: 100 }),
    });
  }, [text, highlightText]);

  return (
    <h1 ref={containerRef} className={`overflow-hidden ${className}`}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="kinetic-char inline-block will-change-transform"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </span>
      ))}
      {highlightText && (
        <span className="text-blue-600 font-bold ml-2">
          {highlightText.split("").map((char, index) => (
            <span
              key={`hl-${index}`}
              className="kinetic-char inline-block will-change-transform"
              style={{ whiteSpace: char === " " ? "pre" : "normal" }}
            >
              {char}
            </span>
          ))}
        </span>
      )}
    </h1>
  );
}
