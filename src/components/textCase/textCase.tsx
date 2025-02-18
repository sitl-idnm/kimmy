import { FC } from 'react'
import classNames from 'classnames'

import styles from './textCase.module.scss'
import { TextCaseProps } from './textCase.types'
import Image from 'next/image'

const TextCase: FC<TextCaseProps> = ({
  className,
  title,
  subTitle,
  text,
  image,
  id
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName} id={id}>
      <div className={styles.text}>
        <h2>{title}</h2>
        {subTitle && <h3>{subTitle}</h3>}
        <p>{text}</p>
      </div>
      <div>
        { image !== '' &&
          <Image
            src={image}
            alt={title}
            quality={100}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }} // optional
          />
        }
      </div>
    </div>
  )
}

export default TextCase
