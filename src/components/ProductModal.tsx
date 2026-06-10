"use client";

import { useState, useEffect, useCallback } from "react";
import { MenuItem } from "@/data/menu";
import { useCart } from "@/context/CartContext";

interface ProductModalProps {
  item: MenuItem;
  hasMeal?: boolean;
  onClose: () => void;
}

export default function ProductModal({ item, hasMeal, onClose }: ProductModalProps) {
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [selectedVibe, setSelectedVibe] = useState(item.vibes?.[0] || "");
  const [selectedSauce, setSelectedSauce] = useState(item.sauces?.[0] || "");
  const [isMeal, setIsMeal] = useState(false);

  const mealPrice = 500;
  const unitPrice = item.price + (isMeal ? mealPrice : 0);
  const total = unitPrice * qty;

  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => document.body.classList.remove("no-scroll");
  }, []);

  const handleAdd = useCallback(() => {
    const suffix = selectedVibe
      ? ` (${selectedVibe})`
      : selectedSauce
      ? ` (${selectedSauce})`
      : "";
    const mealSuffix = isMeal ? " + Meal" : "";
    const finalName = item.name + suffix + mealSuffix;
    const finalId = item.id + suffix + mealSuffix;

    for (let i = 0; i < qty; i++) {
      addToCart(finalId, finalName, unitPrice);
    }
    onClose();
  }, [addToCart, item, qty, selectedVibe, selectedSauce, isMeal, unitPrice, onClose]);

  return (
    <div className="fixed inset-0 z-[9000] flex items-end sm:items-center justify-center animate-fadeIn">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full sm:w-[440px] max-h-[85vh] sm:max-h-[90vh] bg-[#0f0f0f] rounded-t-2xl sm:rounded-2xl overflow-hidden flex flex-col animate-slideUp">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/60 text-white/70 hover:text-white transition-colors"
        >
          <i className="fa-solid fa-xmark text-sm" />
        </button>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">
          {/* Image */}
          {item.image && (
            <div className="w-full h-[180px] sm:h-[250px] overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="p-4 sm:p-5">
            {/* Name + price */}
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{item.name}</h3>
            <span className="inline-block bg-[#ff9700] text-white text-xs sm:text-sm font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-md mb-3">
              Rs. {item.price.toLocaleString()}
            </span>

            {item.description && (
              <p className="text-white/40 text-xs sm:text-sm mb-4 sm:mb-5 leading-relaxed">
                {item.description}
              </p>
            )}

            {/* Vibe selector */}
            {item.vibes && item.vibes.length > 0 && (
              <div className="mb-5">
                <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">
                  Select Vibe
                </p>
                <div className="flex gap-2 flex-wrap">
                  {item.vibes.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVibe(v)}
                      className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                        selectedVibe === v
                          ? "bg-[#ff9700] text-white"
                          : "bg-[#1a1a1a] border border-[#333] text-white/50 hover:text-white/70"
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Sauce selector */}
            {item.sauces && item.sauces.length > 0 && (
              <div className="mb-5">
                <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">
                  Select Sauce
                </p>
                <div className="flex gap-2 flex-wrap">
                  {item.sauces.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSauce(s)}
                      className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                        selectedSauce === s
                          ? "bg-[#ff9700] text-white"
                          : "bg-[#1a1a1a] border border-[#333] text-white/50 hover:text-white/70"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Make it a Meal */}
            {hasMeal && (
              <button
                onClick={() => setIsMeal(!isMeal)}
                className={`w-full flex items-center gap-3 p-3 rounded-xl border mb-5 transition-colors ${
                  isMeal
                    ? "bg-[#ff9700]/15 border-[#ff9700]/40"
                    : "bg-[#141414] border-[#222] hover:border-[#333]"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${
                    isMeal
                      ? "bg-[#ff9700] border-[#ff9700]"
                      : "border-[#444] bg-transparent"
                  }`}
                >
                  {isMeal && <i className="fa-solid fa-check text-white text-[10px]" />}
                </div>
                <div className="flex-1 text-left">
                  <p className="text-white text-sm font-semibold">
                    <i className="fa-solid fa-utensils mr-2 text-[#ff9700] text-xs" />
                    Make it a Meal
                  </p>
                  <p className="text-white/40 text-xs">Fries + Drink + Coleslaw</p>
                </div>
                <span className="text-[#ff9700] text-sm font-bold">+Rs. {mealPrice.toLocaleString()}</span>
              </button>
            )}

            {/* Quantity selector */}
            <div className="flex items-center justify-center gap-4 sm:gap-5 mb-2">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-[#1a1a1a] border border-[#333] text-white hover:bg-[#222] active:scale-95 transition-colors"
              >
                <i className="fa-solid fa-minus text-xs sm:text-sm" />
              </button>
              <span className="text-white text-lg sm:text-xl font-bold w-8 text-center">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-[#1a1a1a] border border-[#333] text-white hover:bg-[#222] active:scale-95 transition-colors"
              >
                <i className="fa-solid fa-plus text-xs sm:text-sm" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom sticky bar */}
        <div className="p-3 sm:p-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] border-t border-[#222]">
          <button
            onClick={handleAdd}
            className="w-full py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#ff9700] to-[#ff3d00] text-white font-bold text-sm sm:text-base hover:opacity-90 active:scale-[0.98] transition-opacity"
          >
            Add to Cart - Rs. {total.toLocaleString()}
          </button>
        </div>
      </div>
    </div>
  );
}
