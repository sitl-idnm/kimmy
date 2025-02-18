import BestWavePage from '@/views/casesPage/cases/bestWavePage/bestWavePage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Sweetcorp',
  description: 'Legion Next.js template'
}

export default function Home() {
  return <BestWavePage />
}
