import { isEqual } from 'radashi'
import React, { memo } from 'react'

const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={24}
      height={24}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      role="img"
      {...props}
    >
      <path
        d="M12 17a1.002 1.002 0 0 1-.71-.29l-7-7a1.004 1.004 0 1 1 1.42-1.42l6.29 6.3 6.29-6.3a1.004 1.004 0 1 1 1.42 1.42l-7 7A1.001 1.001 0 0 1 12 17Z"
        fill="currentColor"
      />
    </svg>
  )
}

const ChevronDown = memo(SvgComponent, isEqual)
export default ChevronDown
