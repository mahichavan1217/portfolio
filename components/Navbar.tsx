import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { RESUME_URL } from '../constants';

const Navbar: React.FC = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
      delay: 0.2
    });
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav 
      ref={navRef}
      className="fixed top-0 w-full z-[100] glass-effect px-6 py-3 md:px-12 flex justify-between items-center border-b border-white/5"
    >
      {/* Brand Section */}
      <div 
        onClick={() => handleScroll('home')}
        className="flex items-center gap-3 group cursor-pointer"
      >
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-transform group-hover:scale-105">
          JK
        </div>
        <div>
          <h1 className="text-lg font-bold tracking-tight text-white leading-none">JAY KUWAR</h1>
          <p className="text-[10px] text-blue-500 font-mono tracking-widest uppercase mt-1">MECHANICAL ENGINEER</p>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8 items-center">
        {navItems.map((item) => (
          <button 
            key={item.id} 
            onClick={() => handleScroll(item.id)}
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-300 relative group"
          >
            {item.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </button>
        ))}
        
        <div className="flex items-center gap-4 ml-6 pl-6 border-l border-white/10">
          <a 
            href="https://linkedin.com/in/jay-kuwar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors text-xl"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a 
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-full transition-all duration-300 shadow-lg shadow-blue-600/20 flex items-center gap-2 active:scale-95 no-underline"
          >
            <i className="fa-solid fa-file-pdf text-xs"></i>
            Resume
          </a>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden text-2xl text-blue-500 p-2 z-[101]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars-staggered'}`}></i>
      </button>

      {/* Mobile Navigation Drawer */}
      <div 
        className={`fixed inset-0 bg-engineer-dark/98 backdrop-blur-2xl z-40 transition-all duration-500 md:hidden flex flex-col items-center justify-center gap-8 ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}
      >
        {navItems.map((item) => (
          <button 
            key={item.id} 
            className="text-3xl font-bold text-slate-400 hover:text-white"
            onClick={() => handleScroll(item.id)}
          >
            {item.name}
          </button>
        ))}
        <div className="flex flex-col items-center gap-6 mt-4 w-full px-12">
          <a 
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl flex items-center justify-center gap-3 shadow-xl no-underline"
          >
            <i className="fa-solid fa-file-pdf"></i>
            Resume
          </a>
          <div className="flex gap-8 text-2xl">
            <a href="https://linkedin.com/in/jay-kuwar" target="_blank" rel="noopener noreferrer" className="text-slate-400"><i className="fa-brands fa-linkedin"></i></a>
            <a href="mailto:jaykuwar310@gmail.com" className="text-slate-400"><i className="fa-solid fa-envelope"></i></a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;