import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { aboutContent } from '../../data/siteContent';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
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
            className="w-full bg-black  min-h-[75vh] py-16 md:py-20 lg:py-24 px-5 sm:px-6 lg:px-8 xl:px-10 font-manrope"
        >
            <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">

                {/* Left Column - Heading & Stats */}
                <div className="lg:w-1/3 flex flex-col justify-start">
                    <div className="animate-fade mb-6 flex items-center gap-4">
                        <span className="w-12 h-[1px] bg-[#D6D6D6]"></span>
                        <span className="text-[#D6D6D6] text-sm font-bold tracking-widest uppercase">{aboutContent.tagline}</span>
                    </div>

                    <h2
                        className="animate-fade font-semibold text-4xl md:text-4xl lg:text-5xl  text-white mb-12 leading-[1.1] tracking-wider uppercase font-poppins"
                    >
                        GraphicX <br className="hidden lg:block" />
                        Studio
                    </h2>

                    <div className="animate-fade flex flex-col gap-8 mt-auto">
                        {aboutContent.stats.map((stat, index) => (
                            <div key={index}>
                                <p className="text-5xl font-semibold text-white mb-1 font-poppins">{stat.value}</p>
                                <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column - Body Text */}
                <div className="lg:w-2/3 flex flex-col justify-center gap-6 text-white/70 text-lg lg:text-xl font-light leading-relaxed">
                    {aboutContent.paragraphs.map((para, index) => (
                        <p key={index} className="animate-fade">
                            {para}
                        </p>
                    ))}

                    <Link
                        to="/about"
                        className="animate-fade inline-flex items-center gap-2 text-white/80 text-sm font-semibold uppercase tracking-widest hover:text-white transition-colors duration-300 mt-4"
                    >
                        Learn more →
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;
