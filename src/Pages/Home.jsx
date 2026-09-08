import DocumentHead from '../components/layout/DocumentHead';
import Hero from '../components/sections/Hero';
import BrandShowcase from '../components/sections/BrandShowcase';
import AboutSection from '../components/sections/AboutSection';
import ServiceSection from '../components/sections/ServiceSection';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import FeatureSection from '../components/sections/FeatureSection';
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection';
import Footer from '../components/layout/Footer';
import FAQSection from '../components/sections/FAQSection';
import { aboutContent } from "../data/siteContent";

function Home() {
  return (
    <div id="top" className="min-h-screen bg-black">
      <DocumentHead
        title="Sign Board Maker & LED Signage Manufacturer in Surat | GraphicX Studio"
        description="GraphicX Studio is Surat's premier signage & branding company. Custom LED sign boards, ACP elevation, 3D letter signs, flex banners & shop branding in Surat, Gujarat."
        canonicalPath="/"
        faqs={aboutContent.faq}
      />
      <Hero />
      <BrandShowcase />
      <AboutSection />
      <ServiceSection />
      <FeaturedProjects />
      <FeatureSection />
      <WhyChooseUsSection />
      <FAQSection faqContent={aboutContent.faq}/>
      <Footer />
    </div>
  );
}

export default Home;
