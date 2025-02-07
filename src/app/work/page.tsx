import WorkUsPage from '@/views/workUsPage/workUsPage'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Work',
  description: 'Legion Next.js template'
}

export default function Home() {
  return <WorkUsPage />
}
