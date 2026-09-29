import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalData } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#07090f] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div>
            <h3 className="text-xl font-bold text-slate-100 mb-2">
              Alamuru Sai Sushrutha
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Artificial Intelligence & Data Science Student dedicated to building scalable software, ML systems, and continuous technology growth.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-2">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
              <a href="#hero" className="hover:text-indigo-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-indigo-400 transition-colors">About Me</a>
              <a href="#education" className="hover:text-indigo-400 transition-colors">Education</a>
              <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
              <a href="#certifications" className="hover:text-indigo-400 transition-colors">Certifications</a>
              <a href="#github" className="hover:text-indigo-400 transition-colors">GitHub Dashboard</a>
              <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-1">
              Connect With Me
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={personalData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-panel text-slate-300 hover:text-white hover:bg-white/10 hover:border-indigo-500/40 transition-all"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href={personalData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-panel text-slate-300 hover:text-indigo-400 hover:bg-white/10 hover:border-indigo-500/40 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${personalData.email}`}
                className="p-3 rounded-xl glass-panel text-slate-300 hover:text-cyan-400 hover:bg-white/10 hover:border-cyan-500/40 transition-all"
                aria-label="Send Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} Alamuru Sai Sushrutha. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart size={14} className="text-red-500 fill-red-500 inline" /> using React, TypeScript & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};
