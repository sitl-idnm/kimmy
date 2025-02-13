import SweetCorpPage from '@/views/casesPage/cases/sweetCorpPage/sweetCorpPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Sweetcorp',
  description: 'Legion Next.js template'
}

export default function Home() {
  return <SweetCorpPage />
}
