"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  AnimateStagger,
  AnimateStaggerItem,
} from "@/components/animate-stagger";
import { site } from "@/lib/site";

export function ProductGrid() {
  return (
    <AnimateStagger
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5"
      staggerDelay={0.04}
    >
      {site.products.map((product) => (
        <AnimateStaggerItem key={product.id}>
          <Link href={`/products/${product.slug}`}>
            <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 group rounded-xl">
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                <Image
                  src={product.image}
                  alt={product.label}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-3 md:p-4 text-center">
                <span className="font-semibold text-sm text-[#0c2340] group-hover:text-[#1a3a5c] transition-colors">
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
