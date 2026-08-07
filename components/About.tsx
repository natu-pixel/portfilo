"use client";

import { GraduationCap, Server, Wrench, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-800/60">
      
      {/* Section Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">Background & Specialization</span>
        <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2">
          Bridging High-Level Software with Low-Level Infrastructure.
        </h2>
        <p className="text-neutral-400 mt-4 text-base sm:text-lg font-light leading-relaxed">
          My academic foundation in Computer Science combined with hands-on certification in Computer Maintenance and Networking gives me an end-to-end perspective on building digital solutions.
        </p>
      </div>

      {/* 3 Pillar Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Pillar 1 */}
        <div className="p-8 rounded-3xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-neutral-800 border border-neutral-700 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="font-outfit text-xl font-semibold text-white mb-3">Computer Science Degree</h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-light">
              Rigorous training in software engineering principles, algorithm design, database optimization, and modern web application development.
            </p>
          </div>

          <ul className="space-y-2.5 text-xs text-neutral-300 border-t border-neutral-800/80 pt-6">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-neutral-400 flex-shrink-0" /> Full-Stack Architecture
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-neutral-400 flex-shrink-0" /> Algorithmic Logic & Automation
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-neutral-400 flex-shrink-0" /> REST & GraphQL APIs
            </li>
          </ul>
        </div>

        {/* Pillar 2 */}
        <div className="p-8 rounded-3xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-neutral-800 border border-neutral-700 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Server className="w-6 h-6" />
            </div>
            <h3 className="font-outfit text-xl font-semibold text-white mb-3">Networking Certification</h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-light">
              Certified capability in designing, implementing, and securing local and wide area network infrastructures for high stability.
            </p>
          </div>

          <ul className="space-y-2.5 text-xs text-neutral-300 border-t border-neutral-800/80 pt-6">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-neutral-400 flex-shrink-0" /> Router & Switch Configuration
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-neutral-400 flex-shrink-0" /> Network Security Protocols
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-neutral-400 flex-shrink-0" /> IPTV & Streaming Deployment
            </li>
          </ul>
        </div>

        {/* Pillar 3 */}
        <div className="p-8 rounded-3xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-neutral-800 border border-neutral-700 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="font-outfit text-xl font-semibold text-white mb-3">Computer Maintenance</h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-light">
              Expert hardware diagnostics, system troubleshooting, component repair, and operating system maintenance for enterprise machines.
            </p>
          </div>

          <ul className="space-y-2.5 text-xs text-neutral-300 border-t border-neutral-800/80 pt-6">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-neutral-400 flex-shrink-0" /> Hardware Assembly & Diagnostic
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-neutral-400 flex-shrink-0" /> OS Tuning & Recovery
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-neutral-400 flex-shrink-0" /> Preventative Maintenance
            </li>
          </ul>
        </div>

      </div>

    </section>
  );
}
