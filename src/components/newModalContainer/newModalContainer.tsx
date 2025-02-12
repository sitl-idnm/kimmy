'use client'

import { FC, useEffect } from 'react'
import { useAtomValue } from 'jotai/react'
import { openModalContent } from '@/shared/atoms/openModal'
import { MarketingModal } from '../marketingModal'
import { DesignModal } from '../designModal'
import { DevelopModal } from '../developModal'
import { SupportModal } from '../supportModal'
import { DetailsModal } from '../detailsModal'
import { CountModal } from '../countModal'

const NewModalContainer: FC = () => {
  const modalContent = useAtomValue(openModalContent)

  useEffect(() => {
    if (modalContent) {
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = '15px' // Компенсация скроллбара
    } else {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }

    return () => {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [modalContent])

  return (
    <>
      {modalContent === 'исследования' && <MarketingModal />}
      {modalContent === 'дизайн' && <DesignModal />}
      {modalContent === 'разработка' && <DevelopModal />}
      {modalContent === 'поддержка' && <SupportModal />}
      {modalContent === 'детали' && <DetailsModal />}
      {modalContent === 'стоимость' && <CountModal />}
    </>
  )
}

export default NewModalContainer
