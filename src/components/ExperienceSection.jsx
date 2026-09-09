import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, Zap } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-20 overflow-hidden">
      {/* Ambient glow */}
      <div className="glow-orb-purple bottom-10 right-1/4 -z-10 opacity-50" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            CAREER TRAJECTORY & IMPACT
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Work Experience & <span className="gradient-text-cyan-blue">Engineering Milestones</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Delivering high-performance digital products and scalable systems across fast-paced environments.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-32 space-y-12">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline Glowing Node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:border-purple-400 group-hover:scale-125 transition-all duration-300 shadow-neon-cyan/50" />

              {/* Left Date Label (on desktop) */}
              <div className="sm:absolute sm:-left-36 sm:top-1 text-xs font-mono text-cyan-400 sm:w-28 sm:text-right mb-2 sm:mb-0">
                {exp.period}
              </div>

              {/* Experience Card */}
              <div className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 border border-white/10 space-y-4">
                
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-purple-300">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-pink-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {exp.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-2 pt-2">
                  {exp.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Skills used */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-slate-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
