import type { Tree } from '@nx/devkit'
import type { ComponentGeneratorSchema } from './schema'
import * as path from 'node:path'
import { formatFiles, generateFiles } from '@nx/devkit'
import { capitalizeFirstLetter } from '@okam/core-lib'

export async function componentGenerator(tree: Tree, options: ComponentGeneratorSchema) {
  const componentName = capitalizeFirstLetter(options.name)
  const projectRoot = `${options.path}/${componentName}`
  const type = `I${componentName}Props`
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, { ...options, type, componentName })
  await formatFiles(tree)
}

export default componentGenerator
