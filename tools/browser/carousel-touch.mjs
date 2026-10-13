import assert from 'node:assert/strict'
import { test } from 'node:test'
import { chromium } from 'playwright'

// Run against Storybook: node tools/browser/carousel-touch.mjs [baseURL]
const baseURL = process.argv[2] || 'http://localhost:4400'
const storyURL = `${baseURL}/iframe.html?id=base-components-carousel--linked-slides&viewMode=story`
for (const pointer of ['touch', 'mouse']) {
  test(`${pointer} drags do not activate links, while Enter and taps do`, async () => {
    const browser = await chromium.launch()
    try {
      const page = await browser.newPage({ viewport: { width: 402, height: 874 }, isMobile: pointer === 'touch', hasTouch: true })
      await page.goto(storyURL)
      const carousel = page.locator('#linked-slides')
      await carousel.waitFor()
      await page.waitForFunction(() => document.querySelector('#linked-slides')?.swiper?.initialized)
      const first = page.getByRole('link', { name: 'First', exact: true })
      await first.scrollIntoViewIfNeeded()
      const bounds = await first.boundingBox()
      assert.ok(bounds && bounds.width > 100 && bounds.height > 0)
      const cdp = await page.context().newCDPSession(page)
      const y = bounds.y + bounds.height / 2
      const startX = bounds.x + bounds.width * 0.9
      const endX = bounds.x + bounds.width * 0.1
      if (pointer === 'touch') {
        await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: startX, y }] })
      }
      else {
        await page.mouse.move(startX, y)
        await page.mouse.down()
      }
      for (let step = 1; step <= 10; step++) {
        const x = startX + (endX - startX) * step / 10
        if (pointer === 'touch')
          await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x, y }] })
        else
          await page.mouse.move(x, y)
        await page.waitForTimeout(25)
      }
      if (pointer === 'touch')
        await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] })
      else
        await page.mouse.up()
      // Include React Aria's delayed click fallback and Swiper's transition.
      await page.waitForTimeout(500)
      assert.equal(new URL(page.url()).hash, '', 'A swipe must not activate the card link')
      const second = page.getByRole('link', { name: 'Second', exact: true })
      const secondBounds = await second.boundingBox()
      assert.ok(secondBounds && secondBounds.x >= bounds.x - 1 && secondBounds.x < bounds.x + 2, 'Swipe should advance one slide')
      await second.focus()
      await page.evaluate(() => history.replaceState(null, '', location.pathname + location.search))
      await page.keyboard.press('Enter')
      assert.equal(new URL(page.url()).hash, '#slide-1', 'Keyboard activation after swiping must still work')
      await page.evaluate(() => history.replaceState(null, '', location.pathname + location.search))
      await second.tap()
      assert.equal(new URL(page.url()).hash, '#slide-1', 'A tap after swiping must still activate the card link')
    }
    finally {
      await browser.close()
    }
  })
}

for (const release of ['outside', 'cancel']) {
  test(`virtual activation works after a drag ending with ${release}`, async () => {
    const browser = await chromium.launch()
    try {
      const page = await browser.newPage({ viewport: { width: 402, height: 874 }, isMobile: true, hasTouch: true })
      await page.goto(storyURL)
      await page.waitForFunction(() => document.querySelector('#linked-slides')?.swiper?.initialized)
      const first = page.getByRole('link', { name: 'First', exact: true })
      const bounds = await first.boundingBox()
      assert.ok(bounds)
      const cdp = await page.context().newCDPSession(page)
      const y = bounds.y + bounds.height / 2
      const startX = bounds.x + bounds.width * 0.9
      const endX = bounds.x + bounds.width * 0.1
      await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: startX, y }] })
      for (let step = 1; step <= 10; step++) {
        const x = startX + (endX - startX) * step / 10
        await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x, y }] })
        await page.waitForTimeout(25)
      }
      if (release === 'outside') {
      // Leave the press target before release, so React Aria cancels its press.
        await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: endX, y: bounds.y + bounds.height + 40 }] })
        await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] })
        await page.waitForTimeout(500)
      }
      else {
        await cdp.send('Input.dispatchTouchEvent', { type: 'touchCancel', touchPoints: [] })
        // Cancellation must release suppression without waiting for the grace period.
        await page.evaluate(() => new Promise(requestAnimationFrame))
      }
      assert.equal(new URL(page.url()).hash, '')
      // A virtual activation has no preceding pointerdown or keydown.
      await page.getByRole('link', { name: 'Second', exact: true }).evaluate(link => link.click())
      assert.equal(new URL(page.url()).hash, '#slide-1')
    }
    finally {
      await browser.close()
    }
  })
}

for (const delay of [10, 40]) {
  test(`full-viewport swipe moves one card in either direction with ${delay}ms steps`, async () => {
    const browser = await chromium.launch()
    try {
      const page = await browser.newPage({ viewport: { width: 402, height: 874 }, isMobile: true, hasTouch: true })
      await page.goto(`${baseURL}/iframe.html?id=base-components-carousel--linked-slides-single-swipe&viewMode=story`)
      await page.waitForFunction(() => document.querySelector('#linked-slides')?.swiper?.initialized)
      const rail = await page.locator('#linked-slides').boundingBox()
      const first = await page.getByRole('link', { name: 'First', exact: true }).boundingBox()
      assert.ok(rail && first)
      const cdp = await page.context().newCDPSession(page)
      for (const [name, startX, endX] of [['Second', rail.x + rail.width - 1, 1], ['First', rail.x + 1, 401]]) {
        const y = first.y + first.height / 2
        await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: startX, y }] })
        for (let step = 1; step <= 10; step++) {
          const x = startX + (endX - startX) * step / 10
          await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x, y }] })
          await page.waitForTimeout(delay)
        }
        await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] })
        await page.waitForTimeout(500)
        assert.equal(new URL(page.url()).hash, '', 'Swiping must not activate a link')
        const active = await page.getByRole('link', { name, exact: true }).boundingBox()
        assert.ok(active && Math.abs(active.x - first.x) < 1, `Gesture must land on ${name}`)
      }
      await page.getByRole('link', { name: 'First', exact: true }).tap()
      assert.equal(new URL(page.url()).hash, '#slide-0', 'A tap must still activate the link')
    }
    finally {
      await browser.close()
    }
  })
}
