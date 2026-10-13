import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Download, Mail, Phone, MapPin, CheckCircle2, Home, User, GraduationCap, Briefcase } from 'lucide-react';
import { LinkedInIcon } from './icons/LinkedInIcon';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const { personal } = portfolioData;

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About Me', icon: User },
    { id: 'resume', label: 'Resume', icon: GraduationCap },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  return (
    <aside className="w-full lg:w-[320px] xl:w-[340px] shrink-0 bg-[#25252b] border-b lg:border-b-0 lg:border-r border-[#33333d] p-6 lg:p-7 flex flex-col justify-between items-center text-center relative z-20">
      {/* Profile Header */}
      <div className="w-full flex flex-col items-center">
        {/* Photo with subtle ring */}
        <div className="relative mb-4 group">
          <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-[#33333d] shadow-xl relative z-10 transition-transform duration-300 group-hover:scale-105 group-hover:border-[#00a3e0]">
            <img
              src={personal.photo}
              alt={personal.name}
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80';
              }}
            />
          </div>
          {/* Status Indicator */}
          <div
            className="absolute bottom-1 right-2 z-20 bg-[#16161a] p-1.5 rounded-full border-2 border-[#25252b]"
            title="Available for opportunities"
          >
            <div className="w-3.5 h-3.5 bg-emerald-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Name & Title */}
        <h1 className="text-2xl font-bold text-white tracking-tight mb-1">
          {personal.name}
        </h1>
        <p className="text-xs text-[#00a3e0] font-medium tracking-wide uppercase mb-3">
          AI/ML Engineer & Developer
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-2.5 mb-4">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-9 h-9 rounded-full bg-[#1e1e24] border border-[#33333d] flex items-center justify-center text-[#a0a0ab] hover:text-white hover:bg-[#00a3e0] hover:border-[#00a3e0] transition-all duration-300 shadow-md"
          >
            <LinkedInIcon size={16} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Send Email"
            className="w-9 h-9 rounded-full bg-[#1e1e24] border border-[#33333d] flex items-center justify-center text-[#a0a0ab] hover:text-white hover:bg-[#00a3e0] hover:border-[#00a3e0] transition-all duration-300 shadow-md"
          >
            <Mail size={16} />
          </a>
          <a
            href={`tel:${personal.phone}`}
            aria-label="Phone Number"
            className="w-9 h-9 rounded-full bg-[#1e1e24] border border-[#33333d] flex items-center justify-center text-[#a0a0ab] hover:text-white hover:bg-[#00a3e0] hover:border-[#00a3e0] transition-all duration-300 shadow-md"
          >
            <Phone size={16} />
          </a>
        </div>

        {/* Quick Location & Availability */}
        <div className="w-full bg-[#1e1e24] rounded-xl p-3 border border-[#2e2e38] text-left text-xs space-y-1.5 mb-4 text-[#9a9aa8]">
          <div className="flex items-center gap-2">
            <MapPin size={13} className="text-[#00a3e0] shrink-0" />
            <span className="truncate">{personal.address}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
            <span className="text-emerald-300 font-medium">Available for Opportunities</span>
          </div>
        </div>

        {/* Sidebar Navigation */}
        <nav aria-label="Sidebar Navigation" className="w-full space-y-1 mb-4 hidden lg:block text-left">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 ${
                  isActive
                    ? 'bg-[#00a3e0] text-white shadow-md shadow-[#00a3e0]/25'
                    : 'text-[#9c9cac] hover:text-white hover:bg-[#1f1f26]'
                }`}
              >
                <Icon size={16} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Buttons & Footer */}
      <div className="w-full space-y-3 pt-2 border-t border-[#33333e] lg:border-t-0">
        <a
          href="/resume.pdf"
          download="Prachi_Pathak_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-2.5 px-5 rounded-full border-2 border-[#00a3e0] text-white text-xs font-semibold hover:bg-[#00a3e0] transition-all duration-300 shadow-lg shadow-[#00a3e0]/15 group"
        >
          <Download size={15} className="group-hover:translate-y-0.5 transition-transform" />
          <span>Download Resume</span>
        </a>

        <div className="text-[11px] text-[#71717e]">
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </div>
      </div>
    </aside>
  );
};

