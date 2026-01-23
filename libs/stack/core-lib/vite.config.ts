/// <reference types="vitest" />
import * as path from 'node:path'
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { isExternal } from '../../../config/external-deps'

export default defineConfig({
  cacheDir: '../../../node_modules/.vite/core-lib',
  root: __dirname,
  plugins: [
    react(),
    nxViteTsPaths(),
    nxCopyAssetsPlugin(['*.md']),
    dts({
      entryRoot: 'src',
      tsconfigPath: path.join(__dirname, 'tsconfig.lib.json'),
      aliasesExclude: [/^@okam\//],
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
    emptyOutDir: false,
    lib: {
      // Multiple entry points: full client bundle + server-safe bundle.
      entry: {
        index: 'src/index.ts',
        server: 'src/server.ts',
      },
      name: 'core-lib',
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: isExternal,
      output: [
        {
          format: 'es',
          entryFileNames: '[name].mjs',
          preserveModules: false,
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: false,
        },
      ],
    },
  },
})
