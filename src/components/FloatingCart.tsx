"use client";

import { useCart } from "@/context/CartContext";

export default function FloatingCart() {
  const { totalItems, totalPrice, openCart } = useCart();

  if (totalItems === 0) return null;

  return (
    <div
      className="fixed bottom-4 sm:bottom-5 left-1/2 z-40 w-[calc(100%-2rem)] sm:w-auto max-w-md animate-slide-up"
      style={{ transform: "translateX(-50%)", paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <button
        onClick={openCart}
        className="w-full flex items-center justify-between sm:justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-3 rounded-full bg-gradient-to-r from-[#ff9700] to-[#ff3d00] text-white shadow-[0_8px_32px_rgba(255,151,0,0.35)] hover:opacity-90 active:scale-[0.98] transition-opacity"
      >
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-bag-shopping text-xs sm:text-sm" />
          <span className="text-xs sm:text-sm font-bold">
            {totalItems} {totalItems === 1 ? "item" : "items"}
          </span>
        </div>
        <span className="text-xs sm:text-sm font-bold">View Cart</span>
        <span className="text-xs sm:text-sm font-bold">Rs. {totalPrice.toLocaleString()}</span>
      </button>
    </div>
  );
}
