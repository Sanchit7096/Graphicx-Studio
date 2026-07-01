import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Import all brand logos
import logo1 from '../assets/BrandLogo/WhatsApp_Image_2026-06-24_at_3.13.43_PM-removebg-preview.png';
import logo2 from '../assets/BrandLogo/WhatsApp_Image_2026-06-24_at_3.13.43_PM__6_-removebg-preview.png';
import logo3 from '../assets/BrandLogo/WhatsApp_Image_2026-06-24_at_3.13.43_PM__7_-removebg-preview.png';
import logo4 from '../assets/BrandLogo/WhatsApp_Image_2026-06-24_at_3.14.13_PM-removebg-preview.png';
import logo5 from '../assets/BrandLogo/WhatsApp_Image_2026-06-24_at_3.14.13_PM__1_-removebg-preview.png';
import logo6 from '../assets/BrandLogo/WhatsApp_Image_2026-06-24_at_3.16.31_PM-removebg-preview.png';
import logo7 from '../assets/BrandLogo/WhatsApp_Image_2026-06-24_at_3.13.43_PM__7_-removebg-preview (1).png';

const LOGOS = [
  { src: logo1, alt: 'Brand Logo 1' },
  { src: logo2, alt: 'Brand Logo 2' },
  { src: logo3, alt: 'Brand Logo 3' },
  { src: logo4, alt: 'Brand Logo 4' },
  { src: logo5, alt: 'Brand Logo 5' },
  { src: logo6, alt: 'Brand Logo 6' },
  { src: logo7, alt: 'Brand Logo 7' },
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
    <section ref={containerRef} className="w-full bg-black py-18 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-24 mb-16 text-center">
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
          className="flex w-max items-center py-4"
          ref={marqueeRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Double the logos to create the infinite scroll illusion */}
          {[...LOGOS, ...LOGOS].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-8 md:px-12 flex items-center justify-center"
            >
              <div className="bg-white p-4 md:p-6 rounded-2xl flex items-center justify-center h-24 md:h-32 w-48 md:w-56">
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



