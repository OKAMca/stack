import isEqual from 'lodash.isequal'
import React, { memo } from 'react'

const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 256 256" {...props}>
    <path
      fill="#1da1f2"
      strokeMiterlimit="10"
      strokeWidth="0"
      d="M81 230.6c95.4 0 147.6-79 147.6-147.6 0-2.3 0-4.5-.2-6.7 10.2-7.4 19-16.5 25.9-26.9-9.5 4.2-19.5 7-29.8 8.2a52 52 0 0 0 22.8-28.7 104 104 0 0 1-33 12.6A52 52 0 0 0 126 88.8C84.2 86.7 45.4 67 19 34.6a52 52 0 0 0 16 69.2 51.5 51.5 0 0 1-23.5-6.5v.7c0 24.7 17.4 46 41.6 50.9-7.6 2-15.6 2.4-23.4.9a52 52 0 0 0 48.5 36 104.1 104.1 0 0 1-76.8 21.5A146.9 146.9 0 0 0 81 230.6"
    />
  </svg>
)

const TwitterColored = memo(SvgComponent, isEqual)
export default TwitterColored
