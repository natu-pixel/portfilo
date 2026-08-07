"use client";

import { Quote, Star, UserCheck } from "lucide-react";

const testimonials = [
  {
    name: "Alexey V.",
    role: "E-Commerce Director",
    company: "Nat Entertainment Partner",
    quote:
      "Natnael engineered our entire sales portal at natentertainment.org. His attention to automated digital delivery, payment processing, and high-uptime server architecture transformed our sales operations.",
    stars: 5,
  },
  {
    name: "S. Tekle",
    role: "Proprietary Trader",
    company: "FinTech Client",
    quote:
      "The custom trading bot Natnael built for our crypto strategies operates flawlessly. Sub-second execution on WebSockets and rock-solid risk management rules. Highly recommended for bot development!",
    stars: 5,
  },
  {
    name: "B. Hailu",
    role: "IT Operations Manager",
    company: "Enterprise Client",
    quote:
      "Natnael handled our office network infrastructure setup and computer hardware diagnostics. His dual expertise in CS software and physical networking is rare and incredibly valuable.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-800/60">
      
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-blue-400">Client Endorsements</span>
        <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2">
          What Clients & Partners Say
        </h2>
        <p className="text-neutral-400 mt-2 text-base font-light">
          Feedback from businesses and traders I've engineered software and network solutions for.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className="p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800/80 hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400">
                  <Quote className="w-5 h-5" />
                </div>
                <div className="flex gap-1">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              <p className="text-neutral-300 text-sm leading-relaxed font-light mb-8 italic">
                "{item.quote}"
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-neutral-800/80">
              <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-white font-semibold text-sm">
                <UserCheck className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white font-outfit">{item.name}</div>
                <div className="text-xs font-mono text-neutral-400">{item.role} • {item.company}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
