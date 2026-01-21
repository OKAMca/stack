import type { Tree } from '@nx/devkit'
import type { BlockGeneratorSchema } from './schema'

import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing'
import { beforeEach, describe, expect, it } from 'vitest'
import { blockGenerator } from './generator'

describe('block generator', () => {
  let tree: Tree
  const options: BlockGeneratorSchema = {
    name: 'BlockTest',
    path: '/',
    snakeName: 'block_test',
    componentName: 'BlockTest',
    type: 'IBlockTestFragment',
    variableName: 'blockTest',
    key: 'block_test_by_id',
  }

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace()
  })

  it('should run successfully', async () => {
    await blockGenerator(tree, options)
    // The generator creates block component files, not a project configuration
    // Check that the block files were generated at the expected path
    expect(tree.exists('/BlockTest/src/index.tsx')).toBeTruthy()
    expect(tree.exists('/BlockTest/src/config.tsx')).toBeTruthy()
    expect(tree.exists('/BlockTest/src/interface.ts')).toBeTruthy()
  })
})
