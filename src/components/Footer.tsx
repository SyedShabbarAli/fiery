"use client";

export default function Footer() {
  return (
    <footer className="relative z-[1] bg-[#050505]">
      {/* Orange gradient top line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#ff9700] to-transparent opacity-40" />

      {/* Main Footer */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-8 sm:pb-10">
        {/* Top Row: Logo + Tagline centered */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl sm:text-6xl tracking-[4px] sm:tracking-[6px] mb-2 sm:mb-3"
            style={{
              fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
              background: "linear-gradient(135deg, #ff9700, #ff3d00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            FIERY
          </h2>
          <p className="text-white/40 text-sm italic tracking-wide">
            Dangerously Addictive
          </p>
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#ff9700] to-[#ff3d00] mx-auto mt-4 rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-16">
          {/* Locations */}
          <div>
            <h4 className="text-[#ff9700] font-bold text-xs uppercase tracking-[3px] mb-5 flex items-center gap-2">
              <i className="fa-solid fa-location-dot text-sm" />
              Our Locations
            </h4>
            <div className="space-y-5">
              {/* PAF Market */}
              <div className="group p-4 rounded-xl bg-[#0c0c0c] border border-[#1a1a1a] hover:border-[#ff9700]/20 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#ff9700] to-[#ff3d00] flex items-center justify-center shrink-0 mt-0.5">
                    <i className="fa-solid fa-store text-white text-sm" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-white font-semibold text-sm mb-1">PAF Market Branch</h5>
                    <p className="text-white/30 text-xs leading-relaxed mb-2">
                      1 PAF Market, Sarfaraz Rafique Road, Lahore Cantt.
                    </p>
                    <a
                      href="tel:03111134379"
                      className="inline-flex items-center gap-1.5 text-[#ff9700] text-xs font-medium hover:text-[#ffb740] transition-colors"
                    >
                      <i className="fa-solid fa-phone text-[0.65rem]" />
                      0311-1134379
                    </a>
                  </div>
                </div>
              </div>

              {/* DHA */}
              <div className="group p-4 rounded-xl bg-[#0c0c0c] border border-[#1a1a1a] hover:border-[#ff9700]/20 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#ff9700] to-[#ff3d00] flex items-center justify-center shrink-0 mt-0.5">
                    <i className="fa-solid fa-store text-white text-sm" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-white font-semibold text-sm mb-1">DHA Branch</h5>
                    <p className="text-white/30 text-xs leading-relaxed mb-2">
                      75 T Block, Phase 2, DHA Lahore.
                    </p>
                    <a
                      href="tel:031111FIERY"
                      className="inline-flex items-center gap-1.5 text-[#ff9700] text-xs font-medium hover:text-[#ffb740] transition-colors"
                    >
                      <i className="fa-solid fa-phone text-[0.65rem]" />
                      0311-11FIERY
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hours + Contact */}
          <div>
            <h4 className="text-[#ff9700] font-bold text-xs uppercase tracking-[3px] mb-5 flex items-center gap-2">
              <i className="fa-solid fa-clock text-sm" />
              Hours & Contact
            </h4>

            {/* Hours Card */}
            <div className="p-4 rounded-xl bg-[#0c0c0c] border border-[#1a1a1a] mb-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-400 text-xs font-semibold uppercase tracking-wider">
                  Open Now
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white/50 text-xs">Daily Hours</span>
                  <span className="text-white text-sm font-medium">12:00 PM - 3:00 AM</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:03111134379"
                className="flex items-center gap-3 p-3 rounded-xl bg-[#0c0c0c] border border-[#1a1a1a] hover:border-[#ff9700]/20 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#141414] border border-[#222] flex items-center justify-center group-hover:border-[#ff9700]/30 transition-colors">
                  <i className="fa-solid fa-phone text-[#ff9700] text-xs" />
                </div>
                <div>
                  <p className="text-white/50 text-[0.65rem] uppercase tracking-wider">Call Us</p>
                  <p className="text-white text-sm font-medium">0311-1134379</p>
                </div>
              </a>

              <a
                href="https://wa.me/923111134379"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-[#0c0c0c] border border-[#1a1a1a] hover:border-[#25D366]/30 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#141414] border border-[#222] flex items-center justify-center group-hover:border-[#25D366]/30 transition-colors">
                  <i className="fa-brands fa-whatsapp text-[#25D366] text-sm" />
                </div>
                <div>
                  <p className="text-white/50 text-[0.65rem] uppercase tracking-wider">WhatsApp</p>
                  <p className="text-white text-sm font-medium">0311-1134379</p>
                </div>
              </a>
            </div>
          </div>

          {/* Social + Quick Order */}
          <div>
            <h4 className="text-[#ff9700] font-bold text-xs uppercase tracking-[3px] mb-5 flex items-center gap-2">
              <i className="fa-solid fa-share-nodes text-sm" />
              Connect With Us
            </h4>

            {/* Social Links */}
            <div className="flex gap-3 mb-8">
              <a
                href="#"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0c0c0c] border border-[#1a1a1a] text-white/40 hover:text-white hover:border-[#E1306C]/40 hover:bg-[#E1306C]/10 transition-colors"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram text-lg" />
              </a>
              <a
                href="#"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0c0c0c] border border-[#1a1a1a] text-white/40 hover:text-white hover:border-[#1877F2]/40 hover:bg-[#1877F2]/10 transition-colors"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f text-lg" />
              </a>
              <a
                href="#"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0c0c0c] border border-[#1a1a1a] text-white/40 hover:text-white hover:border-white/20 hover:bg-white/5 transition-colors"
                aria-label="TikTok"
              >
                <i className="fa-brands fa-tiktok text-lg" />
              </a>
              <a
                href="#"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0c0c0c] border border-[#1a1a1a] text-white/40 hover:text-white hover:border-[#FF0000]/40 hover:bg-[#FF0000]/10 transition-colors"
                aria-label="YouTube"
              >
                <i className="fa-brands fa-youtube text-lg" />
              </a>
            </div>

            {/* Quick Order CTA */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-[#ff9700]/10 to-[#ff3d00]/5 border border-[#ff9700]/15">
              <h5 className="text-white font-semibold text-sm mb-2">
                <i className="fa-solid fa-bolt text-[#ff9700] mr-1.5" />
                Quick Order
              </h5>
              <p className="text-white/30 text-xs mb-4 leading-relaxed">
                Skip the wait! Order directly via WhatsApp for the fastest delivery.
              </p>
              <a
                href="https://wa.me/923111134379"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full py-3 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white text-sm font-bold hover:opacity-90 transition-opacity shadow-lg shadow-[#25D366]/15"
              >
                <i className="fa-brands fa-whatsapp text-xl" />
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#141414]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">
          <p className="text-white/20 text-xs">
            &copy; {new Date().getFullYear()} Fiery. All rights reserved. Dangerously Addictive.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/20 text-xs hover:text-white/40 transition-colors">
              Privacy Policy
            </a>
            <span className="text-white/10">|</span>
            <a href="#" className="text-white/20 text-xs hover:text-white/40 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
