import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Import all brand logos
import logo1 from '../assets/BrandLogo/bowling.png';
import logo2 from '../assets/BrandLogo/DkComputer.png';
import logo3 from '../assets/BrandLogo/G9Logo.png';
import logo4 from '../assets/BrandLogo/KigsGym.png';
import logo5 from '../assets/BrandLogo/Mahabali.png';
import logo6 from '../assets/BrandLogo/SocialBudies.png';

// TODO: verify logo4 and logo5 names — filled in placeholders below, confirm against actual client list
const LOGOS = [
  { src: logo1, alt: 'Mahabali Fitness Club logo' },
  { src: logo2, alt: 'D.K Computer logo' },
  { src: logo3, alt: 'G9 Multispeciality Hospital & ICU logo' },
  { src: logo4, alt: 'Client logo 4' },
  { src: logo5, alt: 'Client logo 5' },
  { src: logo6, alt: 'Client logo 6' },
  // { src: logo7, alt: 'Mahabali Fitness Club logo' },
];

const BrandShowcase = () => {
  const containerRef = useRef(null);
  const marqueeRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalWidth = marqueeRef.current.scrollWidth;
      const distance = totalWidth / 2;

      tweenRef.current = gsap.to(marqueeRef.current, {
        x: -distance,
        duration: 30,
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
    <section
      ref={containerRef}
      className="w-full bg-black py-10 md:py-12 lg:py-16 px-5 sm:px-6 lg:px-8 xl:px-10 border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-8 md:mb-10 text-center">
          <h3 className="text-white/40 text-[11px] font-bold tracking-[0.3em] uppercase">
            Trusted By Innovative Brands
          </h3>
        </div>
      </div>

      <div className="relative w-full flex flex-col justify-center overflow-hidden">
        <div className="absolute top-0 left-0 w-24 md:w-64 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 md:w-64 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

        <div
          className="flex w-max items-center"
          ref={marqueeRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {[...LOGOS, ...LOGOS].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-4 md:px-6 flex items-center justify-center"
            >
              <div className="bg-white p-4 md:p-5 rounded-2xl flex items-center justify-center h-20 md:h-28 w-40 md:w-48 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;