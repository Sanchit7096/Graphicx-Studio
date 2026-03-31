import React, { useState } from 'react';
import logoImg from '../assets/Logo/Gemini_Generated_Image_oflpeioflpeioflp-removebg-preview.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-[150] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] py-0">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between relative text-white">

        {/* Responsive Logo Branding */}
        <div
          className="flex items-center group cursor-pointer pointer-events-auto animate-in fade-in slide-in-from-left-8 duration-700 h-16 md:h-auto"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="relative transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105 h-20 sm:h-32 md:h-48 w-auto -mt-2 sm:-mt-6 md:-mt-10">
            <img
              src={logoImg}
              alt="GraphicX Studio Logo"
              className="h-full w-auto object-contain filter drop-shadow-[0_0_35px_rgba(46,220,195,0.4)]"
              loading="eager"
            />
          </div>
        </div>

        {/* Desktop Navigation Menu */}
        <div className="hidden md:flex items-center gap-2 pointer-events-auto animate-in fade-in slide-in-from-right-8 duration-700 pt-0 transition-all duration-500 -mt-2 md:-mt-12">
          <div className="flex items-center rounded-full p-2 pr-2.5 bg-white/[0.03] backdrop-blur-3xl border border-white/10 shadow-2xl">
            <button className="relative px-8 py-3 text-[11px] font-black hover:text-white transition-all duration-300 uppercase tracking-[0.2em] whitespace-nowrap overflow-hidden group/btn1 text-white/60">
              <span className="relative z-10 font-bold tracking-widest leading-none text-white">Our Work</span>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#2edcc3] transition-all duration-300 group-hover/btn1:w-1/2 opacity-0 group-hover/btn1:opacity-100"></div>
            </button>
            <button className="relative px-8 py-3 bg-white text-black text-[11px] font-black rounded-full hover:bg-gray-200 transition-all duration-500 uppercase tracking-[0.2em] hover:-translate-y-0.5 whitespace-nowrap">
              Contact Us
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center z-[200]">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-3 text-white focus:outline-none bg-white/[0.05] backdrop-blur-3xl rounded-full border border-white/10 shadow-xl"
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
          <button className="text-3xl font-black uppercase tracking-[0.3em] hover:text-[#2edcc3] transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Our Work</button>
          <button className="text-3xl font-black uppercase tracking-[0.3em] hover:text-[#2edcc3] transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Services</button>
          <button className="px-16 py-6 bg-white text-black text-lg font-black rounded-full uppercase tracking-widest mt-10 hover:bg-[#2edcc3] transition-colors duration-500 shadow-2xl" onClick={() => setIsMenuOpen(false)}>Contact Us</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
