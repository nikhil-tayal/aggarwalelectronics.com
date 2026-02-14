import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
    description: `${product.label} — quality electrical products from ${site.name}.`,
  };
}

export default async function ProductCategoryPage({ params }: Props) {
  const { slug } = await params;
  const product = site.products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        <Button variant="ghost" size="sm" asChild className="mb-8 -ml-2">
          <Link href="/products" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
        </Button>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="relative aspect-square md:aspect-[4/3] rounded-xl overflow-hidden bg-muted">
            <Image
              src={product.image}
              alt={product.label}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {product.label}
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Quality {product.label.toLowerCase()} from trusted brands. We offer
              a wide range of options to suit your home, office, or industrial
              needs. Contact us for availability, pricing, and bulk orders.
            </p>
            <div className="mt-8 rounded-lg border bg-muted/30 p-6">
              <p className="text-sm text-muted-foreground">
                For product enquiries and quotations, please{" "}
                <Link
                  href="/contact"
                  className="font-medium text-foreground underline underline-offset-4"
                >
                  get in touch
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
