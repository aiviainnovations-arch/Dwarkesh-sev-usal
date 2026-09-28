🍽️ Dwarkesh Sev Usal --- Premium Restaurant Website
A premium, cinematic, one-page restaurant website created for Dwarkesh
Sev Usal.
The website combines a modern luxury visual experience with a responsive
restaurant interface, featuring cinematic food imagery, smooth
animations, interactive menu sections, location/contact information, and
mobile-friendly navigation.
---
🌐 Live Website
🔗 Live Demo:  
https://aiviainnovations-arch.github.io/Dwarkesh-sev-usal/
> The website is deployed using **GitHub Pages**.
---
📸 Project Preview
The website is designed around a premium food-brand experience with:
🎬 Cinematic hero section
🍽️ Signature dish showcase
📖 Brand story
📋 Digital menu
✨ Smooth scroll animations
🎥 Cinematic food videos
📍 Location section
📞 Contact section
💬 WhatsApp integration
📱 Mobile responsive design
🏪 Franchise section
🎨 Premium custom visual identity
---
🚀 Features
✨ Premium Hero Section
The hero section introduces Dwarkesh Sev Usal using:
Cinematic food imagery/video
Restaurant branding
Strong call-to-action buttons
Responsive layout
Motion and parallax effects
🍽️ Signature Dishes
The website contains a dedicated section for showcasing signature
dishes.
Each dish can include:
Dish name
Description
Food image
Price
Interactive hover effects
📋 Digital Menu
The menu is structured into categories so that restaurant staff can
easily update dishes and prices.
Menu information is managed from:
``` text
src/data/menu.ts
```
This keeps menu data separate from the UI components.
🎥 Cinematic Food Experience
The website uses short food videos to create a premium restaurant
experience.
Videos can be used in:
Hero section
Brand Story
Cinematic Experience section
📍 Location & Contact
The website includes:
Restaurant address
Phone numbers
Google Maps
WhatsApp
Instagram
Facebook
Contact information
All major contact information is centralized in:
``` text
src/data/site.ts
```
📱 Fully Responsive
The website is designed to work across:
📱 Mobile
📲 Tablets
💻 Laptops
🖥️ Desktop screens
A mobile sticky action bar is also included for easier access to
important actions.
---
🛠️ Tech Stack
Technology       Purpose
---
React 18         Frontend UI
TypeScript       Type-safe development
Vite             Development & production build
Tailwind CSS     Styling
Framer Motion    Animations & interactions
Lucide React     Icons
GitHub Actions   CI/CD deployment
GitHub Pages     Hosting
---
💻 Running the Project Locally
Requirements
Make sure you have:
Node.js 18 or newer
npm
Git
Node.js: https://nodejs.org/
1. Clone the Repository
``` bash
git clone https://github.com/aiviainnovations-arch/Dwarkesh-sev-usal.git
cd Dwarkesh-sev-usal
```
2. Install Dependencies
``` bash
npm install
```
3. Start Development Server
``` bash
npm run dev
```
Usually available at:
``` text
http://localhost:5173
```
---
🏗️ Production Build
Create an optimized production build:
``` bash
npm run build
```
Production files are generated inside:
``` text
dist/
```
Preview the production build:
``` bash
npm run preview
```
---
📁 Project Structure
``` text
Dwarkesh-sev-usal/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── public/
│   ├── images/
│   ├── videos/
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
│   │   ├── site.ts
│   │   └── menu.ts
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
├── index.html
├── package.json
├── package-lock.json
├── tailwind.config.ts
└── vite.config.ts
```
---
🖼️ Replacing Images
Restaurant images are stored inside:
``` text
public/images/
```
Add a new image
Place the image inside:
``` text
public/images/
```
Example:
``` text
public/images/sev-tari.jpg
```
Update a menu image
Open:
``` text
src/data/menu.ts
```
Example:
``` ts
{
  id: 'sev-tari',
  name: 'Sev Tari',
  description: '...',
  image: '/images/sev-tari.jpg',
  price: '₹80',
}
```
Images used directly by components
For images used directly in sections, update the corresponding component
inside:
``` text
src/components/
```
Example:
``` tsx
<img
  src="/images/restaurant.jpg"
  alt="Dwarkesh Sev Usal"
/>
```
Recommended image optimization
For good performance:
Prefer JPG or WebP
Around 1200--2000px on the longer side
Compress images before uploading
Aim for approximately 100--500KB where practical
Avoid unnecessarily huge images
---
🎥 Replacing Videos
Website videos are stored inside:
``` text
public/videos/
```
Current video assets:
File                       Used In
---
`hero-sev-usal.mp4`        Hero section
`cinematic-sev-pour.mp4`   Cinematic Experience
`macro-butter-melt.mp4`    Brand Story
Replace a video
Option 1 --- Keep the same filename
Replace the existing video while keeping the filename. No code changes
are required.
Option 2 --- Use a new filename
Add the video to:
``` text
public/videos/
```
Then update the relevant component:
`Hero.tsx`
`CinematicExperience.tsx`
`BrandStory.tsx`
Example:
``` tsx
src="/videos/new-video.mp4"
```
Video recommendations
Keep videos short
Use MP4
Keep videos muted
Compress videos
Prefer 8--15 second loops
Try to keep videos below approximately 5MB when possible
---
🖼️ Video Poster Images
Poster images are displayed before a video loads or while loading is
delayed.
Store posters in:
``` text
public/images/
```
Example:
``` tsx
<video
  src="/videos/hero-sev-usal.mp4"
  poster="/images/poster-hero.jpg"
  autoPlay
  muted
  loop
  playsInline
/>
```
---
🍛 Editing the Menu & Prices
All menu information is managed from:
``` text
src/data/menu.ts
```
No prices were invented in the original build. Where a verified price
was not supplied, the website can use:
``` text
Ask in-store
```
Change a dish
``` ts
{
  id: 'butter-sev-usal',
  name: 'Butter Sev Usal',
  description: '...',
  image: '/images/butter-sev-usal.jpg',
  price: '₹80',
}
```
Change a price
Update:
``` ts
price: '₹80'
```
to the verified price.
Add a new dish
``` ts
{
  id: 'special-sev-usal',
  name: 'Special Sev Usal',
  description: 'Our signature spicy sev usal.',
  image: '/images/special-sev-usal.jpg',
  price: '₹90',
}
```
Then add:
``` text
public/images/special-sev-usal.jpg
```
Add a new category
Add the category to:
``` text
src/data/menu.ts
```
following the existing menu data structure.
---
📞 Updating Phone Numbers, Address & Social Links
All major restaurant contact information is centralized in:
``` text
src/data/site.ts
```
Example:
``` ts
export const SITE = {
  phones: [
    '9722654369',
    '8320651753',
  ],

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
Update this file instead of changing the same information in multiple
components.
It can update:
Navbar
Footer
Contact section
Location section
Franchise section
Mobile sticky bar
WhatsApp buttons
Social links
---
📱 Updating Social Media Links
Inside:
``` text
src/data/site.ts
```
update:
``` ts
social: {
  instagram: 'YOUR_INSTAGRAM_URL',
  facebook: 'YOUR_FACEBOOK_URL',
  whatsapp: 'YOUR_WHATSAPP_URL',
  maps: 'YOUR_GOOGLE_MAPS_URL',
}
```
Use the restaurant's actual social profiles.
---
🗺️ Updating Google Maps
Replace:
``` ts
maps: 'YOUR_GOOGLE_MAPS_URL'
```
with the actual Google Maps URL.
---
💬 Updating WhatsApp
WhatsApp links generally follow:
``` text
https://wa.me/COUNTRYCODEPHONENUMBER
```
For India:
``` text
https://wa.me/919722654369
```
Do not include `+`, spaces, brackets, or hyphens.
---
🏷️ Adding the Real Restaurant Logo
No official logo file was included with the original supplied assets, so
the current implementation uses a typographic wordmark rather than
inventing an unofficial logo graphic.
Step 1 --- Add the real logo
Place it inside:
``` text
public/images/
```
Example:
``` text
public/images/logo.png
```
Step 2 --- Update the Logo component
Open:
``` text
src/components/Logo.tsx
```
Example:
``` tsx
<img
  src="/images/logo.png"
  alt="Dwarkesh Sev Usal"
  className="h-10 w-auto"
