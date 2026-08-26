import React, { useState } from 'react';
import { 
  Code2, 
  Box, 
  Sparkles, 
  ShoppingCart, 
  LayoutDashboard, 
  Database, 
  ArrowRight, 
  CheckCircle,
  Layers
} from 'lucide-react';
import { servicesData } from '../data/portfolioData';

export default function ServicesSection({ onSelectService }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  const iconMap = {
    Code2: <Code2 className="w-6 h-6 text-cyan-400" />,
    Box: <Box className="w-6 h-6 text-purple-400" />,
    Sparkles: <Sparkles className="w-6 h-6 text-pink-400" />,
    ShoppingCart: <ShoppingCart className="w-6 h-6 text-emerald-400" />,
    LayoutDashboard: <LayoutDashboard className="w-6 h-6 text-blue-400" />,
    Database: <Database className="w-6 h-6 text-amber-400" />,
  };

  const handleDiscussClick = (serviceTitle) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative  overflow-hidden">
      {/* Glow Orbs */}
      <div className="glow-orb-cyan top-20 right-10 -z-10 opacity-50" />
      <div className="glow-orb-purple bottom-20 left-10 -z-10 opacity-50" />

      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Layers className="w-3.5 h-3.5" />
            SERVICES & EXPERTISE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Specialized Solutions for <span className="gradient-text-cyan-blue">Ambitious Digital Products</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            High-caliber engineering combining visual innovation, scalable backend engines, and hyper-optimized user flows.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, idx) => {
            const isHovered = hoveredCard === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative rounded-3xl transition-all duration-300 transform-style-3d"
              >
                {/* Glow Border Effect */}
                <div
                  className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-20 group-hover:opacity-100 blur-sm transition duration-500 ${
                    isHovered ? 'scale-[1.01]' : ''
                  }`}
                />

                <div className="relative h-full flex flex-col justify-between glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 group-hover:border-white/20 transition-all">
                  
                  <div className="space-y-5">
                    {/* Header with Icon and Index */}
                    <div className="flex items-center justify-between">
                      <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 group-hover:border-cyan-500/40 group-hover:bg-cyan-950/40 transition-colors shadow-sm">
                        {iconMap[service.icon]}
                      </div>
                      <span className="text-xs font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Title & Short Description */}
                    <div>
                      <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                        {service.shortDesc}
                      </p>
                    </div>

                    {/* Highlights Checklist */}
                    <div className="pt-2 space-y-2 border-t border-slate-800/80">
                      {service.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-6 mt-6 border-t border-slate-800/60">
                    <button
                      onClick={() => handleDiscussClick(service.title)}
                      className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-900/60 group-hover:bg-cyan-500/20 text-xs font-semibold text-slate-300 group-hover:text-cyan-300 border border-slate-800 group-hover:border-cyan-500/40 transition-all"
                    >
                      <span>Discuss {service.title.split(' ')[0]}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
