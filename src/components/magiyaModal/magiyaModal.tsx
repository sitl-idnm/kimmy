import { FC } from 'react'
import { Modal } from '@/ui'
import { useSetAtom } from 'jotai'
import { openModalContent } from '@/shared/atoms/openModal'

const MagiyaModal: FC = () => {
  const setModalContent = useSetAtom(openModalContent)

  return (
    <Modal onClose={() => setModalContent(null)}>
      {/* Modal content */}
    </Modal>
  )
}

export default MagiyaModal
