"use client";

import { GraduationCap, Server, Wrench, CheckCircle2 } from "lucide-react";
import Card3DTilt from "./Card3DTilt";
import StoryArcSwitcher from "./StoryArcSwitcher";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-200" aria-label="About Section">
      
      {/* Section Header */}
      <div className="max-w-3xl mb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">Engineering Profile & Story Arc</span>
        <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mt-2">
          Bridging High-Level Software with <span className="text-blue-600">Low-Level Infrastructure.</span>
        </h2>
        
        {/* Personal Narrative & Philosophy */}
        <Card3DTilt className="mt-6">
          <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-3">
            <p className="text-neutral-700 text-base leading-relaxed font-light">
              I’m <strong className="font-semibold text-neutral-900">Natnael Teferi</strong>, a full-stack software engineer and founder specializing in high-performance web applications, sub-50ms trading automation, and enterprise IT infrastructure. Holding a B.Sc. in Computer Science alongside certified credentials in Computer Maintenance & Networking, I combine algorithmic precision with hardware and network reliability.
            </p>
            <p className="text-neutral-600 text-sm leading-relaxed font-light">
              From engineering live platforms like <a href="https://natentertainment.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-medium">natentertainment.org</a> to deploying automated execution algorithms, my focus is building fast, secure, and resilient systems that solve real technical challenges.
            </p>
          </div>
        </Card3DTilt>
      </div>

      {/* Interactive Story Arc Switcher (Speed Run | Level Up | Full Chronology) */}
      <StoryArcSwitcher />

      {/* 3 Pillar Cards wrapped in 3D Perspective Tilt */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        
        {/* Pillar 1 */}
        <Card3DTilt>
          <div className="p-8 h-full rounded-3xl bg-neutral-50 border border-neutral-200 hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-outfit text-xl font-semibold text-neutral-900 mb-3">Computer Science Degree</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-6 font-light">
                Rigorous training in software engineering principles, algorithm design, database optimization, and modern web application development.
              </p>
            </div>

            <ul className="space-y-2.5 text-xs text-neutral-700 border-t border-neutral-200 pt-6 font-mono">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" /> Full-Stack Architecture
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" /> Algorithmic Logic & Automation
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" /> REST & GraphQL APIs
              </li>
            </ul>
          </div>
        </Card3DTilt>

        {/* Pillar 2 */}
        <Card3DTilt>
          <div className="p-8 h-full rounded-3xl bg-neutral-50 border border-neutral-200 hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="font-outfit text-xl font-semibold text-neutral-900 mb-3">Networking Certification</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-6 font-light">
                Certified capability in designing, implementing, and securing local and wide area network infrastructures for high stability.
              </p>
            </div>

            <ul className="space-y-2.5 text-xs text-neutral-700 border-t border-neutral-200 pt-6 font-mono">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" /> Router & Switch Configuration
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" /> Network Security Protocols
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" /> IPTV & Streaming Deployment
              </li>
            </ul>
          </div>
        </Card3DTilt>

        {/* Pillar 3 */}
        <Card3DTilt>
          <div className="p-8 h-full rounded-3xl bg-neutral-50 border border-neutral-200 hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="font-outfit text-xl font-semibold text-neutral-900 mb-3">Computer Maintenance</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-6 font-light">
                Expert hardware diagnostics, system troubleshooting, component repair, and operating system maintenance for enterprise machines.
              </p>
            </div>

            <ul className="space-y-2.5 text-xs text-neutral-700 border-t border-neutral-200 pt-6 font-mono">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" /> Hardware Assembly & Diagnostic
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" /> OS Tuning & Recovery
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" /> Preventative Maintenance
              </li>
            </ul>
          </div>
        </Card3DTilt>

      </div>

    </section>
  );
}
