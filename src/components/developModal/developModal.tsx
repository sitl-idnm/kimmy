/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react'
import classNames from 'classnames'

import styles from './developModal.module.scss'
import { DevelopModalProps } from './developModal.types'
import { useSetAtom } from 'jotai/react'
import { openModalContent } from '@/shared/atoms/openModal'
import Image from 'next/image'
import { FavourItem } from '../favourItem'
import { ModalForm } from '../modalForm'
import ipadSweet from '../../../public/images/ipad_sweetcorp.png'
import Code from '../../shared/assets/icons/code_embeed.svg'
import CodeIcon from '../../shared/assets/icons/code.svg'
import Tilda from '../../shared/assets/icons/tilda.svg'
import Wp from '../../shared/assets/icons/wp.svg'
import Webflow from '../../shared/assets/icons/webflow.svg'

const itemsData = [
  { title: 'Привлекайте клиентов из поисковых систем', backgroundColor: 'var(--color-grey)', textColor: 'var(--color-black)', imageSrc: '/images/image1_fix.png', text: 'Создадим оптимизированный сайт, который хорошо ранжируется в Google и Яндексе' },
  { title: 'Получайте больше заявок с сайта', backgroundColor: 'var(--color-black)', textColor: 'var(--color-white-default)', imageSrc: '/images/image2.png', text: 'Логичная структура и удобный функционал помогают клиентам оставлять запросы быстрее' },
  { title: 'Автоматизируйте рутину', backgroundColor: 'var(--color-red-accent)', textColor: 'var(--color-white-default)', imageSrc: '/images/image4_fix.png', text: 'Интеграция сайта с CRM, платёжными системами и аналитикой снижает нагрузку на вашу команду' },
]

const itemsSupportData = [
  { title: 'Обновляйте сайт без лишних усилий', backgroundColor: 'var(--color-grey)', textColor: 'var(--color-black)', imageSrc: '/images/glass.png', text: 'Мы вносим изменения за вас: от новых страниц до доработки функционала' },
  { title: 'Улучшайте скорость и SEO-показатели сайта', backgroundColor: 'var(--color-black)', textColor: 'var(--color-white-default)', imageSrc: '/images/star.png', text: 'Регулярная оптимизация делает сайт удобным для пользователей и видимым для поисковиков' },
  { title: 'Снижайте количество технических ошибок', backgroundColor: 'var(--color-red-accent)', textColor: 'var(--color-white-default)', imageSrc: '/images/circle_modal.png', text: 'Постоянный контроль за сайтом предотвращает сбои и неудачные обновления' },
]

const DevelopModal: FC<DevelopModalProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)
  const setModalContent = useSetAtom(openModalContent)

  const closeModal = () => {
    setModalContent('')
  }

  return (
    <div className={styles.modal} onClick={(e) => {
      if (e.target === e.currentTarget) {
        closeModal()
      }
    }}>
      <div className={styles.modal__content} onClick={(e) => e.stopPropagation()}>
        <div className={styles.close} onClick={closeModal}></div>
        <div className={styles.content}>
          <div className={styles.content__first}>
            <div className={styles.first}>
              <h2 className={styles.title}>
                Разработка<span><Code /></span>
                <br />и поддержка сайтов
              </h2>
              <p className={styles.text}>
                Закажите сайт на коде или собранный в Tilda, WordPress и на других CMS
              </p>
              <ul className={styles.icons}>
                <li className={styles.icon}><Webflow /></li>
                <li className={styles.icon}><Wp /></li>
                <li className={styles.icon}><Tilda /></li>
                <li className={styles.icon}><CodeIcon /></li>
              </ul>
            </div>
            <div className={styles.lines}>
              <Image
                src={ipadSweet}
                alt='ipad'
              />
            </div>
          </div>
          <div className={styles.content__favour}>
            <ul className={styles.favour}>
              {itemsData.map((item, index) => (
                <FavourItem
                  key={index}
                  title={item.title}
                  backgroundColor={item.backgroundColor}
                  textColor={item.textColor}
                  imageSrc={item.imageSrc}
                  linkText={''}
                  linkColor={''}
                  text={item.text}
                />
              ))}
            </ul>
          </div>
          <h3 className={styles.modal__title__h2}>Обеспечим поддержку сайта</h3>
          <p className={styles.modal__title__p}>Закажите поддержку, чтобы сайт всегда был в идеальном состоянии</p>
          <div className={styles.content__favour}>
            <ul className={styles.favour}>
              {itemsSupportData.map((item, index) => (
                <FavourItem
                  key={index}
                  title={item.title}
                  backgroundColor={item.backgroundColor}
                  textColor={item.textColor}
                  imageSrc={item.imageSrc}
                  linkText={''}
                  linkColor={''}
                  text={item.text}
                />
              ))}
            </ul>
          </div>
          <div className={styles.content__result}>
            <h2 className={styles.result__title}>Что вы получите:</h2>
            <div className={styles.result__points}>
              <ul className={styles.result__list}>
                <li className={styles.list__point}>Сайт, готовый к запуску рекламы и адаптированный под все устройства</li>
                <li className={styles.list__point}>Постоянный мониторинг, улучшение производительности и безопасности</li>
                <li className={styles.list__point}>Интеграцию с нужными сервисами: CRM, онлайн-оплаты, рассылки</li>
                <li className={styles.list__point}>Регулярные обновления контента и функционала</li>
              </ul>
            </div>
          </div>
          <div>
            <ModalForm development titleForm='формы "Разработка сайта"' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DevelopModal
