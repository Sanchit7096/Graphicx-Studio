import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    quote: "Great graphic designer! Very creative and deliver work on time. Highly recommend.",
    author: "NR World",
    rating: 5
  },
  {
    id: 2,
    quote: "Very nice and creative pamphlet design. Fast service and good communication. Highly recommended.",
    author: "Rajpurohit Green Energy",
    rating: 5
  },
  {
    id: 3,
    quote: "Excellent work on our company catalog. Creative, professional design that perfectly represents our brand. Impressive presentation and timely delivery.",
    author: "Swati Patil",
    rating: 5
  },
  {
    id: 4,
    quote: "Absolute pleasure from start to finish. Creativity, attention to detail, and deep understanding of visual communication set them apart. Top-notch quality every time.",
    author: "Sushant",
    rating: 5
  },
  {
    id: 5,
    quote: "Really great experience. Much better than expected. The staff was very polite & helpful.",
    author: "Infinity Mobile",
    rating: 5
  },
  {
    id: 6,
    quote: "Very good service provider and their creative designs is really appreciated. Must go with them for designing and advertisement.",
    author: "Vardan Ethnic",
    rating: 5
  }
];

const WhyChooseUs = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleTestimonials = isMobile
    ? [testimonials[startIndex]]
    : [
        testimonials[startIndex],
        testimonials[(startIndex + 1) % testimonials.length]
      ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full bg-black py-20 md:py-20 border-t border-white/5 font-poppins"
    >
      <div className="max-w-screen-2xl mx-auto  px-6 md:px-12 lg:px-24">

        {/* Main Heading */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-[#D6D6D6]"></span>
            <span className="text-[#D6D6D6] text-sm font-bold tracking-widest uppercase">
              Testimonials
            </span>
            <span className="w-12 h-[1px] bg-[#D6D6D6]"></span>
          </div>

          <h2
            className="text-4xl md:text-4xl font-semibold text-white uppercase leading-[0.9] tracking-wider font-poppins"
          >
            See Why Our Clients Love Working With Us
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="relative">

          {/* Left Arrow */}
          <button
            onClick={() =>
              setStartIndex(
                startIndex === 0
                  ? testimonials.length - 1
                  : startIndex - 1
              )
            }
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full border border-white/20 hover:border-[#2edcc3] hover:bg-[#2edcc3]/10 flex items-center justify-center transition-all duration-300 group z-10"
          >
            <svg
              className="w-5 h-5 text-white/50 group-hover:text-[#2edcc3] transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() =>
              setStartIndex((startIndex + 1) % testimonials.length)
            }
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full border border-white/20 hover:border-[#2edcc3] hover:bg-[#2edcc3]/10 flex items-center justify-center transition-all duration-300 group z-10"
          >
            <svg
              className="w-5 h-5 text-white/50 group-hover:text-[#2edcc3] transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10"
              >
                <div className="text-center">

                  {/* Quote Icon */}
                  <div className="mb-4">
                    <svg
                      className="w-6 h-6 mx-auto text-[#2edcc3]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Quote */}
                  <p className="text-white/80 text-base md:text-lg font-light leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex flex-col items-center gap-3">

                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <h4 className="text-white font-bold text-sm uppercase tracking-wider">
                      {testimonial.author}
                    </h4>

                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;