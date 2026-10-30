import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Terminal } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-b border-slate-200/60 dark:border-slate-800/60 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            03. Career & Practical Training
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
            Work Experience & Internships
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Professional engineering exposure, microservice architecture assistance, and capstone software project delivery.
          </p>
        </div>

        {/* Timeline Structure */}
        <div className="relative pl-6 md:pl-8 space-y-12 before:absolute before:left-2 md:before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
          {RESUME_DATA.experience.map((item, index) => (
            <div key={item.id} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-6 md:-left-8 top-1.5 w-4 h-4 md:w-6 md:h-6 rounded-full bg-white dark:bg-slate-950 border-2 border-blue-600 dark:border-blue-400 flex items-center justify-center transform -translate-x-1/2 transition-transform group-hover:scale-110">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
              </div>

              {/* Main Content Card */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                {/* Role & Company Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <div className="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold mb-1">
                      {item.type}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                      {item.role}
                    </h3>
                    <div className="text-base font-medium text-slate-700 dark:text-slate-300 mt-0.5">
                      {item.company}
                    </div>
                  </div>

                  {/* Metadata: Duration & Location */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400 pt-1 md:pt-0">
                    <span className="flex items-center gap-1.5 font-medium text-slate-600 dark:text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      {item.duration}
                    </span>
                    <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Role Summary */}
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                  {item.summary}
                </p>

                {/* Split Details: Responsibilities & Measurable Achievements */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
                  {/* Responsibilities */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      <span>Key Responsibilities</span>
                    </h4>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                      {item.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <ChevronRight className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                          <span className="leading-snug">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Measurable Achievements */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>Measurable Deliverables</span>
                    </h4>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                      {item.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-snug">{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2 text-xs">
                  <span className="text-slate-400 font-medium mr-1">Technologies:</span>
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium font-mono text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
