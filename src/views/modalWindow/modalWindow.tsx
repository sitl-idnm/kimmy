/* eslint-disable no-empty-pattern */
'use client'
import { FC } from 'react'

import { ModalWindowProps } from './modalWindow.types'
import { useAtom } from 'jotai'
import { openModal, openModalContent } from '@/shared/atoms/openModal'
import { DesignModal, DevelopModal, MarketingModal, SupportModal } from '@/components'

const ModalWindow: FC<ModalWindowProps> = ({  }) => {
  const [openWindow, ] = useAtom(openModal)
  const [openWindowContent, ] = useAtom(openModalContent)

  {openWindowContent}
  return (
    <>
      {openWindow && (
        openWindowContent === 'исследования' ? <MarketingModal /> : openWindowContent === 'дизайн' ? <DesignModal /> : openWindowContent === 'разработка' ? <DevelopModal /> : openWindowContent === 'поддержка' ? <SupportModal /> : null
      )}
    </>
  )
}

export default ModalWindow
