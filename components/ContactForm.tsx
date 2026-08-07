"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

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
    <div className="rounded-3xl bg-neutral-50 border border-neutral-200 p-8 sm:p-12 relative overflow-hidden shadow-sm">
      <div className="max-w-2xl">
        <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">Direct Message</span>
        <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-neutral-900 mt-2">
          Contact Me Directly
        </h2>
        <p className="text-neutral-600 mt-2 text-sm font-light leading-relaxed mb-8">
          Fill out the quick form below or reach out directly on Telegram & WhatsApp.
        </p>

        {status === "success" ? (
          <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-4 animate-fade-in" role="alert">
            <CheckCircle2 className="w-8 h-8 text-emerald-600 flex-shrink-0" />
            <div>
              <h3 className="font-outfit font-semibold text-base">Message Sent Successfully!</h3>
              <p className="text-xs text-neutral-600 mt-1">
                Thank you for reaching out, Nati Kuzmi will respond to your message promptly.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact Nati Kuzmi Form">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-mono text-neutral-700 uppercase mb-2 font-medium">
                  Your Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-300 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-mono text-neutral-700 uppercase mb-2 font-medium">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="e.g. john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-300 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-service" className="block text-xs font-mono text-neutral-700 uppercase mb-2 font-medium">
                Service Required
              </label>
              <select
                id="contact-service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-300 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors"
              >
                <option>Trading Bot / Automation</option>
                <option>Web Application / E-Commerce</option>
                <option>IT Maintenance & Hardware Repair</option>
                <option>Networking & Infrastructure Setup</option>
                <option>Other / General Inquiry</option>
              </select>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-mono text-neutral-700 uppercase mb-2 font-medium">
                Project Details / Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                placeholder="Describe your requirements, timeline, or questions..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-300 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all duration-200 shadow-md shadow-blue-600/20 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              aria-label="Send Direct Message to Nati Kuzmi"
            >
              {status === "sending" ? "Sending Message..." : "Contact Me"} <Send className="w-4 h-4" />
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
