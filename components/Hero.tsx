
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  
  const [typedText, setTypedText] = useState('');
  const fullText = "Mechanical Engineer | ANSYS FEA & CFD | CAD Designer";

  useEffect(() => {
    let currentPos = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.substring(0, currentPos));
      currentPos++;
      if (currentPos > fullText.length) {
        clearInterval(interval);
      }
    }, 50);

    const tl = gsap.timeline();
    tl.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out',
    })
    .from(subtitleRef.current, {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
    }, "-=0.8")
    .from(statsRef.current?.children || [], {
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: 'back.out(1.7)',
    }, "-=0.6");

    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" ref={containerRef} className="min-h-screen pt-32 pb-20 px-6 md:px-12 flex flex-col justify-center items-center text-center">
      <div className="max-w-4xl">
        <div ref={subtitleRef} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">B.E. Mechanical Engineering @ PVGCOE</span>
        </div>
        
        <h1 ref={titleRef} className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-tight text-white">
          Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-600">Precision</span> Designs.
        </h1>

        <div className="h-8 mb-12">
          <p className="text-lg md:text-xl text-blue-400 font-mono tracking-tight">
            {typedText}<span className="animate-pulse">|</span>
          </p>
        </div>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Turning complex physical phenomena into high-fidelity simulations. Specialized in structural validation and fluid dynamics.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16 relative z-10">
          <button 
            onClick={() => handleScrollTo('projects')}
            className="group relative px-10 py-4 bg-white text-black font-bold rounded-xl overflow-hidden shadow-2xl transition-all hover:-translate-y-1 active:scale-95 min-w-[200px]"
          >
            <span className="relative z-10">Explore Projects</span>
            <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
          <a 
            href="/Jay_Kuwar_Resume.pdf"
            download="Jay_Kuwar_Resume.pdf"
            className="px-10 py-4 bg-transparent border border-white/10 hover:border-blue-500/50 hover:bg-blue-600/5 text-white font-bold rounded-xl transition-all hover:-translate-y-1 active:scale-95 flex items-center gap-3 min-w-[200px] justify-center no-underline"
          >
            <i className="fa-solid fa-file-pdf text-blue-500"></i>
            Download Resume
          </a>
        </div>

        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 pt-12 border-t border-white/5">
          <div>
            <div className="text-3xl font-bold mb-1">8.07</div>
            <div className="text-xs text-slate-500 uppercase tracking-widest font-mono">Current CGPA</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-1">5+</div>
            <div className="text-xs text-slate-500 uppercase tracking-widest font-mono">CAD Tools</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-1">11+</div>
            <div className="text-xs text-slate-500 uppercase tracking-widest font-mono">Simulations</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-1">5+</div>
            <div className="text-xs text-slate-500 uppercase tracking-widest font-mono">Certifications</div>
          </div>
        </div>
      </div>

      <button 
        onClick={() => handleScrollTo('about')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40 hover:opacity-100 transition-opacity p-4 cursor-pointer"
        aria-label="Scroll to content"
      >
        <i className="fa-solid fa-chevron-down text-2xl text-blue-500"></i>
      </button>
    </section>
  );
};

export default Hero;
