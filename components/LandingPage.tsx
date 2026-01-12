import React from 'react';
import ScannerDemo from './ScannerDemo.tsx';
import Features from './Features.tsx';
import DailyTrackers from './DailyTrackers.tsx';

interface LandingPageProps {
  onNavigate: (page: 'home' | 'terms' | 'privacy', targetId?: string) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <main className="bg-[#F2F4F7] overflow-x-hidden min-h-screen">
      {/* SECTION 1: HERO */}
      <section id="home" className="relative w-full pt-4 pb-12 md:pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full lg:w-[82%] h-[90%] lg:h-[95%] bg-dark-mesh busri-shape shadow-[0_100px_100px_-50px_rgba(0,0,0,0.4)] z-0 transition-all duration-700"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 min-h-[85vh] flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            <div className="text-left animate-in fade-in slide-in-from-left-10 duration-1000 pl-4 lg:pl-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[2px] bg-primary"></div>
                <span className="text-primary font-bold text-sm tracking-wide uppercase">Hello, wellness seeker!</span>
              </div>
              
              <h1 className="text-6xl md:text-[88px] font-heading font-black text-white leading-[1.05] mb-10 tracking-tighter">
                Know Your <br/>
                <span className="text-primary">Ingredient</span>
              </h1>
              
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12 max-w-lg font-medium">
                Unlock the hidden truth of your products. Scanything uses AI to decode complex food and skincare labels instantly.
              </p>
              
              <div className="flex items-center">
                <button className="bg-primary text-white px-12 py-5 rounded-full font-bold transition-all shadow-pink-glow hover:scale-105 hover:bg-pink-600 active:bg-pink-700 active:scale-95 active:shadow-[0_0_40px_rgba(233,30,99,0.9)] group">
                   <span className="text-lg">Scan now</span>
                </button>
              </div>
            </div>

            <div className="relative h-[600px] lg:h-[850px] flex items-center justify-center">
               {/* Main Scanner Mockup (Mockup Pertama) */}
               <div className="absolute left-[5%] lg:left-[0%] top-[5%] w-[330px] lg:w-[380px] aspect-[9/18.5] bg-black rounded-[3.8rem] shadow-floating overflow-hidden z-20 animate-float border-[8px] border-gray-900/50">
                  {/* Camera Feed Background */}
                  <img 
                    src="https://matahari.com/cdn/shop/files/84341655_5.jpg?v=1742059226&width=720" 
                    className="absolute inset-0 w-full h-full object-cover brightness-90" 
                    alt="Scanning Product" 
                  />
                  
                  {/* Interface Overlay */}
                  <div className="absolute inset-0 flex flex-col z-10 pointer-events-none">
                     {/* Top Bar */}
                     <div className="pt-10 px-8 flex justify-between items-center text-white">
                        <span className="text-xs font-bold">9:41</span>
                        <div className="flex gap-1.5 items-center">
                           <div className="w-4 h-2.5 bg-white/20 rounded-sm"></div>
                           <div className="w-5 h-2.5 bg-white rounded-sm"></div>
                        </div>
                     </div>

                     <div className="mt-4 px-8 flex justify-between items-center text-white">
                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/10">
                           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/></svg>
                        </div>
                        <span className="text-[13px] font-black tracking-tight">Scanner</span>
                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/10">
                           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="1.5"/><circle cx="6" cy="12" r="1.5"/><circle cx="18" cy="12" r="1.5"/></svg>
                        </div>
                     </div>

                     {/* Scan Brackets & Animation */}
                     <div className="flex-1 flex items-center justify-center px-10 relative">
                        <div className="relative w-full aspect-square max-w-[260px]">
                           <div className="absolute top-0 left-0 w-12 h-12 border-t-[3.5px] border-l-[3.5px] border-white rounded-tl-2xl shadow-[0_0_10px_rgba(255,255,255,0.3)]"></div>
                           <div className="absolute top-0 right-0 w-12 h-12 border-t-[3.5px] border-r-[3.5px] border-white rounded-tr-2xl shadow-[0_0_10px_rgba(255,255,255,0.3)]"></div>
                           <div className="absolute bottom-0 left-0 w-12 h-12 border-b-[3.5px] border-l-[3.5px] border-white rounded-bl-2xl shadow-[0_0_10px_rgba(255,255,255,0.3)]"></div>
                           <div className="absolute bottom-0 right-0 w-12 h-12 border-b-[3.5px] border-r-[3.5px] border-white rounded-br-2xl shadow-[0_0_10px_rgba(255,255,255,0.3)]"></div>
                           
