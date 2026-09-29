import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, ExternalLink, Check, Copy } from 'lucide-react';
import { personalData } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { fadeIn, staggerContainer } from '../../utils/animationVariants';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactItems = [
    {
      id: 'github',
      title: 'GitHub Profile',
      value: 'sushrutha051005',
      href: personalData.githubUrl,
      icon: <Github size={26} className="text-indigo-400" />,
      actionText: 'Visit Profile',
      isExternal: true,
    },
    {
      id: 'linkedin',
      title: 'LinkedIn Network',
      value: 'Sai Sushrutha A',
      href: personalData.linkedinUrl,
      icon: <Linkedin size={26} className="text-cyan-400" />,
      actionText: 'Connect on LinkedIn',
      isExternal: true,
    },
    {
      id: 'email',
      title: 'Direct Email',
      value: personalData.email,
      href: `mailto:${personalData.email}`,
      icon: <Mail size={26} className="text-purple-400" />,
      actionText: copied ? 'Copied to Clipboard!' : 'Send Email',
      isExternal: false,
      customClick: copyEmail,
    },
    {
      id: 'location',
      title: 'Primary Location',
      value: personalData.location,
      href: '#',
      icon: <MapPin size={26} className="text-emerald-400" />,
      actionText: 'Based in India',
      isExternal: false,
    },
  ];

  return (
    <section id="contact" className="py-20 relative z-10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get In Touch"
          title="Connect With Me"
          subtitle="Interested in collaboration, internship opportunities, or technical inquiries? Reach out directly."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {contactItems.map((item) => (
            <motion.div key={item.id} variants={fadeIn}>
              <Card className="p-7 h-full flex flex-col justify-between group border hover:border-indigo-500/50">
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-2xl bg-slate-800/80 border border-white/10 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-100 mb-1">{item.title}</h3>
                    <p className="text-sm font-mono text-slate-300 break-all">{item.value}</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  {item.isExternal ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      <span>{item.actionText}</span>
                      <ExternalLink size={14} />
                    </a>
                  ) : item.customClick ? (
                    <button
                      onClick={item.customClick}
                      className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check size={14} className="text-emerald-400" />
                          <span>Copied Email</span>
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          <span>Copy Email Address</span>
                        </>
                      )}
                    </button>
                  ) : (
                    <span className="text-xs font-mono text-slate-400">{item.actionText}</span>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
