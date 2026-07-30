# trilok.

A dark-themed streaming platform UI, built as a ReactTS front-end challenge — recreating a provided design template with reusable components, plain CSS, and full responsiveness from mobile to desktop.

**Live demo:** [trilok-ui.netlify.app](https://trilok-ui.netlify.app/)

---

## Features

- **Hero banner** with a full-bleed backdrop image, gradient overlay for text readability, and a playable trailer modal
- **Clickable thumbnail strip** — clicking a thumbnail swaps the entire hero (backdrop, title, description, trailer) to feature that movie instead
- **Horizontally scrolling movie rows** — Latest Release and Top Trending, built from the same reusable `MovieRow`/`MovieCard` components
- **Rank-sorted Top Trending row** — automatically sorts by rank rather than relying on data order
- **Genre section** with color-coded, scrollable genre blocks
- **Responsive layout** — mobile-first CSS with breakpoints at 768px and 1024px; movie rows switch from a stacked mobile layout to a side-by-side sidebar layout on desktop
- **Reusable component library** — `Button`, `IconButton`, `Column`, `GenreBlock`, and `MovieCard` are each written once and reused across multiple sections with different data/props
- **Real movie data** sourced from [TMDB](https://www.themoviedb.org/)

---

## Tech Stack

| Tool | Purpose |
|---|---|
| [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) | Component structure and type safety |
| [Vite](https://vite.dev/) | Dev server and build tooling |
| Plain CSS | Styling (no CSS frameworks, per challenge requirements) |
| [Bootstrap Icons](https://icons.getbootstrap.com/) | Icon set (nav, footer, hero controls) |
| [TMDB API](https://www.themoviedb.org/documentation/api) | Movie posters, backdrops, and metadata |
| [Netlify](https://www.netlify.com/) | Deployment and hosting |

---

## Project Structure

```
src/
  components/
    shared/
      Button.tsx        # Reusable button (solid / outline / subscribe variants)
      IconButton.tsx     # Reusable icon-only button
      TrailerModal.tsx   # Click-outside-to-close video modal
    Navbar.tsx
    Hero.tsx
    MovieCard.tsx
    MovieRow.tsx
    GenreBlock.tsx
    GenreSection.tsx
    Column.tsx
    Footer.tsx
  data/
    Movie.ts             # Movie content (hero, latest release, top trending, genres)
  types/
    Movie.ts             # Movie interface — the shape all movie data must match
  styles/                # Per-component CSS files
  App.tsx                # Composition root — assembles the full page
  main.tsx                # Entry point
  index.css               # Global design tokens (colors, spacing, fonts)
```

**Why the split?** `data/` holds content, `types/` defines its shape, `components/` renders it. Swapping hardcoded data for a live API call would only require changing `data/Movie.ts` — every component that imports the `Movie` type keeps working unchanged.

---

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/thegrindneverstops21/trilok-ui.git
cd trilok-ui
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## Deployment

This project auto-deploys to [Netlify](https://www.netlify.com/) on every push to `main`. See the [Deploys tab](https://app.netlify.com/) on the connected Netlify site for build status and history.

---

## Attribution

This product uses the TMDB API but is not endorsed or certified by TMDB.

---

## Challenge Context

Built for a ReactTS UI Challenge assignment, evaluated on:
- Design accuracy (layout, colors, fonts, elements)
- Page interactivity (hover states on links and buttons)
- Use of reusable, ReactTS-driven components
- Responsiveness across mobile, tablet, and desktop
