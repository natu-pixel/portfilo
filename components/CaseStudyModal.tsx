"use client";

import { X, ExternalLink, CheckCircle2, Cpu, ShieldCheck } from "lucide-react";
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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-neutral-900/60 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-white border border-neutral-200 rounded-3xl overflow-y-auto shadow-2xl p-6 sm:p-10 my-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-neutral-100 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200 transition-colors"
          aria-label="Close Case Study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-mono uppercase bg-blue-50 text-blue-700 border border-blue-200 font-semibold">
            Case Study Deep Dive
          </span>
          <span className="text-xs font-mono text-neutral-500">• {project.category}</span>
        </div>

        {/* Title */}
        <h2 className="font-outfit text-2xl sm:text-4xl font-bold text-neutral-900 mb-6">
          {project.title}
        </h2>

        {/* Hero Image */}
        <div className="relative w-full h-[220px] sm:h-[320px] rounded-2xl overflow-hidden mb-8 border border-neutral-200">
          <Image src={project.image} alt={project.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>

        {/* Impact Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {project.impactMetrics.map((metric, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 text-center">
              <div className="text-2xl sm:text-3xl font-bold font-outfit text-blue-600">{metric.value}</div>
              <div className="text-xs font-mono text-neutral-600 uppercase mt-1">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Problem & Solution Dual Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
            <h3 className="text-lg font-bold font-outfit text-neutral-900 mb-2 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-red-500" /> The Challenge
            </h3>
            <p className="text-neutral-600 text-sm leading-relaxed font-light">
              {project.problem}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
            <h3 className="text-lg font-bold font-outfit text-neutral-900 mb-2 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-blue-600" /> The Solution & Architecture
            </h3>
            <p className="text-neutral-600 text-sm leading-relaxed font-light">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Architecture Highlights */}
        <div className="mb-8">
          <h3 className="text-lg font-bold font-outfit text-neutral-900 mb-3">Key Technical Implementation Details</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-neutral-700 font-mono">
            {project.architectureDetails.map((detail, idx) => (
              <li key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-neutral-50 border border-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Pills */}
        <div className="mb-8">
          <div className="text-xs font-mono text-neutral-500 uppercase mb-2">Technologies Used</div>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, idx) => (
              <span key={idx} className="px-3 py-1 rounded-lg bg-blue-50 text-xs font-mono text-blue-700 border border-blue-200">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-neutral-200">
          <div className="flex flex-wrap gap-3">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors shadow-md shadow-blue-600/20"
            >
              Open Live Link <ExternalLink className="w-4 h-4" />
            </a>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-medium text-sm border border-neutral-200 transition-colors"
              >
                GitHub Repository <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-mono text-neutral-500 hover:text-neutral-900"
          >
            Close Modal
          </button>
        </div>

      </div>
    </div>
  );
}
