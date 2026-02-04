# Valentine’s Day Website (React + Vite + GSAP)

Multi-page Valentine’s Day website built with:

- React (functional components)
- React Router (navigation + page transitions)
- GSAP (timelines + smooth sequencing)
- CSS (romantic pastel theme + hover effects)

## Run it

```bash
npm install
npm run dev
```

## Pages

- **Home**: “Will you be my Valentine?” with playful **Yes/No** button logic (No makes Yes grow via GSAP).
- **Pictures**: gallery grid with **staggered GSAP entrance** + hover pulse.
- **Message**: love letter with **line-by-line GSAP reveal**.

## Where the animations live

- `src/pages/HomePage.jsx`: initial load timeline + Yes/No scaling
- `src/pages/PicturesPage.jsx`: grid entrance stagger
- `src/pages/MessagePage.jsx`: line-by-line reveal
- `src/components/PageTransition.jsx`: route entrance animation
- `src/components/TransitionContext.jsx`: exit animation used by Navbar before navigating
- `src/components/FloatingHearts.jsx`: global floating hearts layer

## Swap in your photos

Update the `photos` array in `src/pages/PicturesPage.jsx` to point to your own images (e.g., add files under `public/` and use `/my-photo.jpg` paths).
