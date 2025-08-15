'use client'

import { FC, useEffect, useState } from 'react'
import classNames from 'classnames'

import styles from './cookieBanner.module.scss'
import { CookieBannerProps } from './cookieBanner.types'
import Button from '@/ui/button/button'

const CookieBanner: FC<CookieBannerProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  const [isOpen, setIsOpen] = useState(false)

  const getCookie = (name: string): string | null => {
    if (typeof document === 'undefined') return null
    const matches = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()\[\]\\/+^])/g, '\\$1') + '=([^;]*)'))
    return matches ? decodeURIComponent(matches[1]) : null
  }

  const setCookieForOneMonth = (name: string, value: string) => {
    if (typeof document === 'undefined') return
    const expiresDate = new Date()
    expiresDate.setMonth(expiresDate.getMonth() + 1)
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expiresDate.toUTCString()}; path=/; SameSite=Lax`
  }

  useEffect(() => {
    const accepted = getCookie('cookie_consent_accepted')
    setIsOpen(!accepted)
  }, [])

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
          onClick={() => {
            setCookieForOneMonth('cookie_consent_accepted', 'true')
            setIsOpen(false)
          }}
        >
          Принять
        </Button>
      </div>
    )
  }

  return null
}

export default CookieBanner
