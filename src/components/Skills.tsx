import React from 'react';
import { skillsData } from '../data/skills';
import { Code, Globe, Cpu, Database, CheckCircle } from 'lucide-react';

export const Skills: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0: return <Code className="w-4 h-4 text-[#171717] dark:text-[#F5F5F5]" />;
      case 1: return <Globe className="w-4 h-4 text-[#171717] dark:text-[#F5F5F5]" />;
      case 2: return <Cpu className="w-4 h-4 text-[#171717] dark:text-[#F5F5F5]" />;
      case 3: return <Database className="w-4 h-4 text-[#171717] dark:text-[#F5F5F5]" />;
      default: return <CheckCircle className="w-4 h-4 text-[#171717] dark:text-[#F5F5F5]" />;
    }
  };

  return (
    <section id="skills" className="py-24 md:py-32 border-b border-[#E5E5E5] dark:border-[#262626]">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E5E5E5] dark:border-[#262626]">
          <div className="space-y-2">
            <div className="text-xs font-semibold tracking-wider text-[#737373] dark:text-[#A3A3A3] uppercase">
              Practical & Technical Strengths
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#171717] dark:text-[#F5F5F5]">
              Skills & Ways I Can Help.
            </h2>
          </div>
          <div className="text-xs sm:text-sm text-[#737373] dark:text-[#A3A3A3] max-w-md">
            A mix of hands-on administrative support skills, customer-facing experience, and technical knowledge from my Computer Science studies and projects.
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, idx) => (
            <div
              key={category.title}
              className={`p-6 sm:p-7 rounded-2xl border border-[#E5E5E5] dark:border-[#262626] bg-white/40 dark:bg-neutral-900/30 space-y-5 flex flex-col justify-between ${
                idx === 2 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center gap-2.5 pb-3 border-b border-[#E5E5E5] dark:border-[#262626]">
                  {getCategoryIcon(idx)}
                  <h3 className="text-base font-bold text-[#171717] dark:text-[#F5F5F5]">
                    {category.title}
                  </h3>
                </div>

                <p className="text-xs text-[#737373] dark:text-[#A3A3A3] leading-relaxed">
                  {category.description}
                </p>

                {/* Skills Item List */}
                <div className="space-y-3 pt-2">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-0.5">
                      <div className="text-xs sm:text-sm font-semibold text-[#171717] dark:text-[#F5F5F5] font-mono">
                        {skill.name}
                      </div>
                      {skill.notes && (
                        <div className="text-[11px] text-[#737373] dark:text-[#A3A3A3] leading-snug">
                          {skill.notes}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quiet footer note */}
              <div className="pt-3 border-t border-[#E5E5E5] dark:border-[#262626] text-[11px] text-[#737373] dark:text-[#A3A3A3] font-mono">
                {category.skills.length} core competencies
              </div>
            </div>
          ))}
        </div>

        {/* Honest Learning Philosophy Banner */}
        <div className="p-6 rounded-2xl border border-[#E5E5E5] dark:border-[#262626] bg-neutral-100/50 dark:bg-neutral-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#737373] dark:text-[#A3A3A3]">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#171717] dark:bg-white" />
            <span className="font-semibold text-[#171717] dark:text-[#F5F5F5]">How I Work</span>
            <span>·</span>
            <span>Careful with details, comfortable with technology, and ready to learn the tools and processes each team uses.</span>
          </div>
          <div className="font-mono text-[11px] shrink-0 text-[#171717] dark:text-[#F5F5F5]">
            Practical & Curious
          </div>
        </div>
      </div>
    </section>
  );
};
