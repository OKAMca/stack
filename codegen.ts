import path from 'path'
import { CodegenConfig } from '@graphql-codegen/cli'
import { config as deconfig } from 'dotenv'

// Load .env file
deconfig({ path: path.resolve(process.cwd(), '.env') })

// Load .env.local if it exists
const localEnvPath = path.resolve(process.cwd(), '.env.local')
deconfig({ path: localEnvPath, override: true })

// Check for required environment variables
const schemaUrl = process.env.NEXT_PUBLIC_GRAPHQL_URL
const authToken = process.env.NEXT_PUBLIC_API_TOKEN

if (!schemaUrl) {
  throw new Error('NEXT_PUBLIC_GRAPHQL_URL is not defined in the environment variables')
}

if (!authToken) {
  throw new Error('NEXT_PUBLIC_API_TOKEN is not defined in the environment variables')
}

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
  documents: [`${__dirname}/apps/directus-data-query/src/**/*.graphql`],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    [`${__dirname}/apps/directus-data-query/src/lib/gql/generated/`]: {
      preset: 'client'
    }
  }
}

export default config
