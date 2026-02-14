import Image from "next/image";
import Link from "next/link";
import {
  Package,
  Truck,
  Shield,
  Headphones,
  FileText,
  Calendar,
  Zap,
  Wrench,
  Building2,
  Star,
  ArrowRight,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimateIn } from "@/components/animate-in";
import {
  AnimateStagger,
  AnimateStaggerItem,
} from "@/components/animate-stagger";
import { HomeHero } from "@/components/home-hero";
import { BrandMarquee } from "@/components/brand-marquee";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { site } from "@/lib/site";

const featureIcons = [
  Package,
  Truck,
  Zap,
  Wrench,
  Shield,
  Headphones,
  FileText,
  Calendar,
  Lightbulb,
];

const sectorIcons = [
  Building2,
  Building2,
  Building2,
  Building2,
  Wrench,
  FileText,
  Package,
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HomeHero />

      {/* Stats bar */}
      <section className="relative -mt-6 z-20">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <div className="rounded-2xl bg-white shadow-xl shadow-black/5 border border-gray-100 p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {site.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-[#0c2340]">
                    {stat.value}
                  </p>
                  <p className="text-xs md:text-sm text-gray-500 mt-1 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission statement */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <AnimateIn>
            <p className="text-center text-lg md:text-xl text-gray-600 leading-relaxed font-light">
              Join us as we{" "}
              <span className="font-medium text-[#0c2340]">
                light up homes
              </span>
              , power industries, and connect communities, driving{" "}
              <span className="font-medium text-[#0c2340]">
                progress and innovation
              </span>{" "}
              in the electrical sector.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-14 md:py-20 bg-gray-50/80">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
            <AnimateIn>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/hero/about-store.jpg"
                  alt="Aggarwal Electronics store"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c2340]/30 to-transparent" />
              </div>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-2 block">
                  About Us
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0c2340] mb-5 leading-tight">
                  Who We Are
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Specializing in the safe and dependable transmission of
                  electric power,{" "}
                  <strong className="text-[#0c2340]">
                    Aggarwal Electronics
                  </strong>{" "}
                  represents authentic, trusted and well-established names in
                  India for cables, wires, switchgears, lighting, switches &
                  automation, conduits & accessories, fans, water geysers, RO
                  systems, chimneys, inverters, batteries, and other electrical
                  components.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Located in Bhagirath Palace &mdash; one of India&apos;s
                  largest electrical markets &mdash; we serve homeowners,
                  contractors, builders, and businesses with quality products at
                  competitive prices.
                </p>
                <Button
                  asChild
                  className="bg-[#0c2340] hover:bg-[#1a3a5c] rounded-lg"
                >
                  <Link href="/about">
                    More About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Create to Connect - Features */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <AnimateIn>
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-2 block">
                Why Choose Us
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0c2340] mb-3 leading-tight">
                Create to Connect
              </h2>
              <p className="text-gray-600">
                Our comprehensive product range and exceptional customer service
                have established us as a trusted partner across industrial,
                commercial, and residential sectors.
              </p>
              <p className="font-semibold text-[#0c2340] mt-3 text-sm">
                Buy Industrial & Commercial electrical products with ease and
                confidence
              </p>
            </div>
          </AnimateIn>
          <AnimateStagger
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            staggerDelay={0.05}
          >
            {site.whyUs.map((item, i) => {
              const Icon = featureIcons[i] ?? Package;
              return (
                <AnimateStaggerItem key={i}>
                  <Card className="h-full border border-gray-100 bg-white hover:shadow-lg hover:border-[#0c2340]/10 transition-all duration-300 group rounded-xl">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="rounded-xl bg-[#0c2340]/5 p-3 text-[#0c2340] group-hover:bg-[#0c2340] group-hover:text-white transition-colors duration-300 shrink-0">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#0c2340] mb-1.5 text-sm">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-500 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimateStaggerItem>
              );
            })}
          </AnimateStagger>
          <AnimateIn delay={0.3} className="mt-8 text-center">
            <Button
              variant="outline"
              asChild
              className="border-[#0c2340] text-[#0c2340] hover:bg-[#0c2340] hover:text-white rounded-lg"
            >
              <Link href="/products">
                View Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimateIn>
        </div>
      </section>

      {/* Client sectors */}
      <section className="py-14 md:py-20 bg-gray-50/80">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <AnimateIn>
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-2 block">
                Our Clients
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0c2340] mb-3">
                Our comprehensive solutions serve various sectors
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our ability to meet the unique needs of such a broad spectrum of
                clients is a testament to our versatility, reliability, and
                commitment to quality.
              </p>
            </div>
          </AnimateIn>
          <AnimateStagger
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5"
            staggerDelay={0.05}
          >
            {site.clientSectors.map((sector, i) => (
              <AnimateStaggerItem key={i}>
                <div className="group relative overflow-hidden rounded-xl bg-white border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={sector.image}
                      alt={sector.title}
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c2340]/80 via-[#0c2340]/20 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                    <span className="text-white text-xs md:text-sm font-semibold leading-tight block">
                      {sector.title}
                    </span>
                  </div>
                </div>
              </AnimateStaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* Our Brands - gradient section with marquee */}
      <section className="py-14 md:py-20 bg-gradient-to-br from-[#4338ca] via-[#4f46e5] to-[#6366f1] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
        <div className="relative z-10">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <AnimateIn>
              <div className="text-center mb-10">
                <span className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-2 block">
                  Trusted Partners
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Our Brands
                </h2>
                <p className="text-white/70 max-w-lg mx-auto text-sm">
                  We stock products from India&apos;s most trusted and
                  certified electrical brands
                </p>
              </div>
            </AnimateIn>
          </div>
          <BrandMarquee />
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <AnimateIn delay={0.2} className="mt-8 text-center">
              <Button
                asChild
                className="bg-white text-[#4338ca] hover:bg-white/90 rounded-lg font-semibold"
              >
                <Link href="/products">
                  View All Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Product spotlight - wires & cables */}
      <section className="py-14 md:py-20 bg-[#0c2340] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(45deg, white 25%, transparent 25%, transparent 50%, white 50%, white 75%, transparent 75%)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
        <div className="container relative z-10 mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <AnimateIn>
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-2 block">
                Featured Category
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                Quality Wires & Cables
              </h2>
              <p className="text-white/60 mb-6 leading-relaxed">
                Premium electrical wires and cables for homes, offices, and
                industries. FR, HRFR, and ZHFR rated wires from Polycab, KEI,
                Finolex and more. Genuine products with proper certification at
                competitive prices.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-white text-[#0c2340] hover:bg-gray-100 rounded-lg font-semibold"
                >
                  <Link href="/products/wires">
                    Explore Wires & Cables
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 rounded-lg"
                >
                  <a
                    href={`https://wa.me/${site.contact.whatsapp}?text=Hi, I need a quote for wires and cables`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Quote
                  </a>
                </Button>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/products/wires.jpg"
                  alt="Electrical wires and cables"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* One Stop Solution */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto max-w-4xl px-4 md:px-6 text-center">
          <AnimateIn>
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-2 block">
              Your Trusted Partner
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0c2340] mb-4">
              One Stop Solution Provider for all your Needs
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              We fulfill customer requirements with certified products,
              competitive prices, prompt delivery for a delightful and happy
              experience. Whether it&apos;s a small home project or a large
              commercial installation, we&apos;ve got you covered.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="bg-[#0c2340] hover:bg-[#1a3a5c] rounded-lg font-semibold"
              >
                <Link href="/about">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#0c2340] text-[#0c2340] hover:bg-[#0c2340] hover:text-white rounded-lg"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Innovation section */}
      <section className="py-14 md:py-20 bg-gray-50/80">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <AnimateIn>
            <div className="relative aspect-[21/8] rounded-2xl overflow-hidden mb-10 shadow-lg">
              <Image
                src="/images/hero/innovation.jpg"
                alt="Innovation in electrical technology"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0c2340]/70 to-transparent flex items-center">
                <div className="p-6 md:p-10 max-w-lg">
                  <h2 className="text-xl md:text-3xl font-bold text-white mb-2">
                    Driving Innovation
                  </h2>
                  <p className="text-white/80 text-sm md:text-base">
                    Bringing cutting-edge electrical solutions to our customers
                  </p>
                </div>
              </div>
            </div>
          </AnimateIn>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <AnimateIn>
              <h3 className="text-lg font-bold text-[#0c2340] mb-3">
                Our Commitment to Innovation
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                We are excited to collaborate with leading brands to bring
                cutting-edge solutions to our customers, ensuring they benefit
                from the latest advancements in technology. Our dedication to
                continuous innovation and quality ensures that we stay ahead of
                industry trends.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h3 className="text-lg font-bold text-[#0c2340] mb-3">
                Paradigm Shift Into Technology
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Over the years, Aggarwal Electronics has diversified its focus
                towards innovative solutions to meet the evolving needs of our
                customers. From smart home automation to energy-efficient
                lighting, we offer products that enhance performance and
                reliability.
              </p>
            </AnimateIn>
          </div>
          <AnimateIn delay={0.2} className="mt-8">
            <Button
              variant="outline"
              asChild
              className="border-[#0c2340] text-[#0c2340] hover:bg-[#0c2340] hover:text-white rounded-lg"
            >
              <Link href="/products">
                Our Advanced Offering
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimateIn>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <AnimateIn>
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-2 block">
                Customer Reviews
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0c2340]">
                Read From Satisfied Customers
              </h2>
            </div>
          </AnimateIn>
          <AnimateStagger
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
            staggerDelay={0.08}
          >
            {site.testimonials.map((t, i) => (
              <AnimateStaggerItem key={i}>
                <Card className="h-full border border-gray-100 hover:shadow-lg transition-all duration-300 rounded-xl">
                  <CardContent className="p-6">
                    {/* Stars */}
                    <div className="flex gap-0.5 mb-4">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star
                          key={j}
                          className="h-4 w-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <div className="h-9 w-9 rounded-full bg-[#0c2340] flex items-center justify-center text-white text-xs font-bold">
                        {t.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-[#0c2340] text-sm">
                          {t.author}
                        </p>
                        {t.company && (
                          <p className="text-xs text-gray-500">{t.company}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimateStaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* Expert CTA */}
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
        <div className="container relative z-10 mx-auto max-w-3xl px-4 md:px-6 text-center">
          <AnimateIn>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Get Expert Guidance with Aggarwal Electronics
            </h2>
            <p className="text-white/70 mb-8 leading-relaxed">
              Elevate your home and business with customised electrical
              solutions. Our team of experts will help you choose the right
              products for your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#0c2340] hover:bg-gray-100 rounded-lg font-semibold"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 rounded-lg font-semibold"
              >
                <a
                  href={`https://wa.me/${site.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20 bg-gray-50/80">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <AnimateIn>
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-2 block">
                Common Questions
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0c2340]">
                Frequently Asked Questions
              </h2>
            </div>
          </AnimateIn>
          <Accordion type="single" collapsible className="space-y-3">
            {site.faq.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-gray-200 rounded-xl px-5 bg-white data-[state=open]:border-[#0c2340]/20 data-[state=open]:shadow-sm transition-all"
              >
                <AccordionTrigger className="text-left font-semibold text-[#0c2340] text-sm hover:no-underline hover:text-[#1a3a5c] py-4">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-sm leading-relaxed pb-4">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-14 md:py-20 border-t">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <div className="prose prose-sm prose-gray max-w-none">
            <h2 className="text-xl font-bold text-[#0c2340] mb-4">
              Aggarwal Electronics &ndash; Your Trusted Electrical Wholesale
              Supplier in Delhi
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Welcome to Aggarwal Electronics &ndash; the leading supplier of
              electrical goods and materials in Bhagirath Palace, Chandni Chowk.
              We specialize in wires, cables, switches, panels, lighting
              solutions, and more for homes, offices, shops, factories, and
              commercial buildings.
            </p>
            <h3 className="text-lg font-semibold text-[#0c2340] mb-3">
              Top Electrical Supplies at Aggarwal Electronics
            </h3>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-1 text-sm text-gray-600 mb-6">
              {[
                "House wires and industrial cables",
                "Switches, sockets, and MCBs",
                "Concealed wiring products",
                "Distribution boards and panels",
                "LED lights, bulbs, and tube lights",
                "Ceiling fans and exhaust fans",
                "Water geysers and RO systems",
                "Kitchen chimneys",
                "Inverters and batteries",
                "Smart home automation",
              ].map((item, i) => (
                <p key={i} className="flex items-center gap-2 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0c2340]/40 shrink-0" />
                  {item}
                </p>
              ))}
            </div>
            <h3 className="text-lg font-semibold text-[#0c2340] mb-3">
              Why Aggarwal Electronics?
            </h3>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-1 text-sm text-gray-600 mb-6">
              {[
                "Wholesale pricing with quality assurance",
                "Direct supplier for branded goods",
                "Large inventory with ready stock",
                "Location advantage in Bhagirath Palace",
                "Personalized support for bulk buyers",
                "Delhi NCR delivery available",
              ].map((item, i) => (
                <p key={i} className="flex items-center gap-2 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/60 shrink-0" />
                  {item}
                </p>
              ))}
            </div>
            <p className="text-gray-500 text-xs leading-relaxed">
              We supply across Delhi NCR including Connaught Place, Karol Bagh,
              Rohini, Laxmi Nagar, Mayur Vihar, Dwarka, Noida, Ghaziabad, and
              Gurgaon. Bulk transport can be arranged for projects across North
              India.
            </p>
          </div>
        </div>
      </section>

      <WhatsAppFloat />
    </div>
  );
}
