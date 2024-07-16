import * as path from 'path'
import type { Tree } from '@nx/devkit'
import { formatFiles, generateFiles } from '@nx/devkit'
import { pascal } from 'radash'
import type { BlockGeneratorSchema } from './schema'

export async function blockGenerator(tree: Tree, options: BlockGeneratorSchema) {
  const projectRoot = `${options.path}/${options.name}`
  const componentName = pascal(options.name)
  const type = `I${componentName}Props`
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, { ...options, type, componentName })
  await formatFiles(tree)
}

export default blockGenerator
