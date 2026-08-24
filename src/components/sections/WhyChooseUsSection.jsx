import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { testimonials } from '../../data/siteContent';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUsSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const containerRef = useRef(null);

  const visibleTestimonials = [
    testimonials[startIndex],
    testimonials[(startIndex + 1) % testimonials.length]
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id='clients'
      className="w-full py-12 md:py-16 px-5 sm:px-6 lg:px-8 xl:px-10 border-t border-white/5 font-poppins"
    >
      <div className="max-w-screen-2xl 2xl:max-w-[1800px] 3xl:max-w-[2200px] mx-auto px-2 sm:px-6 md:px-12 lg:px-24">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-[minmax(280px,340px)_1fr] items-start">
          <div className="space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
                Customer Feedback
              </h2>
              <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed">
                See why our clients love working with us.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() =>
                  setStartIndex(
                    startIndex === 0
                      ? testimonials.length - 1
                      : startIndex - 1
                  )
                }
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:border-[#2edcc3] hover:bg-[#2edcc3]/15 hover:text-white active:scale-95"
                aria-label="Previous testimonial"
              >
                <svg
                  className="h-5 w-5"
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
              <button
                onClick={() =>
                  setStartIndex((startIndex + 1) % testimonials.length)
                }
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:border-[#2edcc3] hover:bg-[#2edcc3]/15 hover:text-white active:scale-95"
                aria-label="Next testimonial"
              >
                <svg
                  className="h-5 w-5"
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
            </div>
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            {visibleTestimonials.map((testimonial, idx) => (
              <article
                key={`${testimonial.id}-${idx}`}
                className={`rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 shadow-xl transition-all duration-300 hover:border-[#2edcc3]/30 hover:bg-white/10 flex flex-col justify-between ${
                  idx === 1 ? 'hidden md:flex' : 'flex'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3.5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white font-semibold text-sm uppercase tracking-wider">
                        {testimonial.author
                          .split(' ')
                          .map((word) => word[0])
                          .slice(0, 2)
                          .join('')}
                      </div>

                      <div>
                        <h3 className="text-base font-semibold text-white">
                          {testimonial.author}
                        </h3>
                        <p className="text-xs text-white/60">Verified Client</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, index) => (
                        <span
                          key={index}
                          className={`text-sm ${index < testimonial.rating ? 'text-amber-400' : 'text-white/20'}`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="mt-4 text-white/80 text-sm sm:text-base leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
