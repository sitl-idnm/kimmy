/* eslint-disable no-empty-pattern */
'use client'
import { FC } from 'react'

import styles from './detailsModal.module.scss'
import { DetailsModalProps } from './detailsModal.types'
import { ModalForm } from '../modalForm'
import { useAtom } from 'jotai'
import { openModal } from '@/shared/atoms/openModal'

const DetailsModal: FC<DetailsModalProps> = ({}) => {
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
            <ModalForm details />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsModal
