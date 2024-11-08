'use client'

import { FC, useRef } from 'react'
import classNames from 'classnames'

import styles from './conversion.module.scss'
import { ConversionProps } from './conversion.types'
import { ConversionTitle, ConversionType } from '@/components'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

const ConversionData = [
  { title: 'исследования', name1: 'Погружаемся в проект', name2: 'Изучаем нишу', name3: 'Анализируем конкурентов', name4: 'Исследуем потребности аудитории', boxTitle: 'Формируем смыслы', boxTextFirst: 'Показываем аудитории выгоды продукта, отстраиваемся от конкурентов и берем на вооружение удачные практики из ниши.', boxTextSecond: 'Получаем смысловой фундамент, который позволит посетителю с 3 секунд на сайте понять «Это то, что мне нужно» и продолжить изучение.', backgroundBox: 'var(--color-grey)', colorText: 'black' },
  { title: 'дизайн', name1: 'Формируем логическую структуру сайта и страниц', name2: 'Пишем тексты', name3: 'Создаем дизайн', boxTitle: 'Оформляем и транслируем смыслы', boxTextFirst: 'Через тексты и дизайн демонстрируем посетителю, что с помощью продукта он решит свои задачи и приблизится к жизни мечты, актуализируем потребности, усиливаем желание.', boxTestSecond: 'Получаем оформленные смыслы, которые побуждают оставить заявку.', backgroundBox: 'var(--color-black)', colorText: 'white' },
  { title: 'разработка', name1: 'Верстаем', name2: 'Интегрируем CRM, оплату, аналитику', name3: 'Тестируем и запускаем', boxTitle: 'Превращаем дизайн в рабочий инструмент', boxTextFirst: 'Преобразуем макеты в функциональный и адаптивный сайт. Каждый элемент дизайна точно воспроизводится на разных устройствах и экранах, чтобы пользовательский опыт оставался комфортным и интуитивно понятным.', boxTextSecond: 'Получаем готовый к работе сайт, который не только красиво выглядит, но и эффективно функционирует.', backgroundBox: 'var(--color-red-accent)', colorText: 'white', bool: true },
  { title: 'поддержка',  name1: 'Учим работе с сайтом', name2: 'Анализируем эффективность и внедряем улучшения', name3: 'Поддерживаем работу и актуальность сайта', name4: 'Запускаем трафик: контекст, таргет, SEO', new: 'Мы не оставляем вас один на один с новым сайтом после запуска, а помогаем анализировать результаты и совершенствовать его.' }
]

const Conversion: FC<ConversionProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  const extraL = useRef(null)
  const mainContainer = useRef(null)

  useGSAP(() => {
    const extraLong = extraL.current
    const mainCont = mainContainer.current


    gsap.to(extraLong, {
      xPercent: -100,
      x: () => window.innerWidth,
      ease: "none",
      scrollTrigger: {
        trigger: mainCont,
        start: 'top 5%',
        pin: mainCont,
        scrub: 1,
        end: () => `+=${ extraLong.offsetWidth} bottom`,
      }
    })
  })

  return (
    <div className={rootClassName}>
      <ConversionTitle />
      <div ref={mainContainer}>
        <div className={styles.conversion} ref={extraL}>
          {ConversionData.map((item, index) => (
            <ConversionType
              key={index}
              title={item.title}
              name1={item.name1}
              name2={item.name2}
              name3={item.name3}
              name4={item.name4}
              boxTitle={item.boxTitle}
              boxTextFirst={item.boxTextFirst}
              boxTextSecond={item.boxTextSecond}
              backgroundBox={item.backgroundBox}
              colorText={item.colorText}
              bool={item.bool}
              new1={item.new}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Conversion
