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
        value={'Заказать сайт'}
      />
    </div>
  )
}

export default TenetTitle
