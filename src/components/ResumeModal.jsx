import React, { useEffect } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo, skillsData, experienceData, educationData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKey);
    }
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const content = `
${personalInfo.name} - ${personalInfo.role}
Location: ${personalInfo.location}
Email: ${personalInfo.email} | Phone: ${personalInfo.phone}
Portfolio: https://alexrivera.dev | GitHub: ${personalInfo.socials.github}

SUMMARY
${personalInfo.shortBio}

TECHNICAL SKILLS
- Frontend: React.js, Next.js, HTML5, CSS3, JavaScript ES6+, Tailwind CSS, GSAP, Three.js
- Backend: Express.js, PHP, RESTful APIs
- Databases: PostgreSQL, SQL, Firebase Firestore
- Tools: Git, Docker, Postman, Vite, Redux/Zustand

EXPERIENCE
${experienceData.map(e => `${e.role} @ ${e.company} (${e.period})\n- ${e.description}\n- Achievements: ${e.achievements.join('; ')}\n`).join('\n')}

EDUCATION
${educationData.map(ed => `${ed.degree} - ${ed.institution} (${ed.year})`).join('\n')}
    `.trim();

    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `Resume-${personalInfo.name.replace(' ', '_')}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-3xl glass-panel rounded-3xl border border-white/20 shadow-2xl overflow-hidden z-10 my-8">
        
        {/* Header Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-950/80">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono">
              CURRICULUM VITAE
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={handleDownload}
              className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-neon-cyan/30 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              Download CV
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors ml-2 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-6 sm:p-10 space-y-8 max-h-[75vh] overflow-y-auto bg-[#0a0e24]/90 select-text">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 space-y-3">
            <h2 className="text-3xl font-display font-extrabold text-white">
              {personalInfo.name}
            </h2>
            <div className="text-sm font-mono text-cyan-400 font-medium">
              {personalInfo.role}
            </div>

            <div className="flex flex-wrap gap-4 text-xs text-slate-300 pt-1">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {personalInfo.email}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-purple-400" />
                {personalInfo.phone}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-pink-400" />
                {personalInfo.location}
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
              Professional Summary
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {personalInfo.shortBio}
            </p>
          </div>

          {/* Core Technical Arsenal */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
              Technical Skill Matrix
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                <span className="font-mono text-cyan-300 font-bold">Frontend:</span>
                <p className="text-slate-300 font-mono">
                  React.js, Next.js, HTML5, CSS3, JavaScript (ES6+), Tailwind CSS, GSAP 3, Three.js WebGL
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                <span className="font-mono text-purple-300 font-bold">Backend & DB:</span>
                <p className="text-slate-300 font-mono">
                  Express.js, PHP, REST APIs, PostgreSQL, SQL, Firebase Firestore, Cloud Auth
                </p>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
              Professional Experience
            </h3>

            <div className="space-y-6">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <span className="text-sm font-bold text-white">
                      {exp.role} — <span className="text-purple-300">{exp.company}</span>
                    </span>
                    <span className="text-xs font-mono text-cyan-400">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">{exp.description}</p>
                  <ul className="space-y-1 text-xs text-slate-400">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2">
                        <span className="text-cyan-400">•</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
              Education & Specializations
            </h3>
            <div className="space-y-2">
              {educationData.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start text-xs">
                  <div>
                    <span className="font-bold text-white">{edu.degree}</span>
                    <div className="text-slate-400">{edu.institution}</div>
                  </div>
                  <span className="font-mono text-cyan-400">{edu.year}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-slate-950/80 flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>{personalInfo.name} • Certified Full-Stack 3D Web Creative</span>
          <button
            onClick={onClose}
            className="text-cyan-400 hover:underline cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
