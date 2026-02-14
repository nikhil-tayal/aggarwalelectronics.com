import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ArrowRight,
  Send,
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
  title: "Contact",
  description: `Contact ${site.name} for product enquiries, bulk orders, and support. Call ${site.contact.phone}.`,
};

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    value: site.contact.phone,
    href: `tel:${site.contact.phone.replace(/\s/g, "")}`,
    desc: "Call us for quick enquiries and orders",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: site.contact.phone,
    href: `https://wa.me/${site.contact.whatsapp}`,
    desc: "Chat for product details and bulk quotes",
    color: "bg-emerald-50 text-emerald-600",
    external: true,
  },
  {
    icon: Mail,
    title: "Email",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
    desc: "For detailed enquiries and quotations",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: site.contact.address,
    href: site.contact.mapUrl,
    desc: "Vasundra, Ghaziabad — Get directions on Google Maps",
    color: "bg-rose-50 text-rose-600",
    external: true,
  },
];

export default function ContactPage() {
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
              Get in Touch
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Contact Us
            </h1>
            <p className="mt-5 text-lg text-white/70 leading-relaxed max-w-2xl">
              Get in touch for product enquiries, bulk orders, quotations, or
              expert guidance. Our team is here to help.
            </p>
          </AnimateIn>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 md:px-6 py-14 md:py-20">
        {/* Contact cards */}
        <AnimateStagger
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
          staggerDelay={0.05}
        >
          {contactMethods.map((method, i) => (
            <AnimateStaggerItem key={i}>
              <a
                href={method.href}
                target={method.external ? "_blank" : undefined}
                rel={method.external ? "noopener noreferrer" : undefined}
                className="block"
              >
                <Card className="h-full border border-gray-100 hover:shadow-lg hover:border-[#0c2340]/10 transition-all duration-300 rounded-xl group cursor-pointer">
                  <CardContent className="p-5">
                    <div
                      className={`rounded-xl w-fit p-3 mb-4 ${method.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <method.icon className="h-5 w-5" />
                    </div>
                    <h2 className="font-bold text-[#0c2340] mb-1 text-sm">
                      {method.title}
                    </h2>
                    <p className="text-sm text-gray-700 font-medium mb-2 break-all">
                      {method.value}
                    </p>
                    <p className="text-xs text-gray-500">{method.desc}</p>
                  </CardContent>
                </Card>
              </a>
            </AnimateStaggerItem>
          ))}
        </AnimateStagger>

        {/* Business hours + What to reach out for */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <AnimateIn>
            <Card className="h-full border border-gray-100 rounded-xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="rounded-xl bg-[#0c2340]/5 p-3 text-[#0c2340]">
                    <Clock className="h-5 w-5" />
                  </div>
                  <h2 className="font-bold text-[#0c2340]">Business Hours</h2>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm py-2 border-b border-gray-50">
                    <span className="text-gray-600">Monday - Saturday</span>
                    <span className="font-semibold text-[#0c2340]">
                      9:30 AM - 7:30 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm py-2 border-b border-gray-50">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold text-rose-500">Closed</span>
                  </div>
                  <div className="flex justify-between items-center text-sm py-2">
                    <span className="text-gray-600">Public Holidays</span>
                    <span className="font-semibold text-rose-500">Closed</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  WhatsApp messages are responded to during business hours. For
                  urgent queries, please call directly.
                </p>
              </CardContent>
            </Card>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <Card className="h-full border border-gray-100 rounded-xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="rounded-xl bg-[#0c2340]/5 p-3 text-[#0c2340]">
                    <Send className="h-5 w-5" />
                  </div>
                  <h2 className="font-bold text-[#0c2340]">
                    What You Can Reach Out For
                  </h2>
                </div>
                <ul className="space-y-2.5">
                  {[
                    "Product availability and pricing",
                    "Bulk orders for construction projects",
                    "Quotations for contractors and builders",
                    "Technical guidance on product selection",
                    "Delivery enquiries for Delhi NCR",
                    "After-sales support and returns",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2.5 text-sm text-gray-600"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </AnimateIn>
        </div>

        {/* Action buttons */}
        <AnimateIn delay={0.2} className="mt-10">
          <div className="rounded-2xl bg-gray-50 p-6 md:p-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-bold text-[#0c2340] mb-1">
                Ready to get started?
              </h3>
              <p className="text-sm text-gray-500">
                Contact us now for the best prices on electrical products.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Button
                asChild
                className="bg-[#25D366] hover:bg-[#20bd5a] rounded-lg font-semibold"
              >
                <a
                  href={`https://wa.me/${site.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp Us
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#0c2340] text-[#0c2340] hover:bg-[#0c2340] hover:text-white rounded-lg"
              >
                <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-lg">
                <Link href="/products">
                  Browse Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </AnimateIn>
      </div>
    </div>
  );
}