                           {/* Laser Line */}
                           <div className="absolute left-0 right-0 h-[3px] bg-white shadow-[0_0_20px_4px_rgba(255,255,255,0.8)] animate-scan-laser-full z-20"></div>
                        </div>
                     </div>

                     {/* Bottom UI Controls */}
                     <div className="p-6 space-y-8 pb-12">
                        {/* Tool Selector */}
                        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full p-1.5 flex items-center shadow-2xl">
                           <div className="bg-white px-5 py-2.5 rounded-full flex items-center gap-2.5 shadow-lg flex-shrink-0">
                              <div className="w-4 h-4 text-black flex items-center justify-center">
                                 <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4"/></svg>
                              </div>
                              <span className="text-[10px] font-black text-black uppercase tracking-wider">Scan skin</span>
                           </div>
                           <div className="flex-1 flex justify-around px-2 text-white/70">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M7 7h.01M7 3h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z"/></svg>
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>
                           </div>
                        </div>

                        {/* Shutter UI */}
                        <div className="flex justify-between items-center px-4">
                           <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                           </div>
                           <div className="w-22 h-22 rounded-full border-[5px] border-white/30 flex items-center justify-center p-1.5">
                              <div className="w-full h-full bg-white rounded-full shadow-inner ring-4 ring-black/5 active:scale-90 transition-transform"></div>
                           </div>
                           <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Secondary Supporting Mockup */}
               <div className="absolute right-[-5%] lg:right-[-10%] top-[30%] w-[290px] lg:w-[320px] aspect-[9/18.5] bg-primary rounded-[3.5rem] shadow-pink-glow overflow-hidden z-10 animate-float-delayed">
                  <div className="p-8 flex flex-col h-full bg-primary relative">
                     <div className="w-full aspect-square bg-white/10 rounded-full mt-12 mb-10 flex items-center justify-center p-8 relative ring-1 ring-white/20">
                        <img src="https://i.pinimg.com/736x/a5/d7/38/a5d7389bf2128a090ad1fa0ca398e2c0.jpg" className="w-full h-full object-cover rounded-full shadow-2xl" alt="Safe Nutrition" />
                     </div>
                     <h3 className="text-white text-[42px] font-black leading-[1] mb-8 tracking-tighter text-shadow">Safe <br/>Nutrition</h3>
                     <div className="mt-auto">
                        <button className="w-full bg-white text-primary py-4 rounded-[2rem] font-bold text-sm shadow-xl transition-all hover:scale-105 active:scale-95">Let's explore</button>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: HOW IT WORKS */}
      <section id="how" className="py-32 bg-white">
        <div className="container mx-auto px-10 md:px-24">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-primary font-bold text-sm mb-6 block">— The process</span>
            <h2 className="text-6xl font-heading font-black mb-10 text-pure-black leading-[1.05] tracking-tighter">How it works</h2>
            <p className="text-text-muted text-2xl font-medium leading-relaxed">Three simple steps to ingredient transparency.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-24">
            {[
              { id: '01', title: 'Point & Scan', desc: 'Aim your camera at any food or skincare label. Our AI digitizes the label with surgical precision.', img: 'https://i.pinimg.com/736x/95/22/72/9522729554135d6ce39546899c390b4d.jpg' },
              { id: '02', title: 'AI Insight', desc: 'We analyze the components against global databases to flag harmful chemicals and allergens.', img: 'https://i.pinimg.com/736x/a7/d2/5c/a7d25c8c795f7988c27bbf59b41e07f7.jpg' },
              { id: '03', title: 'Get Results', desc: 'Receive an instant report with health scores, risks, and personalized safe alternatives.', img: 'https://i.pinimg.com/736x/73/61/17/7361174ee650aeb6ba5d00a0c903777f.jpg' }
            ].map((item, i) => (
              <div key={i} className="group flex flex-col items-center">
                <div className="relative mb-14">
                   <div className="relative w-[300px] aspect-[9/18.5] rounded-[4rem] overflow-hidden shadow-premium transition-all duration-700 group-hover:-translate-y-8 group-hover:shadow-floating">
                      <img src={item.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt={item.title} />
                      <div className="absolute top-6 right-6 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center font-black text-xl shadow-pink-glow z-30">
                        {item.id}
                      </div>
                   </div>
                </div>
                <div className="text-center max-w-sm">
                   <h3 className="text-3xl font-black mb-5 text-pure-black">{item.title}</h3>
                   <p className="text-text-muted leading-relaxed font-semibold text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE FUNCTIONS */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-10 md:px-24">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-primary font-bold text-sm mb-6 block">— Core expertise</span>
            <h2 className="text-6xl font-heading font-black text-pure-black tracking-tighter">Two specialties. One AI.</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="group bg-[#FFF5F8] rounded-[5rem] p-16 relative overflow-hidden flex flex-col justify-between transition-all duration-700 hover:shadow-pink-glow hover:-translate-y-2 border border-primary/5">
              <div className="relative z-10">
                <div className="bg-primary text-white text-[11px] font-bold px-6 py-2.5 rounded-full inline-block mb-10 shadow-pink-glow">Skincare scan</div>
                <h3 className="text-6xl font-black text-pure-black mb-8 tracking-tighter leading-[1.1]">Skin <br/>Health Guard</h3>
                <p className="text-gray-500 font-semibold max-w-xs text-lg leading-relaxed mb-10">
                  Instantly identifies trace irritants, parabens, and endocrine disruptors in beauty products.
                </p>
                <div className="flex gap-3">
                  {['Parabens', 'Sulfates', 'Silicones'].map(t => (
                    <span key={t} className="bg-white px-4 py-2 rounded-xl text-[11px] font-bold text-primary border border-primary/10">{t}</span>
                  ))}
                </div>
              </div>
              <div className="absolute right-[-10%] bottom-[-15%] w-[60%] aspect-square z-0 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6">
                <img src="https://images.unsplash.com/photo-1555820585-c5ae44394b79?q=80&w=3125&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover rounded-[3rem] shadow-premium rotate-[-12deg]" alt="Skincare Analysis" />
              </div>
            </div>

            <div className="group bg-[#FFF5F8] rounded-[5rem] p-16 relative overflow-hidden flex flex-col justify-between transition-all duration-700 hover:shadow-pink-glow hover:-translate-y-2 border border-primary/5">
              <div className="relative z-10">
                <div className="bg-primary text-white text-[11px] font-bold px-6 py-2.5 rounded-full inline-block mb-10 shadow-pink-glow">Food analysis</div>
                <h3 className="text-6xl font-black text-pure-black mb-8 tracking-tighter leading-[1.1]">Nutrition <br/>Insight AI</h3>
                <p className="text-gray-500 font-semibold max-w-xs text-lg leading-relaxed mb-10">
                  Reveals hidden sugars, ultra-processed dyes, and nutritional traps hidden in labels.
                </p>
                <div className="flex gap-3">
                  {['Sugar highs', 'Dyes', 'GMOs'].map(t => (
                    <span key={t} className="bg-white px-4 py-2 rounded-xl text-[11px] font-bold text-primary border border-primary/10">{t}</span>
                  ))}
                </div>
              </div>
              <div className="absolute right-[-10%] bottom-[-15%] w-[60%] aspect-square z-0 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6">
                <img src="https://images.unsplash.com/photo-1622711321771-4a00d2bc0350?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover rounded-[3rem] shadow-premium rotate-[8deg]" alt="Nutrition Analysis" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScannerDemo />
      <Features />
      <DailyTrackers />
    </main>
  );
};

export default LandingPage;