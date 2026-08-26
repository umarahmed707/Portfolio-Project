import React, { useState, useRef, useEffect } from 'react';
import { Terminal, CornerDownLeft, Sparkles, RefreshCw, CheckCircle, Code } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, skillsData, projectsData } from '../data/portfolioData';

export default function InteractiveTerminal() {
  const [input, setInput] = useState('');
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState([]);
  const [output, setOutput] = useState([
    {
      type: 'system',
      text: '🚀 Welcome to Alex Rivera Terminal CLI v3.2.0 (x86_64-portfolio-kernel)',
    },
    {
      type: 'info',
      text: 'Type "help" to view available commands, or click the quick pills below.',
    },
  ]);

  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [output]);

  const handleCommand = (cmdStr) => {
    const rawCmd = cmdStr.trim();
    if (!rawCmd) return;

    const cmd = rawCmd.toLowerCase();
    setCommandHistory((prev) => [...prev, rawCmd]);
    setHistoryIndex(-1);

    const newOutputs = [...output, { type: 'command', text: rawCmd }];

    switch (cmd) {
      case 'help':
        newOutputs.push({
          type: 'info',
          text: `Available Commands:
  • help        - Display this command index
  • skills      - Output full engineering skill stack
  • projects    - List all featured case studies
  • about       - Overview of developer background
  • contact     - Retrieve email, phone & booking links
  • sudo hire   - Initiate priority onboarding sequence ⚡
  • clear       - Wipe terminal screen
  • whoami      - View current guest privileges`,
        });
        break;

      case 'skills':
        const skillsText = skillsData
          .map((s) => `[${s.category.padEnd(8)}] ${s.name.padEnd(16)} (Proficiency: ${s.level}%)`)
          .join('\n');
        newOutputs.push({
          type: 'result',
          text: `TECHNICAL SKILL MATRIX:\n${skillsText}`,
        });
        break;

      case 'projects':
        const projectsText = projectsData
          .map((p, i) => `${i + 1}. [${p.category}] ${p.title} -> ${p.tagline}`)
          .join('\n\n');
        newOutputs.push({
          type: 'result',
          text: `FEATURED REPOSITORIES & CASE STUDIES:\n${projectsText}`,
        });
        break;

      case 'about':
        newOutputs.push({
          type: 'result',
          text: `DEVELOPER PROFILE:\nName: ${personalInfo.name}\nRole: ${personalInfo.role}\nExperience: ${personalInfo.experienceYears}\nLocation: ${personalInfo.location}\nBio: ${personalInfo.shortBio}`,
        });
        break;

      case 'contact':
        newOutputs.push({
          type: 'result',
          text: `COMMUNICATION CHANNELS:\nEmail: ${personalInfo.email}\nPhone: ${personalInfo.phone}\nStatus: ${personalInfo.availability}\nGitHub: ${personalInfo.socials.github}`,
        });
        break;

      case 'sudo hire':
      case 'hire':
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00f2fe', '#7928ca', '#4facfe', '#10b981'],
        });
        newOutputs.push({
          type: 'success',
          text: `🎉 ACCESS GRANTED! High-priority recruitment sequence triggered!\nRedirecting your viewport to the direct contact channel...`,
        });
        setTimeout(() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }, 1200);
        break;

      case 'whoami':
        newOutputs.push({
          type: 'result',
          text: 'guest@alex-portfolio: Authorized Visitor [Role: Tech Recruiter / Client Partner]',
        });
        break;

      case 'clear':
        setOutput([]);
        setInput('');
        return;

      default:
        newOutputs.push({
          type: 'error',
          text: `command not found: "${rawCmd}". Type "help" for a list of valid commands.`,
        });
        break;
    }

    setOutput(newOutputs);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      if (commandHistory.length > 0) {
        const nextIdx = historyIndex + 1 < commandHistory.length ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIdx);
        setInput(commandHistory[commandHistory.length - 1 - nextIdx] || '');
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInput(commandHistory[commandHistory.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <section id="terminal" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background glow */}
      <div className="glow-orb-cyan top-1/2 left-1/3 -z-10 opacity-40" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Terminal className="w-3.5 h-3.5" />
            INTERACTIVE DEVELOPER CLI
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Prefer the Command Line? <span className="gradient-text-cyan-blue">Run Live Shell Commands</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Interact with the portfolio data through an in-browser Linux-style terminal simulator.
          </p>
        </div>

        {/* Terminal Window */}
        <div className="relative rounded-3xl overflow-hidden glass-panel border border-cyan-500/30 shadow-2xl shadow-cyan-950/50">
          
          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-950/90 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={() => setOutput([])} />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-mono text-slate-400">
                alex@portfolio-kernel:~ (bash)
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono text-cyan-400 hidden sm:inline">
                UTF-8 • 60Hz
              </span>
              <button
                onClick={() => setOutput([])}
                className="text-[11px] font-mono text-slate-500 hover:text-slate-300 transition-colors"
              >
                clear
              </button>
            </div>
          </div>

          {/* Quick Command Suggestion Bar */}
          <div className="px-4 py-2 bg-slate-950/50 border-b border-slate-800/80 flex flex-wrap items-center gap-1.5 text-xs font-mono">
            <span className="text-slate-500 text-[11px] mr-1">Quick Run:</span>
            {['help', 'skills', 'projects', 'about', 'contact', 'sudo hire', 'clear'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="px-2.5 py-1 rounded bg-slate-900 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 transition-colors"
              >
                ${cmd}
              </button>
            ))}
          </div>

          {/* Terminal Output Area */}
          <div
            className="p-5 sm:p-6 font-mono text-xs sm:text-sm h-80 sm:h-96 overflow-y-auto space-y-3 bg-[#050816]/95 select-text"
            onClick={() => inputRef.current?.focus()}
          >
            {output.map((item, idx) => (
              <div key={idx} className="leading-relaxed">
                {item.type === 'command' && (
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                    <span className="text-purple-400">guest@alex-portfolio:~$</span>
                    <span>{item.text}</span>
                  </div>
                )}
                {item.type === 'system' && (
                  <div className="text-cyan-300 font-bold">{item.text}</div>
                )}
                {item.type === 'info' && (
                  <pre className="text-slate-300 whitespace-pre-wrap font-mono">{item.text}</pre>
                )}
                {item.type === 'result' && (
                  <pre className="text-slate-200 whitespace-pre-wrap font-mono">{item.text}</pre>
                )}
                {item.type === 'success' && (
                  <pre className="text-emerald-400 whitespace-pre-wrap font-mono font-semibold">{item.text}</pre>
                )}
                {item.type === 'error' && (
                  <div className="text-red-400">{item.text}</div>
                )}
              </div>
            ))}

            {/* Current Input Prompt */}
            <div className="flex items-center gap-2 pt-1 text-cyan-400">
              <span className="text-purple-400 shrink-0">guest@alex-portfolio:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent text-white focus:outline-none font-mono caret-cyan-400 text-xs sm:text-sm"
                placeholder="type a command..."
                autoFocus
              />
            </div>

            <div ref={terminalEndRef} />
          </div>

        </div>

      </div>
    </section>
  );
}
