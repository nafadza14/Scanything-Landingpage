import React from 'react';

const DailyTrackers: React.FC = () => {
  return (
    <section id="trackers" className="py-32 bg-[#FDFDFD] overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-28">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-primary font-bold uppercase tracking-widest text-[10px]">Holistic Monitoring</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-heading font-black mb-10 text-pure-black tracking-tighter">
            Daily Health Trackers
          </h2>
          <p className="text-text-muted text-xl md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto">
            Scanything goes beyond scanning. Monitor your wellness with our integrated tracking ecosystem designed for your longevity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {/* Food Tracker Card */}
          <div className="group bg-white rounded-[4.5rem] p-12 shadow-premium border border-gray-100/50 transition-all duration-700 hover:-translate-y-3 hover:shadow-floating overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-primary/10 transition-colors"></div>
            
            <div className="flex items-center gap-8 mb-12 relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-pink-600 rounded-[2rem] flex items-center justify-center text-white shadow-pink-glow rotate-[-5deg] group-hover:rotate-0 transition-transform duration-500">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h3 className="text-4xl font-black text-pure-black tracking-tighter">Food Journal</h3>
                <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] mt-2">Molecular Insight</p>
              </div>
            </div>

            <p className="text-text-muted text-lg mb-12 font-medium leading-relaxed max-w-md">
              Log meals with AI precision. Scanything automatically identifies processed additives and calculates your daily inflammatory load.
            </p>

            <div className="bg-[#F9FAFB] rounded-[3rem] p-10 border border-gray-100 shadow-inner relative overflow-hidden">
               <div className="flex justify-between items-end mb-8 relative z-10">
                  <div>
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-2">Inflammatory Score</span>
                    <div className="text-5xl font-black text-pure-black tracking-tighter">Low Risk</div>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-black text-primary">84%</div>
                    <span className="text-[10px] font-black text-primary uppercase tracking-widest">Purity Avg</span>
                  </div>
               </div>
               <div className="relative h-4 w-full bg-gray-200 rounded-full overflow-hidden mb-2">
                  <div className="h-full bg-primary w-[84%] rounded-full shadow-pink-glow transition-all duration-1000 ease-out"></div>
               </div>
               <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                 <span>Toxic load</span>
                 <span>Optimal zone</span>
               </div>
            </div>
          </div>

          {/* Skin Tracker Card */}
          <div className="group bg-white rounded-[4.5rem] p-12 shadow-premium border border-gray-100/50 transition-all duration-700 hover:-translate-y-3 hover:shadow-floating overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-primary/10 transition-colors"></div>

            <div className="flex items-center gap-8 mb-12 relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-pink-500 rounded-[2rem] flex items-center justify-center text-white shadow-pink-glow rotate-[5deg] group-hover:rotate-0 transition-transform duration-500">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.456-2.455l.259-1.036.259 1.036a3.375 3.375 0 002.455 2.456l1.036.259-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div>
                <h3 className="text-4xl font-black text-pure-black tracking-tighter">Dermal Analytics</h3>
                <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] mt-2">Barrier Integrity</p>
              </div>
            </div>

            <p className="text-text-muted text-lg mb-12 font-medium leading-relaxed max-w-md">
              The first tracker to correlate ingredient exposure with active skin sensitivity. Predict flare-ups before they happen.
            </p>

            <div className="bg-[#F9FAFB] rounded-[3rem] p-10 border border-gray-100 shadow-inner relative">
                <div className="flex justify-between items-center mb-10">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-100 overflow-hidden shadow-sm transition-transform hover:scale-110">
                        <img src={`https://i.pravatar.cc/100?img=${i+25}`} alt="Profile" className="w-full h-full object-cover" />
                      </div>
                    ))}
                    <div className="w-12 h-12 rounded-full border-4 border-white bg-primary flex items-center justify-center text-[10px] text-white font-black shadow-lg">AI</div>
                  </div>
                  <div className="bg-white px-5 py-2.5 rounded-full border border-gray-100 shadow-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-success"></span>
                    <span className="text-[10px] font-black text-pure-black uppercase tracking-tight">Barrier: Stable</span>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-4">
                  {[1,1,1,1,1,1,0].map((active, i) => (
                    <div key={i} className={`h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${active ? 'bg-primary text-white shadow-pink-glow scale-105' : 'bg-white text-gray-200 border border-gray-100'}`}>
                      {active ? (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-200"></span>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex justify-between text-[9px] font-black text-gray-400 uppercase tracking-widest px-1">
                   <span>MT</span><span>TU</span><span>WE</span><span>TH</span><span>FR</span><span>SA</span><span className="text-primary">SU</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyTrackers;