"use client";

import { useState, useEffect, useRef } from "react";
import { menuData } from "@/data/menu";

export default function CategoryNav() {
  const [activeId, setActiveId] = useState(menuData[0]?.id || "");
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    menuData.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(cat.id);
          }
        },
        { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Scroll active button into view in the nav
  useEffect(() => {
    const btn = document.getElementById(`nav-${activeId}`);
    if (btn && navRef.current) {
      btn.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeId]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 overflow-x-auto bg-[#0a0a0a] border-b border-[#1a1a1a] scrollbar-hide"
    >
      <div className="flex justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 sm:py-3 min-w-max mx-auto">
        {menuData.map((cat) => (
          <button
            key={cat.id}
            id={`nav-${cat.id}`}
            onClick={() => handleClick(cat.id)}
            className={`shrink-0 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-colors ${
              activeId === cat.id
                ? "bg-gradient-to-r from-[#ff9700] to-[#ff3d00] text-white shadow-sm shadow-[#ff9700]/20"
                : "bg-[#1a1a1a] border border-[#333] text-white/60 hover:text-white/80 active:bg-[#222]"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </nav>
  );
}
