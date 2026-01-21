import * as path from 'node:path'
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import react from '@vitejs/plugin-react-swc'
import preserveDirectives from 'rollup-plugin-preserve-directives'
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { isExternal } from '../../../config/external-deps'

export default defineConfig({
  cacheDir: '../../../node_modules/.vite/directus-block',
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
      // Could also be a dictionary or array of multiple entry points.
      entry: ['src/index.ts', 'src/server.ts'],
      name: 'directus-block',
      fileName: 'index',

      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: id => isExternal(id) || id.startsWith('@okam/'),
      plugins: [preserveDirectives()],
      output: {
        preserveModules: true,
      },
      onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
          return
        }
        warn(warning)
      },
    },
    ssr: true,
  },
})
