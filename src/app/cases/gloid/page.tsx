import GloidPage from '@/views/casesPage/cases/gloidPage/gloidPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Gloid',
  description: 'Legion Next.js template'
}

export default function Home() {
  return <GloidPage />
}
