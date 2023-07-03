const getDefaultIgnorePatterns = () => {
  // Hacky way to silence @yarnpkg/doctor about node_modules detection
  return [`**/${'node'}_modules}`, '**/.cache', 'build', 'dist', '.eslintrc.js', '.eslintrc.cjs', '__tests__']
}

module.exports = {
  getDefaultIgnorePatterns,
}
