import React, { useState, useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Server, 
  Code, 
  Database, 
  Eye, 
  Play,
  RotateCcw,
  ShoppingCart,
  TrendingUp,
  Cpu,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Interactive Sandbox state for live demo simulation
  // const [sandboxState, setSandboxState] = useState({
  //   // E-commerce state
  //   cartCount: 2,
  //   selectedColor: 'Cyan',
  //   selectedSize: 'Pro (512GB)',
  //   isCheckingOut: false,
    
  //   // Dashboard state
  //   timeRange: '7D',
  //   simulatedMetric: 142850,
  //   serverHealth: '99.98%',
    
  //   // Landing page state
  //   tier: 'annual',
  //   activeHeroScene: 'Particle Sphere',
  // });

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      
      {/* Click backdrop to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl glass-panel rounded-3xl border border-white/20 shadow-2xl overflow-hidden z-10 my-8">
        
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-950/60">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-mono">
              {project.category}
            </span>
            <span className="text-slate-400 text-xs font-mono hidden sm:inline">
              {project.subCategory}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body with Hero Preview Banner */}
        <div className="relative h-48 sm:h-64 w-full overflow-hidden bg-slate-950">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-60 filter saturate-150"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1127] via-[#0d1127]/60 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-cyan-300 mt-1 font-mono">
                {project.tagline}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-neon-cyan/40 transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-medium text-xs border border-slate-700 flex items-center gap-1.5 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                Source
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="flex border-b border-white/10 bg-slate-950/40 px-6 overflow-x-auto">
          {[
            { id: 'overview', label: 'Overview & Story', icon: <Eye className="w-4 h-4" /> },
            { id: 'features', label: 'Key Capabilities', icon: <Sparkles className="w-4 h-4" /> },
            { id: 'architecture', label: 'Tech Stack & DB', icon: <Server className="w-4 h-4" /> },
            { id: 'sandbox', label: 'Interactive Sandbox', icon: <Play className="w-4 h-4 text-cyan-400" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 py-3.5 px-4 text-xs font-semibold border-b-2 whitespace-nowrap transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'border-cyan-400 text-cyan-300 bg-cyan-500/10'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content Area */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[50vh] overflow-y-auto">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-in fade-in">
              <div>
                <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-2">
                  Project Narrative
                </h4>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {project.overview}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-3">
                  Technologies Leveraged
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 flex items-center gap-1.5"
                    >
                      <Zap className="w-3 h-3 text-cyan-400" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: FEATURES */}
          {activeTab === 'features' && (
            <div className="space-y-4 animate-in fade-in">
              <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider">
                Engineering Highlights & Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {project.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/80 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: ARCHITECTURE */}
          {activeTab === 'architecture' && (
            <div className="space-y-5 animate-in fade-in">
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider">
                System Topology & Data Pipelines
              </h4>
              
              <div className="space-y-3">
                {Object.entries(project.architecture).map(([layer, desc], idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <span className="text-xs font-mono uppercase text-purple-400 font-bold tracking-wider sm:w-32 shrink-0">
                      {layer}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-300 font-mono">
                      {desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

      
       

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-slate-950/80 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">
            Press <kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-cyan-400">ESC</kbd> to close
          </span>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-medium text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
}
