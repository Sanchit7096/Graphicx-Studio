import React, { useState, useRef, useEffect, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { featureProjects } from '../../data/projects';
import { featureSectionContent } from '../../data/siteContent';
import { optimizeCloudinaryUrl } from '../../utils/cloudinary';

gsap.registerPlugin(ScrollTrigger);

// Reusable Image Slider Component
const ImageComparisonSlider = ({ before, after, title = '' }) => {
  const [sliderPos, setSliderPos] = useState(50);

  const optimizedBefore = useMemo(() => optimizeCloudinaryUrl(before, { width: 800 }), [before]);
  const optimizedAfter = useMemo(() => optimizeCloudinaryUrl(after, { width: 800 }), [after]);

  return (
    <div className="relative w-full h-[35vh] lg:h-[45vh] rounded-2xl overflow-hidden select-none bg-zinc-900">
      {/* After Image (Background) */}
      <img
        src={optimizedAfter}
        alt={`After transformation - ${title}`}
        width="600"
        height="400"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Before Image (Foreground, Clipped) */}
      <img
        src={optimizedBefore}
        alt={`Before transformation - ${title}`}
        width="600"
        height="400"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
      />

      {/* Slider Line and Handle */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white pointer-events-none z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
        style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
      >
        {/* Circle Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 lg:w-10 lg:h-10 bg-white rounded-full flex items-center justify-center shadow-xl">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" />
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
      </div>

      {/* Invisible Range Input for accessibility and native touch/drag handling */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPos}
        onChange={(e) => setSliderPos(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 z-20 cursor-ew-resize touch-pan-y"
        aria-label={`Image comparison slider for ${title}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={sliderPos}
      />

      {/* Labels */}
      <div className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur-md border border-white/30 text-white text-xs font-semibold tracking-wider px-3.5 py-1.5 rounded-full pointer-events-none shadow-md">
        Before
      </div>
      <div className="absolute top-4 right-4 z-10 bg-orange-500 text-black text-xs font-semibold tracking-wider px-3.5 py-1.5 rounded-full pointer-events-none shadow-lg">
        After
      </div>
    </div>
  );
};

const FeatureSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header fade in
      gsap.fromTo('.feature-header',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.feature-header',
            start: 'top 85%'
          }
        }
      );

      // Projects stagger
      gsap.fromTo('.project-card',
        { y: 40, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%'
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-black py-16 md:py-20 lg:py-24 px-5 sm:px-6 lg:px-8 xl:px-10 min-h-[75vh] border-t border-white/5 font-manrope">
      {/* Header */}
      <div className="feature-header max-w-screen-xl mx-auto px-6 md:px-12 lg:px-24 mb-16 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="w-12 h-[1px] bg-[#D6D6D6]"></span>
          <span className="text-zinc-400 text-xs font-semibold tracking-widest uppercase">{featureSectionContent.tagline}</span>
          <span className="w-12 h-[1px] bg-[#D6D6D6]"></span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-wider font-poppins">
          {featureSectionContent.heading}
        </h2>
        <p className="mt-6 text-zinc-300 text-base md:text-lg font-light max-w-3xl mx-auto">
          {featureSectionContent.description}
        </p>
      </div>

      {/* Projects List - 2 Column Grid */}
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {featureProjects.map((project) => (
          <div key={project.id} className="project-card flex flex-col gap-6 w-full group">
            {/* Interactive Slider First */}
            <ImageComparisonSlider before={project.beforeImage} after={project.afterImage} title={project.title} />

            {/* Project Info Header */}
            <div className="flex flex-col gap-3 px-2">
              <h3 className="text-2xl lg:text-3xl font-semibold uppercase text-zinc-200 leading-none tracking-wider font-poppins">
                {project.title}
              </h3>
            </div>

            {/* Description */}
            <div className="px-2">
              <p className="text-zinc-300 text-sm font-light leading-relaxed">
                {project.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default React.memo(FeatureSection);
