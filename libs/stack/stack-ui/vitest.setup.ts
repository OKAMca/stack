// jsdom does not implement CSS.escape, which react-aria's selection utils call on focus.
const CSS_SPECIAL_CHARS = /[^\w-]/g

if (typeof globalThis.CSS === 'undefined' || typeof globalThis.CSS.escape !== 'function') {
  const escape = (value: string) => value.replace(CSS_SPECIAL_CHARS, char => `\\${char}`)
  globalThis.CSS = { ...globalThis.CSS, escape }
}
