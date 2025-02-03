import { FC } from 'react'
import classNames from 'classnames'

import styles from './tenetTitle.module.scss'
import { TenetTitleProps } from './tenetTitle.types'
import { Button } from '@/ui'
import { openModal, openModalContent } from '@/shared/atoms/openModal'
import { useAtom } from 'jotai'

const TenetTitle: FC<TenetTitleProps> = ({
  className,
  title,
  span,
  end
}) => {
  const rootClassName = classNames(styles.root, className)

  const [, setOpenWindowContent] = useAtom(openModalContent)
  const [, setOpenWindow] = useAtom(openModal)

  const openWindows = (name: string) => {
    setOpenWindowContent(name)
    setOpenWindow(true)
  }

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
