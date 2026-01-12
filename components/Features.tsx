
import React, { useState } from 'react';

const Features: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      title: "Analyze Labels With Just a Picture",
      description: "Snap a photo of any ingredient label. Our AI instantly parses complex chemical names and breaks down their safety, health risks, and nutritional impact.",
      image: "https://i.pinimg.com/736x/a5/d7/38/a5d7389bf2128a090ad1fa0ca398e2c0.jpg",
      type: "built-ui",
      mockupData: {
        title: "Chocolate Cookies",
        calories: "101",
        prot: "1g",
        carbs: "14g",
        score: "4.2",
        scoreColor: "text-primary",
        scoreBg: "bg-primary"
      }
    },
    {
      title: "Search Our Database of over 500k Products",
      description: "Quickly find and evaluate products from our extensive global database. Search by name, brand, or scan barcodes for instant transparency.",
      image: "https://i.pinimg.com/736x/9e/70/22/9e7022233ae6caf110ef58ed4180fd68.jpg",
      type: "screenshot"
    },
    {
      title: "Personalized Insights and AI Alerts",
      description: "Set your health profile—from pregnancy to diabetes—and get custom AI suggestions that flag specific ingredients based on your unique needs.",
      image: "https://i.pinimg.com/736x/7e/51/d7/7e51d75589065a8fc4ea63c92d785624.jpg",
      type: "screenshot"
    },
    {
      title: "Track Your Ingredients and Health Progress",
      description: "Keep a history of what you consume and apply to your skin. Scanything helps you stay informed and active, integrating your health routine effortlessly.",
      image: "https://i.pinimg.com/736x/2b/87/d8/2b87d86f60e7631a6f494f6e45b0365e.jpg",
      type: "screenshot"
    }
  ];

  const activeFeature = features[activeIndex];

  return (
    <section id="features" className="py-24 bg-[#FCFDF9] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center text-pure-black mb-16">
          What does Scanything include?
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">
          {/* Left Side: Mockup */}
          <div className="relative w-full max-w-[380px]">
            <div className="relative z-10 rounded-[3.5rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.2)] bg-white aspect-[9/18.5] transition-all duration-700 border-[1px] border-border-soft ring-1 ring-black/5">
              {activeFeature.type === "built-ui" ? (
                <div className="flex flex-col h-full bg-white animate-in fade-in duration-700">
                  <div className="h-[45%] overflow-hidden relative">
                    <img 
                      src={activeFeature.image} 
                      alt="Product" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                        <div className="w-4/5 h-[1px] bg-primary/80 shadow-[0_0_10px_#E91E63] animate-[scan_3s_linear_infinite] absolute"></div>
                    </div>
                  </div>
                  <div className="flex-1 p-8 flex flex-col gap-5">
                    <div className="flex justify-between items-center">
                      <h4 className="text-2xl font-bold">{activeFeature.mockupData?.title}</h4>
                      <span className="text-xs text-text-secondary font-medium uppercase tracking-tighter">Processed Food</span>
                    </div>
                    
                    <div className="bg-surface-light p-5 rounded-3xl flex justify-between items-center border border-border-soft">
                      <div>
                        <span className="text-[11px] uppercase font-bold text-text-secondary block mb-1">Calories / Srv</span>
                        <span className="text-3xl font-extrabold text-pure-black">{activeFeature.mockupData?.calories}</span>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-center">
                          <span className="text-[10px] uppercase font-bold text-text-secondary block mb-1">Prot</span>
                          <span className="text-sm font-bold">{activeFeature.mockupData?.prot}</span>
                        </div>
                        <div className="text-center">
                          <span className="text-[10px] uppercase font-bold text-text-secondary block mb-1">Sugar</span>
                          <span className="text-sm font-bold">7.7g</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-bold">Health Score</span>
                        <span className={`text-sm font-extrabold ${activeFeature.mockupData?.scoreColor}`}>
                            {activeFeature.mockupData?.score} / 10
                        </span>
                      </div>
                      <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                            className={`h-full ${activeFeature.mockupData?.scoreBg}`}
                            style={{ width: `${(Number(activeFeature.mockupData?.score) * 10)}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="mt-auto flex gap-3">
                      <button className="flex-1 py-4 bg-white border border-border-soft rounded-2xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                        Ingredients
                      </button>
                      <button className="flex-1 py-4 bg-pure-black text-white rounded-2xl text-xs font-bold hover:opacity-90 transition-opacity">
                        Log Diet
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full bg-black animate-in fade-in zoom-in-95 duration-500 overflow-hidden">
                   <img 
                    src={activeFeature.image} 
                    alt={activeFeature.title} 
                    className="w-full h-full object-cover rounded-[3.5rem]"
                   />
                </div>
              )}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-white/10 backdrop-blur-md rounded-b-2xl z-20"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-primary/5 rounded-full -z-10 blur-3xl opacity-60"></div>
          </div>

          {/* Right Side: Feature Cards */}
          <div className="flex flex-col gap-6 w-full max-w-[500px]">
            {features.map((feature, index) => (
              <button 
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`group p-8 rounded-[2.5rem] border text-left transition-all duration-500 outline-none ${
                  activeIndex === index 
                  ? 'bg-white border-border-soft shadow-[0_20px_40px_rgba(0,0,0,0.06)] scale-105' 
                  : 'bg-transparent border-transparent hover:bg-white hover:border-border-soft hover:shadow-lg opacity-60 hover:opacity-100'
                }`}
              >
                <div className="flex items-start gap-5">
                   <div className={`w-3 h-12 rounded-full transition-all duration-500 ${activeIndex === index ? 'bg-primary scale-y-100' : 'bg-gray-200 scale-y-0'}`}></div>
                   <div>
                    <h3 className={`text-2xl font-bold mb-3 transition-colors duration-500 ${activeIndex === index ? 'text-pure-black' : 'text-gray-500'}`}>
                      {feature.title}
                    </h3>
                    <p className={`leading-relaxed transition-colors duration-500 ${activeIndex === index ? 'text-text-secondary' : 'text-gray-400'}`}>
                      {feature.description}
                    </p>
                   </div>
                </div>
              </button>
            ))}
            
            <div className="flex justify-center lg:justify-start gap-3 mt-6 px-12">
              {features.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${activeIndex === i ? 'bg-primary w-10' : 'bg-gray-200 w-2 hover:bg-gray-300'}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
