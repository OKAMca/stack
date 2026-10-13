# stack-ui

Common UI components shared across multiple projects.
This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test stack-ui` to execute the unit tests via [Vitest](https://vitest.dev/).

## Carousel browser regression

Run these commands from the repository root with `pnpm storybook` running.
The tests use a real Chromium touch session to check linked slides. DOM-only events cannot reproduce React Aria's delayed click after a drag.

```sh
pnpm exec playwright install chromium
pnpm exec nx run stack-ui:test-carousel
```

To use a different port, run either script in `tools/browser/` directly and pass
the Storybook base URL as its first argument. CI runs this target in the carousel
browser regression job. Coverage includes touch and mouse dragging, keyboard and
tap activation, virtual activation after a canceled or completed gesture,
fractional-slide navigation, and final-card alignment after resizing.
