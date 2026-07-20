import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { ArrowRight } from "lucide-react";
import services from "../data/services";

function Services() {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <>
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative w-full h-96 overflow-hidden">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="https://www.w3schools.com/howto/rain.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <div className="text-center px-6">
              <h1 className="text-white text-5xl md:text-6xl font-bold mb-4 font-poppins">
                Our Services
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
                Premium signage and branding solutions tailored to elevate your business
              </p>
            </div>
          </div>
        </section>

        {/* Bento Grid Section */}
        <section className="w-full min-h-screen bg-black py-16 px-6 md:px-12 lg:px-24">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[200px]">
              {services.map((service) => {
                const sizeClasses = {
                  large: "md:col-span-2 md:row-span-2",
                  medium: "md:col-span-1 md:row-span-1",
                  wide: "md:col-span-2 md:row-span-1",
                };

                return (
                  <div
                    key={service.slug}
                    onClick={() => handleServiceClick(service.slug)}
                    className={`
                      relative rounded-3xl overflow-hidden cursor-pointer
                      group transition-all duration-500 ease-out
                      hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                      ${sizeClasses[service.size]}
                      bg-gray-900/50 backdrop-blur-sm border border-white/10
                    `}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />
                    
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <h3 className="text-white text-xl md:text-2xl font-bold mb-2 font-poppins group-hover:-translate-y-1 transition-transform duration-300">
                        {service.title}
                      </h3>
                      <p className="text-white/70 text-sm mb-4 line-clamp-2 group-hover:-translate-y-1 transition-transform duration-300 delay-75">
                        {service.shortDesc}
                      </p>
                      <button className="flex items-center gap-2 text-white text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                        Explore
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Services;
