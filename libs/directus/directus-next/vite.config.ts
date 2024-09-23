/* eslint-disable import/no-relative-packages */
/// <reference types="vitest" />
import * as path from 'path'
import react from '@vitejs/plugin-react'
import preserveDirectives from 'rollup-plugin-preserve-directives'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import externalDeps from '../../../config/external-deps'

export default defineConfig({
  cacheDir: '../../../node_modules/.vite/directus-next',

  plugins: [
    dts({
      entryRoot: 'src',
      tsConfigFilePath: path.join(__dirname, 'tsconfig.lib.json'),
      skipDiagnostics: true,
    }),
    react(),
    viteTsConfigPaths({
      root: '../../../',
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
      plugins: [preserveDirectives()],
      output: {
        preserveModules: true,
      },
      // External packages that should not be bundled into your library.
      external: [...externalDeps, 'next/navigation', 'next/headers', 'next/server'],
    },
    ssr: true,
  },
})
