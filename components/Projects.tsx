"use client";

import { useState } from "react";
import { ExternalLink, Clock, Globe, BookOpen, GitBranch, Terminal, Shield, Play, Key, RefreshCw, Layers } from "lucide-react";
import CaseStudyModal, { CaseStudyData } from "./CaseStudyModal";
import BotSandbox from "./BotSandbox";
import Card3DTilt from "./Card3DTilt";

const categories = ["All", "Flagship & E-Commerce", "Automation & Bots", "Applications", "Ongoing Projects"];

// Interactive Live Previews replacing static pictures
function NatEntertainmentPreview() {
  const [key, setKey] = useState("NAT-ENT-8842-X91A");
  const [copied, setCopied] = useState(false);

  const generateKey = () => {
    const chars = "0123456789ABCDEF";
    let result = "NAT-ENT-";
    for (let i = 0; i < 4; i++) result += chars[Math.floor(Math.random() * chars.length)];
    result += "-";
    for (let i = 0; i < 4; i++) result += chars[Math.floor(Math.random() * chars.length)];
    setKey(result);
    setCopied(false);
  };

  return (
    <div className="w-full h-full min-h-[240px] bg-neutral-900 text-white p-6 flex flex-col justify-between relative overflow-hidden border-b border-neutral-800 lg:border-b-0 lg:border-r">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400 font-bold flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span> Live License Dispatch Engine
        </span>
        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
          SYSTEM: 99.9% UPTIME
        </span>
      </div>

      <div className="my-4 space-y-3 bg-neutral-950/80 p-4 rounded-2xl border border-neutral-800">
        <div className="text-xs font-mono text-neutral-400 flex items-center gap-2">
          <Key className="w-4 h-4 text-blue-400" /> Digital License Generator Simulator:
        </div>
        <div className="flex items-center justify-between gap-2 bg-neutral-900 p-2.5 rounded-xl border border-neutral-800 font-mono text-sm">
          <span className="text-blue-400 font-bold tracking-wider">{key}</span>
          <button
            onClick={() => {
              setCopied(true);
              setTimeout(() => setCopied(false), 1500);
            }}
            className="px-2.5 py-1 rounded bg-blue-600 hover:bg-blue-500 text-[11px] font-semibold text-white transition-colors"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
        <span>Instant Webhook Delivery</span>
        <button
          onClick={generateKey}
          className="text-blue-400 hover:text-blue-300 flex items-center gap-1 font-semibold"
        >
          <RefreshCw className="w-3.5 h-3.5" /> Test Generate
        </button>
      </div>
    </div>
  );
}

