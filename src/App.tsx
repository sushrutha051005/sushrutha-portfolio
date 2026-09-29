import React from 'react';
import { useTheme } from './hooks/useTheme';
import { ParticleBackground } from './components/ui/ParticleBackground';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Education } from './components/sections/Education';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Certifications } from './components/sections/Certifications';
import { Achievement } from './components/sections/Achievement';
import { CurrentlyLearning } from './components/sections/CurrentlyLearning';
import { GithubDashboard } from './components/sections/GithubDashboard';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { BackToTop } from './components/ui/BackToTop';

export function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-[#0a0d14] text-slate-100 selection:bg-indigo-500 selection:text-white relative">
      {/* Scroll Progress Line */}
      <ScrollProgress />

      {/* Dynamic Interactive Particle Grid Canvas */}
      <ParticleBackground />

      {/* Navigation Header */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Achievement />
        <CurrentlyLearning />
        <GithubDashboard />
        <Contact />
      </main>

      {/* Footer & Back to top button */}
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
