/* eslint-disable no-irregular-whitespace */
import { FC } from 'react'
import classNames from 'classnames'

import styles from './conversionTitle.module.scss'
import { ConversionTitleProps } from './conversionTitle.types'
import Icon from '@icons/title__background.svg'

const ConversionTitle: FC<ConversionTitleProps> = ({
  className
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <div className={styles.root__img}>
        <Icon />
      </div>
      <h2 className={styles.root__title}>Через погружение в проект
        <span className={styles.center}>к сильным офферам</span>
        <span className={styles.bottom}>и высокой конверсии</span>
      </h2>
    </div>
  )
}

export default ConversionTitle
