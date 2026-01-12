import React, { useState, useEffect } from 'react';

export const ScanythingLogo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <div className={`${className} relative flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-110`}>
    <img 
      src="https://i.pinimg.com/736x/dd/8a/1f/dd8a1fdf2a12eec6673e822315324c29.jpg" 
      alt="Scanything Logo" 
      className="w-full h-full object-cover rounded-[1.2rem] shadow-lg border border-white/20"
    />
  </div>
);

interface NavbarProps {
  onNavigateHome: (targetId?: string) => void;
  currentView: 'home' | 'terms' | 'privacy';
  isDark?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigateHome, currentView }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
      scrolled ? 'bg-white/95 backdrop-blur-2xl py-4 shadow-clean border-b border-gray-100' : 'py-8 bg-transparent'
    }`}>
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 flex justify-between items-center">
        {/* Brand Text: Solid color based on background (No Split) */}
        <div 
          onClick={() => onNavigateHome()}
          className="flex items-center gap-4 cursor-pointer group"
        >
          <ScanythingLogo className="w-12 h-12" />
          <span className={`text-3xl font-heading font-black tracking-tighter transition-colors duration-500 ${scrolled ? 'text-black' : 'text-white'}`}>
            Scanything
          </span>
        </div>

        {/* Menu Items: Removed Caps Lock */}
        <div className={`hidden lg:flex items-center gap-12 text-base font-semibold transition-colors duration-500 ${scrolled ? 'text-pure-black' : 'text-white'}`}>
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="hover:text-primary transition-all">Home</a>
          <a href="#how" onClick={(e) => handleNavClick(e, 'how')} className="hover:text-primary transition-all">How it works</a>
          <a href="#demo" onClick={(e) => handleNavClick(e, 'demo')} className="hover:text-primary transition-all">Testimonials</a>
          <a href="#features" onClick={(e) => handleNavClick(e, 'features')} className="hover:text-primary transition-all">Features</a>
        </div>

        {/* Action Button: Removed Caps Lock */}
        <button className="bg-primary hover:bg-pink-600 active:bg-pink-700 active:scale-95 active:shadow-[0_0_30px_rgba(233,30,99,0.8)] text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-pink-glow">
          Scan now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;