import CasesPage from '@/views/casesPage/casesPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cases',
  description: 'Legion Next.js template'
}

export default function Home() {
  return <CasesPage />
}
