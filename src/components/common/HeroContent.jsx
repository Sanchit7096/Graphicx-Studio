import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { heroContent } from '../../data/siteContent';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroContent = () => {
  const containerRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const bodyRef = useRef(null);
  const btnRef = useRef(null);
  const dividerRef = useRef(null);
  const tagRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(tagRef.current, { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0.1);
      tl.fromTo([line1Ref.current, line2Ref.current, line3Ref.current], 
        { y: 25, opacity: 0 }, 
        { y: 0, opacity: 1, stagger: 0.12, duration: 0.7, ease: 'power3.out' }, 
        0.2
      );
      tl.fromTo(dividerRef.current, { scaleX: 0, transformOrigin: 'left' }, { scaleX: 1, duration: 0.6, ease: 'power2.out' }, 0.5);
      tl.fromTo(bodyRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 0.6);
      tl.fromTo(btnRef.current, { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0.7);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative z-10 w-full h-full max-w-screen-2xl 2xl:max-w-[1800px] 3xl:max-w-[2200px] mx-auto flex items-center justify-between gap-8 sm:gap-12 px-5 sm:px-8 md:px-16 lg:px-24 2xl:px-32 mt-10 sm:mt-14 lg:mt-16 font-poppins"
    >
      {/* ── LEFT: Main content ── */}
      <div className="flex flex-col items-start flex-1 min-w-0">

        {/* Tag line */}
        <div
          ref={tagRef}
          className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-5 text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-white"
        >
          <span className="inline-block w-5 sm:w-8 bg-[#D6D6D6]" />
          {heroContent.tagline}
        </div>

        {/* Headline */}
        <h1 className="m-0 w-full">
          <span
            ref={line1Ref}
            data-text={heroContent.headline.line1}
            className="block overflow-hidden uppercase font-semibold leading-[0.95] tracking-wider text-white font-poppins"
            style={{ fontSize: 'clamp(20px, 3.2vw, 56px)', letterSpacing: '-0.02em' }}
          >
            {heroContent.headline.line1}
          </span>
          <span
            ref={line2Ref}
            data-text={heroContent.headline.line2}
            className="block overflow-hidden uppercase tracking-wider font-semibold leading-[0.95] italic text-transparent pl-1.5 sm:pl-2 md:pl-[clamp(12px,2.5vw,48px)] mt-1 font-poppins"
            style={{ fontSize: 'clamp(20px, 3.2vw, 56px)', letterSpacing: '-0.02em', WebkitTextStroke: '1.2px rgba(255,255,255,0.75)' }}
          >
            {heroContent.headline.line2}
          </span>
          <span
            ref={line3Ref}
            data-text={heroContent.headline.line3}
            className="block overflow-hidden uppercase font-semibold leading-[0.95] tracking-wider text-white mt-1 font-poppins"
            style={{ fontSize: 'clamp(20px, 3.2vw, 56px)', letterSpacing: '-0.02em' }}
          >
            {heroContent.headline.line3}
          </span>
        </h1>

        {/* Accent divider */}
        <div
          ref={dividerRef}
          className="my-3 sm:my-4 h-px w-12 sm:w-16 bg-gradient-to-r from-[#D6D6D6] to-transparent"
        />

        {/* Body + Buttons */}
        <div className="flex flex-col items-start gap-4 mt-1 w-full max-w-3xl">
          <p
            ref={bodyRef}
            className="font-light leading-[1.6] sm:leading-[1.7] tracking-wide text-white/85"
            style={{ fontSize: 'clamp(13px, 1.1vw, 16px)' }}
          >
            {heroContent.body}
          </p>

          <div ref={btnRef} className="mt-1 sm:mt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 sm:gap-3 bg-orange-500  hover:bg-amber-600 text-black text-[11px] sm:text-sm font-semibold tracking-wide px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg shadow-amber-500/10 hover:shadow-amber-500/25 transition-all duration-300 transform hover:-translate-y-0.5 group whitespace-nowrap"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
