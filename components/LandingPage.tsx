
import React from 'react';
import ScannerDemo from './ScannerDemo.tsx';
import Features from './Features.tsx';
import DailyTrackers from './DailyTrackers.tsx';

interface LandingPageProps {
  onNavigate: (page: 'home' | 'terms' | 'privacy', targetId?: string) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const EXTERNAL_APP_URL = "https://product-scan-app.vercel.app/";

  const handleExploreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('how');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-stretch overflow-hidden bg-white">
        {/* Left Background Layer */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[65%] bg-pure-black z-0 rounded-br-[120px] lg:rounded-br-[350px] shadow-[40px_0_100px_rgba(0,0,0,0.7)]">
          <div className="absolute inset-4 md:inset-10 rounded-br-[110px] lg:rounded-br-[330px] border border-white/5 pointer-events-none"></div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-6 md:px-12 relative z-10 min-h-screen flex flex-col justify-center">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-8">
               <div className="w-10 h-[2px] bg-primary"></div>
               <span className="text-primary font-bold tracking-widest uppercase text-xs sm:text-sm">
                 Hello, Healthy Lifestyle!
               </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-white leading-[1.05] mb-8">
              Smart Choices <br/>
              <span className="text-primary italic">Food & Skincare</span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12 max-w-lg">
              Analyze +300k ingredients instantly. From your neighborhood grocery shelf to your bathroom cabinet.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href={EXTERNAL_APP_URL}
                className="bg-white text-pure-black px-12 py-5 rounded-full font-bold text-lg shadow-2xl hover:scale-105 transition-all text-center inline-flex items-center justify-center gap-3 group"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M4 4h4v2H6v2H4V4zm12 0h4v4h-2V6h-2V4zM4 16h2v2h2v2H4v-4zm16 4h-4v-2h2v-2h2v4zM7 9h10v2H7V9zm0 4h10v2H7v-2z"/>
                </svg>
                Scan Now
              </a>
              <a 
                href="#how"
                onClick={handleExploreClick}
                className="bg-primary text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all text-center inline-block shadow-xl shadow-primary/30"
              >
                Let's Explore
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - Mockups */}
        <div className="hidden lg:flex lg:w-[35%] relative items-center justify-center overflow-visible">
           <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-slate-100 -z-10"></div>
           
           {/* Mockup Container */}
           <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[750px] h-full flex items-center justify-center z-20 pointer-events-none">
              
              {/* Background Mockup: Live Scanner UI */}
              <div className="relative z-20 w-[310px] h-auto mockup-shadow animate-float transform -rotate-[12deg] -translate-x-12 translate-y-12 rounded-[3.8rem] overflow-hidden bg-black border-[6px] border-border-soft ring-4 ring-black/5 opacity-80 scale-95">
                  <div className="relative aspect-[9/18.5] overflow-hidden group">
                    <img 
                        src="https://matahari.com/cdn/shop/files/84341655_5.jpg?v=1742059226&width=720" 
                        className="w-full h-full object-cover scale-110 grayscale-[0.2]" 
                        alt="Scanything Live Ingredient Scan" 
                    />
                    
                    {/* Floating Highlights */}
                    <div className="absolute top-[20%] right-[10%] callout-bubble">
                        <span className="text-[10px] font-bold text-pure-black">Amino Acid</span>
                        <span className="text-[14px] font-black text-primary">High</span>
                    </div>
                    <div className="absolute top-[40%] left-[10%] callout-bubble">
                        <span className="text-[10px] font-bold text-pure-black">Panthenol</span>
                        <span className="text-[14px] font-black text-primary">Active</span>
                    </div>
                    <div className="absolute bottom-[45%] right-[20%] callout-bubble">
                        <span className="text-[10px] font-bold text-pure-black">Ceramide</span>
                        <span className="text-[14px] font-black text-primary">Pure</span>
                    </div>

