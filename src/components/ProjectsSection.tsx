import React, { useState } from 'react';
import { portfolioData, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { Eye, ArrowUpRight } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Extract unique categories based strictly on projects
  const categories = ['All', 'GenAI & RAG', 'AI & Travel'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="p-6 md:p-10 lg:p-12 animate-fade-in space-y-10">
      {/* Page Title */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white section-heading">
          Projects
        </h2>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2.5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
              selectedCategory === cat
                ? 'bg-[#00a3e0] text-white shadow-md shadow-[#00a3e0]/25'
                : 'bg-[#202027] text-[#9a9aa8] hover:text-white hover:bg-[#282833] border border-[#2e2e38]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group bg-[#202027] rounded-2xl border border-[#2e2e38] overflow-hidden hover:border-[#00a3e0]/60 transition-all duration-300 hover:-translate-y-1.5 shadow-lg flex flex-col justify-between"
          >
            <div>
              {/* Project Image & Overlay */}
              <div
                className="relative h-48 w-full overflow-hidden bg-[#16161b] cursor-pointer"
                onClick={() => setActiveProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#202027] via-transparent to-transparent opacity-80"></div>

                {/* Hover Action Icon */}
                <div className="absolute inset-0 bg-[#00a3e0]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-[#00a3e0] text-white flex items-center justify-center shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform">
                    <Eye size={20} />
                  </div>
                </div>

                {/* Category Badge */}
                <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#18181f]/90 text-[#00a3e0] border border-[#00a3e0]/30 backdrop-blur-sm">
                  {project.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5">
                <h3
                  onClick={() => setActiveProject(project)}
                  className="text-lg font-bold text-white mb-2 group-hover:text-[#00a3e0] transition-colors cursor-pointer flex items-center justify-between"
                >
                  <span>{project.name}</span>
                  <ArrowUpRight size={18} className="text-[#6d6d7d] group-hover:text-[#00a3e0] transition-colors shrink-0" />
                </h3>

                <p className="text-xs sm:text-sm text-[#9c9cac] leading-relaxed mb-4 line-clamp-3">
                  {project.shortDescription}
                </p>
              </div>
            </div>

            {/* Card Footer: Tech Badges & View Details */}
            <div className="p-5 pt-0">
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.slice(0, 4).map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] px-2 py-0.5 rounded-md bg-[#18181f] text-[#8e8ea2] border border-[#2b2b36]"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-[#18181f] text-[#00a3e0] border border-[#2b2b36]">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>

              <button
                onClick={() => setActiveProject(project)}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-[#00a3e0] bg-[#00a3e0]/10 hover:bg-[#00a3e0] hover:text-white transition-colors duration-200 border border-[#00a3e0]/20 text-center"
              >
                Project Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
};
