import CircularGallery from '../Component/CircularGallery'
import img1 from "../assets/Projects/img1.jpeg";
import img2 from "../assets/Projects/img2.jpeg";
import img3 from "../assets/Projects/img3.jpeg";
import img4 from "../assets/Projects/img4.jpeg";
import img5 from "../assets/Projects/img5.jpeg";
import img6 from "../assets/Projects/img6.jpeg";
import img7 from "../assets/Projects/img7.jpeg";
import img8 from "../assets/Projects/img8.jpeg";

const Projects = () => {
  const projectItems = [
    { image: img1, text: 'Hotel Signage' },
    { image: img2, text: 'Hospital branding' },
    { image: img3, text: 'Dance Studio branding' },
    { image: img4, text: 'Clothing Store branding' },
    { image: img5, text: 'Mobile shop branding' },
    { image: img6, text: 'Karate Studio branding' },
    { image: img7, text: 'School branding' },
    { image: img8, text: 'Hospital and clinic branding' }
  ];

  return (
   <section id="projects" className="w-full bg-black py-16 md:py-20" style={{ fontFamily: "'Manrope', sans-serif" }}>
      {/* Header */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-24 mb-12 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="w-12 h-[1px] bg-[#D6D6D6]"></span>
          <span className="text-[#D6D6D6] text-sm font-bold tracking-widest uppercase">Portfolio</span>
          <span className="w-12 h-[1px] bg-[#D6D6D6]"></span>
        </div>
        <h2
          className="text-4xl md:text-4xl font-black text-white uppercase leading-[0.9] tracking-wider mb-6"
          style={{ fontFamily: "'Audiowide', sans-serif" }}
        >
          Our Projects
        </h2>
        <p className="text-white/50 text-base md:text-lg font-light max-w-2xl mx-auto">
          Explore our diverse portfolio of creative projects showcasing innovative design solutions across various industries and mediums.
        </p>
      </div>

      {/* Circular Gallery */}
      <div style={{ height: '600px', position: 'relative', width: '100%', overflow: 'hidden' }}>
        <CircularGallery
          items={projectItems}
          bend={1}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.05}
          // Optionally load a custom font for the labels.
          // Accepts a stylesheet URL (e.g. Google Fonts) or a direct font file.
          fontUrl=""
          font="bold 30px Orbitron"
          scrollSpeed={2}
        />
      </div>
    </section>
  )
}

export default Projects