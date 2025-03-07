import { FC } from 'react'
import { Modal } from '@/ui'
import { useSetAtom } from 'jotai'
import { openModalContent } from '@/shared/atoms/openModal'

const BwModal: FC = () => {
  const setModalContent = useSetAtom(openModalContent)

  return (
    <Modal onClose={() => setModalContent(null)}>
      {/* Modal content */}
    </Modal>
  )
}

export default BwModal
