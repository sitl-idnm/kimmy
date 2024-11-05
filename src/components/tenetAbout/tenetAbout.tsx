import { FC } from 'react'
import classNames from 'classnames'

import styles from './tenetAbout.module.scss'
import { TenetAboutProps } from './tenetAbout.types'

const arrayPercent = ['10%', '30%', '55%', '60%', '70%']

const TenetAbout: FC<TenetAboutProps> = ({
  className,
  title,
  text,
  heightContent,
  widthContent,
  bgColor
}) => {
  const rootClassName = classNames(styles.root, className)

  function getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // Максимум и минимум включаются
  }

  return (
    <div className={rootClassName} style={{height: heightContent, width: widthContent, background: bgColor, left: arrayPercent[getRandomIntInclusive(0, 4)]}}>
      <h3>
        {title}
      </h3>
      <p>
        {text}
      </p>
    </div>
  )
}

export default TenetAbout
