import isEqual from 'lodash.isequal'
import React, { memo } from 'react'

const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 256 256" {...props}>
    <path
      fill="#3b5998"
      strokeMiterlimit="10"
      strokeWidth="0"
      d="M147.5 254.3V139.1h38.7l6-45h-44.7V65.2c0-13 3.6-21.9 22.3-21.9h23.7V3.2c-11.6-1.2-23.1-1.8-34.7-1.8-34.3 0-57.8 20.9-57.8 59.4V94H62.2v45.1H101v115.2h46.5z"
    />
  </svg>
)

const FacebookColored = memo(SvgComponent, isEqual)
export default FacebookColored
