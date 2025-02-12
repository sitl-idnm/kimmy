import { FC, useCallback } from 'react'
import classNames from 'classnames'
import styles from './tenetTitle.module.scss'
import { TenetTitleProps } from './tenetTitle.types'
import { Button } from '@/ui'
import { useSetAtom } from 'jotai/react'
import { openModalContent } from '@/shared/atoms/openModal'

const TenetTitle: FC<TenetTitleProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)
  const setModalContent = useSetAtom(openModalContent)

  const openWindows = useCallback((name: string) => {
    setModalContent(name)
  }, [setModalContent])

  return (
    <div className={rootClassName}>
      <div className={styles.tenet}>
        <div className={styles.tenet__content}>
          <h2 className={styles.tenet__title}>Принципы работы</h2>
          <p className={styles.tenet__text}>
            Мы не просто создаем сайты, а помогаем бизнесу расти и развиваться. Для этого мы разработали систему принципов, которые помогают нам делать это эффективно.
          </p>
          <Button
            className={styles.tenet__button}
            onClick={() => openWindows('детали')}
          >
            Заказать сайт
          </Button>
        </div>
      </div>
    </div>
  )
}

export default TenetTitle
