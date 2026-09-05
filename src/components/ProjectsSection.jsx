import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  ArrowUpRight, 
  Play,
  Maximize2
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    'All',
    'Landing Pages',
    'E-Commerce',
    'Dashboards',
    'Full Stack',
  ];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory || p.subCategory.includes(activeCategory));

  return (
    <section id="projects" className="relative py-20  overflow-hidden">
      {/* Ambient background glows */}
      <div className="glow-orb-cyan top-1/2 -left-20 -z-10 opacity-50" />
      <div className="glow-orb-purple bottom-10 -right-20 -z-10 opacity-50" />

      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
       <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
    <FolderGit2 className="w-3.5 h-3.5" />
    PROJECTS & CASE STUDIES
  </div>

  <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
    Featured <span className="gradient-text-cyan-blue">Projects & Applications</span>
  </h2>

  <p className="text-slate-400 text-base sm:text-lg">
    A collection of modern web applications built with React.js, Next.js, Tailwind CSS, Firebase, Express.js, PostgreSQL, and REST APIs — focused on responsive UI, scalable architecture, and real-world functionality.
  </p>
</div>


        {/* Filter Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-neon-cyan/40 scale-105'
                  : 'glass-panel text-slate-400 hover:text-white hover:border-slate-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              {/* Top Image Preview with Overlay */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1127] via-transparent to-black/30" />

                {/* Category Pill Tag */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-cyan-500/40 text-[11px] font-mono text-cyan-300">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-2.5 py-1 rounded-full bg-purple-500/80 backdrop-blur-md text-[10px] font-mono text-white font-bold">
                      FEATURED
                    </span>
                  )}
                </div>

                {/* Quick Interactive Open Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="absolute bottom-3 right-3 p-2.5 rounded-xl bg-slate-900/90 text-cyan-300 border border-cyan-500/40 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110 shadow-lg"
                  title="Open Project Details & Sandbox"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Project Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer flex items-center justify-between"
                  >
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-300 transition-colors shrink-0" />
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed font-sans">
                    {project.tagline}
                  </p>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-900 border border-slate-800 text-cyan-400">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-cyan-400" />
                    <span>Interactive Details</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 transition-colors"
                      title="Live Website"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Selected Project Detailed Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
