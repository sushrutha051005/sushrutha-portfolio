import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Compass } from 'lucide-react';
import { learningBadges } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { fadeIn, staggerContainer } from '../../utils/animationVariants';

export const CurrentlyLearning: React.FC = () => {
  return (
    <section id="learning" className="py-16 relative z-10 bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading
          badge="Continuous Improvement"
          title="Currently Learning"
          subtitle="Technologies and paradigms I am actively mastering to expand my engineering capabilities."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          {learningBadges.map((badge, idx) => (
            <motion.div
              key={badge}
              variants={fadeIn}
              whileHover={{ scale: 1.08, y: -4 }}
              className="glass-panel px-6 py-3.5 rounded-2xl flex items-center gap-3 border border-indigo-500/30 hover:border-indigo-400 hover:bg-indigo-500/10 shadow-lg shadow-indigo-500/10 transition-all cursor-default group"
            >
              <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400 group-hover:scale-110 transition-transform">
                {idx % 2 === 0 ? <Sparkles size={16} /> : <Compass size={16} />}
              </div>
              <span className="text-sm font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
                {badge}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
