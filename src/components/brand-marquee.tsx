"use client";

import { site } from "@/lib/site";

export function BrandMarquee() {
  // Double the brands array for seamless infinite scroll
  const allBrands = [...site.brands, ...site.brands];

  return (
    <div className="relative overflow-hidden py-4">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#4338ca] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#4338ca] to-transparent z-10 pointer-events-none" />

      {/* Row 1 */}
      <div className="flex animate-marquee whitespace-nowrap mb-4">
        {allBrands.map((brand, i) => (
          <div
            key={`r1-${i}`}
            className="mx-3 inline-flex items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm px-8 py-4 border border-white/10 hover:bg-white/25 transition-colors cursor-default"
          >
            <span className="text-white font-bold text-lg tracking-wide whitespace-nowrap">
              {brand}
            </span>
          </div>
        ))}
      </div>

      {/* Row 2 - reverse direction */}
      <div className="flex animate-marquee-reverse whitespace-nowrap">
        {allBrands.map((brand, i) => (
          <div
            key={`r2-${i}`}
            className="mx-3 inline-flex items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm px-8 py-4 border border-white/10 hover:bg-white/25 transition-colors cursor-default"
          >
            <span className="text-white font-bold text-lg tracking-wide whitespace-nowrap">
              {brand}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
