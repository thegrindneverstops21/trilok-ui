# Trilok UI

A streaming homepage UI challenge built with React, TypeScript, and Vite.

## Run locally

Use Node.js 22.12 or later, then run:

```sh
npm ci
npm run dev
```

## Checks

```sh
npm run lint
npm run build
```

`npm run preview` serves the production build after building.

## Project structure

- `src/components/`: reusable page sections and shared buttons.
- `src/styles/`: styles for individual components.
- `src/types/Movie.ts`: shared movie data contract.
- `src/data/Movie.ts`: movie metadata and genre data.
- `src/index.css`: design tokens, shared spacing, and global styles.

## UI refinements

The hero grows with its content instead of clipping text. Preview images keep a 2:3 poster ratio, and move below the copy on tablets and phones. Movie rails scroll horizontally on narrow screens. The Subscribe button uses a compact rectangular shape with lightly rounded corners. Shared page gutters align sections, while the navigation changes layout before its actions crowd the logo.

Comments explain layout constraints and data-handling decisions. Keep comments focused on why a choice exists instead of narrating every JSX element.

## Scope and dependencies

This is a frontend UI demonstration. Search, Subscribe, hero arrows, and footer destinations are placeholders, not connected services. The trailer requires YouTube; artwork and fonts require external network access. The menu links navigate to sections on this page.

An original challenge mockup is needed to assess exact visual fidelity. These refinements preserve the existing dark theme and red accents.
