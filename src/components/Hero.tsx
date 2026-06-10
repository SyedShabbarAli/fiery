"use client";

import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    image: "/images/WhatsApp Image 2026-06-09 at 8.02.48 PM.jpeg",
    title: "DANGEROUSLY ADDICTIVE",
    subtitle: "Crispy. Bold. Fiery. The best fried chicken in Lahore.",
  },
  {
    image: "/images/WhatsApp Image 2026-06-09 at 8.03.23 PM.jpeg",
    title: "BURGERS & PRIME BEEF",
    subtitle: "Golden fried or grilled — stacked with bold flavors.",
  },
  {
    image: "/images/WhatsApp Image 2026-06-09 at 8.04.35 PM.jpeg",
    title: "WINGS & TENDERS",
    subtitle: "Tossed in your choice of Mild, Spicy, or Fiery.",
  },
  {
    image: "/images/WhatsApp Image 2026-06-09 at 8.04.20 PM.jpeg",
    title: "CRISPY CHICKEN",
    subtitle: "From 2 pieces to a full 10-piece family bucket.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 600);
    },
    [isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-[200px] sm:h-[260px] md:h-[320px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === current ? "opacity-100 z-[2]" : "opacity-0 z-[1]"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: `url('${slide.image}')` }}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/75 to-[#0a0a0a]/40" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
            <h2
              className="text-3xl sm:text-5xl md:text-6xl tracking-tight mb-1 sm:mb-2"
              style={{
                fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                background: "linear-gradient(135deg, #ff9700, #ff3d00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {slide.title}
            </h2>
            <p className="text-white/50 text-xs sm:text-sm md:text-base max-w-md">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Dot indicators */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-1.5 sm:gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 sm:w-8 h-2 sm:h-2.5 bg-gradient-to-r from-[#ff9700] to-[#ff3d00]"
                : "w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/25 hover:bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Arrow buttons (tablet+) */}
      <button
        onClick={() => goTo((current - 1 + slides.length) % slides.length)}
        className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 items-center justify-center rounded-full bg-black/40 text-white/60 hover:text-white hover:bg-black/60 transition-colors"
        aria-label="Previous slide"
      >
        <i className="fa-solid fa-chevron-left text-sm" />
      </button>
      <button
        onClick={() => goTo((current + 1) % slides.length)}
        className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 items-center justify-center rounded-full bg-black/40 text-white/60 hover:text-white hover:bg-black/60 transition-colors"
        aria-label="Next slide"
      >
        <i className="fa-solid fa-chevron-right text-sm" />
      </button>

      {/* Bottom fade to match bg */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#0a0a0a] to-transparent z-[3] pointer-events-none" />
    </section>
  );
}
