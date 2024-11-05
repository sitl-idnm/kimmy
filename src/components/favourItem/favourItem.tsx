import { FC } from 'react'

import styles from './favourItem.module.scss'
import { FavourItemProps } from './favourItem.types'
import Image from 'next/image'

const FavourItem: FC<FavourItemProps> = ({ title, linkText, linkColor, backgroundColor, textColor, imageSrc }) => {
  return (
    <li className={styles.favour__item} style={{ backgroundColor }}>
      <h2 className={styles.favour__title} style={{ color: textColor }}>
        {title}
      </h2>
      {imageSrc && <Image
        src={imageSrc}
        width={280}
        height={280}
        quality={100}
        alt={title}
        className={styles.favour__image} />}
      <a href="#" className={styles.favour__description} style={{ color: linkColor }}>
        {linkText}
      </a>
    </li>
  )
}

export default FavourItem
