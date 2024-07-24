import * as path from 'path'
import type { Tree } from '@nx/devkit'
import { formatFiles, generateFiles } from '@nx/devkit'
import { capitalizeFirstLetter } from '@okam/core-lib'
import type { ComponentGeneratorSchema } from './schema'

export async function componentGenerator(tree: Tree, options: ComponentGeneratorSchema) {
  const componentName = capitalizeFirstLetter(options.name)
  const projectRoot = `${options.path}/${componentName}`
  const type = `I${componentName}Props`
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, { ...options, type, componentName })
  await formatFiles(tree)
}

export default componentGenerator
