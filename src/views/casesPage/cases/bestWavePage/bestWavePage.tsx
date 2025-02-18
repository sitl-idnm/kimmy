import { FC } from 'react'
import classNames from 'classnames'

import styles from './bestWavePage.module.scss'
import { BestWavePageProps } from './bestWavePage.types'

const BestWavePage: FC<BestWavePageProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)
  
  return (
    <main className={rootClassName}></main>
  )
}

export default BestWavePage
