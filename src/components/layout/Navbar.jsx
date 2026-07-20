import React, { useState, useEffect } from "react";
import { ChevronDown, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import logoImg from "../../assets/Logo/Image_from_iOS__2_-removebg-preview.png";
import { navServices } from "../../data/siteContent";

const services = navServices;

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

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
    setMobileServicesOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-black/70 backdrop-blur-xl py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-white">
        <Link to="/">
          <img src={logoImg} className="h-12" alt="Logo" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8 relative">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="font-semibold hover:text-orange-400 flex items-center gap-1">
              Services
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 transition-all duration-300 ${
                servicesOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-4"
              }`}
            >
              <div className="w-56 rounded-2xl bg-white text-gray-800 shadow-2xl py-3">
                <ul>
                  {services.map((item) => (
                    <li key={item}>
                       <a 
                        href="#"
                        className="block px-5 py-2.5 hover:bg-gray-50 hover:text-orange-500"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="border-t mt-2 pt-2">
                    <a
                    href="#"
                    className="flex items-center gap-1 px-5 py-2.5 font-semibold text-orange-500 hover:text-orange-600"
                  >
                    View All →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Link to="/projects" className="hover:text-orange-400">Projects</Link>
          <Link to="/about" className="hover:text-orange-400">About</Link>
          <Link to="/contact" className="hover:text-orange-400">Contact</Link>

            <a
            href="https://wa.me/918707862783?text=Hi%20GraphicX%20Studio!%20I'm%20interested%20in%20getting%20a%20quote."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 px-6 py-3 rounded-full hover:bg-orange-600 transition-colors flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            Get Free Quote
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMobileMenu}
      >
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-black text-white shadow-2xl transition-transform duration-300 flex flex-col ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-800">
            <Link to="/" onClick={closeMobileMenu}>
              <img src={logoImg} className="h-9" alt="Logo" />
            </Link>
            <button
              onClick={closeMobileMenu}
              aria-label="Close menu"
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-800 transition-colors"
            >
              <X size={22} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4">
            {/* Services accordion */}
            <div className="border-b border-gray-800">
              <button
                className="w-full flex items-center justify-between py-4 font-semibold text-lg"
                onClick={() => setMobileServicesOpen((v) => !v)}
              >
                Services
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  mobileServicesOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <ul className="pb-4 space-y-3 pl-1">
                    {services.map((item) => (
                      <li key={item}>
                          <a
                          href="#"
                          onClick={closeMobileMenu}
                          className="block text-gray-300 hover:text-orange-400"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                    <li>
                        <a
                        href="#"
                        onClick={closeMobileMenu}
                        className="block font-semibold text-orange-400"
                      >
                        View All →
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <Link
              to="/projects"
              onClick={closeMobileMenu}
              className="block w-full text-left py-4 font-semibold text-lg border-b border-gray-800"
            >
              Projects
            </Link>

            <Link
              to="/about"
              onClick={closeMobileMenu}
              className="block w-full text-left py-4 font-semibold text-lg border-b border-gray-800"
            >
              About
            </Link>

            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="block w-full text-left py-4 font-semibold text-lg"
            >
              Contact
            </Link>
          </div>

          <div className="px-6 py-5 border-t border-gray-800">
              <a
              href="https://wa.me/918707862783?text=Hi%20GraphicX%20Studio!%20I'm%20interested%20in%20getting%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="block w-full text-center bg-orange-500 text-white font-semibold px-6 py-4 rounded-full hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
