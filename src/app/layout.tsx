import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Electrical Appliances & Solutions | Vasundra, Ghaziabad`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "electrical shop ghaziabad",
    "vasundra electrical",
    "switches",
    "wires",
    "lighting",
    "fans",
    "inverters",
    "aggarwal electricals",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
