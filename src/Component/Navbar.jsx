import React, { useState, useEffect } from 'react';
import logoImg from '../assets/Logo/Image_from_iOS__2_-removebg-preview.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // set initial state on mount in case page loads pre-scrolled
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[150] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${isScrolled ? 'py-3 md:py-4 bg-black/60 backdrop-blur-2xl border-b border-white/10 shadow-lg' : 'py-6 md:py-8 bg-transparent border-b border-transparent'
        }`}
    >
      <div className="max-w-[95%] mx-auto px-4 md:px-6 flex items-center justify-between relative text-white">

        {/* Responsive Logo Branding */}
        <div
          className="flex items-center group cursor-pointer pointer-events-auto animate-in fade-in slide-in-from-left-8 duration-700"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div
            className={`relative transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105 w-auto flex items-center ${isScrolled ? 'h-9 md:h-10' : 'h-12 md:h-14'
              }`}
          >
            <img
              src={logoImg}
              alt="GraphicX Studio Logo"
              className="h-full w-auto object-contain rounded-md"
              loading="eager"
            />
          </div>
        </div>

        {/* Desktop Navigation Menu */}
        <div className="hidden md:flex items-center gap-2 pointer-events-auto animate-in fade-in slide-in-from-right-8 duration-700 transition-all duration-500">
          <div className="flex items-center rounded-full p-2 pr-2.5 bg-white/[0.03] backdrop-blur-3xl border border-white/10 shadow-2xl">
            <a
              href="#projects"
              className="relative px-8 py-3 text-[11px] font-black hover:text-white transition-all duration-300 uppercase tracking-[0.2em] whitespace-nowrap overflow-hidden group/btn1 text-white/60 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
            >
              <span className="relative z-10 font-bold tracking-widest leading-none text-white">Our Work</span>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#D6D6D6] transition-all duration-300 group-hover/btn1:w-1/2 opacity-0 group-hover/btn1:opacity-100"></div>
            </a>
            <a
              href="#Service"
              className="relative px-8 py-3 text-[11px] font-black hover:text-white transition-all duration-300 uppercase tracking-[0.2em] whitespace-nowrap overflow-hidden group/btn1 text-white/60 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
            >
              <span className="relative z-10 font-bold tracking-widest leading-none text-white">Our Service</span>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#D6D6D6] transition-all duration-300 group-hover/btn1:w-1/2 opacity-0 group-hover/btn1:opacity-100"></div>
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center z-[200]">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            className="p-3 text-white focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 bg-white/[0.05] backdrop-blur-3xl rounded-full border border-white/10 shadow-xl"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transition-all duration-500 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`w-full h-0.5 bg-white transition-all duration-500 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Navigation */}
      <div className={`fixed inset-0 bg-black/95 backdrop-blur-3xl z-[180] flex flex-col items-center justify-center transition-all duration-700 ${isMenuOpen ? 'opacity-100 visible h-screen' : 'opacity-0 invisible h-0'}`}>
        <div className="flex flex-col items-center gap-12 text-center p-10">
          <div className="h-32 w-auto mb-10">
            <img src={logoImg} alt="GraphicX Studio Logo" className="h-full w-auto object-contain" />
          </div>
          <a href="#projects" className="text-3xl font-black uppercase tracking-[0.3em] hover:text-[#D6D6D6] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4" onClick={() => setIsMenuOpen(false)}>Our Work</a>
          <button className="text-3xl font-black uppercase tracking-[0.3em] hover:text-[#D6D6D6] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4" onClick={() => setIsMenuOpen(false)}>Services</button>
          <a href="#contact" className="px-16 py-6 bg-white text-black text-lg font-black rounded-full uppercase tracking-widest mt-10 hover:bg-[#D6D6D6] transition-colors duration-500 shadow-2xl inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;