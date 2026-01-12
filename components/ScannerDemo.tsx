import React from 'react';

const ScannerDemo: React.FC = () => {
  return (
    <section id="demo" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-8 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-28">
          <span className="text-primary font-bold text-sm mb-6 block">— Transparency node</span>
          <h2 className="text-6xl md:text-7xl font-heading font-black mb-10 tracking-tighter text-pure-black">Expert analysis results</h2>
          <p className="text-text-muted text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-semibold">
            Tailored insights for your health profile. From skincare reactions to metabolic food scores.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto mb-32">
          {/* Analysis Case 1 - Food */}
          <div className="space-y-10 group">
            <div className="flex justify-between items-center px-4">
                <h3 className="text-3xl font-black text-pure-black tracking-tighter">Food Guard</h3>
                <div className="bg-primary/10 text-primary px-6 py-2 rounded-full text-xs font-bold border border-primary/20">
                    Glucose focus
                </div>
            </div>
            <div className="bg-[#FFF5F8] p-14 rounded-[5rem] shadow-premium border border-primary/10 space-y-12 transition-all duration-500 group-hover:bg-white group-hover:shadow-floating">
                <div className="relative pl-10 border-l-4 border-primary">
                  <span className="text-[11px] font-bold text-primary block mb-6">Metabolic health</span>
                  <div className="p-8 bg-white rounded-[3rem] border border-gray-100 shadow-clean flex items-center gap-7">
                    <div className="w-16 h-16 bg-primary rounded-3xl flex items-center justify-center text-white text-2xl font-black shadow-pink-glow shrink-0">!</div>
                    <div>
                      <p className="text-lg font-black text-pure-black tracking-tight">Hidden Sugars</p>
                      <p className="text-sm text-text-muted mt-2 font-semibold italic">"Maltodextrin flagged for your glucose profile."</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>

          {/* Analysis Case 2 - Skincare */}
          <div className="space-y-10 group">
            <div className="flex justify-between items-center px-4">
                <h3 className="text-3xl font-black text-pure-black tracking-tighter">Skin Guard</h3>
                <div className="bg-primary/10 text-primary px-6 py-2 rounded-full text-xs font-bold border border-primary/20">
                    Clean beauty
                </div>
            </div>
            <div className="bg-[#FFF5F8] p-14 rounded-[5rem] shadow-premium border border-primary/10 space-y-12 transition-all duration-500 group-hover:bg-white group-hover:shadow-floating">
                <div className="relative pl-10 border-l-4 border-primary">
                  <span className="text-[11px] font-bold text-primary block mb-6">Purity scan</span>
                  <div className="p-8 bg-white rounded-[3rem] border border-gray-100 shadow-clean flex items-center gap-7">
                    <div className="w-16 h-16 bg-primary rounded-3xl flex items-center justify-center text-white text-2xl font-black shadow-pink-glow shrink-0">✓</div>
                    <div>
                      <p className="text-lg font-black text-pure-black tracking-tight">Oncology Safe</p>
                      <p className="text-sm text-text-muted mt-2 font-semibold italic">"Verified free from endocrine disruptors."</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { n: 'Sarah', t: 'Skincare focus', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3g5A3U817Rn_JJT0eBjYbe8Sp01c0dEe_5g&s', txt: 'Identify trace irritants in my serum instantly.' },
            { n: 'Mark', t: 'Food transparency', img: 'https://www.qatarcricketassociation.org/uploads/players/profiles/1658521629.png', txt: 'Flags synthetic dyes in my snacks instantly.' },
            { n: 'David', t: 'Metabolic support', img: 'https://media.istockphoto.com/id/1781580425/photo/a-very-fat-man-is-eating-a-burger.jpg?s=612x612&w=0&k=20&c=SZqH0eW7TM_Uo1MlLDSiAxetKXIqLihagcxoF9tSzMQ=', txt: 'Hidden sugars are no longer sabotaging me.' },
            { n: 'Elena', t: 'Clean beauty', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHWaFLJaVa8LGe9xWXpEm6ykQXZTDE-PlR0A&s', txt: 'Instantly flags harmful retinoids for pregnancy.' },
          ].map((u, i) => (
            <div key={i} className="p-10 rounded-[4rem] border border-gray-100 shadow-clean transition-all duration-500 hover:bg-white hover:shadow-premium group bg-[#FFF5F8]">
              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-premium">
                  <img src={u.img} alt={u.n} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-black text-pure-black text-lg">{u.n}</h4>
                  <p className="text-primary text-[11px] font-bold">{u.t}</p>
                </div>
              </div>
              <p className="text-text-muted text-[15px] leading-relaxed font-semibold italic mb-8">"{u.txt}"</p>
              <div className="pt-6 border-t border-gray-100 text-[11px] font-bold text-gray-400 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                Verified user
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScannerDemo;