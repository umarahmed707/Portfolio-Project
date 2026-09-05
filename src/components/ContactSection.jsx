import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  Sparkles,
  MessageSquare,
  Clock,
  ShieldCheck,
  Calendar
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import emailjs from "@emailjs/browser";
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection({ selectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: selectedService ? `Inquiry regarding ${selectedService}` : '',
    budget: '$5,000 - $15,000',
    message: '',
  });

  const [copiedField, setCopiedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({
        ...prev,
        subject: `Inquiry regarding ${selectedService}`,
      }));
    }
  }, [selectedService]);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Send form data to your email
      await emailjs.send(
        "service_h6m2y7s",
        "template_o3its84",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          budget: formData.budget,
          message: formData.message,
        },
        "UWU8kptZU6kP9MWhX"
      );

      // Small delay for UI effect
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);

        // Trigger Confetti Celebration
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#00f2fe', '#7928ca', '#4facfe', '#10b981'],
        });
      }, 1200);

    } catch (error) {
      console.error("Email sending failed:", error);

      setIsSubmitting(false);
      setErrorMessage(
        'Unable to send your message. Please try again later.'
      );
    }
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Glow Orbs */}
      <div className="glow-orb-purple top-1/4 -right-10 -z-10 opacity-50" />
      <div className="glow-orb-cyan bottom-10 left-10 -z-10 opacity-50" />

      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Mail className="w-3.5 h-3.5" />
            INITIATE COLLABORATION
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Let's Build Something <span className="gradient-text-shimmer">Extraordinary</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Have a project in mind, an architectural challenge, or looking to augment your engineering team? Let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">

            {/* Status & Availability Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                CURRENT STATUS
              </div>
              <h3 className="text-xl font-display font-bold text-white">
                {personalInfo.availability}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                Ready for high-impact full-stack development, 3D interactive features, complex web applications, and architectural consulting.
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs text-slate-400 font-mono">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Typical response time: &lt; 4 hours</span>
              </div>
            </div>

            {/* Direct Contact Methods */}
            <div className="space-y-3">

              {/* Email Card with Copy */}
              <div className="glass-panel rounded-2xl p-4 border border-white/10 flex items-center justify-between group hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">DIRECT EMAIL</div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-300 border border-slate-800 transition-all cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone Card with Copy */}
              <div className="glass-panel rounded-2xl p-4 border border-white/10 flex items-center justify-between group hover:border-purple-500/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-purple-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">DIRECT PHONE / WHATSAPP</div>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-sm font-semibold text-white hover:text-purple-300 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-purple-300 border border-slate-800 transition-all cursor-pointer"
                  title="Copy phone to clipboard"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="glass-panel rounded-2xl p-4 border border-white/10 flex items-center gap-3">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-pink-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">LOCATION & TIMEZONE</div>
                  <div className="text-sm font-semibold text-white">{personalInfo.location}</div>
                </div>
              </div>

            </div>

            {/* Social Matrix */}
            <div className="glass-panel rounded-2xl p-5 border border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">Social Profiles:</span>
              <div className="flex items-center gap-2">
                {[
                  { icon: <GithubIcon className="w-4 h-4" />, href: personalInfo.socials.github, name: "https://github.com/umarahmed707?tab=repositories" },
                  { icon: <LinkedinIcon className="w-4 h-4" />, href: personalInfo.socials.linkedin, name: "https://www.linkedin.com/in/umarahmedansari/" },
                
                ].map((s, idx) => (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-all hover:scale-110"
                    title={s.name}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Glassmorphic Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/15 relative shadow-2xl">

              {isSubmitted ? (
                /* Success State Screen */
                <div className="text-center py-12 space-y-5 animate-in zoom-in-95 duration-300">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center mx-auto shadow-neon-emerald">
                    <Check className="w-10 h-10 text-emerald-400" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-display font-bold text-white">
                      Message Dispatched Successfully!
                    </h3>
                    <p className="text-slate-300 text-sm max-w-md mx-auto">
                      Thank you for reaching out, <strong className="text-cyan-300">{formData.name}</strong>. I will review your project requirements and respond within 4 hours.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        subject: '',
                        budget: '$5,000 - $15,000',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                /* Active Contact Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                      Send a Direct Message
                    </h3>
                    <span className="text-xs font-mono text-cyan-400">
                      Encrypted Pipeline
                    </span>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/50 text-red-300 text-xs font-mono">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 flex items-center justify-between">
                        <span>Your Name *</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Elon Musk"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="elon@x.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Subject / Service */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">
                        Subject / Topic
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="3D E-Commerce Platform Development"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm transition-colors"
                      />
                    </div>

                    {/* Estimated Budget */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">
                        Estimated Scope / Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-cyan-400 text-sm transition-colors"
                      >
                        <option value="Under $500">Under $500 (Small Task / Consultation)</option><option value="$500 - $1,500">$500 - $1,500 (Landing Page / Small Website)</option>
                        <option value="$1,500 - $3,000"> $1,500 - $3,000 (Business Website / Web App)  </option>
                        <option value="$3,000 - $5,000"> $3,000 - $5,000 (Advanced Web Application)</option>
                        <option value="$5,000+"> $5,000+ (Custom / Large-Scale Project)</option>
                        <option value="Full-Time Role">Full-Time / Contract Role</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">
                      Project Details & Vision *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your goals, timelines, desired tech stack, and any references..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Action */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-neon-cyan/50 hover:shadow-neon-cyan hover:scale-[1.01] active:scale-98 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        Transmitting Message...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Dispatch Project Inquiry
                      </span>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-slate-400 text-center">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Your contact details are strictly confidential. Zero spam guaranteed.</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
