import React, { useState, useEffect } from "react";
import { ChevronDown, X } from "lucide-react";
import logoImg from "../assets/Logo/Image_from_iOS__2_-removebg-preview.png";

const menu = {
  "Signages by Types": [
    "22MM Solid Letter",
    "Additional Letter",
    "Aluminium Channel Letter",
    "Edgeless Channel Letter",
    "GI & Aluminium Letter",
    "Liquid Letter",
    "Neon Signages",
    "Acrylic Signages",
    "Metal Signages",
    "SS Back Glow Letter",
    "SS Border Letter",
    "Thermoforming Letter",
  ],
  "Signages by LED Screen": [
    "Outdoor LED Screen",
    "Indoor LED Screen",
    "Digital Standee",
    "Terrace Sign",
    "Slim Sign",
  ],
  "Signages by Industries": [
    "Hotels & Restaurants",
    "Builder & Construction",
    "Healthcare",
    "Office",
    "Safety",
  ],
  "Signages by Application": [
    "Fire Safety Signs",
    "Door Signs",
    "House Number Signs",
    "Custom Nameplates",
    "Restroom Signs",
    "Room Number Signs",
  ],
};

const locations = [
  "Surat"

];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  // which mobile accordion sections are open
  const [mobileSignagesOpen, setMobileSignagesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setMobileSignagesOpen(false);
    setMobileLocationsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-black/70 backdrop-blur-xl py-4" : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-white">
        <img
          src={logoImg}
          className="h-12 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          alt="Logo"
        />

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8 relative">
          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button className="font-semibold hover:text-orange-400">
              Signages
            </button>

            <div
              className={`absolute left-1/2 -translate-x-1/2 top-full pt-6 transition-all duration-300 ${megaOpen
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-4"
                }`}
            >
              <div className="w-[1100px] rounded-3xl bg-white text-gray-800 shadow-2xl p-10">
                <div className="grid grid-cols-4 gap-10">
                  {Object.entries(menu).map(([title, items]) => (
                    <div key={title}>
                      <h3 className="font-bold text-lg border-b pb-3 mb-4">
                        {title}
                      </h3>
                      <ul className="space-y-3">
                        {items.map((item) => (
                          <li
                            key={item}
                            className="cursor-pointer hover:text-orange-500"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <a href="#Service" className="hover:text-orange-400">Services</a>
          <a href="#about" className="hover:text-orange-400">About Us</a>
          <a href="#contact" className="hover:text-orange-400">Locations</a>
          <a href="#clients" className="hover:text-orange-400">Clients</a>
          <a href="#contact" className="hover:text-orange-400">Contact</a>

          <a
            href="#contact"
            className="bg-orange-500 px-6 py-3 rounded-full hover:bg-orange-600 transition-colors"
          >
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
        className={`lg:hidden fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={closeMobileMenu}
      >
        {/* Mobile menu panel */}
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-black text-white shadow-2xl transition-transform duration-300 flex flex-col ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with close button */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            <img src={logoImg} className="h-9" alt="Logo" />
            <button
              onClick={closeMobileMenu}
              aria-label="Close menu"
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              <X size={22} />
            </button>
          </div>

          {/* Scrollable links */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {/* Signages accordion */}
            <div className="border-b border-gray-100">
              <button
                className="w-full flex items-center justify-between py-4 font-semibold text-lg"
                onClick={() => setMobileSignagesOpen((v) => !v)}
              >
                Signages
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${mobileSignagesOpen ? "rotate-180" : ""
                    }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${mobileSignagesOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
                  }`}
              >
                <div className="overflow-hidden">
                  <div className="pb-4 space-y-5">
                    {Object.entries(menu).map(([title, items]) => (
                      <div key={title}>
                        <h4 className="font-semibold text-sm text-gray-500 mb-2">
                          {title}
                        </h4>
                        <ul className="space-y-2 pl-1">
                          {items.map((item) => (
                            <li key={item}>
                              <a
                                href="#"
                                onClick={closeMobileMenu}
                                className="block text-gray-700 hover:text-orange-500"
                              >
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#Service"
              onClick={closeMobileMenu}
              className="block py-4 font-semibold text-lg border-b border-gray-100"
            >
              Services
            </a>

            <a
              href="#about"
              onClick={closeMobileMenu}
              className="block py-4 font-semibold text-lg border-b border-gray-100"
            >
              About Us
            </a>

            {/* Locations accordion */}
            <div className="border-b border-gray-100">
              <button
                className="w-full flex items-center justify-between py-4 font-semibold text-lg"
                onClick={() => setMobileLocationsOpen((v) => !v)}
              >
                Locations
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${mobileLocationsOpen ? "rotate-180" : ""
                    }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${mobileLocationsOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
                  }`}
              >
                <div className="overflow-hidden">
                  <ul className="pb-4 space-y-2 pl-1">
                    {locations.map((loc) => (
                      <li key={loc}>
                        <a
                          href="#"
                          onClick={closeMobileMenu}
                          className="block text-gray-700 hover:text-orange-500"
                        >
                          {loc}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <a
              href="#clients"
              onClick={closeMobileMenu}
              className="block py-4 font-semibold text-lg border-b border-gray-100"
            >
              Clients
            </a>

            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="block py-4 font-semibold text-lg"
            >
              Contact Us
            </a>
          </div>

          {/* Sticky CTA */}
          <div className="px-6 py-5 border-t border-gray-100">
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="block text-center bg-orange-500 text-white font-semibold px-6 py-4 rounded-full hover:bg-orange-600 transition-colors"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
