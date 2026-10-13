import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Cpu, Brain, Server, Layers, Database, Terminal, Check } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { personal, whatIDo } = portfolioData;

  const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
    Cpu,
    Brain,
    Server,
    Layers,
    Database,
    Terminal
  };

  const infoList = [
    { label: 'Residence', value: personal.residence },
    { label: 'Address', value: personal.address },
    { label: 'Email', value: personal.email, isEmail: true },
    { label: 'Phone', value: personal.phone, isPhone: true },
    { label: 'LinkedIn', value: personal.linkedinHandle, isLink: true, url: personal.linkedin },
    { label: 'Languages', value: personal.languages },
    { label: 'Status', value: personal.status }
  ];

  return (
    <div className="p-6 md:p-10 lg:p-12 animate-fade-in space-y-12">
      {/* Page Title */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white section-heading">
          About <span className="text-[#00a3e0]">Me</span>
        </h2>
      </div>

      {/* Bio and Info List */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Bio */}
        <div className="lg:col-span-7 space-y-4 text-sm sm:text-base leading-relaxed text-[#b0b0be]">
          <p>
            I am an <strong className="text-white">AI/ML Engineer</strong> and{' '}
            <strong className="text-white">Python Developer</strong> with hands-on experience building
            LLM-powered applications, including{' '}
            <span className="text-[#00a3e0]">Retrieval-Augmented Generation (RAG)</span> systems, vector
            search architectures, and prompt-engineered conversational agents.
          </p>
          <p>
            Skilled in integrating and deploying machine learning models via REST and inference APIs,
            developing performant backend services with <strong className="text-white">FastAPI</strong>,
            and delivering responsive full-stack features using the <strong className="text-white">MERN stack</strong> and Next.js.
          </p>
          <p>
            Experienced with <strong className="text-white">LangChain</strong>, vector databases (<strong className="text-white">ChromaDB</strong>),
            <strong className="text-white"> Docker</strong>, and <strong className="text-white">Jenkins-based CI/CD</strong>, with an unwavering focus on
            shipping reliable, production-ready AI solutions from concept to deployment.
          </p>
        </div>

        {/* Right Column: Personal Info List */}
        <div className="lg:col-span-5 bg-[#202027] rounded-2xl p-6 border border-[#2e2e38] shadow-lg">
          <ul className="divide-y divide-[#2a2a34] text-xs sm:text-sm">
            {infoList.map((item, index) => (
              <li key={index} className="py-2.5 flex items-center justify-between gap-4">
                <span className="text-[#787887] font-medium shrink-0">{item.label}</span>
                <span className="text-white text-right font-normal truncate">
                  {item.isEmail ? (
                    <a
                      href={`mailto:${item.value}`}
                      className="text-[#00a3e0] hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : item.isPhone ? (
                    <a
                      href={`tel:${item.value}`}
                      className="text-[#00a3e0] hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : item.isLink ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#00a3e0] hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* What I Do Section */}
      <div className="space-y-6 pt-4">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white section-heading">
            What <span className="text-[#00a3e0]">I Do</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whatIDo.map((service) => {
            const Icon = iconMap[service.icon] || Cpu;
            return (
              <div
                key={service.id}
                className="bg-[#202027] p-6 rounded-2xl border border-[#2e2e38] hover:border-[#00a3e0]/50 transition-all duration-300 hover:-translate-y-1 shadow-md group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#292933] group-hover:bg-[#00a3e0] text-[#00a3e0] group-hover:text-white flex items-center justify-center transition-all duration-300 mb-4 shadow-sm">
                  <Icon size={24} />
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-[#00a3e0] transition-colors">
                  {service.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#9e9eac] leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
