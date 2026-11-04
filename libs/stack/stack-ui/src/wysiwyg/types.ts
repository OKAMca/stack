declare const sanitizedHtml: unique symbol

/** HTML produced by a Stack sanitizer. The brand is erased during serialization. */
export type SanitizedHtml = string & { readonly [sanitizedHtml]: true }
