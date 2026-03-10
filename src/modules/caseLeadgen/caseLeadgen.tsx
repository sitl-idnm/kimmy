'use client'

import { FC, useState } from 'react'
import classNames from 'classnames'
import Image from 'next/image'
import { useSetAtom } from 'jotai/react'
import { openModalContent } from '@/shared/atoms/openModal'
import ArrowLeft from '@icons/arrow-left.svg'
import ArrowRight from '@icons/arrow-right.svg'
import IconTask from '@icons/ExclamationCircleIcon.svg'
import IconApproach from '@icons/why/heart.svg'
import IconResult from '@icons/dot__star.svg'

import styles from './caseLeadgen.module.scss'
import { CaseLeadgenProps, CaseLeadgenItem } from './caseLeadgen.types'
import { caseLeadgenDefaultItems } from './caseLeadgen.data'

const defaultTitle = 'Пока вы оцениваете, конкуренты уже получают лиды'
const defaultSubtitle = 'Реальные проекты с цифрами'
const defaultCategories =
  'B2B-услуги / Производство / Строительство / Автобизнес / Медицина / Образование / Финансы / Ритейл / HoReCa / Логистика'

const CaseLeadgen: FC<CaseLeadgenProps> = ({
  className,
  id,
  title = defaultTitle,
  subtitle = defaultSubtitle,
  categories = defaultCategories,
  items = caseLeadgenDefaultItems,
  actionButtonText = 'Получить план запуска',
  actionButtonHref = '#form'
}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const setModalContent = useSetAtom(openModalContent)
  const rootClassName = classNames(styles.root, className)
  const activeItem = items[activeIndex]
  const openDetailsModal = actionButtonHref === '#form'
  const goPrev = () => setActiveIndex((i) => (i <= 0 ? items.length - 1 : i - 1))
  const goNext = () => setActiveIndex((i) => (i >= items.length - 1 ? 0 : i + 1))

  return (
    <section id={id} className={rootClassName}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {categories && <p className={styles.categories}>{categories}</p>}
      </div>

      <div className={styles.wrapper}>
        <nav className={styles.nav} aria-label="Навигация по кейсам">
          <ul className={styles.navList}>
            {items.map((item, index) => (
              <li key={index}>
                <button
                  type="button"
                  className={classNames(styles.navItem, { [styles.navItemActive]: index === activeIndex })}
                  onClick={() => setActiveIndex(index)}
                >
                  {item.title}
                  {item.badge ? <span className={styles.navBadge}>{item.badge}</span> : null}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.navArrows} aria-label="Переключение кейсов">
          <button type="button" className={styles.navArrowBtn} onClick={goPrev} aria-label="Предыдущий кейс">
            <ArrowLeft className={styles.navArrowIcon} />
          </button>
          <button type="button" className={styles.navArrowBtn} onClick={goNext} aria-label="Следующий кейс">
            <ArrowRight className={styles.navArrowIcon} />
          </button>
        </div>

        <div className={styles.slider}>
          <div className={styles.slide}>
            {activeItem && <CaseLeadgenCard item={activeItem} />}
          </div>
        </div>
      </div>

      <div className={styles.actions}>
        {openDetailsModal ? (
          <button type="button" className={styles.ctaButton} onClick={() => setModalContent('детали-лидогенерация')}>
            {actionButtonText}
          </button>
        ) : (
          <a href={actionButtonHref} className={styles.ctaButton}>
            {actionButtonText}
          </a>
        )}
      </div>
    </section>
  )
}

interface CaseLeadgenCardProps {
  item: CaseLeadgenItem
}

const CaseLeadgenCard: FC<CaseLeadgenCardProps> = ({ item }) => (
  <article className={styles.card}>
    {item.imageSrc && (
      <div className={styles.cardImage}>
        <Image src={item.imageSrc} alt="" width={400} height={240} className={styles.cardImg} />
      </div>
    )}
    {!item.imageSrc && <div className={styles.cardImagePlaceholder}>фото</div>}
    <div className={styles.cardBody}>
      <h3 className={styles.cardTitle}>
        {item.title}
        <span className={styles.badge}>{item.badge}</span>
      </h3>
      <div className={styles.cardMeta}>
        <div className={styles.cardMetaItem}>
          <div className={styles.cardMetaBlock}>
            <IconTask className={styles.cardMetaBlockIcon} aria-hidden />
            <span className={styles.cardMetaBlockTitle}>Задача</span>
          </div>
          <p className={styles.cardDesc}>{item.task}</p>
        </div>
        <div className={styles.cardMetaItem}>
          <div className={styles.cardMetaBlock}>
            <IconApproach className={styles.cardMetaBlockIcon} aria-hidden />
            <span className={styles.cardMetaBlockTitle}>Подход</span>
          </div>
          <p className={styles.cardDesc}>{item.approach}</p>
        </div>
        <div className={styles.cardMetaItem}>
          <div className={classNames(styles.cardMetaBlock, styles.cardMetaBlockActive)}>
            <IconResult className={styles.cardMetaBlockIcon} aria-hidden />
            <span className={styles.cardMetaBlockTitle}>Результат</span>
          </div>
          <p className={styles.cardDesc}>{item.result}</p>
        </div>
      </div>
    </div>
  </article>
)

export default CaseLeadgen
