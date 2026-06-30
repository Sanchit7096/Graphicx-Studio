import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    id: 1,
    title: "Premium Quality Materials",
    desc: "We use high-grade acrylic, ACP sheets, LEDs, and durable materials to ensure long-lasting performance and a premium finish.",
  },
  {
    id: 2,
    title: "Fast Turnaround Time",
    desc: "From concept to installation, our streamlined process helps deliver projects quickly without compromising quality.",
  },
  {
    id: 3,
    title: "Expert Installation",
    desc: "Our experienced installation team ensures precise fitting, safety compliance, and flawless execution at every location.",
  },
  {
    id: 4,
    title: "Fully Customized Solutions",
    desc: "Every business is unique. We design signboards tailored to your brand identity, space requirements, and marketing goals.",
  },
  {
    id: 5,
    title: "Dedicated Customer Support",
    desc: "From consultation to post-installation assistance, our team remains available to provide guidance and support whenever needed.",
  }
];

const WhyChooseUs = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in the entire section smoothly
      gsap.fromTo(containerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
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
    <section
      ref={containerRef}
      className="w-full bg-black py-18 md:py-18 border-t border-white/5"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left Side: Sticky Header */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-[1px] bg-[#D6D6D6]"></span>
                <span className="text-[#D6D6D6] text-sm font-bold tracking-widest uppercase">The GraphicX Advantage</span>
              </div>
              <h2
                className="text-5xl md:text-7xl font-black text-white uppercase leading-[0.9] tracking-tight mb-8"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Why Choose Us
              </h2>
              <p className="text-white/50 text-base md:text-lg font-light leading-relaxed">
                We blend minimalist design with flawless execution. Click through the points to see why industry leaders trust us with their physical brand presence.
              </p>
            </div>
          </div>

          {/* Right Side: Accordion */}
          <div className="lg:w-2/3 flex flex-col">
            {reasons.map((reason, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={reason.id}
                  className={`border-b border-white/10 transition-colors duration-300 ${isOpen ? 'border-[#2edcc3]/30' : 'hover:border-white/30'}`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full py-8 flex items-center justify-between focus:outline-none group text-left"
                  >
                    <div className="flex items-center gap-8">
                      <span className={`text-sm md:text-base font-bold transition-colors duration-300 ${isOpen ? 'text-[#2edcc3]' : 'text-white/30 group-hover:text-white/50'}`}>
                        0{index + 1}
                      </span>
                      <h3
                        className={`text-2xl md:text-4xl font-black uppercase transition-colors duration-300 ${isOpen ? 'text-white' : 'text-white/60 group-hover:text-white'}`}
                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                      >
                        {reason.title}
                      </h3>
                    </div>

                    {/* Plus/Minus Icon */}
                    <div className="relative w-6 h-6 flex items-center justify-center">
                      <span className={`absolute w-full h-[2px] bg-current transition-all duration-300 ${isOpen ? 'text-[#2edcc3]' : 'text-white/50'}`}></span>
                      <span className={`absolute w-full h-[2px] bg-current transition-all duration-300 ${isOpen ? 'rotate-0 text-[#2edcc3] opacity-0' : 'rotate-90 text-white/50'}`}></span>
                    </div>
                  </button>

                  {/* Accordion Content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${isOpen ? 'max-h-40 opacity-100 pb-8' : 'max-h-0 opacity-0 pb-0'}`}
                  >
                    <p className="text-white/60 text-lg font-light leading-relaxed pl-12 md:pl-16 pr-4">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
