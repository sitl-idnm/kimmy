// },
//   "packageManager": "yarn@1.22.22+sha512.a6b2f7906b721bba3d67d4aff083df04dad64c399707841b7acf00f6b133b7ac24255f2652fa22ae3534329dc6180534e98d17432037ff6fd140556e2bb3137e"
'use client'
import { FC, useEffect, useState } from 'react'
import { CaseItem } from '@/components'
import classNames from 'classnames'

import styles from './cases.module.scss'
import { CasesProps } from './cases.types'

const itemsData = [
  {
    title: 'Многостраничный сайт для сервиса по работе с клиентскими данными',
    text: 'Создали новый фирменный стиль и многостраничный сайт',
    imageSrc: '/images/oneCDP_ipad.png',
    keyFilter: ['all', 'Разработка сайта']
  },
  {
    title: 'Интернет-магазин для пекарни полного цикла',
    text: 'Разработали сайт с возможностью оформления заказа, оплаты и доставки',
    imageSrc: '/images/magic_ipad.png',
    keyFilter: ['all', 'Разработка сайта']
  },
  {
    title: 'Лендинг no-code для серф-клуба в Москве',
    text: 'Разработали одностраничный сайт на Тильде по нашему дизайн-макету',
    imageSrc: '/images/bw_ipad.png'
    ,
    keyFilter: ['all', 'nocode']
  },
  {
    title:
      'Англоязычный лендинг приложения для простой двухфакторной аутентификации на любых сервисах',
    text: 'Разработали сайт и отрисовали приложение с нуля',
    imageSrc: '/images/gloid_ipad.png',
    keyFilter: ['all', 'Разработка сайта']
  },
  {
    title:
      'Сайт с конверсией 4,3% для производителя сладких новогодних подарков',
    text: 'Разработали многостраничный сайт и запустили контекстную рекламу',
    imageSrc: '/images/sweetcorp.png',
    keyFilter: ['all', 'nocode', 'Контекстная реклама']
  },
  {
    title:
      'Многостраничный сайт с онлайн-записью и базовым SEO для оздоровительного центра «Ровная спина»',
    text: 'Разработали многостраничный сайт с онлайн-записью',
    imageSrc: '/images/rovnayaspina.png',
    keyFilter: ['all', 'nocode', 'SEO']
  }
]

// 5 кнопок с передачей useState в проверку на условие для отображения контента

const Cases: FC<CasesProps> = ({ className }) => {
  const rootClassName = classNames(styles.root, className)
  const [filterVar, setFilterVar] = useState<string>('all')

  const filter = (name: string): void => {
    setFilterVar(name)
  }

  useEffect(() => {
    console.log(filterVar)
  })

  return (
    <div className={rootClassName}>
      <h1 className={styles.root__title}>Кейсы</h1>
      <div className={styles.buttons}>
        <button className={styles.buttons__filter} onClick={() => filter('Разработка сайта')}>Разработка сайта</button>
        <button className={styles.buttons__filter} onClick={() => filter('Контекстная реклама')}>Контекстная реклама</button>
        <button className={styles.buttons__filter} onClick={() => filter('SEO')}>SEO</button>
        <button className={styles.buttons__filter} onClick={() => filter('Дизайн')}>Дизайн</button>
        <button className={styles.buttons__filter} onClick={() => filter('nocode')}>No-code разработка</button>
      </div>
      <div className={styles.root__cases}>
        {itemsData.map((item, index) => {
          if (filterVar === 'all') {
            return (
              <CaseItem
                key={index}
                title={item.title}
                text={item.text}
                imageSrc={item.imageSrc}
                isCasePage
              />
            )
          } else if (item.keyFilter.includes(filterVar)) {
            return (
              <CaseItem
                key={index}
                title={item.title}
                text={item.text}
                imageSrc={item.imageSrc}
                isCasePage
              />
            )
          }
        })}
      </div>
    </div>
  )
}

export default Cases
