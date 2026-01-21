// SVG module declaration for importing .svg files as React components
// The 'any' types are appropriate here as SVG import semantics vary by bundler
declare module '*.svg' {
  const content: any

  export const ReactComponent: any
  export default content
}
