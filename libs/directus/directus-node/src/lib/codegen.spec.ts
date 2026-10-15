import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { generate } from '@graphql-codegen/cli'
import { expect, it } from 'vitest'
import graphqlCodegenConfig from './codegen'

it('generates client types in the configured output directory', async () => {
  const projectRoot = await mkdtemp(path.join(tmpdir(), 'stack-codegen-'))

  try {
    const schemaUrl = path.join(projectRoot, 'schema.graphql')
    await writeFile(schemaUrl, 'type Query { greeting: String! }')
    await writeFile(path.join(projectRoot, 'query.graphql'), 'query Greeting { greeting }')

    const config = graphqlCodegenConfig({
      schemaUrl,
      documentsGlob: 'query.graphql',
      outputPath: 'generated/',
      projectRoot,
    })

    await generate(config, true)

    const generated = await readFile(path.join(projectRoot, 'generated/graphql.ts'), 'utf8')
    expect(generated).toContain('export type GreetingQuery = {')
    expect(generated).toContain('greeting: string')
  }
  finally {
    await rm(projectRoot, { recursive: true, force: true })
  }
})
