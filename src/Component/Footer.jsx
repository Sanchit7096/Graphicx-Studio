import React, { useState } from 'react';

const Footer = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMsg = encodeURIComponent(
    `Hi GraphicX Studio! I'm interested in getting a quote.\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nMessage: ${form.message}`
  );

  return (
    <footer
      id="contact"
      className="w-full bg-[#050505] border-t border-white/5"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      {/* ── CONTACT + FORM SECTION ── */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* LEFT — Contact Info */}
          <div className="flex flex-col justify-between gap-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-[1px] bg-[#2edcc3]"></span>
                <span className="text-[#2edcc3] text-sm font-bold tracking-widest uppercase">Get In Touch</span>
              </div>
              <h2
                className="text-5xl md:text-7xl font-black text-white uppercase leading-[0.9] mb-6"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Let's Build<br />Something<br />Great
              </h2>
              <p className="text-white/50 text-base md:text-lg font-light leading-relaxed max-w-md">
                Ready to transform your brand's physical presence? Reach out and our team will get back to you within 24 hours.
              </p>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col gap-6">
              {/* Phone */}
              <a
                href="tel:+918707862783"
                className="group flex items-center gap-5 text-white/70 hover:text-white transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#2edcc3]/40 transition-colors duration-300 shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#2edcc3]">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.42 2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/30 uppercase tracking-widest font-bold mb-0.5">Phone</p>
                  <p className="text-base font-medium">+91 87078 62783</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:hello@graphicxstudio.in"
                className="group flex items-center gap-5 text-white/70 hover:text-white transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#2edcc3]/40 transition-colors duration-300 shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#2edcc3]">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/30 uppercase tracking-widest font-bold mb-0.5">Email</p>
                  <p className="text-base font-medium">hello@graphicxstudio.in</p>
                </div>
              </a>

              {/* Address */}
              <div className="group flex items-start gap-5 text-white/70">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#2edcc3]">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/30 uppercase tracking-widest font-bold mb-0.5">Address</p>
                  <p className="text-base font-medium leading-relaxed">2nd Floor, Dream Shoppers, Nr. Police Station,<br />205, Dindoli, Surat,<br />Gujarat 394210</p>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/918707862783?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center gap-4 bg-[#25D366] hover:bg-[#1ebe5b] text-black font-black uppercase tracking-widest text-sm px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(37,211,102,0.3)] w-fit"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.885 3.488"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT — Quote Form */}
          <div className="bg-[#0a0a0a] border border-white/8 rounded-3xl p-8 md:p-12">
            <h3
              className="text-3xl md:text-4xl font-black text-white uppercase mb-2"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Request a Quote
            </h3>
            <p className="text-white/40 text-sm mb-8">We'll get back to you within 24 hours.</p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#2edcc3]/10 border border-[#2edcc3]/30 flex items-center justify-center mb-4">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2edcc3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h4 className="text-2xl font-black text-white uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Message Sent!</h4>
                <p className="text-white/50 text-sm max-w-xs">Thank you! Our team will reach out to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-white/40 text-xs uppercase tracking-widest font-bold">Your Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="bg-black border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#2edcc3]/50 transition-colors duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-white/40 text-xs uppercase tracking-widest font-bold">Phone</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 00000 00000"
                      className="bg-black border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#2edcc3]/50 transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-white/40 text-xs uppercase tracking-widest font-bold">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@company.com"
                    className="bg-black border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#2edcc3]/50 transition-colors duration-200"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-white/40 text-xs uppercase tracking-widest font-bold">Service Required</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="bg-black border border-white/10 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-[#2edcc3]/50 transition-colors duration-200 appearance-none cursor-pointer text-white/70"
                  >
                    <option value="" disabled>Select a service...</option>
                    <option value="LED Signboards">LED Signboards</option>
                    <option value="Acrylic Signboards">Acrylic Signboards</option>
                    <option value="ACP Signboards">ACP Signboards</option>
                    <option value="Neon Signs">Neon Signs</option>
                    <option value="3D Letter Signs">3D Letter Signs</option>
                    <option value="Corporate Branding">Corporate Branding</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-white/40 text-xs uppercase tracking-widest font-bold">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your project, size, location, timeline..."
                    className="bg-black border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#2edcc3]/50 transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2edcc3] hover:bg-[#1fc9b0] text-black font-black uppercase tracking-widest text-sm px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-[0_8px_30px_rgba(46,220,195,0.3)] mt-2"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Send Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* ── GOOGLE MAPS EMBED ── */}
      <div className="w-full h-72 md:h-96 border-t border-white/5 overflow-hidden grayscale brightness-50 hover:grayscale-0 hover:brightness-75 transition-all duration-700">
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

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-white/5 py-8">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} <span className="text-white/50 font-semibold">GraphicX Studio</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <a key={item} href="#" className="text-white/30 text-sm hover:text-white/60 transition-colors duration-200">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
