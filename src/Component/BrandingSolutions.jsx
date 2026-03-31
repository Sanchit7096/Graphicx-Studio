import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ACCENTS = ['#2edcc3', '#ff4d6d', '#7b61ff', '#f5a623'];
const solutions = [
    { id: '01', headline: 'Digital\nBrand\nIdentity', sub: 'Foundation of Your Story.', body: 'We design more than just logos — we craft a living visual language. Color palettes that ignite any screen.', bullets: ['Custom Logo Design', 'Style Guides', 'Social Media Kits'], cta: 'View Designs', tag: 'IDENTITY' },
    { id: '02', headline: 'Premium\nPhysical\nSignage', sub: 'Turning Pixels into Physicality.', body: 'The flagship of GraphicX Studio. Custom-fabricated LED lightboards and 3D acrylic lettering that command attention.', bullets: ['LED Light Boards', '3D Acrylic', 'Backlit Signage'], cta: 'See the Glow', tag: 'SIGNATURE', isHero: true },
    { id: '03', headline: 'Large\nFormat\nMedia', sub: 'Bold Street Presence.', body: 'For grand openings and high-traffic promotions. Ultra high-resolution flex and vinyl printing that stays vibrant.', bullets: ['Shop Banners', 'Flex Printing', 'Vinyl Graphics'], cta: 'Get Noticed', tag: 'MEDIA' },
    { id: '04', headline: 'Custom\nFabrication', sub: 'Tailored for Your Business.', body: 'End-to-end solutions from site measurement to final installation, ensuring your physical branding integrates flawlessly.', bullets: ['On-Site Consult', 'Structural Signs', 'Installation'], cta: 'Start a Project', tag: 'CRAFT' },
].map((s, i) => ({ ...s, accent: ACCENTS[i], grad: `radial-gradient(ellipse 70% 60% at ${i % 2 ? '10% 90%' : '90% 10%'}, ${ACCENTS[i]}22 0%, transparent 70%)`, noise: `${ACCENTS[i]}0a` }));

const splitChars = (el) => {
    if (!el) return [];
    const text = el.textContent; el.innerHTML = '';
    return [...text].map(ch => {
        const span = document.createElement('span');
        span.textContent = ch === '\n' ? '\u00A0' : ch;
        span.style.display = 'inline-block';
        span.style.willChange = 'transform, opacity';
        if (ch === '\n') el.appendChild(document.createElement('br'));
        el.appendChild(span); return span;
    });
};

const Ticker = ({ color }) => {
    const ref = useRef(null);
    useEffect(() => { gsap.to(ref.current, { x: '-50%', duration: 25, ease: 'none', repeat: -1 }); }, []);
    return (
        <div className="absolute bottom-0 left-0 w-full overflow-hidden py-4 border-t border-white/10 z-10">
            <div ref={ref} className="flex whitespace-nowrap w-max">
                {Array(8).fill(0).map((_, i) => (
                    <span key={i} className="text-[10px] font-black tracking-[0.5em] uppercase px-4 opacity-30" style={{ color }}>
                        GRAPHICX STUDIO • SPECIALIZED SERVICES • 
                    </span>
                ))}
            </div>
        </div>
    );
};

const GlitchId = ({ text, color }) => (
    <div className="relative select-none pointer-events-none glitch-container" style={{ WebkitTextStroke: `1px ${color}20` }}>
        <span className="relative z-10">{text}</span>
        <span className="glitch-a absolute top-0 left-0" style={{ color: `${color}15` }}>{text}</span>
        <span className="glitch-b absolute top-0 left-0" style={{ color: `${color}15` }}>{text}</span>
    </div>
);

const MagneticCursor = ({ color }) => {
    const dot = useRef(null), ring = useRef(null), pos = useRef({ x: 0, y: 0 }), ringPos = useRef({ x: 0, y: 0 });
    useEffect(() => {
        const move = (e) => { 
            pos.current = { x: e.clientX, y: e.clientY }; 
            gsap.to(dot.current, { x: e.clientX, y: e.clientY, duration: 0.2, ease: 'power2.out' }); 
        };
        const loop = () => {
            ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.1;
            ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.1;
            gsap.set(ring.current, { x: ringPos.current.x, y: ringPos.current.y });
            requestAnimationFrame(loop);
        };
        window.addEventListener('mousemove', move); loop();
        return () => window.removeEventListener('mousemove', move);
    }, []);
    return (
        <>
            <div ref={dot} className="cursor-dot" />
            <div ref={ring} className="cursor-ring" style={{ borderColor: color }} />
        </>
    );
};

