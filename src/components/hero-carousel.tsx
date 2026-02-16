"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import slide1 from "@/assets/carousel/slide-1.jpg";
import slide2 from "@/assets/carousel/slide-2.webp";
import slide3 from "@/assets/carousel/slide-3.png";
import slide4 from "@/assets/carousel/slide-4.jpg";
import slide5 from "@/assets/carousel/slide-5.jpg";

const slides = [
  {
    src: slide1,
    alt: "Aggarwal Electricals - Electrical products",
    objectFit: "cover" as const,
  },
  {
    src: slide2,
    alt: "Quality switches and wiring",
    objectFit: "cover" as const,
  },
  {
    src: slide3,
    alt: "Lighting and electrical solutions",
    objectFit: "contain" as const,
  },
  {
    src: slide4,
    alt: "Wires, cables and switchgear",
    objectFit: "contain" as const,
  },
  {
    src: slide5,
    alt: "Your trusted electrical partner",
    objectFit: "cover" as const,
  },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <div
      className="relative w-[90%] mx-auto overflow-hidden group shadow-2xl shadow-black/20 bg-black/20 rounded-xl"
      style={{ aspectRatio: "21/9" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full min-w-0 min-h-0"
        >
          <div className="relative w-full h-full min-w-full min-h-full">
            <Image
              src={slides[current].src}
              alt={slides[current].alt}
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-center min-w-full min-h-full"
              style={{ objectFit: slides[current].objectFit }}
              priority={current === 0}
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/40"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/40"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 h-2 bg-white"
                : "w-2 h-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
