# Cheran Portfolio — Full-bleed Interactive 3D Hero

This revision replaces the framed, right-column Spline card with a full-bleed 3D background composition. The Spline orbital sculpture fills the hero behind the foreground copy, continues its orbital animation, and responds to mouse/touch movement with a restrained perspective tilt and a subtle press response. The old hero card and focus label are removed.

The small unframed profile signature keeps the original small portrait (`public/photos/cheran-profile.jpeg`). The About section uses the new mirror portrait (`public/photos/cheran-about-mirror.jpg`). The LinkedIn URL is updated to the supplied profile.

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

The build script invokes TypeScript and Vite through Node rather than their `.bin` shims, avoiding the executable permission issue previously observed on Vercel.

## Push to the existing GitHub repository

Copy/merge the project files into the existing repository. Preserve the repository's `.git` folder. Then run:

```bash
git add .
git commit -m "Replace framed Spline card with interactive full-bleed 3D hero"
git push
```

## Spline scene

The hero uses the Spline React code export URL in `src/components/SplineHero.tsx`. The already-published scene contains the continuously rotating orbital sculpture; the React wrapper adds responsive pointer parallax so the scene feels interactive without a card frame. The Spline editor document also has an additional internal pointer-response script, which can be published later from **Spline → Export → Code → React → Update** if you want that motion to run on individual 3D objects inside the scene as well.
