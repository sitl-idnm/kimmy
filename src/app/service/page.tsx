import type { Metadata } from 'next'
import ServicePage from '@/views/servicePage/servicePage'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Legion Next.js template'
}

export default function Home() {
  return <ServicePage />
}
