import { isEmpty } from 'radashi'
import { mergeProps } from 'react-aria'
import type { TToken } from '../providers/Theme/interface'
import type { Nullable, TDefaultComponent } from '../types/components'

/**
 * Wraps react aria `mergeProps` and merges an array of props taking into account props belonging to `TDefaultComponent`.
 *
 * All props will be merged according to the rules of `mergeProps` except for:
 * - `tokens`: all tokens objects will be merged together, giving priority to the last object in the array.
 * - `customTheme`: all custom themes will be joined together with a space, just like `className`.
 *
 * @param args - An array of props belonging to `TDefaultComponent`
 * @returns A merged props object
 */
export function mergeDefaultComponentProps<T extends TDefaultComponent, S>(
  requiredArg: Nullable<Partial<T>>,
  ...args: Nullable<Partial<S>>[]
): T & S {
  const allArgs = [requiredArg, ...args]
  const mergedTokens = allArgs.reduce<TToken>(
    (acc, curr) => (curr && 'tokens' in curr ? Object.assign(acc, curr?.tokens) : acc),
    {},
  )
  const mergedCustomThemes = allArgs
    .map((arg) => (arg && 'customTheme' in arg ? arg?.customTheme : undefined))
    .filter((theme) => !isEmpty(theme))
    .join(' ')
  const mergedArgs = mergeProps<TDefaultComponent[]>(...allArgs.filter((arg): arg is Exclude<T, null> => arg !== null))
  return { ...mergedArgs, tokens: mergedTokens, customTheme: mergedCustomThemes } as T & S
}
