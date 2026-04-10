// app/layout.tsx
import type { Metadata } from 'next'
import { Bebas_Neue, Barlow, Barlow_Condensed } from 'next/font/google'
import './globals.css'
import { LenisProvider } from '@/lib/lenis'
import Nav from '@/components/layout/Nav'
import ProgressDots from '@/components/layout/ProgressDots'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const barlow = Barlow({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  weight: ['200', '300', '400'],
  subsets: ['latin'],
  variable: '--font-ui',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Avorria Drone — Professional UAV Services UK',
  description: 'CAA-approved drone inspection, aerial photography, surveying & mapping, and construction monitoring across the UK. See further. Know more.',
  keywords: 'drone inspection, aerial photography, UAV surveying, drone mapping, construction monitoring, drone services UK, CAA approved',
  openGraph: {
    title: 'Avorria Drone — See Further. Know More.',
    description: 'Professional UAV services for inspection, photography, surveying, and construction monitoring.',
    images: ['/images/hero_poster.png'],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${barlow.variable} ${barlowCondensed.variable}`}
    >
      <body className="bg-dark text-white overflow-hidden selection:bg-accent selection:text-dark">
        <LenisProvider>
          <Nav />
          <ProgressDots totalSections={6} />
          {children}
        </LenisProvider>
      </body>
    </html>
  )
}
