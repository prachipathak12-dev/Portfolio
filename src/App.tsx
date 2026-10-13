import React, { useState, useEffect, useRef } from 'react';
import { Sidebar } from './components/Sidebar';
import { FloatingNav } from './components/FloatingNav';
import { MobileNav } from './components/MobileNav';
import { HomeSection } from './components/HomeSection';
import { AboutSection } from './components/AboutSection';
import { ResumeSection } from './components/ResumeSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const contentRef = useRef<HTMLElement>(null);

  const tabs = ['home', 'about', 'resume', 'projects', 'contact'];

  const handleNext = () => {
    const currentIndex = tabs.indexOf(activeTab);
    const nextIndex = (currentIndex + 1) % tabs.length;
    setActiveTab(tabs[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = tabs.indexOf(activeTab);
    const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    setActiveTab(tabs[prevIndex]);
  };

  // Scroll content panel to top smoothly on tab change
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeTab]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTab]);

  return (
    <div className="min-h-screen breezy-bg dot-pattern text-[#d5d5d5] flex flex-col justify-center items-center py-0 lg:py-8 px-0 sm:px-4 lg:px-12 xl:px-16 relative selection:bg-[#00a3e0] selection:text-white">
      {/* Mobile Header Bar */}
      <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main BreezyCV Card Container */}
      <main className="w-full max-w-[1240px] xl:max-w-[1320px] min-h-screen lg:min-h-[640px] lg:h-[88vh] lg:max-h-[920px] bg-[#222227] lg:rounded-[32px] border-0 lg:border border-[#343440] shadow-[0_20px_80px_-15px_rgba(0,0,0,0.8)] flex flex-col lg:flex-row overflow-hidden relative">
        {/* Left Profile Sidebar - Remains permanently sticky/visible */}
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Dynamic Content Panel - Smooth scrolling and animated tab transitions */}
        <section
          ref={contentRef}
          className="flex-1 overflow-y-auto bg-[#1b1b20] min-h-[500px] h-full flex flex-col justify-between relative scroll-smooth"
        >
          {/* Animated Page Wrapper with key={activeTab} */}
          <div key={activeTab} className="w-full animate-breezy-enter">
            {activeTab === 'home' && <HomeSection setActiveTab={setActiveTab} />}
            {activeTab === 'about' && <AboutSection />}
            {activeTab === 'resume' && <ResumeSection />}
            {activeTab === 'projects' && <ProjectsSection />}
            {activeTab === 'contact' && <ContactSection />}
          </div>

          {/* Quick Subpage Footer Controls / Breadcrumb */}
          <footer className="w-full p-4 lg:p-5 border-t border-[#292934] flex items-center justify-between text-xs text-[#707080] bg-[#1a1a20] shrink-0">
            <div>
              Active View:{' '}
              <span className="text-[#00a3e0] capitalize font-medium">
                {activeTab === 'about' ? 'About Me' : activeTab}
              </span>
            </div>

            {/* BreezyCV Next / Prev arrow navigation */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous section"
                className="w-8 h-8 rounded-full bg-[#24242d] border border-[#33333f] text-[#a0a0b0] hover:text-white hover:border-[#00a3e0] hover:bg-[#00a3e0] flex items-center justify-center transition-all shadow-sm"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next section"
                className="w-8 h-8 rounded-full bg-[#24242d] border border-[#33333f] text-[#a0a0b0] hover:text-white hover:border-[#00a3e0] hover:bg-[#00a3e0] flex items-center justify-center transition-all shadow-sm"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </footer>
        </section>
      </main>

      {/* Floating Right Navigation Pill (Desktop) */}
      <FloatingNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
