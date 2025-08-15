/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode } from 'react'
import { Footer } from '@modules/footer'
import { Header } from '@modules/header'

import '@styles/global.scss'

import localFont from 'next/font/local'
import { Provider } from '@service/provider'
import { CookieBanner } from '@/modules/cookieBanner'

const inter = localFont({
  src: [
    {
      path: './fonts/InterTight-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/InterTight-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: './fonts/InterTight-SemiBold.woff2',
      weight: '600',
      style: 'normal'
    }
  ],
  variable: '--font-inter'
})
const manrope = localFont({
  src: [
    {
      path: './fonts/Manrope-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/Manrope-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: './fonts/Manrope-SemiBold.woff2',
      weight: '600',
      style: 'normal'
    }
  ],
  variable: '--font-manrope'
})

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${manrope.variable}`}>
        <Provider>
          <div id="root">
            <Header />
            {children}
            <CookieBanner />
            <Footer />
          </div>

          <div id="modal-root" />
        </Provider>
      </body>
    </html>
  )
}
