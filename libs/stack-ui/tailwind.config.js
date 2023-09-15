const { createGlobPatternsForDependencies } = require('@nx/react/tailwind')
const { join } = require('path')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    join(__dirname, '{src,pages,components,app,theme}/**/*.{js,ts,jsx,tsx,mdx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('focus-ring', '&.focus-ring')
    }),
  ],
  presets: [require('../../tailwind.preset')],
}
