"use client";

import { Code2, Cpu, Shield } from "lucide-react";

const skillCategories = [
  {
    title: "Software & Web Development",
    icon: Code2,
    skills: ["React / Next.js", "TypeScript", "Node.js", "Python Automation", "Tailwind CSS", "REST APIs", "Git / GitHub"],
  },
  {
    title: "Hardware & Maintenance",
    icon: Cpu,
    skills: ["PC Diagnostics & Assembly", "Component Replacement", "System Benchmarking", "BIOS/UEFI Configuration", "Thermal Management", "Disaster Recovery"],
  },
  {
    title: "Networking & Security",
    icon: Shield,
    skills: ["Router & Switch Config", "LAN / WAN Design", "TCP/IP & Subnetting", "IPTV Stream Delivery", "Firewall Rules", "Network Troubleshooting"],
  },
];

export default function SkillsMatrix() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-200">
      
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">Technical Capability</span>
        <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-neutral-900 mt-2">
          Skills & Technologies Matrix
        </h2>
        <p className="text-neutral-600 mt-2 text-base font-light">
          A comprehensive breakdown of tools, languages, and technical disciplines I master.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <div key={idx} className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-200">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-outfit text-base font-semibold text-neutral-900">{cat.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 rounded-lg bg-white text-xs font-mono text-neutral-800 border border-neutral-200 hover:border-blue-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
