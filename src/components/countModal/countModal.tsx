import { FC } from 'react'
import classNames from 'classnames'

import styles from './countModal.module.scss'
import { CountModalProps } from './countModal.types'
import { useAtom } from 'jotai'
import { openModal } from '@/shared/atoms/openModal'
import { ModalForm } from '../modalForm'

const CountModal: FC<CountModalProps> = ({
  className
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const rootClassName = classNames(styles.root, className)
  const [openWindow, setOpenWindow] = useAtom(openModal)

  if (openWindow) {
    document.body.style.overflow = 'hidden'
  }

  function closeModal() {
    document.body.style.overflow = 'visible'
    setOpenWindow(false)
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
            <ModalForm count />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountModal
