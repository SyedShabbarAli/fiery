"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { menuData } from "@/data/menu";

export default function CategoryNav() {
  const [activeId, setActiveId] = useState(menuData[0]?.id || "");
  const navScrollRef = useRef<HTMLDivElement>(null);
  const isClickScrolling = useRef(false);
  const clickTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Detect which section is in view using scroll position (not IntersectionObserver)
  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking || isClickScrolling.current) return;
      ticking = true;

      requestAnimationFrame(() => {
        const navHeight = 52; // sticky nav height
        const scrollY = window.scrollY + navHeight + 20;

        let current = menuData[0]?.id || "";

        for (const cat of menuData) {
          const el = document.getElementById(cat.id);
          if (el) {
            const top = el.offsetTop;
            if (scrollY >= top) {
              current = cat.id;
            }
          }
        }

        setActiveId(current);
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Run once on mount
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll active pill into view in the nav bar (horizontal scroll only)
  useEffect(() => {
    const btn = document.getElementById(`nav-${activeId}`);
    if (btn && navScrollRef.current) {
      const nav = navScrollRef.current;
      const btnLeft = btn.offsetLeft;
      const btnWidth = btn.offsetWidth;
      const navWidth = nav.offsetWidth;
      const scrollLeft = btnLeft - navWidth / 2 + btnWidth / 2;

      nav.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  }, [activeId]);

  const handleClick = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    // Mark that we're doing a click-scroll so the scroll listener doesn't fight
    isClickScrolling.current = true;
    setActiveId(id);

    // Calculate position: element top minus sticky nav height
    const navHeight = 52;
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight - 8;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    // Release the lock after scroll settles
    if (clickTimeout.current) clearTimeout(clickTimeout.current);
    clickTimeout.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0a] border-b border-[#1a1a1a]">
      <div
        ref={navScrollRef}
        className="overflow-x-auto scrollbar-hide"
      >
        <div className="flex justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 sm:py-3 min-w-max mx-auto">
          {menuData.map((cat) => (
            <button
              key={cat.id}
              id={`nav-${cat.id}`}
              onClick={() => handleClick(cat.id)}
              className={`shrink-0 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                activeId === cat.id
                  ? "bg-gradient-to-r from-[#ff9700] to-[#ff3d00] text-white shadow-sm shadow-[#ff9700]/20"
                  : "bg-[#1a1a1a] border border-[#333] text-white/60 hover:text-white/80 active:bg-[#222]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
