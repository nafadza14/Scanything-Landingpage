import React from 'react';

const ScannerDemo: React.FC = () => {
  return (
    <section id="demo" className="py-32 bg-[#FDFDFD] overflow-hidden relative">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-28">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary/5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-primary font-bold uppercase tracking-widest text-[10px]">AI Transparency Node</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-heading font-black mb-10 text-pure-black tracking-tighter">
            Expert Analysis Results
          </h2>
          <p className="text-text-muted text-xl md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto">
            Our AI decodes complex labels into simple, actionable health scores tailored to your unique biology.
          </p>
        </div>

        {/* Main Analysis Cards (Matching DailyTrackers Style) */}
        <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto mb-32">
          {/* Food Guard Card */}
          <div className="group bg-white rounded-[6rem] p-16 shadow-premium transition-all duration-700 hover:-translate-y-3 hover:shadow-floating overflow-hidden relative border-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-primary/10 transition-colors"></div>
            
            <div className="flex items-center gap-8 mb-12 relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-pink-600 rounded-[2.5rem] flex items-center justify-center text-white shadow-pink-glow rotate-[-5deg] group-hover:rotate-0 transition-transform duration-500">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-4xl font-black text-pure-black tracking-tighter">Food Guard</h3>
                <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] mt-2">Glucose & Metabolic</p>
              </div>
            </div>

            <div className="space-y-8 relative z-10">
              <div className="p-8 bg-[#F9FAFB] rounded-[3.5rem] border-none shadow-inner">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Molecular Case Study</span>
                  <span className="text-primary font-black text-xs">Flagged: High Risk</span>
                </div>
                <p className="text-pure-black font-black text-lg mb-4 leading-tight">Maltodextrin Detection</p>
                <p className="text-text-muted text-sm font-semibold leading-relaxed mb-6 italic">
                  "Identified hidden sugars that spike insulin levels. Scanything suggested a clean alternative with 0g glycemic load."
                </p>
                <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[92%] rounded-full shadow-pink-glow"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Skin Guard Card */}
          <div className="group bg-white rounded-[6rem] p-16 shadow-premium transition-all duration-700 hover:-translate-y-3 hover:shadow-floating overflow-hidden relative border-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-primary/10 transition-colors"></div>
            
            <div className="flex items-center gap-8 mb-12 relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-pink-500 rounded-[2.5rem] flex items-center justify-center text-white shadow-pink-glow rotate-[5deg] group-hover:rotate-0 transition-transform duration-500">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-4xl font-black text-pure-black tracking-tighter">Skin Guard</h3>
                <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] mt-2">Dermal Purity Scan</p>
              </div>
            </div>

            <div className="space-y-8 relative z-10">
              <div className="p-8 bg-[#F9FAFB] rounded-[3.5rem] border-none shadow-inner">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Dermal Case Study</span>
                  <span className="text-success font-black text-xs">Verified: Clean</span>
                </div>
                <p className="text-pure-black font-black text-lg mb-4 leading-tight">Paraben-Free Validation</p>
                <p className="text-text-muted text-sm font-semibold leading-relaxed mb-6 italic">
                  "Analyzed 15+ complex alcohols and preservatives. Confirmed zero endocrine disruptors for pregnancy safety."
                </p>
                <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-success w-[100%] rounded-full shadow-[0_0_12px_rgba(46,125,50,0.4)]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { n: 'Sarah Jenkins', t: 'Skincare Routine', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3g5A3U817Rn_JJT0eBjYbe8Sp01c0dEe_5g&s', txt: 'Finally identified the hidden fragrance causing my contact dermatitis.' },
            { n: 'Mark Thorne', t: 'Metabolic Health', img: 'https://www.qatarcricketassociation.org/uploads/players/profiles/1658521629.png', txt: 'Flags synthetic dyes in my "healthy" snacks that were affecting my energy.' },
            { n: 'David Miller', t: 'Body Composition', img: 'https://media.istockphoto.com/id/1781580425/photo/a-very-fat-man-is-eating-a-burger.jpg?s=612x612&w=0&k=20&c=SZqH0eW7TM_Uo1MlLDSiAxetKXIqLihagcxoF9tSzMQ=', txt: 'Hidden sugars are no longer sabotaging my daily glucose targets.' },
            { n: 'Elena Rodriguez', t: 'Clean Beauty', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHWaFLJaVa8LGe9xWXpEm6ykQXZTDE-PlR0A&s', txt: 'Essential for my pregnancy. Instantly flags harmful retinoids and acids.' },
          ].map((u, i) => (
            <div key={i} className="group p-10 rounded-[4rem] bg-white shadow-premium transition-all duration-500 hover:shadow-floating hover:-translate-y-2 border-none">
              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 rounded-full overflow-hidden border-[4px] border-gray-50 shadow-sm transition-transform duration-500 group-hover:scale-110">
                  <img src={u.img} alt={u.n} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-black text-pure-black text-lg tracking-tight leading-none mb-1">{u.n.split(' ')[0]}</h4>
                  <p className="text-primary text-[10px] font-black uppercase tracking-widest">{u.t}</p>
                </div>
              </div>
              <p className="text-text-muted text-[15px] leading-relaxed font-semibold italic mb-8">"{u.txt}"</p>
              <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                   <span className="w-2 h-2 rounded-full bg-success"></span>
                   <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Verified Scan</span>
                </div>
                <div className="flex gap-0.5">
                   {[...Array(5)].map((_, star) => (
                     <div key={star} className="w-1 h-1 rounded-full bg-primary/40"></div>
                   ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScannerDemo;