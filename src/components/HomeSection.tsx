import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, Download, Sparkles, Code2, Bot, Layers } from 'lucide-react';

interface HomeSectionProps {
  setActiveTab: (tab: string) => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ setActiveTab }) => {
  const { personal } = portfolioData;
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % personal.titlesRotation.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [personal.titlesRotation.length]);

  return (
    <div className="p-6 md:p-10 lg:p-14 min-h-[600px] flex flex-col justify-center animate-fade-in relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-[#00a3e0]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-2xl relative z-10">
        {/* Status Pill */}
        {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#202027] border border-[#33333f] text-xs text-[#a5a5b5] mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> */}
          {/* <span>Software Analyst at smartData Enterprises</span>
        </div> */}

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-3">
          {personal.name}
        </h1>

        {/* Dynamic Rotating Subtitle */}
        <div className="h-10 mb-6 flex items-center">
          <span className="text-xl sm:text-2xl font-semibold text-[#00a3e0] transition-all duration-500 ease-out transform">
            {personal.titlesRotation[titleIndex]}
          </span>
        </div>

        {/* Accurate Resume Objective */}
        <p className="text-[#a4a4b2] text-sm sm:text-base leading-relaxed mb-8">
          {personal.aboutSummary}
        </p>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('projects')}
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#00a3e0] text-white font-medium hover:bg-[#008fca] transition-all duration-300 shadow-lg shadow-[#00a3e0]/30 hover:scale-[1.02]"
          >
            <span>View Projects</span>
            <ArrowRight size={17} />
          </button>

          <a
            href="/resume.pdf"
            download="Prachi_Pathak_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-full border-2 border-[#383844] text-[#d5d5df] font-medium hover:border-[#00a3e0] hover:text-[#00a3e0] transition-all duration-300"
          >
            <Download size={17} />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#2e2e38]">
          <div className="bg-[#202026] p-4 rounded-xl border border-[#2e2e38] flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#00a3e0]/10 text-[#00a3e0] shrink-0">
              <Bot size={20} />
            </div>
            <div>
              <div className="text-white font-semibold text-sm">RAG & LLM</div>
              <div className="text-[11px] text-[#868694]">LangChain & Vector DB</div>
            </div>
          </div>

          <div className="bg-[#202026] p-4 rounded-xl border border-[#2e2e38] flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#00a3e0]/10 text-[#00a3e0] shrink-0">
              <Code2 size={20} />
            </div>
            <div>
              <div className="text-white font-semibold text-sm">FastAPI & Python</div>
              <div className="text-[11px] text-[#868694]">REST & Inference APIs</div>
            </div>
          </div>

          <div className="bg-[#202026] p-4 rounded-xl border border-[#2e2e38] flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#00a3e0]/10 text-[#00a3e0] shrink-0">
              <Layers size={20} />
            </div>
            <div>
              <div className="text-white font-semibold text-sm">Full-Stack Delivery</div>
              <div className="text-[11px] text-[#868694]">React.js & Supabase</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

