# Lendo Solid TS

A [Solid JS](https://www.solidjs.com) version of the Lendo Shopping Cart, built as a coding exercise to stay sharp and explore a new frontend framework before starting to work at Lendo.

## About

This basic shopping cart app lets users browse products and add items to a cart with selected color and storage options. For full details, see the [original project](https://github.com/elalienx/lendo-shopping-cart).

## Installation

1. Clone this repository.
1. Install dependencies: `pnpm i`
1. Start project: `pnpm dev`

## Features

Although this list of features seems basic, they are a strong foundation to test the capabilities of Solid JS.

### React vs. Solid

1. Signals: For local state.
1. Router: For multi-page navigation. ⚠️ (Cannot compose the navbar as clean as in React)
1. Store: For global state.
1. Lazy loading: To split the project code for faster page loads.
1. Suspense: Display info during lazy load.

### Other frontend tooling

1. [Vite TS Config path](https://www.npmjs.com/package/vite-tsconfig-paths): For better TypeScript imports. ✅
1. [FontAwesome](): Icon library. ✅
1. [Vitest](): To add unit testing to the project.
