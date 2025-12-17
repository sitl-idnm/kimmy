'use client'
import { FC } from 'react'
import Link from 'next/link'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LogoIcon from '@icons/logo.svg'

import styles from './logo.module.scss'

const Logo: FC = () => {
  const handleClick = () => {
    // Очищаем все ScrollTrigger перед навигацией
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  }

  return (
    <Link href="/" className={styles.root} aria-label="home" onClick={handleClick}>
      <LogoIcon />
    </Link>
  )
}

export default Logo
