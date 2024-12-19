import { isEqual } from 'radashi'
import React, { memo } from 'react'

const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 256 256" {...props}>
    <path
      fill="currentColor"
      strokeMiterlimit="10"
      strokeWidth="0"
      d="M249 67c-3-11-11-19-22-22-20-6-99-6-99-6s-79 0-99 6C18 48 10 56 7 67c-6 20-6 61-6 61s0 41 6 61c3 11 11 19 22 22 20 5 99 5 99 5s79 0 99-5c11-3 19-11 22-22 5-20 5-61 5-61s0-41-5-61zm-146 99V90l65 38-65 38z"
    />
  </svg>
)

const YouTube = memo(SvgComponent, isEqual)
export default YouTube
