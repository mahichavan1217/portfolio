
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SKILLS } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bars = sectionRef.current?.querySelectorAll('.skill-bar');
    if (bars) {
      bars.forEach((bar) => {
        const target = bar.getAttribute('data-level');
        gsap.fromTo(bar, 
          { width: '0%' },
          {
            width: `${target}%`,
            duration: 1.5,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: bar,
              start: 'top 90%',
            }
          }
        );
      });
    }
  }, []);

  const categories = ['Simulation', 'Design', 'Computation'] as const;

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-6 md:px-12 bg-engineer-card/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-xs font-mono text-blue-500 uppercase tracking-[0.3em] mb-4">Technical Proficiency</h2>
          <h3 className="text-4xl md:text-5xl font-black">Toolkit & Capabilities</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {categories.map((cat) => (
            <div key={cat} className="space-y-8">
              <h4 className="text-sm font-mono text-slate-500 uppercase flex items-center gap-3">
                <span className="w-8 h-px bg-white/10"></span>
                {cat}
              </h4>
              <div className="space-y-6">
                {SKILLS.filter(s => s.category === cat).map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-bold text-slate-200">{skill.name}</span>
                      <span className="text-[10px] font-mono text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className="skill-bar h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full" 
                        data-level={skill.level}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-2xl bg-white/5 border border-white/5 grid md:grid-cols-4 gap-8 items-center">
            <div className="col-span-1 md:col-span-1">
                <div className="text-blue-500 text-3xl mb-2"><i className="fa-solid fa-microchip"></i></div>
                <h5 className="font-bold mb-1">High Performance Computing</h5>
                <p className="text-xs text-slate-500 leading-relaxed">Experienced in scaling simulations across multi-node clusters.</p>
            </div>
            <div className="col-span-1 md:col-span-1">
                <div className="text-blue-500 text-3xl mb-2"><i className="fa-solid fa-code-branch"></i></div>
                <h5 className="font-bold mb-1">Automation (PyAnsys)</h5>
                <p className="text-xs text-slate-500 leading-relaxed">Scripting complex workflows using Python and APDL.</p>
            </div>
            <div className="col-span-1 md:col-span-1">
                <div className="text-blue-500 text-3xl mb-2"><i className="fa-solid fa-vial"></i></div>
                <h5 className="font-bold mb-1">Testing & Validation</h5>
                <p className="text-xs text-slate-500 leading-relaxed">Cross-referencing FEA results with strain gauge data.</p>
            </div>
            <div className="col-span-1 md:col-span-1">
                <div className="text-blue-500 text-3xl mb-2"><i className="fa-solid fa-shield-halved"></i></div>
                <h5 className="font-bold mb-1">Design Optimization</h5>
                <p className="text-xs text-slate-500 leading-relaxed">Using topological optimization to minimize weight.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
