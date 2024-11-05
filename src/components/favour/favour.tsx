import { FC } from 'react'
import classNames from 'classnames'

import styles from './favour.module.scss'
import { FavourProps } from './favour.types'
import { FavourItem } from '../favourItem'

const itemsData = [
  { title: 'исследования', linkText: 'Подробнее', linkColor: 'var(--color-black)', backgroundColor: 'var(--color-grey)', textColor: 'var(--color-black)', imageSrc: '/images/image1.png' },
  { title: 'дизайн', linkText: 'Подробнее', linkColor: 'var(--color-white-default)', backgroundColor: 'var(--color-black)', textColor: 'var(--color-white-default)', imageSrc: '/images/image2.png' },
  { title: 'разработка', linkText: 'Подробнее', linkColor: 'var(--color-black)', backgroundColor: 'var(--color-grey-light)', textColor: 'var(--color-black)', imageSrc: '/images/image3.png' },
  { title: 'поддержка', linkText: 'Подробнее', linkColor: 'var(--color-black)', backgroundColor: 'var(--color-red-accent)', textColor: 'var(--color-white-default)', imageSrc: '/images/image4.png' },
]

const Favour: FC<FavourProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <div className={styles.favour}>
        <ul className={styles.favour__list}>
        {itemsData.map((item, index) => (
            <FavourItem
              key={index}
              title={item.title}
              linkText={item.linkText}
              linkColor={item.linkColor}
              backgroundColor={item.backgroundColor}
              textColor={item.textColor}
              imageSrc={item.imageSrc}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Favour
