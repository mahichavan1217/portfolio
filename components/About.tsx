import React, { useState } from 'react';

const About: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const portraitImagePath = '/jay_portrait.jpg';
  const fallbackPath = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800';

  const focusAreas = [
    { icon: 'fa-vector-square', title: 'FEA', desc: 'Structural Validation' },
    { icon: 'fa-wind', title: 'CFD', desc: 'Fluid Dynamics' },
    { icon: 'fa-cube', title: 'CAD', desc: 'Precision Modeling' },
    { icon: 'fa-gears', title: 'RBD', desc: 'System Kinematics' }
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Subtle Technical Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT SIDE: VISUALS */}
          <div className="relative group max-w-md mx-auto lg:max-w-none">
            {/* Main Image Glow */}
            <div className="absolute -inset-4 bg-blue-500/10 rounded-3xl blur-2xl group-hover:bg-blue-500/20 transition-all duration-700"></div>
            
            <div className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-[#0f1115]">
              <img 
                src={hasError ? fallbackPath : portraitImagePath} 
                alt="Jay Kuwar Portrait" 
                className={`w-full h-full object-cover transition-all duration-1000 ${
                  isLoaded ? 'opacity-100 scale-100' : 'opacity-100 scale-100'
                } grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105`}
                onLoad={() => setIsLoaded(true)}
                onError={() => {
                  setHasError(true);
                  setIsLoaded(true);
                }}
              />
              
              {/* Scanning Line Animation */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent animate-[scan_3s_linear_infinite] pointer-events-none opacity-0 group-hover:opacity-100"></div>
              
              {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#0f1115]/50">
                  <i className="fa-solid fa-gear animate-spin text-blue-500 text-3xl"></i>
                </div>
              )}

              {/* Technical Overlay */}
              <div className="absolute top-4 left-4 flex gap-1">
                <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                <div className="w-1 h-1 rounded-full bg-blue-500/50"></div>
                <div className="w-1 h-1 rounded-full bg-blue-500/20"></div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                  SYS_ID: JK_807_ENG
                </div>
                <div className="p-3 glass-effect rounded-lg border border-white/5">
                   <div className="text-xl font-bold text-white leading-none">8.07</div>
                   <div className="text-[8px] text-blue-400 font-mono uppercase mt-1">GPA Score</div>
                </div>
              </div>

              {/* Carbon Fiber Pattern Overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            </div>
            
            {/* Floating Focus Grid */}
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 hidden xl:grid grid-cols-1 gap-3">
              {focusAreas.map((area, idx) => (
                <div key={idx} className="p-4 glass-effect border border-white/10 rounded-xl shadow-xl hover:border-blue-500/50 transition-all hover:translate-x-2 group/icon">
                  <i className={`fa-solid ${area.icon} text-blue-500 mb-2 block`}></i>
                  <div className="text-[10px] font-bold text-white uppercase tracking-tighter">{area.title}</div>
                  <div className="text-[8px] text-slate-500">{area.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: CONTENT */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-xs font-mono text-blue-500 uppercase tracking-[0.4em] flex items-center gap-4">
                <span className="w-8 h-px bg-blue-500/30"></span>
                The Engineer behind the code
              </h2>

              <h3 className="text-4xl md:text-6xl font-black leading-tight text-white">
                Merging Physics with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Pure Precision</span>.
              </h3>
              
              <p className="text-lg text-slate-300 font-light leading-relaxed">
                Currently bridging the gap between theoretical mechanics and industrial viability as a final-year student at <strong>PVG's COE, Nashik</strong>.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/20 transition-all group">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <i className="fa-solid fa-graduation-cap"></i>
                </div>
                <h4 className="font-bold text-slate-200 mb-4 text-lg">Academic Journey</h4>
                
                <div className="space-y-3 relative">
                  {/* Timeline Line */}
                  <div className="absolute left-2 top-0 bottom-0 w-[1px] bg-white/10 group-hover:bg-blue-500/20 transition-colors"></div>
                  
                  {/* B.E. Mechanical */}
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-1.5 w-3 h-3 -ml-1.5 rounded-full bg-blue-600 border-3 border-[#0f1115] z-10"></div>
                    <div className="text-[11px] text-blue-400 font-mono font-bold uppercase tracking-widest">B.E. MECHANICAL (8.07 CGPA)</div>
                    <div className="text-[9px] text-slate-500 uppercase tracking-tighter">PVG'S COE, NASHIK | 2022 - 2026</div>
                  </div>
                  
                  {/* HSC */}
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-1.5 w-3 h-3 -ml-1.5 rounded-full bg-blue-500 border-3 border-[#0f1115] z-10"></div>
                    <div className="text-[11px] text-blue-400 font-mono font-bold uppercase tracking-widest">HSC - CLASS 12 (80.14%)</div>
                    <div className="text-[9px] text-slate-500 uppercase tracking-tighter">JANTA VIDYALAYA ABHONA | 2022</div>
                  </div>
                  
                  {/* SSC */}
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-1.5 w-3 h-3 -ml-1.5 rounded-full bg-blue-500 border-3 border-[#0f1115] z-10"></div>
                    <div className="text-[11px] text-blue-400 font-mono font-bold uppercase tracking-widest">SSC - CLASS 10 (85.40%)</div>
                    <div className="text-[9px] text-slate-500 uppercase tracking-tighter">JANTA VIDYALAYA ABHONA | 2020</div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/20 transition-all group">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <i className="fa-solid fa-industry"></i>
                </div>
                <h4 className="font-bold text-slate-200 mb-4 text-lg">Training History</h4>
                
                <div className="space-y-3">
                  <div>
                    <div className="text-[11px] text-emerald-400 font-mono font-bold uppercase tracking-widest">ANSYS SPECIALIST</div>
                    <div className="text-[9px] text-slate-500 uppercase tracking-tighter">ARK INFOSOLUTIONS | VCADD</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-emerald-400 font-mono font-bold uppercase tracking-widest">CAD/CAM EXPERT</div>
                    <div className="text-[9px] text-slate-500 uppercase tracking-tighter">ACCESS CADD | CADCAM GURU</div>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-white/5">
                   <div className="flex gap-1">
                      {[1,2,3,4,5].map(i => <div key={i} className="h-1 flex-grow bg-blue-500/20 rounded-full group-hover:bg-blue-500 transition-all" style={{transitionDelay: `${i*100}ms`}}></div>)}
                   </div>
                   <div className="text-[8px] text-slate-600 font-mono uppercase tracking-[0.2em] mt-2">PROFESSIONAL SKILL INDEX</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-slate-400 leading-relaxed font-light">
                My approach to engineering is rooted in <strong>computational validation</strong>. Whether it's optimizing a racing chassis for torsional rigidity or simulating complex fluid mixing in industrial ducts, I leverage high-fidelity simulation to eliminate guesswork.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {['Iterative Design', 'FEA Validation', 'CFD Optimization', 'Geometric Tolerance'].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/10 text-[10px] font-mono text-blue-400/80 uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-sm transition-all text-white group shadow-xl shadow-blue-600/10 active:scale-95"
              >
                Let's Build Something
                <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
              </button>
              
              <button
                onClick={() =>
                  document
                    .getElementById('projects')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 hover:border-white/20 rounded-xl font-bold text-sm transition-all text-white group"
              >
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }
      `}</style>
    </section>
  );
};

export default About;