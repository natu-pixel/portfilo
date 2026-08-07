"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Mail, MessageCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Trading Bot / Automation",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", service: "Trading Bot / Automation", message: "" });
    }, 1200);
  };

  return (
    <div className="rounded-3xl bg-neutral-900/60 border border-neutral-800 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
      <div className="max-w-2xl">
        <span className="text-xs font-mono uppercase tracking-widest text-blue-400">Direct Message</span>
        <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-white mt-2">
          Send a Direct Message
        </h2>
        <p className="text-neutral-400 mt-2 text-sm font-light leading-relaxed mb-8">
          Fill out the quick form below or reach out directly on Telegram & WhatsApp.
        </p>

        {status === "success" ? (
          <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-4 animate-fade-in">
            <CheckCircle2 className="w-8 h-8 flex-shrink-0" />
            <div>
              <h4 className="font-outfit font-semibold text-base">Message Sent Successfully!</h4>
              <p className="text-xs text-neutral-300 mt-1">
                Thank you for reaching out, Natnael will respond to your message promptly.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono text-neutral-400 uppercase mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-400 uppercase mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-neutral-400 uppercase mb-2">Service Required</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option>Trading Bot / Automation</option>
                <option>Web Application / E-Commerce</option>
                <option>IT Maintenance & Hardware Repair</option>
                <option>Networking & Infrastructure Setup</option>
                <option>Other / General Inquiry</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono text-neutral-400 uppercase mb-2">Project Details / Message</label>
              <textarea
                required
                rows={4}
                placeholder="Describe your requirements, timeline, or questions..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-blue-600/25 w-full sm:w-auto"
            >
              {status === "sending" ? "Sending Message..." : "Send Message Direct"} <Send className="w-4 h-4" />
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