function TradingBotPreview() {
  return (
    <div className="w-full h-full min-h-[240px] bg-neutral-950 text-white p-6 flex flex-col justify-between relative overflow-hidden border-b border-neutral-800">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-bold flex items-center gap-1.5">
          <Terminal className="w-3.5 h-3.5" /> Sub-50ms WebSocket Feed
        </span>
        <span className="text-[10px] font-mono text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800">
          ALGO: ACTIVE
        </span>
      </div>

      {/* Simulated Candlestick Chart Canvas */}
      <div className="my-3 h-24 flex items-end justify-between gap-1 px-2 py-3 bg-neutral-900/80 rounded-2xl border border-neutral-800">
        {[40, 65, 30, 85, 45, 90, 70, 95, 60, 100].map((h, idx) => (
          <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
            <div
              className={`w-full rounded-sm transition-all duration-500 ${
                idx % 2 === 0 ? "bg-emerald-500" : "bg-blue-500"
              }`}
              style={{ height: `${h}%` }}
            ></div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
        <span>Order Book Depth: 1,480 Ticks/sec</span>
        <span className="text-emerald-400 font-semibold">+1.85% Arbitrage Profit</span>
      </div>
    </div>
  );
}

function InventorySaaSPreview() {
  const [stock, setStock] = useState(42);

  return (
    <div className="w-full h-full min-h-[240px] bg-neutral-950 text-white p-6 flex flex-col justify-between relative overflow-hidden border-b border-neutral-800">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-bold flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5" /> Multi-Tenant SaaS Dispatch
        </span>
        <span className="text-[10px] font-mono text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800">
          STAGE: 75%
        </span>
      </div>

      <div className="my-3 bg-neutral-900/80 p-4 rounded-2xl border border-neutral-800 space-y-2 font-mono">
        <div className="flex justify-between text-xs text-neutral-400">
          <span>Spare Part Item #8841:</span>
          <span className="text-white font-bold">{stock} Units In Stock</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setStock((s) => s + 1)}
            className="flex-1 py-1.5 rounded bg-amber-600 hover:bg-amber-500 text-xs font-bold text-white transition-colors"
          >
            + Dispatch Unit
          </button>
          <button
            onClick={() => setStock((s) => Math.max(0, s - 1))}
            className="flex-1 py-1.5 rounded bg-neutral-800 hover:bg-neutral-700 text-xs font-bold text-neutral-300 transition-colors"
          >
            - Audit Stock
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
        <span>PostgreSQL & Prisma ORM</span>
        <span className="text-amber-400 font-semibold">RBAC Security</span>
      </div>
    </div>
  );
}

function IPTVPreview() {
  const [activeChannel, setActiveChannel] = useState("CH 1: 4K Sports HD");

  return (
    <div className="w-full h-full min-h-[240px] bg-neutral-950 text-white p-6 flex flex-col justify-between relative overflow-hidden border-b border-neutral-800">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400 font-bold flex items-center gap-1.5">
          <Play className="w-3.5 h-3.5 text-blue-400 fill-current" /> HLS.js Custom Stream Player
        </span>
        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
          BUFFER: 300MS
        </span>
      </div>

      <div className="my-3 bg-neutral-900/80 p-3 rounded-2xl border border-neutral-800 font-mono space-y-2">
        <div className="text-xs text-blue-400 font-bold flex items-center justify-between">
          <span>Active Stream:</span>
          <span>{activeChannel}</span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-[11px]">
          {["CH 1: 4K Sports HD", "CH 2: News 24/7", "CH 3: Movies Ultra", "CH 4: Docu Stream"].map((ch, idx) => (
            <button
              key={idx}
              onClick={() => setActiveChannel(ch)}
              className={`p-1.5 rounded border transition-colors ${
                activeChannel === ch
                  ? "bg-blue-600 text-white border-blue-500 font-bold"
                  : "bg-neutral-800 text-neutral-400 border-neutral-700 hover:text-white"
              }`}
            >
              {ch}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
        <span>M3U / EPG Playlist Parser</span>
        <span className="text-blue-400 font-semibold">Zero Frame Drop</span>
      </div>
    </div>
  );
}

const projectsList: (CaseStudyData & {
  isFlagship?: boolean;
  isOngoing?: boolean;
  progressPercent?: number;
  liveLabel: string;
  previewComponent: React.ComponentType;
})[] = [
  {
    title: "Nat Entertainment Sales Platform",
    category: "Flagship & E-Commerce",
    isFlagship: true,
    isOngoing: false,
    image: "",
    previewComponent: NatEntertainmentPreview,
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
    image: "",
    previewComponent: TradingBotPreview,
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
    image: "",
    previewComponent: InventorySaaSPreview,
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
    title: "IPTV Player Application",
    category: "Applications",
    isFlagship: false,
    isOngoing: false,
    image: "",
    previewComponent: IPTVPreview,
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
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">Featured Work & Live Previews</span>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-blue-50 text-blue-700 border border-blue-200 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping"></span> Live Interactive Previews
            </span>
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900">
            Selected Work & Platforms
          </h2>
          <p className="text-neutral-600 mt-2 text-base font-light max-w-xl">
            Interact with live code widgets below or click any project to read the full Case Study and view code repositories.
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

      {/* Interactive Bot Terminal Sandbox wrapped in 3D Card */}
      <div className="mb-16">
        <Card3DTilt>
          <BotSandbox />
        </Card3DTilt>
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
            {cat} {cat === "Ongoing Projects" && "(1 Active)"}
          </button>
        ))}
      </div>

      {/* Projects Grid with Live Interactive Previews (Zero Static Pictures) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {filteredProjects.map((project, index) => {
          const PreviewComp = project.previewComponent;
          return (
            <Card3DTilt key={index} className={project.isFlagship ? "lg:col-span-2" : ""}>
              <article
                className={`flex flex-col rounded-3xl bg-white border overflow-hidden transition-all duration-300 group shadow-sm h-full ${
                  project.isFlagship
                    ? "border-blue-300 shadow-lg shadow-blue-600/5 lg:flex-row"
                    : project.isOngoing
                    ? "border-amber-300 bg-amber-50/20"
                    : "border-neutral-200 hover:border-blue-300"
                }`}
              >
                {/* Live Interactive Preview Container (Replaces static picture) */}
                <div className={`relative w-full overflow-hidden ${
                  project.isFlagship ? "lg:w-1/2" : ""
                }`}>
                  <PreviewComp />
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
            </Card3DTilt>
          );
        })}
      </div>

    </section>
  );
}
