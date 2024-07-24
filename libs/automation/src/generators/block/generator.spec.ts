import type { Tree } from '@nx/devkit'
import { readProjectConfiguration } from '@nx/devkit'
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing'

import { blockGenerator } from './generator'
import type { BlockGeneratorSchema } from './schema'

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
    const config = readProjectConfiguration(tree, 'block')
    expect(config).toBeDefined()
  })
})
