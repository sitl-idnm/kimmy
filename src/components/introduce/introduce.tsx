'use client'
import { FC, useCallback } from 'react'
import classNames from 'classnames'

import styles from './introduce.module.scss'
import { IntroduceProps } from './introduce.types'
import { Button } from '@/ui'
import { TypingSpan } from '../typingSpan'
import { useSetAtom } from 'jotai/react'
import { openModalContent } from '@/shared/atoms/openModal'

const Introduce: FC<IntroduceProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)
  const wordsArray = ['Смыслы', 'Товары', 'Идеи', 'Услуги'];
  const setModalContent = useSetAtom(openModalContent)

  const openWindows = useCallback((name: string) => {
    setModalContent(name)
  }, [setModalContent])

  return (
    <div className={rootClassName}>
      <div className={styles.introduce}>
        <h2 className={styles.introduce__title}>Разрабатываем сайты, которые продают <TypingSpan words={wordsArray} interval={1500} /></h2>
        <Button
          onClick={() => openWindows('детали')}
          tag='button'
          maxWidth='192px'
        >
          Заказать сайт
        </Button>
      </div>
    </div>
  )
}

export default Introduce
