import * as path from 'path'
import type { Tree } from '@nx/devkit'
import { formatFiles, generateFiles } from '@nx/devkit'
import { capitalizeFirstLetter } from '@okam/core-lib'
import { camel, snake } from 'radashi'
import type { BlockGeneratorSchema } from './schema'

export async function blockGenerator(tree: Tree, options: BlockGeneratorSchema) {
  const getName = () => {
    if (!options.name.toLocaleLowerCase().startsWith('block')) {
      return `Block${capitalizeFirstLetter(options.name)}`
    }

    return `Block${capitalizeFirstLetter(options.name.toLocaleLowerCase().split('block')[1])}`
  }

  const name = getName()
  const projectRoot = `${options.path}/${name}`
  const componentName = capitalizeFirstLetter(name)
  const variableName = camel(name)
  const type = `I${componentName}Fragment`
  const key = `${snake(name)}_by_id`
  const snakeName = snake(name)
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
