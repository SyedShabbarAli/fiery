"use client";

import { useState } from "react";

const branches = [
  { id: "paf-market", name: "PAF Market", address: "Sarfaraz Rafique Road, Lahore Cantt." },
  { id: "dha", name: "DHA", address: "75 T Block, Phase 2, DHA Lahore" },
];

export default function WelcomeModal() {
  const [open, setOpen] = useState(true);
  const [orderType, setOrderType] = useState<"delivery" | "pickup">("delivery");
  const [branch, setBranch] = useState(branches[0].id);

  const handleClose = () => {
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center animate-fadeIn"
      style={{ touchAction: "none" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/85" />

      {/* Card */}
      <div className="relative w-[90%] max-w-[380px] bg-[#111111] rounded-2xl border border-[#222] overflow-hidden">
        {/* Top accent line */}
        <div className="h-1 w-full bg-gradient-to-r from-[#ff9700] to-[#ff3d00]" />

        <div className="p-6 flex flex-col items-center">
          {/* Logo */}
          <div className="mb-1">
            <span
              className="text-4xl tracking-widest font-bold"
              style={{
                fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                background: "linear-gradient(135deg, #ff9700, #ff3d00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              FIERY
            </span>
          </div>
          <p className="text-white/40 text-xs tracking-wider uppercase mb-6">
            Dangerously Addictive
          </p>

          {/* Order Type Toggle */}
          <p className="text-white/60 text-xs font-medium uppercase tracking-wider mb-3">
            Select Your Order Type
          </p>
          <div className="flex w-full rounded-xl overflow-hidden border border-[#333] mb-5">
            <button
              onClick={() => setOrderType("delivery")}
              className={`flex-1 py-2.5 text-sm font-semibold transition-colors ${
                orderType === "delivery"
                  ? "bg-gradient-to-r from-[#ff9700] to-[#ff3d00] text-white"
                  : "bg-[#1a1a1a] text-white/50 hover:text-white/70"
              }`}
            >
              <i className="fa-solid fa-motorcycle mr-2 text-xs" />
              Delivery
            </button>
            <button
              onClick={() => setOrderType("pickup")}
              className={`flex-1 py-2.5 text-sm font-semibold transition-colors ${
                orderType === "pickup"
                  ? "bg-gradient-to-r from-[#ff9700] to-[#ff3d00] text-white"
                  : "bg-[#1a1a1a] text-white/50 hover:text-white/70"
              }`}
            >
              <i className="fa-solid fa-bag-shopping mr-2 text-xs" />
              Pick-Up
            </button>
          </div>

          {/* Location Button */}
          {orderType === "delivery" && (
            <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#1a1a1a] border border-[#333] text-white/60 text-sm hover:text-white/80 transition-colors mb-4">
              <i className="fa-solid fa-location-crosshairs text-[#ff9700]" />
              Use Current Location
            </button>
          )}

          {/* Branch Select */}
          <div className="w-full mb-5">
            <label className="text-white/40 text-xs uppercase tracking-wider mb-2 block">
              Select Branch
            </label>
            <div className="relative">
              <select
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className="w-full appearance-none bg-[#1a1a1a] border border-[#333] rounded-xl px-4 py-2.5 text-sm text-white/80 focus:border-[#ff9700] transition-colors cursor-pointer outline-none"
              >
                {branches.map((b) => (
                  <option key={b.id} value={b.id} className="bg-[#1a1a1a]">
                    {b.name} - {b.address}
                  </option>
                ))}
              </select>
              <i className="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-white/30 text-xs pointer-events-none" />
            </div>
          </div>

          {/* Select Button */}
          <button
            onClick={handleClose}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#ff9700] to-[#ff3d00] text-white font-bold text-sm tracking-wide hover:opacity-90 active:scale-[0.98] transition-opacity"
          >
            Start Ordering
          </button>
        </div>
      </div>
    </div>
  );
}
