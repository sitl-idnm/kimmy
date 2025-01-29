import { FC } from 'react'
import classNames from 'classnames'

import styles from './caseItem.module.scss'
import { CaseItemProps } from './caseItem.types'
import Image from 'next/image'
import { Button } from '@/ui'

const CaseItem: FC<CaseItemProps> = ({
  className,
  title,
  text,
  imageSrc,
  isCasePage
}) => {
  const rootClassName = classNames(styles.root, className)

  return (
    <div className={isCasePage ? styles.content : rootClassName}>
      <div className={styles.top}>
        {
          !isCasePage &&
          <div className={styles.top__code}>
            <p>no&nbsp;code</p>
          </div>
        }

        <div className={styles.image}>
          <Image
            src={imageSrc}
            alt="case"
            width={isCasePage ? 640 : 591}
            height={509}
          />
        </div>
      </div>
      <div className={styles.bottom}>
        <h3 className={styles.bottom__title}>{title}</h3>
        <p className={styles.bottom__description}>{text}</p>
        {
          !isCasePage &&
          <Button className={styles.bottom__button}>
            Читать кейс
          </Button>
        }
      </div>
    </div>
  )
}

export default CaseItem
