"use client";

import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { totalItems, openCart } = useCart();

  return (
    <nav className="relative z-30 bg-[#0a0a0a]/95 border-b border-white/5">
      <div className="max-w-[1200px] mx-auto h-14 sm:h-16 flex items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          {/* Fire icon */}
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#ff9700] to-[#ff3d00] flex items-center justify-center shadow-lg shadow-[#ff9700]/20">
            <i className="fa-solid fa-fire text-white text-sm sm:text-base" />
          </div>
          <div>
            <h1
              className="text-2xl sm:text-3xl tracking-wider leading-none"
              style={{
                fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                background: "linear-gradient(135deg, #ff9700, #ff3d00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              FIERY
            </h1>
            <p className="text-[0.55rem] sm:text-[0.6rem] text-white/25 tracking-[2px] uppercase leading-none -mt-0.5">
              Dangerously Addictive
            </p>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Location */}
          <button
            className="flex items-center gap-2 h-9 sm:h-10 px-2.5 sm:px-3.5 rounded-xl bg-[#141414] border border-[#222] text-white/60 hover:text-white hover:border-[#ff9700]/30 transition-colors"
            aria-label="Location"
          >
            <i className="fa-solid fa-location-dot text-[#ff9700] text-xs sm:text-sm" />
            <span className="hidden md:inline text-xs font-medium">Location</span>
          </button>

          {/* Phone */}
          <a
            href="tel:03111134379"
            className="flex items-center gap-2 h-9 sm:h-10 px-2.5 sm:px-3.5 rounded-xl bg-[#141414] border border-[#222] text-white/60 hover:text-white hover:border-[#ff9700]/30 transition-colors"
            aria-label="Call"
          >
            <i className="fa-solid fa-phone text-[#ff9700] text-xs sm:text-sm" />
            <span className="hidden md:inline text-xs font-medium">Call</span>
          </a>

          {/* Cart */}
          <button
            onClick={openCart}
            className="relative flex items-center gap-2 h-9 sm:h-10 px-2.5 sm:px-3.5 rounded-xl bg-[#141414] border border-[#222] text-white/60 hover:text-white hover:border-[#ff9700]/30 transition-colors"
            aria-label="Cart"
          >
            <i className="fa-solid fa-bag-shopping text-[#ff9700] text-sm sm:text-base" />
            <span className="hidden md:inline text-xs font-medium">Cart</span>
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-[20px] flex items-center justify-center rounded-full bg-[#ff3d00] text-white text-[10px] font-bold px-1 shadow-lg shadow-[#ff3d00]/40 ring-2 ring-[#0a0a0a]">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