/>
```
Adjust the height as needed.
---
🌐 Favicon
The favicon is located at:
``` text
public/favicon.svg
```
Replace it with the official restaurant favicon/logo when available.
---
🔎 SEO & Metadata
The main HTML document is:
``` text
index.html
```
Update:
Page title
Meta description
Canonical URL
Open Graph title
Open Graph description
Open Graph image
Favicon
Example:
``` html
<title>Dwarkesh Sev Usal | Authentic Sev Usal</title>

<meta
  name="description"
  content="Official website of Dwarkesh Sev Usal."
/>
```
---
🤖 Robots.txt
Located at:
``` text
public/robots.txt
```
Make sure the sitemap reference points to the correct production domain.
---
🗺️ Sitemap
Located at:
``` text
public/sitemap.xml
```
Update URLs to match the actual production domain.
---
⚙️ Vite Configuration
The project uses:
``` text
vite.config.ts
```
The production build outputs to:
``` text
dist/
```
The Vite configuration should remain compatible with the GitHub Pages
base path:
``` text
/Dwarkesh-sev-usal/
```
when deploying to the repository's GitHub Pages URL.
---
🚀 Deployment
The project becomes a static website after:
``` bash
npm run build
```
The generated production files are placed in:
``` text
dist/
```
It can be deployed to:
GitHub Pages
Vercel
Netlify
Cloudflare Pages
AWS S3
cPanel/static hosting
Other static hosting providers
---
🟣 GitHub Pages Deployment
The current deployment uses:
``` text
GitHub Actions
+
GitHub Pages
```
Workflow:
``` text
.github/workflows/deploy.yml
```
Deployment flow
``` text
Code changes
     ↓
