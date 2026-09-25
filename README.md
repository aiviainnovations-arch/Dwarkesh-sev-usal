# Dwarkesh Sev Usal — Website

A premium, cinematic one-page restaurant website for **Dwarkesh Sev Usal**, built with
React + TypeScript + Vite + Tailwind CSS + Framer Motion.

---

## 1. Running it locally

You need [Node.js](https://nodejs.org) 18 or newer installed.

```bash
# 1. Unzip the project, then open a terminal inside the folder
cd dwarkesh-sev-usal

# 2. Install dependencies (downloads React, Tailwind, etc. from npm)
npm install

# 3. Start the local dev server
npm run dev
```

Open the URL it prints (usually **http://localhost:5173**) in your browser.

To build an optimized production version:

```bash
npm run build      # outputs static files into /dist
npm run preview    # preview the production build locally
```

---

## 2. Folder structure

```
dwarkesh-sev-usal/
├── index.html                # Page shell, SEO meta tags, structured data
├── public/
│   ├── images/                # All photos (see "Replacing images" below)
│   ├── videos/                # All background/section videos
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/            # One file per section/UI piece (see below)
│   ├── data/
│   │   ├── site.ts             # Phone numbers, address, nav links, social links
│   │   └── menu.ts             # Signature dishes + full menu content
│   ├── hooks/
│   │   └── useTilt.ts          # 3D hover-tilt effect used on dish cards
│   ├── App.tsx                 # Assembles all sections in order
│   ├── main.tsx                # React entry point
│   └── index.css               # Tailwind + global styles
├── package.json
├── tailwind.config.ts          # Brand colours, fonts, animations
└── vite.config.ts
```

Each section of the site is its own component in `src/components/`:
`Hero`, `BrandStory`, `SignatureDishes`, `Menu`, `WhyDwarkesh`,
`CinematicExperience`, `Franchise`, `Location`, `Contact`, `Footer`,
plus reusable pieces (`Navbar`, `MobileStickyBar`, `Button`, `Logo`,
`DishCard`, `VideoBackground`, `SectionReveal`).

---

## 3. Replacing images

1. Drop your new photo into `public/images/` (any name, e.g. `sev-tari.jpg`).
2. Open `src/data/menu.ts` and point the relevant dish's `image` field at it:
   ```ts
   image: '/images/sev-tari.jpg',
   ```
3. For photos used directly in a section (hero poster, brand story photo, etc.),
   open that component in `src/components/` and update the `src="/images/..."` path.

Recommended: JPG/WebP, roughly 1200px on the longer side, under ~300KB each,
so the site stays fast.

---

## 4. Replacing videos

Videos live in `public/videos/`:

| File | Used in |
|---|---|
| `hero-sev-usal.mp4` | Hero banner background |
| `cinematic-sev-pour.mp4` | Full-width "Cinematic Food Experience" section |
| `macro-butter-melt.mp4` | Small accent video in the Brand Story section |

To swap one out:
1. Replace the file in `public/videos/` (keep the same file name, or update the
   `src="/videos/..."` path in the matching component: `Hero.tsx`,
   `CinematicExperience.tsx`, or `BrandStory.tsx`).
2. Regenerate its poster image (the still frame shown before the video loads /
   on slow connections) — grab a frame with any tool and save it into
   `public/images/` as e.g. `poster-hero.jpg`, then point the component's
   `poster="/images/..."` prop at it.

Keep videos muted, short (8–15s), and under ~5MB for good mobile performance.

---

## 5. Editing the menu & prices

Open `src/data/menu.ts`. No prices were invented in this build — real prices
weren't supplied, so every dish currently shows **"Ask in-store"**. To add a
real price, just fill in the `price` field on any dish:

```ts
{
  id: 'butter-sev-usal-menu',
  name: 'Butter Sev Usal',
  description: '...',
  image: '/images/butter-sev-usal.jpg',
  price: '₹80',   // ← add this line
},
```

To add a whole new category (e.g. **Sev Tari**), add a photo to
`public/images/`, then add a new entry to the `MENU` array following the same
shape as the existing categories.

---

## 6. Updating phone numbers / address / social links

Everything lives in one file: **`src/data/site.ts`**. Change it once and it
updates the navbar, footer, franchise section, location section, sticky
mobile bar, and WhatsApp links automatically.

```ts
export const SITE = {
  phones: ['9722654369', '8320651753'],
  address: { line1: '...', line2: '...', line3: '...', full: '...' },
  social: { instagram: '...', facebook: '...', whatsapp: '...', maps: '...' },
}
```

---

## 7. Adding your real logo

No logo file was included with the supplied assets, so the navbar/footer
currently use a typographic "Dwarkesh Sev Usal" wordmark with a simple line
icon (`src/components/Logo.tsx`) rather than an invented logo graphic.

Once you have the real logo file:
1. Add it to `public/images/`, e.g. `logo.png`.
2. Open `src/components/Logo.tsx` and replace its contents with:
   ```tsx
   <img src="/images/logo.png" alt="Dwarkesh Sev Usal" className="h-10 w-auto" />
   ```
3. Also update `public/favicon.svg` and the Open Graph image reference in
   `index.html` if you'd like the real logo to appear in browser tabs and link
   previews.

---

## 8. Deploying

This is a static site after `npm run build` (output in `/dist`), so it deploys
anywhere that serves static files:

- **Vercel / Netlify**: connect the folder/repo, build command `npm run build`,
  output directory `dist`. Zero config needed otherwise.
- **Any static host** (GitHub Pages, S3, cPanel, etc.): run `npm run build`
  locally and upload the contents of `/dist`.

Before going live, update in `index.html`:
- `<link rel="canonical" href="...">` and the Open Graph URLs to your real domain.
- The `sitemap.xml` and `robots.txt` `Sitemap:` line in `public/`.

---

## 9. What was intentionally left out

Per the brief, nothing was invented: there are no fabricated reviews, awards,
years-in-business claims, or menu prices. Only dishes with a real supplied
photo (Butter Sev Usal, Cheese Poha Usal, Badam/Kaju/Mango/Choco Lassi) appear
with images; other categories mentioned in the brief (like Sev Tari) are
easy to add once photos are available — see section 5.

---

## 10. Tech stack

- **React 18 + TypeScript** — component structure
- **Vite** — dev server & build tool
- **Tailwind CSS** — styling, using a custom brand theme (`tailwind.config.ts`)
- **Framer Motion** — scroll reveals, hero parallax, 3D tilt hover cards
- **lucide-react** — lightweight line icons

3D effects are done with CSS/Framer Motion (perspective tilt, parallax,
layered depth) rather than Three.js/WebGL, keeping the site fast and reliable
on mobile while still feeling premium and tactile, per the brief's guidance
to use 3D only where it clearly helps.
