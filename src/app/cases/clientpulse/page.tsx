import ClientPulsePage from '@/views/casesPage/cases/clientPulsePage/clientPulsePage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Client Pulse',
  description: 'Legion Next.js template'
}

export default function Home() {
  return <ClientPulsePage />
}
