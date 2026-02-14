export const site = {
  name: "Aggarwal Electronics",
  tagline: "Your trusted partner for electrical appliances & solutions",
  description:
    "One-stop solution for switches, lighting, wires, inverters, fans, and more. Quality electrical products for home and industry.",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
  ],
  products: [
    { id: "switch", label: "Switch", slug: "switch", image: "/images/products/switch.jpg" },
    { id: "socket", label: "Socket", slug: "socket", image: "/images/products/socket.jpg" },
    { id: "automation", label: "Automation", slug: "automation", image: "/images/products/automation.jpg" },
    { id: "lighting", label: "Lighting", slug: "lighting", image: "/images/products/lighting.jpg" },
    { id: "wires", label: "Wires", slug: "wires", image: "/images/products/wires.jpg" },
    { id: "inverters", label: "Inverters", slug: "inverters", image: "/images/products/inverters.jpg" },
    { id: "batteries", label: "Batteries", slug: "batteries", image: "/images/products/batteries.jpg" },
    { id: "water-geyser", label: "Water Geyser", slug: "water-geyser", image: "/images/products/water-geyser.jpg" },
    { id: "water-ro", label: "Water RO", slug: "water-ro", image: "/images/products/water-ro.jpg" },
    { id: "chimneys", label: "Chimneys", slug: "chimneys", image: "/images/products/chimneys.jpg" },
    { id: "switchgears", label: "Switchgears", slug: "switchgears", image: "/images/products/switchgears.jpg" },
    { id: "conduit-pipe", label: "Conduit Pipe", slug: "conduit-pipe", image: "/images/products/conduit-pipe.jpg" },
    { id: "flexible-pipe", label: "Flexible Pipe", slug: "flexible-pipe", image: "/images/products/flexible-pipe.jpg" },
    { id: "fans", label: "Fans", slug: "fans", image: "/images/products/fans.jpg" },
    { id: "fancy-lights", label: "Fancy Lights", slug: "fancy-lights", image: "/images/products/fancy-lights.jpg" },
  ],
  whyUs: [
    {
      title: "Wide Product Range",
      description:
        "Switches, sockets, lighting, wires, inverters, fans, and more — all under one roof.",
    },
    {
      title: "Quality Assured",
      description:
        "Genuine brands and certified products for safety and durability.",
    },
    {
      title: "Competitive Pricing",
      description:
        "Transparent pricing with no hidden costs. Best value for your investment.",
    },
    {
      title: "Expert Support",
      description:
        "Dedicated team to help you choose the right products for your needs.",
    },
  ],
  contact: {
    address: "Bhagirath Palace, Chandni Chowk, Delhi",
    phone: "+91 87502 37227",
    email: "contact@aggarwal-electronics.com",
    whatsapp: "9198750237227",
    hours: "Mon–Sat: 9:30 AM – 7:30 PM",
  },
} as const;
