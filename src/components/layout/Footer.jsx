import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ExternalLink } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { contactInfo } from '../../data/siteContent';
import { optimizeCloudinaryUrl } from '../../utils/cloudinary';

const rawLogoImg = "https://res.cloudinary.com/fj3hcwbi/image/upload/v1786515589/s9lcorpviydi4q5wk34e.png";
const logoImg = optimizeCloudinaryUrl(rawLogoImg, { width: 300 });

const Footer = () => {
  return (
    <footer
      id="contact"
      className="w-full bg-[#0a0a0a] py-16 md:py-20 lg:py-24 px-5 sm:px-6 lg:px-8 xl:px-10 border-t border-white/5 font-manrope"
      aria-label="Site Footer"
    >
      {/* ── FOOTER MAIN SECTION ── */}
      <div className="max-w-screen-2xl 2xl:max-w-[1800px] 3xl:max-w-[2200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="h-14 w-auto inline-block" aria-label="GraphicX Studio Home">
              <img
                src={logoImg}
                alt="GraphicX Studio Logo"
                width="160"
                height="56"
                className="h-full w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </Link>
            <p className="text-sm leading-relaxed text-zinc-300">
              Signage & branding agency in Surat, Gujarat. LED sign boards, ACP signage, logo design & visual identity for businesses in Surat & Dindoli.
            </p>
            
            {/* Social Links */}
            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href={contactInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with GraphicX Studio on WhatsApp"
                className="w-fit rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2edcc3] transition hover:border-[#2edcc3]/50 hover:bg-[#2edcc3]/10"
              >
                <FontAwesomeIcon icon={faWhatsapp} style={{ color: "rgb(99, 230, 190)" }} />
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                aria-label="Email GraphicX Studio"
                className="w-fit rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-200 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
              >
                <FontAwesomeIcon icon={faEnvelope} style={{ color: "rgb(255, 255, 255)" }} />
              </a>
              <a
                href={contactInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GraphicX Studio on Instagram"
                className="w-fit rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-200 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
              >
                <FontAwesomeIcon icon={faInstagram} style={{ color: "rgb(255, 255, 255)" }} />
              </a>
            </div>
          </div>

          {/* Column 2: Popular Surat Services */}
          <div className="flex flex-col gap-5">
            <h3 className="text-base font-semibold tracking-wider text-white font-poppins">
              Signage in Surat
            </h3>
            <div className="flex flex-col gap-2.5 text-sm">
              <Link to="/services/led-sign-board-surat" className="w-fit text-zinc-300 transition-colors duration-200 hover:text-orange-400">
                LED Sign Boards Surat
              </Link>
              <Link to="/services/acp-sign-board-surat" className="w-fit text-zinc-300 transition-colors duration-200 hover:text-orange-400">
                ACP Elevation & Cladding
              </Link>
              <Link to="/services/acrylic-letter-signage-surat" className="w-fit text-zinc-300 transition-colors duration-200 hover:text-orange-400">
                Acrylic Letter Signage
              </Link>
              <Link to="/services/3d-letter-signage-surat" className="w-fit text-zinc-300 transition-colors duration-200 hover:text-orange-400">
                3D Letter Sign Boards
              </Link>
              <Link to="/services/shop-branding-surat" className="w-fit text-zinc-300 transition-colors duration-200 hover:text-orange-400">
                Turnkey Shop Branding
              </Link>
              <Link to="/services/flex-banner-printing-surat" className="w-fit text-zinc-300 transition-colors duration-200 hover:text-orange-400">
                Flex Banner Printing
              </Link>
              <Link to="/services/neon-sign-boards" className="w-fit text-zinc-300 transition-colors duration-200 hover:text-orange-400">
                Custom Neon Signs
              </Link>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="flex flex-col gap-5">
            <h3 className="text-base font-semibold tracking-wider text-white font-poppins">
              Company
            </h3>
            <div className="flex flex-col gap-2.5 text-sm">
              <Link to="/" className="w-fit text-zinc-300 transition-colors duration-200 hover:text-orange-400">
                Home
              </Link>
              <Link to="/about" className="w-fit text-zinc-300 transition-colors duration-200 hover:text-orange-400">
                About Us
              </Link>
              <Link to="/services" className="w-fit text-zinc-300 transition-colors duration-200 hover:text-orange-400">
                All 20+ Services
              </Link>
              <Link to="/projects" className="w-fit text-zinc-300 transition-colors duration-200 hover:text-orange-400">
                Our Work Portfolio
              </Link>
              <Link to="/contact" className="w-fit text-zinc-300 transition-colors duration-200 hover:text-orange-400">
                Contact & Free Quote
              </Link>
            </div>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="flex flex-col gap-5">
            <h3 className="text-base font-semibold tracking-wider text-white font-poppins">
              Surat Workshop & Office
            </h3>
            <div className="flex flex-col gap-2.5 text-sm">
              <a href={`tel:${contactInfo.phone}`} className="w-fit text-zinc-300 transition-colors duration-200 hover:text-orange-400 font-medium">
                {contactInfo.phoneDisplay}
              </a>
              <a href={`mailto:${contactInfo.email}`} className="w-fit text-zinc-300 transition-colors duration-200 hover:text-orange-400">
                {contactInfo.email}
              </a>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {contactInfo.address.full}
              </p>
              <p className="text-[11px] text-zinc-500">
                Hours: {contactInfo.openingHoursDisplay}
              </p>
            </div>

            {/* Compact Premium Map Card */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group mt-1 h-36 w-full shadow-lg">
              <iframe
                title="GraphicX Studio Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.8765432109876!2d72.8765432!3d21.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f0b0b0b0b0b%3A0x0!2sDindoli%2C%20Surat%2C%20Gujarat%20394210!5e0!3m2!1sen!2sin!4v1718000000000!5m2!1sen!2sin"
                className="w-full h-full filter grayscale invert contrast-[1.25] opacity-70 group-hover:opacity-100 group-hover:filter-none transition-all duration-700"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Graphicx+Studio+Dream+Shoppers+Dindoli+Surat"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get driving directions to GraphicX Studio on Google Maps"
                className="absolute bottom-2.5 right-2.5 bg-black/80 hover:bg-orange-500 text-white text-[10px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-md transition-all duration-300 shadow-md flex items-center gap-1.5"
              >
                <MapPin size={12} className="text-orange-400 group-hover:text-white" />
                Directions
                <ExternalLink size={10} />
              </a>
            </div>
          </div>
        </div>

        {/* ── Surat Areas Served Bar ── */}
        <div className="border-t border-white/5 mt-12 pt-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-zinc-400">
            <span className="font-semibold text-zinc-300 font-poppins shrink-0">Surat Locations Served:</span>
            <p className="leading-relaxed font-light">
              Dindoli, Varachha, Ring Road, Vesu, Adajan, Pal, City Light, Piplod, Althan, Katargam, Udhna, Pandesara, Sachin GIDC, Hazira, and surrounding South Gujarat regions.
            </p>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR (Centered Copyright) ── */}
      <div className="border-t border-white/5 mt-8 pt-6 text-center">
        <p className="text-zinc-400 text-xs tracking-wider font-medium">
          Copyright © {new Date().getFullYear()} GraphicX Studio Surat. All rights reserved. • ISO & BIS Compliant Signage Fabrication
        </p>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
