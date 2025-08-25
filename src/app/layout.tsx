/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode } from 'react'
import { Footer } from '@modules/footer'
import { Header } from '@modules/header'

import '@styles/global.scss'

import localFont from 'next/font/local'
import Script from 'next/script'
import { Provider } from '@service/provider'
import { CookieBanner } from '@/modules/cookieBanner'

const YM_ID = '103883810'

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

        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) { return; }
              }
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=${YM_ID}', 'ym');

            ym(${YM_ID}, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:'dataLayer', accurateTrackBounce:true, trackLinks:true});
          `}
        </Script>
        <noscript>
          <div>
            <img src={`https://mc.yandex.ru/watch/${YM_ID}`} style={{ position: 'absolute', left: '-9999px' }} alt="" />
          </div>
        </noscript>
      </body>
    </html>
  )
}
