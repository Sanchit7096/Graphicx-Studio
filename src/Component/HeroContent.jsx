import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroContent = () => {
  const containerRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const bodyRef = useRef(null);
  const btn1Ref = useRef(null);
  const btn2Ref = useRef(null);
  const dividerRef = useRef(null);
  const statsRef = useRef(null);
  const tagRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      const splitLine = (el) => {
        if (!el) return [];
        const text = el.dataset.text || el.textContent;
        el.innerHTML = '';
        el.dataset.text = text;
        return [...text].map(ch => {
          const span = document.createElement('span');
          span.textContent = ch === ' ' ? '\u00A0' : ch;
          span.style.cssText = 'display:inline-block;will-change:transform,opacity;';
          el.appendChild(span);
          return span;
        });
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
      tl.from([btn1Ref.current, btn2Ref.current], { y: 20, opacity: 0, stagger: 0.15, duration: 0.8 }, 1.7);
      tl.from(statsRef.current?.children, { y: 20, opacity: 0, stagger: 0.12, duration: 0.8 }, 1.9);

      gsap.to([line1Ref.current, line2Ref.current, line3Ref.current], {
        y: -6, duration: 3.5, ease: 'sine.inOut', yoyo: true, repeat: -1, stagger: 0.5,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative z-10 w-full h-full flex items-center gap-0 px-8 md:px-16 lg:px-24 mt-20"
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >
      {/* ── LEFT: Main content ── */}
      <div className="flex flex-col items-start flex-1 min-w-0">

        {/* Tag line */}
        <div
          ref={tagRef}
          className="flex items-center gap-3 mb-8 text-[10px] font-black font-Audiowide uppercase tracking-[0.45em] text-white"
        >
          <span className="inline-block w-8 h-px bg-[#D6D6D6]" />
          GraphicX Studio — Premium Branding
        </div>

        {/* Headline */}
        <h1 className="m-0">
          <span
            ref={line1Ref}
            data-text="We Create"
            className="block overflow-hidden uppercase font-black leading-[0.88] tracking-tight text-white"
            style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(34px, 4.5vw, 90px)', letterSpacing: '-0.02em' }}
          >
            We Create
          </span>
          <span
            ref={line2Ref}
            data-text="Brand Identity"
            className="block overflow-hidden uppercase font-black leading-[0.88] italic text-transparent pl-[clamp(16px,3vw,60px)]"
            style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(34px, 4.5vw, 90px)', letterSpacing: '-0.02em', WebkitTextStroke: '1.5px rgba(255,255,255,0.3)' }}
          >
            Brand Identity
          </span>
          <span
            ref={line3Ref}
            data-text='Not Just "Sign Board"'
            className="block overflow-hidden uppercase font-black leading-[0.88] tracking-tight text-white whitespace-nowrap"
            style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(34px, 4.5vw, 90px)', letterSpacing: '-0.02em' }}
          >
            Not Just "Sign Board"
          </span>
        </h1>

        {/* Accent divider */}
        <div
          ref={dividerRef}
          className="my-5 h-px w-20 bg-gradient-to-r from-[#D6D6D6] to-transparent"
        />

        {/* Body + Buttons */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end gap-8 lg:gap-16 mt-2 w-full max-w-3xl">
          <p
            ref={bodyRef}
            className="font-light leading-[1.8] tracking-wide text-white/85 max-w-[620px]"
            style={{ fontSize: 'clamp(14px, 1.2vw, 18px)' }}
          >
            From iconic logo design to high-impact LED storefronts and shop banners,
            GraphicX Studio bridges the gap between creative design and physical reality.
          </p>

          <div className="flex flex-row lg:flex-col gap-4 flex-shrink-0">
            {/* Primary CTA */}
            <button
              ref={btn1Ref}
              className="group relative inline-flex items-center gap-3 px-8 py-3.5 bg-[#D6D6D6] text-black text-[10px] font-black uppercase tracking-[0.35em] rounded-full border-none cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(214,214,214,0.4)]"
            >
              {/* shimmer */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
              <span className="relative z-10">Explore Our Work</span>
              <span className="relative z-10 flex items-center justify-center w-5 h-5 rounded-full bg-black/10 flex-shrink-0">↗</span>
            </button>

            {/* Ghost CTA */}
            <button
              ref={btn2Ref}
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-transparent text-white/70 text-[10px] font-black uppercase tracking-[0.35em] rounded-full border border-white/10 cursor-pointer transition-all duration-300 hover:border-white/40 hover:text-white hover:scale-105 hover:bg-white/5"
            >
              Get a Quote
              <span className="opacity-40">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── RIGHT: Stats panel ── */}
      <div
        ref={statsRef}
        className="hidden lg:flex flex-col items-center justify-center mt-80 flex-shrink-0 pl-18  border-l border-white/[0.06] min-h-[220px]"
      >
        {/* Stat 1 */}
        <div className="text-center">
          <div
            className="font-black leading-none text-white"
            style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(44px, 4.5vw, 42px)' }}
          >
            4k+
          </div>
          <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">
            Projects Done
          </div>
        </div>

        <div className="w-10 h-px bg-white/10" />

        {/* Stat 2 */}
        <div className="text-center">
          <div
            className="font-black leading-none text-white"
            style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(44px, 4.5vw, 42px)' }}
          >
            8<span className="text-[#ff4d6d]">yr</span>
          </div>
          <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">
            Experience
          </div>
        </div>

        <div className="w-10 h-px bg-white/10" />

        {/* Stat 3 */}
        <div className="text-center">
          <div
            className="font-black leading-none text-white"
            style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(44px, 4.5vw, 42px)' }}
          >
            100<span className="text-[#7b61ff]">%</span>
          </div>
          <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">
            Satisfaction
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;

