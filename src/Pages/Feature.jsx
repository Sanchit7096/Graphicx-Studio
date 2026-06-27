import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import image1 from "../assets/Feature/img-1.jpeg";
import image2 from "../assets/Feature/img-2.jpeg";
import image4 from "../assets/Feature/img-4.png";
import image5 from "../assets/Feature/img-5.png";
import image6 from "../assets/Feature/img-6.png";
import image7 from "../assets/Feature/img-7.jpeg";



gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    client: "Social Buddies",
    title: "Corporate Branding",
    category: "Acrylic & Office Branding",
    beforeImage: image1,
    afterImage: image2,
    desc: "Modern acrylic logo installation that creates a clean, professional, and memorable workspace identity.."
  },
  {
    id: 2,
    client: "AK FITNESS",
    title: "Illuminated Gym Branding",
    category: "LED & 3D Letters",
    beforeImage: image5,
    afterImage: image4,
    desc: "Transforming a fitness space with custom LED channel letters that command attention both day and night."
  },
  {
    id: 3,
    client: "BALAJI JEWELLERS",
    title: "Luxury Jewellery Store Signage",
    category: "Custom Neon Signs",
    beforeImage: image7,
    afterImage: image6,
    desc: "A complete signage transformation for a premium jewellery store, blending elegance with modern illumination."
  }
];

// Reusable Image Slider Component
const ImageComparisonSlider = ({ before, after }) => {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="relative w-full h-[45vh] lg:h-[55vh] rounded-2xl overflow-hidden select-none">
      {/* After Image (Background) */}
      <img
        src={after}
        alt="After Transformation"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Before Image (Foreground, Clipped) */}
      <img
        src={before}
        alt="Before Transformation"
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
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" /> {/* Left Arrow */}
            <path d="M9 18l6-6-6-6" />   {/* Right Arrow */}
          </svg>
        </div>
      </div>

      {/* Invisible Range Input for accessibility and native touch/drag handling */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPos}
        onChange={(e) => setSliderPos(e.target.value)}
        className="absolute inset-0 w-full h-full opacity-0 z-20 cursor-ew-resize touch-pan-y"
        aria-label="Image comparison slider"
      />

      {/* Labels */}
      <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full pointer-events-none">
        Before
      </div>
      <div className="absolute top-4 right-4 z-10 bg-[#2edcc3]/90 text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full pointer-events-none shadow-lg">
        After
      </div>
    </div>
  );
};

const Feature = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header fade in
      gsap.fromTo('.feature-header',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.feature-header',
            start: 'top 85%'
          }
        }
      );

      // Projects stagger
      gsap.fromTo('.project-card',
        { y: 50, opacity: 0, scale: 0.95 },
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
    <section ref={containerRef} className="w-full bg-black py-24 md:py-32 border-t border-white/5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>

      {/* Header */}
      <div className="feature-header max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 mb-16 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="w-12 h-[1px] bg-[#2edcc3]"></span>
          <span className="text-[#2edcc3] text-sm font-bold tracking-widest uppercase">Transformations</span>
          <span className="w-12 h-[1px] bg-[#2edcc3]"></span>
        </div>
        <h2
          className="text-5xl md:text-7xl font-black text-white uppercase leading-[0.9]"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Before & After
        </h2>
        <p className="mt-6 text-white/50 text-base md:text-lg font-light max-w-2xl mx-auto">
          Drag the sliders to witness the incredible visual impact of premium signage.
        </p>
      </div>

      {/* Projects List - 3 Column Grid */}
      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {projects.map((project, index) => (
          <div key={project.id} className="project-card flex flex-col gap-6 w-full group">

            {/* Interactive Slider First */}
            <ImageComparisonSlider before={project.beforeImage} after={project.afterImage} />

            {/* Project Info Header */}
            <div className="flex flex-col gap-3 px-2">
              <div className="flex justify-between items-start">
                <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff4d6d] bg-[#ff4d6d]/10 border border-[#ff4d6d]/20 rounded-full">
                  {project.category}
                </span>
                <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase font-bold text-right pt-1">
                  {project.client}
                </span>
              </div>
              <h3
                className="text-3xl lg:text-4xl font-black uppercase text-white leading-none transition-colors duration-300 group-hover:text-[#2edcc3]"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {project.title}
              </h3>
            </div>

            {/* Description */}
            <div className="px-2">
              <p className="text-white/50 text-sm font-light leading-relaxed">
                {project.desc}
              </p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Feature;
