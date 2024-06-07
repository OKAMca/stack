import { formatFiles, generateFiles, Tree } from '@nx/devkit'
import * as path from 'path'
import { ComponentGeneratorSchema } from './schema'
import { capitalizeFirstLetter } from '@okam/core-lib'

export async function componentGenerator(tree: Tree, options: ComponentGeneratorSchema) {
  const projectRoot = `${options.path}/${options.name}`
  const componentName = capitalizeFirstLetter(options.name)
  const type = `I${componentName}Props`
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, { ...options, type, componentName })
  await formatFiles(tree)
}

export default componentGenerator
