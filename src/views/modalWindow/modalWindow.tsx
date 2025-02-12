/* eslint-disable no-empty-pattern */
'use client'
import { FC, useEffect } from 'react'
import { ModalWindowProps } from './modalWindow.types'
import { useAtomValue } from 'jotai/react'
import { openModalContent } from '@/shared/atoms/openModal'
import { CountModal, DesignModal, DetailsModal, DevelopModal, MarketingModal, SupportModal } from '@/components'

const ModalWindow: FC<ModalWindowProps> = ({}) => {
  const modalContent = useAtomValue(openModalContent)

  useEffect(() => {
    if (modalContent) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }

    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [modalContent])

  return (
    <>
      {modalContent && (
        modalContent === 'исследования1' ? <MarketingModal /> :
        modalContent === 'дизайн1' ? <DesignModal /> :
        modalContent === 'разработка1' ? <DevelopModal /> :
        modalContent === 'поддержка1' ? <SupportModal /> :
        modalContent === 'детали1' ? <DetailsModal /> :
        modalContent === 'стоимость1' ? <CountModal /> : null
      )}
    </>
  )
}

export default ModalWindow
