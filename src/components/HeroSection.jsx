import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Sparkles,

  Download,

  Zap,
  FolderCheck,
  Briefcase,
  Smile,
  GitCommit
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import pic from '../assets/My-pic.png'
import { personalInfo } from '../data/portfolioData';
// import Hero3DCanvas from './Hero3DCanvas';

export default function HeroSection({ onOpenResume }) {
  const [typingIndex, setTypingIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Full-Stack Web Developer",
    "React & Next.js Developer",
    "3D Web Experience Creator",
    "PostgreSQL & API Developer",
    "Modern UI/UX Developer"
  ];

  useEffect(() => {
    const currentRole = roles[typingIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayedText === currentRole) {
      typingSpeed = 2000;
      const timeout = setTimeout(() => setIsDeleting(true), typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setTypingIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting
          ? currentRole.substring(0, prev.length - 1)
          : currentRole.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, typingIndex]);

  const statIcons = {
    FolderCheck: <FolderCheck className="w-5 h-5 text-cyan-400" />,
    Briefcase: <Briefcase className="w-5 h-5 text-purple-400" />,
    Smile: <Smile className="w-5 h-5 text-pink-400" />,
    GitCommit: <GitCommit className="w-5 h-5 text-emerald-400" />,
  };

  return (
    <section
      id="home"
      className="relative pt-20 lg:pt-40 flex flex-col justify-center overflow-hidden"
    >
      {/* Background Ambient Glow Orbs */}
      <div className="glow-orb-cyan top-10 left-1/4 -translate-x-1/2 z-10" />
      <div className="glow-orb-purple bottom-10 right-10 -z-10" />

      <div className="max-w-[1600px] mx-auto px-7 sm:px-6 lg:px-15 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 z-10 text-center lg:text-left">

            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-md shadow-neon-cyan/20">
              <Zap className="w-4 h-4 text-cyan-400 animate-bounce" />
              <span className="text-xs font-mono font-semibold tracking-wide text-cyan-300">
                ULTRA-MODERN 3D WEB ENGINEERING
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I'm <span className="gradient-text-shimmer">{personalInfo.name}</span>
              </h1>
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start text-xl sm:text-2xl md:text-3xl font-mono font-semibold text-slate-200">
                <span className="text-cyan-400 mr-2">{">"}</span>
                <span>{displayedText}</span>
                <span className="w-2.5 h-6 sm:h-7 bg-cyan-400 ml-1 animate-pulse" />
              </div>
            </div>

            {/* Descriptive Summary */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Building modern, interactive web experiences with <strong>React.js, Next.js</strong>, and AI-powered <strong>Assistants</strong>, backed by scalable APIs and databases using <strong>Express.js, PostgreSQL, Firebase, and Firestore</strong>.
            </p>

            {/* Tech Stack Chips Bar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              {[
                
                  'HTML5',
                  'CSS3',
                  'JavaScript',
                  'React.js',
                  'Next.js',
                  'Tailwind CSS',
                  'GSAP',
                  'Express.js',
                  'PostgreSQL',
                  'Firebase',
                  'Firestore',
                  'REST API',
                  'AI Assistants',
                
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900/80 border border-slate-700/60 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              {/* Primary Explore Projects */}
              <a
                href="#projects"
                className="group relative px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-slate-950 font-bold text-sm tracking-wide transition-all duration-300 hover:shadow-neon-cyan hover:scale-[1.03] active:scale-95 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Explore Showcase</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Contact Button */}
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl glass-panel text-slate-200 hover:text-white hover:border-cyan-400/50 font-semibold text-sm transition-all duration-300 hover:shadow-neon-cyan/20 flex items-center gap-2"
              >
                <span>Let's Build Together</span>
              </a>

              {/* Resume Trigger */}
              <button
                onClick={onOpenResume}
                className="p-3.5 rounded-xl glass-panel text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors"
                title="Download CV / Resume"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>

            {/* Social Links Dock */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-3">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest mr-2">
                Connect:
              </span>
              {[
                { icon: <GithubIcon className="w-4 h-4" />, href: personalInfo.socials.github, label: "https://github.com/umarahmed707?tab=repositories" },
                { icon: <LinkedinIcon className="w-4 h-4" />, href: personalInfo.socials.linkedin, label: "https://www.linkedin.com/in/umarahmedansari/" },
                // { icon: <TwitterIcon className="w-4 h-4" />, href: personalInfo.socials.twitter, label: "Twitter" },
              ].map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all hover:scale-110"
                >
                  {s.icon}
                </a>
              ))}

            </div>

          </div>




          {/* Bottom Quick Stats Row */}
          {/* <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {personalInfo.stats.map((stat, i) => (
            <div
              key={i}
              className="glass-panel glass-panel-hover rounded-2xl p-5 border border-white/10 flex items-center gap-4 group"
            >
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 group-hover:border-cyan-500/40 group-hover:bg-cyan-950/30 transition-colors">
                {statIcons[stat.icon]}
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-slate-400 font-sans">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>  */}<div className="lg:col-span-5 relative flex items-center justify-center">

            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-cyan-500/20 to-purple-600/20 blur-3xl -z-10" />


            <div className="w-full max-w-xl relative glass-panel rounded-3xl border border-white/10 p-2 sm:p-4 shadow-glass overflow-hidden">


              <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />

                  <span className="ml-2 text-[11px] text-slate-400 hidden sm:inline">
                    umar-ahmed.dev
                  </span>
                </div>

                <span className="text-cyan-400 text-[10px]">
                  FRONTEND.DEV
                </span>
              </div>


              <div className="relative mt-3 rounded-2xl overflow-hidden bg-slate-950/70 border border-white/10">


                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-transparent to-purple-500/10 pointer-events-none z-10" />


                <div
                  className="absolute inset-0 opacity-20 pointer-events-none z-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(34,211,238,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.15) 1px, transparent 1px)",
                    backgroundSize: "35px 35px",
                  }}
                />


                <img
                  src={pic}
                  alt="Umar Ahmed - React.js Frontend Developer"
                  className="w-full h-[420px] sm:h-[500px] object-cover object-center transition-transform duration-700 hover:scale-105"
                />

                {/* Bottom Gradient */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/90 to-transparent z-20" />

                {/* Developer Info */}
                <div className="absolute bottom-5 left-5 right-5 z-30">
                  <div className="flex items-end justify-between">

                    <div>
                      <p className="text-cyan-400 text-xs font-mono mb-1">
                        &lt;developer /&gt;
                      </p>

                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        Umar Ahmed
                      </h3>

                      <p className="text-sm text-slate-300">
                        MERN Stack Developer
                      </p>
                    </div>

                    {/* Status */}
                    <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-cyan-400/20 backdrop-blur-md">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] font-mono text-slate-300">
                        AVAILABLE
                      </span>
                    </div>

                  </div>
                </div>
              </div>

              {/* Bottom HUD */}
              <div className="flex items-center justify-between px-3 pt-3 text-[10px] font-mono text-slate-500">
                <span>REACT.JS</span>

                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>ONLINE</span>
                </div>

                <span>6+ MONTHS</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
