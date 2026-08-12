import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { ArrowRight } from "lucide-react";
import services, { serviceCategories, getServicesByCategory } from "../data/services";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const serviceVideo = "https://res.cloudinary.com/fj3hcwbi/video/upload/v1786515602/hvworuglhtogci6pk28z.mp4";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("signage");
  const [hoveredService, setHoveredService] = useState(null);
  
  const sectionRef = useRef(null);
  const categoryRefs = useRef([]);
  const serviceRefs = useRef([]);

  const categories = Object.values(serviceCategories);
  const activeCategoryData = categories.find(cat => cat.id === activeCategory);
  const categoryServices = getServicesByCategory(activeCategory);

  useEffect(() => {
    // Animate services when category changes
    const serviceItems = serviceRefs.current.filter(Boolean);
    if (serviceItems.length > 0) {
      gsap.fromTo(serviceItems,
        { opacity: 0, y: 40, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
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

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative w-full h-[60vh] overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src={serviceVideo}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80 z-10 flex items-center justify-center">
            <div className="text-center px-6 max-w-4xl z-20 relative">
              <p className="text-white/60 text-sm md:text-base uppercase tracking-[0.3em] mb-4 font-poppins">
                Our Expertise
              </p>
              <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-poppins leading-tight">
                Services
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-manrope">
                GraphicX Studio doesn't just print — we design, manufacture and build brand experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full bg-[#050505] py-20 md:py-32 px-6 md:px-12 lg:px-20">
          <div className="max-w-screen-2xl 2xl:max-w-[1800px] mx-auto">
            {/* Category Selector */}
            <div className="mb-16 md:mb-20">
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryClick(category.id)}
                    className={`px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-semibold uppercase tracking-[0.2em] transition-all duration-300 font-poppins border ${
                      activeCategory === category.id
                        ? 'bg-white text-black border-white'
                        : 'bg-transparent text-white/60 border-white/20 hover:border-white/40 hover:text-white'
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
                    <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.4em] text-white/60 font-poppins">
                      {activeCategoryData.title}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-poppins leading-tight">
                    {activeCategoryData.title}
                  </h2>
                  <p className="text-white/60 text-base md:text-lg max-w-2xl font-manrope">
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
                      className="relative h-[280px] md:h-[320px] overflow-hidden cursor-pointer group transition-all duration-500"
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
                          hoveredService === service.slug ? 'scale-110' : 'scale-100'
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                      
                      <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end">
                        <h3 className="text-white text-lg md:text-xl font-bold mb-2 font-poppins transition-all duration-300 group-hover:-translate-y-1">
                          {service.title}
                        </h3>
                        <p className="text-white/70 text-xs md:text-sm line-clamp-2 font-manrope transition-all duration-300 group-hover:-translate-y-1">
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
