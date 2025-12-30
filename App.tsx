
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import SimulationBackground from './components/SimulationBackground';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <div className="relative antialiased selection:bg-blue-600 selection:text-white">
      <SimulationBackground />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <AIAssistant />

      <footer className="py-12 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-slate-500 text-sm font-light">
            &copy; {new Date().getFullYear()} Jay Kuwar. Precision Engineering Portfolio.
          </div>
          <div className="text-[10px] text-slate-600 mt-2 font-mono uppercase tracking-widest">
            CAD | CAM | CAE | FEA | CFD
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
