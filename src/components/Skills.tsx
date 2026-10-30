import { useState } from 'react';
import { RESUME_DATA } from '../data/resumeData';
import { Check, Cpu, Database, Layout, Wrench } from 'lucide-react';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'Programming & Core', label: 'Programming & Core' },
    { id: 'Database & Backend', label: 'Database & Backend' },
    { id: 'Frontend & Web', label: 'Frontend & Web' },
    { id: 'GUI, Libraries & Tools', label: 'GUI & Tooling' },
  ];

  const filteredCategories =
    selectedCategory === 'all'
      ? RESUME_DATA.skillCategories
      : RESUME_DATA.skillCategories.filter((cat) => cat.category === selectedCategory);

  const getCategoryIcon = (catName: string) => {
    switch (catName) {
      case 'Programming & Core':
        return Cpu;
      case 'Database & Backend':
        return Database;
      case 'Frontend & Web':
        return Layout;
      default:
        return Wrench;
    }
  };

  return (
    <section id="skills" className="py-20 border-b border-slate-200/60 dark:border-slate-800/60 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              02. Technical Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
              Skills & Competencies
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Curated technical toolset acquired through computer application coursework, accredited certifications, and hands-on application engineering.
            </p>
          </div>

          {/* Interactive Category Filter (Interactive segmented buttons allowed by design constitution §1.A) */}
          <div className="flex items-center flex-wrap gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700/80">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                  selectedCategory === cat.id
                    ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-2xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grouped Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((group) => {
            const Icon = getCategoryIcon(group.category);
            return (
              <div
                key={group.category}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-2xs"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-5 mb-5 border-b border-slate-100 dark:border-slate-800">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
                      {group.category}
                    </h3>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {group.skills.length} verified competencies
                    </div>
                  </div>
                </div>

                {/* Skills List with Progress Indicators */}
                <div className="space-y-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                            {skill.level}
                          </span>
                          <span className="text-xs font-mono tabular-nums text-blue-600 dark:text-blue-400 font-semibold">
                            {skill.percentage}%
                          </span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-400 transition-all duration-700 ease-out"
                          style={{ width: `${skill.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlighted Competency Badges Summary */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-blue-50/70 via-indigo-50/50 to-slate-50/80 dark:from-slate-900/90 dark:via-blue-950/20 dark:to-slate-900/90 border border-blue-100 dark:border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white font-display">
              Primary Development Stack: Java + Python + SQL
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
              Strong focus on object-oriented programming principles, relational transaction reliability, and algorithmic problem solving.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 px-3 py-1.5 rounded-lg whitespace-nowrap">
            <Check className="w-3.5 h-3.5 shrink-0" />
            <span>Placement & Interview Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
}
