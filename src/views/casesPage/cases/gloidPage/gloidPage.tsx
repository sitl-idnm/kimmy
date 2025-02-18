import { FC } from 'react'
import classNames from 'classnames'

import styles from './gloidPage.module.scss'
import { GloidPageProps } from './gloidPage.types'

const GloidPage: FC<GloidPageProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)
  
  return (
    <main className={rootClassName}></main>
  )
}

export default GloidPage
