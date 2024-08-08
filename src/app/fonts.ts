import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const akiraExpanded = localFont({
  src: [
    {
      path: '../assets/fonts/AkiraExpanded-Bold.otf',
      weight: '800',
    },
  ],
  display: 'swap',
})
