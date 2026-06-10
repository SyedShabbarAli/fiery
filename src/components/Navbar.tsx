"use client";

import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { totalItems, openCart } = useCart();

  return (
    <nav className="relative z-30 bg-[#0a0a0a] border-b border-white/5">
      <div className="max-w-[1200px] mx-auto h-12 sm:h-14 flex items-center justify-between px-3 sm:px-5">
        {/* Logo */}
        <h1
          className="text-2xl tracking-wider"
          style={{
            fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
            background: "linear-gradient(135deg, #ff9700, #ff3d00)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          FIERY
        </h1>

        {/* Right side */}
        <div className="flex items-center gap-1">
          {/* Location */}
          <button
            className="w-10 h-10 flex items-center justify-center rounded-full text-white/50 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Location"
          >
            <i className="fa-solid fa-location-dot text-base" />
          </button>

          {/* Phone */}
          <a
            href="tel:03111134379"
            className="w-10 h-10 flex items-center justify-center rounded-full text-white/50 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Call"
          >
            <i className="fa-solid fa-phone text-base" />
          </a>

          {/* Cart */}
          <button
            onClick={openCart}
            className="relative w-10 h-10 flex items-center justify-center rounded-full text-white/50 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Cart"
          >
            <i className="fa-solid fa-bag-shopping text-lg" />
            {totalItems > 0 && (
              <span className="absolute top-1 right-0.5 min-w-[18px] h-[18px] flex items-center justify-center rounded-full bg-[#ff3d00] text-white text-[10px] font-bold px-1">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
