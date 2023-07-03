export { Asserts } from './utils/asserts'
export { ArrayUtils } from './utils/array-utils'

export * from './utils/typeguards'
export type { UnPromisify } from './utils/type-utils'

export const sayHello = (name: string): string => {
  return `I'm the @okam/shared-ui component telling ${name} !`
}

export { default as createCtx } from './utils/createContext'
export { createCtxNullable } from './utils/createContext'

export { default as getNestedObjectValueOfKey } from './utils/object-find-deep-nested'

export { default as checkObjectProperty } from './utils/object-property'
