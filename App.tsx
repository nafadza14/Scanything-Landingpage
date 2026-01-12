import React, { useState, useEffect } from 'react';
import Navbar, { ScanythingLogo } from './components/Navbar.tsx';
import LandingPage from './components/LandingPage.tsx';
import Terms from './components/Terms.tsx';
import Privacy from './components/Privacy.tsx';

type View = 'home' | 'terms' | 'privacy';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');

  const navigateTo = (newView: View, targetId?: string) => {
    setView(newView);
    if (newView === 'home' && targetId) {
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar 
        onNavigateHome={(targetId) => navigateTo('home', targetId)} 
        currentView={view} 
        isDark={view !== 'home'} 
      />

      {view === 'home' && <LandingPage onNavigate={navigateTo} />}
      {view === 'terms' && <Terms />}
      {view === 'privacy' && <Privacy />}

      {/* Footer: Redesigned for Premium Branding */}
      <footer className="py-24 bg-white border-t border-border-soft">
        <div className="container mx-auto px-8 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
           <div className="flex flex-col gap-6">
               <div 
                 onClick={() => navigateTo('home')}
                 className="flex items-center gap-4 cursor-pointer group"
               >
                    <ScanythingLogo className="w-14 h-14" />
                    <span className="text-3xl font-heading font-black tracking-tighter text-black">
                        Scanything
                    </span>
               </div>
               <p className="text-text-secondary max-w-xs font-medium leading-relaxed">Scan. Understand. Live better with AI-powered health insights for food and skincare.</p>
           </div>
           
           <div className="flex flex-wrap gap-x-12 gap-y-6 text-base font-bold text-text-primary transition-all">
              <button 
                onClick={() => navigateTo('privacy')}
                className="hover:text-primary transition-all outline-none"
              >
                Privacy
              </button>
              <button 
                onClick={() => navigateTo('terms')}
                className="hover:text-primary transition-all outline-none"
              >
                Terms
              </button>
              <a href="#" className="hover:text-primary transition-all">FAQ</a>
              <a href="#" className="hover:text-primary transition-all">Contact</a>
           </div>

           <div className="text-sm font-bold text-gray-400">
             © 2026 Scanything Health. All rights reserved.
           </div>
        </div>
      </footer>
    </div>
  );
};

export default App;