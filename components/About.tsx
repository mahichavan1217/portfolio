
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-blue-500/10 rounded-2xl blur-xl group-hover:bg-blue-500/20 transition-all duration-700"></div>
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800" 
              alt="Jay Kuwar Portrait" 
              className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700"
            />
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          </div>
          
          <div className="absolute -bottom-6 -right-6 glass-effect p-6 rounded-2xl border border-white/10 hidden lg:block shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="text-4xl text-blue-500"><i className="fa-solid fa-user-graduate"></i></div>
              <div>
                <div className="text-xl font-bold">CGPA: 8.07</div>
                <div className="text-xs text-slate-400 font-mono">B.E. Mechanical Eng.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xs font-mono text-blue-500 uppercase tracking-[0.3em]">Biography</h2>
          <h3 className="text-4xl md:text-5xl font-black leading-tight">Solving Problems with <span className="text-blue-500">Physics & Math</span>.</h3>
          <p className="text-lg text-slate-400 font-light leading-relaxed">
            I am a Mechanical Engineer currently pursuing my Bachelor of Engineering from Pune Vidyarthi Griha’s College of Engineering and Shrikrushna S. Dhamankar Institute of Management, Nashik.
          </p>
          <p className="text-slate-500 leading-relaxed">
            With hands-on experience in CAD and simulation tools such as PTC Creo, SolidWorks, and ANSYS, I focus on delivering efficient engineering solutions. My passion lies in precision design, teamwork, and computational validation of mechanical systems.
          </p>
          <div className="space-y-4 pt-4">
            <div className="flex items-start gap-4">
                <div className="mt-1 w-8 h-8 bg-blue-500/10 rounded-lg flex-shrink-0 flex items-center justify-center text-sm text-blue-500">
                    <i className="fa-solid fa-graduation-cap"></i>
                </div>
                <div>
                    <h4 className="font-bold text-slate-200">Pune Vidyarthi Griha's COE, Nashik</h4>
                    <p className="text-sm text-slate-500">Mechanical Engineering | 2022 - 2026 (Exp.)</p>
                </div>
            </div>
            <div className="flex items-start gap-4">
                <div className="mt-1 w-8 h-8 bg-blue-500/10 rounded-lg flex-shrink-0 flex items-center justify-center text-sm text-blue-500">
                    <i className="fa-solid fa-briefcase"></i>
                </div>
                <div>
                    <h4 className="font-bold text-slate-200">Professional Internships</h4>
                    <p className="text-sm text-slate-500">Access CADD | ARK Infosolutions | CAD CAM GURU</p>
                </div>
            </div>
          </div>
          
          <div className="pt-6">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-3 px-8 py-3 bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 rounded-xl font-bold text-sm transition-all"
            >
              Get In Touch
              <i className="fa-solid fa-arrow-right text-xs text-blue-500"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
