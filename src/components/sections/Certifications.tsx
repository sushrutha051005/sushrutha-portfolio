import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, Building2, CheckCircle2 } from 'lucide-react';
import { certificationsData } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { fadeIn, staggerContainer } from '../../utils/animationVariants';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Credentials"
          title="Certifications & Internships"
          subtitle="Industry training and practical engineering experience completed during my academic tenure."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {certificationsData.map((item) => (
            <motion.div key={item.id} variants={fadeIn}>
              <Card className="h-full p-7 border hover:border-indigo-500/50">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <Award size={24} />
                  </div>
                  <Badge variant="cyan">{item.badgeText}</Badge>
                </div>

                <h3 className="text-xl font-bold text-slate-100 mb-2">{item.title}</h3>

                <div className="space-y-2 mb-6">
                  <p className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                    <Building2 size={16} className="text-indigo-400" />
                    <span>{item.organization}</span>
                  </p>
                  <p className="text-xs text-slate-400 font-mono flex items-center gap-2">
                    <Calendar size={14} className="text-slate-500" />
                    <span>Issued: {item.date}</span>
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <CheckCircle2 size={15} />
                  <span>Verified Internship Program</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
