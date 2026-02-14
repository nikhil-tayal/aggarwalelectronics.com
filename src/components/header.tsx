"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-[#081a2f] text-white/80 text-xs">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-1.5 md:px-6">
          <div className="flex items-center gap-4">
            <a
              href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="h-3 w-3" />
              <span>{site.contact.phone}</span>
            </a>
            <span className="hidden sm:inline text-white/40">|</span>
            <span className="hidden sm:inline">{site.contact.hours}</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${site.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              WhatsApp
            </a>
            <span className="text-white/40">|</span>
            <a
              href={`mailto:${site.contact.email}`}
              className="hover:text-white transition-colors hidden sm:inline"
            >
              Email
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={cn(
          "transition-all duration-300 border-b",
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-[#0c2340] text-white font-bold text-lg transition-transform group-hover:scale-105">
              AE
            </div>
            <div className="hidden sm:block">
              <span className="block text-sm font-bold text-[#0c2340] leading-tight tracking-tight">
                {site.name}
              </span>
              <span className="block text-[10px] font-medium text-emerald-600 uppercase tracking-widest">
                {site.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-[#0c2340] rounded-lg hover:bg-gray-50"
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              size="sm"
              className="ml-2 bg-[#0c2340] hover:bg-[#1a3a5c] text-white"
            >
              <a
                href={`https://wa.me/${site.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Quote
              </a>
            </Button>
          </nav>

          {/* Mobile menu */}
          <div className="flex items-center gap-2 md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <SheetHeader>
                  <SheetTitle className="text-left">
                    <span className="text-[#0c2340] font-bold">
                      {site.name}
                    </span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="mt-8 flex flex-col gap-1">
                  {site.nav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-[#0c2340]"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="mt-4 pt-4 border-t">
                    <Button
                      asChild
                      className="w-full bg-[#0c2340] hover:bg-[#1a3a5c]"
                    >
                      <a
                        href={`https://wa.me/${site.contact.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get Quote on WhatsApp
                      </a>
                    </Button>
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-gray-500">
                    <a
                      href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-2 hover:text-[#0c2340]"
                    >
                      <Phone className="h-4 w-4" />
                      {site.contact.phone}
                    </a>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
