import { readFileSync } from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'

// Value imports only (`import type` and `export type` are erased before bundling), side-effect imports
// (`import 'server-only'`) included, single or double quoted, over one line or several.
const importPattern = /^(?:import|export)(?!\s+type\s)(?:[^'"]+\bfrom)?\s*['"]([^'"]+)['"]/gm
// Dynamic `import('…')` and `require('…')`: a bundler keeps both in the graph.
const dynamicImportPattern = /\b(?:import|require)\(\s*['"]([^'"]+)['"]/g

function importedSpecifiers(source: string): string[] {
  return [...source.matchAll(importPattern), ...source.matchAll(dynamicImportPattern)].flatMap(([, specifier]) => specifier ?? [])
}

function collectImports(file: string, seen = new Set<string>()): Set<string> {
  if (seen.has(file))
    return new Set()
  seen.add(file)
  const bare = new Set<string>()
  const source = readFileSync(file, 'utf8')
  for (const specifier of importedSpecifiers(source)) {
    if (!specifier.startsWith('.')) {
      bare.add(specifier)
      continue
    }
    const base = path.resolve(path.dirname(file), specifier)
    const resolved = [`${base}.ts`, `${base}.tsx`, path.join(base, 'index.ts'), path.join(base, 'index.tsx')]
      .find((candidate) => {
        try {
          readFileSync(candidate)
          return true
        }
        catch {
          return false
        }
      })
    if (resolved == null)
      throw new Error(`Cannot resolve ${specifier} from ${file}`)
    collectImports(resolved, seen).forEach(name => bare.add(name))
  }
  return bare
}

describe('@okam/directus-next/image', () => {
  it('finds side-effect, double-quoted, multi-line and dynamic imports', () => {
    const source = [
      `import 'server-only'`,
      `import { a,`,
      `  b } from "next/headers"`,
      `import type { T } from 'zod'`,
      `export * from 'next/server'`,
      `const lazy = () => import('next/cache')`,
      `const draft = require("next/navigation")`,
    ].join('\n')
    expect(importedSpecifiers(source)).toEqual([
      'server-only',
      'next/headers',
      'next/server',
      'next/cache',
      'next/navigation',
    ])
  })

  it('reaches no server-only module, routing helper or zod', () => {
    const imports = collectImports(path.join(__dirname, 'image.ts'))
    expect([...imports].sort()).toEqual(['radashi'])
  })
})
