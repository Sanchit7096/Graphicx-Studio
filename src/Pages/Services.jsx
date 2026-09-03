import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { serviceCategories, getServicesByCategory } from "../data/services";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { optimizeCloudinaryUrl, optimizeCloudinaryVideo, getCloudinaryVideoPoster } from "../utils/cloudinary";

const rawServiceVideo = "https://res.cloudinary.com/fj3hcwbi/video/upload/v1786515602/hvworuglhtogci6pk28z.mp4";
const serviceVideo = optimizeCloudinaryVideo(rawServiceVideo, 1080);
const serviceVideoPoster = getCloudinaryVideoPoster(rawServiceVideo, 960);

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const navigate = useNavigate();
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
      gsap.fromTo(serviceItems,
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

  const handleServiceClick = (serviceSlug) => {
    navigate(`/services/${serviceSlug}`);
  };

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
  };

  return (
    <>
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
            <source
              src={serviceVideo}
              type="video/mp4"
            />
          </video>

          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/85 z-10 flex items-center justify-center">
            <div className="text-center px-6 max-w-4xl z-20 relative">
              <p className="text-zinc-300 text-sm md:text-base uppercase tracking-[0.3em] mb-4 font-poppins">
                Our Expertise
              </p>
              <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 font-poppins leading-tight">
                Services
              </h1>
              <p className="text-zinc-200 text-lg md:text-xl max-w-2xl mx-auto font-manrope">
                GraphicX Studio doesn't just print — we design, manufacture and build brand experiences.
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
                    onClick={() => handleCategoryClick(category.id)}
                    className={`px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-semibold uppercase tracking-[0.2em] transition-all duration-300 font-poppins border rounded-xl ${activeCategory === category.id
                        ? 'bg-white text-black border-white'
                        : 'bg-transparent text-zinc-300 border-white/20 hover:border-white/40 hover:text-white'
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
                    <span className="h-px w-12 bg-white/30" />
                    <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.4em] text-zinc-400 font-poppins">
                      {activeCategoryData.title}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 font-poppins leading-tight">
                    {activeCategoryData.title}
                  </h2>
                  <p className="text-zinc-300 text-base md:text-lg max-w-2xl font-manrope">
                    {activeCategoryData.description}
                  </p>
                </div>

                {/* Uniform Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {categoryServices.map((service, serviceIndex) => (
                    <div
                      key={service.slug}
                      ref={(el) => (serviceRefs.current[serviceIndex] = el)}
                      onClick={() => handleServiceClick(service.slug)}
                      onMouseEnter={() => setHoveredService(service.slug)}
                      onMouseLeave={() => setHoveredService(null)}
                      role="button"
                      tabIndex={0}
                      aria-label={`View service details for ${service.title}`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          handleServiceClick(service.slug);
                        }
                      }}
                      className="relative h-[280px] md:h-[320px] rounded-2xl overflow-hidden cursor-pointer group transition-all duration-500 border border-white/5 hover:border-white/20"
                    >
                      <img
                        src={optimizeCloudinaryUrl(service.image, { width: 600 })}
                        alt={service.title}
                        width="360"
                        height="320"
                        loading="lazy"
                        decoding="async"
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${hoveredService === service.slug ? 'scale-110' : 'scale-100'
                          }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                      <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end">
                        <h3 className="text-white text-lg md:text-xl font-semibold mb-2 font-poppins transition-all duration-300 group-hover:-translate-y-1">
                          {service.title}
                        </h3>
                        <p className="text-zinc-300 text-xs md:text-sm line-clamp-2 font-manrope transition-all duration-300 group-hover:-translate-y-1">
                          {service.shortDesc}
                        </p>
                      </div>
                    </div>
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
