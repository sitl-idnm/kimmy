import { FC } from 'react'
import classNames from 'classnames'

import styles from './textForm.module.scss'
import { TextFormProps } from './textForm.types'

const TextForm: FC<TextFormProps> = ({
  className,
  title,
  paragraph
}) => {
  const rootClassName = classNames(styles.root, styles.text, className)

  return (
    <div className={rootClassName}>
      <h2 className={styles.text__title}>{title}</h2>
      <p className={styles.text__paragraph}>{paragraph}</p>
    </div>
  )
}

export default TextForm
