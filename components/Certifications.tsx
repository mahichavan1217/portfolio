
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CERTIFICATIONS } from '../constants';

const Certifications: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.cert-card');
    if (cards) {
      gsap.from(cards, {
        opacity: 0,
        x: -20,
        stagger: 0.1,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      });
    }
  }, []);

  return (
    <section id="certifications" ref={sectionRef} className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-xs font-mono text-blue-500 uppercase tracking-[0.3em] mb-4">Credentials</h2>
        <h3 className="text-4xl font-black">Official Certifications</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {CERTIFICATIONS.map((cert, index) => (
          <div 
            key={index} 
            className="cert-card p-6 bg-engineer-card border border-white/5 rounded-2xl hover:border-blue-500/50 transition-colors group flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500 mb-4 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-certificate"></i>
            </div>
            <h4 className="font-bold text-sm mb-1">{cert.title}</h4>
            <p className="text-[10px] text-slate-500 uppercase font-mono">{cert.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
