"use client";

import { useState } from "react";
import { ExternalLink, Sparkles, Clock, Globe } from "lucide-react";
import Image from "next/image";

const categories = ["All", "Flagship & E-Commerce", "Automation & Bots", "Applications", "Ongoing Projects"];

const projectsList = [
  {
    title: "Nat Entertainment Sales Platform",
    category: "Flagship & E-Commerce",
    isFlagship: true,
    isOngoing: false,
    image: "/assets/nat_entertainment.jpg",
    description:
      "A comprehensive digital sales platform and portal providing digital media packages, software licenses, automated delivery workflows, and instant customer support integration.",
    highlights: [
      "Live production e-commerce & sales engine at natentertainment.org",
      "Automated order processing & instant digital delivery workflow",
      "Integrated multi-channel payment & live support chat",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST APIs"],
    demoUrl: "https://natentertainment.org/",
    liveLabel: "Visit Live Site (natentertainment.org)",
  },
  {
    title: "Algorithmic Trading Bot Engine",
    category: "Automation & Bots",
    isFlagship: false,
    isOngoing: false,
    image: "/assets/trading_bot.jpg",
    description:
      "A high-frequency algorithmic trading engine designed to monitor live market order books, execute automated technical strategy indicators, and manage risk with sub-second latency.",
    highlights: [
      "Real-time WebSocket market data ingestion",
      "Automated risk management & stop-loss triggers",
      "Backtested indicator signals with technical metrics",
    ],
    tech: ["Python", "WebSockets", "Pandas", "REST API", "Docker"],
    demoUrl: "https://t.me/NATENTERTAINMENTSUPPORT",
    liveLabel: "Request Bot Demo",
  },
  {
    title: "Enterprise Inventory & CRM Engine",
    category: "Ongoing Projects",
    isFlagship: false,
    isOngoing: true,
    progressPercent: 75,
    image: "/assets/finance_tracker.jpg",
    description:
      "Currently under active development: A multi-tenant SaaS inventory management & CRM suite engineered for hardware suppliers and IT maintenance service providers.",
    highlights: [
      "Live active development phase (75% completed)",
      "Automated stock tracking & maintenance dispatch schedule",
      "Role-based access control (RBAC) & audit logs",
    ],
    tech: ["Next.js 15", "PostgreSQL", "Prisma", "Tailwind CSS"],
    demoUrl: "https://t.me/NATENTERTAINMENTSUPPORT",
    liveLabel: "In Active Development",
  },
  {
    title: "Multi-Chain Crypto Arbitrage Bot v2",
    category: "Ongoing Projects",
    isFlagship: false,
    isOngoing: true,
    progressPercent: 60,
    image: "/assets/trading_bot.jpg",
    description:
      "Currently under active development: An upgraded cross-DEX liquidity scanner and flash loan arbitrage bot with automated slippage detection and gas-optimized smart contracts.",
    highlights: [
      "Live active development phase (60% completed)",
      "Cross-DEX liquidity monitoring across multiple chains",
      "Automated profit calculation after gas estimation",
    ],
    tech: ["Python", "Solidity", "Ethers.js", "Web3.py"],
    demoUrl: "https://t.me/NATENTERTAINMENTSUPPORT",
    liveLabel: "In Active Development",
  },
  {
    title: "Gourmet Restaurant Platform",
    category: "Applications",
    isFlagship: false,
    isOngoing: false,
    image: "/assets/restaurant_website.jpg",
    description:
      "An interactive restaurant platform with dynamic menu management, table reservation system, and real-time online ordering integration with elegant visual aesthetic.",
    highlights: [
      "Dynamic interactive digital menu",
      "Online table reservation workflow",
      "Mobile-first responsive design system",
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://wa.me/251945653317",
    liveLabel: "View Platform Demo",
  },
  {
    title: "IPTV Player Application",
    category: "Applications",
    isFlagship: false,
    isOngoing: false,
    image: "/assets/iptv_player.jpg",
    description:
      "A high-performance IPTV streaming player featuring M3U playlist parsing, EPG channel guide integration, custom player controls, and low-latency stream buffer management.",
    highlights: [
      "M3U/M3U8 playlist & EPG channel guide parser",
      "Custom HLS video streaming player integration",
      "Smooth categorization & search indexing",
    ],
    tech: ["React", "HLS.js", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://t.me/NATENTERTAINMENTSUPPORT",
    liveLabel: "View App Details",
  },
  {
    title: "Personal Financial Tracker",
    category: "Applications",
    isFlagship: false,
    isOngoing: false,
    image: "/assets/finance_tracker.jpg",
    description:
      "A comprehensive personal finance and asset management dashboard that visualizes cash flow, expense categories, income metrics, and investment growth with interactive charts.",
    highlights: [
      "Interactive multi-period financial charts",
      "Automated budget tracking & category breakdowns",
      "Secure encrypted client data persistence",
    ],
    tech: ["TypeScript", "Recharts", "Next.js", "Tailwind CSS"],
    demoUrl: "https://wa.me/251945653317",
    liveLabel: "View Dashboard Demo",
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projectsList 
    : projectsList.filter(p => p.category === activeCategory || (activeCategory === "Ongoing Projects" && p.isOngoing));

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-800/60">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">Featured Work & Live Projects</span>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-neutral-900 text-neutral-300 border border-neutral-800 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 animate-ping"></span> 2 Active Developments
            </span>
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Selected Work & Platforms
          </h2>
          <p className="text-neutral-400 mt-2 text-base font-light max-w-xl">
            Live enterprise websites, automated software bots, and ongoing software builds.
          </p>
        </div>

        <a
          href="https://natentertainment.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-black bg-white hover:bg-neutral-200 px-4 py-2.5 rounded-xl font-semibold transition-colors shadow-lg shadow-white/10 self-start md:self-auto"
        >
          <Globe className="w-4 h-4" /> Live Website: natentertainment.org ↗
        </a>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-12 pb-4 border-b border-neutral-800/80">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              activeCategory === cat
                ? "bg-white text-black font-semibold shadow-md shadow-white/10"
                : "bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800"
            }`}
          >
            {cat} {cat === "Ongoing Projects" && "(2 Active)"}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {filteredProjects.map((project, index) => (
          <article
            key={index}
            className={`flex flex-col rounded-3xl bg-neutral-900/40 border overflow-hidden transition-all duration-300 group ${
              project.isFlagship
                ? "border-neutral-700 shadow-xl shadow-white/5 lg:col-span-2 lg:flex-row"
                : project.isOngoing
                ? "border-neutral-700 bg-neutral-900/60"
                : "border-neutral-800/80 hover:border-neutral-700"
            }`}
          >
            {/* Image Preview Container */}
            <div className={`relative w-full bg-neutral-950 overflow-hidden ${
              project.isFlagship ? "lg:w-1/2 aspect-[16/10]" : "aspect-[16/10]"
            }`}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80"></div>
              
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className={`px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider backdrop-blur-md border ${
                  project.isFlagship
                    ? "bg-white text-black border-white font-bold"
                    : "bg-neutral-950/80 text-neutral-300 border-neutral-800"
                }`}>
                  {project.isFlagship ? "★ Flagship Live Website" : project.category}
                </span>

                {project.isOngoing && (
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-neutral-900/90 text-neutral-300 border border-neutral-700 backdrop-blur-md flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-neutral-400 animate-spin" /> In Active Development
                  </span>
                )}
              </div>
            </div>

            {/* Content Details */}
            <div className={`p-8 flex-1 flex flex-col justify-between space-y-6 ${
              project.isFlagship ? "lg:w-1/2" : ""
            }`}>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-outfit text-2xl font-bold text-white group-hover:text-neutral-300 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-neutral-400 text-sm leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Progress bar for ongoing work */}
                {project.isOngoing && project.progressPercent && (
                  <div className="pt-2">
                    <div className="flex justify-between text-[11px] font-mono text-neutral-400 mb-1">
                      <span>Development Progress</span>
                      <span className="text-neutral-200 font-bold">{project.progressPercent}%</span>
                    </div>
                    <div className="w-full h-2 bg-neutral-950 rounded-full overflow-hidden border border-neutral-800">
                      <div
                        className="h-full bg-gradient-to-r from-neutral-500 to-white rounded-full transition-all duration-1000"
                        style={{ width: `${project.progressPercent}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Highlights List */}
                <ul className="space-y-1.5 pt-2 text-xs text-neutral-300 font-mono">
                  {project.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Tech Pills & Action */}
              <div className="pt-4 border-t border-neutral-800/80 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-neutral-950 text-[11px] font-mono text-neutral-400 border border-neutral-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg transition-colors ${
                      project.isFlagship
                        ? "bg-white hover:bg-neutral-200 text-black shadow-lg shadow-white/10"
                        : "bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700"
                    }`}
                  >
                    {project.liveLabel} <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <span className="text-[11px] font-mono text-neutral-500">
                    {project.isOngoing ? "In Development" : "Live & Verified"}
                  </span>
                </div>
              </div>

            </div>
          </article>
        ))}
      </div>

    </section>
  );
}
