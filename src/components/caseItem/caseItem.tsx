import { FC } from 'react'
import classNames from 'classnames'

import styles from './caseItem.module.scss'
import { CaseItemProps } from './caseItem.types'
import Image from 'next/image'

const CaseItem: FC<CaseItemProps> = ({
  className,
  title,
  text
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={rootClassName}>
      <div className={styles.top}>
        <div className={styles.top__code}><p>no&nbsp;code</p></div>
        <div className={styles.image}>
          <Image
            src="/images/tablet__magic.png"
            alt="case"
            width={591}
            height={509}
          />
        </div>
      </div>
      <div className={styles.bottom}>
        <h3 className={styles.bottom__title}>{title}</h3>
        <p className={styles.bottom__description}>{text}</p>
      </div>
    </div>
  )
}

export default CaseItem
