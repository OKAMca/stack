const { createGlobPatternsForDependencies } = require('@nx/react/tailwind')
const { join } = require('path')

module.exports = {
  content: [
    join(__dirname, '{src,pages,components,app,theme}/**/*.{js,ts,jsx,tsx,mdx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [require('../../tailwind.preset')],
}
