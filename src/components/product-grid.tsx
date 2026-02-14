"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateStagger, AnimateStaggerItem } from "@/components/animate-stagger";
import { site } from "@/lib/site";

export function ProductGrid() {
  return (
    <AnimateStagger className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6" staggerDelay={0.05}>
      {site.products.map((product) => (
        <AnimateStaggerItem key={product.id}>
          <Link href={`/products/${product.slug}`}>
            <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-muted group">
              <div className="relative aspect-square overflow-hidden bg-muted">
                <Image
                  src={product.image}
                  alt={product.label}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-4 text-center">
                <span className="font-medium text-sm text-foreground">
                  {product.label}
                </span>
              </CardContent>
            </Card>
          </Link>
        </AnimateStaggerItem>
      ))}
    </AnimateStagger>
  );
}
