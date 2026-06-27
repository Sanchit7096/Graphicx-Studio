import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Clean, simple fade-in and slide-up animation for text elements
            gsap.from('.animate-fade', {
                y: 30,
                opacity: 0,
                stagger: 0.15,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="about"
            className="w-full bg-black py-24 md:py-32 px-6 md:px-12 lg:px-24"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
            <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">

                {/* Left Column - Heading & Stats */}
                <div className="lg:w-1/3 flex flex-col justify-start">
                    <div className="animate-fade mb-6 flex items-center gap-4">
                        <span className="w-12 h-[1px] bg-[#2edcc3]"></span>
                        <span className="text-[#2edcc3] text-sm font-bold tracking-widest uppercase">Who We Are</span>
                    </div>

                    <h2
                        className="animate-fade text-5xl md:text-6xl lg:text-7xl font-black text-white mb-12 leading-[0.9] uppercase"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                        GraphicX <br className="hidden lg:block" />
                        Studio
                    </h2>

                    <div className="animate-fade flex flex-col gap-8 mt-auto">
                        <div>
                            <p className="text-6xl font-black text-white mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>8+</p>
                            <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">Years of Experience</p>
                        </div>
                        <div>
                            <p className="text-6xl font-black text-white mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>5.0</p>
                            <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">Client Star Rating</p>
                        </div>
                    </div>
                </div>

                {/* Right Column - Body Text */}
                <div className="lg:w-2/3 flex flex-col justify-center gap-8 text-white/70 text-lg lg:text-xl font-light leading-relaxed">
                    <p className="animate-fade">
                        Welcome to GraphicX Studio, a premier full-service advertising agency based in the heart of Surat, Gujarat. With a passion for visual storytelling and a track record of excellence, we specialize in transforming brands through cutting-edge design, high-impact marketing, and strategic advertising solutions.
                    </p>

                    <p className="animate-fade">
                        For over 8 years, we have been the creative engine behind successful brand identities, eye-catching signage, and high-converting digital assets. We don’t just create designs; we build visual experiences that capture attention, engage audiences, and drive business growth.
                    </p>

                    <p className="animate-fade">
                        Driven by quality and trusted by hundreds of businesses, we take pride in our flawless track record—backed by a proud 5.0-star rating from our incredible clients. Whether you are a local startup looking to make a mark or an established enterprise aiming to scale, GraphicX Studio is your dedicated partner in creative excellence.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default About;
