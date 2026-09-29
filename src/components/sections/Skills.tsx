import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Database, BookOpen, Wrench, Users, Languages, CheckCircle } from 'lucide-react';
import { skillCategoriesData } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { fadeIn, staggerContainer } from '../../utils/animationVariants';

export const Skills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming':
        return <Code size={22} className="text-indigo-400" />;
      case 'Web':
        return <Globe size={22} className="text-cyan-400" />;
      case 'Database':
        return <Database size={22} className="text-purple-400" />;
      case 'Core Subjects':
        return <BookOpen size={22} className="text-amber-400" />;
      case 'Tools':
        return <Wrench size={22} className="text-emerald-400" />;
      case 'Soft Skills':
        return <Users size={22} className="text-pink-400" />;
      case 'Languages':
        return <Languages size={22} className="text-blue-400" />;
      default:
        return <Code size={22} className="text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Expertise"
          title="Technical & Core Skills"
          subtitle="A comprehensive overview of programming languages, frameworks, core subjects, and soft skills."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategoriesData.map((cat) => (
            <motion.div key={cat.category} variants={fadeIn}>
              <Card className="h-full p-6 sm:p-7">
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-white/10">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-white/10">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-100">{cat.category}</h3>
                    <p className="text-xs text-slate-400">{cat.skills.length} Competencies</p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.04, y: -2 }}
                      className="glass-panel px-3.5 py-2 rounded-xl flex items-center gap-2 border border-white/10 hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all cursor-default"
                    >
                      <CheckCircle size={14} className="text-indigo-400" />
                      <span className="text-xs font-semibold text-slate-200">{skill.name}</span>
                      {skill.level && (
                        <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-1.5 py-0.5 rounded">
                          {skill.level}
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
