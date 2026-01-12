
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import LandingPage from './components/LandingPage.tsx';
import Terms from './components/Terms.tsx';
import Privacy from './components/Privacy.tsx';

type View = 'home' | 'terms' | 'privacy';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');

  const navigateTo = (newView: View, targetId?: string) => {
    setView(newView);
    if (newView === 'home' && targetId) {
      // Small delay to allow the DOM to render the home page sections
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

      {/* Footer */}
      <footer className="py-20 bg-white border-t border-border-soft">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
           <div className="flex flex-col gap-4">
               <div 
                 onClick={() => navigateTo('home')}
                 className="flex items-center gap-3 cursor-pointer"
               >
                    <img src="https://i.pinimg.com/736x/dd/8a/1f/dd8a1fdf2a12eec6673e822315324c29.jpg" className="w-10 h-10 rounded-xl" alt="Scanything Logo" />
                    <span className="text-2xl font-heading font-bold text-pure-black">Scanything</span>
               </div>
               <p className="text-text-secondary max-w-xs">Scan. Understand. Live better with AI-powered health insights.</p>
           </div>
           
           <div className="flex flex-wrap gap-x-12 gap-y-4 text-sm font-semibold text-text-primary uppercase tracking-widest">
              <button 
                onClick={() => navigateTo('privacy')}
                className="hover:text-primary transition-colors outline-none"
              >
                Privacy
              </button>
              <button 
                onClick={() => navigateTo('terms')}
                className="hover:text-primary transition-colors outline-none"
              >
                Terms
              </button>
              <a href="#" className="hover:text-primary transition-colors">FAQ</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
           </div>

           <div className="text-sm text-text-secondary font-medium">
             © 2026 Scanything Health.
           </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
