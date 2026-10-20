import assert from 'node:assert/strict'
import { test } from 'node:test'
import { clearHash, drag, hash, phone, touch, touchPhone, updateCarouselArgs, withCarouselStory } from './carousel-harness.mjs'

// Run against Storybook: node tools/browser/carousel-touch.mjs [baseURL]
for (const pointer of ['touch', 'mouse']) {
  test(`${pointer} drags do not activate links, while Enter and taps do`, async () => {
    await withCarouselStory('linked-slides', { ...touchPhone, isMobile: pointer === 'touch' }, async (page) => {
      await page.locator('#linked-slides').waitFor()
      const first = page.getByRole('link', { name: 'First', exact: true })
      await first.scrollIntoViewIfNeeded()
      const bounds = await first.boundingBox()
      assert.ok(bounds && bounds.width > 100 && bounds.height > 0)
      await drag(page, {
        pointer,
        startX: bounds.x + bounds.width * 0.9,
        endX: bounds.x + bounds.width * 0.1,
        y: bounds.y + bounds.height / 2,
      })
      // Include React Aria's delayed click fallback and Swiper's transition.
      await page.waitForTimeout(500)
      assert.equal(hash(page), '', 'A swipe must not activate the card link')
      const second = page.getByRole('link', { name: 'Second', exact: true })
      const secondBounds = await second.boundingBox()
      assert.ok(secondBounds && secondBounds.x >= bounds.x - 1 && secondBounds.x < bounds.x + 2, 'Swipe should advance one slide')
      await second.focus()
      await clearHash(page)
      await page.keyboard.press('Enter')
      assert.equal(hash(page), '#slide-1', 'Keyboard activation after swiping must still work')
      await clearHash(page)
      await second.tap()
      assert.equal(hash(page), '#slide-1', 'A tap after swiping must still activate the card link')
    })
  })
}

for (const release of ['outside', 'cancel']) {
  test(`virtual activation works after a drag ending with ${release}`, async () => {
    await withCarouselStory('linked-slides', touchPhone, async (page) => {
      const bounds = await page.getByRole('link', { name: 'First', exact: true }).boundingBox()
      assert.ok(bounds)
      const endX = bounds.x + bounds.width * 0.1
      await drag(page, { startX: bounds.x + bounds.width * 0.9, endX, y: bounds.y + bounds.height / 2, release: false })
      if (release === 'outside') {
        // Leave the press target before release, so React Aria cancels its press.
        await touch(page, 'touchMove', { x: endX, y: bounds.y + bounds.height + 40 })
        await touch(page, 'touchEnd')
        await page.waitForTimeout(500)
      }
      else {
        await touch(page, 'touchCancel')
        await page.evaluate(() => new Promise(requestAnimationFrame))
      }
      assert.equal(hash(page), '')
      // A virtual activation has no preceding pointerdown or keydown.
      await page.getByRole('link', { name: 'Second', exact: true }).evaluate(link => link.click())
      assert.equal(hash(page), '#slide-1')
    })
  })
}

for (const delay of [10, 40]) {
  test(`full-viewport swipe moves one card in either direction with ${delay}ms steps`, async () => {
    await withCarouselStory('linked-slides-single-swipe', touchPhone, async (page) => {
      const rail = await page.locator('#linked-slides').boundingBox()
      const first = await page.getByRole('link', { name: 'First', exact: true }).boundingBox()
      assert.ok(rail && first)
      for (const [name, startX, endX] of [['Second', rail.x + rail.width - 1, 1], ['First', rail.x + 1, 401]]) {
        await drag(page, { startX, endX, y: first.y + first.height / 2, delay })
        await page.waitForTimeout(500)
        assert.equal(hash(page), '', 'Swiping must not activate a link')
        const active = await page.getByRole('link', { name, exact: true }).boundingBox()
        assert.ok(active && Math.abs(active.x - first.x) < 1, `Gesture must land on ${name}`)
      }
      await page.getByRole('link', { name: 'First', exact: true }).tap()
      assert.equal(hash(page), '#slide-0', 'A tap must still activate the link')
    })
  })
}

