export type IsoDateString = string
export function isIsoDateString(dateStr: unknown): dateStr is IsoDateString {
  if (typeof dateStr !== 'string' || !/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(dateStr)) {
    return false
  }
  try {
    const d = new Date(dateStr)
    return d.toISOString() === dateStr
  }
  catch {
    return false
  }
}

export function isNonEmptyString(v: unknown, trim = true): v is string {
  return typeof v === 'string' && (trim ? v.trim() : v).length > 0
}

export function isPlainObject<T = unknown, K extends string | number = string>(v: unknown): v is Record<K, T> {
  return (
    typeof v === 'object' && v !== null && v.constructor === Object && Object.getPrototypeOf(v) === Object.prototype
  )
}

export function isSafeInteger(v: unknown): v is number {
  return typeof v === 'number' && Number.isSafeInteger(v)
}

export function isParsableNumeric(v: unknown): v is number | string {
  if (typeof v === 'number' && !Number.isNaN(v)) {
    return true
  }
  if (!isNonEmptyString(v)) {
    return false
  }
  return !Number.isNaN(Number.parseInt(v, 10) || Number.isNaN(Number.parseFloat(v)))
}

export function isParsableSafeInteger(v: unknown): v is number | string {
  const value = typeof v === 'string' && /^-?\d+$/.test(v) ? Number.parseInt(v, 10) : v
  return isSafeInteger(value)
}

export function isHttpStatusCode(v: unknown): v is number {
  return isSafeInteger(v) && v < 600 && v >= 100
}
