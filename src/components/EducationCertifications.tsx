import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle, ShieldCheck } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

export default function EducationCertifications() {
  return (
    <section id="education" className="py-20 border-b border-slate-200/60 dark:border-slate-800/60 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            05. Academics & Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
            Education & Certifications
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Formal computer applications degree and vendor-accredited certifications in Java, Python, and modern web development.
          </p>
        </div>

        {/* 2-Column Split: Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Column 1: Formal Education */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xs">
              <div className="flex items-center gap-3 pb-5 mb-5 border-b border-slate-100 dark:border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                    Formal Degree
                  </h3>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    Graduation {RESUME_DATA.education.year}
                  </div>
                </div>
              </div>

              {/* Degree Title & Institution */}
              <div className="space-y-3">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                  {RESUME_DATA.education.degree}
                </h4>

                <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {RESUME_DATA.education.institution}
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400 pt-1">
                  <span className="flex items-center gap-1.5 font-medium text-slate-600 dark:text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    {RESUME_DATA.education.year}
                  </span>
                  <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {RESUME_DATA.education.location}
                  </span>
                </div>

                {/* Academic Performance Callout */}
                <div className="mt-4 p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-blue-800 dark:text-blue-300 font-medium block">
                      Cumulative Academic Performance
                    </span>
                    <span className="text-xl font-bold font-mono tabular-nums text-blue-700 dark:text-blue-300">
                      {RESUME_DATA.education.cgpa}
                    </span>
                  </div>
                  <ShieldCheck className="w-7 h-7 text-blue-600 dark:text-blue-400 opacity-80" />
                </div>

                {/* Relevant Coursework */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>Relevant Coursework</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {RESUME_DATA.education.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-2.5 py-1 text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md font-medium"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Industry Certifications */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 pb-2">
              <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                Accredited Certifications (3)
              </h3>
            </div>

            <div className="space-y-4">
              {RESUME_DATA.certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div>
                      <div className="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold">
                        {cert.curriculum}
                      </div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white font-display mt-0.5">
                        {cert.title}
                      </h4>
                      <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                        Issuer: {cert.issuer}
                      </div>
                    </div>
                    <span className="text-xs font-mono tabular-nums font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 shrink-0 self-start">
                      {cert.year}
                    </span>
                  </div>

                  {/* Skills Verified */}
                  <div className="mt-3.5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] text-slate-400 mr-1 font-mono">Curriculum Focus:</span>
                    {cert.skillsLearned.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] px-2 py-0.5 rounded bg-slate-50 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
