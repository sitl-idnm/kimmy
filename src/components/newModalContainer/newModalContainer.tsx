'use client'

import { FC } from 'react'
import { useAtom } from 'jotai'
import { openModalContent } from '@/shared/atoms/openModal'
import NewModal from '../newModal/newModal'
import { ModalForm } from '../modalForm'
import styles from './newModalContainer.module.scss'

const NewModalContainer: FC = () => {
  const [modalContent, setModalContent] = useAtom(openModalContent)

  const handleClose = () => {
    setModalContent('')
  }

  return (
    <>
      <NewModal
        isOpen={modalContent === 'исследования'}
        onClose={handleClose}
        className={styles.marketingModal}
      >
        <ModalForm />
      </NewModal>

      <NewModal
        isOpen={modalContent === 'дизайн'}
        onClose={handleClose}
        className={styles.designModal}
      >
        <ModalForm />
      </NewModal>

      <NewModal
        isOpen={modalContent === 'разработка'}
        onClose={handleClose}
        className={styles.developModal}
      >
        <ModalForm />
      </NewModal>

      <NewModal
        isOpen={modalContent === 'поддержка'}
        onClose={handleClose}
        className={styles.supportModal}
      >
        <ModalForm />
      </NewModal>

      <NewModal
        isOpen={modalContent === 'детали'}
        onClose={handleClose}
        className={styles.detailsModal}
      >
        <ModalForm />
      </NewModal>

      <NewModal
        isOpen={modalContent === 'стоимость'}
        onClose={handleClose}
        className={styles.countModal}
      >
        <ModalForm />
      </NewModal>
    </>
  )
}

export default NewModalContainer
