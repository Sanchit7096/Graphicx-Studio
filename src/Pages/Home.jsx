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
