'use client'

import styles from './next-component.module.css'

/* eslint-disable-next-line */
export interface NextComponentProps {}

export function NextComponent(props: NextComponentProps) {
  return (
    <div className={styles.container}>
      <h1>Hello Client Component!</h1>
    </div>
  )
}

export default NextComponent
