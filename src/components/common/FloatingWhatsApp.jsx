import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { contactInfo } from "../../data/siteContent";

const FloatingWhatsApp = () => {
  return (
    <a
      href={contactInfo.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with GraphicX Studio on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 transform hover:scale-105 transition-all duration-300 group cursor-pointer border border-emerald-400/30"
    >
      {/* WhatsApp Icon with Pulse Effect */}
      <div className="relative flex items-center justify-center">
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75 animate-ping"></span>
        <FontAwesomeIcon icon={faWhatsapp} className="text-2xl sm:text-3xl relative z-10" />
      </div>

      {/* Label Text (hidden on small screens, visible on sm and up or expandable) */}
      {/* <span className="hidden sm:inline-block font-poppins font-bold text-sm tracking-wide">
        WhatsApp Us
      </span> */}
    </a>
  );
};

export default FloatingWhatsApp;
