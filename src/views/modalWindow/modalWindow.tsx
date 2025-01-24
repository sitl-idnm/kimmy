/* eslint-disable no-empty-pattern */
'use client'
import { FC } from 'react'

import { ModalWindowProps } from './modalWindow.types'
import { useAtom } from 'jotai'
import { openModal, openModalContent } from '@/shared/atoms/openModal'
import { DesignModal, MarketingModal } from '@/components'

const ModalWindow: FC<ModalWindowProps> = ({  }) => {
  const [openWindow, ] = useAtom(openModal)
  const [openWindowContent, ] = useAtom(openModalContent)

  {openWindowContent}
  return (
    <>
      {openWindow && (
        openWindowContent === 'исследования' ? <MarketingModal /> : openWindowContent === 'дизайн' ? <DesignModal /> : openWindowContent === 'разработка' ? <MarketingModal /> : openWindowContent === 'поддержка' ? <MarketingModal /> : null
// Заменить компоненты MarketingModal на другие компоненты, которые будут открываться в модальном окне
      )}
    </>
  )
}

export default ModalWindow
