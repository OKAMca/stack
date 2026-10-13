import assert from 'node:assert/strict'
import { test } from 'node:test'
import { clearHash, drag, hash, touch, touchPhone, withCarouselStory } from './carousel-harness.mjs'

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
        // Cancellation must release suppression without waiting for the grace period.
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

test('single-slide swipe keeps touch ratios the consumer updates after mount', async () => {
  await withCarouselStory('linked-slides-single-swipe', touchPhone, async (page) => {
    // swiper/react writes changed props to params, then calls update().
    const ratios = await page.evaluate(() => {
      const swiper = document.querySelector('#linked-slides').swiper
      const read = () => ({ touchRatio: swiper.params.touchRatio, longSwipesRatio: swiper.params.longSwipesRatio })
      const limit = (swiper.slidesGrid[1] - swiper.slidesGrid[0]) / window.innerWidth
      swiper.params.touchRatio = 0.5
      swiper.params.longSwipesRatio = 0.25
      swiper.update()
      const lowered = read()
      swiper.update()
      const repeated = read()
      swiper.params.touchRatio = 2
      swiper.update()
      return { limit, lowered, repeated, raised: read() }
    })
    assert.ok(ratios.limit > 0.5 && ratios.limit < 1, 'The story stride must sit between the tested ratios')
    assert.deepEqual(ratios.lowered, { touchRatio: 0.5, longSwipesRatio: 0.25 }, 'A lower consumer ratio must win')
    assert.deepEqual(ratios.repeated, ratios.lowered, 'Repeated layout passes must not compound the override')
    assert.ok(Math.abs(ratios.raised.touchRatio - ratios.limit) < 1e-9, 'A higher consumer ratio is still bounded')
    assert.ok(Math.abs(ratios.raised.longSwipesRatio - 0.25 * ratios.limit / 2) < 1e-9, 'The physical threshold follows the new base')
  })
})
