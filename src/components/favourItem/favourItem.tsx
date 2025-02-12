'use client'

import { FC } from 'react'
import classNames from 'classnames'
import styles from './favourItem.module.scss'
import { FavourItemProps } from './favourItem.types'
import Image from 'next/image'
import { useSetAtom } from 'jotai/react'
import { openModalContent } from '@/shared/atoms/openModal'

const FavourItem: FC<FavourItemProps> = ({ title, linkText, linkColor, backgroundColor, textColor, imageSrc, text }) => {
  const setModalContent = useSetAtom(openModalContent)

  const handleOpenModal = () => {
    setModalContent('детали')
  }

  return (
    <li className={styles.item} style={{ backgroundColor: backgroundColor, color: textColor }}>
      <div className={styles.item__content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
        {linkText && (
          <button
            className={styles.link}
            style={{ color: linkColor }}
            onClick={handleOpenModal}
          >
            {linkText}
          </button>
        )}
      </div>
      <div className={styles.item__image}>
        <Image
          src={imageSrc}
          width={200}
          height={200}
          alt='image'
        />
      </div>
    </li>
  )
}

export default FavourItem
