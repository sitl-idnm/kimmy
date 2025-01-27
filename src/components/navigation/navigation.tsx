import { FC } from 'react'
import classNames from 'classnames'

import styles from './navigation.module.scss'
import { NavigationProps } from './navigation.types'

const Navigation: FC<NavigationProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <nav className={styles.navigation}>
        <ul className={styles.navigation__list}>
          <li><a href="#" className={styles.navigation__item}>Кейсы</a></li>
          <li><a href="#" className={styles.navigation__item}>Работа у нас</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
