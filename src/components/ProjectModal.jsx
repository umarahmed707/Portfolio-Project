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
  const [sandboxState, setSandboxState] = useState({
    // E-commerce state
    cartCount: 2,
    selectedColor: 'Cyan',
    selectedSize: 'Pro (512GB)',
    isCheckingOut: false,
    
    // Dashboard state
    timeRange: '7D',
    simulatedMetric: 142850,
    serverHealth: '99.98%',
    
    // Landing page state
    tier: 'annual',
    activeHeroScene: 'Particle Sphere',
  });

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

          {/* TAB 4: INTERACTIVE SANDBOX DEMO */}
          {activeTab === 'sandbox' && (
            <div className="space-y-6 animate-in fade-in">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
                  <Play className="w-3.5 h-3.5 fill-cyan-300 text-cyan-300" />
                  LIVE INTERACTIVE SANDBOX SIMULATOR
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-2 py-0.5 rounded">
                  STATE: LIVE & REACTIVE
                </span>
              </div>

              {/* Dynamic Sandbox UI depending on category */}
              {project.category === 'E-Commerce' ? (
                /* E-Commerce Sandbox */
                <div className="p-5 rounded-2xl bg-slate-950/80 border border-cyan-500/30 space-y-4">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-slate-950 text-xl">
                        3D
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm">Quantum Neo Audio Pro</div>
                        <div className="text-xs text-cyan-400 font-mono">$349.00 USD</div>
                      </div>
                    </div>

                    {/* Color Swatch Selector */}
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-400 font-mono">Finish:</span>
                      {['Cyan', 'Obsidian', 'Titanium'].map((c) => (
                        <button
                          key={c}
                          onClick={() => setSandboxState((prev) => ({ ...prev, selectedColor: c }))}
                          className={`px-2.5 py-1 rounded text-xs font-mono transition-all cursor-pointer ${
                            sandboxState.selectedColor === c
                              ? 'bg-cyan-500 text-slate-950 font-bold shadow-neon-cyan/40'
                              : 'bg-slate-900 text-slate-400 border border-slate-800'
                          }`}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="text-xs text-slate-400">
                      Cart Item Count: <span className="font-mono text-cyan-400 font-bold">{sandboxState.cartCount}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSandboxState((prev) => ({ ...prev, cartCount: prev.cartCount + 1 }))}
                        className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300 hover:text-white cursor-pointer"
                      >
                        + Add To Cart
                      </button>
                      <button
                        onClick={() => {
                          setSandboxState((prev) => ({ ...prev, isCheckingOut: true }));
                          setTimeout(() => setSandboxState((prev) => ({ ...prev, isCheckingOut: false })), 2000);
                        }}
                        className="px-4 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs font-mono hover:bg-emerald-400 transition-colors cursor-pointer"
                      >
                        {sandboxState.isCheckingOut ? 'Processing Stripe...' : 'Simulate Checkout'}
                      </button>
                    </div>
                  </div>
                </div>
              ) : project.category === 'Dashboards' ? (
                /* Dashboard Sandbox */
                <div className="p-5 rounded-2xl bg-slate-950/80 border border-cyan-500/30 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-mono text-slate-300 font-bold">REVENUE TELEMETRY ENGINE</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {['24H', '7D', '30D', '1Y'].map((t) => (
                        <button
                          key={t}
                          onClick={() => setSandboxState((prev) => ({ ...prev, timeRange: t, simulatedMetric: prev.simulatedMetric + Math.floor(Math.random() * 5000) }))}
                          className={`px-2.5 py-1 rounded text-xs font-mono cursor-pointer ${
                            sandboxState.timeRange === t
                              ? 'bg-cyan-500/30 text-cyan-300 border border-cyan-400/50'
                              : 'text-slate-500 hover:text-slate-300'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-[10px] font-mono text-slate-400">ACTIVE MRR</div>
                      <div className="text-base sm:text-lg font-mono font-bold text-cyan-300">
                        ${sandboxState.simulatedMetric.toLocaleString()}
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-[10px] font-mono text-slate-400">UPTIME SLA</div>
                      <div className="text-base sm:text-lg font-mono font-bold text-emerald-400">
                        {sandboxState.serverHealth}
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-[10px] font-mono text-slate-400">POSTGRES QPS</div>
                      <div className="text-base sm:text-lg font-mono font-bold text-purple-400">
                        12,480 req/s
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Landing Page Sandbox */
                <div className="p-5 rounded-2xl bg-slate-950/80 border border-cyan-500/30 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-xs font-mono text-slate-300">3D Particle Shader Config</span>
                    <div className="flex items-center gap-2">
                      {['Particle Sphere', 'Torus Knot', 'Cyber Matrix'].map((scene) => (
                        <button
                          key={scene}
                          onClick={() => setSandboxState((prev) => ({ ...prev, activeHeroScene: scene }))}
                          className={`px-2.5 py-1 rounded text-xs font-mono cursor-pointer ${
                            sandboxState.activeHeroScene === scene
                              ? 'bg-purple-500/30 text-purple-300 border border-purple-400/50'
                              : 'text-slate-500 hover:text-slate-300'
                          }`}
                        >
                          {scene}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-mono text-slate-400 flex items-center justify-between">
                    <span>Active Render Engine: <strong className="text-cyan-300">{sandboxState.activeHeroScene}</strong></span>
                    <span className="text-emerald-400">FPS: 60.0 (GPU Synced)</span>
                  </div>
                </div>
              )}
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
