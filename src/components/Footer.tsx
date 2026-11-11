import React from 'react';
import { ArrowUp, Github, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-[#E5E5E5] dark:border-[#262626] bg-[#F8F8F6] dark:bg-[#111111]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <div className="text-sm font-semibold text-[#171717] dark:text-[#F5F5F5]">
            Gabriel Joshua Regidor
          </div>
          <div className="text-xs text-[#737373] dark:text-[#A3A3A3]">
            Virtual Assistant & Technology Opportunities · Philippines
          </div>
        </div>

        <div className="flex items-center gap-6 text-xs text-[#737373] dark:text-[#A3A3A3]">
          <a
            href="https://github.com/jsh24776"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#171717] dark:hover:text-[#F5F5F5] transition-colors flex items-center gap-1"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href="mailto:joshuaregidor57@gmail.com"
            className="hover:text-[#171717] dark:hover:text-[#F5F5F5] transition-colors flex items-center gap-1"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 text-[#737373] dark:text-[#A3A3A3] hover:text-[#171717] dark:hover:text-[#F5F5F5] rounded-lg transition-colors border border-transparent hover:border-[#E5E5E5] dark:hover:border-[#262626]"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
