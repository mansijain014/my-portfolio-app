# Pixel Media Production - Portfolio Website

## Overview
A professional portfolio and service website for Pixel Media Production, a creative agency based in Delhi. The site showcases services in cinematic video production, event coverage, brand storytelling, and equipment rentals.

## Tech Stack
- **Framework**: React 19 with Vite 7
- **Styling**: Tailwind CSS 4.x (via @tailwindcss/vite plugin)
- **Animations**: GSAP, Framer Motion, Lottie, Lenis (smooth scroll)
- **3D/WebGL**: OGL, Postprocessing
- **Routing**: React Router 7
- **Package Manager**: npm

## Project Structure
```
src/
  App.jsx          - Root component with routing and loader
  main.jsx         - React DOM entry point
  index.css        - Global styles and Tailwind imports
  assets/          - Images and brand logos
  components/      - Reusable UI sections (NavBar, Footer, Hero, FAQ, etc.)
  pages/           - Route-level components (HomePage, Production, Rentals, etc.)
  utils/           - Specialized UI components (DomeGallery, LiquidEther, Bento, Loader)
  lottie/          - Lottie animation JSON files
public/
  showreel.webm    - Hero showreel video
  pixelmedia-logo* - Brand logos
  robots.txt       - SEO
  sitemap.xml      - SEO
```

## Development
- **Start**: `npm run dev` (runs on port 5000, host 0.0.0.0)
- **Build**: `npm run build`
- **Lint**: `npm run lint`

## Workflow
- Workflow: "Start application" → `npm run dev` → port 5000 (webview)

## Notes
- The app uses a custom Lottie-based loader on initial page load (~1.5s)
- WebGL (OGL/Three.js) features may show warnings in sandboxed environments — this is expected
- The HTML nesting warning (h5 inside h2) is a pre-existing issue in the source code
