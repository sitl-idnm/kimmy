'use client'

import { FC } from 'react'

import styles from './favourItem.module.scss'
import { FavourItemProps } from './favourItem.types'
import Image from 'next/image'
import { openModal, openModalContent } from '@/shared/atoms/openModal'
import { useAtom } from 'jotai'

const FavourItem: FC<FavourItemProps> = ({ title, linkText, linkColor, backgroundColor, textColor, imageSrc, text }) => {
  const [, setOpenWindow] = useAtom(openModal)
  const [openWindowContent, setOpenWindowContent] = useAtom(openModalContent)

  const handleOpenModal = () => {
    setOpenWindow(true)
    setOpenWindowContent(title)
    console.log(openWindowContent)
  }

  return (
    <li className={styles.favour__item} style={{ backgroundColor }}>
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
      <button className={styles.favour__description} style={{ color: linkColor }} onClick={handleOpenModal}>
        {linkText}
      </button>
    </li>
  )
}

export default FavourItem
