import Hero from "@/components/Hero";
import About from "@/components/About";
import SkillsMatrix from "@/components/SkillsMatrix";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import ScrollToTop from "@/components/ScrollToTop";
import { Mail, MessageCircle, Send } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-blue-500/20 selection:text-blue-900">
      
      {/* Semantic Sticky Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-outfit text-lg font-bold text-neutral-900 tracking-tight flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded">
            <span className="w-3 h-3 rounded-full bg-blue-600"></span> Natnael Teferi
          </a>

          <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-neutral-600 font-medium" aria-label="Main Navigation">
            <a href="#about" className="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 rounded px-1">About</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors text-blue-600 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 rounded px-1">Work & Case Studies</a>
            <a href="#testimonials" className="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 rounded px-1 font-medium">Endorsements</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 rounded px-1">Contact</a>
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl transition-all shadow-md shadow-blue-600/20 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Contact Me
          </a>
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="relative z-10" id="main-content">
        <Hero />
        <About />
        <SkillsMatrix />
        <Projects />
        
        <div id="testimonials">
          <Testimonials />
        </div>

        {/* Contact Section with Embedded Form */}
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-200" aria-label="Contact Section">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Direct Contact Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">Let's Connect</span>
              <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-neutral-900">
                Have a project or technical challenge?
              </h2>
              <p className="text-neutral-600 text-sm leading-relaxed font-light">
                Whether you need a custom trading bot engine, a full-stack e-commerce platform like <a href="https://natentertainment.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-medium">natentertainment.org</a>, or enterprise IT networking maintenance, I'm available for freelance assignments and contract roles.
              </p>

              <div className="space-y-4 pt-4">
                <a
                  href="mailto:natikuzmi@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-blue-300 transition-colors group focus:outline-none focus:ring-2 focus:ring-blue-600"
                  aria-label="Send email to Natnael Teferi"
                >
                  <div className="p-3 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-neutral-500">Email Address (Natnael Teferi)</div>
                    <div className="text-sm font-semibold text-neutral-900">natikuzmi@gmail.com</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/251945653317"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-blue-300 transition-colors group focus:outline-none focus:ring-2 focus:ring-blue-600"
                  aria-label="Chat on WhatsApp with Natnael Teferi"
                >
                  <div className="p-3 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-neutral-500">WhatsApp</div>
                    <div className="text-sm font-semibold text-neutral-900">+251 945 653 317</div>
                  </div>
                </a>

                <a
                  href="https://t.me/NATENTERTAINMENTSUPPORT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-blue-300 transition-colors group focus:outline-none focus:ring-2 focus:ring-blue-600"
                  aria-label="Message Natnael Teferi on Telegram"
                >
                  <div className="p-3 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 group-hover:scale-105 transition-transform">
                    <Send className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-neutral-500">Telegram</div>
                    <div className="text-sm font-semibold text-neutral-900">@NATENTERTAINMENTSUPPORT</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Built-in Embedded Contact Form Column */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </section>
      </main>

      {/* Floating Scroll To Top Arrow Button */}
      <ScrollToTop />

      {/* Semantic Footer */}
      <footer className="border-t border-neutral-200 py-8 px-4 sm:px-6 lg:px-8 text-xs font-mono text-neutral-500 bg-neutral-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>© {new Date().getFullYear()} Natnael Teferi. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span>Computer Science B.Sc.</span>
            <span>•</span>
            <span>Maintenance & Networking Cert.</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
