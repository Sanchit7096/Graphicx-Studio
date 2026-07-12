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
      className="w-full bg-black py-20 md:py-24 min-h-[75vh]  border-t border-white/5 font-poppins"
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(300px,360px)_1fr] items-start">
          <div className="space-y-8">
            

            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight leading-tight">
                Customers Feedback
              </h2>
              <p className="text-white/70 text-lg leading-8">
               See Why Our Clients Love Working With Us.
              </p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() =>
                  setStartIndex(
                    startIndex === 0
                      ? testimonials.length - 1
                      : startIndex - 1
                  )
                }
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:border-[#2edcc3] hover:bg-[#2edcc3]/15 hover:text-white"
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
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:border-[#2edcc3] hover:bg-[#2edcc3]/15 hover:text-white"
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

          <div className="grid gap-6 sm:grid-cols-2">
            {visibleTestimonials.map((testimonial) => (
              <article
                key={testimonial.id}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] transition hover:border-[#2edcc3]/20 hover:bg-white/10"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white/90">
                    <span className="text-sm font-semibold uppercase tracking-[0.25em]">
                      {testimonial.author
                        .split(' ')
                        .map((word) => word[0])
                        .slice(0, 2)
                        .join('')}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {testimonial.author}
                    </h3>
                    <p className="text-sm text-white/70">Trusted customer</p>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-1">
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={`h-4 w-4 ${index < testimonial.rating ? 'text-amber-400' : 'text-white/20'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                <p className="mt-6 text-white/80 leading-8">
                  “{testimonial.quote}”
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;