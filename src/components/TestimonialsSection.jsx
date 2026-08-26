import React from 'react';
import { Star, Quote, CheckCircle2, MessageSquare } from 'lucide-react';
import { testimonialsData } from '../data/portfolioData';

export default function TestimonialsSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Glow */}
      <div className="glow-orb-cyan top-1/2 left-10 -z-10 opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <MessageSquare className="w-3.5 h-3.5" />
            CLIENT ENDORSEMENTS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Trusted by <span className="gradient-text-cyan-blue">Founders & Tech Leaders</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Feedback on code velocity, 3D interaction quality, and full-stack architecture delivery.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-cyan-500/40 group-hover:text-cyan-400 transition-colors" />
                </div>

                {/* Content */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic font-sans">
                  "{item.content}"
                </p>
              </div>

              {/* Author & Project Badge */}
              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border border-cyan-400/40 shadow-sm"
                  />
                  <div>
                    <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.name}
                    </div>
                    <div className="text-xs text-slate-400">{item.role}</div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-400">
                  <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                  Project: {item.project}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
