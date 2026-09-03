import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { optimizeCloudinaryUrl } from "../../utils/cloudinary";

const rawLogoImg = "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515589/s9lcorpviydi4q5wk34e.png";
const logoImg = optimizeCloudinaryUrl(rawLogoImg, { width: 300 });

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50" aria-label="Main Navigation">
      {/* Navbar background layer */}
      <div
        className={`absolute inset-0 transition-all duration-500 pointer-events-none ${
          isScrolled ? "bg-black/70 backdrop-blur-xl" : "bg-transparent"
        }`}
      />

      <div
        className={`relative z-10 max-w-screen-2xl 2xl:max-w-[1800px] 3xl:max-w-[2200px] mx-auto px-6 lg:px-12 2xl:px-16 flex items-center justify-between text-white transition-all duration-500 ${
          isScrolled ? "py-4" : "py-6"
        }`}
      >
        <Link to="/" aria-label="GraphicX Studio Home">
          <img
            src={logoImg}
            className="h-10 sm:h-12 w-auto object-contain"
            alt="GraphicX Studio Logo"
            width="150"
            height="48"
            fetchPriority="high"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8 relative font-medium">
          <Link to="/services" className="hover:text-orange-400 transition-colors">
            Products & Services
          </Link>
          <Link to="/projects" className="hover:text-orange-400 transition-colors">
            Work
          </Link>
          <Link to="/about" className="hover:text-orange-400 transition-colors">
            About
          </Link>
          <Link to="/contact" className="hover:text-orange-400 transition-colors">
            Contact
          </Link>

          <a
            href="https://wa.me/918707862783?text=Hi%20GraphicX%20Studio!%20I'm%20interested%20in%20getting%20a%20quote."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get Free Quote on WhatsApp"
            className="bg-orange-500 px-6 py-3 rounded-full hover:bg-orange-600 transition-colors flex items-center gap-2 font-semibold text-black"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
            <span>Get Free Quote</span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-3xl w-11 h-11 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={isMenuOpen}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-[9999] bg-black/60 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMobileMenu}
        aria-hidden={!isMenuOpen}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className={`fixed top-0 right-0 h-full w-full max-w-sm bg-black text-white shadow-2xl transition-transform duration-300 flex flex-col z-[10000] overflow-visible ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-800 bg-black relative z-[102]">
            <Link to="/" onClick={closeMobileMenu} aria-label="GraphicX Studio Home">
              <img
                src={logoImg}
                className="h-9 w-auto object-contain"
                alt="GraphicX Studio Logo"
                width="112"
                height="36"
              />
            </Link>
            <button
              onClick={closeMobileMenu}
              aria-label="Close navigation menu"
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-800 transition-colors"
            >
              <X size={22} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4 relative z-[102] bg-black">
            <Link
              to="/services"
              onClick={closeMobileMenu}
              className="block w-full text-left py-4 font-semibold text-lg border-b border-gray-800 hover:text-orange-400 transition-colors"
            >
              Services & Products
            </Link>

            <Link
              to="/projects"
              onClick={closeMobileMenu}
              className="block w-full text-left py-4 font-semibold text-lg border-b border-gray-800 hover:text-orange-400 transition-colors"
            >
              All Works
            </Link>

            <Link
              to="/about"
              onClick={closeMobileMenu}
              className="block w-full text-left py-4 font-semibold text-lg border-b border-gray-800 hover:text-orange-400 transition-colors"
            >
              About
            </Link>

            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="block w-full text-left py-4 font-semibold text-lg hover:text-orange-400 transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="px-6 py-5 border-t border-gray-800 relative z-[102] bg-black">
            <a
              href="https://wa.me/918707862783?text=Hi%20GraphicX%20Studio!%20I'm%20interested%20in%20getting%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="block w-full text-center bg-orange-500 text-black font-semibold px-6 py-4 rounded-full hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
              <span>Get Free Quote</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
