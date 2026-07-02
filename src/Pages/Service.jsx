import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from "../assets/Service/img-1.jpeg";
import img2 from "../assets/Service/image.png";
import img3 from "../assets/Feature/img-7.png";
import img4 from "../assets/Feature/img-1.jpeg";
import img5 from "../assets/Service/img-5.jpeg";
import img6 from "../assets/Service/Neon-Sign-Board3.jpg";

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
    image: img6,
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
  const cardRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean);

    if (!cards.length) return;

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 70,
        scale: 0.97,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="w-full bg-[#040404] py-20 px-4 sm:px-6 lg:px-8 xl:px-10 border-t border-white/10"
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-15 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <div className="lg:sticky lg:top-55 lg:self-start">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_0_80px_rgba(255,255,255,0.04)] backdrop-blur-md sm:p-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[1px] w-8 bg-[#D6D6D6]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.36em] text-[#D6D6D6]">
                Our Expertise
              </span>
            </div>

            <h2
              className="text-4xl font-black uppercase leading-[0.88] tracking-[0.2em] text-white sm:text-5xl"
              style={{ fontFamily: "'Audiowide', sans-serif" }}
            >
              Our Services
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
              We turn bold signage concepts into high-impact visual experiences that feel as premium as the brands they represent.
            </p>

            <div className="mt-8 h-px w-24 bg-white/15" />
            <p className="mt-5 text-[11px] uppercase tracking-[0.38em] text-white/45">
              Selected work
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:gap-8">
          {services.map((svc, index) => (
            <article
              key={svc.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b0b]"
            >
              <div className="relative h-[320px] sm:h-[420px] lg:h-[350px]">
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70">
                      {svc.id}
                    </span>
                    <span className="rounded-full border border-white/20 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-white/70">
                      Featured
                    </span>
                  </div>
                  <h3
                    className="mt-4 text-2xl font-black uppercase leading-tight tracking-[0.16em] text-white sm:text-3xl"
                    style={{ fontFamily: "'Audiowide', sans-serif" }}
                  >
                    {svc.title}
                  </h3>
                </div>
              </div>

              <div className="px-6 py-6 sm:px-8 sm:py-7">
                <p className="max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                  {svc.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;

