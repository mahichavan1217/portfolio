import React, { useState, useEffect } from 'react';

const About: React.FC = () => {
  // We try various paths to ensure the image loads regardless of folder structure
  const paths = [
    'jay_portrait.jpg',
    '/jay_portrait.jpg',
    './jay_portrait.jpg',
    'components/jay_portrait.jpg',
    '/components/jay_portrait.jpg',
    'jay_portrait.jpeg',
    '/jay_portrait.jpeg'
  ];
  
  const [currentPathIndex, setCurrentPathIndex] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleImageError = () => {
    if (currentPathIndex < paths.length - 1) {
      setCurrentPathIndex(prev => prev + 1);
    } else {
      setHasError(true);
    }
  };

  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          {/* Simulation Glow Effect */}
          <div className="absolute -inset-4 bg-blue-500/10 rounded-2xl blur-xl group-hover:bg-blue-500/20 transition-all duration-700"></div>
          
          {/* Main Portrait Container with "Technical Frame" */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-[#0f1115]">
            <img 
              src={paths[currentPathIndex]} 
              alt="Jay Kuwar - Mechanical Engineer" 
              className={`w-full h-full object-cover transition-all duration-1000 ${hasLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'} ${hasError ? 'grayscale contrast-125' : 'brightness-105'}`}
              onLoad={() => setHasLoaded(true)}
              onError={handleImageError}
            />
            
            {/* Fallback Engineering Visual if all local paths fail */}
            {hasError && (
              <div className="absolute inset-0 bg-slate-900 flex flex-col items-center justify-center p-8 text-center">
                <i className="fa-solid fa-compass-drafting text-4xl text-blue-500/30 mb-4"></i>
                <p className="text-xs font-mono text-slate-500">
                  SYSTEM_ERROR: IMAGE_NOT_FOUND<br/>
                  <span className="text-[10px] opacity-50">Attempting to resolve {paths[0]}</span>
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800"
                  className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
                  alt="Mechanical fallback"
                />
              </div>
            )}

            {/* ANSYS-style Coordinate System Overlay */}
            <div className="absolute bottom-6 left-6 flex items-center gap-2 pointer-events-none opacity-60">
               <div className="flex flex-col items-center">
                  <div className="w-0.5 h-6 bg-red-500"></div>
                  <span className="text-[8px] text-red-500 font-bold">Y</span>
               </div>
               <div className="flex items-center">
                  <div className="w-6 h-0.5 bg-green-500"></div>
                  <span className="text-[8px] text-green-500 font-bold ml-1">X</span>
               </div>
               <div className="absolute top-1/2 left-0 transform -translate-y-1/2 rotate-45">
                  <div className="w-6 h-0.5 bg-blue-500"></div>
                  <span className="text-[8px] text-blue-500 font-bold absolute -right-2 top-0">Z</span>
               </div>
            </div>

            {/* Data Feed Overlay */}
            <div className="absolute top-6 right-6 font-mono text-[9px] text-blue-400/70 space-y-1 pointer-events-none text-right">
                <div className="bg-black/40 px-2 py-0.5 rounded">NODE_ID: 0x8F2</div>
                <div className="bg-black/40 px-2 py-0.5 rounded">S_PRINCIPAL: 142MPa</div>
                <div className="bg-black/40 px-2 py-0.5 rounded">DEFORM_S: 0.002mm</div>
            </div>

            {/* Corner Bracket Graphics */}
            <div className="absolute inset-0 border border-blue-500/20 m-4 rounded-xl pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500 m-4 rounded-tl-lg pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-500 m-4 rounded-br-lg pointer-events-none"></div>
          </div>
          
          {/* Floating Academic Achievement Badge */}
          <div className="absolute -bottom-8 -right-4 glass-effect p-6 rounded-2xl border border-white/10 hidden lg:block shadow-2xl animate-bounce-slow">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg shadow-blue-600/20">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <div>
                <div className="text-2xl font-black text-white leading-none">8.07</div>
                <div className="text-[10px] text-blue-400 font-mono uppercase tracking-[0.2em] mt-1">B.E. Mechanical Eng.</div>
                <div className="text-[9px] text-slate-500 uppercase mt-0.5">PVGCOE Nashik</div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/20">
               <h2 className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.4em]">Professional Identity</h2>
            </div>
            <h3 className="text-4xl md:text-6xl font-black leading-tight text-white tracking-tight">
              Jay Kuwar: Engineering <span className="text-blue-500">Excellence</span> through Simulation.
            </h3>
          </div>

          <p className="text-xl text-slate-300 font-light leading-relaxed">
            Specializing in Computational Fluid Dynamics (CFD) and Finite Element Analysis (FEA), I transform theoretical designs into high-performance mechanical systems.
          </p>

          <div className="space-y-6 text-slate-400 font-light leading-relaxed">
            <p>
              My expertise lies in the intersection of **Precision Design** and **Numerical Validation**. With a background heavily focused on automotive structures and fluid flow splitters, I utilize tools like ANSYS and PTC Creo to predict failure points, optimize mass, and maximize aerodynamic efficiency before a single bolt is turned.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-5 rounded-2xl bg-[#16161a] border border-white/5 hover:border-blue-500/30 transition-all group">
                <div className="text-blue-500 text-2xl mb-3 group-hover:scale-110 transition-transform"><i className="fa-solid fa-microscope"></i></div>
                <h4 className="font-bold text-white text-sm mb-1">R&D Focused</h4>
                <p className="text-[11px] text-slate-500 leading-normal">Deep analytical approach to solving complex thermal and structural problems.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#16161a] border border-white/5 hover:border-blue-500/30 transition-all group">
                <div className="text-emerald-500 text-2xl mb-3 group-hover:scale-110 transition-transform"><i className="fa-solid fa-industry"></i></div>
                <h4 className="font-bold text-white text-sm mb-1">Manufacturing Ready</h4>
                <p className="text-[11px] text-slate-500 leading-normal">Proficient in GD&T and DFM (Design for Manufacturing) standards.</p>
            </div>
          </div>
          
          <div className="pt-8 flex flex-wrap gap-5">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-sm transition-all shadow-xl shadow-blue-600/30 text-white flex items-center gap-3 active:scale-95"
            >
              Contact Me
              <i className="fa-solid fa-arrow-right-long text-xs"></i>
            </button>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl font-bold text-sm transition-all text-slate-200 backdrop-blur-sm active:scale-95"
            >
              Technical Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;