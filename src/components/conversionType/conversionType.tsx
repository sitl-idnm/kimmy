/* eslint-disable no-irregular-whitespace */
'use client'

import { FC, useRef } from 'react'
import classNames from 'classnames'
import styles from './conversionType.module.scss'
import { ConversionTypeProps } from './conversionType.types'
import Icon from '@icons/snowflacke.svg'
import Timeline from '@icons/timeline.svg'
import Accept from '@icons/accept.svg'
import { Button } from '@/ui'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ConversionType: FC<ConversionTypeProps> = ({
  className,
  title,
  name1,
  name2,
  name3,
  name4,
  boxTitle,
  boxTextFirst,
  boxTextSecond,
  backgroundBox,
  colorText,
  bool,
  new1
}) => {
  const rootClassName = classNames(styles.root, className)

  const section = useRef(null)
  const time = useRef(null)

  useGSAP(() => {
    const sect = section.current
    const timeline = time.current

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sect,
        start: 'top top',
        scrub: 1,
        markers: true,
        end: () => `+=${ sect.offsetWidth} right`,
      }
    })

    tl.fromTo(timeline, {
      width: '0%'
    }, {
      width: '100%'
    })

  })

  if (new1 === undefined) {
    if (bool == true) {
      if (name4 === undefined) {
        return (
          <div className={rootClassName}>
            <div className={styles.section} ref={section}>
              <div className={styles.container__title}>
                <div className={styles.snowflacke}>
                  <Icon />
                </div>
                <h4 className={styles.title}>{title}</h4>
                <div className={styles.timeline} ref={time}>
                  <Timeline />
                </div>
              </div>
              <div className={`${styles.first__fact} ${styles.fact}`}>{name1}</div>
              <div className={`${styles.second__fact} ${styles.fact}`}>{name2}</div>
              <div className={`${styles.third__fact} ${styles.fact}`}>{name3}</div>
              <div className={styles.box} style={{background: backgroundBox, color: colorText}}>
                <h4 className={styles.box__title}>
                  {boxTitle}
                </h4>
                <div className={styles.box__content}>
                  <p className={styles.text}>
                    { boxTextFirst }
                  </p>
                  <p className={styles.text}>
                    { boxTextSecond }
                  </p>
                </div>
              </div>
              <div className={styles.conv}>
                <div className={styles.conv__svg}>
                  <Accept />
                </div>
                <div className={styles.conv__title}>
                  <h2>Конверсионный сайт с сильными&nbsp;офферами,<br/>
                  <span className={styles.grey}>основанными на смыслах</span></h2>
                </div>
              </div>
            </div>
          </div>
        )
      } else {
        return (
          <div className={rootClassName}>
            <div className={styles.section} ref={section}>
              <div className={styles.container__title}>
                <div className={styles.snowflacke}>
                  <Icon />
                </div>
                <h4 className={styles.title}>{title}</h4>
                <div className={styles.timeline}>
                  <Timeline />
                </div>
              </div>
              <div className={`${styles.first__fact} ${styles.fact}`}>{name1}</div>
              <div className={`${styles.second__fact} ${styles.fact}`}>{name2}</div>
              <div className={`${styles.third__fact} ${styles.fact}`}>{name3}</div>
              <div className={`${styles.fourth__fact} ${styles.fact}`}>{name4}</div>
              <div className={styles.box} style={{background: backgroundBox, color: colorText}}>
                <h4 className={styles.box__title}>
                  {boxTitle}
                </h4>
                <div className={styles.box__content}>
                  <p className={styles.text}>
                    { boxTextFirst }
                  </p>
                  <p className={styles.text}>
                    { boxTextSecond }
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      }
    } else {
      if (name4 === undefined) {
        return (
          <div className={rootClassName}>
            <div className={styles.section} ref={section}>
              <div className={styles.container__title}>
                <div className={styles.snowflacke}>
                  <Icon />
                </div>
                <h4 className={styles.title}>{title}</h4>
                <div className={styles.timeline}>
                  <Timeline />
                </div>
              </div>
              <div className={`${styles.first__fact} ${styles.fact}`}>{name1}</div>
              <div className={`${styles.second__fact} ${styles.fact}`}>{name2}</div>
              <div className={`${styles.third__fact} ${styles.fact}`}>{name3}</div>
              <div className={styles.box} style={{background: backgroundBox, color: colorText}}>
                <h4 className={styles.box__title}>
                  {boxTitle}
                </h4>
                <div className={styles.box__content}>
                  <p className={styles.text}>
                    { boxTextFirst }
                  </p>
                  <p className={styles.text}>
                    { boxTextSecond }
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      } else {
        return (
          <div className={rootClassName}>
            <div className={styles.section} ref={section}>
              <div className={styles.container__title}>
                <div className={styles.snowflacke}>
                  <Icon />
                </div>
                <h4 className={styles.title}>{title}</h4>
                <div className={styles.timeline}>
                  <Timeline />
                </div>
              </div>
              <div className={`${styles.first__fact} ${styles.fact}`}>{name1}</div>
              <div className={`${styles.second__fact} ${styles.fact}`}>{name2}</div>
              <div className={`${styles.third__fact} ${styles.fact}`}>{name3}</div>
              <div className={`${styles.fourth__fact} ${styles.fact}`}>{name4}</div>
              <div className={styles.box} style={{background: backgroundBox, color: colorText}}>
                <h4 className={styles.box__title}>
                  {boxTitle}
                </h4>
                <div className={styles.box__content}>
                  <p className={styles.text}>
                    { boxTextFirst }
                  </p>
                  <p className={styles.text}>
                    { boxTextSecond }
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      }
    }
  } else {
    return (
      <div className={rootClassName}>
        <div className={styles.section} ref={section}>
          <div className={styles.container__title}>
            <div className={styles.snowflacke}>
              <Icon />
            </div>
            <h4 className={styles.title}>{title}</h4>
            <div className={styles.timeline}>
              <Timeline />
            </div>
          </div>
          <div className={`${styles.first__fact} ${styles.fact}`}>{name1}</div>
          <div className={`${styles.second__fact} ${styles.fact}`}>{name2}</div>
          <div className={`${styles.third__fact} ${styles.fact}`}>{name3}</div>
          <div className={`${styles.fourth__fact} ${styles.fact}`}>{name4}</div>
          <div className={styles.new__container}>
            <p className={styles.container__content}>
              { new1 }
            </p>
          </div>
          <div className={styles.conv1}>
            <div className={styles.conv1__title}>
              <h2><span className={styles.grey}>Актуальный сайт</span><br/>на протяжении всего времени использования</h2>
            </div>
            <div>
              <Button value={'Заказать сайт'} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ConversionType
