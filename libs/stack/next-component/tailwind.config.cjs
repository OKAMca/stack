const { join } = require('node:path')
const { createGlobPatternsForDependencies } = require('@nx/react/tailwind')

module.exports = {
  content: [
    join(__dirname, '{src,pages,components,app,theme}/**/*.{js,ts,jsx,tsx,mdx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [require('../../../tailwind.preset.cjs')],
}
