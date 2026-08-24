"use client";

import { useState } from "react";
import { Zap, Award, Calendar, CheckCircle2, Terminal, Server, Code2, Flame } from "lucide-react";
import Card3DTilt from "./Card3DTilt";

type StoryMode = "speedrun" | "levelup" | "chronology";

export default function StoryArcSwitcher() {
  const [activeMode, setActiveMode] = useState<StoryMode>("speedrun");

  return (
    <div className="w-full my-8">
      
      {/* Mode Switcher Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-8 p-1.5 rounded-2xl bg-neutral-100 border border-neutral-200 max-w-xl mx-auto">
        <button
          onClick={() => setActiveMode("speedrun")}
          className={`flex-1 min-w-[140px] px-4 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all flex items-center justify-center gap-2 ${
            activeMode === "speedrun"
              ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
              : "text-neutral-600 hover:text-neutral-900"
          }`}
        >
          <Zap className="w-3.5 h-3.5" /> ⚡ Speed Run
        </button>

        <button
          onClick={() => setActiveMode("levelup")}
          className={`flex-1 min-w-[140px] px-4 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all flex items-center justify-center gap-2 ${
            activeMode === "levelup"
              ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
              : "text-neutral-600 hover:text-neutral-900"
          }`}
        >
          <Award className="w-3.5 h-3.5" /> 🎮 Level Up
        </button>

        <button
          onClick={() => setActiveMode("chronology")}
          className={`flex-1 min-w-[140px] px-4 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all flex items-center justify-center gap-2 ${
            activeMode === "chronology"
              ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
              : "text-neutral-600 hover:text-neutral-900"
          }`}
        >
          <Calendar className="w-3.5 h-3.5" /> 📜 Full Chronology
        </button>
      </div>

      {/* Mode 1: Speed Run */}
      {activeMode === "speedrun" && (
        <Card3DTilt>
          <div className="p-8 rounded-3xl bg-neutral-900 text-white border border-neutral-800 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></span>
                <span className="text-xs font-mono text-blue-400 uppercase tracking-widest font-semibold">30-Second Recruiter Summary</span>
              </div>
              <span className="text-xs font-mono text-neutral-500">Read Time: 30s</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 rounded-2xl bg-neutral-800/60 border border-neutral-700/50 space-y-2">
                <div className="text-xs font-mono text-neutral-400 uppercase">Core Discipline</div>
                <div className="text-sm font-bold text-white">Full-Stack & Trading Automation</div>
                <p className="text-xs text-neutral-400 leading-relaxed font-light">
                  Next.js 16 App Router, TypeScript, Python WebSockets, and sub-50ms execution engines.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-800/60 border border-neutral-700/50 space-y-2">
                <div className="text-xs font-mono text-neutral-400 uppercase">Infrastructure & Hardware</div>
                <div className="text-sm font-bold text-white">Networking & Diagnostics</div>
                <p className="text-xs text-neutral-400 leading-relaxed font-light">
                  Certified in Router/Switch configurations, LAN security, and hardware diagnostics.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-800/60 border border-neutral-700/50 space-y-2">
                <div className="text-xs font-mono text-neutral-400 uppercase">Flagship Business</div>
                <div className="text-sm font-bold text-blue-400">Founder @ natentertainment.org</div>
                <p className="text-xs text-neutral-400 leading-relaxed font-light">
                  Live production sales portal with automated digital licensing and high uptime.
                </p>
              </div>
            </div>
          </div>
        </Card3DTilt>
      )}

      {/* Mode 2: Level Up */}
      {activeMode === "levelup" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card3DTilt>
            <div className="p-6 h-full rounded-3xl bg-neutral-50 border border-neutral-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-50 text-blue-700 font-bold border border-blue-200">LVL 1 • FOUNDATION</span>
                <Code2 className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-base font-bold text-neutral-900">Computer Science B.Sc. Degree</h3>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                Mastered data structures, algorithms, object-oriented design, REST APIs, and database engineering.
              </p>
              <div className="pt-2 text-xs font-mono text-blue-600 flex items-center gap-1 font-medium">
                <CheckCircle2 className="w-4 h-4" /> Degree Completed
              </div>
            </div>
          </Card3DTilt>

          <Card3DTilt>
            <div className="p-6 h-full rounded-3xl bg-neutral-50 border border-neutral-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-50 text-amber-700 font-bold border border-amber-200">LVL 2 • HARDWARE & NETWORKS</span>
                <Server className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="text-base font-bold text-neutral-900">Maintenance & Networking Cert.</h3>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                Certified in hardware component diagnostics, operating system recovery, router setup, and LAN security.
              </p>
              <div className="pt-2 text-xs font-mono text-amber-600 flex items-center gap-1 font-medium">
                <CheckCircle2 className="w-4 h-4" /> Certified Master
              </div>
            </div>
          </Card3DTilt>

          <Card3DTilt>
            <div className="p-6 h-full rounded-3xl bg-neutral-50 border border-neutral-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">LVL 3 • PRODUCTION MASTERY</span>
                <Flame className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-base font-bold text-neutral-900">Founder & Trading Automator</h3>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                Engineered natentertainment.org platform and high-frequency trading bot engines running on sub-second WebSockets.
              </p>
              <div className="pt-2 text-xs font-mono text-emerald-600 flex items-center gap-1 font-medium">
                <CheckCircle2 className="w-4 h-4" /> Active Production
              </div>
            </div>
          </Card3DTilt>
        </div>
      )}

      {/* Mode 3: Full Chronology */}
      {activeMode === "chronology" && (
        <Card3DTilt>
          <div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200 shadow-sm space-y-6">
            <h3 className="text-lg font-bold font-outfit text-neutral-900 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600" /> Full Career & Engineering Chronology
            </h3>

            <div className="relative border-l-2 border-blue-200 ml-4 pl-6 space-y-8">
              
              {/* Event 1 */}
              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white"></span>
                <span className="text-xs font-mono text-blue-600 font-bold">2024 - PRESENT</span>
                <h4 className="text-sm font-bold text-neutral-900 mt-1">Founding Nat Entertainment & Trading Automation</h4>
                <p className="text-xs text-neutral-600 font-light leading-relaxed mt-1">
                  Launched live sales portal <a href="https://natentertainment.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-medium">natentertainment.org</a> and built high-frequency Python WebSocket trading bots.
                </p>
              </div>

              {/* Event 2 */}
              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white"></span>
                <span className="text-xs font-mono text-neutral-500">2023 - 2024</span>
                <h4 className="text-sm font-bold text-neutral-900 mt-1">Networking & Hardware Maintenance Certification</h4>
                <p className="text-xs text-neutral-600 font-light leading-relaxed mt-1">
                  Earned professional certification in IT hardware diagnostics, server assembly, and enterprise networking protocols.
                </p>
              </div>

              {/* Event 3 */}
              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white"></span>
                <span className="text-xs font-mono text-neutral-500">2020 - 2023</span>
                <h4 className="text-sm font-bold text-neutral-900 mt-1">Computer Science B.Sc. Graduation</h4>
                <p className="text-xs text-neutral-600 font-light leading-relaxed mt-1">
                  Completed B.Sc. in Computer Science focusing on algorithm design, full-stack web architecture, and database systems.
                </p>
              </div>

            </div>
          </div>
        </Card3DTilt>
      )}

    </div>
  );
}
