import React from 'react';
import { Project } from '../data/portfolioData';
import { X, CheckCircle, Cpu, AlertCircle, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[#202027] border border-[#33333f] w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Image */}
        <div className="relative w-full h-56 sm:h-72 shrink-0 bg-[#16161b] overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#202027] via-transparent to-black/30"></div>

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#00a3e0] transition-colors border border-white/10"
          >
            <X size={18} />
          </button>

          {/* Category & Title on Image */}
          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#00a3e0] text-white mb-2 shadow-md">
              {project.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.name}
            </h3>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#b0b0be] text-sm">
          {/* Tech Badges */}
          <div>
            <span className="text-xs uppercase tracking-wider text-[#737382] font-semibold block mb-2">
              Technologies Used
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-[#16161c] text-[#00a3e0] border border-[#00a3e0]/30 text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
              <Sparkles size={16} className="text-[#00a3e0]" />
              Project Overview
            </h4>
            <p className="leading-relaxed bg-[#191920] p-4 rounded-xl border border-[#2a2a35] text-[#c4c4d4]">
              {project.overview}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#191920] p-4 rounded-xl border border-[#2a2a35] space-y-2">
              <span className="text-xs font-semibold text-amber-400 flex items-center gap-1.5 uppercase tracking-wide">
                <AlertCircle size={14} /> Problem
              </span>
              <p className="text-xs sm:text-sm text-[#9e9eae] leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="bg-[#191920] p-4 rounded-xl border border-[#2a2a35] space-y-2">
              <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5 uppercase tracking-wide">
                <CheckCircle size={14} /> Solution
              </span>
              <p className="text-xs sm:text-sm text-[#9e9eae] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-base font-semibold text-white mb-2.5">Key Features</h4>
            <ul className="space-y-2">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#a2a2b4]">
                  <CheckCircle size={16} className="text-[#00a3e0] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* AI/ML Approach */}
          <div className="bg-[#191920] p-4 rounded-xl border border-[#2a2a35] space-y-2">
            <h4 className="text-sm font-semibold text-white flex items-center gap-2">
              <Cpu size={16} className="text-[#00a3e0]" />
              AI / ML Technical Approach
            </h4>
            <p className="text-xs sm:text-sm text-[#9e9eae] leading-relaxed">
              {project.aiApproach}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-[#18181e] border-t border-[#2e2e38] flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#00a3e0] text-white text-sm font-medium hover:bg-[#008fca] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
