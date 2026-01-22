const { readFileSync } = require('fs')
const { join } = require('path')

const pkg = JSON.parse(readFileSync(join(__dirname, 'package.json'), 'utf-8'))

module.exports = {
  define: {
    __VERSION__: JSON.stringify(pkg.version),
  },
}
