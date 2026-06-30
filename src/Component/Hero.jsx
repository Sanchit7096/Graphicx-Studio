import React from 'react';
import BgVideo from './BgVideo';
import Navbar from './Navbar';
import HeroContent from './HeroContent';

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Navigation (Always on top) */}
      <Navbar />

      {/* Dynamic Background Component */}
      <BgVideo />

      {/* Main Content Overlay */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        <HeroContent />
      </div>
    </section>
  );
};

export default Hero;

