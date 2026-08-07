"use client";

import { X, ExternalLink, CheckCircle2, Cpu, BarChart3, ShieldCheck } from "lucide-react";
import Image from "next/image";

export interface CaseStudyData {
  title: string;
  category: string;
  image: string;
  description: string;
  highlights?: string[];
  problem: string;
  solution: string;
  impactMetrics: { label: string; value: string }[];
  architectureDetails: string[];
  tech: string[];
  demoUrl: string;
  githubUrl?: string;
}

interface CaseStudyModalProps {
  project: CaseStudyData | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-neutral-900 border border-neutral-800 rounded-3xl overflow-y-auto shadow-2xl shadow-blue-500/10 p-6 sm:p-10 my-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors"
          aria-label="Close Case Study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-mono uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20">
            Case Study Deep Dive
          </span>
          <span className="text-xs font-mono text-neutral-400">• {project.category}</span>
        </div>

        {/* Title */}
        <h2 className="font-outfit text-2xl sm:text-4xl font-bold text-white mb-6">
          {project.title}
        </h2>

        {/* Hero Image */}
        <div className="relative w-full h-[220px] sm:h-[320px] rounded-2xl overflow-hidden mb-8 border border-neutral-800">
          <Image src={project.image} alt={project.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent"></div>
        </div>

        {/* Impact Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {project.impactMetrics.map((metric, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800 text-center">
              <div className="text-2xl sm:text-3xl font-bold font-outfit text-blue-400">{metric.value}</div>
              <div className="text-xs font-mono text-neutral-400 uppercase mt-1">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Problem & Solution Dual Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="p-6 rounded-2xl bg-neutral-950/50 border border-neutral-800/80">
            <h3 className="text-lg font-bold font-outfit text-white mb-2 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-red-400" /> The Challenge
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed font-light">
              {project.problem}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-950/50 border border-neutral-800/80">
            <h3 className="text-lg font-bold font-outfit text-white mb-2 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-blue-400" /> The Solution & Architecture
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed font-light">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Architecture Highlights */}
        <div className="mb-8">
          <h3 className="text-lg font-bold font-outfit text-white mb-3">Key Technical Implementation Details</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-neutral-300 font-mono">
            {project.architectureDetails.map((detail, idx) => (
              <li key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-neutral-950 border border-neutral-800/60">
                <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Pills */}
        <div className="mb-8">
          <div className="text-xs font-mono text-neutral-400 uppercase mb-2">Technologies Used</div>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, idx) => (
              <span key={idx} className="px-3 py-1 rounded-lg bg-neutral-950 text-xs font-mono text-blue-300 border border-neutral-800">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-neutral-800">
          <div className="flex flex-wrap gap-3">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors shadow-lg shadow-blue-600/25"
            >
              Open Live Link <ExternalLink className="w-4 h-4" />
            </a>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-medium text-sm border border-neutral-700 transition-colors"
              >
                GitHub Repository <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-mono text-neutral-400 hover:text-white"
          >
            Close Modal
          </button>
        </div>

      </div>
    </div>
  );
}
