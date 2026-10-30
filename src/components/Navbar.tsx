import { useState, useEffect } from 'react';
import { Menu, X, FileDown, ArrowUpRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { RESUME_DATA } from '../data/resumeData';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export default function Navbar({ onOpenResumeModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 border-b ${
        scrolled
          ? 'bg-white/90 dark:bg-[#0c0f17]/90 backdrop-blur-md border-slate-200 dark:border-slate-800/80 shadow-xs'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="group flex items-center gap-2 whitespace-nowrap shrink-0 text-slate-900 dark:text-white font-bold tracking-tight text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
          >
            <span className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-mono text-sm font-semibold transition-transform group-hover:scale-105">
              RK
            </span>
            <span className="font-display tracking-tight font-semibold">
              Rupesh Kamble
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions (Theme Toggle & CTA) */}
          <div className="flex items-center gap-3 shrink-0">
            <ThemeToggle />

            <button
              onClick={onOpenResumeModal}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              title="Preview or Download Resume"
            >
              <FileDown className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c0f17] px-4 pt-2 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded-lg"
            >
              <FileDown className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>View & Download Resume</span>
            </button>
            <a
              href={RESUME_DATA.personal.downloadResumePdf}
              download="Rupesh_Kamble_Resume.pdf"
              className="text-center text-xs text-slate-500 dark:text-slate-400 py-1"
            >
              Direct PDF Download
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
