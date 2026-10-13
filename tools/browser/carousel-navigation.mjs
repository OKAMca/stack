import assert from 'node:assert/strict'
import { test } from 'node:test'
import { chromium } from 'playwright'

const baseURL = process.argv[2] || 'http://localhost:4400'
test('fractional peek keeps next enabled until every card is reachable', async () => {
  const browser = await chromium.launch()
  try {
    const page = await browser.newPage({ viewport: { width: 402, height: 874 } })
    await page.goto(`${baseURL}/iframe.html?id=base-components-carousel--linked-slides&viewMode=story`)
    await page.waitForFunction(() => document.querySelector('#linked-slides')?.swiper?.initialized)
    const next = page.getByRole('button', { name: 'Next slide', exact: true })
    const prev = page.getByRole('button', { name: 'Previous slide', exact: true })
    assert.equal(await prev.getAttribute('aria-disabled'), 'true')
    for (const name of ['Second', 'Third', 'Fourth']) {
      assert.equal(await next.getAttribute('aria-disabled'), 'false', `Next must reach ${name}`)
      await next.click()
      await page.waitForTimeout(400)
      const card = await page.getByRole('link', { name, exact: true }).boundingBox()
      const rail = await page.locator('#linked-slides').boundingBox()
      assert.ok(card && rail && card.x >= rail.x - 1 && card.x + card.width <= rail.x + rail.width + 1, `${name} must be fully visible`)
    }
    assert.equal(await next.getAttribute('aria-disabled'), 'true')
    await prev.click()
    await page.waitForTimeout(400)
    assert.equal(await next.getAttribute('aria-disabled'), 'false')
  }
  finally {
    await browser.close()
  }
})

test('opt-in final card starts at the same position after resizing', async () => {
  const browser = await chromium.launch()
  try {
    const page = await browser.newPage({ viewport: { width: 402, height: 874 } })
    await page.goto(`${baseURL}/iframe.html?id=base-components-carousel--linked-slides-start-aligned&viewMode=story`)
    await page.waitForFunction(() => document.querySelector('#linked-slides')?.swiper?.initialized)
    const first = await page.getByRole('link', { name: 'First', exact: true }).boundingBox()
    assert.ok(first)
    const next = page.getByRole('button', { name: 'Next slide', exact: true })
    for (let step = 0; step < 3; step++) {
      await next.click()
      await page.waitForTimeout(400)
    }
    const last = page.getByRole('link', { name: 'Fourth', exact: true })
    const finalBounds = await last.boundingBox()
    assert.ok(finalBounds && Math.abs(finalBounds.x - first.x) < 1, 'Last card must align with the first card start')
    assert.equal(await next.getAttribute('aria-disabled'), 'true')
    await page.setViewportSize({ width: 700, height: 874 })
    await page.waitForTimeout(400)
    await page.setViewportSize({ width: 402, height: 874 })
    await page.waitForTimeout(400)
    const resizedBounds = await last.boundingBox()
    assert.ok(resizedBounds && Math.abs(resizedBounds.x - first.x) < 1, 'Resize must preserve the final start position')
    assert.ok(Math.abs(resizedBounds.width - first.width) < 1, 'Resize must preserve the fractional card width')
  }
  finally {
    await browser.close()
  }
})
