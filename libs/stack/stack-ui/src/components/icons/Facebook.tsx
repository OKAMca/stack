import isEqual from 'lodash.isequal'
import React, { memo } from 'react'

const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path
      d="M9.161 5.889v2.753H7V12h2.161v10h4.442V12h2.977s.28-1.614.417-3.38h-3.379V6.316a.963.963 0 0 1 .332-.558c.174-.146.396-.233.63-.248H17V2h-3.275C9.063 2 9.173 5.37 9.173 5.889h-.012Z"
      fill="currentColor"
    />
  </svg>
)

const Facebook = memo(SvgComponent, isEqual)
export default Facebook
