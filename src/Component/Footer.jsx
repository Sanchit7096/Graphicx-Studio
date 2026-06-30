import React from 'react';

const Footer = () => {
  return (
    <footer
      id="contact"
      className="w-full bg-[#050505] border-t border-white/5"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* ── FOOTER GRID SECTION (Above Map) ── */}
      <div className="max-w-screen-2xl  mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Column 1: Contact Us */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white text-xl font-bold uppercase tracking-widest" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Contact Us
            </h4>
            <div className="flex flex-col gap-3.5 text-base">
              <a href="tel:+918707862783" className="text-white/40 hover:text-[#2edcc3] transition-colors duration-200 w-fit">
                +91 87078 62783
              </a>
              <a href="mailto:graphicxstudio18@gmail.com" className="text-white/40 hover:text-[#2edcc3] transition-colors duration-200 w-fit">
                graphicxstudio18@gmail.com
              </a>
              <p className="text-white/40 leading-relaxed pr-4">
                2nd Floor, Dream Shoppers, Nr. Police Station, Dindoli, Surat, Gujarat 394210
              </p>
              <a
                href="https://wa.me/918707862783?text=Hi%20GraphicX%20Studio!%20I'm%20interested%20in%20getting%20a%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2edcc3] hover:underline font-bold uppercase tracking-wider text-sm mt-2 w-fit"
              >
                Chat on WhatsApp →
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white text-xl font-bold uppercase tracking-widest" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Company
            </h4>
            <div className="flex flex-col gap-3.5 text-base">
              <a href="#about" className="text-white/40 hover:text-[#2edcc3] transition-colors duration-200 w-fit">
                About Us
              </a>
              <a href="#services" className="text-white/40 hover:text-[#2edcc3] transition-colors duration-200 w-fit">
                Our Services
              </a>
              <a href="#work" className="text-white/40 hover:text-[#2edcc3] transition-colors duration-200 w-fit">
                Our Work
              </a>
              <a href="#contact" className="text-white/40 hover:text-[#2edcc3] transition-colors duration-200 w-fit">
                Contact Us
              </a>
            </div>
          </div>

          {/* Column 3: More Information */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white text-xl font-bold uppercase tracking-widest" style={{ fontFamily: "'Poppins', sans-serif" }}>
              More Information
            </h4>
            <div className="flex flex-col gap-3.5 text-base">
              <a href="#" className="text-white/40 hover:text-[#2edcc3] transition-colors duration-200 w-fit">
                Privacy Policy
              </a>
              <a href="#" className="text-white/40 hover:text-[#2edcc3] transition-colors duration-200 w-fit">
                Terms of Service
              </a>
              <a href="#" className="text-white/40 hover:text-[#2edcc3] transition-colors duration-200 w-fit">
                Sitemap
              </a>
            </div>
          </div>

          {/* Column 4: Social Media */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white text-xl font-bold uppercase tracking-widest" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Social Media
            </h4>
            <div className="flex flex-col gap-6">
              {/* Circular Social Icons */}
              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white border border-white/10 hover:bg-[#2edcc3] hover:text-black hover:scale-105 transition-all duration-300 flex items-center justify-center text-white/60"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6c0-.88.39-1 1-1h2V2h-3c-2.5 0-4 1.5-4 4v2z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white border border-white/10 hover:bg-[#2edcc3] hover:text-black hover:scale-105 transition-all duration-300 flex items-center justify-center text-white/60"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white border border-white/10 hover:bg-[#2edcc3] hover:text-black hover:scale-105 transition-all duration-300 flex items-center justify-center text-white/60"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white border border-white/10 hover:bg-[#2edcc3] hover:text-black hover:scale-105 transition-all duration-300 flex items-center justify-center text-white/60"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>

              {/* Designed By Badge */}
              <div className="flex items-center gap-3 pt-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#2edcc3]/10 border border-[#2edcc3]/20">
                  <span className="text-[#2edcc3] font-black text-xs">GX</span>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-[0.25em] font-bold">Designed By</p>
                  <p className="text-[11px] text-white/70 font-semibold tracking-wider uppercase">GraphicX Studio</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── GOOGLE MAPS EMBED ── */}
      <div className="w-full h-62 md:h-62 border-t border-white/5 overflow-hidden grayscale brightness-50 hover:grayscale-0 hover:brightness-75 transition-all duration-700">
        <iframe
          title="GraphicX Studio Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.8765432109876!2d72.8765432!3d21.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f0b0b0b0b0b%3A0x0!2sDindoli%2C%20Surat%2C%20Gujarat%20394210!5e0!3m2!1sen!2sin!4v1718000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* ── BOTTOM BAR (Centered Copyright) ── */}
      <div className="border-t border-white/5 py-8 text-center">
        <p className="text-white/30 text-sm tracking-widest uppercase">
          Copyright © {new Date().getFullYear()} GraphicX Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

