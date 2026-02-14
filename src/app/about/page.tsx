import Image from "next/image";
import Link from "next/link";
import { Check, Zap, Shield, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateIn } from "@/components/animate-in";
import { site } from "@/lib/site";

export const metadata = {
  title: "About",
  description: `About ${site.name} — ${site.tagline}`,
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24 border-b">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <AnimateIn>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              About {site.name}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {site.tagline}. We supply a wide range of electrical appliances and
              solutions for homes, offices, and industries across Delhi NCR.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <AnimateIn>
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Our Story
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                {site.name} is a trusted name in the electrical wholesale and
                retail market, serving customers from Bhagirath Palace — one of
                India&apos;s largest electrical markets. For years, we have been
                helping homeowners, contractors, builders, and businesses find
                the right electrical products at competitive prices.
              </p>
              <p>
                From switches, sockets, and automation to lighting, wires,
                inverters, batteries, water geysers, RO systems, chimneys,
                switchgears, conduit and flexible pipes, fans, and fancy lights —
                we offer quality products from trusted brands under one roof. Our
                team is dedicated to helping you choose the right products for
                your needs, with transparent pricing and reliable support.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-muted/30 border-t">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <AnimateIn>
            <h2 className="text-2xl font-semibold text-foreground text-center mb-12">
              What We Stand For
            </h2>
          </AnimateIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimateIn delay={0.05}>
              <Card className="h-full border-muted bg-background">
                <CardContent className="pt-6">
                  <div className="rounded-lg bg-primary/10 w-fit p-3 text-primary mb-4">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Quality First</h3>
                  <p className="text-sm text-muted-foreground">
                    We deal only in genuine, branded, and certified electrical
                    products to ensure safety and durability.
                  </p>
                </CardContent>
              </Card>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <Card className="h-full border-muted bg-background">
                <CardContent className="pt-6">
                  <div className="rounded-lg bg-primary/10 w-fit p-3 text-primary mb-4">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Trust & Transparency</h3>
                  <p className="text-sm text-muted-foreground">
                    Transparent pricing, proper bills, and honest guidance. No
                    hidden costs or duplicate products.
                  </p>
                </CardContent>
              </Card>
            </AnimateIn>
            <AnimateIn delay={0.15}>
              <Card className="h-full border-muted bg-background">
                <CardContent className="pt-6">
                  <div className="rounded-lg bg-primary/10 w-fit p-3 text-primary mb-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Expert Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Our team guides you through product selection, technical
                    specs, and installation advice.
                  </p>
                </CardContent>
              </Card>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <Card className="h-full border-muted bg-background">
                <CardContent className="pt-6">
                  <div className="rounded-lg bg-primary/10 w-fit p-3 text-primary mb-4">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Customer Focus</h3>
                  <p className="text-sm text-muted-foreground">
                    Whether you&apos;re a homeowner, contractor, or business, we
                    tailor our service to your needs.
                  </p>
                </CardContent>
              </Card>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-16 md:py-24 border-t">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <AnimateIn>
            <h2 className="text-2xl font-semibold text-foreground mb-8">
              What We Offer
            </h2>
            <ul className="space-y-4 text-muted-foreground">
              {[
                "Switches, sockets, and automation systems",
                "LED lighting, bulbs, and fancy lights",
                "Wires, cables, conduit pipes, and flexible pipes",
                "Inverters, batteries, and backup solutions",
                "Water geysers, RO systems, and chimneys",
                "Switchgears, MCBs, and distribution boards",
                "Ceiling fans and exhaust fans",
                "Bulk orders for contractors and builders",
                "Same-day dispatch for urgent requirements",
                "Delivery across Delhi NCR",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t bg-muted/30">
        <div className="container mx-auto max-w-2xl px-4 md:px-6 text-center">
          <AnimateIn>
            <p className="text-lg text-muted-foreground mb-6">
              Ready to find the right electrical products for your project?
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
