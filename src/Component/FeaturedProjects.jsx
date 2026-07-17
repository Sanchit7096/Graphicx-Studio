import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import img1 from "../assets/Projects/img1.png"
import img2 from "../assets/Projects/img2.png"
import img3 from "../assets/Projects/img3.png"
import img4 from "../assets/Projects/img4.png"

const PROJECTS = [
  { id: "01", title: "Hotel Signage", category: "LED Display & Illumination", location: "Indore", year: "2024", image: img1 },
  { id: "02", title: "Hospital Branding", category: "Billboard & Facade", location: "Bhopal", year: "2023", image: img2 },
  { id: "03", title: "Dance Studio", category: "Interior & Spatial", location: "Indore", year: "2024", image: img3 },
  { id: "04", title: "Clothing Boutique", category: "Vehicle & Retail Branding", location: "Ujjain", year: "2023", image: img4 },
];

export default function FeaturedProjects() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const bgNumbersRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const total = PROJECTS.length;
  const isAnimating = useRef(false);

  // Coverflow Animation
  useEffect(() => {
    const cards = cardsRef.current;
    if (!cards || cards.length === 0) return;
    const ease = "power3.out";
    const duration = 0.8;

    cards.forEach((card, i) => {
      if (!card) return;
      if (i === activeIndex) {
        gsap.to(card, { x: "0%", z: 0, rotationY: 0, scale: 1, opacity: 1, filter: "blur(0px)", zIndex: 10, duration, ease, overwrite: true });
      } else if (i < activeIndex) {
        gsap.to(card, { x: "-65%", z: -150, rotationY: 25, scale: 0.8, opacity: 0.4, filter: "blur(8px)", zIndex: i, duration, ease, overwrite: true });
      } else {
        gsap.to(card, { x: "65%", z: -150, rotationY: -25, scale: 0.8, opacity: 0.4, filter: "blur(8px)", zIndex: total - i, duration, ease, overwrite: true });
      }
    });

    bgNumbersRef.current.forEach((num, i) => {
      if (!num) return;
      if (i === activeIndex) gsap.to(num, { opacity: 0.03, y: 0, scale: 1, duration: 1.5, ease: "power3.out", overwrite: true });
      else gsap.to(num, { opacity: 0, y: 30, scale: 0.95, duration: 1.0, ease: "power3.out", overwrite: true });
    });
  }, [activeIndex, total]);

  // Drag & Wheel Interaction
  const dragStartX = useRef(null);

  const navigate = (dir, targetIndex = null) => {
    if (isAnimating.current) return;
    if (targetIndex !== null) {
      if (targetIndex === activeIndex) return;
      isAnimating.current = true;
      setActiveIndex(targetIndex);
      setTimeout(() => { isAnimating.current = false; }, 300);
    } else {
      isAnimating.current = true;
      setActiveIndex(prev => dir > 0 ? (prev + 1) % total : (prev - 1 + total) % total);
      setTimeout(() => { isAnimating.current = false; }, 200);
    }
  };

  const handlePointerDown = (e) => dragStartX.current = e.clientX;
  const handlePointerUp = () => dragStartX.current = null;
  const handlePointerMove = (e) => {
    if (dragStartX.current === null) return;
    const diff = dragStartX.current - e.clientX;
    if (Math.abs(diff) > 50) {
      navigate(diff > 0 ? 1 : -1);
      dragStartX.current = null;
    }
  };

  const handleWheel = (e) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault();
      if (e.deltaX > 25) navigate(1);
      else if (e.deltaX < -25) navigate(-1);
    }
  };
  // Auto-advance every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, total]);

  return (
    <>
      <section className="relative w-full bg-[#080808] flex flex-col overflow-hidden py-16 md:py-20 lg:py-24 px-5 sm:px-6 lg:px-8 xl:px-10 select-none min-h-[75vh]">

        {/* Background Grain & Numbers */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none z-0"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")` }}
        />
        <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden pointer-events-none">
          {PROJECTS.map((proj, i) => (
            <div key={proj.id} ref={el => bgNumbersRef.current[i] = el} className="absolute font-poppins text-[clamp(15rem,45vw,50rem)] font-extrabold text-white leading-none opacity-0">
              {proj.id}
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="relative z-10 mb-8 pointer-events-none max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-12 h-[1px] bg-[#D6D6D6]/30"></span>
            <span className="text-[#D6D6D6]/50 text-xs font-bold tracking-widest uppercase">Featured Projects</span>
            <span className="w-12 h-[1px] bg-[#D6D6D6]/30"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wider font-poppins text-center mb-2">
            Selected Work
          </h2>
        </div>

        {/* 3D Coverflow Container */}
        <div
          ref={containerRef}
          className="relative flex-1 flex items-center justify-center z-10 touch-pan-y"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          onWheel={handleWheel}
        >
          <div className="relative flex items-center justify-center w-[75vw] md:w-[clamp(320px,45vw,800px)] h-[50vh] md:h-[clamp(400px,60vh,700px)]" style={{ perspective: '1500px', transformStyle: 'preserve-3d' }}>
            {PROJECTS.map((project, i) => (
              <div
                key={project.id}
                ref={el => cardsRef.current[i] = el}
                className="absolute w-full h-full rounded-2xl overflow-hidden origin-center shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.06)] transition-all duration-500 cursor-pointer group hover:shadow-[0_40px_100px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.2)] hover:-translate-y-2"
                onClick={() => {
                  if (i === activeIndex) {
                    navigate(0, activeIndex < total - 1 ? activeIndex + 1 : 0);
                  } else {
                    navigate(0, i);
                  }
                }}
              >
                <div className="relative w-full h-full">
                  <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105" draggable={false} />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="relative z-10 w-full max-w-[800px] mx-auto flex flex-col items-center gap-8 px-8 mt-4 md:mt-0">
          <div className="flex gap-4">
            {PROJECTS.map((project, i) => (
              <div
                key={project.id}
                className={`w-16 h-10 rounded overflow-hidden cursor-pointer transition-all duration-500 ease-out border ${activeIndex === i ? 'opacity-100 border-white/80 scale-110 shadow-[0_8px_20px_rgba(0,0,0,0.6)]' : 'opacity-30 hover:opacity-80 border-transparent'}`}
                onClick={() => navigate(0, i)}
              >
                <img src={project.image} alt="thumb" className="w-full h-full object-cover" draggable={false} />
              </div>
            ))}
          </div>

          <div className="w-full h-[2px] bg-white/10 relative rounded overflow-hidden">
            <div className="absolute top-0 left-0 h-full bg-white transition-all duration-700 ease-out" style={{ width: `${((activeIndex + 1) / total) * 100}%` }} />
          </div>
        </div>

      </section>
    </>
  );
}
