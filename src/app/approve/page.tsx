import ApprovePage from '@/views/approvePage/approvePage'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Approve',
  description: 'Legion Next.js template'
}

export default function Home() {
  return <ApprovePage />
}
