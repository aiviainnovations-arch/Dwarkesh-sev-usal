<div align="center">

# 🍽️ Dwarkesh Sev Usal
### Premium Restaurant Website

A cinematic, one-page restaurant website built for **Dwarkesh Sev Usal** — combining a modern luxury visual experience with a fully responsive restaurant interface, smooth motion design, and an interactive digital menu.

[![Live Demo](https://img.shields.io/badge/Live-Demo-B3121E?style=for-the-badge)](https://aiviainnovations-arch.github.io/Dwarkesh-sev-usal/)
[![License](https://img.shields.io/badge/License-Proprietary-black?style=for-the-badge)](./LICENSE)
[![Built by](https://img.shields.io/badge/Built%20by-AIVIA%20Innovations-B3121E?style=for-the-badge)](https://github.com/aiviainnovations-arch)

![React](https://img.shields.io/badge/React-18-149ECA?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Build-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer-Motion-black?logo=framer&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-222222?logo=github&logoColor=white)

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Live Website](#-live-website)
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Content Management](#-content-management)
  - [Menu & Prices](#-editing-the-menu--prices)
  - [Images](#️-replacing-images)
  - [Videos](#-replacing-videos)
  - [Contact & Social Links](#-updating-contact--social-links)
  - [Logo & Favicon](#️-logo--favicon)
- [SEO & Metadata](#-seo--metadata)
- [Deployment](#-deployment)
- [Production Launch Checklist](#️-production-launch-checklist)
- [Performance Recommendations](#-performance-recommendations)
- [Security](#-security--environment-variables)
- [Architecture](#-architecture)
- [Contributing Workflow](#-recommended-development-workflow)
- [Developed By](#-developed-by)
- [License](#-license)

---

## 📌 Overview

This repository contains the full source code for the official **Dwarkesh Sev Usal** restaurant website — a premium, cinematic, single-page experience designed to showcase the brand, its signature dishes, and its story, with a strong focus on mobile responsiveness and performance.

**Highlights:**
- 🎬 Cinematic hero section with video background
- 🍽️ Signature dish showcase with interactive hover effects
- 📖 Brand story section
- 📋 Fully data-driven digital menu
- ✨ Smooth scroll-based animations
- 📍 Location, contact, and WhatsApp integration
- 🏪 Dedicated franchise information section
- 📱 Mobile-first, fully responsive layout with a sticky action bar

---

## 🌐 Live Website

🔗 **Live Demo:** [aiviainnovations-arch.github.io/Dwarkesh-sev-usal](https://aiviainnovations-arch.github.io/Dwarkesh-sev-usal/)
📦 **Repository:** [github.com/aiviainnovations-arch/Dwarkesh-sev-usal](https://github.com/aiviainnovations-arch/Dwarkesh-sev-usal)

> Deployed automatically via **GitHub Actions → GitHub Pages** on every push to `main`.

---

## 🚀 Features

| Section | Description |
|---|---|
| **Hero** | Cinematic food video/imagery, strong CTAs, parallax and motion effects |
| **Signature Dishes** | Dish name, description, image, price, and hover interactions |
| **Digital Menu** | Category-based menu, fully managed from `src/data/menu.ts` |
| **Brand Story** | Narrative section introducing the restaurant's identity |
| **Cinematic Experience** | Short looping food videos for a premium feel |
| **Franchise** | Dedicated section for franchise inquiries |
| **Location & Contact** | Address, phone, Google Maps, WhatsApp, Instagram, Facebook |
| **Mobile Sticky Bar** | Persistent quick-actions on mobile devices |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | Frontend UI |
| **TypeScript** | Type-safe development |
| **Vite** | Development server & production build |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Animations & scroll interactions |
| **Lucide React** | Icon set |
| **GitHub Actions** | CI/CD deployment pipeline |
| **GitHub Pages** | Static hosting |

---

## 💻 Getting Started

### Requirements

- [Node.js](https://nodejs.org/) 18 or newer
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/aiviainnovations-arch/Dwarkesh-sev-usal.git
cd Dwarkesh-sev-usal
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### 4. Build for production

```bash
npm run build
```

Optimized output is generated inside `dist/`.

### 5. Preview the production build

```bash
npm run preview
```

---

## 📁 Project Structure

```
Dwarkesh-sev-usal/
│
├── .github/
│   └── workflows/
│       └── deploy.yml            # CI/CD pipeline for GitHub Pages
│
├── public/
│   ├── images/                   # Static image assets
│   ├── videos/                   # Static video assets
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
│
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── BrandStory.tsx
│   │   ├── SignatureDishes.tsx
│   │   ├── Menu.tsx
│   │   ├── WhyDwarkesh.tsx
│   │   ├── CinematicExperience.tsx
│   │   ├── Franchise.tsx
│   │   ├── Location.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── MobileStickyBar.tsx
│   │   ├── Button.tsx
│   │   ├── Logo.tsx
│   │   ├── DishCard.tsx
│   │   ├── VideoBackground.tsx
│   │   └── SectionReveal.tsx
│   │
│   ├── data/
│   │   ├── site.ts               # Centralized contact/social config
│   │   └── menu.ts               # Menu items & pricing
│   │
│   ├── hooks/
│   │   └── useTilt.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── .gitignore
├── README.md
├── LICENSE
├── index.html
├── package.json
├── package-lock.json
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## ✏️ Content Management

### 🍛 Editing the Menu & Prices

All menu data lives in a single file, decoupled from the UI:

```
src/data/menu.ts
```

```ts
{
  id: 'butter-sev-usal',
  name: 'Butter Sev Usal',
  description: '...',
  image: '/images/butter-sev-usal.jpg',
  price: '₹80',
}
```

- To **change a price**, edit the `price` field with the verified value.
- To **add a dish**, append a new object with a unique `id` and place its image in `public/images/`.
- If a price has not been verified, use `"Ask in-store"` rather than inventing one.
- To **add a new category**, extend the existing structure in `menu.ts`.

> ⚠️ No prices, reviews, or business claims should be invented. Only verified, restaurant-provided information belongs in production.

### 🖼️ Replacing Images

Images live in:

```
public/images/
```

1. Add the new image file to `public/images/`.
2. Reference it from `src/data/menu.ts` (for dishes) or directly inside the relevant component in `src/components/` (for section imagery).

**Recommended optimization:**
- Prefer JPG or WebP
- ~1200–2000px on the longer side
- Compress before uploading (aim for ~100–500KB)
- Avoid unnecessarily large source files

### 🎥 Replacing Videos

Videos live in:

```
public/videos/
```

| File | Used In |
|---|---|
| `hero-sev-usal.mp4` | Hero section |
| `cinematic-sev-pour.mp4` | Cinematic Experience section |
| `macro-butter-melt.mp4` | Brand Story section |

- **Same filename** → drop-in replacement, no code changes needed.
- **New filename** → add to `public/videos/` and update the `src` in `Hero.tsx`, `CinematicExperience.tsx`, or `BrandStory.tsx` accordingly.

**Recommended settings:** short (8–15s), muted, looping, MP4, compressed to roughly under 5MB.

Poster images (shown before video loads) live in `public/images/` and are set via the `poster` attribute on the `<video>` tag.

### 📞 Updating Contact & Social Links

All contact and social information is centralized in a single file:

```
src/data/site.ts
```

```ts
export const SITE = {
  phones: ['9722654369', '8320651753'],
  address: {
    line1: 'Your Address',
    line2: 'Your Area',
    line3: 'Your City',
    full: 'Complete Address',
  },
  social: {
    instagram: 'https://instagram.com/youraccount',
    facebook: 'https://facebook.com/youraccount',
    whatsapp: 'https://wa.me/919722654369',
    maps: 'https://maps.google.com/',
  },
}
```

Updating this file automatically propagates changes to the Navbar, Footer, Contact section, Location section, Franchise section, mobile sticky bar, WhatsApp buttons, and social links — no need to edit multiple components.

> **WhatsApp link format:** `https://wa.me/<countrycode><number>` — no `+`, spaces, brackets, or hyphens (e.g. `https://wa.me/919722654369`).

### 🏷️ Logo & Favicon

The current build uses a typographic wordmark since no official logo file was supplied originally.

**To add the real logo:**
1. Place the logo file in `public/images/` (e.g. `public/images/logo.png`).
2. Update `src/components/Logo.tsx`:
   ```tsx
   <img src="/images/logo.png" alt="Dwarkesh Sev Usal" className="h-10 w-auto" />
   ```

**Favicon:** replace `public/favicon.svg` with the official restaurant icon when available.

---

## 🔎 SEO & Metadata

Primary metadata is managed in `index.html`:

```html
<title>Dwarkesh Sev Usal | Authentic Sev Usal</title>
<meta name="description" content="Official website of Dwarkesh Sev Usal." />
```

Also update: canonical URL, Open Graph title/description/image, and favicon reference.

- `public/robots.txt` — ensure the sitemap URL points to the correct production domain.
- `public/sitemap.xml` — ensure all URLs match the production domain.

---

## 🚀 Deployment

After `npm run build`, the static output in `dist/` can be deployed to **any** static host: GitHub Pages, Vercel, Netlify, Cloudflare Pages, AWS S3, or traditional hosting.

### Current setup: GitHub Actions → GitHub Pages

```
Code changes → git commit → push to main → GitHub Actions
   → npm install → npm run build → upload Pages artifact → GitHub Pages → Live site
```

To publish an update:

```bash
git add .
git commit -m "Update website"
git push origin main
```

Check the deployment status under **Repository → Actions → "Deploy Dwarkesh Sev Usal"**. A green check confirms a successful deploy.

The Vite config keeps the GitHub Pages base path aligned with `/Dwarkesh-sev-usal/`.

### Custom domain

Connect a custom domain (e.g. `www.dwarkeshsevusal.com`) under **Repository → Settings → Pages → Custom domain**, and configure the matching DNS records with your domain provider.

---

## ⚠️ Production Launch Checklist

**Content**
- [ ] Restaurant name verified
- [ ] Menu items & prices verified
- [ ] Phone numbers & address verified
- [ ] Google Maps, WhatsApp, Instagram, Facebook verified

**Media**
- [ ] Real restaurant photos added
- [ ] Real restaurant logo added
- [ ] Videos optimized + posters configured
- [ ] Favicon updated

**SEO**
- [ ] Page title, meta description, canonical URL updated
- [ ] Open Graph image, sitemap, robots.txt updated

**Testing**
- [ ] Desktop / tablet / mobile layouts tested
- [ ] Navigation, buttons, phone links, WhatsApp, Maps, social links tested
- [ ] Images & videos load correctly, no broken links
- [ ] Production build (`npm run build`) tested

---

## ⚡ Performance Recommendations

A beautiful website that takes forever to load is not a premium website.

- Compress images (prefer WebP where possible)
- Compress MP4 videos, keep loops short
- Avoid unnecessary third-party libraries
- Lazy-load large images where appropriate
- Test on real mobile network conditions

---

## 🔐 Security & Environment Variables

This is a static frontend project. Never commit `.env`, `.env.local`, API keys, tokens, passwords, or other secret credentials into `src/` or `public/`. If environment variables become necessary, configure them through the deployment platform rather than the repository.

---

## 🧩 Architecture

**Components** — major sections (`Hero`, `BrandStory`, `SignatureDishes`, `Menu`, `WhyDwarkesh`, `CinematicExperience`, `Franchise`, `Location`, `Contact`, `Footer`) are built as composable React components, alongside reusable primitives (`Navbar`, `MobileStickyBar`, `Button`, `Logo`, `DishCard`, `VideoBackground`, `SectionReveal`).

**Styling** — Tailwind CSS, with global styles in `src/index.css` and configuration in `tailwind.config.ts`.

**Animation** — Framer Motion powers scroll reveals, hero transitions, parallax, hover interactions, and section transitions. Depth effects use CSS + Framer Motion rather than WebGL/Three.js, keeping the bundle light.

**Data integrity** — menu prices, reviews, awards, and business claims are never fabricated. Unverified information is marked `"Ask in-store"` or left out entirely until confirmed by the restaurant.

---

## 🔄 Recommended Development Workflow

```
1. Pull latest changes
2. Make changes locally
3. Test with npm run dev
4. Run npm run build
5. Fix any build errors
6. Commit changes
7. Push to GitHub
8. Verify GitHub Actions run succeeds
9. Confirm the live site
```

**Useful Git commands**

```bash
git status                        # check current state
git add .                         # stage changes
git commit -m "Update website"    # commit
git push origin main              # publish
git pull origin main              # sync
git log --oneline                 # view history
```

---

## 🏢 Developed By

<div align="center">

### AIVIA Innovations
*Advanced Intelligence & Visionary Applications*

AIVIA Innovations builds modern digital experiences — websites, web applications, AI-powered solutions, and custom software.

🌐 Website Development • 💻 Full-Stack Development • 🤖 AI-Powered Applications
📱 Responsive Web Apps • 🎨 UI/UX Development • ☁️ Cloud & Deployment
🔌 API & Backend Development • 🛒 E-Commerce Solutions • ⚙️ Custom Software

**[github.com/aiviainnovations-arch](https://github.com/aiviainnovations-arch)**

</div>

---

## 📄 License

This project was developed for **Dwarkesh Sev Usal** by **AIVIA Innovations**.

See the [LICENSE](./LICENSE) file for full terms. In summary: this is proprietary client work — the custom design, branding, content, media, and source code may not be copied, reused, or redistributed for commercial purposes without explicit written authorization from AIVIA Innovations and Dwarkesh Sev Usal.

---

<div align="center">

🍽️ **Dwarkesh Sev Usal** — Premium Restaurant Website
Built with ❤️ by **AIVIA Innovations**

</div>
