/* eslint-disable no-restricted-syntax */

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function getNestedObjectValueOfKey<T>(
  obj: T & Record<string, unknown>,
  key: string,
  found?: Record<string, unknown> | undefined | unknown,
): Record<string, unknown> | undefined | unknown {
  const keys = Object.keys(obj)
  let result
  result ||= found
  for (const currKey of keys) {
    const nextObj = obj[currKey]
    if (isRecord(nextObj)) {
      result ||= getNestedObjectValueOfKey(nextObj, key, result)
    }
    if (currKey === key) {
      return obj[key]
    }
  }
  return result
}

export default getNestedObjectValueOfKey
