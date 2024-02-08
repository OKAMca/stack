import type { CodegenConfig } from '@graphql-codegen/cli'

const graphqlCodegenConfig = (schemaUrl: string, generatePath: string, headers: Record<string, string>) => {
  const config: CodegenConfig = {
    overwrite: true,
    schema: [
      {
        [schemaUrl]: {
          headers,
        },
      },
    ],
    documents: [`${__dirname}/apps/demo/**/*.graphql`],
    ignoreNoDocuments: true, // for better experience with the watcher
    generates: {
      [generatePath]: {
        preset: 'client',
      },
    },
  }

  return config
}

export default graphqlCodegenConfig
