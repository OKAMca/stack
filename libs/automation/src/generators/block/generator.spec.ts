import type { Tree } from '@nx/devkit'
import { readProjectConfiguration } from '@nx/devkit'
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing'

import { blockGenerator } from './generator'
import type { BlockGeneratorSchema } from './schema'

describe('block generator', () => {
  let tree: Tree
  const options: BlockGeneratorSchema = { name: 'test', path: '/' }

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace()
  })

  it('should run successfully', async () => {
    await blockGenerator(tree, options)
    const config = readProjectConfiguration(tree, 'test')
    expect(config).toBeDefined()
  })
})
