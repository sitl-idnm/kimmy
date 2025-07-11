'use client'

import { FC, useState } from 'react'
import classNames from 'classnames'

import styles from './cookieBanner.module.scss'
import { CookieBannerProps } from './cookieBanner.types'
import Button from '@/ui/button/button'

const CookieBanner: FC<CookieBannerProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  const [isOpen, setIsOpen] = useState(true)

  if (isOpen) {
    return (
      <div className={rootClassName}>
        <div className={styles.root__content}>
          <h2 className={styles.root__content__title}>
            Мы используем файлы cookie.
          </h2>
          <p className={styles.root__content__text}>
            Этот сайт использует файлы cookie для хранения данных. Продолжая использовать сайт, Вы даете согласие на работу с этими файлами
          </p>
        </div>
        <Button
          className={styles.root__button}
          onClick={() => setIsOpen(false)}
        >
          Принять
        </Button>
      </div>
    )
  }

  return null
}

export default CookieBanner
