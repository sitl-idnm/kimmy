import { FC } from 'react'
import classNames from 'classnames'

import styles from './bitrixQuality.module.scss'
import { BitrixQualityProps } from './bitrixQuality.types'
import Image from 'next/image'

const BitrixQuality: FC<BitrixQualityProps> = ({
  className,
  images
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <section className={rootClassName}>
      <h2 className={styles.heading}>Возможности Bitrix24</h2>

      <div className={styles.section}>
        <div className={styles.sectionRow}>
          <div className={styles.colText}>
            <h3 className={styles.title}>Совместная работа</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>Чаты, HD-видеозвонки, лента новостей</li>
              <li className={styles.listItem}>Корпоративный диск, календари, работа с документами</li>
              <li className={styles.listItem}>Онлайн-офис для удаленной и гибридной командной работы</li>
            </ul>
          </div>
          {images?.onlineOffice && (
            <div className={`${styles.colImage} ${styles.imageWrapper}`}>
              <Image
                className={styles.image}
                src={images.onlineOffice.src}
                alt={images.onlineOffice.alt || 'Онлайн-офис'}
                width={images.onlineOffice.width || 1200}
                height={images.onlineOffice.height || 675}
              />
            </div>
          )}
        </div>
      </div>

      <div className={styles.section}>
        <div className={`${styles.sectionRow} ${styles.reverse}`}>
          {images?.crm && (
            <div className={`${styles.colImage} ${styles.imageWrapper}`}>
              <Image
                className={styles.image}
                src={images.crm.src}
                alt={images.crm.alt || 'CRM система'}
                width={images.crm.width || 1200}
                height={images.crm.height || 675}
              />
            </div>
          )}
          <div className={styles.colText}>
            <h3 className={styles.title}>CRM</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>Воронки продаж, лиды, сделки, клиенты</li>
              <li className={styles.listItem}>Автоматизация продаж, роботы, триггеры</li>
              <li className={styles.listItem}>Аналитика, отчёты, рассылки, интеграции с телефонией и почтой</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionRow}>
          <div className={styles.colText}>
            <h3 className={styles.title}>Задачи и проекты</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>Постановка и контроль задач, шаблоны</li>
              <li className={styles.listItem}>Канбан, диаграмма Ганта, Agile, рабочие группы</li>
              <li className={styles.listItem}>Временные отчёты, эффективность сотрудников</li>
            </ul>
          </div>
          {images?.tasks && (
            <div className={`${styles.colImage} ${styles.imageWrapper}`}>
              <Image
                className={styles.image}
                src={images.tasks.src}
                alt={images.tasks.alt || 'Список задач'}
                width={images.tasks.width || 1200}
                height={images.tasks.height || 675}
              />
            </div>
          )}
        </div>
      </div>

      <div className={styles.section}>
        <div className={`${styles.sectionRow} ${styles.reverse}`}>
          {images?.sites && (
            <div className={`${styles.colImage} ${styles.imageWrapper}`}>
              <Image
                className={styles.image}
                src={images.sites.src}
                alt={images.sites.alt || 'Страница сайта'}
                width={images.sites.width || 1200}
                height={images.sites.height || 675}
              />
            </div>
          )}
          <div className={styles.colText}>
            <h3 className={styles.title}>Сайты и магазины</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>Конструктор сайтов и лендингов</li>
              <li className={styles.listItem}>Интернет-магазин с корзиной, оплатой и доставкой</li>
              <li className={styles.listItem}>Готовые шаблоны и интеграция с CRM</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionRow}>
          <div className={styles.colText}>
            <h3 className={styles.title}>Автоматизация процессов</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>Роботы и бизнес-процессы в CRM и задачах</li>
              <li className={styles.listItem}>Автозадачи, уведомления, напоминания</li>
              <li className={styles.listItem}>Сценарии обработки клиентов и интеграции с внешними сервисами</li>
            </ul>
          </div>
          {images?.automation && (
            <div className={`${styles.colImage} ${styles.imageWrapper}`}>
              <Image
                className={styles.image}
                src={images.automation.src}
                alt={images.automation.alt || 'Шаблон бизнес-процесса'}
                width={images.automation.width || 1200}
                height={images.automation.height || 675}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default BitrixQuality
