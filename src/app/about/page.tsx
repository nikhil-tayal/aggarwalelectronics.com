import Image from "next/image";
import Link from "next/link";
import {
  Check,
  Zap,
  Shield,
  Users,
  Target,
  ArrowRight,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateIn } from "@/components/animate-in";
import {
  AnimateStagger,
  AnimateStaggerItem,
} from "@/components/animate-stagger";
import { site } from "@/lib/site";

export const metadata = {
  title: "About",
  description: `About ${site.name} — ${site.tagline}. Your trusted electrical supplier in Vasundra, Ghaziabad.`,
};

const values = [
  {
    icon: Zap,
    title: "Quality First",
    desc: "We deal only in genuine, branded, and certified electrical products to ensure safety and durability for every project.",
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    desc: "Transparent pricing, proper bills, and honest guidance. No hidden costs, no counterfeit products — just genuine quality.",
  },
  {
    icon: Users,
    title: "Expert Support",
    desc: "Our experienced team guides you through product selection, technical specifications, and installation advice.",
  },
  {
    icon: Target,
    title: "Customer Focus",
    desc: "Whether you're a homeowner, contractor, or business — we tailor our service to your unique needs and budget.",
  },
];

export default function AboutPage() {
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
              About Us
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              About {site.name}
            </h1>
            <p className="mt-5 text-lg text-white/70 leading-relaxed max-w-2xl">
              {site.tagline} &mdash; We supply a wide range of electrical
              appliances and solutions for homes, offices, and industries across
              Delhi NCR.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Story with image */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
            <AnimateIn>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/hero/about-store.jpg"
                  alt="Aggarwal Electricals store"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-2 block">
                Our Story
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0c2340] mb-5 leading-tight">
                A Legacy of Trust in Electrical Solutions
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-[#0c2340]">
                    Aggarwal Electricals
                  </strong>{" "}
                  is a trusted name in the electrical wholesale and retail
                  market, serving customers from our location in Vasundra,
                  Ghaziabad. For years, we have been helping homeowners,
                  contractors, builders, and businesses find the right
                  electrical products at competitive prices.
                </p>
                <p>
                  From switches, sockets, and automation to lighting, wires,
                  inverters, batteries, water geysers, RO systems, chimneys,
                  switchgears, conduit and flexible pipes, fans, and fancy
                  lights &mdash; we offer quality products from trusted brands
                  under one roof.
                </p>
                <p>
                  Our team is dedicated to helping you choose the right products
                  for your needs, with transparent pricing and reliable support
                  at every step.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-gray-50/80">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {site.stats.map((stat, i) => (
              <AnimateIn key={i} delay={i * 0.05}>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-[#0c2340]">
                    {stat.value}
                  </p>
                  <p className="text-xs md:text-sm text-gray-500 mt-1 font-medium">
                    {stat.label}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <AnimateIn>
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-2 block">
                Our Values
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0c2340]">
                What We Stand For
              </h2>
            </div>
          </AnimateIn>
          <AnimateStagger
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
            staggerDelay={0.05}
          >
            {values.map((v, i) => (
              <AnimateStaggerItem key={i}>
                <Card className="h-full border border-gray-100 hover:shadow-lg transition-all duration-300 rounded-xl group">
                  <CardContent className="p-6">
                    <div className="rounded-xl bg-[#0c2340]/5 w-fit p-3 text-[#0c2340] mb-4 group-hover:bg-[#0c2340] group-hover:text-white transition-colors duration-300">
                      <v.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-[#0c2340] mb-2 text-sm">
                      {v.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {v.desc}
                    </p>
                  </CardContent>
                </Card>
              </AnimateStaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-14 md:py-20 bg-gray-50/80">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <AnimateIn>
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-2 block">
                Product Range
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0c2340]">
                What We Offer
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Switches, sockets, and automation systems",
                "LED lighting, bulbs, and fancy lights",
                "Wires, cables, conduit & flexible pipes",
                "Inverters, batteries, and backup solutions",
                "Water geysers, RO systems, and chimneys",
                "Switchgears, MCBs, distribution boards",
                "Ceiling fans and exhaust fans",
                "Bulk orders for contractors and builders",
                "Same-day dispatch for urgent requirements",
                "Delivery across Delhi NCR",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 border border-gray-100"
                >
                  <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 bg-[#0c2340] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "30px 30px",
            }}
          />
        </div>
        <div className="container relative z-10 mx-auto max-w-2xl px-4 md:px-6 text-center">
          <AnimateIn>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Find the Right Products?
            </h2>
            <p className="text-white/70 mb-8">
              Contact us for product availability, pricing, and expert guidance
              on your electrical needs.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#0c2340] hover:bg-gray-100 rounded-lg font-semibold"
              >
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 rounded-lg"
              >
                <Link href="/products">Browse Products</Link>
              </Button>
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
