import React from 'react';
import { GraduationCap, MapPin } from 'lucide-react';
import { educationData, interestsData } from '../data/experience';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 border-b border-[#E5E5E5] dark:border-[#262626]">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E5E5E5] dark:border-[#262626]">
          <div className="space-y-2">
            <div className="text-xs font-semibold tracking-wider text-[#737373] dark:text-[#A3A3A3] uppercase">
              Background & Vision
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#171717] dark:text-[#F5F5F5]">
              About Me.
            </h2>
          </div>
          <p className="text-sm text-[#737373] dark:text-[#A3A3A3] max-w-md">
            A practical, people-focused outlook shaped by hands-on work and a growing foundation in technology.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#171717] dark:text-[#D4D4D4] leading-relaxed">
            <p>
              I'm a fourth-year Computer Science student exploring opportunities as a Virtual Assistant as well as in technology.
            </p>
            <p className="text-[#737373] dark:text-[#A3A3A3]">
              My experience extends beyond the classroom. Across around two years of work in data encoding, food sales, and printing services, I've handled information carefully, supported customers, and adapted to different day-to-day responsibilities.
            </p>
            <p className="text-[#737373] dark:text-[#A3A3A3]">
              Those roles helped me build dependable work habits, customer communication, attention to detail, and comfort using digital tools to get practical tasks done.
            </p>
            <p className="text-[#737373] dark:text-[#A3A3A3]">
              I continue to build my digital skills through Computer Science studies and software projects. That technical foundation helps me learn new tools, while my work experience keeps me grounded in the value of clear communication and reliable support.
            </p>
            <div className="p-4 rounded-xl border border-[#E5E5E5] dark:border-[#262626] bg-white/50 dark:bg-neutral-900/40 text-sm font-medium italic text-[#171717] dark:text-[#F5F5F5]">
              "Good support starts with listening, staying organized, and following through."
            </div>
          </div>

          {/* Education & Academic Snapshot */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl border border-[#E5E5E5] dark:border-[#262626] bg-white/40 dark:bg-neutral-900/30 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E5E5] dark:border-[#262626]">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#171717] dark:text-[#F5F5F5]" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#171717] dark:text-[#F5F5F5]">
                    Academic Foundation
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#737373] dark:text-[#A3A3A3]">Senior Year</span>
              </div>

              <div className="space-y-1">
                <div className="text-base font-bold text-[#171717] dark:text-[#F5F5F5]">
                  {educationData.degree}
                </div>
                <div className="text-xs text-[#737373] dark:text-[#A3A3A3] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{educationData.location} · 4th-Year Undergraduate</span>
                </div>
              </div>

              <p className="text-xs text-[#737373] dark:text-[#A3A3A3] leading-relaxed">
                {educationData.description}
              </p>

              <div className="space-y-2 pt-2 border-t border-[#E5E5E5] dark:border-[#262626]">
                <div className="text-xs font-semibold text-[#171717] dark:text-[#F5F5F5]">
                  Core Academic Focus Areas
                </div>
                <ul className="space-y-1.5 text-xs text-[#737373] dark:text-[#A3A3A3]">
                  {educationData.coreAreas.map((area, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#171717] dark:bg-white shrink-0" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Currently Exploring / Continuous Learning */}
        <div className="space-y-6 pt-6 border-t border-[#E5E5E5] dark:border-[#262626]">
          <div className="space-y-1">
            <div className="text-xs font-semibold tracking-wider text-[#737373] dark:text-[#A3A3A3] uppercase">
              Exploration Roadmap
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#171717] dark:text-[#F5F5F5]">
              Currently Exploring & Technical Interests.
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {interestsData.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-[#E5E5E5] dark:border-[#262626] bg-white/40 dark:bg-neutral-900/30 space-y-2"
              >
                <div className="text-xs font-bold text-[#171717] dark:text-[#F5F5F5]">
                  {item.topic}
                </div>
                <p className="text-xs text-[#737373] dark:text-[#A3A3A3] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
