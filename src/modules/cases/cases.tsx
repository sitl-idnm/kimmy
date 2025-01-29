import { FC } from 'react'
import classNames from 'classnames'

import styles from './cases.module.scss'
import { CasesProps } from './cases.types'
import { CaseItem } from '@/components'

const itemsData = [
  { title: 'Многостраничный сайт для сервиса по работе с клиентскими данными', text: 'Создали новый фирменный стиль и многостраничный сайт', imageSrc: '/images/oneCDP_ipad.png' },
  { title: 'Интернет-магазин для пекарни полного цикла', text: 'Разработали сайт с возможностью оформления заказа, оплаты и доставки', imageSrc: '/images/magic_ipad.png' },
  { title: 'Лендинг no-code для серф-клуба в Москве', text: 'Разработали одностраничный сайт на Тильде по нашему дизайн-макету', imageSrc: '/images/bw_ipad.png' },
  { title: 'Англоязычный лендинг приложения для простой двухфакторной аутентификации на любых сервисах', text: 'Разработали сайт и отрисовали приложение с нуля', imageSrc: '/images/gloid_ipad.png' },
]

const Cases: FC<CasesProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <h1 className={styles.root__title}>Кейсы</h1>
      <div className={styles.root__cases}>
        {itemsData.map((item, index) => (
            <CaseItem
              key={index}
              title={item.title}
              text={item.text}
              imageSrc={item.imageSrc}
              isCasePage
            />
          ))}
      </div>
    </div>
  )
}

export default Cases
