import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Using simple typographic placeholders for logos to act as "demi logos"
const LOGOS = [
  { name: 'VERTEX', font: "'Barlow Condensed', sans-serif" },
  { name: 'AURA', font: "'Space Grotesk', sans-serif" },
  { name: 'NEXUS', font: "'Barlow Condensed', sans-serif" },
  { name: 'ELEVATE', font: "sans-serif" },
  { name: 'LUMINA', font: "'Space Grotesk', sans-serif" },
  { name: 'OMNI', font: "'Barlow Condensed', sans-serif" },
  { name: 'ZENITH', font: "sans-serif" },
  { name: 'NOVA', font: "'Space Grotesk', sans-serif" },
];

const BrandShowcase = () => {
  const containerRef = useRef(null);
  const marqueeRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    // We duplicate the logos array once to make it seamless
    // The total width of one set of logos needs to be scrolled, then it repeats
    const ctx = gsap.context(() => {
      // Get the width of half the marquee (one full set of logos)
      const totalWidth = marqueeRef.current.scrollWidth;
      const distance = totalWidth / 2;

      tweenRef.current = gsap.to(marqueeRef.current, {
        x: -distance,
        duration: 30, // Adjust speed here
        ease: 'none',
        repeat: -1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = () => {
    if (tweenRef.current) tweenRef.current.pause();
  };

  const handleMouseLeave = () => {
    if (tweenRef.current) tweenRef.current.play();
  };

  return (
    <section ref={containerRef} className="w-full bg-black py-24 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-16 text-center">
        <h3 className="text-white/40 text-[11px] font-bold tracking-[0.3em] uppercase mb-4">
          Trusted By Innovative Brands
        </h3>
      </div>

      <div className="relative w-full flex flex-col justify-center overflow-hidden">
        {/* Left and Right Fade Gradients for smooth entering/exiting */}
        <div className="absolute top-0 left-0 w-24 md:w-64 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 md:w-64 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

        {/* Marquee Track */}
        <div 
            className="flex w-max" 
            ref={marqueeRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
          {/* Double the logos to create the infinite scroll illusion */}
          {[...LOGOS, ...LOGOS].map((logo, index) => (
            <div 
              key={index}
              className="flex-shrink-0 px-12 md:px-20 flex items-center justify-center group cursor-pointer transition-all duration-500"
            >
              <span 
                className="text-white/20 text-4xl md:text-5xl font-black uppercase tracking-widest transition-all duration-300 group-hover:text-white group-hover:scale-110 group-hover:drop-shadow-[0_0_25px_rgba(46,220,195,0.8)]"
                style={{ fontFamily: logo.font }}
              >
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;
