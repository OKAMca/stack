import { isEqual } from 'radashi'
import * as React from 'react'
import { memo } from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="40" height="40" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M16.1339 8.5415C18.1397 10.0645 19.8152 11.9792 21.0587 14.1693C22.2848 16.2537 25.064 22.0491 22.5341 25.3227C19.6732 29.0215 11.3848 30.2721 11.3848 33.6807C11.3848 36.2473 15.0181 39.1736 16.9594 42.0386C18.0736 43.6842 18.6691 45.626 18.6691 47.6133C18.6691 49.6006 18.0736 51.5423 16.9594 53.1879C16.0541 54.6088 14.817 55.7884 13.3547 56.6251"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M57.8289 14.8058C52.7905 17.106 47.4837 18.766 42.0327 19.747C39.1227 19.9555 38.6895 17.5605 36.4621 14.1724C34.7905 11.6302 30.8874 8.45055 30.8874 5.81443C30.8648 4.90303 30.9876 3.99386 31.2511 3.12109"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.6799 64.3334C50.6088 64.3334 64.3324 50.6098 64.3324 33.6809C64.3324 16.7519 50.6088 3.02832 33.6799 3.02832C16.751 3.02832 3.02734 16.7519 3.02734 33.6809C3.02734 50.6098 16.751 64.3334 33.6799 64.3334Z"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M53.2225 36.1983C53.341 44.781 42.1549 55.5094 36.4658 53.188C31.4796 51.1445 34.9944 47.2291 33.7193 36.1983C33.188 31.6127 38.0842 27.8404 43.4872 27.8404C45.8806 27.6839 48.24 28.4711 50.0597 30.0335C51.8795 31.5958 53.2225 32.8948 53.2225 36.1983Z"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const Globe = memo(SvgComponent, isEqual)
export default Globe
