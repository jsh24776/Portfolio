import React from 'react';
import { experienceData } from '../data/experience';
import { Briefcase, CheckCircle2, Award, Clock } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-32 border-b border-[#E5E5E5] dark:border-[#262626]">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E5E5E5] dark:border-[#262626]">
          <div className="space-y-2">
            <div className="text-xs font-semibold tracking-wider text-[#737373] dark:text-[#A3A3A3] uppercase">
              Hands-On Experience
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#171717] dark:text-[#F5F5F5]">
              Work Experience.
            </h2>
          </div>
          <p className="text-sm text-[#737373] dark:text-[#A3A3A3] max-w-md">
            Around two years of experience across data encoding, customer service, and document services—building skills that apply to both virtual assistance and technology work.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-6">
          {experienceData.map((item, index) => (
            <div
              key={item.role}
              className="p-6 md:p-8 rounded-2xl border border-[#E5E5E5] dark:border-[#262626] bg-white/40 dark:bg-neutral-900/30 space-y-6 hover:border-neutral-400 dark:hover:border-neutral-700 transition-colors"
            >
              {/* Role Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-[#E5E5E5] dark:border-[#262626]">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-[#171717] dark:text-[#F5F5F5]">
                    {item.role}
                  </h3>
                  <div className="text-xs text-[#737373] dark:text-[#A3A3A3]">
                    <span>{item.type}</span>
                    <span className="mx-2">·</span>
                    <span>{item.context}</span>
                  </div>
                </div>

                <div className="text-xs font-mono text-[#737373] dark:text-[#A3A3A3] shrink-0 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Practical Work History</span>
                </div>
              </div>

              {/* Summary Description */}
              <p className="text-sm text-[#171717] dark:text-[#D4D4D4] leading-relaxed">
                {item.summary}
              </p>

              {/* Transferable Skills & Competencies */}
              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#737373] dark:text-[#A3A3A3]">
                  Skills Demonstrated
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {item.transferableCompetencies.map((comp, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-[#171717] dark:text-[#E5E5E5]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#737373] dark:text-[#A3A3A3] shrink-0 mt-0.5" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Narrative Callout: The Value of Diverse Experience */}
        <div className="p-6 md:p-8 rounded-2xl border border-[#E5E5E5] dark:border-[#262626] bg-neutral-100/50 dark:bg-neutral-900/40 space-y-3">
          <h4 className="text-sm font-bold text-[#171717] dark:text-[#F5F5F5]">
            What I Bring to a Team
          </h4>
          <p className="text-xs sm:text-sm text-[#737373] dark:text-[#A3A3A3] leading-relaxed">
            Across data processing, customer service, and document printing, I learned to handle information carefully, help people with practical needs, and keep work moving in busy environments. I bring that same reliability, adaptability, and attention to detail to virtual assistant and technology roles.
          </p>
        </div>
      </div>
    </section>
  );
};
