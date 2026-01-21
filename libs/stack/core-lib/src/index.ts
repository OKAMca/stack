export { ArrayUtils } from './utils/array-utils'
export { Asserts } from './utils/asserts'

export { default as createCtx } from './utils/createContext'
export { createCtxNullable } from './utils/createContext'

export function sayHello(name: string): string {
  return `I'm the @okam/shared-ui component telling ${name} !`
}

export { normalizePath } from './utils/normalize-path'
export { default as getNestedObjectValueOfKey } from './utils/object-find-deep-nested'

export { default as checkObjectProperty } from './utils/object-property'

export { capitalizeFirstLetter } from './utils/string-transform'

export type { UnPromisify } from './utils/type-utils'

export * from './utils/typeguards'
