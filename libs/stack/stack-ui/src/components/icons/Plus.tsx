import isEqual from 'lodash.isequal'
import React, { memo } from 'react'

const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg height={48} width={48} fill="currentColor" {...props} xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="26" cy="24.095" rx="26" ry="23.547" fill="#fff" />
    <path
      d="M37.742 24.095H14.258M26 13.46V34.73 13.46Z"
      stroke="#9E9E9E"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const Plus = memo(SvgComponent, isEqual)
export default Plus
