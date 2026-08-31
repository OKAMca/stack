import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import imgixImageLoader from './index'

const SRC = 'https://cms.example.com/assets/abc-123/image.jpg'

function load(params: Record<string, string>, width = 640) {
  const url = new URL(SRC)
  url.search = new URLSearchParams(params).toString()
  const result = imgixImageLoader({ src: url.href, width, quality: undefined })
  return new URL(result).searchParams
}

describe('imgixImageLoader crop aspect ratio', () => {
  beforeEach(() => {
    process.env.NEXT_PUBLIC_IMGIX_SUBDOMAIN = 'test-subdomain'
  })

  afterEach(() => {
    delete process.env.NEXT_PUBLIC_IMGIX_SUBDOMAIN
  })

  it('prefers a valid crop_ar over the intrinsic width:height ratio', () => {
    const params = load({ fit: 'cover', width: '1000', height: '1500', crop_ar: '16:9' })
    expect(params.get('ar')).toBe('16:9')
  })

  it('still validates the focal point against the intrinsic dimensions when crop_ar is set', () => {
    const params = load({
      fit: 'cover',
      width: '1000',
      height: '1500',
      crop_ar: '16:9',
      focal_point_x: '100',
      focal_point_y: '200',
    })
    expect(params.get('crop')).toBe('focalpoint')
    expect(params.get('fp-x')).toBe((100 / 1000).toString())
    expect(params.get('fp-y')).toBe((200 / 1500).toString())
  })

  it.each([
    ['malformed non-numeric value', 'abc:def'],
    ['a single number', '16'],
    ['more than two parts', '16:9:1'],
    ['a zero component', '0:9'],
    ['a negative component', '16:-9'],
    ['an empty string', ''],
  ])('falls back to the intrinsic ratio when crop_ar is %s (%s)', (_description, cropAr) => {
    const params = load({ fit: 'cover', width: '1000', height: '1500', crop_ar: cropAr })
    expect(params.get('ar')).toBe('1000:1500')
  })

  it('falls back to the intrinsic ratio when crop_ar is absent (legacy behaviour)', () => {
    const params = load({ fit: 'cover', width: '1000', height: '1500' })
    expect(params.get('ar')).toBe('1000:1500')
  })

  it('ignores crop_ar for non-cropping fits', () => {
    const params = load({ fit: 'contain', width: '1000', height: '1500', crop_ar: '16:9' })
    expect(params.get('fit')).toBe('fill')
    expect(params.get('ar')).toBeNull()
  })
})
