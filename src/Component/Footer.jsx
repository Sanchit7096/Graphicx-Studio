
import logoImg from '../assets/Logo/Image_from_iOS__2_-removebg-preview.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer
      id="contact"
      className="w-full bg-[#0a0a0a] py-16 md:py-20 lg:py-24 px-5 sm:px-6 lg:px-8 xl:px-10 border-t border-white/5 font-manrope"
    >
      {/* ── FOOTER MAIN SECTION ── */}
      <div className="max-w-screen-4xl ">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-20">
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col gap-8">
            <div className="h-16 w-auto">
              <img
                src={logoImg}
                alt="GraphicX Studio logo"
                className="h-full w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="text-base leading-relaxed text-white/70">
              Signage & branding agency in Surat, Gujarat. LED sign boards, ACP signage, logo design & visual identity for businesses in Surat & Dindoli.
            </p>
          </div>

          {/* Column 2: Company */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-semibold uppercase tracking-[0.24em] text-white font-poppins">
              Services
            </h4>
            <div className="flex flex-col gap-3.5 text-base">
              <a href="#LED Sign Boards" className="w-fit text-white/70 transition-colors duration-200 hover:text-[#2edcc3]">
                LED Sign Boards
              </a>
              <a href="#Digital Signages" className="w-fit text-white/70 transition-colors duration-200 hover:text-[#2edcc3]">
                Digital Signages
              </a>
              <a href="#Installation" className="w-fit text-white/70 transition-colors duration-200 hover:text-[#2edcc3]">
                Installation & Maintenance
              </a>
              <a href="#Custom Design" className="w-fit text-white/70 transition-colors duration-200 hover:text-[#2edcc3]">
                Custom Design
              </a>
              <a href="#24/7 Support" className="w-fit text-white/70 transition-colors duration-200 hover:text-[#2edcc3]">
                24/7 Support
              </a>

            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-semibold uppercase tracking-[0.24em] text-white font-poppins">
              Company
            </h4>
            <div className="flex flex-col gap-3.5 text-base">
              <a href="#home" className="w-fit text-white/70 transition-colors duration-200 hover:text-[#2edcc3]">
                Home
              </a>
              <a href="#about" className="w-fit text-white/70 transition-colors duration-200 hover:text-[#2edcc3]">
                About Us
              </a>
              <a href="#services" className="w-fit text-white/70 transition-colors duration-200 hover:text-[#2edcc3]">
                Our Services
              </a>
              <a href="#projects" className="w-fit text-white/70 transition-colors duration-200 hover:text-[#2edcc3]">
                Our Work
              </a>
              <a href="#contact" className="w-fit text-white/70 transition-colors duration-200 hover:text-[#2edcc3]">
                Contact Us
              </a>
            </div>
          </div>



          {/* Column 3: Contact Us */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-semibold uppercase tracking-[0.24em] text-white font-poppins">
              Contact Us
            </h4>
            <div className="flex flex-col gap-3.5 text-base">
              <a href="tel:+918707862783" className="w-fit text-white/70 transition-colors duration-200 hover:text-[#2edcc3]">
                +91 87078 62783
              </a>
              <a href="mailto:graphicxstudio18@gmail.com" className="w-fit text-white/70 transition-colors duration-200 hover:text-[#2edcc3]">
                graphicxstudio18@gmail.com
              </a>
              <p className="pr-4 leading-relaxed text-white/70">
                2nd Floor, Dream Shoppers, Nr. Police Station, Dindoli, Surat, Gujarat 394210
              </p>
              <div className="mt-2 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/918707862783?text=Hi%20GraphicX%20Studio!%20I'm%20interested%20in%20getting%20a%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit rounded-full border border-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#2edcc3] transition hover:border-[#2edcc3]/50 hover:bg-[#2edcc3]/10"
                >
                  <FontAwesomeIcon icon={faWhatsapp} style={{ color: "rgb(99, 230, 190)", }} />
                </a>
                <a
                  href="mailto:graphicxstudio18@gmail.com"
                  className="w-fit rounded-full border border-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-white/80 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
                >
                  <FontAwesomeIcon icon={faEnvelope} style={{ color: "rgb(255, 255, 255)", }} />
                </a>
                <a
                  href="https://www.instagram.com/graphicxstudio18/"
                  className="w-fit rounded-full border border-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-white/80 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
                >
                  <FontAwesomeIcon icon={faInstagram} style={{ color: "rgb(255, 255, 255)", }} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="mt-16 pt-12 border-t border-white/5">
          <div className="rounded-xl overflow-hidden border border-white/10 grayscale brightness-50 hover:grayscale-0 hover:brightness-75 transition-all duration-700">
            <iframe
              title="GraphicX Studio Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.8765432109876!2d72.8765432!3d21.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f0b0b0b0b0b%3A0x0!2sDindoli%2C%20Surat%2C%20Gujarat%20394210!5e0!3m2!1sen!2sin!4v1718000000000!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
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

