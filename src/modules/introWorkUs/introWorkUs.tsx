import { FC } from 'react'
import classNames from 'classnames'

import styles from './introWorkUs.module.scss'
import { IntroWorkUsProps } from './introWorkUs.types'
import Image from 'next/image'
import abstrct from '@public/images/abstract1_work.png'
import abstrct2 from '@public/images/abstract2_work.png'
import { Borders } from '@/ui'
import howImage from '@public/images/howWorkUs.png'

const IntroWorkUs: FC<IntroWorkUsProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <div className={styles.box}>
        <Borders cornersWithCrosses={['topLeft', 'bottomRight', 'topRight', 'bottomLeft']} />
        <h1 className={styles.box__title}>
          Работа в K.KIM agency
        </h1>
        <p className={styles.box__text}>
          Создаём сайты, которые не просто существуют, а <span className={styles.box__text__white}>конвертируют</span>
        </p>
        <Image
          src={abstrct}
          alt='abstrct'
        />
      </div>
      <div className={styles.white}>
        <h2 className={styles.white__title}>
          Каждый проект – вызов, требующий свежих идей и быстрого роста.
        </h2>
        <p className={styles.white__text}>
          Если ты хочешь развиваться в IT и digital, у тебя есть возможность стать частью команды, которая делает смысл основой успеха.
        </p>
        <p className={styles.white__text}>
          У нас ты будешь работать над значимыми проектами, принимать решения и развиваться.
        </p>
        <Image
          src={abstrct2}
          alt='abstrct2'
          className={styles.abst}
        />
      </div>
      <div>
        <p>
          Погружаемся в проект, исследуем нишу, анализируем конкурентов и создаём сильные офферы.
        </p>
        <div>
          <Image
            src={howImage}
            alt='how?'
          />
        </div>
      </div>
    </div>
  )
}

export default IntroWorkUs
