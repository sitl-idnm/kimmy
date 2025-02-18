import { FC } from 'react'
import classNames from 'classnames'

import styles from './magiyaVkusa.module.scss'
import { MagiyaVkusaProps } from './magiyaVkusa.types'

const MagiyaVkusa: FC<MagiyaVkusaProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)
  
  return (
    <main className={rootClassName}></main>
  )
}

export default MagiyaVkusa
