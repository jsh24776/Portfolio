import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, SlidersHorizontal, Terminal, Info } from 'lucide-react';
import { projectsData } from '../data/projects';
import { Project } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Web & Systems', 'Mobile', 'Machine Learning', 'Computer Vision'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 md:py-32 border-b border-[#E5E5E5] dark:border-[#262626]">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E5E5E5] dark:border-[#262626]">
          <div className="space-y-2">
            <div className="text-xs font-semibold tracking-wider text-[#737373] dark:text-[#A3A3A3] uppercase">
              Selected Works & Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#171717] dark:text-[#F5F5F5]">
              Featured Projects.
            </h2>
          </div>
          <p className="text-sm text-[#737373] dark:text-[#A3A3A3] max-w-md">
            A curated selection of software systems, mobile applications, and machine learning experiments exploring real-world technical problems.
          </p>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="flex items-center gap-1.5 p-1 bg-neutral-200/60 dark:bg-neutral-900 rounded-xl w-fit max-w-full overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeCategory === cat
                  ? 'bg-white dark:bg-[#202020] text-[#171717] dark:text-[#F5F5F5] shadow-xs'
                  : 'text-[#737373] dark:text-[#A3A3A3] hover:text-[#171717] dark:hover:text-[#F5F5F5]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Project Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl border border-[#E5E5E5] dark:border-[#262626] bg-white/40 dark:bg-neutral-900/30 overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-200"
            >
              {/* Visual Cover Banner with Overlay Hover Affordance */}
              <div 
                className="relative aspect-16/9 overflow-hidden bg-neutral-900 cursor-pointer"
                onClick={() => onSelectProject(project)}
              >
                <img
                  src={project.imagePath}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                />
                
                {/* Subtle gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                {/* Status indicator on image */}
                <div className="absolute top-4 left-4 text-xs font-mono text-white/90 drop-shadow-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
                  <span>{project.status}</span>
                </div>

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 dark:bg-[#171717]/95 text-[#171717] dark:text-white px-3 py-1.5 rounded-lg text-xs font-medium shadow-md flex items-center gap-1.5">
                  <span>Inspect Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Card Information Body */}
              <div className="p-6 md:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  {/* Clean Unboxed Metadata */}
                  <div className="flex items-center gap-2 text-xs text-[#737373] dark:text-[#A3A3A3]">
                    <span>{project.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono">{project.technologies[0]}</span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3
                      onClick={() => onSelectProject(project)}
                      className="text-xl sm:text-2xl font-bold tracking-tight text-[#171717] dark:text-[#F5F5F5] hover:opacity-80 transition-opacity cursor-pointer"
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-[#737373] dark:text-[#A3A3A3] mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Prose Description */}
                  <p className="text-sm text-[#737373] dark:text-[#A3A3A3] leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Card Footer: Tech stack & Links */}
                <div className="pt-6 border-t border-[#E5E5E5] dark:border-[#262626] space-y-4">
                  {/* Technology tokens list (unboxed, separator dots) */}
                  <div className="text-xs font-mono text-[#737373] dark:text-[#A3A3A3] flex flex-wrap gap-x-2 gap-y-1">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx}>
                        {tech}{idx < Math.min(3, project.technologies.length - 1) && <span className="text-[#A3A3A3] dark:text-[#525252] ml-2">·</span>}
                      </span>
                    ))}
                  </div>

                  {/* Interactive Action Buttons */}
                  <div className="flex items-center justify-between gap-3 pt-1">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="text-xs font-semibold text-[#171717] dark:text-[#F5F5F5] hover:opacity-80 transition-opacity flex items-center gap-1.5"
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#737373] dark:text-[#A3A3A3] hover:text-[#171717] dark:hover:text-[#F5F5F5] transition-colors"
                      aria-label={`${project.title} repository`}
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Repository</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
