import { ArrowDown, FileDown, Mail, MapPin, Sparkles, FolderGit2, CheckCircle2 } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export default function Hero({ onOpenResumeModal }: HeroProps) {
  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden border-b border-slate-200/60 dark:border-slate-800/60">
      {/* Subtle ambient gradient mesh for depth without AI slop clutter */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-gradient-to-tr from-blue-500/10 via-cyan-500/5 to-transparent blur-3xl opacity-70 dark:opacity-40" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Split Screen Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Unboxed Kicker with subtle separator */}
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
              <span>{RESUME_DATA.personal.title}</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">/</span>
              <span className="text-slate-500 dark:text-slate-400 font-medium">BCA 2025 Graduate</span>
            </div>

            {/* Main Headline with balanced wrap */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-950 dark:text-white leading-[1.1] text-balance font-display">
              Hi, I’m{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-400">
                {RESUME_DATA.personal.fullName}
              </span>
            </h1>

            {/* Tagline & Summary Introduction */}
            <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 font-medium leading-relaxed max-w-xl">
              {RESUME_DATA.personal.tagline}
            </p>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
              {RESUME_DATA.personal.shortBio}
            </p>

            {/* Location & Status Unboxed Metadata */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 pt-1">
              <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 font-medium">
                <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                {RESUME_DATA.personal.location}
              </span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700 hidden sm:inline">·</span>
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                {RESUME_DATA.personal.status}
              </span>
            </div>

            {/* Required Action Buttons: View Projects, Download Resume, Contact Me */}
            <div className="flex flex-wrap items-center gap-3 pt-3 w-full sm:w-auto">
              {/* Primary Action: View Projects */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm hover:shadow transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>View Projects</span>
              </a>

              {/* Secondary Action: Download Resume */}
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={onOpenResumeModal}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg shadow-2xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <FileDown className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Download Resume</span>
                </button>
              </div>

              {/* Tertiary Action: Contact Me */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Container (Professional Developer Portrait & Info Card) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Decorative Frame Hairline Backdrop */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 transform rotate-1 scale-[1.02] filter blur-[1px]" />

              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md">
                <div className="aspect-square relative overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={RESUME_DATA.personal.avatar}
                    alt="Rupesh Rajendra Kamble - Java & Python Developer"
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback to resume image if generated avatar fails
                      const target = e.currentTarget;
                      if (target.src !== RESUME_DATA.personal.originalResumeDoc) {
                        target.src = RESUME_DATA.personal.originalResumeDoc;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Caption on image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-xs font-mono uppercase tracking-wider text-blue-300 mb-0.5">
                      Full-Stack & Backend Focus
                    </div>
                    <div className="font-bold text-lg leading-tight font-display">
                      {RESUME_DATA.personal.fullName}
                    </div>
                    <div className="text-xs text-slate-300 mt-1">
                      Java · Python · MySQL · REST APIs
                    </div>
                  </div>
                </div>

                {/* Card Quick-Facts footer */}
                <div className="p-4 bg-slate-50/80 dark:bg-slate-900/80 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-slate-400 block">Education</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">BCA (8.2 CGPA)</span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 block">Location</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">Pune, Maharashtra</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Metrics Row Below Hero Split (Design Guideline 2.B) */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          {RESUME_DATA.metrics.map((metric) => (
            <div key={metric.label} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-slate-900 dark:text-white tabular-nums">
                {metric.value}
              </div>
              <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 font-display">
                {metric.label}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 leading-tight">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
