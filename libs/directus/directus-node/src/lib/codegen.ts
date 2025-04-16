import path from 'path'
import type { CodegenConfig } from '@graphql-codegen/cli'
import { config as deconfig } from 'dotenv'
import { logger } from '../logger'

/**
 * Configuration options for GraphQL code generation.
 * This interface defines all the options that can be passed to the graphqlCodegenConfig function
 * to customize the GraphQL code generation process.
 */
export interface CodegenOptions {
  /**
   * URL of the GraphQL schema.
   * If not provided, the function will try to use the NEXT_PUBLIC_GRAPHQL_URL environment variable.
   * Example: 'https://api.example.com/graphql'
   */
  schemaUrl?: string

  /**
   * Authentication token for the GraphQL API.
   * If not provided, the function will try to use the NEXT_PUBLIC_API_TOKEN environment variable.
   * This token will be used to create an Authorization header with the format: "Bearer {token}".
   */
  authToken?: string

  /**
   * Glob pattern for GraphQL documents.
   * This pattern is used to find all GraphQL documents (queries, mutations, etc.) in your project.
   * The pattern is relative to the projectRoot.
   * Example: 'src/*.graphql'
   */
  documentsGlob: string

  /**
   * Path where generated files should be saved.
   * This path is used as the output directory for the generated GraphQL client code.
   * Example: 'src/lib/gql/generated/'
   */
  outputPath: string

  /**
   * Root directory of the project.
   * This is used as the base directory for resolving relative paths.
   * If not provided, the current working directory (process.cwd()) will be used.
   */
  projectRoot?: string

  /**
   * Additional headers to include in GraphQL requests.
   * These headers will be included in all requests to the GraphQL API.
   * Example: { 'X-API-Key': 'your-api-key' }
   */
  additionalHeaders?: Record<string, string>
}

/**
 * Creates a GraphQL codegen configuration that can be used across different projects.
 *
 * This function generates a configuration object for the GraphQL Code Generator based on the provided options.
 * It handles environment variable loading, authentication, and path resolution to make the configuration
 * reusable across different projects.
 *
 * @example
 * // Basic usage with minimal configuration
 * const config = graphqlCodegenConfig({
 *   documentsGlob: 'src/*.graphql',
 *   outputPath: 'src/lib/gql/generated/'
 * });
 *
 * @example
 * // Advanced usage with all options
 * const config = graphqlCodegenConfig({
 *   schemaUrl: 'https://api.example.com/graphql',
 *   authToken: 'your-auth-token',
 *   documentsGlob: 'src/*.graphql',
 *   outputPath: 'src/lib/gql/generated/',
 *   projectRoot: '/path/to/your/project',
 *   additionalHeaders: {
 *     'X-API-Key': 'your-api-key'
 *   }
 * });
 *
 * @param options - Configuration options for the codegen
 * @returns GraphQL codegen configuration object that can be used with the GraphQL Code Generator
 */
const graphqlCodegenConfig = (options: CodegenOptions): CodegenConfig => {
  const {
    schemaUrl: providedSchemaUrl,
    authToken: providedAuthToken,
    documentsGlob,
    outputPath,
    projectRoot = process.cwd(),
    additionalHeaders = {},
  } = options

  try {
    // Load .env file
    deconfig({ path: path.resolve(projectRoot, '.env') })

    // Load .env.local if it exists
    const localEnvPath = path.resolve(projectRoot, '.env.local')
    deconfig({ path: localEnvPath, override: true })

    // Use provided values or fall back to environment variables
    const schemaUrl = providedSchemaUrl || process.env['NEXT_PUBLIC_GRAPHQL_URL']
    const authToken = providedAuthToken || process.env['NEXT_PUBLIC_API_TOKEN']

    if (!schemaUrl) {
      const errorMsg =
        'GraphQL schema URL is not defined. Provide it as an option or set NEXT_PUBLIC_GRAPHQL_URL environment variable.'
      logger.log(errorMsg, 'error')
      throw new Error(errorMsg)
    }

    // Create headers with authorization if token is available
    const headers: Record<string, string> = {
      ...additionalHeaders,
    }

    if (authToken) {
      headers['Authorization'] = `Bearer ${authToken}`
    }

    const config: CodegenConfig = {
      overwrite: true,
      schema: [
        {
          [schemaUrl]: {
            headers,
          },
        },
      ],
      documents: [path.resolve(projectRoot, documentsGlob)],
      ignoreNoDocuments: true, // for better experience with the watcher
      generates: {
        [outputPath]: {
          preset: 'client',
        },
      },
    }

    return config
  } catch (error) {
    logger.log('Error creating GraphQL codegen configuration:', 'error', { error })
    throw error
  }
}

export default graphqlCodegenConfig
