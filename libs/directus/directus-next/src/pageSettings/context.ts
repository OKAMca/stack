/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react-hooks/rules-of-hooks */
import 'server-only'
import { createServerContext } from '@okam/next-component/server'
import type { Variables } from 'graphql-request'
import type { TPageSettingsQueryItem, TUsePageSettingsReturn } from './interface'

export function pageSettingsContext<Item extends TPageSettingsQueryItem>(defaultValue?: TUsePageSettingsReturn<Item>) {
  const [pageSettings, setPageSettings] = createServerContext(defaultValue)

  return [pageSettings, setPageSettings] as const
}

export function pageSettingsVariablesContext(variables?: Variables) {
  const [pageSettingsVariables, setPageSettingsVariables] = createServerContext(variables)

  return [pageSettingsVariables, setPageSettingsVariables] as const
}
