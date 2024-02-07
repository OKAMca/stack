import styles from './directus-query.module.css'

/* eslint-disable-next-line */
export interface DirectusQueryProps {}

export function DirectusQuery(props: DirectusQueryProps) {
  return (
    <div className={styles.container}>
      <h1>Welcome to DirectusQuery!</h1>
    </div>
  )
}

export default DirectusQuery
