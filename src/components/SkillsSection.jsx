import React, { useState } from 'react';
import { 
  Code, 
  Cpu, 
  Database, 
  Server, 
  Sparkles, 
  Layers, 
  Flame, 
  CheckCircle2,
  Terminal,
  Zap
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const categories = ['All', 'Frontend', 'Backend', 'Database'];

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative  overflow-hidden">
      {/* Glow Orbs */}
      <div className="glow-orb-purple top-10 right-1/4 -z-10 opacity-50" />
      <div className="glow-orb-cyan bottom-10 left-10 -z-10 opacity-50" />

      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium tracking-wider">
    <Cpu className="w-3.5 h-3.5" />
    TECHNICAL EXPERTISE
  </div>

  <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
    Modern Technologies.
    <span className="gradient-text-purple-pink"> Practical Solutions.</span>
  </h2>

  <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
    A focused technology stack for building scalable, responsive, and
    high-performance web applications with modern frontend, backend,
    cloud, and database technologies.
  </p>
</div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold shadow-neon-purple/40 scale-105'
                  : 'glass-panel text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat === 'Frontend' && <Code className="w-4 h-4 text-cyan-400" />}
              {cat === 'Backend' && <Server className="w-4 h-4 text-purple-400" />}
              {cat === 'Database' && <Database className="w-4 h-4 text-emerald-400" />}
              {cat === 'All' && <Sparkles className="w-4 h-4 text-amber-400" />}
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="glass-panel glass-panel-hover rounded-3xl p-6 border border-white/10 relative overflow-hidden group"
            >
              {/* Top Row: Name, Badge, Experience */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h3>
                    {skill.popular && (
                      <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[10px] font-mono text-cyan-400">
                        {skill.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    {skill.experience} of production experience
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-lg font-mono font-bold text-cyan-400">
                    {skill.level}%
                  </span>
                </div>
              </div>

              {/* Animated Progress Bar */}
              <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden mb-4 border border-slate-800">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {/* Skill Description */}
              <p className="text-xs text-slate-300 leading-relaxed font-mono">
                {skill.description}
              </p>

              {/* Bottom Subtle Indicator */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1 text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  Category: {skill.category}
                </span>
                <span className="text-cyan-400/80">Verified Stack</span>
              </div>
            </div>
          ))}
        </div>

        {/* 3D Skills Tag Cloud Strip */}
        <div className="mt-16 glass-panel rounded-3xl p-6 sm:p-8 border border-white/10">
          <div className="text-center mb-6">
            <h4 className="text-base font-display font-bold text-white flex items-center justify-center gap-2">
              <Zap className="w-4 h-4 text-cyan-400" />
              Quick Technology Tags & Keywords
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              Click any keyword to highlight capabilities in real-time
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {[
              "React.js 18", "Next.js 14", "HTML5 Semantic", "CSS3 Flex/Grid", "JavaScript ES6+",
              "Tailwind CSS v3", "GSAP 3 ScrollTrigger", "Three.js WebGL", "Express.js REST",
              "PHP 8 OOP", "PostgreSQL", "SQL Relational", "Firebase Firestore", "RESTful APIs",
              "OAuth / JWT", "Docker", "Git / GitHub", "Vite", "Responsive Design", "WebGL Shaders"
            ].map((tag, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-cyan-500/60 hover:text-cyan-300 hover:bg-cyan-950/40 transition-all cursor-default hover:scale-105"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
