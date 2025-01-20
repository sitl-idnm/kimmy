'use client'
import { FC, useEffect } from 'react'

import styles from './modalWindow.module.scss'
import { ModalWindowProps } from './modalWindow.types'
import { useAtom } from 'jotai'
import { openModal, openModalContent } from '@/shared/atoms/openModal'

const ModalWindow: FC<ModalWindowProps> = ({  }) => {
  const [openWindow, setOpenWindow] = useAtom(openModal)
  const [openWindowContent, ] = useAtom(openModalContent)

  useEffect(() => {
    if (openWindow) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [openWindow])

  return (
    <>
      {openWindow && (
        <div className={styles.modal} onClick={() => setOpenWindow(false)}>
          <div className={styles.modal__content}>
            {openWindowContent}
            <div className={styles.close} onClick={() => setOpenWindow(false)}></div>
          </div>
        </div>
      )}
    </>
  )
}

export default ModalWindow
