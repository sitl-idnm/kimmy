'use client'

import { FC, useRef } from 'react'
import classNames from 'classnames'
import gsap from 'gsap'

import styles from './case.module.scss'
import { CaseProps } from './case.types'
import { CaseItem } from '@/components'
import { useGSAP } from '@gsap/react'

const itemsData = [
  { title: 'Магия вкуса', text: 'Многостраничный сайт для сервиса по работе с клиентскими данными' },
  { title: 'Магия вкуса', text: 'Многостраничный сайт для сервиса по работе с клиентскими данными' },
  { title: 'Магия вкуса', text: 'Многостраничный сайт для сервиса по работе с клиентскими данными' },
  { title: 'Магия вкуса', text: 'Многостраничный сайт для сервиса по работе с клиентскими данными' },
]

const Case: FC<CaseProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)
  const casesRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (window.innerWidth > 1200) {
      gsap.to(casesRef.current, {
        x: () => -(casesRef.current!.scrollWidth - casesRef.current!.clientWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: () => `+=${casesRef.current!.scrollWidth}`,
          scrub: 1,
          pin: containerRef.current,
        },
      })
    }
  }, [])

  return (
    <div className={rootClassName} ref={containerRef}>
      <h2 className={styles.root__title}>Уже реализовали</h2>
      <div className={styles.root__cases} ref={casesRef}>
        {itemsData.map((item, index) => (
          <CaseItem
            key={index}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </div>
  )
}

export default Case
