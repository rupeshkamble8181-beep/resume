import { Code2, Database, Layers, BookOpen, Heart, Languages, Award, ExternalLink, Calendar, MapPin } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

interface AboutProps {
  onOpenResumeModal: () => void;
}

export default function About({ onOpenResumeModal }: AboutProps) {
  const strengths = [
    {
      title: "Backend & Systems Thinking",
      description: "Proficient in object-oriented architecture in Java and Python, designing structured data models, SQL schemas, and transaction management.",
      icon: Code2,
    },
    {
      title: "Relational Database Engineering",
      description: "Hands-on experience with MySQL and SQLite, executing JDBC connections, automated indexing, roll-number generators, and data migration scripts.",
      icon: Database,
    },
    {
      title: "Responsive Full-Stack Execution",
      description: "Building responsive frontends using HTML5, CSS3, Flexbox, and JavaScript with clean visual hierarchy and accessibility standards.",
      icon: Layers,
    },
    {
      title: "Continuous Learning & Agility",
      description: "Demonstrated through 3 industry certifications (Oracle, Cisco, freeCodeCamp) and rapid problem-solving in capstone software sprints.",
      icon: Award,
    },
  ];

  return (
    <section id="about" className="py-20 border-b border-slate-200/60 dark:border-slate-800/60 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            01. Background & Profile
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
            About Me
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Motivated and detail-oriented software developer with deep foundation in Java, Python, and relational databases. Ready to bring high-impact contributions to agile software engineering teams.
          </p>
        </div>

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed text-base">
            <p>
              I am a 2025 graduate in <strong className="text-slate-950 dark:text-white">Bachelor of Computer Applications (BCA)</strong> from Demo Institute of Technology, Pune, maintaining an academic record of <span className="font-semibold text-blue-600 dark:text-blue-400">8.2 / 10 CGPA</span>. My core focus centers on building reliable backend architectures, clean desktop management utilities, and responsive modern web experiences.
            </p>
            <p>
              During my software development internship at <strong className="text-slate-950 dark:text-white">TechSprint Innovations Lab</strong>, I assisted senior engineers in designing RESTful microservice components using Java and MySQL, while developing automated database migration scripts and diagnosing client-reported bug tickets under agile production sprints.
            </p>
            <p>
              Whether engineering dynamic desktop applications like the <span className="italic">Student Management System</span> in Java Swing with transactional SQL, or building lightweight personal utilities like the <span className="italic">Python Expense Tracker</span> with SQLite, I prioritize algorithmic efficiency, clean modular code, and thoughtful user experiences.
            </p>

            {/* Quick Details List */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <div>
                  <span className="text-slate-400 text-xs block">Date of Birth</span>
                  <span className="font-medium text-slate-800 dark:text-slate-200">{RESUME_DATA.personal.dateOfBirth}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <div>
                  <span className="text-slate-400 text-xs block">Location</span>
                  <span className="font-medium text-slate-800 dark:text-slate-200">{RESUME_DATA.personal.location}</span>
                </div>
              </div>
            </div>

            {/* Call to action for resume inspection */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                <span>Inspect Verified Resume Document & Credential Proof</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Strengths & Personal Details Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Core Strengths */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-2xs space-y-4">
              <h3 className="text-sm font-bold tracking-tight text-slate-900 dark:text-white uppercase text-xs font-mono text-slate-500">
                Core Engineering Strengths
              </h3>
              <div className="space-y-3.5">
                {strengths.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.title} className="flex gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                          {s.title}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400 leading-normal mt-0.5">
                          {s.description}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Languages & Hobbies Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Spoken Languages */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 dark:text-white mb-2 font-display">
                  <Languages className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Languages</span>
                </div>
                <div className="space-y-1.5 text-xs">
                  {RESUME_DATA.spokenLanguages.map((lang) => (
                    <div key={lang.name} className="flex justify-between items-center text-slate-600 dark:text-slate-400">
                      <span className="font-medium text-slate-800 dark:text-slate-200">{lang.name}</span>
                      <span className="text-[11px] text-slate-400">{lang.proficiency.split('/')[0]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hobbies & Interests */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 dark:text-white mb-2 font-display">
                  <Heart className="w-4 h-4 text-rose-500" />
                  <span>Interests</span>
                </div>
                <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                  {RESUME_DATA.hobbies.map((h) => (
                    <div key={h.name} className="text-slate-700 dark:text-slate-300">
                      <span className="font-medium text-slate-900 dark:text-slate-100">{h.name}:</span>{' '}
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">{h.detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
