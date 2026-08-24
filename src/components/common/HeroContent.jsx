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

      const splitLine = (el) => {
        if (!el) return [];
        const text = el.dataset.text || el.textContent;
        el.innerHTML = '';
        el.dataset.text = text;

        const words = text.split(' ');
        const chars = [];

        words.forEach((word, wordIndex) => {
          const wordWrapper = document.createElement('span');
          wordWrapper.style.cssText = 'display:inline-block; white-space:nowrap;';

          [...word].forEach((ch) => {
            const span = document.createElement('span');
            span.textContent = ch;
            span.style.cssText = 'display:inline-block;will-change:transform,opacity;';
            wordWrapper.appendChild(span);
            chars.push(span);
          });

          el.appendChild(wordWrapper);

          if (wordIndex < words.length - 1) {
            el.appendChild(document.createTextNode('\u00A0'));
          }
        });

        return chars;
      };

      tl.from(tagRef.current, { y: 20, opacity: 0, duration: 0.8 }, 0.2);

      const chars1 = splitLine(line1Ref.current);
      const chars2 = splitLine(line2Ref.current);
      const chars3 = splitLine(line3Ref.current);
      tl.from(chars1, { y: '120%', opacity: 0, rotateX: -80, stagger: 0.03, duration: 1, ease: 'power4.out' }, 0.5);
      tl.from(chars2, { y: '120%', opacity: 0, rotateX: -80, stagger: 0.03, duration: 1, ease: 'power4.out' }, 0.75);
      tl.from(chars3, { y: '120%', opacity: 0, rotateX: -80, stagger: 0.03, duration: 1, ease: 'power4.out' }, 1.0);

      tl.from(dividerRef.current, { scaleX: 0, transformOrigin: 'left', duration: 0.8, ease: 'power2.out' }, 1.4);
      tl.from(bodyRef.current, { y: 30, opacity: 0, duration: 1 }, 1.5);
      tl.from(btnRef.current, { y: 20, opacity: 0, duration: 0.8 }, 1.7);

      gsap.to([line1Ref.current, line2Ref.current, line3Ref.current], {
        y: -6, duration: 3.5, ease: 'sine.inOut', yoyo: true, repeat: -1, stagger: 0.5,
      });
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
            className="block overflow-hidden uppercase tracking-wider font-black leading-[0.95] italic text-transparent pl-1.5 sm:pl-2 md:pl-[clamp(12px,2.5vw,48px)] mt-1 font-poppins"
            style={{ fontSize: 'clamp(20px, 3.2vw, 56px)', letterSpacing: '-0.02em', WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}
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

          <div ref={btnRef} className="mt-2 sm:mt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 sm:gap-3 bg-amber-500 hover:bg-amber-600 text-black text-xs sm:text-sm font-bold px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl shadow-lg shadow-amber-500/10 hover:shadow-amber-500/25 transition-all duration-300 transform hover:-translate-y-0.5 group"
            >
              <span>Get a Free Design Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
