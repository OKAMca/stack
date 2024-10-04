import path from 'path'
import { CodegenConfig } from '@graphql-codegen/cli'
import { config as deconfig } from 'dotenv'

deconfig({ path: path.resolve(process.cwd(), '.env') })

const schemaUrl = process.env.NEXT_PUBLIC_GRAPHQL_URL as string
const authToken = process.env.NEXT_PUBLIC_API_TOKEN as string

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [schemaUrl]: {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    }
  ],
  documents: [`${__dirname}/libs/directus-data-query/src/**/*.graphql`],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    [`${__dirname}/libs/directus-data-query/src/lib/gql/generated/`]: {
      preset: 'client'
    }
  }
}

export default config
