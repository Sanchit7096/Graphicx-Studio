import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function Projects() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        {/* Hero Video */}
        <section className="relative w-full h-80 overflow-hidden">
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

          {/* Optional Overlay */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-white text-5xl font-bold">
              Projects
            </h1>
          </div>
        </section>

        {/* Next Section */}
        <section className="w-full min-h-screen bg-black">
          {/* Projects Content */}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Projects;
