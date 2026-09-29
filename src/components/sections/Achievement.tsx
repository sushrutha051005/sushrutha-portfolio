import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, FileText, Sparkles, Star } from 'lucide-react';
import { achievementData } from '../../data/portfolioData';
import { Card } from '../ui/Card';
import { fadeIn } from '../../utils/animationVariants';

export const Achievement: React.FC = () => {
  return (
    <section id="achievement" className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 sm:p-10 relative overflow-hidden bg-gradient-to-r from-indigo-950/60 via-purple-950/40 to-slate-900/80 border-2 border-indigo-500/40 shadow-2xl shadow-indigo-500/20">
            {/* Ambient Background Glow */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 relative z-10">
              {/* Highlight Trophy Icon */}
              <div className="p-4 rounded-2xl bg-gradient-to-tr from-amber-500 to-indigo-600 text-white shadow-lg shrink-0">
                <Trophy size={36} />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30">
                    <Sparkles size={13} />
                    {achievementData.title}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {achievementData.conference}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-3 flex items-center gap-2">
                  <FileText className="text-indigo-400 inline" size={24} />
                  <span>"{achievementData.subTitle}"</span>
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {achievementData.description}
                </p>
              </div>

              <div className="shrink-0 flex items-center justify-center p-3 rounded-full bg-white/5 border border-white/10 text-amber-400 hidden lg:flex">
                <Star size={24} className="fill-amber-400" />
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
