/* eslint-disable no-empty-pattern */
'use client'
import { FC } from 'react'
import styles from './detailsModal.module.scss'
import { DetailsModalProps } from './detailsModal.types'
import { ModalForm } from '../modalForm'
import { useSetAtom } from 'jotai/react'
import { openModalContent } from '@/shared/atoms/openModal'

const DetailsModal: FC<DetailsModalProps> = ({}) => {
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
            <ModalForm details titleForm='формы "Заказать сайт"' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsModal
