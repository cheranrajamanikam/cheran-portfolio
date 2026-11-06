# Cheran Rajamanikam — Portfolio

A responsive, dark-cinematic portfolio for an AI/ML engineering student, full-stack developer and researcher. The visual system uses a midnight navy canvas, restrained blue/violet/cyan accents, clear high-contrast typography, glass-like content surfaces and a Spline-powered animated 3D hero.

## Included
- Hero with responsive Spline 3D scene and existing portrait card
- High-contrast typography and consistent Geist / Geist Mono type system
- Readable metrics band with dark glass treatment
- Strong top-left CHERAN wordmark and responsive navigation
- About, photo gallery, selected projects, research/publications, experience, skills, currently building, education and contact sections
- Responsive mobile menu and reduced-motion support
- Downloadable resume at `/Cheran_Rajamanikam_Resume.pdf`
- Local photo assets under `/photos/`
- GitHub and LinkedIn links

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

Deploy the project root to Vercel. The project uses Vite + React + TypeScript + Tailwind CSS.

## Spline hero integration

The home hero uses the Spline scene through the official Spline Viewer web component. The published scene URL is `https://prod.spline.design/jrSFLoNrlfJIVNdx/scene.splinecode`. The scene URL is configured in `src/components/SplineHero.tsx`; the 3D canvas is composed inside the hero card with the original profile portrait.

The viewer script is loaded once at runtime. No additional Spline npm dependency is required. To replace the scene later, update `SPLINE_SCENE_URL` in `src/components/SplineHero.tsx` with the new exported `.splinecode` URL.
