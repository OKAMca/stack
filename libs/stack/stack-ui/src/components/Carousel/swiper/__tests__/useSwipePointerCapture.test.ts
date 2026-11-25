import type { SwiperClass } from 'swiper/react'
import { renderHook } from '@testing-library/react'
import Swiper from 'swiper'
import { useSwipePointerCapture } from '../useSwipePointerCapture'

function createSwiper(): { element: HTMLDivElement, swiper: SwiperClass } {
  const element = document.createElement('div')
  element.innerHTML = '<div class="swiper-wrapper"><div class="swiper-slide"></div></div>'
  document.body.append(element)
  return { element, swiper: new Swiper(element) as SwiperClass }
}

describe('useSwipePointerCapture', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('listens for pointerdown on the live instance\'s element', () => {
    const { element, swiper } = createSwiper()
    const addEventListener = vi.spyOn(element, 'addEventListener')

    renderHook(() => useSwipePointerCapture(swiper))

    expect(addEventListener).toHaveBeenCalledWith('pointerdown', expect.any(Function), true)
  })

  it('skips an instance that was destroyed while its context still holds it', () => {
    const { swiper } = createSwiper()
    swiper.destroy(true, false)

    expect(() => renderHook(() => useSwipePointerCapture(swiper))).not.toThrow()
  })

  it('attaches to the new instance that replaces a destroyed one', () => {
    const { swiper: destroyed } = createSwiper()
    destroyed.destroy(true, false)
    const { element, swiper: replacement } = createSwiper()
    const addEventListener = vi.spyOn(element, 'addEventListener')

    const { rerender } = renderHook(({ controller }) => useSwipePointerCapture(controller), {
      initialProps: { controller: destroyed },
    })
    rerender({ controller: replacement })

    expect(addEventListener).toHaveBeenCalledWith('pointerdown', expect.any(Function), true)
  })
})
