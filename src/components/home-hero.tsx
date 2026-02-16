"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import { HeroCarousel } from "@/components/hero-carousel";
import { Button } from "@/components/ui/button";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[#0c2340]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Hero content */}
        <div className="container mx-auto max-w-6xl px-4 pt-12 pb-6 md:pt-20 md:pb-10 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <motion.p
              className="text-emerald-400 italic text-sm md:text-base mb-3 font-medium"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              {site.heroTagline}
            </motion.p>
            <motion.h1
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {site.name}
            </motion.h1>
            <motion.p
              className="mt-4 text-white/70 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {site.heroSubtext}
            </motion.p>
            <motion.div
              className="mt-6 flex flex-wrap items-center justify-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-white text-[#0c2340] hover:bg-gray-100 font-semibold"
              >
                <Link href="/products">
                  Explore Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-[#0c2340] hover:bg-black/10 hover:text-white font-semibold"
              >
                <a
                  href={`https://wa.me/${site.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Quote
                </a>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Hero carousel */}
        <motion.div
          className="container mx-auto max-w-5xl px-4 md:px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <HeroCarousel />
        </motion.div>

        {/* Product categories strip */}
        <div className="mt-8 pb-10 md:pb-14">
          <motion.div
            className="container mx-auto max-w-6xl px-4 md:px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {site.products.slice(0, 10).map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.05 }}
                >
                  <Link
                    href={`/products/${p.slug}`}
                    className="flex shrink-0 flex-col items-center gap-2 rounded-xl bg-white/10 backdrop-blur-sm px-4 py-3 transition-all duration-300 hover:bg-white/20 hover:scale-105 min-w-[90px] border border-white/5"
                  >
                    <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white/10">
                      <Image
                        src={p.image}
                        alt={p.label}
                        width={40}
                        height={40}
                        className="rounded-lg object-cover w-full h-full"
                      />
                    </div>
                    <span className="text-[11px] font-medium text-white/90 text-center leading-tight">
                      {p.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <Link
                  href="/products"
                  className="flex shrink-0 items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-xs font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/40 min-w-[100px]"
                >
                  View All
                  <ArrowRight className="ml-1.5 h-3 w-3" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
