# stack-ui

Common UI components shared across multiple projects.
This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test stack-ui` to execute the unit tests via [Vitest](https://vitest.dev/).


## Carousel browser regression

With `pnpm storybook` running, use a real Chromium touch session to check linked
slides. DOM-only events cannot reproduce React Aria's delayed click after a drag.

```sh
pnpm exec playwright install chromium
node tools/browser/carousel-touch.mjs
node tools/browser/carousel-navigation.mjs
```

Pass a different Storybook base URL as the first argument if needed. The test
checks touch and mouse dragging, then keyboard and tap activation. The navigation
regression checks that every card is reachable with fractional slides per view.
