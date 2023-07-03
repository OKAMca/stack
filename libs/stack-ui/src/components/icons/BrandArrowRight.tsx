import isEqual from 'lodash.isequal'
import React, { memo } from 'react'

const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path stroke="currentColor" d="m13.944 7 5 5-5 5M5.833 12h13.111" />
  </svg>
)

const ArrowRight = memo(SvgComponent, isEqual)
export default ArrowRight
