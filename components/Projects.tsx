"use client";

import { useState } from "react";
import { ExternalLink, Clock, Globe, BookOpen, GitBranch } from "lucide-react";
import Image from "next/image";
import CaseStudyModal, { CaseStudyData } from "./CaseStudyModal";
import BotSandbox from "./BotSandbox";

const categories = ["All", "Flagship & E-Commerce", "Automation & Bots", "Applications", "Ongoing Projects"];

const projectsList: (CaseStudyData & {
  isFlagship?: boolean;
  isOngoing?: boolean;
  progressPercent?: number;
  liveLabel: string;
})[] = [
  {
    title: "Nat Entertainment Sales Platform",
    category: "Flagship & E-Commerce",
    isFlagship: true,
    isOngoing: false,
    image: "/assets/nat_entertainment.jpg",
    description:
      "A comprehensive digital sales platform and portal providing digital media packages, software licenses, automated delivery workflows, and instant customer support integration.",
    problem:
      "Manual order fulfillment and fragmented client communication caused delayed deliveries and customer friction for digital entertainment packages.",
    solution:
      "Engineered an automated Next.js sales engine integrated with webhook payment confirmations, instant digital license generation, and multi-channel instant chat support.",
    impactMetrics: [
      { label: "Platform Uptime", value: "99.9%" },
      { label: "Order Delivery Time", value: "< 2 Sec" },
      { label: "Active Customers", value: "1,000+" },
    ],
    architectureDetails: [
      "Server-side rendering (SSR) for SEO and instant page loads",
      "Automated digital product licensing & email dispatch engine",
      "Integrated live multi-channel support widget",
      "Secure webhook-based payment status verification",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST APIs"],
    demoUrl: "https://natentertainment.org/",
    githubUrl: "https://github.com/natu-pixel/portfilo",
    liveLabel: "Visit Live Site (natentertainment.org)",
    highlights: [
      "Live production e-commerce & sales engine at natentertainment.org",
      "Automated order processing & instant digital delivery workflow",
      "Integrated multi-channel payment & live support chat",
    ],
  },
  {
    title: "Algorithmic Trading Bot Engine",
    category: "Automation & Bots",
    isFlagship: false,
    isOngoing: false,
    image: "/assets/trading_bot.jpg",
    description:
      "A high-frequency algorithmic trading engine designed to monitor live market order books, execute automated technical strategy indicators, and manage risk with sub-second latency.",
    problem:
      "High volatility market setups require millisecond execution speed and emotionless risk management impossible for human manual traders.",
    solution:
      "Built a Python WebSockets async engine with custom technical indicator calculation loops, trailing stop loss rules, and automated Telegram trade notifications.",
    impactMetrics: [
      { label: "Order Execution", value: "32 ms" },
      { label: "Strategy Backtest", value: "68% Win" },
      { label: "Uptime Reliability", value: "100%" },
    ],
    architectureDetails: [
      "Async WebSockets feed for zero-delay order book monitoring",
      "Dynamic trailing stop-loss & risk management rules",
      "Instant Telegram bot trade alert notifications",
      "Dockerized container for 24/7 cloud server deployment",
    ],
    tech: ["Python", "WebSockets", "Pandas", "REST API", "Docker"],
    demoUrl: "https://t.me/NATENTERTAINMENTSUPPORT",
    githubUrl: "https://github.com/natu-pixel/portfilo",
    liveLabel: "Request Bot Demo",
    highlights: [
      "Real-time WebSocket market data ingestion",
      "Automated risk management & stop-loss triggers",
      "Backtested indicator signals with technical metrics",
    ],
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
    problem:
      "IT hardware repair shops lack centralized tracking for spare parts inventory, repair job statuses, and client warranty claims.",
    solution:
      "Developing a Next.js 15 App Router platform with Prisma ORM & PostgreSQL to centralize inventory stock, job ticket dispatches, and client invoicing.",
    impactMetrics: [
      { label: "Development Stage", value: "75%" },
      { label: "Target Outlets", value: "Multi-Store" },
      { label: "Architecture", value: "Cloud SaaS" },
    ],
    architectureDetails: [
      "Multi-tenant PostgreSQL schema with Prisma ORM",
      "Role-based access control (RBAC) for technicians & managers",
      "Real-time low stock notifications and supplier PO generator",
      "Barcode scanning integration for fast inventory audits",
    ],
    tech: ["Next.js 15", "PostgreSQL", "Prisma", "Tailwind CSS"],
    demoUrl: "https://t.me/NATENTERTAINMENTSUPPORT",
    githubUrl: "https://github.com/natu-pixel/portfilo",
    liveLabel: "In Active Development",
    highlights: [
      "Live active development phase (75% completed)",
      "Automated stock tracking & maintenance dispatch schedule",
      "Role-based access control (RBAC) & audit logs",
    ],
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
    problem:
      "Cross-DEX price discrepancies disappear in seconds, requiring automated flash loan execution before public mempools front-run transactions.",
    solution:
      "Writing Web3.py listeners and Solidity smart contracts to atomic-swap flash loans across Uniswap, Sushiswap, and PancakeSwap.",
    impactMetrics: [
      { label: "Development Stage", value: "60%" },
      { label: "DEX Networks", value: "4 Chains" },
      { label: "Atomic Safety", value: "Flash Loans" },
    ],
    architectureDetails: [
      "Cross-chain mempool scanner for price divergence",
      "Gas estimation calculation to guarantee profitable swaps",
      "Atomic flash loan contracts to prevent loss of principal",
    ],
    tech: ["Python", "Solidity", "Ethers.js", "Web3.py"],
    demoUrl: "https://t.me/NATENTERTAINMENTSUPPORT",
    githubUrl: "https://github.com/natu-pixel/portfilo",
    liveLabel: "In Active Development",
    highlights: [
      "Live active development phase (60% completed)",
      "Cross-DEX liquidity monitoring across multiple chains",
      "Automated profit calculation after gas estimation",
    ],
  },
  {
    title: "Gourmet Restaurant Platform",
    category: "Applications",
    isFlagship: false,
    isOngoing: false,
    image: "/assets/restaurant_website.jpg",
    description:
      "An interactive restaurant platform with dynamic menu management, table reservation system, and real-time online ordering integration with elegant visual aesthetic.",
    problem:
      "Traditional paper menus and phone reservations lead to order errors and lost booking revenue during peak hours.",
    solution:
      "Built a modern digital web platform with interactive menu filtering, instant table reservation forms, and mobile ordering UI.",
    impactMetrics: [
      { label: "Mobile Traffic", value: "85%" },
      { label: "Booking Speed", value: "< 1 Min" },
      { label: "Customer Rating", value: "4.9★" },
    ],
    architectureDetails: [
      "Framer Motion micro-animations for interactive menus",
      "Form validation for instant reservation requests",
      "SEO-optimized schema markup for local restaurant discovery",
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://wa.me/251945653317",
    githubUrl: "https://github.com/natu-pixel/portfilo",
    liveLabel: "View Platform Demo",
    highlights: [
      "Dynamic interactive digital menu",
      "Online table reservation workflow",
      "Mobile-first responsive design system",
    ],
  },
  {
    title: "IPTV Player Application",
    category: "Applications",
    isFlagship: false,
    isOngoing: false,
    image: "/assets/iptv_player.jpg",
    description:
      "A high-performance IPTV streaming player featuring M3U playlist parsing, EPG channel guide integration, custom player controls, and low-latency stream buffer management.",
    problem:
      "Cluttered IPTV apps suffer from slow channel switching, choppy HLS buffering, and broken M3U playlist indexing.",
    solution:
      "Designed a sleek media player application leveraging HLS.js for hardware-accelerated playback and fast channel EPG grid parsing.",
    impactMetrics: [
      { label: "Channel Switch", value: "< 300ms" },
      { label: "Stream Format", value: "HLS / M3U8" },
      { label: "EPG Parsing", value: "Instant" },
    ],
    architectureDetails: [
      "Custom HLS.js video player controls with buffer tuning",
      "Fast M3U playlist regex parser & category grouper",
      "Favorite channels persistence in local storage",
    ],
    tech: ["React", "HLS.js", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://t.me/NATENTERTAINMENTSUPPORT",
    githubUrl: "https://github.com/natu-pixel/portfilo",
    liveLabel: "View App Details",
    highlights: [
      "M3U/M3U8 playlist & EPG channel guide parser",
      "Custom HLS video streaming player integration",
      "Smooth categorization & search indexing",
    ],
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyData | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? projectsList 
    : projectsList.filter(p => p.category === activeCategory || (activeCategory === "Ongoing Projects" && p.isOngoing));

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-200">
      
      {/* Modal View */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">Featured Work & Live Projects</span>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-blue-50 text-blue-700 border border-blue-200 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping"></span> 2 Active Developments
            </span>
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900">
            Selected Work & Platforms
          </h2>
          <p className="text-neutral-600 mt-2 text-base font-light max-w-xl">
            Click any project to read the detailed Case Study, view GitHub code repositories, or test out the live bot execution sandbox below.
          </p>
        </div>

        <a
          href="https://natentertainment.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 px-4 py-2.5 rounded-xl transition-colors shadow-md shadow-blue-600/20 self-start md:self-auto"
        >
          <Globe className="w-4 h-4" /> Live Website: natentertainment.org ↗
        </a>
      </div>

      {/* Interactive Bot Terminal Sandbox */}
      <div className="mb-16">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-lg font-bold font-outfit text-neutral-900 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span> Interactive Bot Terminal Sandbox
          </h3>
          <span className="text-xs font-mono text-neutral-500">Try running the simulation below</span>
        </div>
        <BotSandbox />
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-12 pb-4 border-b border-neutral-200">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              activeCategory === cat
                ? "bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/20"
                : "bg-neutral-100 text-neutral-600 hover:text-neutral-900 border border-neutral-200"
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
            className={`flex flex-col rounded-3xl bg-white border overflow-hidden transition-all duration-300 group shadow-sm ${
              project.isFlagship
                ? "border-blue-300 shadow-lg shadow-blue-600/5 lg:col-span-2 lg:flex-row"
                : project.isOngoing
                ? "border-amber-300 bg-amber-50/20"
                : "border-neutral-200 hover:border-blue-300"
            }`}
          >
            {/* Image Preview Container */}
            <div className={`relative w-full bg-neutral-100 overflow-hidden ${
              project.isFlagship ? "lg:w-1/2 aspect-[16/10]" : "aspect-[16/10]"
            }`}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80"></div>
              
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className={`px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider backdrop-blur-md border ${
                  project.isFlagship
                    ? "bg-blue-600 text-white border-blue-500 font-bold"
                    : project.isOngoing
                    ? "bg-amber-100 text-amber-800 border-amber-300 font-medium"
                    : "bg-white/90 text-blue-700 border-blue-200 font-medium"
                }`}>
                  {project.isFlagship ? "★ Flagship Live Website" : project.category}
                </span>

                {project.isOngoing && (
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-amber-100 text-amber-800 border border-amber-300 backdrop-blur-md flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-amber-600 animate-spin" /> In Active Development
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
                  <h3 className="font-outfit text-2xl font-bold text-neutral-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-neutral-600 text-sm leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Progress bar for ongoing work */}
                {project.isOngoing && project.progressPercent && (
                  <div className="pt-2">
                    <div className="flex justify-between text-[11px] font-mono text-neutral-600 mb-1">
                      <span>Development Progress</span>
                      <span className="text-amber-700 font-bold">{project.progressPercent}%</span>
                    </div>
                    <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden border border-neutral-200">
                      <div
                        className="h-full bg-gradient-to-r from-amber-500 to-blue-600 rounded-full transition-all duration-1000"
                        style={{ width: `${project.progressPercent}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Highlights List */}
                <ul className="space-y-1.5 pt-2 text-xs text-neutral-700 font-mono">
                  {project.highlights?.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Actions & Case Study Trigger */}
              <div className="pt-4 border-t border-neutral-200 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-neutral-100 text-[11px] font-mono text-neutral-700 border border-neutral-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSelectedCaseStudy(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-200 transition-colors"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-blue-600" /> Read Case Study
                    </button>

                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                    >
                      {project.liveLabel} <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-neutral-500 hover:text-neutral-900 transition-colors"
                    >
                      <GitBranch className="w-3 h-3 text-blue-600" /> Repo
                    </a>
                  )}
                </div>
              </div>

            </div>
          </article>
        ))}
      </div>

    </section>
  );
}
