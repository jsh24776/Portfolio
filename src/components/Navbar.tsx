import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight, FileText } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDarkMode, onToggleTheme, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#F8F8F6]/90 dark:bg-[#111111]/90 backdrop-blur-md border-b border-[#E5E5E5] dark:border-[#262626] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark */}
        <a
          href="#"
          className="text-base sm:text-lg font-semibold tracking-tight text-[#171717] dark:text-[#F5F5F5] hover:opacity-80 transition-opacity whitespace-nowrap shrink-0"
        >
          Gabriel<span className="hidden sm:inline"> Regidor</span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#737373] dark:text-[#A3A3A3]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="hover:text-[#171717] dark:hover:text-[#F5F5F5] transition-colors whitespace-nowrap shrink-0"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Theme Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="p-2 text-[#737373] dark:text-[#A3A3A3] hover:text-[#171717] dark:hover:text-[#F5F5F5] rounded-lg transition-colors border border-transparent hover:border-[#E5E5E5] dark:hover:border-[#262626]"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-[#171717] dark:text-[#F5F5F5] border border-[#E5E5E5] dark:border-[#262626] hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-all whitespace-nowrap shrink-0"
          >
            <FileText className="w-3.5 h-3.5 text-[#737373] dark:text-[#A3A3A3]" />
            <span>Resume</span>
          </button>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-[#171717] dark:bg-white dark:text-[#111111] hover:bg-neutral-800 dark:hover:bg-neutral-200 rounded-lg transition-all shadow-sm whitespace-nowrap shrink-0"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#737373] dark:text-[#A3A3A3] hover:text-[#171717] dark:hover:text-[#F5F5F5]"
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F8F8F6] dark:bg-[#111111] border-b border-[#E5E5E5] dark:border-[#262626] px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="block text-sm font-medium text-[#737373] dark:text-[#A3A3A3] hover:text-[#171717] dark:hover:text-[#F5F5F5] py-1"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-[#E5E5E5] dark:border-[#262626] flex gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full text-center py-2 text-xs font-medium border border-[#E5E5E5] dark:border-[#262626] rounded-lg text-[#171717] dark:text-[#F5F5F5]"
            >
              View Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
