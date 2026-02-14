import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateIn } from "@/components/animate-in";
import {
  AnimateStagger,
  AnimateStaggerItem,
} from "@/components/animate-stagger";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return site.products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = site.products.find((p) => p.slug === slug);
  if (!product) return { title: "Product" };
  return {
    title: product.label,
    description: `${product.label} — quality electrical products from ${site.name}. ${product.description}`,
  };
}

export default async function ProductCategoryPage({ params }: Props) {
  const { slug } = await params;
  const product = site.products.find((p) => p.slug === slug);
  if (!product) notFound();

  const relatedProducts = site.products
    .filter((p) => p.slug !== slug)
    .slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Breadcrumb header */}
      <section className="bg-[#0c2340] py-10 md:py-14 relative overflow-hidden">
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
        <div className="container relative z-10 mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex items-center gap-2 text-sm text-white/50 mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/products"
              className="hover:text-white transition-colors"
            >
              Products
            </Link>
            <span>/</span>
            <span className="text-white">{product.label}</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-white">
            {product.label}
          </h1>
        </div>
      </section>

      {/* Product detail */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-start">
            <AnimateIn>
              <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
                <Image
                  src={product.image}
                  alt={product.label}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-2 block">
                  Product Category
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0c2340] mb-4">
                  {product.label}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Key features */}
                <div className="rounded-xl bg-gray-50 p-5 mb-6">
                  <h3 className="font-semibold text-[#0c2340] text-sm mb-3">
                    Why buy from us?
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "100% genuine and branded products",
                      "Competitive wholesale pricing",
                      "Expert guidance on product selection",
                      "Same-day dispatch available",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex flex-wrap gap-3">
                  <Button
                    asChild
                    className="bg-[#25D366] hover:bg-[#20bd5a] rounded-lg font-semibold"
                  >
                    <a
                      href={`https://wa.me/${site.contact.whatsapp}?text=Hi, I need a quote for ${product.label}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Get Quote on WhatsApp
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-[#0c2340] text-[#0c2340] hover:bg-[#0c2340] hover:text-white rounded-lg"
                  >
                    <a
                      href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </a>
                  </Button>
                </div>

                <p className="mt-4 text-xs text-gray-400">
                  For bulk orders, project-based quotations, and delivery
                  enquiries, please contact us directly.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="py-14 md:py-20 bg-gray-50/80 border-t">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <AnimateIn>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#0c2340]">
                Explore More Categories
              </h2>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="rounded-lg text-xs"
              >
                <Link href="/products">
                  View All
                  <ArrowRight className="ml-1.5 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </AnimateIn>
          <AnimateStagger
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5"
            staggerDelay={0.05}
          >
            {relatedProducts.map((p) => (
              <AnimateStaggerItem key={p.id}>
                <Link href={`/products/${p.slug}`}>
                  <Card className="h-full overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 rounded-xl group">
                    <div className="relative aspect-square overflow-hidden bg-gray-100">
                      <Image
                        src={p.image}
                        alt={p.label}
                        fill
                        sizes="(max-width: 640px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-3 text-center">
                      <span className="font-semibold text-sm text-[#0c2340]">
                        {p.label}
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </AnimateStaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>
    </div>
  );
}
