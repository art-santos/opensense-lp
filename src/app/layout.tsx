import { type Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'
import { Inter, Permanent_Marker } from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const permanent_marker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-permanent-marker',
  display: 'swap'
})


const hkgrotesk = localFont({
  src: [
    {
      path: '../public/fonts/HKGrotesk-Medium.woff2',
      weight: '500',
    },
    {
      path: '../public/fonts/HKGrotesk-ExtraBold.woff2',
      weight: '800',
    },        
  ],
  variable: '--font-hkgrotesk',
  display: 'swap',  
})


export const metadata: Metadata = {
  title: {
    template: '%s - Studio',
    default: 'Studio - Award winning developer studio based in Denmark',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className={`${inter.variable} ${permanent_marker.variable} ${hkgrotesk.variable} font-inter antialiased bg-white text-slate-800 tracking-tight`}>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
