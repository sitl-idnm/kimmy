import { FC } from 'react'
import classNames from 'classnames'

import styles from './redBoxWork.module.scss'
import { RedBoxWorkProps } from './redBoxWork.types'

const RedBoxWork: FC<RedBoxWorkProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <div className={styles.buttons}>
        <button>дизайн</button>
        <button>разработка</button>
        <button>маркетинг</button>
        <button>менеджмент</button>
        <button>трафик</button>
      </div>
    </div>
  )
}

export default RedBoxWork
