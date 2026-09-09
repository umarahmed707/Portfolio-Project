import React, { useState } from 'react';
import { 
  User, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Download, 
  CheckCircle2, 
  Code, 
  Sparkles, 
  Terminal, 
  ExternalLink,
  Cpu,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { personalInfo, educationData } from '../data/portfolioData';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('story'); // 'story', 'philosophy', 'education'
const downloadCV = () => {
  const link = document.createElement("a");
  link.href = cv;
  link.download = "Umar-Ahmed.pdf";
  link.click();
};
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="glow-orb-purple top-1/3 -left-20 -z-10 opacity-70" />
      <div className="glow-orb-cyan bottom-10 right-0 -z-10 opacity-60" />

      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono">
            <User className="w-3.5 h-3.5" />
            ABOUT THE ARCHITECT
          </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
  React.js Developer Building{" "}
  <span className="gradient-text-purple-pink">
    Modern Web & AI Experiences
  </span>
</h2>
    
<p className="text-slate-400 text-base sm:text-lg">
  Explore my journey as a developer, technical expertise, and passion for building modern web applications, scalable backend systems, and AI-powered experiences using <strong>React.js, Next.js, Express.js, PostgreSQL, Firebase, and Firestore</strong>.
</p>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Holographic 3D Profile Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer Neon Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 opacity-30 group-hover:opacity-60 blur-xl transition duration-500" />
              
              <div className="relative glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 space-y-6 shadow-2xl">
                {/* Profile Header Image/Graphic */}
                <div className="relative rounded-2xl overflow-hidden aspect-square max-w-[280px] mx-auto bg-gradient-to-br from-slate-900 via-[#0d1430] to-cyan-950/60 border border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-400 transition-colors">
                  {/* Holographic grid background */}
                  <div className="absolute inset-0 cyber-dots opacity-40" />
                  
                  {/* Abstract Avatar Visual with Glowing Core */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-28 h-28 rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-1 shadow-neon-cyan/40 animate-float">
                      <div className="w-full h-full rounded-[14px] bg-slate-950 flex items-center justify-center">
                        <Cpu className="w-14 h-14 text-cyan-300" />
                      </div>
                    </div>
                    <div className="mt-4 px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-500/40 text-[11px] font-mono text-cyan-300 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                      MERN Stack Developer
                    </div>
                  </div>

                  {/* Corner Tech Badges */}
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-slate-950/80 border border-white/10 text-[10px] font-mono text-slate-300">
                    LVL. 50
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-slate-950/80 border border-cyan-500/30 text-[10px] font-mono text-cyan-300">
                    EXPERIENCE: 1+ YRS
                  </div>
                </div>

                {/* Developer Info Summary */}
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-display font-bold text-white">
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400">
                    {personalInfo.role}
                  </p>
                  <p className="text-xs text-slate-400 flex items-center justify-center gap-1.5 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-pink-400" />
                    {personalInfo.location}
                  </p>
                </div>

                <div className="h-px bg-slate-800" />

                {/* Core Strengths Checklist */}
                <div className="space-y-2.5">
                  {[
                    "Interactive 3D GSAP Animation",
                    "React 18 & Next.js Architecture",
                    "Express.js & REST API Engineering",
                    "PostgreSQL & Firebase Cloud Datastores",
                    "Tailwind CSS Precision & Responsive Systems",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Action Resume Button */}
                <button
                  onClick={downloadCV}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold text-xs tracking-wide transition-all shadow-neon-purple/20 flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                Download Resume
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Tabs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tabs Navigation */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800">
              {[
                { id: 'story', label: 'My Developer Journey', icon: <Briefcase className="w-4 h-4" /> },
                { id: 'philosophy', label: 'Engineering Philosophy', icon: <Zap className="w-4 h-4" /> },
                { id: 'education', label: 'Education & Honors', icon: <GraduationCap className="w-4 h-4" /> },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab.icon}
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab 1: My Story */}
            {activeTab === 'story' && (
              <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 space-y-5 animate-in fade-in duration-300">
                <h4 className="text-xl font-display font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  Transforming Ideas into High-Impact Digital Realities
                </h4>
                
                {personalInfo.aboutText.map((paragraph, idx) => (
                  <p key={idx} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-1">
                    <div className="text-xs font-mono text-cyan-400 uppercase">Focus Areas</div>
                    <div className="text-sm font-semibold text-white">React.js, Next.js, AI Assistants</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-1">
                    <div className="text-xs font-mono text-purple-400 uppercase">Tech Stack</div>
                    <div className="text-sm font-semibold text-white">Express.js, PostgreSQL, Firebase</div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Engineering Philosophy */}
            {activeTab === 'philosophy' && (
              <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 space-y-5 animate-in fade-in duration-300">
                <h4 className="text-xl font-display font-bold text-white flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-purple-400" />
                  Architectural Principles & Performance Standards
                </h4>

                
<div className="grid grid-cols-1 gap-4 pt-2">
  {[
    {
      title: "1. Modern Frontend Development",
      desc: "Building responsive, interactive, and user-friendly interfaces with React.js, Next.js, HTML5, CSS3, Tailwind CSS, and GSAP."
    },
    {
      title: "2. Clean & Maintainable Code",
      desc: "Creating reusable React components, structured project architectures, and clean code that is easy to maintain, scale, and improve."
    },
    {
      title: "3. Scalable Backend & APIs",
      desc: "Developing reliable REST APIs and backend systems with Express.js, connecting applications with PostgreSQL and Firebase for efficient data management."
    },
    {
      title: "4. AI-Powered Experiences",
      desc: "Exploring and integrating AI-powered assistants into modern web applications to create smarter, more interactive, and useful digital experiences."
    }
  ].map((p, idx) => (
    <div
      key={idx}
      className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-1 hover:border-cyan-500/30 transition-colors"
    >
      <div className="text-sm font-bold text-cyan-300 font-display">
        {p.title}
      </div>
      <div className="text-xs text-slate-400 leading-relaxed">
        {p.desc}
      </div>
    </div>
  ))}
</div>


              </div>
            )}

            {/* Tab 3: Education & Honors */}
            {activeTab === 'education' && (
              <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 space-y-5 animate-in fade-in duration-300">
                <h4 className="text-xl font-display font-bold text-white flex items-center gap-2">
                  <Award className="w-5 h-5 text-emerald-400" />
                  Education & Technical Certifications
                </h4>

                <div className="space-y-4 pt-2">
                  {educationData.map((edu, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h5 className="text-base font-bold text-white font-display">{edu.degree}</h5>
                        <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
                          {edu.year}
                        </span>
                      </div>
                      <div className="text-xs font-medium text-purple-300">{edu.institution}</div>
                      <p className="text-xs text-slate-400">{edu.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
