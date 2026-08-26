import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Canvas3DBackground from './components/Canvas3DBackground';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
// import InteractiveTerminal from './components/InteractiveTerminal';
import ExperienceSection from './components/ExperienceSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedServiceForContact, setSelectedServiceForContact] = useState('');

  return (
    <div className="min-h-screen bg-[#05070f] text-slate-100 selection:bg-cyan-500 selection:text-black relative overflow-x-hidden">
      {/* 3D WebGL Background Starfield & Floating Polyhedrons */}
      <Canvas3DBackground />

      {/* Cyber Grid Background Overlay */}
      <div className="fixed inset-0 cyber-grid opacity-30 pointer-events-none z-0" />

      {/* Main Navigation Header */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-4">
        {/* 1. Hero Section with 3D Canvas */}
        <HeroSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* 2. About & Philosophy Section */}
        <AboutSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* 3. Services & Specializations */}
        <ServicesSection onSelectService={(service) => setSelectedServiceForContact(service)} />

        {/* 4. Portfolio Projects & Interactive Case Studies */}
        <ProjectsSection />

        {/* 5. Technical Skills Matrix */}
        <SkillsSection />

        {/* 6. In-Browser Developer CLI Terminal */}
        {/* <InteractiveTerminal /> */}

        {/* 7. Work Experience Timeline */}
        <ExperienceSection />

        {/* 8. Testimonials & Client Reviews */}
        <TestimonialsSection />

        {/* 9. Contact & Collaboration */}
        <ContactSection selectedService={selectedServiceForContact} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
