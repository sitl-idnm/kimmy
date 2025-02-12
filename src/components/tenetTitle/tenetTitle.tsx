import { FC, useCallback } from 'react'
import classNames from 'classnames'
import styles from './tenetTitle.module.scss'
import { TenetTitleProps } from './tenetTitle.types'
import { Button } from '@/ui'
import { useSetAtom } from 'jotai/react'
import { openModalContent } from '@/shared/atoms/openModal'

const TenetTitle: FC<TenetTitleProps> = ({
  className,
  title,
  span,
  end
}) => {
  const rootClassName = classNames(styles.root, className)
  const setModalContent = useSetAtom(openModalContent)

  const openWindows = useCallback((name: string) => {
    setModalContent(name)
  }, [setModalContent])

  return (
    <div className={rootClassName}>
      <h2>{title} {span} {end}</h2>
      <Button
        className={styles.button}
        as="a"
        onClick={() => openWindows('детали')}
      >
        Заказать сайт
      </Button>
    </div>
  )
}

export default TenetTitle
