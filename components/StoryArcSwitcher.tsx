"use client";

import { useState } from "react";
import { Award, Calendar, CheckCircle2, Terminal, Server, Code2, Flame, ArrowUpRight, Mail } from "lucide-react";
import Card3DTilt from "./Card3DTilt";

type StoryMode = "whyme" | "levelup" | "chronology";

const proofPoints = [
  {
    project: "NAT Entertainment",
    title: "I build around real business needs.",
    description:
      "NAT Entertainment brings streaming subscriptions, reseller services, and web design into one platform. It's a practical example of turning several customer needs into one usable product.",
    href: "https://natentertainment.org/",
    linkLabel: "Explore NAT Entertainment",
    inProgress: false,
  },
  {
    project: "Qeero",
    title: "I match the experience to its audience.",
    description:
      "Qeero showcases a visual communication agency's 2D, 3D, print, and digital work. Its visual-first presentation keeps the agency's work at the center of the experience.",
    href: "https://qeero.fr/",
    linkLabel: "Explore Qeero",
    inProgress: false,
  },
  {
    project: "Shega",
    title: "I make the thinking behind the work visible.",
    description:
      "For Shega, I'm building an interactive event experience with Next.js and Three.js. The preview and case study offer a look at the approach while the project is still in development.",
    href: "https://shega-two.vercel.app/",
    linkLabel: "Preview Shega",
    inProgress: true,
  },
];

export default function StoryArcSwitcher() {
  const [activeMode, setActiveMode] = useState<StoryMode>("whyme");

  return (
    <div className="w-full my-8">
      
      <div className="flex flex-wrap items-center justify-center gap-3 mb-8 p-1.5 rounded-2xl bg-neutral-100 border border-neutral-200 max-w-xl mx-auto" role="group" aria-label="About profile views">
        <button
          type="button"
          onClick={() => setActiveMode("whyme")}
          aria-pressed={activeMode === "whyme"}
          className={`flex-1 min-w-[140px] px-4 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ${
            activeMode === "whyme"
              ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
              : "text-neutral-600 hover:text-neutral-900"
          }`}
        >
          <Terminal className="w-3.5 h-3.5" aria-hidden="true" /> Why choose me
        </button>

        <button
          type="button"
          onClick={() => setActiveMode("levelup")}
          aria-pressed={activeMode === "levelup"}
          className={`flex-1 min-w-[140px] px-4 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ${
            activeMode === "levelup"
              ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
              : "text-neutral-600 hover:text-neutral-900"
          }`}
        >
          <Award className="w-3.5 h-3.5" aria-hidden="true" /> 🎮 Level Up
        </button>

        <button
          type="button"
          onClick={() => setActiveMode("chronology")}
          aria-pressed={activeMode === "chronology"}
          className={`flex-1 min-w-[140px] px-4 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ${
            activeMode === "chronology"
              ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
              : "text-neutral-600 hover:text-neutral-900"
          }`}
        >
          <Calendar className="w-3.5 h-3.5" aria-hidden="true" /> 📜 Full Chronology
        </button>
      </div>

      {activeMode === "whyme" && (
        <Card3DTilt>
          <section className="p-6 sm:p-8 rounded-3xl bg-neutral-900 text-white border border-neutral-800 shadow-xl space-y-8" aria-labelledby="why-me-heading">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-mono text-blue-300 uppercase tracking-widest font-semibold">Why choose me</span>
              <h3 id="why-me-heading" className="font-outfit text-2xl sm:text-3xl font-bold leading-tight">
                More than a skills list. <span className="text-blue-300">Work you can explore.</span>
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                A resume can list technologies. My projects show how I use them to solve different problems. Explore the work, read the thinking behind it, and let&apos;s talk about what your team needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {proofPoints.map((point) => (
                <article key={point.project} className="flex flex-col p-5 rounded-2xl bg-neutral-800/60 border border-neutral-700">
                  <span className={`self-start mb-4 px-2 py-1 rounded-md text-xs font-mono font-medium ${
                    point.inProgress
                      ? "bg-amber-400/10 text-amber-300 border border-amber-400/30"
                      : "bg-blue-400/10 text-blue-300 border border-blue-400/30"
                  }`}>
                    {point.inProgress ? "In progress" : "Live project"}
                  </span>
                  <h4 className="text-base font-semibold text-white">{point.title}</h4>
                  <p className="mt-3 text-sm font-semibold text-blue-300">{point.project}</p>
                  <p className="mt-2 flex-1 text-sm text-neutral-300 leading-relaxed font-light">{point.description}</p>
                  <a
                    href={point.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 self-start rounded text-sm font-semibold text-blue-300 hover:text-blue-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-neutral-900"
                  >
                    {point.linkLabel} <ArrowUpRight className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>

            <div className="border-t border-neutral-700 pt-6 space-y-4">
              <p className="text-base font-medium text-white">
                Have a challenge on your team? Let&apos;s talk through it.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:info@natentertainment.org"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-neutral-900"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" /> Start a conversation by email
                </a>
                <a
                  href="#projects"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-white text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-neutral-900"
                >
                  Explore the case studies <ArrowUpRight className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>
          </section>
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
