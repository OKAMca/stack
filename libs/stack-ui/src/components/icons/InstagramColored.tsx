import isEqual from 'lodash.isequal'
import React, { memo } from 'react'

const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 256 256" {...props}>
    <g fill="none" strokeMiterlimit="10" strokeWidth="0" transform="matrix(2.8 0 0 2.8 1.4 1.4)">
      <linearGradient
        id="a"
        x1="7.6"
        x2="82.4"
        y1="9.6"
        y2="84.4"
        gradientTransform="matrix(1 0 0 -1 0 92)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#ffd600" />
        <stop offset="50%" stopColor="#ff0100" />
        <stop offset="100%" stopColor="#d800b9" />
      </linearGradient>
      <path
        fill="url(#a)"
        d="M89.7 26.4c-.2-4.7-1-8-2-10.9a22 22 0 0 0-5.3-8 22 22 0 0 0-8-5.1A33 33 0 0 0 63.7.3C58.8 0 57.2 0 45 0S31.2 0 26.4.3c-4.7.2-8 1-10.9 2a22 22 0 0 0-8 5.3 22 22 0 0 0-5.1 8A33 33 0 0 0 .3 26.3C0 31.2 0 32.8 0 45c0 12.2 0 13.8.3 18.6.2 4.7 1 8 2 10.9a22 22 0 0 0 5.3 8c2.2 2.2 5 4 8 5.1a33 33 0 0 0 10.8 2.1c4.8.2 6.4.3 18.6.3s13.8 0 18.6-.3c4.7-.2 8-1 10.9-2a23 23 0 0 0 13.1-13.2 33 33 0 0 0 2.1-11c.2-4.7.3-6.3.3-18.5s0-13.8-.3-18.6zm-8 36.8c-.3 4.4-1 6.8-1.6 8.3-1.5 4-4.6 7-8.6 8.6-1.5.6-4 1.3-8.3 1.5-4.8.2-6.2.3-18.2.3s-13.4 0-18.2-.3a25 25 0 0 1-8.3-1.5 14 14 0 0 1-5.2-3.4 14 14 0 0 1-3.4-5.2c-.6-1.5-1.3-4-1.5-8.3A313 313 0 0 1 8 45c0-12 0-13.4.3-18.2a25 25 0 0 1 1.5-8.3 14 14 0 0 1 3.4-5.2 14 14 0 0 1 5.2-3.4c1.5-.6 4-1.3 8.3-1.5C31.6 8.2 33 8 45 8s13.4 0 18.2.3c4.4.2 6.8.9 8.3 1.5a14 14 0 0 1 5.2 3.4 14 14 0 0 1 3.4 5.2c.6 1.5 1.3 4 1.5 8.3.2 4.8.3 6.2.3 18.2s0 13.4-.3 18.2z"
      />
      <linearGradient
        id="b"
        x1="28.7"
        x2="61.3"
        y1="30.7"
        y2="63.3"
        gradientTransform="matrix(1 0 0 -1 0 92)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#ff6400" />
        <stop offset="50%" stopColor="#ff0100" />
        <stop offset="100%" stopColor="#fd0056" />
      </linearGradient>
      <path
        fill="url(#b)"
        d="M45 21.9A23.1 23.1 0 1 0 45 68 23.1 23.1 0 0 0 45 22zM45 60a15 15 0 1 1 0-30 15 15 0 0 1 0 30z"
      />
      <linearGradient
        id="c"
        x1="65.2"
        x2="72.8"
        y1="67.2"
        y2="74.8"
        gradientTransform="matrix(1 0 0 -1 0 92)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#f30072" />
        <stop offset="100%" stopColor="#e50097" />
      </linearGradient>
      <path fill="url(#c)" d="M74.4 21a5.4 5.4 0 1 1-10.8 0 5.4 5.4 0 0 1 10.8 0z" />
    </g>
  </svg>
)

const InstagramColored = memo(SvgComponent, isEqual)
export default InstagramColored