                    <div className="absolute inset-0 bg-black/10 flex flex-col p-6">
                        <div className="flex-1 relative flex items-center justify-center">
                            <div className="w-[88%] aspect-[4/5] relative">
                                <div className="absolute top-0 left-0 w-8 h-8 border-t-[3px] border-l-[3px] border-white/40 rounded-tl-xl"></div>
                                <div className="absolute top-0 right-0 w-8 h-8 border-t-[3px] border-r-[3px] border-white/40 rounded-tr-xl"></div>
                                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-[3px] border-l-[3px] border-white/40 rounded-bl-xl"></div>
                                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-[3px] border-r-[3px] border-white/40 rounded-br-xl"></div>
                                <div className="absolute left-1/2 -translate-x-1/2 w-[92%] h-[2px] bg-primary/40 shadow-[0_0_15px_#E91E63] animate-[scan_4s_linear_infinite]"></div>
                            </div>
                        </div>
                    </div>
                  </div>
              </div>

              {/* Foreground Mockup: Analysis Detail UI */}
              <div className="relative z-30 w-[315px] h-auto mockup-shadow animate-float-delayed transform rotate-[10deg] translate-x-12 -translate-y-12 rounded-[3.8rem] overflow-hidden ring-4 ring-white border-[8px] border-black bg-white flex flex-col">
                  {/* Status Bar */}
                  <div className="px-6 pt-4 pb-2 flex justify-between items-center bg-white">
                      <span className="text-[12px] font-bold">9:41</span>
                      <div className="flex gap-1">
                          <div className="w-4 h-2 bg-black rounded-full"></div>
                          <div className="w-2 h-2 bg-black rounded-full"></div>
                      </div>
                  </div>

                  {/* App Header */}
                  <div className="px-6 py-2 flex justify-between items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/></svg>
                      </div>
                      <span className="text-[13px] font-bold uppercase tracking-widest text-gray-500">Analysis</span>
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                          <div className="w-1 h-1 bg-black rounded-full mx-0.5"></div>
                          <div className="w-1 h-1 bg-black rounded-full mx-0.5"></div>
                          <div className="w-1 h-1 bg-black rounded-full mx-0.5"></div>
                      </div>
                  </div>

                  {/* Product Image */}
                  <div className="px-4 py-2">
                      <div className="rounded-[2rem] overflow-hidden aspect-[4/3] relative">
                          <img src="https://i.pinimg.com/736x/f1/b6/53/f1b65349fcfab45c91f69cea06b5891d.jpg" className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black/5"></div>
                      </div>
                  </div>

                  {/* Product Info */}
                  <div className="px-6 py-3">
                      <div className="flex justify-between items-center mb-1">
                          <span className="text-[10px] font-bold bg-gray-100 px-2 py-0.5 rounded-full text-gray-500">SKINCARE</span>
                          <div className="flex gap-4">
                              <span className="text-[12px] font-bold text-gray-400">−</span>
                              <span className="text-[12px] font-bold">1</span>
                              <span className="text-[12px] font-bold text-gray-400">+</span>
                          </div>
                      </div>
                      <h4 className="text-xl font-bold text-pure-black leading-tight">Amino Acid Ultra Gentle Cleansing Mousse</h4>
                  </div>

                  {/* Grid Breakdown */}
                  <div className="px-6 grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-surface-light p-3 rounded-2xl flex items-center gap-3">
                          <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center text-primary">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21c-4.41 0-8-3.59-8-8 0-4.41 3.59-8 8-8s8 3.59 8 8c0 4.41-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"/></svg>
                          </div>
                          <div>
                              <div className="text-[9px] font-bold text-gray-400 uppercase">Purity</div>
                              <div className="text-[13px] font-black">98%</div>
                          </div>
                      </div>
                      <div className="bg-surface-light p-3 rounded-2xl flex items-center gap-3">
                          <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center text-brand-teal">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v18M3 12h18"/></svg>
                          </div>
                          <div>
                              <div className="text-[9px] font-bold text-gray-400 uppercase">pH Level</div>
                              <div className="text-[13px] font-black">5.5</div>
                          </div>
                      </div>
                  </div>

