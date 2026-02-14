import { ProductGrid } from "@/components/product-grid";
import { AnimateIn } from "@/components/animate-in";
import { site } from "@/lib/site";

export const metadata = {
  title: "Products",
  description: `Browse our product categories — ${site.products
    .map((p) => p.label)
    .join(", ")}. Quality electrical products from trusted brands.`,
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#0c2340] py-14 md:py-20 relative overflow-hidden">
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
        <div className="container relative z-10 mx-auto max-w-4xl px-4 md:px-6">
          <AnimateIn>
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-3 block">
              Our Products
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Product Categories
            </h1>
            <p className="mt-5 text-lg text-white/70 leading-relaxed max-w-2xl">
              Explore our range of {site.products.length} product categories.
              Quality electrical appliances and solutions from trusted brands.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <ProductGrid />
        </div>
      </section>
    </div>
  );
}
