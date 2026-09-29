import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animationVariants';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  badge,
  centered = true,
}) => {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center' : 'text-left'}`}
    >
      {badge && (
        <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 rounded-full border border-indigo-500/20">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto font-normal">
          {subtitle}
        </p>
      )}
      <div
        className={`h-1 w-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-full mt-4 ${
          centered ? 'mx-auto' : 'mr-auto'
        }`}
      />
    </motion.div>
  );
};
