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

  const handleOpenModal = (name: string) => {
    setModalContent(name)
  }

  return (
    <li className={styles.favour__item} style={{ backgroundColor }} onClick={() => handleOpenModal(title)}>
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
        alt={title}
        className={styles.favour__image} />}
      <button className={styles.favour__description} style={{ color: linkColor }}>
        {linkText}
      </button>
    </li>
  )
}

export default FavourItem
