import React from 'react';
import { X, Printer, Download, Mail, Github, MapPin, ExternalLink } from 'lucide-react';
import { experienceData, educationData } from '../data/experience';
import { skillsData } from '../data/skills';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white dark:bg-[#161616] text-[#171717] dark:text-[#F5F5F5] rounded-2xl border border-[#E5E5E5] dark:border-[#262626] shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E5E5] dark:border-[#262626] bg-neutral-50 dark:bg-neutral-900/60 print:hidden">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#737373] dark:text-[#A3A3A3]">
            Professional Profile & Resume
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-[#E5E5E5] dark:border-[#262626] rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#737373] dark:text-[#A3A3A3] hover:text-[#171717] dark:hover:text-[#F5F5F5] rounded-lg border border-transparent hover:border-[#E5E5E5] dark:hover:border-[#262626]"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet Body */}
        <div className="p-8 sm:p-10 max-h-[80vh] overflow-y-auto space-y-8 font-sans">
          {/* Header Contact Block */}
          <div className="space-y-3 pb-6 border-b border-[#E5E5E5] dark:border-[#262626]">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#171717] dark:text-[#F5F5F5]">
              Gabriel Joshua Regidor
            </h1>
            <div className="text-sm font-medium text-[#737373] dark:text-[#A3A3A3]">
              Virtual Assistant Candidate · 4th-Year Computer Science Undergraduate
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-[#737373] dark:text-[#A3A3A3]">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" /> Philippines
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3" /> joshuaregidor57@gmail.com
              </span>
              <span>·</span>
              <a
                href="https://github.com/jsh24776"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:underline text-[#171717] dark:text-[#F5F5F5]"
              >
                <Github className="w-3 h-3" /> github.com/jsh24776
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#737373] dark:text-[#A3A3A3]">
              Education
            </h2>
            <div className="space-y-1">
              <div className="flex justify-between items-baseline">
                <div className="text-sm font-bold text-[#171717] dark:text-[#F5F5F5]">
                  {educationData.degree}
                </div>
                <div className="text-xs font-mono text-[#737373] dark:text-[#A3A3A3]">
                  Senior Year (4th Year)
                </div>
              </div>
              <div className="text-xs text-[#737373] dark:text-[#A3A3A3]">
                {educationData.location}
              </div>
              <div className="text-xs text-[#737373] dark:text-[#A3A3A3] pt-1">
                Focus Areas: {educationData.coreAreas.join(', ')}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#737373] dark:text-[#A3A3A3]">
              Skills & Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="font-semibold text-[#171717] dark:text-[#F5F5F5]">Administrative Support: </span>
                <span className="text-[#737373] dark:text-[#A3A3A3]">Data entry and verification, document formatting, digital filing, customer assistance</span>
              </div>
              <div>
                <span className="font-semibold text-[#171717] dark:text-[#F5F5F5]">Languages: </span>
                <span className="text-[#737373] dark:text-[#A3A3A3]">Python, TypeScript, JavaScript, Java, Dart, SQL</span>
              </div>
              <div>
                <span className="font-semibold text-[#171717] dark:text-[#F5F5F5]">Web & Mobile: </span>
                <span className="text-[#737373] dark:text-[#A3A3A3]">React, Tailwind CSS, Flutter, Laravel, HTML5, CSS3</span>
              </div>
              <div>
                <span className="font-semibold text-[#171717] dark:text-[#F5F5F5]">AI & ML: </span>
                <span className="text-[#737373] dark:text-[#A3A3A3]">LightGBM, Scikit-learn, YOLOv8, OpenCV, Roboflow</span>
              </div>
              <div>
                <span className="font-semibold text-[#171717] dark:text-[#F5F5F5]">Tools & Platforms: </span>
                <span className="text-[#737373] dark:text-[#A3A3A3]">Git, GitHub, FastAPI, MySQL, MariaDB, XAMPP</span>
              </div>
            </div>
          </div>

          {/* Featured Projects Highlight */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#737373] dark:text-[#A3A3A3]">
              Selected Technology Projects
            </h2>
            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between font-semibold text-[#171717] dark:text-[#F5F5F5]">
                  <span>Sentinel — Disaster Intelligence Platform</span>
                  <span className="font-mono text-[#737373] dark:text-[#A3A3A3]">React · TypeScript · Leaflet</span>
                </div>
                <p className="text-[#737373] dark:text-[#A3A3A3] mt-0.5">
                  Earthquake monitoring and interactive geographical data visualization system with spatial clustering.
                </p>
              </div>

              <div>
                <div className="flex justify-between font-semibold text-[#171717] dark:text-[#F5F5F5]">
                  <span>Atlas — Fitness Coaching Management Mobile App</span>
                  <span className="font-mono text-[#737373] dark:text-[#A3A3A3]">Flutter · Dart · Local Persistence</span>
                </div>
                <p className="text-[#737373] dark:text-[#A3A3A3] mt-0.5">
                  Client appointment scheduling, custom workout program creation, and longitudinal metric tracking.
                </p>
              </div>

              <div>
                <div className="flex justify-between font-semibold text-[#171717] dark:text-[#F5F5F5]">
                  <span>Filipino Food Recognition & Classification</span>
                  <span className="font-mono text-[#737373] dark:text-[#A3A3A3]">Python · YOLOv8n · Roboflow</span>
                </div>
                <p className="text-[#737373] dark:text-[#A3A3A3] mt-0.5">
                  Computer vision model fine-tuned on custom dataset of 7,461 images across 100 training epochs (~76% performance).
                </p>
              </div>

              <div>
                <div className="flex justify-between font-semibold text-[#171717] dark:text-[#F5F5F5]">
                  <span>Earthquake Predictive Modeling</span>
                  <span className="font-mono text-[#737373] dark:text-[#A3A3A3]">Python · LightGBM · Scikit-learn</span>
                </div>
                <p className="text-[#737373] dark:text-[#A3A3A3] mt-0.5">
                  Gradient boosted decision tree exploration for seismic event classification with cross-validation.
                </p>
              </div>
            </div>
          </div>

          {/* Practical Work Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#737373] dark:text-[#A3A3A3]">
              Professional Experience (~2 Years Total)
            </h2>
            <div className="space-y-3 text-xs">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between font-bold text-[#171717] dark:text-[#F5F5F5]">
                    <span>{exp.role}</span>
                    <span className="font-normal text-[#737373] dark:text-[#A3A3A3]">{exp.type}</span>
                  </div>
                  <p className="text-[#737373] dark:text-[#A3A3A3]">
                    {exp.summary}
                  </p>
                  <div className="text-[11px] text-[#737373] dark:text-[#A3A3A3]">
                    Transferable Skills: {exp.transferableCompetencies.join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-[#E5E5E5] dark:border-[#262626] bg-neutral-50 dark:bg-neutral-900/60 flex items-center justify-between text-xs text-[#737373] dark:text-[#A3A3A3] print:hidden">
          <span>Prepared for Virtual Assistant & technology opportunities</span>
          <button
            onClick={onClose}
            className="px-3 py-1 font-medium hover:text-[#171717] dark:hover:text-[#F5F5F5]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
