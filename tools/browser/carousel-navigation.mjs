import assert from 'node:assert/strict'
import { test } from 'node:test'
import { clearHash, countSwiperUpdates, drag, hash, phone, swiperUpdates, updateCarouselArgs, withCarouselStory } from './carousel-harness.mjs'

// Run against Storybook: node tools/browser/carousel-navigation.mjs [baseURL]
function arrows(page) {
  return {
    next: page.getByRole('button', { name: 'Next slide', exact: true }),
    prev: page.getByRole('button', { name: 'Previous slide', exact: true }),
  }
}

async function isFullyVisible(page, name) {
  const card = await page.getByRole('link', { name, exact: true }).boundingBox()
  const rail = await page.locator('#linked-slides').boundingBox()
  return card != null && rail != null && card.x >= rail.x - 1 && card.x + card.width <= rail.x + rail.width + 1
}

test('fractional peek keeps next enabled until every card is reachable', async () => {
  await withCarouselStory('linked-slides', phone, async (page) => {
    const { next, prev } = arrows(page)
    assert.equal(await prev.getAttribute('aria-disabled'), 'true')
    for (const name of ['Second', 'Third', 'Fourth']) {
      assert.equal(await next.getAttribute('aria-disabled'), 'false', `Next must reach ${name}`)
      await next.click()
      await page.waitForTimeout(400)
      assert.ok(await isFullyVisible(page, name), `${name} must be fully visible`)
    }
    assert.equal(await next.getAttribute('aria-disabled'), 'true')
    await prev.click()
    await page.waitForTimeout(400)
    assert.equal(await next.getAttribute('aria-disabled'), 'false')
  })
})

test('rewind keeps both arrows enabled at the edges', async () => {
  await withCarouselStory('linked-slides-rewind', phone, async (page) => {
    const { next, prev } = arrows(page)
    assert.equal(await prev.getAttribute('aria-disabled'), 'false', 'Previous must rewind from the first card')
    await prev.click()
    await page.waitForTimeout(400)
    assert.ok(await isFullyVisible(page, 'Fourth'), 'Previous must rewind to the last card')
    assert.equal(await next.getAttribute('aria-disabled'), 'false', 'Next must rewind from the last card')
    await next.click()
    await page.waitForTimeout(400)
    assert.ok(await isFullyVisible(page, 'First'), 'Next must rewind to the first card')
  })
})

test('opt-in final card starts at the same position after resizing', async () => {
  await withCarouselStory('linked-slides-start-aligned', phone, async (page) => {
    const first = await page.getByRole('link', { name: 'First', exact: true }).boundingBox()
    assert.ok(first)
    const { next } = arrows(page)
    for (let step = 0; step < 3; step++) {
      await next.click()
      await page.waitForTimeout(400)
    }
    const last = page.getByRole('link', { name: 'Fourth', exact: true })
    const finalBounds = await last.boundingBox()
    assert.ok(finalBounds && Math.abs(finalBounds.x - first.x) < 1, 'Last card must align with the first card start')
    assert.equal(await next.getAttribute('aria-disabled'), 'true')
    // Wait for Swiper to measure each size; back-to-back resizes can coalesce into no layout pass.
    const phoneWidth = await page.evaluate(() => document.querySelector('#linked-slides').swiper.width)
    await page.setViewportSize({ width: 700, height: 874 })
    await page.waitForFunction(width => document.querySelector('#linked-slides').swiper.width !== width, phoneWidth)
    await page.setViewportSize({ width: 402, height: 874 })
    await page.waitForFunction(width => document.querySelector('#linked-slides').swiper.width === width, phoneWidth)
    // Let Swiper finish repositioning the active slide after the final layout pass.
    await page.waitForTimeout(400)
    const resizedBounds = await last.boundingBox()
    assert.ok(resizedBounds && Math.abs(resizedBounds.x - first.x) < 1, 'Resize must preserve the final start position')
    assert.ok(Math.abs(resizedBounds.width - first.width) < 1, 'Resize must preserve the fractional card width')
  })
})

