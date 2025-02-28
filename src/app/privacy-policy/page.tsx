import type { Metadata } from 'next'
import PrivacyPage from '@/views/privacyPage/privacyPage'

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'Legion Next.js template'
}

export default function Home() {
  return <PrivacyPage />
}
