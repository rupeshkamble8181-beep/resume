import { ArrowUp, FileDown, Github, Linkedin, Globe, Mail, Heart } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

interface FooterProps {
  onOpenResumeModal: () => void;
}

export default function Footer({ onOpenResumeModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-[#080b12] border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-800/80">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <div className="font-bold text-slate-900 dark:text-white text-lg font-display">
              {RESUME_DATA.personal.fullName}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              {RESUME_DATA.personal.title} · Pune, Maharashtra, India
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
            <a
              href={RESUME_DATA.personal.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={RESUME_DATA.personal.linkedIn}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={RESUME_DATA.personal.portfolioUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Live Portfolio"
              className="p-2 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              <Globe className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${RESUME_DATA.personal.contactEmail}`}
              aria-label="Send Email"
              className="p-2 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Action: Download Resume & Back to Top */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <FileDown className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Download Resume</span>
            </button>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright & Technical Footnote */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {RESUME_DATA.personal.fullName}. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-[11px]">
            <span>Crafted with React, Vite & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
