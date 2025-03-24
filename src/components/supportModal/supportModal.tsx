/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react'
import classNames from 'classnames'

import styles from './supportModal.module.scss'
import { SupportModalProps } from './supportModal.types'
import { useSetAtom } from 'jotai/react'
import { openModalContent } from '@/shared/atoms/openModal'
import Image from 'next/image'
import { FavourItem } from '../favourItem'
import { ModalForm } from '../modalForm'
import iphone from '../../../public/images/modal_trafic.png'
import Gear from '../../shared/assets/icons/mafon.svg'

const itemsData = [
  { title: 'Выберите то, что подходит именно вам', backgroundColor: 'var(--color-grey)', textColor: 'var(--color-black)', imageSrc: '/images/image1_fix.png', text: 'Настраиваем таргетированную и контекстную рекламу, а также SEO-продвижение, чтобы сайт привлекал только заинтересованных клиентов' },
  { title: 'Увеличивайте охват и конверсию', backgroundColor: 'var(--color-black)', textColor: 'var(--color-white-default)', imageSrc: '/images/image2.png', text: 'Наши стратегии охватывают все этапы воронки продаж: от привлечения внимания до превращения посетителей в клиентов' },
  { title: 'Экономьте бюджет и время', backgroundColor: 'var(--color-red-accent)', textColor: 'var(--color-white-default)', imageSrc: '/images/image4_fix.png', text: 'Анализируем эффективность каждого канала и оптимизируем кампании, чтобы вы получали максимум результата при минимальных затратах' },
]

const SupportModal: FC<SupportModalProps> = ({
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
            <h2 className={styles.title}>
              Трафик <span className={styles.title__icon}><Gear /></span>
            </h2>
            <p className={styles.text}>
              <span className={styles.text__accent}>Привлекайте больше клиентов</span> с&nbsp;помощью наших услуг
            </p>
            <div className={styles.lines}>
              <Image
                src={iphone}
                alt='ipad-iphone'
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
          <div className={styles.content__result}>
            <h2 className={styles.result__title}>Какие услуги для привлечения трафика мы предлагаем:</h2>
            <div className={styles.result__points}>
              <ul className={styles.result__list}>
                <li className={styles.list__point}>SEO-продвижение:<p className={styles.list__point__accent}><br></br>Улучшаем видимость сайта в поисковиках и&nbsp;привлекаем трафик на&nbsp;постоянной основе</p></li>
                <li className={styles.list__point}>Контекстная реклама:<p className={styles.list__point__accent}><br></br>Показываем сайт тем, кто уже ищет ваши услуги</p></li>
                <li className={styles.list__point}>Таргетированная реклама:<p className={styles.list__point__accent}><br></br>Привлекаем аудиторию из соцсетей, которая точно заинтересуется вашим предложением</p></li>
              </ul>
            </div>
          </div>
          <div>
            <ModalForm titleForm='формы "Трафик сайта"' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupportModal
