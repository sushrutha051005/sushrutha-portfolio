import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import { educationData } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { fadeIn, staggerContainer } from '../../utils/animationVariants';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative z-10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Academics"
          title="Education Timeline"
          subtitle="My academic journey in engineering, mathematics, and foundational science."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500 transform -translate-x-1/2 hidden md:block opacity-40" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {educationData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  variants={fadeIn}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Point Icon */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-20 w-10 h-10 rounded-full bg-[#0a0d14] border-2 border-indigo-500 flex items-center justify-center text-indigo-400 shadow-lg shadow-indigo-500/30">
                    <GraduationCap size={18} />
                  </div>

                  {/* Card Container */}
                  <div className="w-full md:w-[calc(50%-2.5rem)] ml-12 md:ml-0">
                    <Card className="p-6 sm:p-8">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant={item.status === 'In Progress' ? 'indigo' : 'emerald'}>
                          {item.status}
                        </Badge>
                        <span className="flex items-center gap-1 text-xs font-mono text-slate-400">
                          <Calendar size={13} />
                          {item.period}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-100 mt-2">{item.degree}</h3>
                      <h4 className="text-sm font-semibold text-indigo-400 mt-1 flex items-center gap-1.5">
                        <BookOpen size={14} />
                        {item.institution}
                      </h4>
                      <p className="text-xs text-slate-300 font-mono mt-1">{item.field}</p>

                      <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                        <span className="text-xs text-slate-400">Academic Standing</span>
                        <div className="flex items-center gap-1 text-emerald-400 font-extrabold text-sm bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                          <Award size={14} />
                          <span>
                            {item.scoreLabel}: {item.scoreValue}
                          </span>
                        </div>
                      </div>

                      {item.description && (
                        <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
