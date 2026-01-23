export { ArrayUtils } from './utils/array-utils'

export { Asserts } from './utils/asserts'

export { normalizePath } from './utils/normalize-path'
export { default as getNestedObjectValueOfKey } from './utils/object-find-deep-nested'
export { default as checkObjectProperty } from './utils/object-property'
export { capitalizeFirstLetter } from './utils/string-transform'
export type { UnPromisify } from './utils/type-utils'
export * from './utils/typeguards'
/**
 * @deprecated Import `createCtx` from `@okam/react-utils` instead.
 * This export will be removed in a future major version.
 *
 * @example
 * // Before (deprecated)
 * import { createCtx } from '@okam/core-lib'
 *
 * // After
 * import { createCtx } from '@okam/react-utils'
 */
export { createCtx } from '@okam/react-utils'
/**
 * @deprecated Import `createCtxNullable` from `@okam/react-utils` instead.
 * This export will be removed in a future major version.
 *
 * @example
 * // Before (deprecated)
 * import { createCtxNullable } from '@okam/core-lib'
 *
 * // After
 * import { createCtxNullable } from '@okam/react-utils'
 */
export { createCtxNullable } from '@okam/react-utils'

export function sayHello(name: string): string {
  return `I'm the @okam/shared-ui component telling ${name} !`
}
