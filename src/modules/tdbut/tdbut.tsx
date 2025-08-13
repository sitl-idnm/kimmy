import { FC } from 'react'
import classNames from 'classnames'

import styles from './tdbut.module.scss'
import { TdbutProps } from './tdbut.types'
import { Button } from '@/ui'

const Tdbut: FC<TdbutProps> = ({
  className,
  title,
  tagText,
  description,
  subDescription,
  buttonText,
  buttonHref,
  buttonMaxWidth
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {tagText && <div className={styles.tag}>{tagText}</div>}
      {description && <p className={styles.description}>{description}</p>}
      {subDescription && <p className={styles.subDescription}>{subDescription}</p>}
      {buttonText && (
        <Button
          className={styles.button}
          tag={buttonHref ? 'a' : 'button'}
          href={buttonHref}
          maxWidth={buttonMaxWidth}
        >
          {buttonText}
        </Button>
      )}
    </div>
  )
}

export default Tdbut
