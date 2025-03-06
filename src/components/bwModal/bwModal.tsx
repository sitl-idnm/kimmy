import { FC } from 'react'
import classNames from 'classnames'

import styles from './bwModal.module.scss'
import { BwModalProps } from './bwModal.types'
import Image from 'next/image'
import { useSetAtom } from 'jotai'
import { openModalContent } from '@/shared/atoms/openModal'

const BwModal: FC<BwModalProps> = ({
  className
}) => {
  const setModalContent = useSetAtom(openModalContent)

  const closeModal = () => {
    setModalContent('')
  }

  return (
    <div className={styles.modal} onClick={(e) => {
      if (e.target === e.currentTarget) {
        closeModal()
      }
    }}>
      <div className={styles.modal__content} onClick={(e) => e.stopPropagation()}>
        <div className={styles.close} onClick={closeModal}></div>
        <div className={styles.content}>
          <div>
            <Image
              src={'/images/cases/bestwave/bwModal.png'}
              alt='bwModal'
              quality={100}
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                maxWidth: '100%'
              }}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BwModal