const Card = React.forwardRef(({ item }, ref) => {
    const inner = useRef(null), glow = useRef(null);
    const handleMove = (e) => {
        const rect = inner.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15, y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
        gsap.to(inner.current, { rotateY: x, rotateX: y, duration: 0.6, ease: 'power2.out' });
        gsap.to(glow.current, { background: `radial-gradient(500px circle at ${((e.clientX - rect.left) / rect.width) * 100}% ${((e.clientY - rect.top) / rect.height) * 100}%, ${item.accent}18 0%, transparent 60%)`, duration: 0.4 });
    };
    return (
        <article ref={ref} onMouseMove={handleMove} onMouseLeave={() => { gsap.to(inner.current, { rotateX: 0, rotateY: 0, duration: 1.2, ease: 'elastic.out(1, 0.75)' }); gsap.to(glow.current, { background: item.grad, duration: 0.8 }); }} className="card-stage">
            <div ref={inner} className="card-outer">
                <div ref={glow} className="absolute inset-0 z-0 transition-opacity duration-500" style={{ background: item.grad }} />
                <div className="absolute inset-0 z-1 opacity-20" style={{ background: `repeating-linear-gradient(0deg,${item.accent}10 0px,transparent 2px)` }} />
                <div className="relative h-full grid grid-cols-1 md:grid-cols-2 z-10 p-8 md:p-16">
                    <div className="flex flex-col justify-between pr-8">
                        <div className="flex items-center gap-4">
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: item.accent, boxShadow: `0 0 10px ${item.accent}` }} />
                                <span className="font-black text-[10px] tracking-[0.5em] uppercase" style={{ color: item.accent }}>{item.tag}</span>
                            </span>
                            {item.isHero && <span className="hero-tag" style={{ color: item.accent, borderColor: `${item.accent}40`, background: `${item.accent}0a` }}>SIGNATURE</span>}
                        </div>
                        <div className="card-headline my-auto">
                            <h3 className="card-h3">{item.headline}</h3>
                            <div className="mt-6 h-0.5 w-16" style={{ background: `linear-gradient(90deg,${item.accent},transparent)` }} />
                            <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.4em]" style={{ color: `${item.accent}aa` }}>{item.sub}</p>
                        </div>
                        <button className="card-cta" style={{ border: `1.5px solid ${item.accent}30` }} onMouseEnter={e => { Object.assign(e.currentTarget.style, { background: item.accent, color: '#000', borderColor: item.accent }); }} onMouseLeave={e => { Object.assign(e.currentTarget.style, { background: 'transparent', color: '#fff', borderColor: `${item.accent}30` }); }}>
                            {item.cta} <span className="ml-4 opacity-50">↗</span>
                        </button>
                    </div>
                    <div className="hidden md:flex flex-col justify-between pl-8 border-l border-white/5">
                        <GlitchId text={item.id} color={item.accent} />
                        <p className="text-white/40 text-sm md:text-[15px] leading-relaxed font-light">{item.body}</p>
                        <ul className="space-y-4">
                            {item.bullets.map((b, i) => (
                                <li key={i} className="flex items-center gap-4">
                                    <span className="w-5 h-5 rounded border text-[9px] flex items-center justify-center opacity-60" style={{ borderColor: `${item.accent}40`, color: item.accent }}>0{i + 1}</span>
                                    <span className="font-bold uppercase tracking-[0.2em] text-[10px] text-white/60">{b}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 h-[2px] card-progress-line" style={{ background: item.accent, width: 0, zIndex: 20 }} />
                <Ticker color={item.accent} />
            </div>
        </article>
    );
});

