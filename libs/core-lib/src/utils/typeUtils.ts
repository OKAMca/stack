export type Maybe<T> = T | null

export function isNonNullable<T>(x: T): x is NonNullable<T> {
  return x !== null && x !== undefined
}

export function maybeWithDefault<T>(x: Maybe<T>, defaultValue: NonNullable<T>) {
  if (isNonNullable(x)) {
    return x
  }

  return defaultValue
}

export function unknownToString(str: string | unknown): string {
  return typeof str === 'string' ? str : ''
}
