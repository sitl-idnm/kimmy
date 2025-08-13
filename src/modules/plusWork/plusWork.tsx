'use client'
import { FC, useRef } from 'react'
import classNames from 'classnames'

import styles from './plusWork.module.scss'
import { PlusWorkProps } from './plusWork.types'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const PlusWork: FC<PlusWorkProps> = ({ className, items }) => {
  const rootClassName = classNames(styles.root, className)

  const secondRef = useRef<HTMLDivElement>(null)
  const thirdRef = useRef<HTMLDivElement>(null)
  const fourthRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const fiveRef = useRef<HTMLDivElement>(null)
  const sixRef = useRef<HTMLDivElement>(null)

  const defaultItems = [
    {
      title: 'Быстрый старт и высокая скорость роста',
      number: 1,
      text:
        'Стажерам и новым сотрудникам сразу даем работать над реальными проектами, потому что знаем, практика под чутким руководством наставника дает гораздо больше, чем долгое погружение в корпоративную культуру и стандарты.'
    },
    {
      title: 'Свобода предлагать свои решения',
      number: 2,
      text:
        'Мы даем возможность предлагать идеи и решения, которые могут изменить ход проекта. Ты будешь видеть, как твои предложения воплощаются в жизнь и приносят реальные результаты.'
    },
    {
      title: 'Работа с сайтами с высокой конверсией',
      number: 3,
      text:
        'Ты будешь участвовать в создании сайтов с конверсией от 2% до 12% и научишься формировать офферы, которые реально привлекают клиентов. Эти навыки всегда востребованы на рынке.'
    },
    {
      title: 'Комфортный онбординг',
      number: 4,
      text:
        'Да, стандарты и регламенты тоже будут, но только по делу, чтобы быстро понять что к чему и начать работу.'
    },
    {
      title: 'Обучение и работа под руководством наставника',
      number: 5,
      text:
        'Новых сотрудников мы сопровождаем на каждом этапе, чтобы ты мог быстро учиться и улучшать свои навыки. Наставник поможет разобраться в деталях и сразу применить знания на практике.'
    },
    {
      title: 'Дружелюбный коллектив',
      number: 6,
      text:
        'Мы верим в силу команды — здесь всегда поддержат, подскажут и помогут. Регулярные онлайн и офлайн корпоративы дают возможность наладить отношения с коллегами и повеселиться вне работы.'
    }
  ]

  const mergedItems = defaultItems.map((defaultItem, index) => ({
    ...defaultItem,
    ...(items?.[index] || {})
  }))

  useGSAP(() => {
    if (window.innerWidth > 1200) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top 10%',
          scrub: true,
        }
      })

      tl.to(secondRef.current, {
        y: 389,
        ease: 'power1.out'
      })

      tl.to([thirdRef.current, fourthRef.current, fiveRef.current, sixRef.current], {
        y: 389,
        ease: 'power1.out'
      })
    }
  })

  return (
    <div className={rootClassName}>
      <div className={styles.firstline} ref={triggerRef}>
        <div className={styles.box} ref={fiveRef}>
          <h3 className={styles.title}>{mergedItems[0].title}</h3>
          <div className={styles.text}>
            <p>
              <span className={styles.number}>{mergedItems[0].number}</span>
              {mergedItems[0].text}
            </p>
          </div>
        </div>
        <div className={styles.box} ref={secondRef}>
          <h3 className={styles.title}>{mergedItems[1].title}</h3>
          <div className={styles.text}>
            <p>
              <span className={styles.number}>{mergedItems[1].number}</span>
              {mergedItems[1].text}
            </p>
          </div>
        </div>
        <div className={styles.box} ref={sixRef}>
          <h3 className={styles.title}>{mergedItems[2].title}</h3>
          <div className={styles.text}>
            <p>
              <span className={styles.number}>{mergedItems[2].number}</span>
              {mergedItems[2].text}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.secondline}>
        <div className={styles.box} ref={thirdRef}>
          <h3 className={styles.title}>{mergedItems[3].title}</h3>
          <div className={styles.text}>
            <p>
              <span className={styles.number}>{mergedItems[3].number}</span>
              {mergedItems[3].text}
            </p>
          </div>
        </div>
        <div className={styles.box}>
        </div>
        <div className={styles.box} ref={fourthRef}>
          <h3 className={styles.title}>{mergedItems[4].title}</h3>
          <div className={styles.text}>
            <p>
              <span className={styles.number}>{mergedItems[4].number}</span>
              {mergedItems[4].text}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.thirdline}>
        <div className={styles.box}>
        </div>
        <div className={styles.box}>
          <h3 className={styles.title}>{mergedItems[5].title}</h3>
          <div className={styles.text}>
            <p>
              <span className={styles.number}>{mergedItems[5].number}</span>
              {mergedItems[5].text}
            </p>
          </div>
        </div>
        <div className={styles.box}>
        </div>
      </div>
    </div>
  )
}

export default PlusWork
