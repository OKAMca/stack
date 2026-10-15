import { chromium } from 'playwright'

// Run against Storybook: node tools/browser/<script>.mjs [baseURL]
const baseURL = process.argv[2] || 'http://localhost:4400'

export const phone = { viewport: { width: 402, height: 874 } }
export const touchPhone = { ...phone, isMobile: true, hasTouch: true }

/** Open a carousel story, wait for Swiper to initialize, and always close the browser. */
export async function withCarouselStory(story, pageOptions, run) {
  const browser = await chromium.launch()
  try {
    const page = await browser.newPage(pageOptions)
    await page.goto(`${baseURL}/iframe.html?id=base-components-carousel--${story}&viewMode=story`)
    await page.waitForFunction(() => document.querySelector('#linked-slides')?.swiper?.initialized)
    return await run(page)
  }
  finally {
    await browser.close()
  }
}

/** Update Storybook args through React without remounting the carousel. */
export async function updateCarouselArgs(page, updatedArgs) {
  await page.evaluate(async (args) => {
    const channel = window.__STORYBOOK_ADDONS_CHANNEL__
    const storyId = new URLSearchParams(location.search).get('id')
    const swiper = document.querySelector('#linked-slides').swiper
    await new Promise((resolve) => {
      channel.once('storyArgsUpdated', resolve)
      channel.emit('updateStoryArgs', { storyId, updatedArgs: args })
    })
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))
    if (document.querySelector('#linked-slides').swiper !== swiper)
      throw new Error('Updating carousel props must preserve the mounted Swiper instance')
  }, updatedArgs)
}

const cdpSessions = new WeakMap()

/** Send a raw CDP touch event, so Swiper and React Aria see real touch input. */
export async function touch(page, type, point) {
  if (!cdpSessions.has(page))
    cdpSessions.set(page, await page.context().newCDPSession(page))
  await cdpSessions.get(page).send('Input.dispatchTouchEvent', { type, touchPoints: point == null ? [] : [point] })
}

/**
 * Drag horizontally in ten steps. `release: false` leaves a touch pressed so the
 * caller can end it differently (move outside, cancel).
 */
export async function drag(page, { pointer = 'touch', startX, endX, y, delay = 25, release = true }) {
  if (pointer === 'touch') {
    await touch(page, 'touchStart', { x: startX, y })
  }
  else {
    await page.mouse.move(startX, y)
    await page.mouse.down()
  }
  for (let step = 1; step <= 10; step++) {
    const x = startX + (endX - startX) * step / 10
    if (pointer === 'touch')
      await touch(page, 'touchMove', { x, y })
    else
      await page.mouse.move(x, y)
    await page.waitForTimeout(delay)
  }
  if (!release)
    return
  if (pointer === 'touch')
    await touch(page, 'touchEnd')
  else
    await page.mouse.up()
}

export function hash(page) {
  return new URL(page.url()).hash
}

export async function clearHash(page) {
  await page.evaluate(() => history.replaceState(null, '', location.pathname + location.search))
}
