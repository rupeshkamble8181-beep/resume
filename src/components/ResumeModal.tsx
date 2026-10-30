import { useState } from 'react';
import { X, FileDown, Printer, ExternalLink, Image as ImageIcon, FileText } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [activeTab, setActiveTab] = useState<'formatted' | 'original'>('formatted');

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-xs overflow-y-auto"
    >
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto">
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between px-6 py-3.5 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 gap-3">
          <div className="flex items-center gap-3">
            <h3 id="resume-modal-title" className="text-base font-bold text-slate-900 dark:text-white font-display">
              Resume Preview
            </h3>
            {/* View Switcher: Formatted text vs Original Document Image */}
            <div className="flex items-center p-0.5 bg-slate-200/80 dark:bg-slate-800 rounded-lg text-xs font-medium">
              <button
                type="button"
                onClick={() => setActiveTab('formatted')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors ${
                  activeTab === 'formatted'
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Structured</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('original')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors ${
                  activeTab === 'original'
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Original Document</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <a
              href={RESUME_DATA.personal.downloadResumePdf}
              download="Rupesh_Kamble_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-2xs transition-colors"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume preview"
              className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 bg-slate-50/50 dark:bg-slate-950/40">
          {activeTab === 'original' ? (
            /* Original Resume Image Attachment */
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="relative max-w-2xl border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-lg bg-white dark:bg-slate-900">
                <img
                  src={RESUME_DATA.personal.originalResumeDoc}
                  alt="Original Resume of Rupesh Rajendra Kamble"
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className="text-xs text-slate-500 text-center">
                Original source document provided for portfolio verification.
              </p>
            </div>
          ) : (
            /* Formatted Clean Printable Document View */
            <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 text-slate-900 dark:text-slate-100 font-sans print:shadow-none print:border-none print:p-0">
              {/* Header */}
              <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
                <h1 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-slate-950 dark:text-white">
                  {RESUME_DATA.personal.fullName}
                </h1>
                <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                  {RESUME_DATA.personal.title}
                </div>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600 dark:text-slate-400">
                  <span>{RESUME_DATA.personal.email}</span>
                  <span>·</span>
                  <span>{RESUME_DATA.personal.phone}</span>
                  <span>·</span>
                  <span>{RESUME_DATA.personal.location}</span>
                  <span>·</span>
                  <span>DOB: {RESUME_DATA.personal.dateOfBirth}</span>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Professional Summary
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {RESUME_DATA.personal.shortBio}
                </p>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Education
                </h2>
                <div className="flex justify-between items-baseline text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white">
                      {RESUME_DATA.education.degree}
                    </span>
                    <span className="text-slate-500 block text-xs">
                      {RESUME_DATA.education.institution} · CGPA: {RESUME_DATA.education.cgpa}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-slate-500">{RESUME_DATA.education.year}</span>
                </div>
              </div>

              {/* Key Projects */}
              <div>
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Key Projects
                </h2>
                <div className="space-y-4">
                  {RESUME_DATA.projects.map((proj) => (
                    <div key={proj.id} className="text-xs sm:text-sm space-y-1">
                      <div className="flex justify-between font-semibold text-slate-900 dark:text-white">
                        <span>{proj.title}</span>
                        <span className="font-mono text-xs text-blue-600 dark:text-blue-400">
                          {proj.technologies.slice(0, 3).join(', ')}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {proj.description}
                      </p>
                      <div className="text-[11px] font-mono text-slate-400">
                        Link: {proj.githubUrl}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Work Experience */}
              <div>
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Work Experience & Internships
                </h2>
                <div className="space-y-4">
                  {RESUME_DATA.experience.map((exp) => (
                    <div key={exp.id} className="text-xs sm:text-sm space-y-1">
                      <div className="flex justify-between font-semibold text-slate-900 dark:text-white">
                        <span>{exp.role}</span>
                        <span className="font-mono text-xs text-slate-500">{exp.duration}</span>
                      </div>
                      <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                        {exp.company} — {exp.location}
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {exp.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Certifications
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  {RESUME_DATA.certifications.map((c) => (
                    <div key={c.id} className="p-2.5 rounded bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                      <div className="font-semibold text-slate-900 dark:text-white">{c.title}</div>
                      <div className="text-slate-500 text-[11px] mt-0.5">{c.issuer}</div>
                      <div className="font-mono text-blue-600 dark:text-blue-400 text-[10px] mt-1">{c.year}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
