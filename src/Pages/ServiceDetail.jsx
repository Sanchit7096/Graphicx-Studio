import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import services from "../data/services";

function ServiceDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.slug === serviceId);

  if (!service) {
    return (
      <>
        <Navbar />
        <main className="pt-20 min-h-screen bg-black flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-white text-3xl font-bold mb-4 font-poppins">Service Not Found</h1>
            <p className="text-white/60 mb-6">The requested service page does not exist or has been moved.</p>
            <button
              onClick={() => navigate("/services")}
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-colors inline-flex items-center gap-2"
            >
              <ArrowLeft size={18} />
              Back to Services
            </button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="pt-20 bg-black min-h-screen">
        {/* Hero Section */}
        <section className="relative w-full h-96 overflow-hidden">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px]">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <div className="text-center px-6">
              <h1 className="text-white text-5xl md:text-6xl font-bold mb-4 font-poppins">
                {service.title}
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
                {service.shortDesc}
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="w-full bg-black py-16 px-6 md:px-12 lg:px-24">
          <div className="max-w-screen-2xl 2xl:max-w-[1800px] 3xl:max-w-[2200px] mx-auto">
            <button
              onClick={() => navigate("/services")}
              className="flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Services
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-white text-3xl font-bold mb-6 font-poppins">
                  About This Service
                </h2>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  {service.fullDesc}
                </p>

                <h3 className="text-white text-2xl font-bold mb-6 font-poppins">
                  Key Features
                </h3>
                <ul className="space-y-4">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-white/80"
                    >
                      <CheckCircle2 size={18} className="text-orange-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ServiceDetail;
