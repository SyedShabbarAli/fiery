"use client";

export default function Embers() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      style={{ contain: "strict" }}
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${3 + (i % 3) * 2}px`,
            height: `${3 + (i % 3) * 2}px`,
            left: `${8 + (i * 7.5) % 90}%`,
            bottom: `-10px`,
            background:
              i % 3 === 0
                ? "#ff3d00"
                : i % 3 === 1
                ? "#ff9700"
                : "#ff6a00",
            animation: `riseEmber ${6 + (i % 4) * 2}s ${i * 0.8}s infinite`,
            opacity: 0,
            willChange: "transform, opacity",
          }}
        />
      ))}
    </div>
  );
}
