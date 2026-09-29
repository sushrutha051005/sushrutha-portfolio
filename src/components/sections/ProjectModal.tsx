import React from 'react';
import { ExternalLink, Github, Sparkles, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../../types';
import { Modal } from '../ui/Modal';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

interface ProjectModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.title}>
      <div className="space-y-6">
        {/* Category & Status */}
        <div className="flex items-center gap-2">
          <Badge variant="indigo">{project.category}</Badge>
          {project.isComingSoon && (
            <Badge variant="cyan">
              <Sparkles size={12} className="inline mr-1" />
              In Active Development / Coming Soon
            </Badge>
          )}
        </div>

        {/* Detailed Overview */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2">
            Overview & Motivation
          </h4>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {project.longDescription || project.description}
          </p>
        </div>

        {/* Technologies Used */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono font-semibold rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features List */}
        {project.features && project.features.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Key Features & System Mechanics
            </h4>
            <ul className="space-y-2">
              {project.features.map((feat) => (
                <li key={feat} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Footer Actions */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="primary" size="md" icon={<Github size={18} />}>
              GitHub Repository
            </Button>
          </a>
          <Button variant="glass" size="md" icon={<ExternalLink size={18} />} onClick={onClose}>
            Close Preview
          </Button>
        </div>
      </div>
    </Modal>
  );
};
