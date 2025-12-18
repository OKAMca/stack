import type { TTranslateFunc } from '@okam/stack-ui'
import { createServerContext } from '../createServerContext'

export interface TServerTranslationProps {
  getTranslationFunc: (ns?: string) => Promise<{
    t: TTranslateFunc
    i18n: {
      language: string
    }
  }>
}

export function translationServerContext(defaultValue?: TServerTranslationProps) {
  const [translation, setTranslation] = createServerContext(defaultValue)
  return [translation, setTranslation] as const
}

const [getTranslationContext, setTranslationContext] = translationServerContext()

export { getTranslationContext, setTranslationContext }

export async function getTranslation(namespace?: string): ReturnType<TServerTranslationProps['getTranslationFunc']> {
  const { getTranslationFunc } = getTranslationContext() ?? {}

  if (!getTranslationFunc) {
    throw new Error('getTranslationFunc is not set')
  }

  const { t, i18n } = await getTranslationFunc(namespace)

  return {
    t,
    i18n,
  }
}
