import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import EducationCertifications from './components/EducationCertifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] dark:bg-[#0c0f17] text-slate-900 dark:text-slate-100 selection:bg-blue-600 selection:text-white transition-colors duration-200">
      {/* Skip to Main Content Link for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 z-50 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg text-xs font-semibold focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Sticky Navigation Bar */}
      <Navbar onOpenResumeModal={() => setResumeModalOpen(true)} />

      {/* Main Content Landmarks */}
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <Hero onOpenResumeModal={() => setResumeModalOpen(true)} />

        {/* About Me Section */}
        <About onOpenResumeModal={() => setResumeModalOpen(true)} />

        {/* Technical Skills Section */}
        <Skills />

        {/* Work Experience Section */}
        <Experience />

        {/* Portfolio Projects Section */}
        <Projects />

        {/* Education & Certifications Section */}
        <EducationCertifications />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer Section */}
      <Footer onOpenResumeModal={() => setResumeModalOpen(true)} />

      {/* Resume Document Viewer / Download Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