test('final-card alignment updates when its React prop changes', async () => {
  await withCarouselStory('linked-slides', phone, async (page) => {
    const first = await page.getByRole('link', { name: 'First', exact: true }).boundingBox()
    assert.ok(first)
    const { next } = arrows(page)
    for (let step = 0; step < 3; step++) {
      await next.click()
      await page.waitForTimeout(400)
    }
    const last = page.getByRole('link', { name: 'Fourth', exact: true })
    const native = await last.boundingBox()
    assert.ok(native && native.x > first.x + 1, 'The final card initially uses native end alignment')
    await updateCarouselArgs(page, { alignLastSlideToStart: true })
    const aligned = await last.boundingBox()
    assert.ok(aligned && Math.abs(aligned.x - first.x) < 1, 'Enabling the prop must align the final card to the start')
    await updateCarouselArgs(page, { alignLastSlideToStart: false })
    const disabled = await last.boundingBox()
    assert.ok(disabled && Math.abs(disabled.x - native.x) < 1, 'Disabling the prop must restore native snapping')
    await updateCarouselArgs(page, { alignLastSlideToStart: true })
    await updateCarouselArgs(page, { alignLastSlideToStart: undefined })
    const removed = await last.boundingBox()
    assert.ok(removed && Math.abs(removed.x - native.x) < 1, 'Removing the prop must restore native snapping')
  })
})

test('desktop multi-slide carousel keeps default arrows, drags and clicks', async () => {
  await withCarouselStory('linked-slides-multiple-per-view', { viewport: { width: 1440, height: 900 } }, async (page) => {
    const { next, prev } = arrows(page)
    // Default slidesPerGroup follows slidesPerView: each press moves a page of two.
    const pages = [['First', 'Second'], ['Third', 'Fourth'], ['Fifth', 'Sixth']]
    for (const [index, names] of pages.entries()) {
      if (index > 0) {
        await next.click()
        await page.waitForTimeout(400)
      }
      for (const name of names)
        assert.ok(await isFullyVisible(page, name), `${name} must be visible on page ${index + 1}`)
      assert.equal(await prev.getAttribute('aria-disabled'), String(index === 0), `Previous state on page ${index + 1}`)
      assert.equal(await next.getAttribute('aria-disabled'), String(index === pages.length - 1), `Next state on page ${index + 1}`)
    }
    for (let step = 0; step < 2; step++) {
      await prev.click()
      await page.waitForTimeout(400)
    }
    assert.equal(await prev.getAttribute('aria-disabled'), 'true')
    assert.equal(await next.getAttribute('aria-disabled'), 'false')

    const first = await page.getByRole('link', { name: 'First', exact: true }).boundingBox()
    const second = await page.getByRole('link', { name: 'Second', exact: true }).boundingBox()
    assert.ok(first && second)
    // A long swipe must cross half of the two-slide group to page forward.
    await drag(page, {
      pointer: 'mouse',
      startX: second.x + second.width * 0.9,
      endX: first.x + first.width * 0.1,
      y: second.y + second.height / 2,
    })
    await page.waitForTimeout(500)
    assert.equal(hash(page), '', 'A mouse drag must not activate the card link')
    assert.ok(await isFullyVisible(page, 'Third'), 'The mouse drag must move the carousel')
    assert.equal(await prev.getAttribute('aria-disabled'), 'false')
    await clearHash(page)
    await page.getByRole('link', { name: 'Third', exact: true }).click()
    assert.equal(hash(page), '#slide-2', 'A plain click must activate the card link')
  })
})

test('final-card alignment keeps a rail whose cards all fit locked', async () => {
  await withCarouselStory('linked-slides-start-aligned', phone, async (page) => {
    await updateCarouselArgs(page, { slidesPerView: 5 })
    const state = await page.evaluate(() => {
      const { swiper } = document.querySelector('#linked-slides')
      return { snaps: swiper.snapGrid.length, isLocked: swiper.isLocked, isEnd: swiper.isEnd }
    })
    assert.deepEqual(state, { snaps: 1, isLocked: true, isEnd: true }, 'An underfilled rail must keep its single native snap')
    assert.equal(await arrows(page).next.getAttribute('aria-disabled'), 'true')
  })
})

test('mounting a carousel runs no extra Swiper update', async () => {
  await withCarouselStory('linked-slides-start-aligned', phone, async (page) => {
    await page.waitForTimeout(300)
    assert.equal(await swiperUpdates(page), 0, 'Initialization already applies the layout options')
    await updateCarouselArgs(page, { alignLastSlideToStart: false })
    assert.equal(await swiperUpdates(page), 1, 'Changing an option must update the layout once')
  }, countSwiperUpdates)
})

test('an inline alignment predicate does not update the layout on each render', async () => {
  await withCarouselStory('linked-slides-inline-alignment', phone, async (page) => {
    await page.waitForTimeout(300)
    // Re-render the carousel without changing any Swiper param or option result.
    await updateCarouselArgs(page, { 'aria-label': 'Projects' })
    await updateCarouselArgs(page, { 'aria-label': 'Featured projects' })
    assert.equal(await swiperUpdates(page), 0, 'A new predicate with the same result must not re-layout')
  }, countSwiperUpdates)
})
