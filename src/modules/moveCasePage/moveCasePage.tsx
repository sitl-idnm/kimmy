import { FC } from 'react'
import classNames from 'classnames'

import styles from './moveCasePage.module.scss'
import { MoveCasePageProps } from './moveCasePage.types'

const MoveCasePage: FC<MoveCasePageProps> = ({
  className,
  firstAnchor,
  secondAnchor,
  thirdAnchor
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <h2 className={styles.root__title}>Содержание</h2>
      <div className={styles.content}>
        <div className={styles.content__item}>
          <a href={'#first'}>{firstAnchor}</a>
        </div>
        <div className={styles.content__item}>
          <a href={'#second'}>{secondAnchor}</a>
        </div>
        <div className={styles.content__item}>
          <a href={'#third'}>{thirdAnchor}</a>
        </div>
      </div>
    </div>
  )
}

export default MoveCasePage
