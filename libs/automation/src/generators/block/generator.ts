import * as path from 'path'
import type { Tree } from '@nx/devkit'
import { formatFiles, generateFiles } from '@nx/devkit'
import { camel, pascal, snake } from 'radash'
import type { BlockGeneratorSchema } from './schema'

export async function blockGenerator(tree: Tree, options: BlockGeneratorSchema) {
  const projectRoot = `${options.path}/${options.name}`
  const componentName = pascal(options.name)
  const variableName = camel(options.name)
  const type = `I${componentName}Fragment`
  const key = `block_${snake(options.name)}_by_id`
  const snakeName = snake(options.name)
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
    ...options,
    type,
    componentName,
    snakeName,
    variableName,
    key,
  })
  await formatFiles(tree)
}

export default blockGenerator
