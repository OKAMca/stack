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
fractional-slide navigation, final-card alignment after resizing, underfilled
rails staying locked, desktop paging with the default options, swipe limiting
stopping the rail at the next card, native swipes after disabling it, programmatic
slides after a canceled drag, clicks right after a swipe, and no extra layout
update on mount or when an inline predicate re-renders.

## Carousel layout options

Both options default to off. Pass `true` or a predicate receiving the current
Swiper instance to select layouts, for example
`limitSwipeToOneSlide={swiper => swiper.params.slidesPerView === 1.15}`.
Alignment predicates run after layout, including breakpoint and resize updates;
changing the option after mount recalculates the layout. Swipe-limit predicates run
on each drag move. Disabling or removing an option restores native behavior.

- `alignLastSlideToStart` extends the snap positions to the last card's start.
  Slide widths and the actual `slidesPerView` remain unchanged, so visible peeks
  retain their link and keyboard behavior.
- `limitSwipeToOneSlide` stops a dragged rail just before the next card and at the
  previous one, so a release moves at most one card. Swiper has no native option
  for this: it picks the target from how far the rail was dragged. The rail follows
  the finger normally, and Swiper's own `touchRatio`, `longSwipesRatio`, edge
  resistance and release logic stay unchanged.

These options support numeric `slidesPerView`, `slidesPerGroup={1}`, and one row.
Pass `slidesPerGroup={1}` explicitly, because the carousel otherwise defaults it to
`slidesPerView`.
They leave native snapping in place for loop, centered, auto-width, virtual,
CSS-mode, and multi-row carousels. Free mode is excluded because it has no discrete
end snap. `centerInsufficientSlides` is excluded because it moves slide positions
when the rail is underfilled. `roundLengths` is excluded to retain Swiper's own
pixel-rounded end-snap rules. `slidesOffsetBefore` and `slidesOffsetAfter` are
excluded because Swiper's native end snap accounts for them. Swipe limiting also
excludes vertical carousels. Empty and single-card rails, and rails whose cards all
fit, retain their native behavior.

