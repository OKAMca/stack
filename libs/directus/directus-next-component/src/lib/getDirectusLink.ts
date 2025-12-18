import { getTranslation } from '@okam/next-component/server'
import type { TDirectusLinkAria } from '../types/directus-link'
import { directusLink } from '../utils/directusLink'

/**
 * Wrapper for {@link directusLink} with server-side aria label translation support
 */
export async function getDirectusLink({
  translation: { key = 'DIRECTUS_LINK', namespace = 'common' } = { key: 'DIRECTUS_LINK', namespace: 'common' },
  type,
  ...rest
}: TDirectusLinkAria) {
  const { t } = await getTranslation(namespace)

  const completeTranslationKey = `${key}.${type?.toUpperCase()}`
  const ariaLabel = t(completeTranslationKey, { ns: namespace })

  return directusLink({
    type,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'aria-label': ariaLabel,
    ...rest,
  })
}
