"use client";

import { useState } from "react";

const types = ["Delivery", "Pickup", "Dine-In"] as const;

export default function OrderTypeBar() {
  const [active, setActive] = useState<string>("Delivery");

  return (
    <div className="border-b border-[#222] bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto flex items-center justify-center gap-2 px-5 py-3">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => setActive(type)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
              active === type
                ? "bg-gradient-to-r from-[#ff9700] to-[#ff3d00] text-white"
                : "bg-white/5 text-white/50 border border-white/10 hover:text-white/70"
            }`}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
}
