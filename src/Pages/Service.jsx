import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from "../assets/Service/img-1.jpeg";
import img2 from "../assets/Service/img-2.jpeg";
import img3 from "../assets/Feature/img-7.png";
import img4 from "../assets/Feature/img-1.jpeg";
import img5 from "../assets/Service/img-5.jpeg";
import img6 from "../assets/Service/img-3.jpeg";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "01",
    title: "LED Signboards",
    desc: "Illuminated displays built to make your brand impossible to ignore.",
    image: img3,
  },
  {
    id: "02",
    title: "Acrylic Signboards",
    desc: "Crystal-clear, premium finish that elevates any storefront.",
    image: img5,
  },
  {
    id: "03",
    title: "ACP Signboards",
    desc: "Durable aluminum panels with a sharp professional look.",
    image: img2,
  },
  {
    id: "04",
    title: "Neon Signs",
    desc: "Custom neon lighting that turns your space into a statement.",
    image: "https://images.unsplash.com/photo-1554290712-e640351074bd?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "05",
    title: "3D Letter Signs",
    desc: "Bold dimensional lettering that commands attention.",
    image: img1,
  },
  {
    id: "06",
    title: "Corporate Branding",
    desc: "End-to-end identity systems — signage, print, and digital.",
    image: img4,
  },
];

const Service = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.svc-head',
        { y: 25, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' }
        }
      );

      gsap.utils.toArray('.svc-card').forEach((card, i) => {
        gsap.fromTo(card,
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
            delay: i * 0.07,
            scrollTrigger: { trigger: card, start: 'top 90%' }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="w-full bg-black py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-white/[0.05]"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <div className="max-w-screen-xl mx-auto">

        {/* Header */}
        <div className="svc-head flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 md:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#D6D6D6]" />
              <span className="text-[#D6D6D6] text-[10px] font-bold tracking-[0.3em] uppercase">Our Expertise</span>
            </div>
            <h2
              className="text-5xl md:text-7xl font-black text-white uppercase leading-[0.88]"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Premium Services
            </h2>
          </div>
          <p className="text-white/40 text-sm font-light leading-relaxed max-w-xs">
            Visual assets crafted to captivate, communicate, and convert — from first glance to lasting impression.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((svc) => (
            <div
              key={svc.id}
              className="svc-card group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
            >
              {/* Image */}
              <img
                src={svc.image}
                alt={svc.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10 group-hover:via-black/40 transition-all duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                {/* Top: number */}
                <span className="text-[11px] font-black text-white/30 tracking-[0.2em]">{svc.id}</span>

                {/* Bottom: title + desc */}
                <div>
                  <h3
                    className="text-2xl md:text-3xl font-black text-white uppercase mb-2 leading-tight"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {svc.title}
                  </h3>
                  <p className="text-white/50 text-xs font-light leading-relaxed max-w-[90%] group-hover:text-white/75 transition-colors duration-300">
                    {svc.desc}
                  </p>
                </div>
              </div>

              {/* Hover arrow */}
              <div className="absolute top-5 right-5 w-8 h-8 rounded-full border border-white/0 bg-white/0 flex items-center justify-center opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:border-white/30 group-hover:bg-white/10 transition-all duration-400">
                <span className="text-white text-xs">↗</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Service;
