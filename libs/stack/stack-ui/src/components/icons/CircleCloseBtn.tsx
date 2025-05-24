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
        d="m10.769 13.23 1.23-1.23-1.23 1.23Zm1.23-1.23 1.231-1.23L12 12Zm0 0-1.23-1.23 1.23 1.23Zm0 0 1.231 1.23L12 12Zm5.539 0a5.54 5.54 0 1 1-11.079 0 5.54 5.54 0 0 1 11.079 0Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const CircleCloseBtn = memo(SvgComponent, isEqual)
export default CircleCloseBtn
