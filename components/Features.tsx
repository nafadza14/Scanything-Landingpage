import React, { useState } from 'react';

const Features: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const inclusions = [
    {
      title: "Identify Ingredients With Just a Photo",
      description: "Snap a photo of any label, and Scanything's depth-AI parses every chemical and additive. Our engine then analyzes and breaks down risks to determine safety levels for your profile.",
      image: "https://i.pinimg.com/736x/a5/d7/38/a5d7389bf2128a090ad1fa0ca398e2c0.jpg",
      isScanning: true,
      isAnalyzing: false
    },
    {
      title: "Smart Food & Nutrition Recognition",
      description: "Instantly recognize meals and ingredients. Scanything identifies specific food items, calculates caloric density, and provides a comprehensive health score based on your metabolic goals.",
      image: "https://i.pinimg.com/736x/9b/5a/55/9b5a557a7925d175f7f994c16a254191.jpg",
      isScanning: false,
      isAnalyzing: true
    },
    {
      title: "Complete Safety Tracking and AI Suggestions",
      description: "Monitor your exposure to specific toxins, allergens, and inflammatory triggers. Get personalized AI suggestions to stay on track and optimize your health routine.",
      image: "https://i.pinimg.com/736x/44/d5/e7/44d5e77c7ee1527ed1fc621aedaf9fc0.jpg",
      isScanning: false,
      isAnalyzing: false
    },
    {
      title: "Keep Track of Reactions and Improvements",
      description: "Log your skin reactions or digestive symptoms effortlessly. Scanything helps you correlate ingredient exposure with your physical well-being over time.",
      image: "https://i.pinimg.com/736x/8c/7b/53/8c7b53a83d5e0f8c8b1799a6a785b432.jpg",
      isScanning: false,
      isAnalyzing: false
    }
  ];

  return (
    <section id="features" className="py-32 bg-[#F9F9F7] overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-7xl relative">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-heading font-black text-pure-black tracking-tighter">
            What does Scanything include?
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 relative">
          
          {/* Decorative Swirly Arrow */}
          {activeStep === 1 && (
            <div className="absolute left-[-150px] top-[40%] hidden xl:block animate-in fade-in slide-in-from-right-10 duration-1000 z-50">
               <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary opacity-60">
                 <path d="M20 120C20 120 40 80 80 80C120 80 140 160 180 160C220 160 220 120 220 120" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="10 10"/>
                 <path d="M210 110L220 120L210 130" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
            </div>
          )}

          {/* Left Side: Mockup UI */}
          <div className="w-full lg:w-[50%] flex justify-center">
            <div className="relative w-[380px] lg:w-[440px] aspect-[10/19] transition-all duration-700 bg-white rounded-[5rem] shadow-floating overflow-hidden">
              <div className="absolute top-7 left-1/2 -translate-x-1/2 w-32 h-8 bg-black rounded-full z-50 flex items-center justify-end px-4 border border-white/5">
                 <div className="w-2 h-2 rounded-full bg-blue-500/20 shadow-[0_0_4px_rgba(59,130,246,0.5)]"></div>
              </div>
              
              <div className="w-full h-full relative">
                <img 
                  src={inclusions[activeStep].image} 
                  className={`w-full h-full object-cover object-top transition-all duration-700 ${inclusions[activeStep].isScanning ? 'brightness-90 opacity-95' : 'brightness-100'}`} 
                  alt={inclusions[activeStep].title} 
                />
                
                {/* Case 1: Scanning UI */}
                {inclusions[activeStep].isScanning && (
                  <div className="absolute inset-0 flex flex-col z-20 pointer-events-none">
                    <div className="pt-16 px-12 flex justify-between items-center text-white">
                      <span className="text-[13px] font-bold">9:41</span>
                      <div className="flex gap-2 items-center">
                        <div className="w-5 h-3 bg-white/20 rounded-sm"></div>
                        <div className="w-6 h-3 bg-white rounded-sm"></div>
                      </div>
                    </div>
                    <div className="mt-8 px-12 flex justify-between items-center text-white">
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/10">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/></svg>
                      </div>
                      <span className="text-[15px] font-black tracking-tight">Scanner</span>
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/10">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="1.5"/><circle cx="6" cy="12" r="1.5"/><circle cx="18" cy="12" r="1.5"/></svg>
                      </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center relative px-12">
                      <div className="relative w-full aspect-square max-w-[280px]">
                        <div className="absolute top-0 left-0 w-12 h-12 border-t-[3.5px] border-l-[3.5px] border-white rounded-tl-[2.5rem] shadow-[0_0_10px_rgba(255,255,255,0.3)]"></div>
                        <div className="absolute top-0 right-0 w-12 h-12 border-t-[3.5px] border-r-[3.5px] border-white rounded-tr-[2.5rem] shadow-[0_0_10px_rgba(255,255,255,0.3)]"></div>
                        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-[3.5px] border-l-[3.5px] border-white rounded-bl-[2.5rem] shadow-[0_0_10px_rgba(255,255,255,0.3)]"></div>
                        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-[3.5px] border-r-[3.5px] border-white rounded-br-[2.5rem] shadow-[0_0_10px_rgba(255,255,255,0.3)]"></div>
                        <div className="absolute left-0 right-0 h-[3px] bg-primary shadow-[0_0_20px_4px_#E91E63] animate-scan-laser-full z-20"></div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Case 2: Analysis UI (Removed BRAND HIGHLIGHT text overlay) */}
                {inclusions[activeStep].isAnalyzing && (
                  <div className="absolute inset-0 flex flex-col z-20">
                    {/* Brands highlights removed as per request */}
                  </div>
                )}

                {/* Case 3 & 4: Snippet UI */}
                {!inclusions[activeStep].isScanning && !inclusions[activeStep].isAnalyzing && (
                  <div className="absolute inset-0 flex flex-col justify-end p-12 z-20 pointer-events-none">
                     <div className="bg-white/95 backdrop-blur-3xl p-8 rounded-[3.5rem] shadow-floating animate-in fade-in slide-in-from-bottom-5 duration-700">
                        <div className="flex items-center gap-5 mb-5">
                           <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                           </div>
                           <p className="font-black text-pure-black tracking-tight text-base">{inclusions[activeStep].title}</p>
                        </div>
                        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                           <div className="h-full bg-primary w-[85%] rounded-full shadow-pink-glow transition-all duration-1000"></div>
                        </div>
                     </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Side: Features List */}
          <div className="w-full lg:w-[45%] space-y-6">
            {inclusions.map((item, index) => (
              <div 
                key={index} 
                onClick={() => setActiveStep(index)}
                className={`p-10 rounded-[3.5rem] transition-all duration-500 cursor-pointer ${
                  activeStep === index 
                    ? 'bg-white shadow-xl scale-[1.02]' 
                    : 'bg-transparent opacity-40 hover:opacity-100'
                }`}
              >
                <h3 className="text-2xl font-black text-pure-black mb-3 tracking-tighter">
                  {item.title}
                </h3>
                <p className="text-text-muted text-lg leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-16">
          {inclusions.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setActiveStep(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${activeStep === i ? 'bg-primary w-8' : 'bg-gray-200'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;