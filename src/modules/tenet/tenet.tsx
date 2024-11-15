'use client'
import { FC, useRef } from 'react'
import classNames from 'classnames'

import styles from './tenet.module.scss'
import { TenetProps } from './tenet.types'
import { TenetAbout, TenetTitle } from '@/components'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const TenetData = [
  { title: 'Помогаем составить техническое задание, ', text: 'если оно не сформулировано в деталях', heightContent: '230px', widthContent: '530px', bgColor: '#F7F7F751', heightContentAdaptive: '230px', widthContentAdaptive: '460px', widthContentMobile: '336px', heightContentMobile: '180px' },
  { title: 'Всегда проговариваем как мы поняли задачу, ', text: 'чтобы предотвратить возможные недопонимания и сразу двигаться в нужном направлении', heightContent: '340px', widthContent: '305px', bgColor: '#F7F7F751', heightContentAdaptive: '285px', widthContentAdaptive: '265px', widthContentMobile: '264px', heightContentMobile: '276px' },
  { title: 'Фиксируем стоимость и сроки разработки ', text: 'в договоре и придерживаемся их', heightContent: '340px', widthContent: '305px', bgColor: '#F7F7F751', heightContentAdaptive: '285px', widthContentAdaptive: '265px', widthContentMobile: '264px', heightContentMobile: '276px' },
  { title: 'Предлагаем решения, ', text: 'а не требуем их от вас', heightContent: '230px', widthContent: '305px', bgColor: '#E7E8EC51', heightContentAdaptive: '285px', widthContentAdaptive: '265px', widthContentMobile: '264px', heightContentMobile: '276px' },
  { title: 'Отчитываемся на каждом этапе ', text: 'от проведения исследований до запуска и поддержки сайта', heightContent: '340px', widthContent: '530px', bgColor: '#E7E8EC51', heightContentAdaptive: '230px', widthContentAdaptive: '460px', widthContentMobile: '336px', heightContentMobile: '180px' },
  { title: 'Не отвлекаем по пустякам, ', text: 'а согласовываем крупные этапы', heightContent: '340px', widthContent: '305px', bgColor: '#F7F7F751', heightContentAdaptive: '285px', widthContentAdaptive: '265px', heightContentMobile: '276px' },
  { title: 'Всегда остаемся на связи:  ', text: 'отвечаем в рабочее время в течение 15 минут', heightContent: '340px', widthContent: '305px', bgColor: '#E7E8EC51', heightContentAdaptive: '285px', widthContentAdaptive: '265px', heightContentMobile: '276px' },
  { title: 'Помогаем в защите проекта перед ЛПР', text: '', heightContent: '340px', widthContent: '305px', bgColor: '#F7F7F751', heightContentAdaptive: '285px', widthContentAdaptive: '265px', heightContentMobile: '276px' }
]

const Tenet: FC<TenetProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  const nameTitle = useRef(null)
  const containerTitle = useRef(null)

  useGSAP(() => {
    const title = nameTitle.current
    const container = containerTitle.current
    
    if (window.innerWidth > 768) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: title,
          start: 'top 30%',
          pin: true,
          scrub: 2,
          endTrigger: container,
          end: 'bottom 60%'
        }
      })
      tl.fromTo(title, {
        opacity: 0
      }, {
        opacity: 1
      })
    }
  })

  return (
    <div className={rootClassName} ref={containerTitle}>
      <div className={styles.cont__title} ref={nameTitle}>
        <TenetTitle
          span={<span className={styles.span}>эффективному</span>}
          end={'взаимодействию'}
          title={'Через жесткие принципы к '}
        />
      </div>
      <div>
        {TenetData.map((item, index) => (
          <TenetAbout
            key={index}
            title={item.title}
            text={item.text}
            heightContentDesktop={item.heightContent}
            widthContentDesktop={item.widthContent}
            bgColor={item.bgColor}
            heightContentAdaptive={item.heightContentAdaptive}
            widthContentAdaptive={item.widthContentAdaptive}
            heightContentMobile={item.heightContentMobile}
            widthContentMobile={item.widthContentMobile}
          />
        ))}
      </div>
    </div>
  )
}

export default Tenet
