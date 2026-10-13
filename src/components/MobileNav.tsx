import React, { useState } from 'react';
import { Home, User, GraduationCap, Briefcase, Mail, Menu, X, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface MobileNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { personal } = portfolioData;

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About Me', icon: User },
    { id: 'resume', label: 'Resume', icon: GraduationCap },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const handleSelect = (id: string) => {
    setActiveTab(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Mobile Bar */}
      <header className="lg:hidden w-full bg-[#25252b] border-b border-[#33333d] px-4 py-3.5 flex items-center justify-between sticky top-0 z-40 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-[#00a3e0]">
            <img src={personal.photo} alt={personal.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-white leading-none">{personal.name}</h2>
            <span className="text-[11px] text-[#00a3e0]">AI/ML Engineer</span>
          </div>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          className="p-2 rounded-lg bg-[#1e1e24] text-white hover:text-[#00a3e0] border border-[#33333d] transition-colors"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Drawer Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm lg:hidden flex flex-col justify-end"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full bg-[#25252b] border-t border-[#33333d] rounded-t-2xl p-6 space-y-4 max-h-[80vh] overflow-y-auto animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#33333d]">
              <span className="text-sm font-semibold text-[#8b8b99] uppercase tracking-wider">
                Menu
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full text-[#8b8b99] hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="space-y-1.5">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(item.id)}
                    className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-[#00a3e0] text-white shadow-md shadow-[#00a3e0]/30'
                        : 'text-[#c2c2ce] hover:bg-[#1e1e24] hover:text-white'
                    }`}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            <div className="pt-2">
              <a
                href="/resume.pdf"
                download="Prachi_Pathak_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-[#00a3e0] text-white text-sm font-medium hover:bg-[#00a3e0] transition-colors"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

