import { FC } from 'react'
import classNames from 'classnames'

import styles from './servicePage.module.scss'
import { ServicePageProps } from './servicePage.types'
const ServicePage: FC<ServicePageProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <main className={rootClassName}>
      <h1>ServicePage</h1>
    </main>
  )
}

export default ServicePage
