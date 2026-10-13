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
