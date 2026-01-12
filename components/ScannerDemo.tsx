import React from 'react';

const ScannerDemo: React.FC = () => {
  return (
    <section id="demo" className="py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Tailored Transparency</span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">Use Case Driven Analysis</h2>
          <p className="text-text-secondary text-xl max-w-2xl mx-auto leading-relaxed">
            Scanything adapts its analysis based on your health profile. Whether managing diabetes, navigating pregnancy, or recovering from treatment.
          </p>
        </div>

        {/* Reference Showcase Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-32">
          
          {/* Ingredient Risks & Use Cases */}
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-bold text-pure-black">Custom Risk Detection</h3>
                <div className="bg-[#E7F7EF] text-[#2E7D32] px-4 py-1 rounded-full text-sm font-bold border border-[#C8E6C9]">
                    AI-Powered Filter
                </div>
            </div>
            
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-border-soft space-y-8">
                <div>
                  <span className="text-[11px] font-bold text-primary uppercase tracking-widest block mb-4">Case: Diabetes Care</span>
                  <div className="flex items-center gap-3 p-4 bg-red-50 rounded-2xl border border-red-100">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-xs">!</div>
                    <p className="text-sm font-bold text-pure-black">Flagged: High Glycemic Index (Maltodextrin detected)</p>
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-bold text-brand-teal uppercase tracking-widest block mb-4">Case: Post-Chemo Skin</span>
                  <div className="flex items-center gap-3 p-4 bg-teal-50 rounded-2xl border border-teal-100">
                    <div className="w-8 h-8 bg-brand-teal rounded-full flex items-center justify-center text-white text-xs">!</div>
                    <p className="text-sm font-bold text-pure-black">Flagged: Alcohol & Fragrance (Sensitivity risk)</p>
                  </div>
                </div>
            </div>
          </div>

          {/* Smart Alternatives */}
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-bold text-pure-black">Healthier Swaps</h3>
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">personalized for you</span>
            </div>

            <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
                {/* Alternative 1 - Low GI */}
                <div className="min-w-[280px] bg-white p-8 rounded-[3rem] shadow-sm border border-border-soft hover:shadow-xl transition-all group">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    </div>
                    <div className="text-[10px] font-bold text-blue-500 uppercase mb-2">Diabetes Choice</div>
                    <h4 className="text-xl font-bold mb-4 leading-tight">Stevia-Sweetened Dark Cacao</h4>
                    <p className="text-text-secondary leading-relaxed">0g added sugar. Won't spike insulin levels while satisfying cravings.</p>
                </div>

                {/* Alternative 2 - Oncology safe */}
                <div className="min-w-[280px] bg-white p-8 rounded-[3rem] shadow-sm border border-border-soft hover:shadow-xl transition-all group">
                    <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                    </div>
                    <div className="text-[10px] font-bold text-primary uppercase mb-2">Cancer Care</div>
                    <h4 className="text-xl font-bold mb-4 leading-tight">Aveeno Calm + Restore Oat Gel</h4>
                    <p className="text-text-secondary leading-relaxed">Dermatologist tested for skin undergoing intense clinical treatments.</p>
                </div>
            </div>
          </div>
        </div>

        {/* User Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sarah - Cancer */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-border-soft flex flex-col hover:shadow-xl transition-all h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3g5A3U817Rn_JJT0eBjYbe8Sp01c0dEe_5g&s" alt="Sarah" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-pure-black">Sarah</h4>
                <p className="text-primary text-[10px] font-bold uppercase">Cancer Patient</p>
              </div>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed italic mb-6">
              "During chemo, my skin became hypersensitive. I scan every cream with Scanything."
            </p>
            <div className="mt-auto pt-4 border-t border-gray-50 flex items-center gap-2 text-[10px] font-black text-primary">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"/></svg>
              Safety Verified
            </div>
          </div>

          {/* Mark - Cancer */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-border-soft flex flex-col hover:shadow-xl transition-all h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-teal-500">
                <img src="https://www.qatarcricketassociation.org/uploads/players/profiles/1658521629.png" alt="Mark" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-pure-black">Mark</h4>
                <p className="text-teal-600 text-[10px] font-bold uppercase">Cancer Recovery</p>
              </div>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed italic mb-6">
              "Managing diet during recovery is key. Scanything flags artificial dyes that I need to avoid."
            </p>
            <div className="mt-auto pt-4 border-t border-gray-50 flex items-center gap-2 text-[10px] font-black text-teal-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"/></svg>
              Toxin-Free Goal
            </div>
          </div>

          {/* David - Diabetes */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-border-soft flex flex-col hover:shadow-xl transition-all h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-500">
                <img src="https://media.istockphoto.com/id/1781580425/photo/a-very-fat-man-is-eating-a-burger.jpg?s=612x612&w=0&k=20&c=SZqH0eW7TM_Uo1MlLDSiAxetKXIqLihagcxoF9tSzMQ=" alt="David" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-pure-black">David</h4>
                <p className="text-blue-600 text-[10px] font-bold uppercase">Type 2 Diabetes</p>
              </div>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed italic mb-6">
              "Hidden sugars in sauces used to spike my levels. Now I scan everything before it goes in my cart."
            </p>
            <div className="mt-auto pt-4 border-t border-gray-50 flex items-center gap-2 text-[10px] font-black text-blue-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"/></svg>
              Sugar Monitor Active
            </div>
          </div>

          {/* Elena - Pregnant */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-border-soft flex flex-col hover:shadow-xl transition-all h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-pink-500">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHWaFLJaVa8LGe9xWXpEm6ykQXZTDE-PlR0A&s" alt="Elena" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-pure-black">Elena</h4>
                <p className="text-pink-500 text-[10px] font-bold uppercase">Pregnant (2nd Tri)</p>
              </div>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed italic mb-6">
              "Finding pregnancy-safe skincare is a minefield. Scanything flags even trace amounts of Retinol."
            </p>
            <div className="mt-auto pt-4 border-t border-gray-50 flex items-center gap-2 text-[10px] font-black text-pink-500">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"/></svg>
              Fetal Safety First
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScannerDemo;