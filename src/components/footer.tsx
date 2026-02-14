import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-[#0c2340] text-white">
      {/* Main footer */}
      <div className="container mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white font-bold text-lg">
                AE
              </div>
              <div>
                <p className="font-bold text-sm leading-tight">{site.name}</p>
                <p className="text-[10px] text-emerald-400 uppercase tracking-widest font-medium">
                  {site.tagline}
                </p>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              Join us as we light up homes, power industries, and connect
              communities, driving progress and innovation in the electrical
              sector.
            </p>
            <div className="flex gap-3 pt-1">
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors text-xs font-bold"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors text-xs font-bold"
                aria-label="Instagram"
              >
                in
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors text-xs font-bold"
                aria-label="LinkedIn"
              >
                Li
              </a>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-white/90">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-white transition-colors"
                >
                  Our Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-white/90">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              {site.products.slice(0, 6).map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-white/90">
              Contact Us
            </h4>
            <address className="text-sm text-white/60 not-italic space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-white/40 shrink-0 mt-0.5" />
                <span>{site.contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-white/40 shrink-0" />
                <a
                  href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {site.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-white/40 shrink-0" />
                <a
                  href={`mailto:${site.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {site.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-white/40 shrink-0" />
                <span>{site.contact.hours}</span>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto max-w-6xl px-4 py-5 md:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
            <p>
              &copy; {new Date().getFullYear()} {site.name}. All rights
              reserved.
            </p>
            <p>
              Bhagirath Palace, Chandni Chowk &mdash; India&apos;s largest
              electrical market
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
