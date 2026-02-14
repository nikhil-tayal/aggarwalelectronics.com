import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ProductGrid } from "@/components/product-grid";
import { site } from "@/lib/site";

export const metadata = {
  title: "Products",
  description: `Browse our product categories — ${site.products
    .map((p) => p.label)
    .join(", ")}.`,
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl mb-12">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Products
          </h1>
          <p className="mt-3 text-muted-foreground">
            Explore our range of electrical appliances and solutions.
          </p>
        </div>
        <ProductGrid />
      </div>
    </div>
  );
}
