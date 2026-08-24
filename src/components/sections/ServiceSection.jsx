import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import services from '../../data/services';
import { serviceSectionIntro } from '../../data/siteContent';

gsap.registerPlugin(ScrollTrigger);

const previewServices = services.slice(0, 4);

const ServiceSection = () => {
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
      <div className="mx-auto flex max-w-screen-2xl 2xl:max-w-[1800px] 3xl:max-w-[2200px] flex-col gap-12 lg:grid lg:grid-cols-[0.9fr_1.1fr] 2xl:grid-cols-[0.8fr_1.2fr] lg:gap-12">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-xl backdrop-blur-md sm:p-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[1px] w-8 bg-[#D6D6D6]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D6D6D6]">
                {serviceSectionIntro.tagline}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-poppins">
              {serviceSectionIntro.heading}
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
              {serviceSectionIntro.description}
            </p>

            <div className="mt-8 h-px w-24 bg-white/15" />
            <div className="mt-8 hidden lg:block">
              <Link
                to="/services"
                className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-poppins text-sm tracking-wider text-white transition-all duration-300 hover:border-orange-500 hover:bg-orange-500/10"
              >
                <span>View All Services</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-current transition-transform duration-300 group-hover:translate-x-1">
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    rotation={270}
                    size="sm"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:gap-8">
          {previewServices.map((svc, index) => (
            <article
              key={svc.id}
              ref={(el) => (cardRefs.current[index] = el)}
              tabIndex={0}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-white/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4"
            >
              <div className="relative h-[280px] sm:h-[360px] lg:h-[320px] overflow-hidden">
                <img
                  src={svc.image}
                  alt={svc.sectionTitle}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-white/70">
                      {svc.id}
                    </span>
                    {svc.featured && (
                      <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs tracking-wider text-white backdrop-blur-sm">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="mt-3 text-xl sm:text-2xl font-bold leading-tight text-white font-poppins transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1">
                    {svc.sectionTitle}
                  </h3>
                </div>
              </div>

              <div className="px-6 py-5 sm:px-8 sm:py-6 flex justify-between">
                <p className="max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
                  {svc.shortDesc}
                </p>
              </div>
            </article>
          ))}

          {/* Secondary Mobile & Bottom CTA */}
          <div className="mt-4 flex justify-center lg:hidden">
            <Link
              to="/services"
              className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-poppins text-sm tracking-wider text-white transition-all duration-300 hover:border-orange-500 hover:bg-orange-500/10"
            >
              <span>View All Services</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-current transition-transform duration-300 group-hover:translate-x-1">
                <FontAwesomeIcon icon={faChevronDown} rotation={270} size="sm" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
