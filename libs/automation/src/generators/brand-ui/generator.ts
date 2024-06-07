import * as path from 'path'
import type { Tree } from '@nx/devkit'
import { addProjectConfiguration, formatFiles, generateFiles } from '@nx/devkit'
import type { BrandUiGeneratorSchema } from './schema'

export async function brandUiGenerator(tree: Tree, options: BrandUiGeneratorSchema) {
  const projectRoot = `libs/${options.name}`
  addProjectConfiguration(tree, options.name, {
    root: projectRoot,
    projectType: 'library',
    sourceRoot: `${projectRoot}/src`,
    targets: {},
  })
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options)
  await formatFiles(tree)
}

export default brandUiGenerator
