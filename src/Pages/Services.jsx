import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import DocumentHead from "../components/layout/DocumentHead";
import { serviceCategories, getServicesByCategory } from "../data/services";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { optimizeCloudinaryUrl, optimizeCloudinaryVideo, getCloudinaryVideoPoster } from "../utils/cloudinary";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";

const rawServiceVideo = "https://res.cloudinary.com/fj3hcwbi/video/upload/v1786515602/hvworuglhtogci6pk28z.mp4";
const serviceVideo = optimizeCloudinaryVideo(rawServiceVideo, 1080);
const serviceVideoPoster = getCloudinaryVideoPoster(rawServiceVideo, 960);

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const [activeCategory, setActiveCategory] = useState("signage");
  const [hoveredService, setHoveredService] = useState(null);

  const serviceRefs = useRef([]);

  const categories = Object.values(serviceCategories);
  const activeCategoryData = categories.find((cat) => cat.id === activeCategory);
  const categoryServices = getServicesByCategory(activeCategory);

  useEffect(() => {
    // Animate services when category changes
    const serviceItems = serviceRefs.current.filter(Boolean);
    if (serviceItems.length > 0) {
      gsap.fromTo(
        serviceItems,
        { opacity: 0, y: 30, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.06,
          ease: "power2.out",
        }
      );
    }
  }, [activeCategory]);

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ];

  return (
    <>
      <DocumentHead
        title="Signage & Printing Services in Surat | GraphicX Studio"
        description="Comprehensive signage, printing & branding services in Surat. LED sign boards, ACP elevation, 3D letters, flex banner printing, shop branding & vehicle wraps."
        canonicalPath="/services"
        breadcrumbs={breadcrumbs}
      />

      <Navbar />

      <main className="pt-20 bg-black min-h-screen">
        {/* Hero Section */}
        <section className="relative w-full h-[55vh] sm:h-[60vh] overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={serviceVideoPoster}
            aria-hidden="true"
          >
            <source src={serviceVideo} type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90 z-10 flex items-center justify-center">
            <div className="text-center px-6 max-w-4xl z-20 relative">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs uppercase tracking-widest mb-4 font-poppins font-medium">
                <MapPin size={12} />
                <span>Surat, Gujarat • In-House Fabrication</span>
              </div>
              <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 font-poppins leading-tight">
                Signage & Branding Services
              </h1>
              <p className="text-zinc-200 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-manrope font-light">
                GraphicX Studio doesn't just print — we engineer, manufacture, and install turnkey architectural signboards and brand experiences across Surat.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full bg-[#050505] py-16 md:py-24 px-6 md:px-12 lg:px-20">
          <div className="max-w-screen-2xl 2xl:max-w-[1800px] mx-auto">
            {/* Category Selector */}
            <div className="mb-16 md:mb-20">
              <div className="flex flex-wrap justify-center gap-3 md:gap-4" role="tablist" aria-label="Service categories">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    role="tab"
                    aria-selected={activeCategory === category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-6 py-3 md:px-8 md:py-4 text-xs md:text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-300 font-poppins border rounded-xl ${
                      activeCategory === category.id
                        ? "bg-orange-500 text-black border-orange-500 shadow-lg shadow-orange-500/20 font-bold"
                        : "bg-zinc-900/60 text-zinc-300 border-white/10 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {category.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Category Content */}
            {activeCategoryData && (
              <div>
                {/* Category Header */}
                <div className="mb-12 md:mb-16">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="h-px w-12 bg-orange-500" />
                    <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.4em] text-orange-400 font-poppins">
                      {activeCategoryData.title}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4 font-poppins leading-tight">
                    {activeCategoryData.title}
                  </h2>
                  <p className="text-zinc-300 text-base md:text-lg max-w-2xl font-manrope font-light">
                    {activeCategoryData.description}
                  </p>
                </div>

                {/* Uniform Grid Layout with Crawlable Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {categoryServices.map((service, serviceIndex) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      ref={(el) => (serviceRefs.current[serviceIndex] = el)}
                      onMouseEnter={() => setHoveredService(service.slug)}
                      onMouseLeave={() => setHoveredService(null)}
                      aria-label={`View full details for ${service.title}`}
                      className="group relative h-[320px] md:h-[360px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 border border-white/10 hover:border-orange-500/50 flex flex-col justify-end bg-zinc-900 shadow-xl hover:-translate-y-1.5"
                    >
                      <img
                        src={optimizeCloudinaryUrl(service.image, { width: 600 })}
                        alt={service.title}
                        width="360"
                        height="360"
                        loading="lazy"
                        decoding="async"
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
                          hoveredService === service.slug ? "scale-110" : "scale-100"
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                      <div className="relative z-10 p-6 flex flex-col justify-end">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[11px] font-semibold text-orange-400 font-poppins uppercase tracking-wider">
                            Surat Made
                          </span>
                          <span className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                            <ArrowRight size={13} className="text-orange-400 group-hover:translate-x-0.5 transition-transform" />
                          </span>
                        </div>
                        <h3 className="text-white text-lg md:text-xl font-semibold mb-2 font-poppins transition-all duration-300 group-hover:text-orange-300">
                          {service.title}
                        </h3>
                        <p className="text-zinc-300 text-xs md:text-sm line-clamp-2 font-manrope font-light transition-all duration-300">
                          {service.shortDesc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Services;