const BrandingSolutions = () => {
    const section = useRef(null), title = useRef(null), cards = useRef([]), counter = useRef(null), progress = useRef(null), bg = useRef(null);
    const [active, setActive] = useState(-1);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const headChars = [...title.current.querySelectorAll('.split-head')].flatMap(el => splitChars(el));
            const tl = gsap.timeline({ 
                scrollTrigger: { 
                    trigger: section.current, 
                    start: 'top top', 
                    end: `+=${solutions.length * 200}%`, 
                    pin: true, 
                    scrub: 2, 
                    anticipatePin: 1,
                    onUpdate: (s) => { if(progress.current) progress.current.style.width = `${s.progress * 100}%`; } 
                } 
            });

            tl.from(headChars, { y: '100%', opacity: 0, rotateX: -90, stagger: 0.04, duration: 1.2, ease: 'power4.out' }, 0)
              .from('.title-sub-fade', { x: -30, opacity: 0, duration: 1, ease: 'power3.out' }, 0.4)
              .to(title.current, { x: '-80%', opacity: 0, duration: 1.5, ease: 'power2.inOut' }, 2);

            solutions.forEach((_, i) => {
                const card = cards.current[i], time = 3.5 + i * 4;
                tl.to(card, { x: 0, rotation: 0, opacity: 1, duration: 2, ease: 'expo.out', onStart: () => setActive(i) }, time)
                  .to(counter.current, { innerHTML: `0${i + 1}`, duration: 0.3 }, time + 0.3)
                  .fromTo(card.querySelector('.card-progress-line'), { width: 0 }, { width: '100%', duration: 2.5, ease: 'none' }, time + 0.5)
                  .from(splitChars(card.querySelector('.card-h3')), { y: '40%', opacity: 0, stagger: 0.04, duration: 0.8, ease: 'power3.out' }, time + 0.4)
                  .to(bg.current, { background: solutions[i].noise, duration: 1.5, ease: 'power2.inOut' }, time);

                if (i < solutions.length - 1) {
                    tl.to(card, { x: '-15vw', scale: 0.92, opacity: 0.15, filter: 'blur(12px)', rotationY: -5, duration: 1.8, ease: 'power2.inOut' }, time + 3.2);
                }
            });

            gsap.to('.kinetic-text', { x: '-40%', scrollTrigger: { trigger: section.current, scrub: 3 } });
        }, section);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={section} className="branding-section">
            <style>{`
                .branding-section { background:#080809; height:100vh; width:100%; position:relative; overflow:hidden; display:flex; align-items:center; justify-content:center; font-family:'Space Grotesk',sans-serif; cursor:none; }
                .cursor-dot { position:fixed; top:0; left:0; pointer-events:none; z-index:9999; mix-blend-difference; width:8px; height:8px; border-radius:50%; background:#fff; transform:translate(-50%,-50%); will-change: transform; }
                .cursor-ring { position:fixed; top:0; left:0; pointer-events:none; z-index:9998; width:40px; height:40px; border-radius:50%; border:1.5px solid; transform:translate(-50%,-50%); opacity:0.5; will-change: transform; transition: border-color 0.4s ease; }
                .glitch-container { font-family:'Space Grotesk',monospace; font-size:clamp(100px,15vw,220px); font-weight:900; line-height:1; color:transparent; }
                .glitch-a { animation:glA 4s infinite; clip-path:inset(20% 0 60% 0); }
                .glitch-b { animation:glB 4s infinite; clip-path:inset(60% 0 20% 0); }
                @keyframes glA { 0%,94%,100%{transform:none} 95%{transform:translate(-3px,1px) skewX(1deg)} 97%{transform:translate(2px,-1px)} }
                @keyframes glB { 0%,90%,100%{transform:none} 91%{transform:translate(3px,-2px) skewX(-1deg)} 93%{transform:translate(-1px,1px)} }
                .card-stage { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; pointer-events:auto; will-change:transform; transform:translateX(100vw) rotate(8deg); opacity:0; }
                .card-outer { position:relative; width:100%; max-width:1152px; height:clamp(440px,65vh,640px); border-radius:40px; background:linear-gradient(145deg,#0e0e10,#0a0a0c); border:1px solid rgba(255,255,255,0.05); overflow:hidden; transform-style:preserve-3d; transition: border-color 0.6s ease; }
                .hero-tag { font-size:9px; font-weight:900; letter-spacing:1px; text-transform:uppercase; padding:6px 16px; border-radius:99px; border:1px solid; }
                .card-h3 { font-family:'Barlow Condensed',sans-serif; font-size:clamp(40px,6vw,84px); font-weight:800; line-height:0.9; letter-spacing:-0.02em; text-transform:uppercase; white-space:pre-line; color:#fff; }
                .card-cta { align-self:start; display:flex; align-items:center; border-radius:99px; font-weight:900; text-transform:uppercase; letter-spacing:0.1em; font-size:10px; padding:12px 24px; color:#fff; transition:0.4s cubic-bezier(0.2, 0.8, 0.2, 1); cursor:none; }
                .dot-nav { position:absolute; right:32px; top:50%; transform:translateY(-50%); display:flex; flex-direction:column; gap:16px; z-index:30; }
                .dot { width:4px; height:8px; border-radius:99px; transition:0.8s cubic-bezier(0.2, 1, 0.3, 1); background:rgba(255,255,255,0.08); }
                .dot.active { height:32px; width:6px; background:var(--active-color); box-shadow:0 0 15px var(--active-color); }
                .kinetic-text { font-family:'Barlow Condensed',sans-serif; font-size:clamp(120px,20vw,280px); font-weight:900; text-transform:uppercase; WebkitTextStroke:1px rgba(255,255,255,0.02); color:transparent; position:absolute; top:50%; transform:translateY(-50%); white-space:nowrap; pointer-events: none; }
                .split-head span { display: inline-block; }
            `}</style>
            <MagneticCursor color={active >= 0 ? solutions[active].accent : '#fff'} />
            <div ref={bg} className="absolute inset-0 pointer-events-none transition-colors duration-1000" />
            <div className="kinetic-text">GRAPHICX • STUDIO • SOLUTIONS • DESIGN •</div>
            <div ref={progress} className="absolute top-0 left-0 h-0.5 bg-sky-500 z-50 transition-none" />
            
            <div ref={title} className="absolute z-20 px-8 md:px-16 w-full max-w-4xl left-0 md:left-16">
                <span className="title-sub-fade flex items-center gap-3 mb-4 text-[10px] tracking-[0.5em] uppercase font-black text-cyan-400">
                    <span className="w-8 h-px bg-current" /> PORTFOLIO — 0{solutions.length}
                </span>
                <h2 className="split-head card-h3 !text-[clamp(50px,9vw,110px)]">Specialized</h2>
                <h2 className="split-head card-h3 !text-[clamp(50px,9vw,110px)] !text-transparent !italic" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.25)', marginLeft: '2vw' }}>Solutions</h2>
                <p className="title-sub-fade mt-6 text-xs text-white/20 tracking-widest uppercase">Four verticals — one vision.</p>
            </div>

            <div className="absolute inset-0 flex items-center justify-center z-10 px-6 md:px-16">
                {solutions.map((s, i) => <Card key={i} item={s} ref={el => cards.current[i] = el} />)}
            </div>

            <div className="dot-nav">
                {solutions.map((s, i) => <div key={i} className={`dot ${i === active ? 'active' : ''}`} style={{ '--active-color': s.accent }} />)}
            </div>

            <div className="absolute bottom-12 left-8 md:left-16 z-30 flex items-end gap-3 font-['Barlow_Condensed']">
                <span ref={counter} className="text-5xl md:text-7xl font-black transition-colors duration-500" style={{ color: active >= 0 ? solutions[active].accent : '#fff' }}>00</span>
                <span className="text-2xl md:text-4xl opacity-10 font-bold">/ 0{solutions.length}</span>
            </div>
            <div className="absolute bottom-12 right-12 md:right-16 z-30 flex items-center gap-4 opacity-20 text-[9px] font-black tracking-[0.4em]">
                SCROLL <div className="w-8 h-px bg-white" /> <div className="w-2 h-2 rounded-full border border-white animate-pulse" />
            </div>
        </section>
    );
};

export default BrandingSolutions;
