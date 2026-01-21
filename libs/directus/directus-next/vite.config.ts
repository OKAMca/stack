/// <reference types="vitest" />
import * as path from 'node:path'
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { isExternal } from '../../../config/external-deps'

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
      entry: ['src/index.ts', 'src/server.ts'],
      name: 'directus-next',
      // Removed 'fileName' because multiple entry points are specified
      // Note: formats not needed - rollupOptions.output array takes precedence
    },
    rollupOptions: {
      output: [
        {
          format: 'es',
          entryFileNames: '[name].mjs',
          preserveModules: false,
          banner: chunk => chunk.name === 'server' ? '"use server";' : '',
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: false,
          banner: chunk => chunk.name === 'server' ? '"use server";' : '',
        },
      ],
      // External packages that should not be bundled into your library.
      external: id => isExternal(id) || id.startsWith('@okam/'),
    },
    ssr: true,
  },
})
