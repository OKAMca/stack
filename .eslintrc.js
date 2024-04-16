const { getDefaultIgnorePatterns } = require('./linter/helpers')

module.exports = {
  root: true,
  "ignorePatterns": ["**/*"],
  "plugins": ["@nx"],
  extends: ['./linter/bases/typescript', './linter/bases/prettier'],
}
