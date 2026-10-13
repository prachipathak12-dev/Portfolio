import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Briefcase, Languages, Code2, Layers, Cpu, Server, Download, Eye } from 'lucide-react';

export const ResumeSection: React.FC = () => {
  const { personal, experience, education, skillCategories, knowledgeTags } = portfolioData;

  // Split skill categories for a perfectly balanced 2-column layout
  // Column 1: AI/ML (cat 0) + Programming Languages (cat 1)
  const leftSkills = [skillCategories[0], skillCategories[1]];
  // Column 2: Backend (cat 2) + Frontend (cat 3) + DevOps (cat 4)
  const rightSkills = [skillCategories[2], skillCategories[3], skillCategories[4]];

  return (
    <div className="p-6 md:p-10 lg:p-12 space-y-12 w-full">
      {/* Page Title & Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-[#2e2e38]/60">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white section-heading">
            Resume
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#3b3b48] text-[#c0c0d0] hover:text-[#00a3e0] hover:border-[#00a3e0] text-xs font-semibold transition-all duration-300"
          >
            <Eye size={15} />
            <span>View PDF</span>
          </a>
          <a
            href="/resume.pdf"
            download="Prachi_Pathak_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#00a3e0] hover:bg-[#008fca] text-white text-xs font-semibold transition-all duration-300 shadow-md shadow-[#00a3e0]/20 hover:scale-[1.02]"
          >
            <Download size={15} />
            <span>Download Resume</span>
          </a>
        </div>
      </div>

      {/* Row 1: Timelines (Experience & Education Side-by-Side) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Column: Work Experience */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#00a3e0]/10 text-[#00a3e0] border border-[#00a3e0]/20">
              <Briefcase size={22} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">Experience</h3>
              <p className="text-xs text-[#828292]">Industry & technical experience</p>
            </div>
          </div>

          <div className="relative pl-6 border-l-2 border-[#2f2f3a] space-y-6">
            {experience.map((exp) => (
              <div key={exp.id} className="relative group">
                {/* Timeline dot */}
                <div className="absolute -left-[31px] top-2 w-3.5 h-3.5 rounded-full bg-[#00a3e0] timeline-dot"></div>

                <div className="bg-[#202027] p-5 sm:p-6 rounded-2xl border border-[#2e2e38] shadow-md group-hover:border-[#00a3e0]/40 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#00a3e0]/10 text-[#00a3e0] border border-[#00a3e0]/20">
                      {exp.period}
                    </span>
                    <span className="text-xs text-[#8e8e9c] font-medium">
                      {exp.company}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white mb-3">
                    {exp.role}
                  </h4>

                  {/* Bullet Points from Resume */}
                  <ul className="space-y-2 mb-4">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-[#a8a8b8] flex items-start gap-2.5 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00a3e0] mt-2 shrink-0"></span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#2a2a34]">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-[#18181e] text-[#a0a0b2] border border-[#2c2c36]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Education & Languages */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#00a3e0]/10 text-[#00a3e0] border border-[#00a3e0]/20">
              <GraduationCap size={22} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">Education</h3>
              <p className="text-xs text-[#828292]">Academic qualifications</p>
            </div>
          </div>

          <div className="relative pl-6 border-l-2 border-[#2f2f3a] space-y-6">
            {education.map((edu) => (
              <div key={edu.id} className="relative group">
                {/* Timeline dot */}
                <div className="absolute -left-[31px] top-2 w-3.5 h-3.5 rounded-full bg-[#00a3e0] timeline-dot"></div>

                <div className="bg-[#202027] p-5 sm:p-6 rounded-2xl border border-[#2e2e38] shadow-md group-hover:border-[#00a3e0]/40 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#00a3e0]/10 text-[#00a3e0] border border-[#00a3e0]/20">
                      {edu.period}
                    </span>
                    <span className="text-xs text-[#8e8e9c] font-medium">
                      {edu.institution}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white mb-2">
                    {edu.degree}
                  </h4>

                  {edu.details && (
                    <p className="text-xs sm:text-sm text-[#a8a8b8] leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Languages Known (from resume) */}
          <div className="bg-[#202027] p-5 sm:p-6 rounded-2xl border border-[#2e2e38] shadow-md">
            <div className="flex items-center gap-3 mb-4 pb-2 border-b border-[#2b2b35]">
              <div className="p-2 rounded-lg bg-[#00a3e0]/10 text-[#00a3e0]">
                <Languages size={18} />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white">Languages Known</h4>
                <p className="text-[11px] text-[#78788a]">Proficiency & literacy</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="bg-[#18181f] p-3 rounded-xl border border-[#2a2a35] flex flex-col gap-1">
                <span className="text-white font-semibold">English</span>
                <span className="text-[11px] text-[#00a3e0]">Reading / Writing</span>
              </div>
              <div className="bg-[#18181f] p-3 rounded-xl border border-[#2a2a35] flex flex-col gap-1">
                <span className="text-white font-semibold">Hindi</span>
                <span className="text-[11px] text-[#00a3e0]">Reading / Writing</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Skills & Technical Proficiencies (2 Equal Columns) */}
      <div className="space-y-6 pt-6 border-t border-[#292934]">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white section-heading">
            Skills & <span className="text-[#00a3e0]">Proficiencies</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Column 1: AI/ML & Programming Languages */}
          <div className="space-y-6">
            {leftSkills.map((cat, catIdx) => (
              <div key={catIdx} className="bg-[#202027] p-6 rounded-2xl border border-[#2e2e38] shadow-md">
                <h4 className="text-sm sm:text-base font-bold text-white mb-5 pb-2 border-b border-[#2b2b35] flex items-center justify-between">
                  <span>{cat.name}</span>
                  <span className="text-xs font-normal text-[#00a3e0]">Proficiency</span>
                </h4>

                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-medium">
                        <span className="text-[#c4c4d4]">{skill.name}</span>
                        <span className="text-[#00a3e0] font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-[#18181e] overflow-hidden p-0.5 border border-[#2e2e38]">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#00a3e0] to-[#04c2ea] transition-all duration-700"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Column 2: Backend, Frontend & DevOps */}
          <div className="space-y-6">
            {rightSkills.map((cat, catIdx) => (
              <div key={catIdx} className="bg-[#202027] p-6 rounded-2xl border border-[#2e2e38] shadow-md">
                <h4 className="text-sm sm:text-base font-bold text-white mb-5 pb-2 border-b border-[#2b2b35] flex items-center justify-between">
                  <span>{cat.name}</span>
                  <span className="text-xs font-normal text-[#00a3e0]">Proficiency</span>
                </h4>

                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-medium">
                        <span className="text-[#c4c4d4]">{skill.name}</span>
                        <span className="text-[#00a3e0] font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-[#18181e] overflow-hidden p-0.5 border border-[#2e2e38]">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#00a3e0] to-[#04c2ea] transition-all duration-700"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 3: Core Competencies & Architecture Concepts (Full-Width Card) */}
      <div className="bg-[#202027] p-6 rounded-2xl border border-[#2e2e38] shadow-md">
        <div className="flex items-center gap-2.5 mb-4 pb-2 border-b border-[#2b2b35]">
          <Code2 size={18} className="text-[#00a3e0]" />
          <h4 className="text-base font-bold text-white">
            Core Competencies & Tools
          </h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {knowledgeTags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 rounded-lg text-xs bg-[#18181f] text-[#b8b8c8] border border-[#2f2f3d] hover:border-[#00a3e0] hover:text-[#00a3e0] transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
