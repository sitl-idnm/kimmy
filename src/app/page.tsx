import type { Metadata } from 'next'
import { HomeView } from '@views/home'

export const metadata: Metadata = {
  title: 'K.KIM',
  description: 'K.KIM Agency',
  openGraph: {
    title: 'K.KIM',
    description: 'K.KIM Agency',
    images: [
      {
        url: '/og-image.png', // Путь к вашему изображению
        width: 1200,
        height: 630,
        alt: 'Site preview'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'K.KIM',
    description: 'K.KIM Agency',
    images: ['/og-image.png']
  }
}

export default function Home() {
  return <HomeView />
}