Git commit
     ↓
Push to main
     ↓
GitHub Actions
     ↓
Install dependencies
     ↓
npm run build
     ↓
Upload Pages artifact
     ↓
GitHub Pages
     ↓
Live website
```
Updating the live website
``` bash
git add .
git commit -m "Update website"
git push origin main
```
GitHub Actions will build and deploy the latest version.
Check deployment status
Open:
``` text
GitHub Repository
→ Actions
```
Look for:
``` text
Deploy Dwarkesh Sev Usal
```
A green checkmark indicates a successful deployment.
---
🌐 Current GitHub Pages URL
Live website:
https://aiviainnovations-arch.github.io/Dwarkesh-sev-usal/
Repository:
https://github.com/aiviainnovations-arch/Dwarkesh-sev-usal
---
🌍 Custom Domain
GitHub Pages can be connected to a custom domain.
Example:
``` text
www.dwarkeshsevusal.com
```
Configure it under:
``` text
Repository
→ Settings
→ Pages
→ Custom domain
```
DNS records must also be configured with the domain provider.
---
⚠️ Production Launch Checklist
Content
[ ] Restaurant name verified
[ ] Menu items verified
[ ] Prices verified
[ ] Phone numbers verified
[ ] Address verified
[ ] Google Maps verified
[ ] WhatsApp verified
[ ] Instagram verified
[ ] Facebook verified
Media
[ ] Real restaurant photos added
[ ] Real restaurant logo added
[ ] Videos optimized
[ ] Video posters configured
[ ] Favicon updated
SEO
[ ] Page title updated
[ ] Meta description updated
[ ] Canonical URL updated
[ ] Open Graph image updated
[ ] Sitemap updated
[ ] robots.txt updated
Testing
[ ] Desktop tested
[ ] Mobile tested
[ ] Tablet tested
[ ] Navigation tested
[ ] WhatsApp tested
[ ] Phone links tested
[ ] Google Maps tested
[ ] Social links tested
[ ] Images tested
[ ] Videos tested
[ ] No broken links
[ ] Production build tested
---
⚡ Performance Recommendations
For a restaurant website, visual quality matters, but loading speed
matters too.
Recommended:
Compress images
Use WebP where possible
Compress MP4 videos
Avoid unnecessary libraries
Lazy-load large images where appropriate
Keep background videos short
Avoid oversized assets
Test on mobile networks
A beautiful website that takes forever to load is not a premium website.
---
🔐 Security & Environment Variables
This is primarily a frontend/static website.
Do not put sensitive information inside:
``` text
src/
public/
```
Never commit:
``` text
.env
.env.local
API keys
private tokens
passwords
secret credentials
```
If environment variables are required in the future, configure them
through the deployment platform.
---
🧩 Component Architecture
Major website sections are implemented as reusable React components.
Main sections:
``` text
Hero
BrandStory
SignatureDishes
Menu
WhyDwarkesh
CinematicExperience
Franchise
Location
Contact
Footer
```
Reusable components:
``` text
Navbar
MobileStickyBar
Button
Logo
DishCard
VideoBackground
SectionReveal
```
This makes the project easier to maintain and expand.
---
🎨 Styling Architecture
The project uses:
``` text
Tailwind CSS
```
Global styles:
``` text
src/index.css
```
Custom Tailwind configuration:
``` text
tailwind.config.ts
```
---
🎞️ Animation Architecture
Animations use:
``` text
Framer Motion
```
including:
Scroll reveals
Hero transitions
Parallax effects
Hover interactions
Dish card motion
Section transitions
Motion-based visual depth
3D effects are implemented with CSS and Framer Motion rather than heavy
WebGL/Three.js implementations.
---
🍴 Menu Data Integrity
No menu price should be considered official unless verified by the
restaurant.
If a price has not been supplied, the application can display:
``` text
Ask in-store
```
Verify all menu information before production launch.
---
🚫 What Was Intentionally Not Invented
The project avoids fabricating business information.
The website does not intentionally invent:
Customer reviews
Awards
Years in business
Restaurant achievements
Menu prices
Business claims
Certifications
Only verified/provided information should be added to the production
website.
---
🏪 Franchise Section
The website contains a dedicated franchise section.
Before launch, verify all franchise-related:
Claims
Contact details
Requirements
Business information
Application instructions
---
📦 Build Output
Running:
``` bash
npm run build
```
generates:
``` text
dist/
```
Do not manually edit generated files inside `dist/`.
Modify source files and run:
``` bash
npm run build
```
again.
---
🔄 Recommended Development Workflow
``` text
1. Pull latest changes
        ↓
