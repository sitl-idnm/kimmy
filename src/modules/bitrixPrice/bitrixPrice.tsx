import { FC } from 'react'
import classNames from 'classnames'

import styles from './bitrixPrice.module.scss'
import { BitrixPriceProps } from './bitrixPrice.types'
import { Button } from '@/ui'

const BitrixPrice: FC<BitrixPriceProps> = ({
  className,
  buttonHref,
  buttonText = 'Хочу внедрить'
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <section className={rootClassName}>
      <h2 className={styles.heading}>Тарифы Bitrix24</h2>
      <p className={styles.subtitle}>Bitrix24 предлагает гибкие тарифы — от бесплатной версии до расширенных платных тарифов с мощной автоматизацией и кастомизацией.</p>

      <div className={styles.tableWrapper}>
        <div className={styles.table}>
          {/* Header */}
          <div className={styles.headerCell}>Бесплатный</div>
          <div className={styles.headerCell}>Базовый</div>
          <div className={styles.headerCell}>Стандартный</div>
          <div className={styles.headerCell}>Профессиональный</div>
          <div className={styles.headerCell}>Энтерпрайз</div>

          {/* Users */}
          <div className={styles.cell}>
            <div className={styles.cellTitle}>Неограниченное число пользователей</div>
            <div className={styles.small}>5 ГБ</div>
            <div className={styles.small}>Базовая CRM, задачи, календарь, коммуникации, 1 воронка продаж</div>
            <div className={styles.priceFree}>Бесплатно</div>
          </div>
          <div className={styles.cell}>
            <div className={styles.cellTitle}>5 пользователей</div>
            <div className={styles.small}>24 ГБ</div>
            <div className={styles.small}>CRM с мультиворонками, задачи и проекты, HD-видеозвонки, автоматизация, сайт</div>
            <div className={`${styles.price} ${styles.priceOld}`}>2 490 р/мес.</div>
            <div className={styles.perYear}>1 494 р/мес. при покупке на год</div>
          </div>
          <div className={styles.cell}>
            <div className={styles.cellTitle}>50 пользователей</div>
            <div className={styles.small}>100 ГБ</div>
            <div className={styles.small}>Базовый + маркетинг, онлайн-магазин, воронки, автоворонки, документы, отчёты</div>
            <div className={`${styles.price} ${styles.priceOld}`}>6 990 р/мес.</div>
            <div className={styles.perYear}>4 194 р/мес. при покупке на год</div>
          </div>
          <div className={styles.cell}>
            <div className={styles.cellTitle}>100 пользователей</div>
            <div className={styles.small}>1 024 ГБ</div>
            <div className={styles.small}>Стандартный + роботы и бизнес-процессы, BI-аналитика, REST API, онлайн-подпись</div>
            <div className={`${styles.price} ${styles.priceOld}`}>13 990 р/мес</div>
            <div className={styles.perYear}>8 394 р/мес при покупке на год</div>
          </div>
          <div className={styles.cell}>
            <div className={styles.cellTitle}>от 500 пользователей</div>
            <div className={styles.small}>3 ТБ</div>
            <div className={styles.small}>Все возможности системы, кастомизация под бизнес, расширенная аналитика, SLA</div>
            <div className={`${styles.price} ${styles.priceOld}`}>33 990 р/мес</div>
            <div className={styles.perYear}>20 349 р/мес при покупке на год</div>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <Button
          className={styles.button}
          tag={buttonHref ? 'a' : 'button'}
          href={buttonHref}
          maxWidth='300px'
        >
          {buttonText}
        </Button>
      </div>
    </section>
  )
}

export default BitrixPrice
