import type { SanitizedHtml } from '../types'
import { expectTypeOf, it } from 'vitest'
import { WysiwygBlock } from '../index'

export function checkContent(raw: string, sanitized: SanitizedHtml) {
  // @ts-expect-error Raw strings require sanitization before rendering.
  const invalid = <WysiwygBlock content={raw} />
  // @ts-expect-error The rendering entry cannot override sanitization policy.
  const policy = <WysiwygBlock content={sanitized} allowedTags={['p']} />
  // @ts-expect-error Direct inner HTML is not part of this interface.
  const override = <WysiwygBlock content={sanitized} dangerouslySetInnerHTML={{ __html: raw }} />
  return { invalid, policy, override, valid: <WysiwygBlock content={sanitized} /> }
}

it('accepts sanitized content with no render-time policy', () => {
  expectTypeOf<Parameters<typeof WysiwygBlock>[0]['content']>().toEqualTypeOf<SanitizedHtml>()
})
