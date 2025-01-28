import { FC } from 'react'
import classNames from 'classnames'

import styles from './tenetTitle.module.scss'
import { TenetTitleProps } from './tenetTitle.types'
import { Button } from '@/ui'

const TenetTitle: FC<TenetTitleProps> = ({
  className,
  title,
  span,
  end
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <h2>{title} {span} {end}</h2>
      <Button
        className={styles.button}
        as="a"
        href="#form"
      >
        Заказать сайт
      </Button>
    </div>
  )
}

export default TenetTitle
