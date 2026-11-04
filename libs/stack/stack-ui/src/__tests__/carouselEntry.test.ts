import { readFileSync } from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'

// Value imports only (`import type` and `export type` are erased before bundling), side-effect imports
// (`import 'swiper/css'`) included, single or double quoted, over one line or several.
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

describe('@okam/stack-ui/carousel', () => {
  it('finds side-effect, double-quoted, multi-line and dynamic imports', () => {
    const source = [
      `import 'swiper/css'`,
      `import { a,`,
      `  b } from "swiper/modules"`,
      `import type { T } from 'swiper/react'`,
      `export * from 'swiper'`,
      `const lazy = () => import('swiper/react')`,
      `const modules = require("swiper/modules")`,
    ].join('\n')
    expect(importedSpecifiers(source)).toEqual([
      'swiper/css',
      'swiper/modules',
      'swiper',
      'swiper/react',
      'swiper/modules',
    ])
  })

  it('imports no Swiper module', () => {
    const imports = collectImports(path.join(__dirname, '../carousel.ts'))
    expect([...imports].filter(name => name.startsWith('swiper'))).toEqual([])
  })

  it('exports the provider the hook needs', async () => {
    const entry = await import('../carousel')
    expect(typeof entry.CarouselContextProvider).toBe('function')
    expect(typeof entry.useCarousel).toBe('function')
  })
})
