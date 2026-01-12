
import React, { useState, useEffect } from 'react';

export const ScanythingLogo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <div className={`${className} relative flex items-center justify-center overflow-hidden rounded-xl shadow-[0_0_15px_rgba(255,255,255,0.3)]`}>
    <img 
      src="https://i.pinimg.com/736x/dd/8a/1f/dd8a1fdf2a12eec6673e822315324c29.jpg" 
      alt="Scanything Logo" 
      className="w-full h-full object-cover"
    />
  </div>
);

interface NavbarProps {
  onNavigateHome: (targetId?: string) => void;
  currentView: 'home' | 'terms' | 'privacy';
  isDark?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigateHome, currentView, isDark = false }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (currentView === 'home') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      onNavigateHome(id);
    }
  };

  const textColorClass = (scrolled || isDark) ? 'text-text-primary' : 'text-white';
  const logoColorClass = (scrolled || isDark) ? 'text-text-primary' : 'text-white';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div 
          onClick={() => onNavigateHome()}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <ScanythingLogo className="w-12 h-12 group-hover:scale-110 transition-transform shadow-lg shadow-black/5" />
          <span className={`text-2xl font-heading font-bold tracking-tight transition-colors duration-300 ${logoColorClass}`}>Scanything</span>
        </div>

        <div className={`hidden md:flex items-center gap-8 text-sm font-medium transition-colors duration-300 ${scrolled || isDark ? 'text-text-secondary' : 'text-white'}`}>
          <a href="#how" onClick={(e) => handleNavClick(e, 'how')} className="hover:text-primary transition-colors">Process</a>
          <a href="#features" onClick={(e) => handleNavClick(e, 'features')} className="hover:text-primary transition-colors">Features</a>
          <a href="#trackers" onClick={(e) => handleNavClick(e, 'trackers')} className="hover:text-primary transition-colors">Trackers</a>
          <a href="#demo" onClick={(e) => handleNavClick(e, 'demo')} className="hover:text-primary transition-colors">Stories</a>
          <a href="#safety" onClick={(e) => handleNavClick(e, 'safety')} className="hover:text-primary transition-colors">Safety</a>
        </div>

        <a 
          href="https://product-scan-app.vercel.app/" 
          className="bg-primary text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-primary/20 hover:bg-opacity-90 transition-all active:scale-95 inline-block"
        >
          Scan Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
