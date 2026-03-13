'use client'

import { useSetAtom } from 'jotai/react'
import { openModalContent, modalFormSource } from '@/shared/atoms/openModal'
import { Button } from '@/ui'
import type { ReactNode } from 'react'
import styles from './lidogeneraciyaPage.module.scss'

type Props = {
  children: ReactNode
  /** Вариант отображения: как кнопка UI (для Why) или как ссылка под Branch */
  variant?: 'button' | 'branchLink'
  maxWidth?: string
  /** Подпись для заявки: с какой кнопки открыта модалка (страница лидогенерации) */
  source?: string
}

export function OpenDetailsModalButton({ children, variant = 'button', maxWidth, source }: Props) {
  const setModalContent = useSetAtom(openModalContent)
  const setFormSource = useSetAtom(modalFormSource)

  const openModal = () => {
    if (source) setFormSource(source)
    setModalContent('детали-лидогенерация')
  }

  if (variant === 'branchLink') {
    return (
      <button type="button" className={styles.branchModalButton} onClick={openModal}>
        {children}
      </button>
    )
  }

  return (
    <Button tag="button" maxWidth={maxWidth} onClick={openModal}>
      {children}
    </Button>
  )
}
