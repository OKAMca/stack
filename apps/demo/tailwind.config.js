/** @type {import('tailwindcss').Config} */

const { join } = require('path')
const { createGlobPatternsForDependencies } = require('@nx/react/tailwind')

module.exports = {
  content: [
    join(__dirname, '{src,pages,components,app,theme}/**/*!(*.stories|*.spec).{js,ts,jsx,tsx,mdx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  presets: [require('../../tailwind.preset')],
}
