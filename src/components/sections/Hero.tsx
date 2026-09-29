import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Code2, Sparkles, Cpu, Bot } from 'lucide-react';
import { personalData } from '../../data/portfolioData';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import { Button } from '../ui/Button';
import { GlowingBlob } from '../ui/GlowingBlob';
import { fadeIn, staggerContainer } from '../../utils/animationVariants';

export const Hero: React.FC = () => {
  const typedText = useTypingEffect(personalData.typingRoles, 90, 45, 1800);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Gradient Blobs */}
      <GlowingBlob top="10%" left="5%" color="from-indigo-600/30 to-purple-600/30" size="w-[500px] h-[500px]" />
      <GlowingBlob bottom="10%" right="5%" color="from-cyan-600/25 to-blue-600/25" size="w-[450px] h-[450px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & CTA */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-left"
          >
            {/* Status Badge */}
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-indigo-500/30 mb-6 shadow-sm">
              <Sparkles size={16} className="text-amber-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-slate-200">
                Seeking Software & AI Engineering Internships
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeIn}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-100 mb-4 leading-tight"
            >
              Hi, I'm <br />
              <span className="text-gradient">{personalData.name}</span>
            </motion.h1>

            {/* Title & Rotating Role */}
            <motion.div variants={fadeIn} className="text-xl sm:text-2xl font-bold text-slate-300 mb-6 flex flex-wrap items-center gap-2 min-h-[3rem]">
              <span className="text-slate-400 font-normal">I am a</span>
              <span className="px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-mono">
                {typedText}
                <span className="animate-pulse font-bold text-indigo-400">|</span>
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={fadeIn}
              className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mb-8 font-normal"
            >
              "{personalData.tagline}"
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={fadeIn} className="flex flex-wrap items-center gap-4 mb-10">
              <a href="#projects">
                <Button variant="primary" size="lg" icon={<ArrowRight size={18} />}>
                  View Projects
                </Button>
              </a>
              <a href="#contact">
                <Button variant="glass" size="lg">
                  Contact Me
                </Button>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeIn} className="flex items-center gap-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Connect:
              </span>
              <a
                href={personalData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-indigo-500/50 hover:scale-110 transition-all shadow-md"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href={personalData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-panel text-slate-300 hover:text-indigo-400 hover:border-indigo-500/50 hover:scale-110 transition-all shadow-md"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${personalData.email}`}
                className="p-3 rounded-xl glass-panel text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:scale-110 transition-all shadow-md"
                aria-label="Send Email"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Futuristic Vector Artwork (Floating Glass Graphics) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square rounded-3xl glass-panel p-8 flex flex-col justify-between border border-white/15 shadow-2xl overflow-hidden group">
              {/* Inner glowing mesh gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-purple-600/10 to-cyan-500/10 opacity-70 group-hover:opacity-100 transition-opacity" />

              {/* Floating Code Header Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="glass-panel p-4 rounded-2xl border border-white/10 flex items-center gap-3 relative z-10 shadow-lg"
              >
                <div className="p-3 rounded-xl bg-indigo-500/20 text-indigo-400">
                  <Code2 size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-200 font-mono">Java & Python Dev</h4>
                  <p className="text-xs text-slate-400">Data Structures & AI Logic</p>
                </div>
              </motion.div>

              {/* Central Vector Neural Graphic */}
              <div className="relative z-10 my-6 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 p-1 animate-spin-slow shadow-2xl shadow-indigo-500/50 flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-[#0a0d14] flex items-center justify-center">
                    <Cpu size={52} className="text-indigo-400 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Floating AI Card */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="glass-panel p-4 rounded-2xl border border-white/10 flex items-center gap-3 relative z-10 shadow-lg"
              >
                <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-400">
                  <Bot size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-200">AI & Computer Vision</h4>
                  <p className="text-xs text-slate-400">NLP & Image Processing Systems</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
