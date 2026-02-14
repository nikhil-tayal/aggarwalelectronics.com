# Aggarwal Electronics

Website for Aggarwal Electronics — electrical appliance shop. Clean, minimal design inspired by corporate electrical suppliers (e.g. [A.B. Pal Electricals](https://www.abpal.com/)).

## Tech stack

- **React** with **Next.js 16** (App Router, SSR)
- **Tailwind CSS v4**
- **ShadCN UI** (New York style, neutral base)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — run production server
- `npm run lint` — run ESLint

## Structure

- `src/app/` — App Router pages (home, about, products, contact)
- `src/components/` — Header, Footer, UI components (ShadCN)
- `src/lib/` — `site.ts` (content/config), `utils.ts`

## Product categories (from `src/lib/site.ts`)

Switch, Socket, Automation, Lighting, Wires, Inverters, Batteries, Water Geyser, Water RO, Chimneys, Switchgears, Conduit Pipe, Flexible Pipe, Fans, Fancy Lights.

Update copy, contact details, and products in `src/lib/site.ts`.
