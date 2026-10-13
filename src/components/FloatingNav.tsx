import React from 'react';
import { Home, User, GraduationCap, Briefcase, Mail } from 'lucide-react';

interface FloatingNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const FloatingNav: React.FC<FloatingNavProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About Me', icon: User },
    { id: 'resume', label: 'Resume', icon: GraduationCap },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  return (
    <nav
      aria-label="Main Navigation"
      className="hidden lg:flex flex-col gap-3 fixed right-6 xl:right-10 top-1/2 -translate-y-1/2 z-50 bg-[#25252b]/95 backdrop-blur-md p-2.5 rounded-full border border-[#33333d] shadow-2xl"
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;

        return (
          <div key={item.id} className="relative group flex items-center justify-center">
            {/* Tooltip popping to the left */}
            <div className="nav-tooltip absolute right-full mr-3.5 bg-[#00a3e0] text-white text-xs font-semibold px-3 py-1.5 rounded-md shadow-lg pointer-events-none whitespace-nowrap z-50">
              {item.label}
              <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-[#00a3e0]"></div>
            </div>

            {/* Nav Button */}
            <button
              onClick={() => {
                setActiveTab(item.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              aria-label={item.label}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 relative ${
                isActive
                  ? 'bg-[#00a3e0] text-white shadow-lg shadow-[#00a3e0]/40 scale-105'
                  : 'text-[#92929e] hover:text-white hover:bg-[#32323a]'
              }`}
            >
              <Icon size={20} />
            </button>
          </div>
        );
      })}
    </nav>
  );
};
