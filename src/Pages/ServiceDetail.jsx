import React, { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import DocumentHead from "../components/layout/DocumentHead";
import { getServiceSchema } from "../utils/seoSchemas";
import {
  ArrowLeft,
  CheckCircle2,
  MapPin,
  Phone,
  Clock,
  Shield,
  Layers,
  Sparkles,
  ChevronDown,
  ArrowRight,
  Maximize2
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import services, { getServiceBySlug } from "../data/services";
import { getProjectsByServiceSlug } from "../data/projects";
import { contactInfo } from "../data/siteContent";
import { optimizeCloudinaryUrl } from "../utils/cloudinary";

function ServiceDetail() {
  const { serviceId } = useParams();
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [activeImageModal, setActiveImageModal] = useState(null);

  // Look up by primary slug or alias
  const service = useMemo(() => getServiceBySlug(serviceId), [serviceId]);

  // Projects gallery matching this service
  const serviceProjects = useMemo(() => {
    if (!service) return [];
    return getProjectsByServiceSlug(service.slug);
  }, [service]);

  // Related services
  const relatedServices = useMemo(() => {
    if (!service || !service.relatedSlugs) {
      return services.filter((s) => s.slug !== (service?.slug)).slice(0, 3);
    }
    return service.relatedSlugs
      .map((slug) => getServiceBySlug(slug))
      .filter(Boolean)
      .slice(0, 3);
  }, [service]);

  if (!service) {
    return (
      <>
        <DocumentHead
          title="Service Not Found | GraphicX Studio Surat"
          description="The requested signage or branding service was not found. Browse all signage and printing services by GraphicX Studio Surat."
          robots="noindex, follow"
        />
        <Navbar />
        <main className="pt-24 min-h-[80vh] bg-[#050505] flex items-center justify-center font-poppins">
          <div className="text-center px-6 max-w-lg">
            <span className="text-orange-500 text-6xl font-bold block mb-4">404</span>
            <h1 className="text-white text-3xl font-semibold mb-3">Service Not Found</h1>
            <p className="text-zinc-400 mb-8 font-manrope">
              The service page you are looking for has been moved or updated. Explore our full range of signage and branding solutions in Surat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="px-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-xl transition-all inline-flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20"
              >
                <ArrowLeft size={18} />
                <span>All Services</span>
              </Link>
              <Link
                to="/"
                className="px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-white font-medium rounded-xl border border-white/10 transition-all inline-flex items-center justify-center"
              >
                Return Home
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title, path: `/services/${service.slug}` },
  ];

  const optimizedHeroImg = optimizeCloudinaryUrl(service.image, { width: 1200 });

  return (
    <>
      <DocumentHead
        title={service.seoTitle || `${service.title} in Surat | GraphicX Studio`}
        description={service.metaDescription || service.shortDesc}
        canonicalPath={`/services/${service.slug}`}
        ogImage={service.image}
        schema={getServiceSchema(service)}
        faqs={service.faqs || []}
        breadcrumbs={breadcrumbs}
      />

      <Navbar />

      <main className="pt-24 bg-[#050505] text-white font-manrope min-h-screen">
        {/* ─── Breadcrumbs & Navigation Bar ──────────────────────── */}
        <div className="max-w-screen-2xl 2xl:max-w-[1800px] 3xl:max-w-[2200px] mx-auto px-6 md:px-12 lg:px-20 pt-4 pb-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs md:text-sm text-zinc-400 font-poppins">
            <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <span className="text-zinc-600">/</span>
            <Link to="/services" className="hover:text-orange-400 transition-colors">Services</Link>
            <span className="text-zinc-600">/</span>
            <span className="text-orange-400 font-medium truncate max-w-[200px] sm:max-w-none">{service.title}</span>
          </nav>
        </div>

        {/* ─── Service Hero Section ─────────────────────────────── */}
        <section className="relative px-6 md:px-12 lg:px-20 pb-16">
          <div className="max-w-screen-2xl 2xl:max-w-[1800px] 3xl:max-w-[2200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left: Text & CTAs */}
            <div className="lg:col-span-7">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mb-5 font-poppins">
                <span className="px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-wider">
                  {service.category?.toUpperCase() || "SIGNAGE"}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-300 text-xs font-medium">
                  <MapPin size={12} className="text-orange-400" />
                  Surat & Dindoli, Gujarat
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-300 text-xs font-medium">
                  <Sparkles size={12} className="text-amber-400" />
                  In-House Manufacturing
                </span>
              </div>

              {/* Main H1 Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 font-poppins leading-[1.15]">
                {service.h1Title || service.title}
              </h1>

              {/* Short Subhead */}
              <p className="text-zinc-200 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-2xl font-light">
                {service.shortDesc}
              </p>

              {/* High Conversion CTA Group */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <a
                  href={`https://wa.me/918707862783?text=${encodeURIComponent(
                    `Hi GraphicX Studio! I am interested in getting a quote for ${service.title} in Surat.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-black font-semibold font-poppins text-sm md:text-base flex items-center gap-2.5 transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="text-lg text-black" />
                  <span>Get Quote on WhatsApp</span>
                </a>

                <a
                  href={`tel:${contactInfo.phone}`}
                  className="px-6 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-medium font-poppins text-sm md:text-base border border-white/15 flex items-center gap-2.5 transition-all duration-300 hover:border-white/30 hover:-translate-y-0.5"
                >
                  <Phone size={16} className="text-orange-400" />
                  <span>Call {contactInfo.phoneDisplay}</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10 max-w-xl text-center">
                <div className="flex flex-col items-center">
                  <Clock size={18} className="text-orange-400 mb-1" />
                  <span className="text-xs text-zinc-400 font-poppins">3-6 Days</span>
                  <span className="text-[11px] text-zinc-500">Fast Turnaround</span>
                </div>
                <div className="flex flex-col items-center">
                  <Shield size={18} className="text-orange-400 mb-1" />
                  <span className="text-xs text-zinc-400 font-poppins">Up to 3 Yrs</span>
                  <span className="text-[11px] text-zinc-500">Material Warranty</span>
                </div>
                <div className="flex flex-col items-center">
                  <Layers size={18} className="text-orange-400 mb-1" />
                  <span className="text-xs text-zinc-400 font-poppins">100% In-House</span>
                  <span className="text-[11px] text-zinc-500">Zero Middlemen</span>
                </div>
              </div>
            </div>

            {/* Right: Featured Visual Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-zinc-900/60 shadow-2xl group">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={optimizedHeroImg}
                    alt={service.h1Title || service.title}
                    width="800"
                    height="600"
                    fetchPriority="high"
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10">
                  <p className="text-xs text-zinc-400 uppercase tracking-widest font-poppins">Manufacturing & Installation</p>
                  <p className="text-sm font-semibold text-white font-poppins mt-0.5">Executed by GraphicX Studio Surat</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ─── Detailed Technical Overview ───────────────────────── */}
        <section className="w-full bg-[#080808] py-16 md:py-24 px-6 md:px-12 lg:px-20 border-t border-b border-white/5">
          <div className="max-w-screen-2xl 2xl:max-w-[1800px] 3xl:max-w-[2200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Left: Long Description & Materials */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-orange-500" />
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-400 font-poppins">
                  Engineering & Craftsmanship
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-6 font-poppins leading-snug">
                Complete {service.title} Solutions in Surat
              </h2>

              <div className="text-zinc-300 text-base md:text-lg leading-relaxed space-y-5 font-light">
                {service.fullDesc.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Materials Used Block */}
              {service.materialsUsed && service.materialsUsed.length > 0 && (
                <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10">
                  <h3 className="text-lg font-semibold text-white font-poppins mb-4 flex items-center gap-2">
                    <Layers size={18} className="text-orange-400" />
                    Premium Grade Materials Used
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.materialsUsed.map((mat, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-sm text-zinc-300">
                        <CheckCircle2 size={16} className="text-orange-400 shrink-0 mt-0.5" />
                        <span>{mat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Local Surat Area Coverage */}
              {service.suratCoverage && (
                <div className="mt-8 p-5 rounded-2xl bg-zinc-900/60 border border-white/5 flex items-start gap-3">
                  <MapPin size={20} className="text-orange-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-semibold text-white font-poppins">Surat Local Service & Installation Area:</h4>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-1 leading-relaxed">
                      {service.suratCoverage}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Key Features & Technical Specifications */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {/* Features Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/80 border border-white/10 shadow-xl">
                <h3 className="text-xl font-semibold text-white font-poppins mb-6 flex items-center gap-2.5">
                  <Sparkles size={20} className="text-orange-400" />
                  Key Highlights & Advantages
                </h3>
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-zinc-200 text-sm sm:text-base">
                      <div className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                        ✓
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Specifications Table */}
              {service.specifications && service.specifications.length > 0 && (
                <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/80 border border-white/10 shadow-xl">
                  <h3 className="text-xl font-semibold text-white font-poppins mb-6">
                    Technical Specifications
                  </h3>
                  <div className="divide-y divide-white/10">
                    {service.specifications.map((spec, i) => (
                      <div key={i} className="py-3 flex flex-col sm:flex-row sm:justify-between gap-1 text-sm">
                        <span className="text-zinc-400 font-medium font-poppins">{spec.label}</span>
                        <span className="text-white text-right font-light sm:max-w-[60%]">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>
        </section>

        {/* ─── Real Installation Work Gallery (From Surat Projects) ─── */}
        <section className="w-full bg-[#050505] py-16 md:py-24 px-6 md:px-12 lg:px-20">
          <div className="max-w-screen-2xl 2xl:max-w-[1800px] 3xl:max-w-[2200px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="h-px w-8 bg-orange-500" />
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-400 font-poppins">
                    Real Proof of Work
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white font-poppins">
                  Recent {service.title} Installations in Surat
                </h2>
                <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl font-light">
                  Browse real on-site installations manufactured and mounted by our technician crew across commercial hubs in Surat.
                </p>
              </div>

              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-sm font-semibold font-poppins text-orange-400 hover:text-orange-300 transition-colors shrink-0"
              >
                <span>View All 100+ Projects</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {serviceProjects.slice(0, 8).map((proj) => (
                <div
                  key={proj.id}
                  onClick={() => setActiveImageModal(proj)}
                  className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 aspect-[4/3] cursor-pointer hover:border-orange-500/50 transition-all duration-300 shadow-lg hover:-translate-y-1"
                >
                  <img
                    src={optimizeCloudinaryUrl(proj.image, { width: 600 })}
                    alt={`${proj.title} - ${service.title} in Surat`}
                    width="400"
                    height="300"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  <div className="absolute inset-0 p-5 flex flex-col justify-end">
                    <div className="flex items-center justify-between text-xs text-orange-400 mb-1 font-poppins">
                      <span>{proj.location || "Surat"}</span>
                      <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 size={12} />
                      </span>
                    </div>
                    <h3 className="text-sm md:text-base font-semibold text-white font-poppins truncate">
                      {proj.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Frequently Asked Questions Accordion ─────────────── */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="w-full bg-[#080808] py-16 md:py-24 px-6 md:px-12 lg:px-20 border-t border-white/5">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-widest mb-4">
                  Everything You Need to Know
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white font-poppins">
                  Frequently Asked Questions
                </h2>
                <p className="text-zinc-400 text-sm md:text-base mt-2 font-light">
                  Common questions regarding {service.title} pricing, materials, permits, and installation in Surat.
                </p>
              </div>

              <div className="space-y-4">
                {service.faqs.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div
                      key={index}
                      className="rounded-2xl border border-white/10 bg-zinc-900/60 overflow-hidden transition-all duration-200"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                        aria-expanded={isOpen}
                        className="w-full p-6 text-left flex items-center justify-between gap-4 font-poppins font-medium text-white hover:text-orange-400 transition-colors"
                      >
                        <span className="text-base sm:text-lg">{faq.question}</span>
                        <ChevronDown
                          size={20}
                          className={`text-orange-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                            }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6 pt-1 text-zinc-300 text-sm sm:text-base leading-relaxed font-light border-t border-white/5">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ─── Related Services Section ──────────────────────────── */}
        {relatedServices.length > 0 && (
          <section className="w-full bg-[#050505] py-16 md:py-24 px-6 md:px-12 lg:px-20 border-t border-white/5">
            <div className="max-w-screen-2xl 2xl:max-w-[1800px] 3xl:max-w-[2200px] mx-auto">
              <div className="mb-10">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-400 font-poppins block mb-2">
                  Complete Storefront Branding
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-white font-poppins">
                  Explore Complementary Signage in Surat
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedServices.map((rel) => (
                  <Link
                    key={rel.slug}
                    to={`/services/${rel.slug}`}
                    className="group rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/80 p-6 flex flex-col justify-between hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                  >
                    <div>
                      <span className="text-xs text-orange-400 font-poppins uppercase tracking-wider font-semibold">
                        {rel.category || "Signage"}
                      </span>
                      <h3 className="text-xl font-semibold text-white font-poppins mt-2 mb-3 group-hover:text-orange-400 transition-colors">
                        {rel.title}
                      </h3>
                      <p className="text-zinc-400 text-sm line-clamp-2 font-light">
                        {rel.shortDesc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-zinc-300 group-hover:text-orange-400 transition-colors font-poppins">
                      <span>View Specifications</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ─── Bottom High-Converting Action Banner ──────────────── */}
        <section className="w-full bg-[#0a0a0a] py-20 px-6 md:px-12 lg:px-20 text-white border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-zinc-300 text-xs font-normal uppercase tracking-widest mb-5 font-poppins">
              Free Site Visit in Surat
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-poppins mb-4 tracking-tight text-white">
              Ready to Upgrade Your Signage in Surat?
            </h2>
            <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-normal font-manrope">
              Get free laser site measurements, custom 3D architectural mockups, and transparent pricing directly from Surat's trusted manufacturer.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`https://wa.me/918707862783?text=${encodeURIComponent(
                  `Hi GraphicX Studio! I would like to schedule a site measurement for ${service.title} in Surat.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl text-black font-semibold font-poppins text-sm sm:text-base flex items-center gap-2.5 transition-all shadow-xl hover:-translate-y-0.5"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="text-lg text-emerald-600" />
                <span>Chat with Signage Engineer</span>
              </a>

              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-medium font-poppins text-sm sm:text-base border border-white/15 transition-all shadow-lg hover:-translate-y-0.5"
              >
                Send Message / Request Callback
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ─── Lightbox Modal for Gallery Images ─── */}
      {activeImageModal && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveImageModal(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-zinc-900 border border-white/15 rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImageModal.image}
              alt={activeImageModal.title}
              className="w-full max-h-[75vh] object-contain bg-black"
            />
            <div className="p-6 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white font-poppins">{activeImageModal.title}</h3>
                <p className="text-xs text-zinc-400 mt-0.5">{activeImageModal.location} • Manufactured by GraphicX Studio</p>
              </div>
              <button
                onClick={() => setActiveImageModal(null)}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm text-white font-poppins transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default ServiceDetail;
