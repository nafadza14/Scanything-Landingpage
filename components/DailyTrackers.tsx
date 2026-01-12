
import React from 'react';

const DailyTrackers: React.FC = () => {
  return (
    <section id="trackers" className="py-24 bg-surface-light overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Holistic Monitoring</span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">Daily Health Trackers</h2>
          <p className="text-text-secondary text-xl max-w-2xl mx-auto leading-relaxed">
            Scanything goes beyond scanning. Monitor your internal and external health with our integrated tracking ecosystem.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Food Tracker Card */}
          <div className="group relative bg-white rounded-[3.5rem] p-10 shadow-xl border border-border-soft overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    {/* Fork Path */}
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2M7 2v20" />
                    {/* Spoon Path */}
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 15V2v0a5 5 0 00-5 5v8c0 1.1.9 2 2 2h1a2 2 0 002-2zM18 15v7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-pure-black">Food Tracker</h3>
                  <p className="text-primary font-bold text-sm uppercase tracking-tighter">Inner Wellness</p>
                </div>
              </div>

              <p className="text-text-secondary text-lg mb-10 leading-relaxed">
                Log your meals with a single scan. Automatically track macros, allergens, and inflammatory triggers to understand how your diet impacts your energy and long-term health.
              </p>

              <div className="mt-auto relative rounded-3xl overflow-hidden border border-border-soft bg-gray-50 p-6">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <span className="text-xs font-bold text-text-secondary uppercase">Today's Intake</span>
                    <div className="text-2xl font-black">1,840 kcal</div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-success uppercase">Health Avg</span>
                    <div className="text-xl font-bold text-success">8.4</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[75%] rounded-full"></div>
                  </div>
                  <div className="flex justify-between text-[10px] font-bold text-text-secondary">
                    <span>PROTEIN (120g)</span>
                    <span>75% OF GOAL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skin Tracker Card */}
          <div className="group relative bg-white rounded-[3.5rem] p-10 shadow-xl border border-border-soft overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-brand-teal rounded-2xl flex items-center justify-center text-white shadow-lg shadow-brand-teal/20">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-pure-black">Skin Tracker</h3>
                  <p className="text-brand-teal font-bold text-sm uppercase tracking-tighter">Outer Radiance</p>
                </div>
              </div>

              <p className="text-text-secondary text-lg mb-10 leading-relaxed">
                Document your skincare routine and observe changes. Our AI correlates product ingredients with your skin's reaction to identify exactly what causes sensitivity or breakouts.
              </p>

              <div className="mt-auto relative rounded-3xl overflow-hidden border border-border-soft bg-gray-50 p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-300 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                      </div>
                    ))}
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-brand-teal flex items-center justify-center text-[10px] text-white font-bold">+12</div>
                  </div>
                  <span className="text-xs font-bold bg-white px-3 py-1 rounded-full border border-border-soft shadow-sm">Day 14 Progress</span>
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {[1,1,1,1,0,1,0].map((active, i) => (
                    <div key={i} className={`h-8 rounded-lg flex items-center justify-center ${active ? 'bg-brand-teal text-white shadow-md shadow-brand-teal/20' : 'bg-gray-200 text-gray-400'}`}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    </div>
                  ))}
                </div>
                <p className="text-center text-[10px] font-bold text-text-secondary mt-3">CONSISTENCY STREAK: 4 DAYS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyTrackers;
