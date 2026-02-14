import Image from "next/image";
import Link from "next/link";
import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateIn } from "@/components/animate-in";
import { AnimateStagger, AnimateStaggerItem } from "@/components/animate-stagger";
import { site } from "@/lib/site";
import { HomeHero } from "@/components/home-hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero with image */}
      <HomeHero />

      {/* Product categories with images */}
      <section className="py-16 md:py-24 border-t">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <AnimateIn>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Products by Category
              </h2>
              <p className="mt-3 text-muted-foreground">
                Switches, sockets, lighting, wires, inverters, fans, and more —
                all under one roof.
              </p>
            </div>
          </AnimateIn>
          <AnimateStagger className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
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
          <AnimateIn delay={0.2} className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link href="/products">View All Products</Link>
            </Button>
          </AnimateIn>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 md:py-24 bg-muted/30 border-t">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <AnimateIn>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Why Choose Us
              </h2>
              <p className="mt-3 text-muted-foreground">
                Quality products, competitive pricing, and expert support.
              </p>
            </div>
          </AnimateIn>
          <AnimateStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.08}>
            {site.whyUs.map((item, i) => (
              <AnimateStaggerItem key={i}>
                <Card className="h-full border-muted bg-background transition-shadow hover:shadow-md">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="rounded-lg bg-primary/10 p-2 text-primary">
                        <Zap className="h-5 w-5" />
                      </div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimateStaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* Stats section */}
      <section className="py-16 md:py-20 border-t">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <AnimateIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">15+</p>
                <p className="mt-1 text-sm text-muted-foreground">Product Categories</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">1000+</p>
                <p className="mt-1 text-sm text-muted-foreground">Products Available</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">50+</p>
                <p className="mt-1 text-sm text-muted-foreground">Trusted Brands</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">24/7</p>
                <p className="mt-1 text-sm text-muted-foreground">Expert Support</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <AnimateIn>
            <div className="rounded-2xl border bg-muted/30 p-8 md:p-12 text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Ready to Get Started?
              </h2>
              <p className="mt-3 text-muted-foreground">
                Contact us for product enquiries, bulk orders, or expert guidance.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/about">About Us</Link>
                </Button>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
