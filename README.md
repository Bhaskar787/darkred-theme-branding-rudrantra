# Rudrantra — Sacred Rudraksha

A fully responsive React + Vite + Tailwind CSS e-commerce frontend for Rudrantra, a sacred Rudraksha store.

## Getting Started

**Requirements:** Node.js 18+ and npm (or pnpm / yarn)

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build       # outputs to dist/
npm run preview     # preview the production build locally
```

## Stack

- **React 19** — UI framework
- **Vite 7** — build tool
- **Tailwind CSS v4** — utility-first styles
- **Framer Motion** — animations
- **Lucide React** — icons
- **Wouter** — lightweight router
- **Radix UI** — accessible headless components

## Features

- Scrolling announcement bar
- Sticky navbar with dropdowns (mobile hamburger menu)
- 4-slide hero with auto-advance and dot navigation
- Cart drawer + Wishlist drawer (React context state)
- Sacred Collections, Best Sellers, Choose by Intention
- Rudraksha Knowledge Guide (1–14 Mukhi + Gaurishankar)
- Spiritual Calendar (auspicious Vedic dates)
- Testimonials, FAQ accordion, Newsletter signup
- Footer with social links
- Floating WhatsApp + VedaAI chat panel
- Fully mobile-responsive

## Replacing Images

All product images currently come from Unsplash. Replace the `image` URLs inside these files with your own CDN/S3 URLs:

- `src/components/HeroSlider.tsx`
- `src/components/BestSellers.tsx`
- `src/components/SacredCollections.tsx`
- `src/components/CategoryShowcase.tsx`