                  {/* Health Score Slider */}
                  <div className="px-6 mb-4">
                      <div className="bg-surface-light p-4 rounded-3xl">
                          <div className="flex justify-between items-center mb-2">
                              <div className="flex items-center gap-2">
                                  <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center text-white text-[10px]">❤</div>
                                  <span className="text-[11px] font-bold">Health score</span>
                              </div>
                              <span className="text-[11px] font-black">7.5 / 10</span>
                          </div>
                          <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-400 w-[75%]"></div>
                          </div>
                      </div>
                  </div>

                  {/* Bottom Actions */}
                  <div className="mt-auto px-6 pb-8 flex gap-3">
                      <button className="flex-1 py-4 bg-white border border-gray-200 rounded-full text-[11px] font-black flex items-center justify-center gap-2 shadow-sm">
                          ✨ Fix Results
                      </button>
                      <button className="flex-1 py-4 bg-pure-black text-white rounded-full text-[11px] font-black shadow-lg">
                          Done
                      </button>
                  </div>
              </div>
              
              {/* Blur decoration */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/5 blur-[140px] rounded-full"></div>
           </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="how" className="py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Process</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">How It Works</h2>
            <p className="text-text-secondary text-lg">Uncovering the truth in three simple steps.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {[
              { 
                icon: 'camera', 
                title: 'Point & Scan', 
                desc: 'Use our high-precision scanner to capture ingredient labels or barcodes in real-time.',
                img: 'https://i.pinimg.com/736x/95/22/72/9522729554135d6ce39546899c390b4d.jpg'
              },
              { 
                icon: 'ai', 
                title: 'Scanything AI', 
                desc: 'Our proprietary Scanything AI instantly parses complex chemicals and nutritional data.',
                img: 'https://i.pinimg.com/736x/a7/d2/5c/a7d25c8c795f7988c27bbf59b41e07f7.jpg'
              },
              { 
                icon: 'check', 
                title: 'Get Insights', 
                desc: 'Receive clear, evidence-based reports on safety, allergens, and compatibility.',
                img: 'https://i.pinimg.com/736x/73/61/17/7361174ee650aeb6ba5d00a0c903777f.jpg'
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center group">
                {/* Screenshot Display with Rounded Border only */}
                <div className="w-full max-w-[280px] mb-12 relative transition-all duration-500 group-hover:-translate-y-4">
                  <div className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/10 aspect-[9/18.5] bg-gray-50 border border-gray-100">
                    <img src={item.img} className="w-full h-full object-cover" alt={item.title} />
                  </div>
                  {/* Decorative background element */}
                  <div className="absolute -inset-4 bg-primary/5 rounded-[3.5rem] -z-10 scale-95 group-hover:scale-100 transition-transform duration-500"></div>
                </div>

                <div className="text-center max-w-[260px]">
                  <div className="w-14 h-14 bg-pure-black text-white rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-primary group-hover:rotate-6 transition-all shadow-lg">
                    {item.icon === 'camera' && <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/></svg>}
                    {item.icon === 'ai' && <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>}
                    {item.icon === 'check' && <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-text-secondary leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Analysis Result - MOVED HERE AFTER HOW IT WORKS */}
      <ScannerDemo />

      <Features />
      <DailyTrackers />

      {/* Trust Section */}
      <section id="safety" className="py-24 bg-pure-black relative overflow-hidden">
        <div className="absolute inset-10 hero-line opacity-10 rounded-[4rem] pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
            <div className="p-8 md:p-20 text-white">
                <div className="max-w-4xl">
                    <h2 className="text-4xl md:text-6xl font-heading font-bold mb-10">Built for <span className="text-primary">Transparency</span></h2>
                    <p className="text-gray-400 text-xl mb-14 leading-relaxed">We believe you have the right to know exactly what goes into your body. Scanything's data is verified by experts and cross-referenced with global health databases.</p>
                    
                    <div className="grid sm:grid-cols-2 gap-10">
                        {[
                            "Evidence-based ingredient data",
                            "Strict privacy protocols",
                            "Zero medical misinformation",
                            "Community verified ratings"
                        ].map((point, i) => (
                            <div key={i} className="flex items-center gap-6 group">
                                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-lg">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4"/></svg>
                                </div>
                                <span className="text-xl font-medium group-hover:text-white transition-colors">{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
