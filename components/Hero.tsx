"use client";

import dynamic from "next/dynamic";
import { ArrowUpRight, Award, ShieldCheck, Terminal, Flame, ExternalLink } from "lucide-react";
import Image from "next/image";

// Dynamically import 3D Canvas without SSR to prevent WebGL hydration mismatches
const Hero3DCanvas = dynamic(() => import("./Hero3DCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] md:h-[550px] rounded-3xl bg-neutral-50 border border-neutral-200 flex items-center justify-center">
      <div className="text-sm font-mono text-neutral-400 animate-pulse">Loading 3D WebGL...</div>
    </div>
  ),
});

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" aria-label="Hero Section">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: 3-Second Rule Hero Content */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          
          {/* Status Badges */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
              Available for Hire & Freelance Projects
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 text-neutral-700 border border-neutral-200">
              <Award className="w-3.5 h-3.5 text-blue-600" /> CS Graduate
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 text-neutral-700 border border-neutral-200">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" /> IT & Networking Certified
            </span>
          </div>

          {/* Explicit 3-Second Rule Headline */}
          <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-tight">
            Hi, I’m <span className="text-blue-600">Nati Kuzmi</span> — Full-Stack Developer & Software Engineer.
          </h1>

          {/* Subtitle & Value Proposition */}
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
            I build performant web applications, automated trading bots, and enterprise platforms like <a href="https://natentertainment.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-medium hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded">natentertainment.org</a> that build <span className="text-blue-600 font-normal">trust</span> so you can <span className="text-blue-700 font-normal">win customers and close deals.</span>
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 pt-2 w-full sm:w-auto">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all duration-200 shadow-md shadow-blue-600/20 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              aria-label="View My Work Projects"
            >
              View My Work <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2"
              aria-label="Contact Me Directly"
            >
              Contact Me
            </a>
            <a
              href="https://natentertainment.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-medium text-sm border border-neutral-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-400"
            >
              Live Site (natentertainment.org) <ExternalLink className="w-4 h-4 text-blue-600" />
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 pt-6 border-t border-neutral-200 w-full max-w-xl">
            <div>
              <div className="text-2xl font-bold font-outfit text-neutral-900">5+</div>
              <div className="text-xs text-neutral-500 font-mono uppercase mt-0.5">Live Projects</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-outfit text-blue-600 flex items-center gap-1">
                2 <Flame className="w-4 h-4 text-amber-500" />
              </div>
              <div className="text-xs text-neutral-500 font-mono uppercase mt-0.5">Ongoing Work</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-outfit text-neutral-900">B.Sc.</div>
              <div className="text-xs text-neutral-500 font-mono uppercase mt-0.5">Comp. Science</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-outfit text-neutral-900">Cert.</div>
              <div className="text-xs text-neutral-500 font-mono uppercase mt-0.5">Maint. & Network</div>
            </div>
          </div>

        </div>

        {/* Right Column: Interactive 3D WebGL Canvas & Profile Badge */}
        <div className="lg:col-span-5 flex flex-col space-y-4">
          <Hero3DCanvas />

          {/* Profile Card overlay with WCAG Alt text */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-neutral-50 border border-neutral-200">
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 border border-neutral-200">
                <Image src="/ceo.jpg" alt="Nati Kuzmi - Full-Stack Developer & Software Engineer" fill className="object-cover" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-neutral-900 font-outfit">Nati Kuzmi</h4>
                <p className="text-xs text-neutral-500">Full-Stack Engineer & Founder</p>
                <div className="flex items-center gap-2 mt-1 text-[11px] font-mono text-blue-600">
                  <Terminal className="w-3 h-3" /> Ready for Deployment
                </div>
              </div>
            </div>

            <a
              href="https://natentertainment.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 text-xs font-mono hover:bg-blue-100 transition-colors hidden sm:block font-medium focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              natentertainment.org ↗
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
