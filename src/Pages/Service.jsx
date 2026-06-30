import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from "../assets/Service/img-1.jpeg";
import img2 from "../assets/Service/img-2.jpeg";
import img3 from "../assets/Feature/img-7.png";
import img4 from "../assets/Feature/img-1.jpeg"
import img5 from "../assets/Service/img-5.jpeg";



gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: "LED Signboards",
    desc: "High-visibility, energy-efficient illuminated displays that make your brand impossible to ignore, day or night.",
    className: "md:col-span-2 md:row-span-2 min-h-[300px] md:min-h-[400px]",
    gradient: "from-[#2edcc3]/40 via-[#2edcc3]/10 to-transparent",
    accent: "text-[#2edcc3]",
    icon: "✦",
    image: img3
  },
  {
    id: 2,
    title: "Acrylic Signboards",
    desc: "Sleek, premium, and highly durable signage for a sophisticated modern aesthetic.",
    className: "md:col-span-1 md:row-span-1 min-h-[250px]",
    gradient: "from-white/20 via-white/5 to-transparent",
    accent: "text-white",
    icon: "◈",
    image: img5
  },
  {
    id: 3,
    title: "ACP Signboards",
    desc: "Robust aluminum composite panels built to withstand the elements.",
    className: "md:col-span-1 md:row-span-1 min-h-[250px]",
    gradient: "from-white/20 via-white/5 to-transparent",
    accent: "text-white",
    icon: "⬡",
    image: img2
  },
  {
    id: 4,
    title: "Neon Signs",
    desc: "Vibrant, custom-shaped neon lighting to give your space a retro yet contemporary creative edge.",
    className: "md:col-span-2 md:row-span-1 min-h-[250px]",
    gradient: "from-[#ff4d6d]/40 via-[#ff4d6d]/10 to-transparent",
    accent: "text-[#ff4d6d]",
    icon: "◎",
    image: "https://images.unsplash.com/photo-1554290712-e640351074bd?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "3D Letter Signs",
    desc: "Bold dimensional lettering that adds depth and architectural impact to your storefront.",
    className: "md:col-span-1 md:row-span-1 min-h-[250px]",
    gradient: "from-white/20 via-white/5 to-transparent",
    accent: "text-white",
    icon: "◩",
    image: img1
  },
  {
    id: 6,
    title: "Corporate Branding",
    desc: "End-to-end visual identity systems spanning across physical signage and digital touchpoints.",
    className: "md:col-span-3 md:row-span-1 min-h-[250px]",
    gradient: "from-[#7b61ff]/40 via-[#7b61ff]/10 to-transparent",
    accent: "text-[#7b61ff]",
    icon: "❖",
    image: img4
  }
];

const Service = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo('.service-heading',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );

      // Bento cards staggered entrance
      gsap.fromTo('.bento-card',
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full bg-black py-18  md:py-18 px-6 md:px-12 lg:px-24 overflow-hidden"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <div className="max-w-screen-2xl mx-auto">

        {/* Header section */}
        <div className="service-heading mb-16 md:mb-24 flex flex-col items-center text-center">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-[#D6D6D6]"></span>
            <span className="text-[#D6D6D6] text-sm font-bold tracking-widest uppercase">Our Expertise</span>
            <span className="w-12 h-[1px] bg-[#D6D6D6]"></span>
          </div>
          <h2
            className="text-5xl md:text-7xl font-black text-white uppercase leading-[0.9]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Premium Services
          </h2>
          <p className="mt-8 text-white/50 text-lg md:text-xl font-light max-w-2xl">
            From striking illuminated displays to cohesive corporate identities, we craft visual assets that command attention.
          </p>
        </div>

        {/* Bento Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-min">
          {services.map((svc) => (
            <div
              key={svc.id}
              className={`bento-card group relative rounded-3xl overflow-hidden border border-white/5 bg-[#0a0a0a] transition-all duration-500 hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl ${svc.className}`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img src={svc.image} alt={svc.title} className="w-full h-full object-cover opacity-65 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              </div>

              {/* Background Gradient & Hover effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${svc.gradient} mix-blend-overlay opacity-60 transition-opacity duration-500 group-hover:opacity-100 z-0`} />

              {/* Content */}
              <div className="relative z-10 h-full p-8 md:p-10 flex flex-col">
                <div className="mb-auto">
                  <span className={`text-4xl drop-shadow-lg ${svc.accent}`}>
                    {svc.icon}
                  </span>
                </div>

                <div className="mt-8">
                  <h3
                    className="text-3xl md:text-4xl font-black text-white uppercase mb-4 transition-colors duration-300 group-hover:text-white"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {svc.title}
                  </h3>
                  <p className="text-white/40 text-sm md:text-base font-light leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                    {svc.desc}
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="absolute top-8 right-8 md:top-10 md:right-10 opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm">
                    <span className="text-white text-lg">↗</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Service;
