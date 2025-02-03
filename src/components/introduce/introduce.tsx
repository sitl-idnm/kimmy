'use client'
import { FC } from 'react'
import classNames from 'classnames'

import styles from './introduce.module.scss'
import { IntroduceProps } from './introduce.types'
import { Button } from '@/ui'
import { TypingSpan } from '../typingSpan'
import { useAtom } from 'jotai'
import { openModal, openModalContent } from '@/shared/atoms/openModal'

const Introduce: FC<IntroduceProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)
  const wordsArray = ['Смыслы', 'Товары', 'Идеи', 'Услуги'];
  const [, setOpenWindowContent] = useAtom(openModalContent)
  const [, setOpenWindow] = useAtom(openModal)

  const openWindows = (name: string) => {
    setOpenWindowContent(name)
    setOpenWindow(true)
  }

  return (
    <div className={rootClassName}>
      <div className={styles.introduce}>
        <h2 className={styles.introduce__title}>Разрабатываем сайты, которые продают <TypingSpan words={wordsArray} interval={1500} /></h2>
        <Button
          onClick={() => openWindows('детали')}
          as='a'
        >
          Заказать сайт
        </Button>
      </div>
    </div>
  )
}

export default Introduce
