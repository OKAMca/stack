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
the Storybook base URL as its first argument. CI builds and serves static Storybook, then runs this target in the carousel
browser regression job. Coverage includes touch and mouse dragging, keyboard and
tap activation, virtual activation after a canceled or completed gesture,
fractional-slide navigation, final-card alignment after resizing, desktop
paging with the default options, and touch-ratio prop updates while swipe limiting
is enabled.

## Carousel layout options

Both options default to off. Pass `true` or a predicate receiving the current
Swiper instance to select layouts, for example
`limitSwipeToOneSlide={swiper => swiper.params.slidesPerView === 1.15}`.
Predicates run after layout, including breakpoint and resize updates.
Changing either option after mount recalculates the layout. Disabling or removing
an option restores native snapping or the configured base swipe ratios.

- `alignLastSlideToStart` extends the snap positions to the last card's start.
  Slide widths and the actual `slidesPerView` remain unchanged, so visible peeks
  retain their link and keyboard behavior.
- `limitSwipeToOneSlide` limits a horizontal viewport-wide gesture to one measured
  slide stride. It scales `longSwipesRatio` with `touchRatio`, preserving the
  physical distance needed for a slow swipe. A false predicate restores the
  configured base ratios, so mobile-only policies leave desktop behavior alone.

These options support numeric `slidesPerView`, `slidesPerGroup={1}`, and one row.
They leave native snapping in place for loop, centered, auto-width, virtual,
CSS-mode, and multi-row carousels. Free mode is excluded because it has no discrete
end snap. `centerInsufficientSlides` is excluded because it moves slide positions
when the rail is underfilled. `roundLengths` is excluded to retain Swiper's own
pixel-rounded end-snap rules. Swipe limiting also excludes vertical carousels.
Empty and single-card rails retain their native behavior.

Use the supplied responsive predicates for layout selection. The swipe limiter
owns `touchRatio` and `longSwipesRatio` while enabled; configure their base values
on the carousel rather than overriding them inside breakpoints. Changing either
prop after mount sets a new base value, which the limiter keeps.
