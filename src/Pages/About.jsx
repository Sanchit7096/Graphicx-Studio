import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FAQSection from "../components/sections/FAQSection";
import { aboutContent } from "../data/siteContent";

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

  return (
    <>
      <Navbar />

      <main className="pt-20 font-poppins">
        {/* Hero Section */}
        <section className="w-full bg-black py-24 md:py-32 px-6 md:px-12 lg:px-24">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl  text-white mb-8  leading-tight">
              {aboutContent.hero.heading}
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              {aboutContent.hero.subheading}
            </p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="w-full bg-zinc-950 py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl  text-white mb-8 font-poppins leading-tight">
                  {aboutContent.intro.heading}
                </h2>
                <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                  {aboutContent.intro.paragraphs.map((para, index) => (
                    <p key={index}>{para}</p>
                  ))}
                </div>
              </div>
              <div className="bg-zinc-900 rounded-2xl h-96 flex items-center justify-center">
                <img src={aboutContent.intro.image} alt="About Graphicx Studio" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="w-full bg-black py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl  text-white mb-16  text-center leading-tight">
              {aboutContent.whatWeDo.heading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aboutContent.whatWeDo.services.map((service, index) => (
                <div
                  key={index}
                  className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl hover:border-orange-500/50 transition-all duration-300"
                >
                  <div className="text-5xl mb-6">{getServiceIcon(service.icon)}</div>
                  <h3 className="text-white  text-xl mb-3 font-poppins leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-white/60 text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        

        {/* FAQ Section */}
        <FAQSection faqContent={aboutContent.faq} />

        {/* Visit Us Section */}
        <section className="w-full bg-zinc-950 py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="bg-zinc-900 rounded-2xl overflow-hidden">
                <img
                  src={aboutContent.visitUs.image}
                  alt="Graphicx Studio Shop"
                  className="w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8 font-poppins leading-tight">
                  {aboutContent.visitUs.heading}
                </h2>
                <p className="text-white/70 text-lg mb-10 leading-relaxed">
                  {aboutContent.visitUs.description}
                </p>
                <div className="space-y-8 mb-10">
                  <div>
                    <h3 className="text-white font-semibold text-xl mb-3">Address</h3>
                    <p className="text-white/60 text-base">{aboutContent.visitUs.address.line1}</p>
                    <p className="text-white/60 text-base">{aboutContent.visitUs.address.line2}</p>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-xl mb-3">Working Hours</h3>
                    <p className="text-white/60 text-base">{aboutContent.visitUs.hours}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-yellow-400 text-3xl">★</span>
                    <span className="text-white font-semibold text-2xl">{aboutContent.visitUs.rating}</span>
                    <span className="text-white/60 text-base">Customer Rating</span>
                  </div>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(aboutContent.visitUs.address.mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-300"
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
