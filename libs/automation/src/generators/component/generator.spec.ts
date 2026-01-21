import type { Tree } from '@nx/devkit'
import type { ComponentGeneratorSchema } from './schema'

import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing'
import { beforeEach, describe, expect, it } from 'vitest'
import { componentGenerator } from './generator'

describe('component generator', () => {
  let tree: Tree
  const options: ComponentGeneratorSchema = { name: 'test', path: '/' }

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace()
  })

  it('should run successfully', async () => {
    await componentGenerator(tree, options)
    // The generator creates component files, not a project configuration
    // Check that the component files were generated at the expected path
    expect(tree.exists('/Test/index.tsx')).toBeTruthy()
    expect(tree.exists('/Test/interface.ts')).toBeTruthy()
  })
})
