import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Target, Lightbulb, GraduationCap, CheckCircle2 } from 'lucide-react';
import { personalData } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { fadeIn, staggerContainer } from '../../utils/animationVariants';

export const About: React.FC = () => {
  const highlightIcons = [
    <Brain className="text-indigo-400" size={20} />,
    <Target className="text-cyan-400" size={20} />,
    <Lightbulb className="text-amber-400" size={20} />,
    <Code className="text-purple-400" size={20} />,
    <GraduationCap className="text-emerald-400" size={20} />,
  ];

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Background"
          title="About Me"
          subtitle="Passionate AI & Data Science Student focused on engineering intelligent systems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Summary Text Panel */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <Card className="p-8 sm:p-10">
              <h3 className="text-2xl font-bold text-slate-100 mb-4 flex items-center gap-3">
                <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <Brain size={24} />
                </span>
                Professional Summary
              </h3>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-8">
                {personalData.aboutText}
              </p>

              <div className="pt-6 border-t border-white/10">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
                  Core Focus Areas
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-indigo-400" />
                    <span>Machine Learning & Computer Vision</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-indigo-400" />
                    <span>Data Structures & Algorithmic Design</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-indigo-400" />
                    <span>Natural Language Processing (NLP)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-indigo-400" />
                    <span>Java & Python Enterprise Systems</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Key Highlights Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {personalData.highlights.map((item, index) => (
              <motion.div key={item} variants={fadeIn}>
                <div className="glass-panel p-5 rounded-2xl flex items-center gap-4 hover:border-indigo-500/40 transition-colors group">
                  <div className="p-3 rounded-xl bg-slate-800/80 group-hover:bg-indigo-500/20 transition-colors">
                    {highlightIcons[index % highlightIcons.length]}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
                      {item}
                    </h4>
                    <p className="text-xs text-slate-400">Key Pillar & Skillset</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
