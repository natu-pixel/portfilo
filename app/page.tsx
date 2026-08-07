import Hero from "@/components/Hero";
import About from "@/components/About";
import SkillsMatrix from "@/components/SkillsMatrix";
import Projects from "@/components/Projects";
import { Mail, MessageCircle, Send, Terminal, Phone, MapPin, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-blue-500/30 selection:text-blue-200">
      
      {/* Sticky Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-outfit text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500"></span> Natnael Teferi
          </a>

          <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-neutral-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Selected Work</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <a
            href="https://t.me/NATENTERTAINMENTSUPPORT"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-xl transition-all shadow-md shadow-blue-600/20"
          >
            Get In Touch
          </a>
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <SkillsMatrix />
        <Projects />

        {/* Contact Section */}
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-800/60">
          <div className="rounded-3xl bg-gradient-to-b from-neutral-900/80 to-neutral-950 border border-neutral-800 p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            <div className="max-w-2xl relative z-10">
              <span className="text-xs font-mono uppercase tracking-widest text-blue-400">Direct Contact</span>
              <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2">
                Have a project or technical challenge? Let's discuss.
              </h2>
              <p className="text-neutral-400 mt-4 text-base font-light leading-relaxed">
                Whether you need a specialized trading bot, a modern web app, or network & hardware infrastructure setup, I'm available for contracts and freelance assignments.
              </p>

              {/* Direct Contact Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <a
                  href="mailto:natikuzmi@gmail.com"
                  className="flex items-center gap-3 p-4 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-blue-500/50 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-neutral-500">Email</div>
                    <div className="text-xs font-semibold text-white truncate">natikuzmi@gmail.com</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/251945653317"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-emerald-500/50 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-neutral-500">WhatsApp</div>
                    <div className="text-xs font-semibold text-white">+251 945 653 317</div>
                  </div>
                </a>

                <a
                  href="https://t.me/NATENTERTAINMENTSUPPORT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-sky-500/50 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 group-hover:scale-105 transition-transform">
                    <Send className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-neutral-500">Telegram</div>
                    <div className="text-xs font-semibold text-white">@NATENTERTAINMENT...</div>
                  </div>
                </a>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-800/80 py-8 px-4 sm:px-6 lg:px-8 text-xs font-mono text-neutral-500">
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
