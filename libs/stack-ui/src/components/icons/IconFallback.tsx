import React, { memo } from 'react'

const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" height={48} width={48} fill="currentColor" {...props} />
)

const Fallback = memo(SvgComponent)
export default Fallback
