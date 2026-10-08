import { describe, expect, it, vi } from 'vitest'
import handleDraftRoute, { parseDraftParams } from './route'

const draft = vi.hoisted(() => ({
  isEnabled: true,
  enable: vi.fn(),
  disable: vi.fn(),
}))
draft.enable.mockImplementation(() => {
  draft.isEnabled = true
})
draft.disable.mockImplementation(() => {
  draft.isEnabled = false
})

vi.mock('next/headers', () => ({ draftMode: async () => draft }))
vi.mock('next/navigation', () => ({ redirect: vi.fn() }))

const SECRET = 'secret'

function draftUrl(params: Record<string, string>) {
  return `https://example.com/api/draft?${new URLSearchParams(params).toString()}`
}

describe('parseDraftParams', () => {
  it.each(['false', 'true'])('accepts enable=%s without a type', (enable) => {
    const result = parseDraftParams(draftUrl({ secret: SECRET, enable }), SECRET)
    expect(result.success).toBe(true)
    expect(result.data?.type).toBeUndefined()
    expect(result.data?.enable).toBe(enable === 'true')
  })

  it('accepts a secret alone', () => {
    const result = parseDraftParams(draftUrl({ secret: SECRET }), SECRET)
    expect(result.success).toBe(true)
  })

  it('accepts a type=path request with urls and languages', () => {
    const result = parseDraftParams(
      draftUrl({ secret: SECRET, enable: 'true', type: 'path', urls: '["/en/a","/fr/a"]', languages: '["en-CA","fr-CA"]' }),
      SECRET,
    )
    expect(result.success).toBe(true)
    expect(result.data).toMatchObject({ type: 'path', urls: ['/en/a', '/fr/a'], languages: ['en-CA', 'fr-CA'] })
  })

  it('rejects type=path without urls', () => {
    const result = parseDraftParams(draftUrl({ secret: SECRET, type: 'path', languages: '["en-CA"]' }), SECRET)
    expect(result.success).toBe(false)
  })

  it('rejects an unknown type', () => {
    const result = parseDraftParams(draftUrl({ secret: SECRET, type: 'nope' }), SECRET)
    expect(result.success).toBe(false)
  })

  it('rejects a wrong secret with a 401 code', () => {
    const result = parseDraftParams(draftUrl({ secret: 'wrong', enable: 'false' }), SECRET)
    expect(result.success).toBe(false)
    expect(result.error?.issues[0]).toMatchObject({ code: 'custom', params: { code: 401 } })
  })
})

describe('handleDraftRoute', () => {
  it('disables draft mode on enable=false without a type', async () => {
    draft.isEnabled = true

    const response = await handleDraftRoute({
      url: draftUrl({ secret: SECRET, enable: 'false' }),
      getDirectusLanguage: () => 'en-CA',
      getDraftSecret: () => SECRET,
    })

    expect(response?.status).toBe(200)
    expect(await response?.json()).toEqual({ isEnabled: false })
    expect(draft.disable).toHaveBeenCalledOnce()
  })
})
