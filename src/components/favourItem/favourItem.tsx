'use client'

import { FC } from 'react'
import styles from './favourItem.module.scss'
import { FavourItemProps } from './favourItem.types'
import Image from 'next/image'
import { useSetAtom } from 'jotai/react'
import { openModalContent } from '@/shared/atoms/openModal'
import { ReactNode } from 'react'

const FavourItem: FC<FavourItemProps> = ({ title, linkText, linkColor, backgroundColor, textColor, imageSrc, imageTitle = 'Image', text }) => {
  const setModalContent = useSetAtom(openModalContent)

  const handleOpenModal = (name: ReactNode) => {
    if (typeof name === 'string') setModalContent(name)
  }

  return (
    <li className={styles.favour__item} style={{ backgroundColor }} onClick={() => handleOpenModal(imageTitle)}>
      <div>
        <h2 className={styles.favour__title} style={{ color: textColor }}>
          {title}
        </h2>
        <p style={{ color: textColor }}>
          {text}
        </p>
      </div>
      {imageSrc && <Image
        src={imageSrc}
        width={280}
        height={280}
        quality={100}
        alt={imageTitle}
        className={styles.favour__image} />}
      <button className={styles.favour__description} style={{ color: linkColor }}>
        {linkText}
      </button>
    </li>
  )
}

export default FavourItem
