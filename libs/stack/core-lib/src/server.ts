/**
 * Server-safe entry point for React Server Components and Node.js environments.
 * This entry excludes React-dependent exports (createCtx, createCtxNullable).
 *
 * Use this entry point when importing in:
 * - React Server Components (RSC)
 * - Node.js server environments
 * - Edge runtimes
 *
 * @example
 * // In package.json exports, the "react-server" condition auto-selects this entry
 * import { ArrayUtils, Asserts } from '@okam/core-lib'
 */

// Server-safe exports (no React client APIs)
export { ArrayUtils } from './utils/array-utils'
export { Asserts } from './utils/asserts'
export { normalizePath } from './utils/normalize-path'
export { default as getNestedObjectValueOfKey } from './utils/object-find-deep-nested'
export { default as checkObjectProperty } from './utils/object-property'
export { capitalizeFirstLetter } from './utils/string-transform'
export type { UnPromisify } from './utils/type-utils'
export * from './utils/typeguards'

export function sayHello(name: string): string {
  return `I'm the @okam/shared-ui component telling ${name} !`
}
