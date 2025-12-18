'use client'

import { useTranslation } from '@okam/stack-ui'
import type { TDirectusLinkAria } from '../types/directus-link'
import { directusLink } from '../utils/directusLink'

/**
 * Wrapper for {@link directusLink} with client-side aria label translation support
 */
export function useDirectusLink({
  type,
  translation: { key = 'DIRECTUS_LINK', namespace = 'common' } = { key: 'DIRECTUS_LINK', namespace: 'common' },
  ...rest
}: TDirectusLinkAria) {
  const { t } = useTranslation()

  const completeTranslationKey = `${key}.${type?.toUpperCase()}`
  const ariaLabel = t(completeTranslationKey, { ns: namespace })

  return directusLink({
    type,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'aria-label': ariaLabel,
    ...rest,
  })
}
