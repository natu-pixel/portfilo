"use client";

import dynamic from "next/dynamic";
import { ArrowUpRight, Award, ShieldCheck, Terminal, Flame, ExternalLink } from "lucide-react";
import Image from "next/image";

// Dynamically import 3D Canvas without SSR to prevent WebGL hydration mismatches
const Hero3DCanvas = dynamic(() => import("./Hero3DCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] md:h-[550px] rounded-3xl bg-neutral-900/40 border border-neutral-800 flex items-center justify-center">
      <div className="text-sm font-mono text-neutral-500 animate-pulse">Loading 3D WebGL...</div>
    </div>
  ),
});

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Rich Descriptive Content */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          
          {/* Status Badges */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-900 text-neutral-200 border border-neutral-700">
              <span className="w-2 h-2 rounded-full bg-neutral-300 animate-ping"></span>
              2 Projects Currently In Active Development
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-neutral-900 text-neutral-300 border border-neutral-800">
              <Award className="w-3.5 h-3.5 text-neutral-400" /> CS Graduate
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-neutral-900 text-neutral-300 border border-neutral-800">
              <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" /> IT & Networking Certified
            </span>
          </div>

          {/* Main Title & Subtitle */}
          <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Hi, I'm <span className="text-gradient">Natnael Teferi</span>.<br />
            Architecting Software, Bots & E-Commerce Platforms.
          </h1>

          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
            Computer Science graduate specializing in full-stack web applications, custom automated trading bots, enterprise e-commerce platforms like <a href="https://natentertainment.org/" target="_blank" rel="noopener noreferrer" className="text-white underline font-medium hover:text-neutral-300">natentertainment.org</a>, and robust IT hardware/networking infrastructure.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 pt-2 w-full sm:w-auto">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-neutral-200 text-black font-semibold text-sm transition-all duration-200 shadow-lg shadow-white/10"
            >
              Explore All Projects <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="https://natentertainment.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 font-medium text-sm border border-neutral-800 transition-all duration-200"
            >
              Visit NatEntertainment.org <ExternalLink className="w-4 h-4 text-neutral-400" />
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 pt-6 border-t border-neutral-800/80 w-full max-w-xl">
            <div>
              <div className="text-2xl font-bold font-outfit text-white">5+</div>
              <div className="text-xs text-neutral-500 font-mono uppercase mt-0.5">Live Projects</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-outfit text-white flex items-center gap-1">
                2 <Flame className="w-4 h-4 text-neutral-400" />
              </div>
              <div className="text-xs text-neutral-500 font-mono uppercase mt-0.5">Ongoing Work</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-outfit text-white">B.Sc.</div>
              <div className="text-xs text-neutral-500 font-mono uppercase mt-0.5">Comp. Science</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-outfit text-white">Cert.</div>
              <div className="text-xs text-neutral-500 font-mono uppercase mt-0.5">Maint. & Network</div>
            </div>
          </div>

        </div>

        {/* Right Column: Interactive 3D WebGL Canvas & Profile Badge */}
        <div className="lg:col-span-5 flex flex-col space-y-4">
          <Hero3DCanvas />

          {/* Profile Card overlay */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-md">
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 border border-neutral-700">
                <Image src="/ceo.jpg" alt="Natnael Teferi" fill className="object-cover" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white font-outfit">Natnael Teferi</h4>
                <p className="text-xs text-neutral-400">Software Engineer & Founder</p>
                <div className="flex items-center gap-2 mt-1 text-[11px] font-mono text-neutral-300">
                  <Terminal className="w-3 h-3 text-neutral-400" /> Ready for Deployment
                </div>
              </div>
            </div>

            <a
              href="https://natentertainment.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-neutral-800 text-neutral-200 border border-neutral-700 text-xs font-mono hover:bg-neutral-700 transition-colors hidden sm:block"
            >
              natentertainment.org ↗
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
