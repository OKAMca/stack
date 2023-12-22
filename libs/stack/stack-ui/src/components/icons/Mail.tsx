import isEqual from 'lodash.isequal'
import React, { memo } from 'react'

const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 256 256" {...props}>
    <g fill="currentColor" strokeMiterlimit="10" strokeWidth="0" transform="matrix(2.8 0 0 2.8 1.4 1.4)">
      <path d="M80.9 78.8H9c-5 0-9.1-4.1-9.1-9.1V20.3c0-5 4-9 9.1-9H81c5 0 9.1 4 9.1 9v49.4c0 5-4 9-9.1 9zM9 17.2A3.1 3.1 0 0 0 6 20.3v49.4c0 1.7 1.4 3 3.1 3H81c1.7 0 3.1-1.3 3.1-3V20.3c0-1.7-1.4-3-3.1-3H9z" />
      <path d="M45 55.4c-5.4 0-10.6-2.3-14.2-6.3l-28.3-31 4.4-4 28.3 31c2.5 2.8 6 4.3 9.8 4.3 3.8 0 7.3-1.5 9.8-4.3l28.3-31 4.4 4-28.3 31c-3.6 4-8.8 6.3-14.2 6.3z" />
      <rect width="39" height="6" x="-1" y="57.2" rx="0" ry="0" transform="rotate(-45.1 18.5 60.2)" />
      <rect width="6" height="39" x="68.5" y="40.7" rx="0" ry="0" transform="rotate(-44.8 71.5 60.2)" />
    </g>
  </svg>
)

const Mail = memo(SvgComponent, isEqual)
export default Mail
