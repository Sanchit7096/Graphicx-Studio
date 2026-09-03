import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { brandLogos } from "../../data/siteContent";
import { optimizeCloudinaryUrl } from "../../utils/cloudinary";

const LOGOS = brandLogos.map((logo) => ({
  ...logo,
  src: optimizeCloudinaryUrl(logo.src, { width: 320 }),
}));

const BrandShowcase = () => {
  const containerRef = useRef(null);
  const marqueeRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    let animFrameId;
    const ctx = gsap.context(() => {
      animFrameId = requestAnimationFrame(() => {
        if (!marqueeRef.current) return;
        const totalWidth = marqueeRef.current.scrollWidth;
        const distance = totalWidth / 2;

        tweenRef.current = gsap.to(marqueeRef.current, {
          x: -distance,
          duration: 50,
          ease: "none",
          repeat: -1,
        });
      });
    }, containerRef);

    return () => {
      if (animFrameId) cancelAnimationFrame(animFrameId);
      ctx.revert();
    };
  }, []);

  const handleMouseEnter = () => tweenRef.current?.pause();
  const handleMouseLeave = () => tweenRef.current?.play();

  return (
    <section
      ref={containerRef}
      className="w-full bg-black py-10 md:py-12 lg:py-16 px-5 sm:px-6 lg:px-8 xl:px-10 border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-8 md:mb-10 text-center">
          <p className="text-zinc-400 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase font-poppins">
            Trusted By Innovative Brands
          </p>
        </div>
      </div>

      <div className="relative w-full flex flex-col justify-center overflow-hidden">
        <div className="absolute top-0 left-0 w-24 md:w-64 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 md:w-64 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div
          ref={marqueeRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="flex w-max items-center"
        >
          {[...LOGOS, ...LOGOS].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-4 md:px-6 flex items-center justify-center"
            >
              <div className="bg-white p-4 md:p-5 rounded-2xl flex items-center justify-center h-20 md:h-28 w-40 md:w-48 transition-transform duration-500 hover:scale-105">
                <img
                  src={logo.src}
                  alt={logo.alt || "Client Brand Logo"}
                  width="160"
                  height="80"
                  className="w-full h-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(BrandShowcase);
