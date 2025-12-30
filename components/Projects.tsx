import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROJECTS } from '../constants';
import { Project } from '../types';

gsap.registerPlugin(ScrollTrigger);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showFull, setShowFull] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    gsap.fromTo(el, 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, [project]);

  return (
    <div 
      ref={cardRef}
      className="group bg-engineer-card rounded-2xl overflow-hidden border border-white/5 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-500 flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden bg-white/5">
        {!isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shimmer_2s_infinite] -translate-x-full"></div>
        )}
        
        <img 
          src={project.image} 
          alt={project.title}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-engineer-card to-transparent opacity-60"></div>
        <div className="absolute bottom-4 left-4">
          <span className="px-2 py-1 bg-blue-600/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded">
            {project.tools[0]}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
        
        {project.role && (
          <div className="mb-4">
            <h4 className="text-[10px] font-mono text-blue-500 uppercase tracking-widest mb-1">My Role</h4>
            <p className="text-slate-200 text-xs font-semibold">{project.role}</p>
          </div>
        )}

        <div className="space-y-4 text-sm">
          <div>
            <h4 className="text-[10px] font-mono text-blue-500 uppercase tracking-widest mb-1">Objective</h4>
            <p className="text-slate-300 font-light leading-relaxed line-clamp-2">{project.objective}</p>
          </div>
          
          <div>
            <h4 className="text-[10px] font-mono text-blue-500 uppercase tracking-widest mb-1">Methodology</h4>
            <p className="text-slate-400 font-light leading-relaxed line-clamp-2">{project.methodology}</p>
          </div>

          <div>
            <h4 className="text-[10px] font-mono text-blue-500 uppercase tracking-widest mb-1">Impact & Details</h4>
            <p className={`text-slate-400 font-light leading-relaxed transition-all duration-300 ${showFull ? '' : 'line-clamp-2'}`}>
              {project.detailedDescription}
            </p>
            <button 
              onClick={() => setShowFull(!showFull)}
              className="mt-1 text-[10px] font-bold text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-widest"
            >
              {showFull ? 'Show Less' : 'View Full Case Study'}
            </button>
          </div>

          <div className="pt-2 border-t border-white/5">
            <h4 className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest mb-1">Key Results</h4>
            <p className="text-emerald-500/80 italic leading-relaxed text-xs">{project.results}</p>
          </div>
        </div>

        <div className="mt-auto pt-6 flex flex-wrap gap-1.5">
          {project.tools.map(tool => (
            <span key={tool} className="text-[9px] font-mono px-2 py-0.5 bg-white/5 text-slate-500 rounded border border-white/5 uppercase">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Design & Development' | 'FEA / RBD' | 'CFD'>('Design & Development');

  const filteredProjects = PROJECTS.filter(p => p.category === activeTab);

  const tabs = [
    { id: 'Design & Development', label: 'CAD Design' },
    { id: 'FEA / RBD', label: 'FEA / RBD' },
    { id: 'CFD', label: 'CFD Simulations' }
  ] as const;

  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <h2 className="text-xs font-mono text-blue-500 uppercase tracking-[0.3em] mb-4">Engineering Portfolio</h2>
          <h3 className="text-4xl md:text-6xl font-black">Project Case Studies</h3>
        </div>
        
        <div className="flex bg-white/5 p-1 rounded-xl border border-white/10 self-start md:self-auto overflow-x-auto max-w-full">
          {tabs.map((tab) => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-lg text-xs md:text-sm font-bold transition-all whitespace-nowrap ${activeTab === tab.id ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;