2. Make changes
        ↓
3. Test locally
        ↓
4. Run npm run build
        ↓
5. Fix errors
        ↓
6. Commit changes
        ↓
7. Push to GitHub
        ↓
8. Check GitHub Actions
        ↓
9. Verify live website
```
---
📝 Useful Git Commands
Check status:
``` bash
git status
```
Add changes:
``` bash
git add .
```
Commit:
``` bash
git commit -m "Update restaurant website"
```
Push:
``` bash
git push origin main
```
Pull:
``` bash
git pull origin main
```
View history:
``` bash
git log --oneline
```
---
🧪 Testing Checklist
Before pushing changes:
``` bash
npm run build
```
Then:
``` bash
npm run dev
```
Verify:
Navigation
Images
Videos
Menu
Buttons
Phone links
WhatsApp
Google Maps
Instagram
Facebook
Mobile layout
Desktop layout
---
🏢 Developed By AIVIA Innovations
AIVIA Innovations
Advanced Intelligence & Visionary Applications
AIVIA Innovations focuses on building modern digital experiences,
websites, web applications, AI-powered solutions, and custom software.
Services
🌐 Website Development
💻 Full-Stack Development
🤖 AI-Powered Applications
📱 Responsive Web Applications
🎨 UI/UX Development
☁️ Cloud & Deployment Solutions
🔌 API & Backend Development
🛒 E-Commerce Solutions
⚙️ Custom Software Development
GitHub:
https://github.com/aiviainnovations-arch
---
📄 License
This project was developed for Dwarkesh Sev Usal by AIVIA
Innovations.
Unless explicitly authorized, the custom design, branding
implementation, content, images, videos, and source code should not be
copied or redistributed for commercial use.
---
❤️ Credits
Client
Dwarkesh Sev Usal
Development
AIVIA Innovations
> Building intelligent, modern and visionary digital experiences.
---
```{=html}
<p align="center">
```
🍽️ Dwarkesh Sev Usal
Premium Restaurant Website
Built with ❤️ by AIVIA Innovations
```{=html}
</p>
```
