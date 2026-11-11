import React from 'react';
import { ArrowDown, Github, Mail } from 'lucide-react';
import graduationPhoto from '../assets/images/gabriel-graduation.jpg';

interface HeroProps {
  onExploreProjects: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onContactClick }) => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 border-b border-[#E5E5E5] dark:border-[#262626]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Hero Column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Small introductory kicker */}
            <div className="text-xs font-semibold tracking-wider text-[#737373] dark:text-[#A3A3A3] uppercase">
              Virtual Assistant Candidate · Computer Science Student
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#171717] dark:text-[#F5F5F5] text-balance">
              Gabriel Joshua Regidor.
            </h1>

            {/* Supporting Headline */}
            <p className="text-xl sm:text-2xl font-normal text-[#171717] dark:text-[#E5E5E5] leading-relaxed max-w-2xl text-balance">
              Reliable support, organized work, and a tech-savvy approach to getting things done.
            </p>

            {/* Short Narrative Intro */}
            <div className="text-base sm:text-lg text-[#737373] dark:text-[#A3A3A3] leading-relaxed max-w-2xl space-y-3">
              <p>
                I'm a fourth-year Computer Science student from the Philippines seeking Virtual Assistant opportunities, with around two years of experience across data encoding, customer service, and document services.
              </p>
              <p>
                I bring attention to detail, practical digital skills, and a willingness to learn new tools. I also build software projects and remain open to entry-level technology roles.
              </p>
            </div>

            {/* Actions & Links */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreProjects}
                className="px-6 py-3 text-sm font-semibold text-white bg-[#171717] dark:bg-white dark:text-[#111111] hover:bg-neutral-800 dark:hover:bg-neutral-200 rounded-lg transition-all shadow-sm flex items-center gap-2"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={onContactClick}
                className="px-6 py-3 text-sm font-semibold text-[#171717] dark:text-[#F5F5F5] border border-[#E5E5E5] dark:border-[#262626] hover:bg-neutral-100 dark:hover:bg-neutral-800/80 rounded-lg transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#737373] dark:text-[#A3A3A3]" />
                <span>Discuss an Opportunity</span>
              </button>

              <a
                href="https://github.com/jsh24776"
                target="_blank"
                rel="noreferrer"
                className="p-3 text-[#737373] dark:text-[#A3A3A3] hover:text-[#171717] dark:hover:text-[#F5F5F5] border border-[#E5E5E5] dark:border-[#262626] hover:bg-neutral-100 dark:hover:bg-neutral-800/80 rounded-lg transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>

            {/* Subtle Availability / Currently Learning Status */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-2 text-xs text-[#737373] dark:text-[#A3A3A3]">
              <span className="font-medium text-[#171717] dark:text-[#E5E5E5]">Open to</span>
              <span className="hidden sm:inline" aria-hidden="true">·</span>
              <span>Virtual Assistant and entry-level tech opportunities</span>
              <span className="hidden sm:inline" aria-hidden="true">·</span>
              <span>Philippines (UTC+8)</span>
            </div>
          </div>

          {/* Right Column: Graduation Portrait */}
          <div className="lg:col-span-4 w-full">
            <img
              src={graduationPhoto}
              alt="Gabriel celebrating his graduation with his diploma"
              className="w-full aspect-[4/5] rounded-2xl border border-[#E5E5E5] dark:border-[#262626] object-cover object-[center_28%] shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
