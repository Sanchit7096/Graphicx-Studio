import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from "../assets/OurService/img-1.jpeg";
import img2 from "../assets/OurService/image.png";
import img3 from "../assets/OurService/img-3.jpeg";
import img4 from "../assets/OurService/img-1.jpeg"; // TODO: duplicate of img1 — replace with a real Corporate Branding photo
import img5 from "../assets/OurService/img-5.jpeg";
import img6 from "../assets/OurService/Neon-Sign-Board3.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "01",
    title: "LED Sign Board Manufacturer in Surat",
    desc: "Custom illuminated LED signboards designed and installed to make your storefront impossible to ignore.",
    image: img3,
    button: "View work",
    featured: true,
  },
  {
    id: "02",
    title: "Acrylic Signboard Design",
    desc: "Crystal-clear acrylic signage with a premium finish that elevates any storefront or office space.",
    image: img5,
    button: "View work",
    featured: false,
  },
  {
    id: "03",
    title: "ACP Signage Solutions",
    desc: "Durable ACP (aluminum composite panel) signboards built for a sharp, professional, long-lasting look.",
    image: img2,
    button: "View work",
    featured: false,
  },
  {
    id: "04",
    title: "Custom Neon Signs",
    desc: "Custom-designed neon lighting and LED neon signs that turn your storefront into a statement.",
    image: img6,
    button: "View work",
    featured: true,
  },
  {
    id: "05",
    title: "3D Letter Signage",
    desc: "Bold dimensional acrylic and metal letter signs that command attention on any storefront or building.",
    image: img1,
    button: "View work",
    featured: false,
  },
  {
    id: "06",
    title: "Corporate Branding & Identity Design",
    desc: "End-to-end brand identity systems — logo design, signage, print, and digital branding for growing businesses.",
    image: img4,
    button: "View work",
    featured: false,
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
      id="Service"
      className="w-full bg-[#040404] py-16 md:py-20 lg:py-24 px-5 sm:px-6 lg:px-8 xl:px-10 min-h-[75vh] border-t border-white/10 font-manrope"
    >
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-15 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <div className="lg:sticky lg:top-55 lg:self-start">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_0_80px_rgba(255,255,255,0.04)] backdrop-blur-md sm:p-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[1px] w-8 bg-[#D6D6D6]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.36em] text-[#D6D6D6]">
                Our Expertise
              </span>
            </div>

            <h2 className="text-4xl font-semibold uppercase leading-[0.88] tracking-[0.2em] text-white sm:text-5xl font-poppins">
              Our Services
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
              From LED sign boards to ACP signage, logo design, and complete brand identity — we deliver premium signage and branding solutions for businesses across Surat and Dindoli.
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
              tabIndex={0}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b0b] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-white/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4"
            >
              <div className="relative h-[320px] sm:h-[420px] lg:h-[350px] overflow-hidden">
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
                    {svc.featured && (
                      <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-white backdrop-blur-sm">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 text-2xl uppercase leading-tight tracking-[0.16em] text-white sm:text-3xl font-poppins transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1">
                    {svc.title}
                  </h3>
                </div>
              </div>

              <div className="px-6 py-6 sm:px-8 sm:py-7 flex justify-between">
                <p className="max-w-2xl text-sm leading-7 text-white/70 sm:text-base max-w-xl">
                  {svc.desc}
                </p>
                <button className="text-white/80 cursor-pointer font-poppins flex items-center gap-2 text-xl tracking-wider font-bold hover:underline transition-all duration-300">{svc.button} <FontAwesomeIcon icon={faChevronDown} rotation={270} size="xs" /></button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;