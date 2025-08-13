import { FC } from 'react'
import classNames from 'classnames'

import styles from './navigation.module.scss'
import { NavigationProps } from './navigation.types'
import Link from 'next/link'

const Navigation: FC<NavigationProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <nav className={styles.navigation}>
        <ul className={styles.navigation__list}>
          <li><Link href="/cases" className={styles.navigation__item}>Кейсы</Link></li>
          <li><Link href="/work" className={styles.navigation__item}>Работа у нас</Link></li>
          <li><Link href="/bitrix" className={styles.navigation__item}>Bitrix Партнер</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
