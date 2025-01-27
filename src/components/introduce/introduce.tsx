import { FC } from 'react'
import classNames from 'classnames'

import styles from './introduce.module.scss'
import { IntroduceProps } from './introduce.types'
import { Button } from '@/ui'
import { TypingSpan } from '../typingSpan'

const Introduce: FC<IntroduceProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)
  const wordsArray = ['Смыслы', 'Товары', 'Идеи', 'Услуги'];

  return (
    <div className={rootClassName}>
      <div className={styles.introduce}>
        <h2 className={styles.introduce__title}>Разрабатываем сайты, которые продают <TypingSpan words={wordsArray} interval={1500} /></h2>
        <Button
          as="a"
          href="#form"
          isRouteLink
        >
          Заказать сайт
        </Button>
      </div>
    </div>
  )
}

export default Introduce
