import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import DocumentHead from "../components/layout/DocumentHead";
import { projects } from "../data/projects";
import { optimizeCloudinaryUrl } from "../utils/cloudinary";

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

  // Show only 8 projects initially, or all if showAll is true
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 8);

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
  ];

  return (
    <>
      <DocumentHead
        title="Signage & Branding Projects Portfolio Surat | GraphicX Studio"
        description="Explore our completed signage and branding projects across Surat: 3D LED letters, ACP elevations, shop fronts, banners, and office branding installations."
        canonicalPath="/projects"
        breadcrumbs={breadcrumbs}
      />

      <Navbar />

      <main className="pt-24 min-h-screen bg-[#0a0a0a]">
        <section className="px-6 md:px-12 lg:px-24 py-16 max-w-screen-2xl 2xl:max-w-[1800px] 3xl:max-w-[2200px] mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h3 className="text-orange-400 font-semibold mb-4 text-sm tracking-wider uppercase font-poppins">
              Our work in Surat
            </h3>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl mb-6 font-poppins leading-tight">
              Projects on the ground, <br className="hidden md:block" /> not just on screen
            </h1>
            <p className="text-zinc-300 max-w-2xl text-lg font-manrope font-light">
              A curated selection of sign boards, ACP facades, banners, and brand identities we've manufactured and installed across Surat and Dindoli.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12" role="group" aria-label="Filter projects by category">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveFilter(category);
                  setShowAll(false);
                }}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 font-poppins ${
                  activeFilter === category
                    ? "border border-orange-500 text-orange-400 bg-orange-500/10 shadow-md shadow-orange-500/20"
                    : "border border-white/20 text-zinc-300 hover:border-white/50 hover:text-white bg-transparent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
            {displayedProjects.map((project) => (
              <div
                key={project.id}
                className="bg-[#151515] rounded-2xl overflow-hidden group cursor-pointer border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 shadow-lg"
              >
                {/* Project Image */}
                <div className="h-64 overflow-hidden relative bg-black/40 p-4 flex items-center justify-center">
                  <img
                    src={optimizeCloudinaryUrl(project.image, { width: 600 })}
                    alt={`${project.title} - GraphicX Studio Surat`}
                    width="400"
                    height="256"
                    loading="lazy"
                    decoding="async"
                    className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <p className="text-orange-400 text-xs font-semibold uppercase tracking-wider mb-2 font-poppins">
                    {project.category}
                  </p>
                  <h3 className="text-white text-xl font-semibold font-poppins mb-2 group-hover:text-orange-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm">
                    {project.location} · {project.year}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          {filteredProjects.length > 8 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-full transition-all duration-300 shadow-lg shadow-orange-500/20 font-poppins text-sm"
              >
                {showAll ? "Show Less" : `View All ${filteredProjects.length} Projects`}
              </button>
            </div>
          )}

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-zinc-400">
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
