/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { Project } from './types';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleExploreProjects = () => {
    const elem = document.getElementById('projects');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    const elem = document.getElementById('contact');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8F8F6] dark:bg-[#111111] text-[#171717] dark:text-[#F5F5F5] font-sans antialiased selection:bg-[#171717] selection:text-white dark:selection:bg-white dark:selection:text-[#111111] transition-colors duration-200">
      {/* Navigation Header */}
      <Navbar
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onExploreProjects={handleExploreProjects}
          onContactClick={handleContactClick}
        />

        <Projects
          onSelectProject={(project) => setSelectedProject(project)}
        />

        <Skills />

        <Experience />

        <About />

        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Printable / Executive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
