import React from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, GitCommit, Code, ExternalLink, Activity } from 'lucide-react';
import { githubDashboardData, personalData } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { fadeIn, staggerContainer } from '../../utils/animationVariants';

export const GithubDashboard: React.FC = () => {
  return (
    <section id="github" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Open Source Analytics"
          title="GitHub Developer Dashboard"
          subtitle="Real-time open source metrics, code commit activity, and repository breakdown."
        />

        {/* Top Metric Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        >
          <motion.div variants={fadeIn}>
            <Card className="p-6 flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <Github size={28} />
              </div>
              <div>
                <h4 className="text-2xl font-extrabold text-slate-100">
                  {githubDashboardData.reposCount}+
                </h4>
                <p className="text-xs text-slate-400 font-mono">Public Repositories</p>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Card className="p-6 flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Star size={28} />
              </div>
              <div>
                <h4 className="text-2xl font-extrabold text-slate-100">
                  {githubDashboardData.starsCount}+
                </h4>
                <p className="text-xs text-slate-400 font-mono">Total Stars Earned</p>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Card className="p-6 flex items-center gap-4 sm:col-span-2 lg:col-span-1">
              <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <GitCommit size={28} />
              </div>
              <div>
                <h4 className="text-2xl font-extrabold text-slate-100">
                  {githubDashboardData.contributions}+
                </h4>
                <p className="text-xs text-slate-400 font-mono">Annual Contributions</p>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* Dashboard Grid: Languages & Contribution Graph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          {/* Most Used Languages */}
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-5">
            <Card className="p-7 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-100 mb-6 flex items-center gap-2">
                  <Code className="text-indigo-400" size={20} />
                  <span>Most Used Languages</span>
                </h3>

                {/* Progress bar stack */}
                <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden flex mb-6">
                  {githubDashboardData.topLanguages.map((lang) => (
                    <div
                      key={lang.name}
                      style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                      title={`${lang.name}: ${lang.percentage}%`}
                    />
                  ))}
                </div>

                <div className="space-y-3">
                  {githubDashboardData.topLanguages.map((lang) => (
                    <div key={lang.name} className="flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: lang.color }}
                        />
                        <span className="text-slate-200 font-bold">{lang.name}</span>
                      </div>
                      <span className="text-slate-400">{lang.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Contribution Heatmap Simulator */}
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-7">
            <Card className="p-7">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                  <Activity className="text-emerald-400" size={20} />
                  <span>Contribution Graph</span>
                </h3>
                <span className="text-xs font-mono text-slate-400">480 Contributions in 2024</span>
              </div>

              {/* Grid matrix of squares */}
              <div className="grid grid-cols-12 sm:grid-cols-16 gap-1.5 p-4 rounded-xl bg-slate-900/60 border border-white/5">
                {Array.from({ length: 60 }).map((_, i) => {
                  const intensity = (i * 7 + 3) % 5;
                  const colors = [
                    'bg-slate-800/60',
                    'bg-indigo-900/40',
                    'bg-indigo-700/60',
                    'bg-indigo-500',
                    'bg-emerald-400',
                  ];
                  return (
                    <div
                      key={i}
                      className={`w-full aspect-square rounded-sm ${colors[intensity]} transition-transform hover:scale-125 hover:z-10`}
                      title={`Activity level ${intensity}`}
                    />
                  );
                })}
              </div>

              <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Less</span>
                <div className="flex items-center gap-1">
                  <div className="w-2.5 h-2.5 rounded-sm bg-slate-800" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-indigo-900/40" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-indigo-700/60" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-indigo-500" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-emerald-400" />
                </div>
                <span>More</span>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Featured Repositories */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {githubDashboardData.featuredRepositories.map((repo) => (
            <motion.div key={repo.name} variants={fadeIn}>
              <Card className="p-6 h-full flex flex-col justify-between border hover:border-indigo-500/40">
                <div>
                  <h4 className="text-base font-bold text-slate-100 mb-2 flex items-center justify-between">
                    <span className="truncate">{repo.name}</span>
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-indigo-400"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">
                    {repo.description}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-4 border-t border-white/10">
                  <span className="text-indigo-400 font-bold">{repo.language}</span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Star size={13} className="text-amber-400" /> {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={13} className="text-cyan-400" /> {repo.forks}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action to view full profile */}
        <div className="text-center">
          <a href={personalData.githubUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="primary" size="lg" icon={<Github size={18} />}>
              Visit Official GitHub Profile
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
