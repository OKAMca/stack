/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react-hooks/rules-of-hooks */
import 'server-only'
import type { Variables } from 'graphql-request'
import createServerContext from 'server-only-context'
import type { PageSettingsQueryItem } from '../types/pageSettings'
import type { GetPageSettingsReturn } from './interface'

export function pageSettingsContext<Item extends PageSettingsQueryItem>(defaultValue?: GetPageSettingsReturn<Item>) {
  const [pageSettings, setPageSettings] = createServerContext(defaultValue)

  return [pageSettings, setPageSettings] as const
}

export function pageSettingsVariablesContext(variables?: Variables) {
  const [pageSettingsVariables, setPageSettingsVariables] = createServerContext(variables)

  return [pageSettingsVariables, setPageSettingsVariables] as const
}
