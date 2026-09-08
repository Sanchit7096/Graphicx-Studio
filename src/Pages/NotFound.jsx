import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import DocumentHead from "../components/layout/DocumentHead";
import { Home, Layers, Phone } from "lucide-react";

function NotFound() {
  return (
    <>
      <DocumentHead
        title="404 Page Not Found | GraphicX Studio Surat"
        description="The page you requested could not be found. Explore our custom sign boards, LED signage, and printing services in Surat."
        robots="noindex, follow"
      />

      <Navbar />

      <main className="pt-28 min-h-[85vh] bg-[#050505] flex items-center justify-center font-poppins px-6">
        <div className="text-center max-w-xl mx-auto py-12">
          <div className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-widest mb-6">
            Error 404 • Page Not Found
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-4 tracking-tight">
            Looks Like You Took a Wrong Turn
          </h1>

          <p className="text-zinc-400 text-base sm:text-lg mb-8 font-manrope font-light leading-relaxed">
            The page you are looking for might have been removed, renamed, or is temporarily unavailable. Let's get you back on track to explore our signage solutions in Surat.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Link
              to="/"
              className="px-6 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-black font-semibold text-sm flex items-center gap-2 transition-all shadow-lg shadow-orange-500/20"
            >
              <Home size={16} />
              <span>Back to Home</span>
            </Link>

            <Link
              to="/services"
              className="px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-sm border border-white/10 flex items-center gap-2 transition-all hover:border-white/20"
            >
              <Layers size={16} />
              <span>Explore Services</span>
            </Link>

            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-sm border border-white/10 flex items-center gap-2 transition-all hover:border-white/20"
            >
              <Phone size={16} className="text-orange-400" />
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Quick links to top Surat services */}
          <div className="pt-8 border-t border-white/10 text-xs text-zinc-400">
            <p className="mb-3 font-semibold uppercase tracking-wider text-zinc-500">Popular Signage in Surat:</p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              <Link to="/services/led-sign-board-surat" className="hover:text-orange-400 transition-colors">LED Sign Boards</Link>
              <span className="text-zinc-700">•</span>
              <Link to="/services/acp-sign-board-surat" className="hover:text-orange-400 transition-colors">ACP Elevation</Link>
              <span className="text-zinc-700">•</span>
              <Link to="/services/3d-letter-signage-surat" className="hover:text-orange-400 transition-colors">3D Letter Signs</Link>
              <span className="text-zinc-700">•</span>
              <Link to="/services/flex-banner-printing-surat" className="hover:text-orange-400 transition-colors">Flex Banners</Link>
              <span className="text-zinc-700">•</span>
              <Link to="/services/shop-branding-surat" className="hover:text-orange-400 transition-colors">Shop Branding</Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default NotFound;
