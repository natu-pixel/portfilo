"use client";

import { Code2, Terminal, Cpu, Server, Globe, Database, Flame, Zap } from "lucide-react";

const techItems = [
  { name: "Next.js 16 App Router", icon: Globe },
  { name: "TypeScript", icon: Code2 },
  { name: "Three.js 3D WebGL", icon: Flame },
  { name: "Python WebSockets", icon: Terminal },
  { name: "Sub-50ms Trading Bots", icon: Zap },
  { name: "Network Infrastructure", icon: Server },
  { name: "PC Hardware Diagnostics", icon: Cpu },
  { name: "PostgreSQL & Prisma", icon: Database },
];

export default function TechMarquee() {
  return (
    <div className="w-full overflow-hidden bg-neutral-900 text-white py-4 border-y border-neutral-800 relative z-20 select-none">
      <div className="flex w-max animate-marquee space-x-8">
        {[...techItems, ...techItems, ...techItems].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-3 text-xs font-mono tracking-widest uppercase text-neutral-300 whitespace-nowrap">
              <Icon className="w-4 h-4 text-blue-400" />
              <span>{item.name}</span>
              <span className="text-blue-600 font-bold">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
