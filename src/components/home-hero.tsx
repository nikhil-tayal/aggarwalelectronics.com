"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function HomeHero() {
  return (
    <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px]" />
      </div>
      <div className="container relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.h1
              className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {site.name}
            </motion.h1>
            <motion.p
              className="mt-4 text-lg text-muted-foreground md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {site.tagline}. One-stop solution for switches, lighting, wires,
              inverters, fans, and more.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button asChild size="lg">
                <Link href="/products">Explore Products</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </div>
          <motion.div
            className="relative hidden lg:block rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/images/hero/hero.jpg"
              alt="Electrical products"
              fill
              sizes="(max-width: 1024px) 0, 50vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
