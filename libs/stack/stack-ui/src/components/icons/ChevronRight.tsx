import { isEqual } from 'radashi'
import React, { memo } from 'react'

const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="currentColor" {...props}>
    <path d="m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z" />
  </svg>
)

const ChevronRight = memo(SvgComponent, isEqual)
export default ChevronRight