test('swipe limiting stops the rail at the next card and leaves swipe params alone', async () => {
  await withCarouselStory('linked-slides-single-swipe', touchPhone, async (page) => {
    const read = () => page.evaluate(() => {
      const { swiper } = document.querySelector('#linked-slides')
      return { position: -swiper.translate, next: swiper.slidesGrid[1], touchRatio: swiper.params.touchRatio, longSwipesRatio: swiper.params.longSwipesRatio }
    })
    const rail = await page.locator('#linked-slides').boundingBox()
    const first = await page.getByRole('link', { name: 'First', exact: true }).boundingBox()
    assert.ok(rail && first)
    await drag(page, { startX: rail.x + rail.width - 1, endX: 1, y: first.y + first.height / 2, release: false })
    const dragged = await read()
    assert.ok(dragged.position > dragged.next - 2 && dragged.position < dragged.next, 'The rail must stop just before the next card')
    assert.deepEqual({ touchRatio: dragged.touchRatio, longSwipesRatio: dragged.longSwipesRatio }, { touchRatio: 1, longSwipesRatio: 0.5 })
    await touch(page, 'touchEnd')
  })
})

test('disabling swipe limiting restores native multi-card swipes', async () => {
  await withCarouselStory('linked-slides-single-swipe', touchPhone, async (page) => {
    await updateCarouselArgs(page, { limitSwipeToOneSlide: false })
    const rail = await page.locator('#linked-slides').boundingBox()
    const first = await page.getByRole('link', { name: 'First', exact: true }).boundingBox()
    assert.ok(rail && first)
    await drag(page, { startX: rail.x + rail.width - 1, endX: 1, y: first.y + first.height / 2, delay: 10 })
    await page.waitForTimeout(500)
    assert.equal(await page.evaluate(() => document.querySelector('#linked-slides').swiper.activeIndex), 2, 'A native full-viewport swipe passes the next card')
  })
})

test('a canceled limited drag does not limit later navigation', async () => {
  await withCarouselStory('linked-slides-single-swipe', phone, async (page) => {
    const rail = await page.locator('#linked-slides').boundingBox()
    const first = await page.getByRole('link', { name: 'First', exact: true }).boundingBox()
    assert.ok(rail && first)
    await drag(page, { pointer: 'mouse', startX: rail.x + rail.width - 1, endX: rail.x + rail.width / 2, y: first.y + first.height / 2, release: false })
    // A canceled pointer gets no pointerup. Outside Safari, Swiper then emits no touchEnd.
    await page.evaluate(() => document.dispatchEvent(new PointerEvent('pointercancel', { pointerId: 1, pointerType: 'mouse' })))
    const moved = await page.evaluate(() => {
      const { swiper } = document.querySelector('#linked-slides')
      swiper.slideTo(3, 0)
      return { position: -swiper.translate, target: swiper.slidesGrid[3] }
    })
    assert.equal(moved.position, moved.target, 'Programmatic slides must not be limited')
  })
})

for (const name of ['First', 'Third']) {
  test(`a virtual click on ${name === 'First' ? 'the dragged' : 'another'} card works right after a swipe`, async () => {
    await withCarouselStory('linked-slides', touchPhone, async (page) => {
      const bounds = await page.getByRole('link', { name: 'First', exact: true }).boundingBox()
      assert.ok(bounds)
      const transitionEnd = page.evaluate(() => new Promise((resolve) => {
        document.querySelector('#linked-slides').swiper.once('transitionEnd', resolve)
      }))
      await drag(page, { startX: bounds.x + bounds.width * 0.9, endX: bounds.x + bounds.width * 0.1, y: bounds.y + bounds.height / 2 })
      // Swiper blocks clicks while animating; activate as soon as it allows clicks again.
      await transitionEnd
      await page.getByRole('link', { name, exact: true }).evaluate(link => link.click())
      assert.equal(hash(page), name === 'First' ? '#slide-0' : '#slide-2', 'Screen reader activation must not depend on swipe timing')
    })
  })
}
