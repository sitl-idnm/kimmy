/* eslint-disable no-empty-pattern */
'use client'
import { FC } from 'react'

import { ModalWindowProps } from './modalWindow.types'
import { useAtom } from 'jotai'
import { openModal, openModalContent } from '@/shared/atoms/openModal'
import { CountModal, DesignModal, DetailsModal, DevelopModal, MarketingModal, SupportModal } from '@/components'

const ModalWindow: FC<ModalWindowProps> = ({  }) => {
  const [openWindow, ] = useAtom(openModal)
  const [openWindowContent, ] = useAtom(openModalContent)

  return (
    <>
      {openWindow && (
        openWindowContent === 'исследования' ? <MarketingModal /> : openWindowContent === 'дизайн' ? <DesignModal /> : openWindowContent === 'разработка' ? <DevelopModal /> : openWindowContent === 'поддержка' ? <SupportModal /> : openWindowContent === 'детали' ? <DetailsModal /> : openWindowContent === 'стоимость' ? <CountModal /> : null
      )}
    </>
  )
}

export default ModalWindow
