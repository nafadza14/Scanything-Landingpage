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
                <span className="text-primary font-bold text-sm tracking-wide uppercase">Your body has a language. We speak it.</span>
              </div>
              
              <h1 className="text-6xl md:text-[82px] font-heading font-black text-white leading-[1.05] mb-10 tracking-tighter">
                We Know Your <br/>
                <span className="text-primary">Body Better</span> <br/>
                Than Anyone.
              </h1>
              
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12 max-w-lg font-medium">
                Stop guessing with your health. Scanything is the only AI that doesn't just read labels. it decodes how ingredients interact with your unique biology. Find the food and skincare that perfectly synchronizes with your body’s specific condition, right now.
              </p>
              
              <div className="flex items-center">
                <a 
                  href="https://product-scan-app.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-12 py-5 rounded-full font-bold transition-all shadow-pink-glow hover:scale-105 hover:bg-pink-600 active:bg-pink-700 active:scale-95 active:shadow-[0_0_40px_rgba(233,30,99,0.9)] group"
                >
                   <span className="text-lg">Scan for My Perfect Match</span>
                </a>
              </div>
            </div>

            <div className="relative h-[650px] lg:h-[900px] flex items-center justify-center">
               {/* Main Scanner Mockup */}
               <div className="absolute left-[-2%] lg:left-[-5%] top-[5%] w-[350px] lg:w-[420px] aspect-[10/19] bg-black rounded-[5rem] shadow-floating overflow-hidden z-20 animate-float">
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-32 h-8 bg-black rounded-full z-50 flex items-center justify-end px-3 border border-white/5">
                    <div className="w-2 h-2 rounded-full bg-blue-500/20 shadow-[0_0_4px_rgba(59,130,246,0.5)]"></div>
                  </div>

                  <img 
                    src="https://matahari.com/cdn/shop/files/84341655_5.jpg?v=1742059226&width=720" 
                    className="absolute inset-0 w-full h-full object-cover brightness-90" 
                    alt="Scanning Product" 
                  />
                  
                  <div className="absolute inset-0 flex flex-col z-10 pointer-events-none">
                     <div className="flex-1 flex items-center justify-center px-10 relative">
                        <div className="relative w-full aspect-square max-w-[280px]">
                           <div className="absolute top-0 left-0 w-12 h-12 border-t-[3.5px] border-l-[3.5px] border-white rounded-tl-3xl shadow-[0_0_10px_rgba(255,255,255,0.3)]"></div>
                           <div className="absolute top-0 right-0 w-12 h-12 border-t-[3.5px] border-r-[3.5px] border-white rounded-tr-3xl shadow-[0_0_10px_rgba(255,255,255,0.3)]"></div>
                           <div className="absolute bottom-0 left-0 w-12 h-12 border-b-[3.5px] border-l-[3.5px] border-white rounded-bl-3xl shadow-[0_0_10px_rgba(255,255,255,0.3)]"></div>
                           <div className="absolute bottom-0 right-0 w-12 h-12 border-b-[3.5px] border-r-[3.5px] border-white rounded-br-3xl shadow-[0_0_10px_rgba(255,255,255,0.3)]"></div>
                           <div className="absolute left-0 right-0 h-[3px] bg-white shadow-[0_0_20px_4px_rgba(255,255,255,0.8)] animate-scan-laser-full z-20"></div>
                        </div>
                     </div>

                     <div className="p-6 space-y-8 pb-16">
                        <div className="flex justify-between items-center px-4">
                           <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white">
                              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                           </div>
                           <div className="w-24 h-24 rounded-full border-[5px] border-white/30 flex items-center justify-center p-1.5">
                              <div className="w-full h-full bg-white rounded-full shadow-inner ring-4 ring-black/5"></div>
                           </div>
                           <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white">
                              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Secondary Supporting Mockup - High Quality Rounded Full Screenshot */}
               <div className="absolute right-[-8%] lg:right-[-15%] top-[30%] w-[310px] lg:w-[360px] aspect-[10/19] bg-white rounded-[5rem] shadow-pink-glow overflow-hidden z-10 animate-float-delayed border-none">
                  <img 
                    src="https://i.pinimg.com/736x/9b/5a/55/9b5a557a7925d175f7f994c16a254191.jpg" 
                    className="w-full h-full object-cover" 
                    alt="Body Knowledge Analysis Full Screen" 
                  />
                  
                  {/* BRAND HIGHLIGHT OVERLAY */}
                  <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[85%] z-30 animate-in fade-in zoom-in duration-1000 delay-700">
                     <div className="bg-primary/95 backdrop-blur-md px-5 py-4 rounded-3xl shadow-xl border border-white/30 text-center transform -rotate-2">
                        <p className="text-white font-black text-[13px] leading-tight tracking-tight uppercase">
                          We Know Your Body Better Than Anyone.
                        </p>
                     </div>
                  </div>

                  {/* Subtle Phone Header */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-black/10 backdrop-blur-md rounded-full z-20 border border-white/10"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* REST OF THE SECTIONS */}
      <section id="how" className="py-32 bg-white">
        <div className="container mx-auto px-10 md:px-24">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-primary font-bold text-sm mb-6 block">— The process</span>
            <h2 className="text-6xl font-heading font-black mb-10 text-pure-black leading-[1.05] tracking-tighter">How it works</h2>
            <p className="text-text-muted text-2xl font-medium leading-relaxed">Three simple steps to ingredient transparency.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-16 xl:gap-24">
            {[
              { id: '01', title: 'Point & Scan', desc: 'Aim your camera at any food or skincare label. Our AI digitizes the label with surgical precision.', img: 'https://i.pinimg.com/736x/95/22/72/9522729554135d6ce39546899c390b4d.jpg' },
              { id: '02', title: 'AI Insight', desc: 'We analyze the components against global databases to flag harmful chemicals and allergens.', img: 'https://i.pinimg.com/736x/a7/d2/5c/a7d25c8c795f7988c27bbf59b41e07f7.jpg' },
              { id: '03', title: 'Get Results', desc: 'Receive an instant report with health scores, risks, and personalized safe alternatives.', img: 'https://i.pinimg.com/736x/73/61/17/7361174ee650aeb6ba5d00a0c903777f.jpg' }
            ].map((item, i) => (
              <div key={i} className="group flex flex-col items-center">
                <div className="relative mb-14">
                   <div className="relative w-[320px] aspect-[10/19] rounded-[5rem] overflow-hidden shadow-premium transition-all duration-700 group-hover:-translate-y-8 group-hover:shadow-floating bg-white">
                      <img src={item.img} className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105" alt={item.title} />
                      <div className="absolute top-10 right-10 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-black text-2xl shadow-pink-glow z-30">
                        {item.id}
                      </div>
                   </div>
                </div>
                <div className="text-center max-w-sm">
                   <h3 className="text-3xl font-black mb-5 text-pure-black tracking-tighter">{item.title}</h3>
                   <p className="text-text-muted leading-relaxed font-semibold text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE FUNCTIONS */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-10 md:px-24">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-primary font-bold text-sm mb-6 block">— Core expertise</span>
            <h2 className="text-6xl font-heading font-black text-pure-black tracking-tighter">Two specialties. One AI.</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="group bg-[#FFF5F8] rounded-[6rem] p-16 relative overflow-hidden flex flex-col justify-between transition-all duration-700 hover:shadow-pink-glow hover:-translate-y-2 border-none">
              <div className="relative z-10">
                <div className="bg-primary text-white text-[11px] font-bold px-6 py-2.5 rounded-full inline-block mb-10 shadow-pink-glow">Skincare scan</div>
                <h3 className="text-6xl font-black text-pure-black mb-8 tracking-tighter leading-[1.1]">Skin <br/>Health Guard</h3>
                <p className="text-gray-500 font-semibold max-w-xs text-lg leading-relaxed mb-10">
                  Instantly identifies trace irritants, parabens, and endocrine disruptors in beauty products.
                </p>
                <div className="flex gap-3">
                  {['Parabens', 'Sulfates', 'Silicones'].map(t => (
                    <span key={t} className="bg-white px-5 py-2.5 rounded-2xl text-[11px] font-bold text-primary shadow-sm">{t}</span>
                  ))}
                </div>
              </div>
              <div className="absolute right-[-10%] bottom-[-15%] w-[60%] aspect-square z-0 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6">
                <img src="https://images.unsplash.com/photo-1555820585-c5ae44394b79?q=80&w=3125&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover rounded-[4rem] shadow-premium rotate-[-12deg]" alt="Skincare Analysis" />
              </div>
            </div>

            <div className="group bg-[#FFF5F8] rounded-[6rem] p-16 relative overflow-hidden flex flex-col justify-between transition-all duration-700 hover:shadow-pink-glow hover:-translate-y-2 border-none">
              <div className="relative z-10">
                <div className="bg-primary text-white text-[11px] font-bold px-6 py-2.5 rounded-full inline-block mb-10 shadow-pink-glow">Food analysis</div>
                <h3 className="text-6xl font-black text-pure-black mb-8 tracking-tighter leading-[1.1]">Nutrition <br/>Insight AI</h3>
                <p className="text-gray-500 font-semibold max-w-xs text-lg leading-relaxed mb-10">
                  Reveals hidden sugars, ultra-processed dyes, and nutritional traps hidden in labels.
                </p>
                <div className="flex gap-3">
                  {['Sugar highs', 'Dyes', 'GMOs'].map(t => (
                    <span key={t} className="bg-white px-5 py-2.5 rounded-2xl text-[11px] font-bold text-primary shadow-sm">{t}</span>
                  ))}
                </div>
              </div>
              <div className="absolute right-[-10%] bottom-[-15%] w-[60%] aspect-square z-0 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6">
                <img src="https://images.unsplash.com/photo-1622711321771-4a00d2bc0350?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover rounded-[4rem] shadow-premium rotate-[8deg]" alt="Nutrition Analysis" />
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