/**
 * External dependencies configuration for Vite library builds.
 *
 * These packages are NOT bundled when building libraries - consumers
 * are expected to install them as dependencies.
 *
 * Uses pattern matching to handle subpath exports (e.g., 'swiper/react')
 * and scoped packages (e.g., '@react-aria/focus').
 */

// Packages that should be externalized with exact match only
const exactPackages = [
  '@react-aria/disclosure',
  'dequal',
  'graphql',
  'graphql-request',
  'lodash.isequal',
  'radashi',
  'react-div-100vh',
  'react-hook-form',
  'react-use',
  'rollup-plugin-preserve-directives',
  'sanitize-html',
  'server-only',
  'tailwind-variants',
  'tailwind-merge',
  'tslib',
  'usehooks-ts',
  'zod',
]

// Scoped package prefixes - match any package under these scopes
// e.g., '@react-aria' matches '@react-aria/focus', '@react-aria/i18n', etc.
const scopedPrefixes = [
  '@internationalized',
  '@react-aria',
  '@react-stately',
  '@react-types',
  '@react-spring',
  '@tanstack',
  '@tiptap',
  '@tsed',
]

// Packages that should be externalized with prefix matching
// (handles both exact match and subpath exports like 'swiper/react')
const prefixPackages = [
  // React ecosystem
  'react',
  'react-dom',
  'react-aria',
  'react-stately',
  // Packages with subpath exports
  'swiper',
  'next',
  'nuqs',
  'unlazy',
]

/**
 * Check if a module ID should be externalized.
 * Handles exact matches, scoped packages, and prefix-based pattern matching.
 */
export function isExternal(id: string): boolean {
  // Exact match for simple packages
  if (exactPackages.includes(id)) {
    return true
  }

  // Match scoped packages (e.g., @react-aria/focus)
  for (const scope of scopedPrefixes) {
    if (id === scope || id.startsWith(`${scope}/`)) {
      return true
    }
  }

  // Prefix match for packages with subpaths
  for (const prefix of prefixPackages) {
    // Handle both exact match and subpath match
    // e.g., 'swiper' matches 'swiper' and 'swiper/react'
    if (id === prefix || id.startsWith(`${prefix}/`)) {
      return true
    }
  }

  return false
}

// Legacy export for backwards compatibility
// Note: This array export doesn't handle subpath matching - use isExternal() for full support
const externalDeps = [
  ...exactPackages,
  ...scopedPrefixes,
  ...prefixPackages,
]

export default externalDeps
