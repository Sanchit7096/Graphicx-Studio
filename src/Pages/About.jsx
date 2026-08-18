import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FAQSection from "../components/sections/FAQSection";
import { aboutContent, contactInfo } from "../data/siteContent";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { ArrowRight, Award, Factory, ShieldCheck, Wrench, Sparkles, Layers, Palette, Shield } from "lucide-react";

function About() {
  const getServiceIcon = (iconName) => {
    const icons = {
      storefront: "🏪",
      led: "💡",
      signage: "🪧",
      neon: "✨",
      banner: "🎨",
      print: "🖨️",
    };
    return icons[iconName] || "📌";
  };

  const highlights = [
    { title: "6+ Years Experience", icon: Award, desc: "Proven track record with hundreds of successful local brand transformations." },
    { title: "In-House Manufacturing", icon: Factory, desc: "Complete quality control & fast turnaround times with zero middleman markup." },
    { title: "Premium Materials", icon: ShieldCheck, desc: "Weather-proof ACP panels, fade-resistant UV acrylics & long-life LEDs." },
    { title: "Professional Installation", icon: Wrench, desc: "Expert technicians ensuring flawless on-site fitting & structural safety." },
  ];

  return (
    <>
      <Navbar />

      <main className="pt-20 font-poppins bg-black min-h-screen text-white">
        
        {/* ─── Hero Section ──────────────────────────────────────── */}
        <section className="w-full bg-gradient-to-b from-zinc-950 via-black to-black py-20 md:py-28 px-6 md:px-12 lg:px-24 relative overflow-hidden">
          {/* Background Ambient Lights */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/10 blur-[130px] rounded-full pointer-events-none"></div>

          <div className="max-w-screen-2xl mx-auto text-center relative z-10">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-orange-400 text-sm font-semibold tracking-widest uppercase mb-8 shadow-inner">
              <Sparkles className="w-4 h-4 text-orange-500 animate-pulse" />
              <span>Design • Manufacture • Install</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.15] max-w-5xl mx-auto">
              Looking for a <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">Premium Signage Company</span> in Surat?
            </h1>

            {/* Subtitle / Intro */}
            <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-10 font-light">
              <strong className="text-white font-semibold">GraphicX Studio</strong> is a premium signage and branding company in Surat, specializing in custom sign boards, LED signage, ACP facades, acrylic letters, 3D signage and complete shop-front branding.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white text-base md:text-lg font-semibold px-8 py-4 rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Get a Free Design Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <a
                href={contactInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-400 font-semibold px-8 py-4 rounded-xl text-base md:text-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </section>

        {/* ─── Highlights Grid Section ───────────────────────────── */}
        <section className="w-full bg-black py-12 px-6 md:px-12 lg:px-24 border-y border-zinc-900">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item, index) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-zinc-950 border border-zinc-800/80 p-6 rounded-2xl hover:border-orange-500/40 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-4 group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── Complete Process & Intro Breakdown ─────────────────── */}
        <section className="w-full bg-zinc-950 py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 text-orange-400 text-xs font-semibold tracking-wider uppercase mb-4">
                  End-to-End Solutions
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                  Design • Manufacture • Install
                </h2>
                
                <div className="space-y-6 text-white/75 text-lg leading-relaxed mb-10">
                  <p>
                    From <strong className="text-white font-semibold">design and 3D visualization to in-house manufacturing and professional installation</strong>, we manage the complete signage process under one roof.
                  </p>
                  <p>
                    Whether you're opening a new business, upgrading your existing storefront or giving your brand a complete makeover, we create signage designed to make your business stand out.
                  </p>
                  <p className="text-white/60">
                    GraphicX Studio combines creative artistry with heavy-duty fabrication. No middleman, no outsourced delays — just top-tier signage built to last in Surat's environment.
                  </p>
                </div>

                {/* 3 Step Process List */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 font-bold flex items-center justify-center text-sm shrink-0">1</div>
                    <div>
                      <h4 className="text-white font-semibold text-base">Design & 3D Visualization</h4>
                      <p className="text-white/60 text-sm">Visualize your sign with realistic 3D renderings before manufacturing begins.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 font-bold flex items-center justify-center text-sm shrink-0">2</div>
                    <div>
                      <h4 className="text-white font-semibold text-base">In-House Manufacturing</h4>
                      <p className="text-white/60 text-sm">Precision fabrication using premium acrylics, ACP sheets, and high-lumen LEDs.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 font-bold flex items-center justify-center text-sm shrink-0">3</div>
                    <div>
                      <h4 className="text-white font-semibold text-base">Professional Installation</h4>
                      <p className="text-white/60 text-sm">Safe, durable on-site structural mounting and electrical fitting across Surat.</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Showcase Workshop Image */}
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl opacity-20 blur-xl"></div>
                <div className="relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
                  <img
                    src={aboutContent.intro.image}
                    alt="GraphicX Studio Signboard Manufacturing Workshop"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-6 bg-zinc-900/90 border-t border-zinc-800 flex items-center justify-between">
                    <div>
                      <p className="text-white font-semibold text-base">In-House Manufacturing Unit</p>
                      <p className="text-white/50 text-xs">Dream Shoppers, Dindoli, Surat</p>
                    </div>
                    <span className="text-orange-400 font-bold text-sm bg-orange-500/10 px-3 py-1.5 rounded-lg border border-orange-500/20">
                      6+ Years
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── What We Do Section ────────────────────────────────── */}
        <section className="w-full bg-black py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {aboutContent.whatWeDo.heading}
              </h2>
              <p className="text-white/60 text-lg">
                {aboutContent.whatWeDo.subheading}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aboutContent.whatWeDo.services.map((service, index) => (
                <div
                  key={index}
                  className="bg-zinc-950 border border-zinc-800 p-8 rounded-2xl hover:border-orange-500/50 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{getServiceIcon(service.icon)}</div>
                    <h3 className="text-white font-bold text-xl mb-3 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-white/60 text-base leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-orange-400 text-sm font-semibold hover:text-orange-300 transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Call to Action Bar ───────────────────────────────── */}
        <section className="w-full bg-gradient-to-r from-zinc-950 via-orange-950/30 to-zinc-950 py-16 px-6 md:px-12 border-y border-zinc-800">
          <div className="max-w-screen-xl mx-auto text-center">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Ready to Upgrade Your Storefront & Brand Identity?
            </h3>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Get a free design consultation and quote from Surat's trusted premium signage experts.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-orange-500/25 transition-all"
              >
                <span>Get a Free Design Consultation →</span>
              </Link>
              <a
                href={contactInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-400 font-semibold px-8 py-4 rounded-xl transition-all"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </section>

        {/* ─── FAQ Section ───────────────────────────────────────── */}
        <FAQSection faqContent={aboutContent.faq} />

        {/* ─── Visit Us Section ─────────────────────────────────── */}
        <section className="w-full bg-zinc-950 py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">
                <img
                  src={aboutContent.visitUs.image}
                  alt="GraphicX Studio Workshop Dindoli Surat"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div>
                <span className="text-orange-400 font-semibold text-xs uppercase tracking-widest block mb-2">Our Location</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  {aboutContent.visitUs.heading}
                </h2>
                <p className="text-white/70 text-lg mb-8 leading-relaxed">
                  {aboutContent.visitUs.description}
                </p>
                <div className="space-y-6 mb-10">
                  <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                    <h3 className="text-white font-semibold text-lg mb-1">Address</h3>
                    <p className="text-white/60 text-base">{aboutContent.visitUs.address.line1}</p>
                    <p className="text-white/60 text-base">{aboutContent.visitUs.address.line2}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                    <h3 className="text-white font-semibold text-lg mb-1">Working Hours</h3>
                    <p className="text-white/60 text-base">{aboutContent.visitUs.hours}</p>
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(aboutContent.visitUs.address.mapQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-amber-500/50 transition-all cursor-pointer group"
                  >
                    <span className="text-amber-400 text-3xl">★</span>
                    <div>
                      <span className="text-white font-bold text-xl block leading-tight">4.9 / 5.0 Google Rating</span>
                      <span className="text-amber-400 text-xs font-semibold group-hover:underline">50+ Google Reviews →</span>
                    </div>
                  </a>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(aboutContent.visitUs.address.mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-4 rounded-xl transition-all duration-300"
                >
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default About;
