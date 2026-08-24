import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { contactInfo } from '../../data/siteContent';

gsap.registerPlugin(ScrollTrigger);

// High quality real completed project image
const projectShowcaseImg = "https://res.cloudinary.com/fj3hcwbi/image/upload/v1787071916/kingsGYm_q3xr0c.jpg";
const googleMapsReviewUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Graphicx Studio, Dream Shoppers, Dindoli, Surat")}`;

const AboutSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.animate-fade', {
                y: 30,
                opacity: 0,
                stagger: 0.12,
                duration: 0.8,
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
            className="w-full bg-black py-16 md:py-24 lg:py-28 px-5 sm:px-6 lg:px-12 font-poppins relative overflow-hidden"
        >
            {/* Subtle Ambient Soft Glows */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-500/5 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="max-w-screen-2xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left Column - Content */}
                    <div className="lg:col-span-7 flex flex-col justify-start">

                        {/* Tagline Badge */}
                        <div className="animate-fade mb-6 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-300 text-xs md:text-sm  tracking-widest uppercase w-fit">
                            <Sparkles className="w-4 h-4 text-amber-400" />
                            <span>DESIGN • MANUFACTURE • INSTALL</span>
                        </div>

                        {/* Heading */}
                        <h2 className="animate-fade text-3xl sm:text-4xl md:text-4xl  text-white mb-6 leading-tight">
                            Looking for a <span className="text-white">Premium Signage Company</span> in Surat?
                        </h2>

                        {/* 2 Short & High-Impact Paragraphs */}
                        <div className="space-y-5 text-white/80 text-base md:text-lg leading-relaxed mb-8">
                            <p className="animate-fade">
                                <strong className="text-white font-semibold">GraphicX Studio</strong> is a premium signage and branding company in Surat, specializing in custom sign boards, LED signage, ACP facades, acrylic letters, 3D signage and complete shop-front branding.
                            </p>
                            <p className="animate-fade">
                                From design and 3D visualization to in-house manufacturing and professional installation, we handle the complete process under one roof.
                            </p>
                        </div>

                        {/* Primary & Secondary CTAs */}
                        <div className="animate-fade flex flex-wrap gap-4 items-center mb-10">
                            <a
                                href={contactInfo.whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-emerald-500/50 text-emerald-400 font-semibold px-6 py-4 rounded-xl text-sm md:text-base transition-all duration-300 transform hover:-translate-y-0.5"
                            >
                                <FontAwesomeIcon icon={faWhatsapp} className="text-lg text-emerald-400" />
                                <span>WhatsApp Us</span>
                            </a>
                        </div>

                        {/* 3 Key Trust Highlights Pill Line */}
                        <div className="animate-fade flex flex-wrap items-center gap-y-3 gap-x-6 pt-6 border-t border-zinc-800/80 text-white/75 text-xs md:text-sm font-medium">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                                <span>6+ Years Experience</span>
                            </div>
                            <span className="hidden sm:inline text-zinc-700">•</span>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                                <span>In-House Manufacturing</span>
                            </div>
                            <span className="hidden sm:inline text-zinc-700">•</span>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                                <span>Professional Installation</span>
                            </div>
                        </div>

                    </div>

                    {/* Right Column - Premium Completed Project Visual Showcase */}
                    <div className="lg:col-span-5 relative animate-fade">
                        {/* Glow halo */}
                        <div className="absolute -inset-1.5 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 rounded-3xl blur-xl opacity-50"></div>

                        {/* Main Visual Frame */}
                        <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl group">
                            <img
                                src={projectShowcaseImg}
                                alt="GraphicX Studio Premium 3D Acrylic & LED Signage Showcase in Surat"
                                className="w-full h-[420px]  sm:h-[480px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                            />

                            {/* Dark gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none"></div>

                            {/* Floating Top Badge: DESIGNED → MANUFACTURED → INSTALLED */}
                            <div className="absolute top-4 left-4 right-4 sm:right-auto bg-black/80 backdrop-blur-md border border-zinc-700 px-4 py-2.5 rounded-xl flex items-center gap-2 text-xs font-semibold tracking-wider text-zinc-200 uppercase shadow-lg">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                                <span>DESIGNED → MANUFACTURED → INSTALLED</span>
                            </div>

                            {/* Floating Bottom Card: Clickable Google Rating Proof */}
                            <a
                                href={googleMapsReviewUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Click to view GraphicX Studio Google Reviews"
                                className="absolute bottom-4 left-4 right-4 bg-zinc-950/90 hover:bg-zinc-900/95 backdrop-blur-md border border-zinc-800 hover:border-amber-500/50 p-4 rounded-xl flex items-center justify-between shadow-xl transition-all duration-300 cursor-pointer group/rating"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                                        <FontAwesomeIcon icon={faGoogle} className="text-amber-400 text-lg" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-1.5 text-orange-500  text-sm font-bold">
                                            <span>⭐ 4.9/5 Google Rating</span>
                                        </div>
                                        <p className="text-white/60 text-xs font-medium group-hover/rating:text-white/90 transition-colors">
                                            50+ Google Reviews
                                        </p>
                                    </div>
                                </div>

                                <span className="text-xs text-orange-500  font-semibold uppercase tracking-wider underline underline-offset-4 group-hover/rating:text-amber-300">
                                    Read Reviews →
                                </span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
