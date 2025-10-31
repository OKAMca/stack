/* eslint-disable import/no-relative-packages */
/// <reference types="vitest" />
import * as path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import externalDeps from '../../../config/external-deps'

export default defineConfig({
  cacheDir: '../../../node_modules/.vite/directus-next',
  root: __dirname,
  plugins: [
    react(),
    nxViteTsPaths(),
    nxCopyAssetsPlugin(['*.md']),
    dts({
      entryRoot: 'src',
      tsconfigPath: path.join(__dirname, 'tsconfig.lib.json'),
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [
  //    viteTsConfigPaths({
  //      root: '../../../',
  //    }),
  //  ],
  // },

  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    lib: {
      entry: ['src/index.ts', 'src/server.ts'],
      name: 'directus-next',
      // Removed 'fileName' because multiple entry points are specified
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      output: [
        {
          format: 'es',
          entryFileNames: '[name].mjs',
          preserveModules: false,
          banner: (chunk) => chunk.name === 'server' ? '"use server";' : '',
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: false,
          banner: (chunk) => chunk.name === 'server' ? '"use server";' : '',
        }
      ],
      // External packages that should not be bundled into your library.
      external: [...externalDeps, 'next/navigation', 'next/headers', 'next/server', '@okam/directus-node', '@okam/logger', '@okam/core-lib', '@okam/directus-query', 'server-only-context'],
    },
    ssr: true,
  },
})
