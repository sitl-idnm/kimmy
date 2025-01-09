'use client'

import { FC, useState } from 'react'
import classNames from 'classnames'

import styles from './peoples.module.scss'
import { PeoplesProps } from './peoples.types'
import Image from 'next/image'
import { AnimatedImage, Button } from '@/ui'

const Peoples: FC<PeoplesProps> = ({
  className
}) => {
  const [isFirstHovered, setIsFirstHovered] = useState(false);
  const [isSecondHovered, setIsSecondHovered] = useState(false);
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <div className={styles.peoples}>
        <h2 className={styles.peoples__title}>Узнайте больше про наш подход у&nbsp;основателей агентства</h2>
        <div className={`${styles.peoples__card} ${styles.peoples__card__left}`}>
          <div className={styles.peoples__card__info}>
            <h3 className={styles.peoples__card__title}>Павел Коржуев</h3>
            <p className={styles.peoples__card__text}>@k.kim</p></div>
          <Button value="Написать в Telegram" />
        </div>
        <div className={`${styles.peoples__card} ${styles.peoples__card__right}`}>
          <div className={styles.peoples__card__info}>
            <h3 className={styles.peoples__card__title}>Константин Ким</h3>
            <p className={styles.peoples__card__text}>@k.kim</p></div>
          <Button value="Написать в Telegram" />
        </div>
        <Image
          src={isFirstHovered ? '/images/first.png' : '/images/first__anon.png'}
          width={500}
          height={563}
          quality={100}
          alt='peoples'
          className={styles.peoples__image__first}
          onMouseEnter={() => setIsFirstHovered(true)}
          onMouseLeave={() => setIsFirstHovered(false)}
        />
        <Image
          src={isSecondHovered ? '/images/second.png' : '/images/second__anon.png'}
          width={535}
          height={545}
          quality={100}
          alt='peoples'
          className={styles.peoples__image__second}
          onMouseEnter={() => setIsSecondHovered(true)}
          onMouseLeave={() => setIsSecondHovered(false)}
        />
        <AnimatedImage />
      </div>
    </div>
  )
}

export default Peoples
