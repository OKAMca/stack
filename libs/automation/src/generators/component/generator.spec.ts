import type { Tree } from '@nx/devkit'
import { readProjectConfiguration } from '@nx/devkit'
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing'

import { componentGenerator } from './generator'
import type { ComponentGeneratorSchema } from './schema'

describe('component generator', () => {
  let tree: Tree
  const options: ComponentGeneratorSchema = { name: 'test' }

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace()
  })

  it('should run successfully', async () => {
    await componentGenerator(tree, options)
    const config = readProjectConfiguration(tree, 'test')
    expect(config).toBeDefined()
  })
})
