'use client'

// import Script from 'next/script'

import { Provider } from 'react-redux'

import { inter } from '@/app/fonts'
import store from './../store'
import './../styles/style.scss'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>Rell&apos;s Graphic Website</title>
        {/* <Script
          id="get-color-scheme"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
        const userMode = localStorage.getItem('coreui-pro-next-js-admin-template-theme-bright');
        const systemDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (userMode === 'dark' || (userMode !== 'light' && systemDarkMode)) {
          document.documentElement.dataset.coreuiTheme = 'dark';
        }`,
          }}
        /> */}
      </head>
      <body className="text-white">
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  )
}
