import isEqual from 'lodash.isequal'
import React, { memo } from 'react'

const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none" {...props}>
    <path
      d="M14.119 11.7052L20.4486 4.5H18.9492L13.4509 10.7549L9.0626 4.5H4L10.6374 13.9594L4 21.5142H5.4994L11.3021 14.9074L15.9374 21.5142H21M6.04057 5.60727H8.34407L18.9481 20.4613H16.644"
      fill="currentColor"
    />
  </svg>
)

const X = memo(SvgComponent, isEqual)
export default X
