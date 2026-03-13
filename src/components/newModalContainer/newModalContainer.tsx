'use client'

import { FC, useEffect } from 'react'
import { useAtomValue } from 'jotai/react'
import { openModalContent, modalFormSource } from '@/shared/atoms/openModal'
import { MarketingModal } from '../marketingModal'
import { DesignModal } from '../designModal'
import { DevelopModal } from '../developModal'
import { SupportModal } from '../supportModal'
import { DetailsModal } from '../detailsModal'
import { CountModal } from '../countModal'
import { StartModal } from '../startModal'

const NewModalContainer: FC = () => {
  const modalContent = useAtomValue(openModalContent)
  const formSource = useAtomValue(modalFormSource)

  useEffect(() => {
    const classModalOpen = 'modal-open'
    if (modalContent) {
      document.documentElement.classList.add(classModalOpen)
      document.body.classList.add(classModalOpen)
    } else {
      document.documentElement.classList.remove(classModalOpen)
      document.body.classList.remove(classModalOpen)
    }

    return () => {
      document.documentElement.classList.remove(classModalOpen)
      document.body.classList.remove(classModalOpen)
    }
  }, [modalContent])

  return (
    <>
      {modalContent === 'исследования' && <MarketingModal />}
      {modalContent === 'дизайн' && <DesignModal />}
      {modalContent === 'разработка' && <DevelopModal />}
      {modalContent === 'поддержка' && <SupportModal />}
      {(modalContent === 'детали' || modalContent === 'детали-лидогенерация') && (
        <DetailsModal
          variant={modalContent === 'детали-лидогенерация' ? 'lidogeneraciya' : undefined}
          formSource={modalContent === 'детали-лидогенерация' ? formSource : undefined}
        />
      )}
      {modalContent === 'стоимость' && <CountModal />}
      {/* Сверху старые модалки */}
      {modalContent === 'Начать' && <StartModal />}
    </>
  )
}

export default NewModalContainer
