import React, { useState, useEffect } from 'react';
import { 
  ArrowUp, 
  Sparkles, 
  Heart, 
  Clock, 
  Code,
  Layers,
  Cpu
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZoneName: 'short',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#04060e] text-slate-400 py-16 overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand & Bio column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 p-[1.5px]">
                <div className="w-full h-full bg-[#090d20] rounded-[10px] flex items-center justify-center font-display font-black text-cyan-400 text-sm">
                  AR
                </div>
              </div>
              <div>
                <span className="font-display font-bold text-base text-white">
                  {personalInfo.name}
                </span>
                <div className="text-[11px] font-mono text-cyan-400">
                  {personalInfo.role}
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed font-sans">
              Pushing digital craft forward with 3D WebGL interfaces, fluid animations, and high-concurrency cloud backends.
            </p>

            {/* Live Clock Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>Local System Time: {time || 'Loading...'}</span>
            </div>
          </div>

          {/* Navigation links column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold">
              Navigation Index
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              {[
                { name: 'Home / Hero Canvas', href: '#home' },
                { name: 'About & Philosophy', href: '#about' },
                { name: 'Services & Capabilities', href: '#services' },
                { name: 'Showcase Projects', href: '#projects' },
                { name: 'Technical Skills Matrix', href: '#skills' },
                { name: 'Developer CLI Terminal', href: '#terminal' },
                { name: 'Contact & Inquiries', href: '#contact' },
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-cyan-500/60 font-mono">&gt;</span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social and Connect column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold">
              Connect & Source
            </h4>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              Available for contract roles, technical leadership, and interactive product ventures.
            </p>

            <div className="flex items-center gap-2 pt-1">
              {[
                { icon: <GithubIcon className="w-4 h-4" />, href: personalInfo.socials.github, label: "GitHub" },
                { icon: <LinkedinIcon className="w-4 h-4" />, href: personalInfo.socials.linkedin, label: "LinkedIn" },
                { icon: <TwitterIcon className="w-4 h-4" />, href: personalInfo.socials.twitter, label: "Twitter" },
              ].map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-slate-800 transition-all hover:scale-110"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-[11px] font-mono text-slate-400">
              <span className="text-emerald-400">● 100% Remote-Ready</span> • High Availability
            </div>
          </div>

        </div>

        {/* Bottom copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-slate-500">
            <span>© {new Date().getFullYear()} {personalInfo.name}. Engineered with React, Tailwind & Three.js.</span>
          </div>

          {/* Back to top rocket button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-all group cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
