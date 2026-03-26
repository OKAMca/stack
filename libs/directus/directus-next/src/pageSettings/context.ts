import type { Variables } from 'graphql-request'
import type { TPageSettingsQueryItem } from '../types/pageSettings'
import type { TGetPageSettingsReturn } from './interface'
import { createServerContext } from '@okam/next-component/server'
import 'server-only'

export function pageSettingsContext<Item extends TPageSettingsQueryItem>(defaultValue?: TGetPageSettingsReturn<Item>) {
  const [pageSettings, setPageSettings] = createServerContext(defaultValue)

  return [pageSettings, setPageSettings] as const
}

export function pageSettingsVariablesContext(variables?: Variables) {
  const [pageSettingsVariables, setPageSettingsVariables] = createServerContext(variables)

  return [pageSettingsVariables, setPageSettingsVariables] as const
}
