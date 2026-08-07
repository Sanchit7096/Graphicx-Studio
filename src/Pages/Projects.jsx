import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Dynamically load all images from the specific folders
const imageModules = import.meta.glob('../assets/All Works/*/*.{jfif,jpg,jpeg,png,webp}', { eager: true, import: 'default' });

const projects = Object.entries(imageModules).map(([path, url], index) => {
  const parts = path.split('/');
  const categoryFolder = parts[parts.length - 2];
  
  // Clean up folder names into nice categories
  let categoryName = categoryFolder.replace(/([A-Z])/g, ' $1').trim();
  
  // Specific mappings for known folders
  if (categoryFolder === 'Acylic') categoryName = 'Acrylic Signage';
  if (categoryFolder === 'BackLightLogo') categoryName = 'Backlight Logo';
  if (categoryFolder === 'backlitBoard') categoryName = 'Backlit Board';
  if (categoryFolder === 'BANNER') categoryName = 'Banners';
  if (categoryFolder === 'ExivisionWork') categoryName = 'Exhibition Work';
  if (categoryFolder === 'LedBoard') categoryName = 'LED Board';
  if (categoryFolder === 'LOLIPOP') categoryName = 'Lollipop Signage';
  if (categoryFolder === 'StandiBoard') categoryName = 'Standee Board';
  if (categoryFolder === 'Vinyl') categoryName = 'Vinyl Printing';

  return {
    id: `project-${index}`,
    title: `${categoryName} Project`,
    category: categoryName,
    location: "Surat",
    year: "2024",
    image: url,
  };
});

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All work");
  const [showAll, setShowAll] = useState(false);

  // Get unique categories from projects data
  const categories = ["All work", ...new Set(projects.map((p) => p.category))];

  // Filter projects based on active category
  const filteredProjects =
    activeFilter === "All work"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  // Show only 5 projects initially, or all if showAll is true
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 5);

  return (
    <>
      <Navbar />

      <main className="pt-24 min-h-screen bg-[#0a0a0a]">
        <section className="px-6 md:px-12 lg:px-24 py-16 max-w-screen-2xl 2xl:max-w-[1800px] 3xl:max-w-[2200px] mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h3 className="text-orange-500 font-semibold mb-4 text-sm tracking-wider uppercase">
              Our work
            </h3>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl  mb-6 font-poppins leading-tight">
              Projects on the ground, <br className="hidden md:block" /> not just on screen
            </h1>
            <p className="text-white/60 max-w-2xl text-lg">
              A selection of sign boards, ACP facades, banners, and brand
              identities we've delivered across Surat and Dindoli.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveFilter(category);
                  setShowAll(false);
                }}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? "border border-orange-500 text-orange-500 bg-orange-500/10"
                    : "border border-white/20 text-white/70 hover:border-white/50 hover:text-white bg-transparent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-6">
            {displayedProjects.map((project, i) => (
              <div
                key={project.id}
                className="bg-[#151515] rounded-2xl overflow-hidden group cursor-pointer border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-1"
              >
                {/* Project Image */}
                <div className="h-64 overflow-hidden relative bg-black/40 p-4 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <p className="text-orange-500 text-xs font-bold uppercase tracking-wider mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-white text-xl font-bold font-poppins mb-2">
                    {project.title} {i + 1}
                  </h3>
                  <p className="text-white/50 text-sm">
                    {project.location} · {project.year}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          {filteredProjects.length > 5 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-colors duration-300"
              >
                {showAll ? "Show Less" : `View All ${filteredProjects.length} Projects`}
              </button>
            </div>
          )}
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-white/50">
              No projects found in this category.
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Projects;
