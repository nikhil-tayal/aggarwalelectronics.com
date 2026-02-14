import Link from "next/link";
import { Zap } from "lucide-react";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold text-foreground"
            >
              <Zap className="h-5 w-5 text-primary" />
              {site.name}
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              {site.tagline}. Quality electrical products for home and industry.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-3">Products</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {site.products.slice(0, 6).map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="hover:text-foreground"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/products" className="hover:text-foreground">
                  View all →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-3">Contact</h4>
            <address className="text-sm text-muted-foreground not-italic space-y-1">
              <p>{site.contact.address}</p>
              <p>
                <a
                  href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                  className="hover:text-foreground"
                >
                  {site.contact.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="hover:text-foreground"
                >
                  {site.contact.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
