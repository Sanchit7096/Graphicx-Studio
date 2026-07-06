import Hero from '../Component/Hero';
import About from '../Pages/About';
import BrandShowcase from '../Component/BrandShowcase';
import Service from '../Pages/Service';
import Feature from '../Pages/Feature';
import WhyChooseUs from '../Pages/WhyChooseUs';
import Footer from '../Component/Footer';
import Projects from '../Pages/Projects';

function Home() {
  return (
    <div id="top" className="min-h-screen bg-black">
      <Hero />
      <BrandShowcase />
      <About />
      <Service />
      <Projects />
      <Feature />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}

export default Home;
