import type { CodegenConfig } from '@graphql-codegen/cli'
import path from 'node:path'

const schemaUrl = process.env.NEXT_GRAPHQL_URL_ADMIN as string
const authToken = process.env.NEXT_API_TOKEN_ADMIN as string

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [schemaUrl]: {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      },
    },
  ],
  documents: [path.join(__dirname, 'src/**/*.admin.graphql')],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    [path.join(__dirname, 'src/lib/gql/admin/generated/')]: {
      preset: 'client',
    },
  },
}

export default config
