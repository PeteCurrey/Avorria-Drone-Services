import type { Metadata } from 'next'
import { Bebas_Neue, Barlow, Barlow_Condensed } from 'next/font/google'
import './globals.css'
import { LenisProvider } from '@/lib/lenis'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import ProgressDots from '@/components/layout/ProgressDots'
import TrackingProvider from '@/components/analytics/TrackingProvider'

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
  title: 'Altitude Hire — Professional UAV Services UK',
  description: 'Altitude Hire delivers CAA-compliant drone inspection, aerial photography, surveying & mapping, and construction monitoring across the UK. See further. Know more.',
  keywords: 'drone inspection, aerial photography, UAV surveying, drone mapping, construction monitoring, drone services UK, CAA compliant, Altitude Hire',
  metadataBase: new URL('https://altitude-hire.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Altitude Hire — Professional UAV Services UK',
    description: 'Altitude Hire delivers professional UAV services for inspection, photography, surveying, and construction monitoring across the UK. See further. Know more.',
    url: 'https://altitude-hire.com',
    siteName: 'Altitude Hire',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Altitude Hire — Professional UAV Services UK',
      },
    ],
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Altitude Hire — Professional UAV Services UK',
    description: 'Altitude Hire delivers professional UAV services for inspection, photography, surveying, and construction monitoring.',
    images: ['/images/og-default.jpg'],
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://altitude-hire.com',
  name: 'Altitude Hire',
  description: 'Professional CAA-compliant drone services across the UK including inspection, aerial photography, surveying, thermal imaging, and agricultural surveys.',
  url: 'https://altitude-hire.com',
  telephone: '+441234000000',
  email: 'hello@altitude-hire.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'GB',
    addressRegion: 'England',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Drone Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Drone Inspection' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Aerial Photography' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Drone Surveying & Mapping' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Construction Monitoring' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Thermal Imaging' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Agricultural Surveys' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Events Drone Coverage' } },
    ],
  },
  sameAs: [
    'https://www.instagram.com/altitudedrone',
    'https://www.linkedin.com/company/altitude-drone',
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the weather constraints for drone flight?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our enterprise assets like the Matrice 350 RTK are IP55 rated, allowing for operation in light rain and winds up to 12m/s. For high-precision surveying or thermal auditing, we recommend dry conditions for maximum data integrity.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have permission for night drone operations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Drone operations at night are possible subject to pilot qualification, site-specific risk assessment and operational safety requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly is drone survey data delivered?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard visual data is delivered within 24-48 hours. Complex LiDAR point clouds or 3D digital twins typically require 3-5 business days for full processing and quality assurance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are you insured for high-risk drone environments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We carry comprehensive Public Liability Insurance specifically tailored for commercial UAV operations in industrial and urban environments.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you handle NOTAMs and permissions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As part of our mission planning, we manage all necessary NOTAMs, landowner permissions, and stakeholder notifications to ensure a fully compliant and friction-free deployment.',
      },
    },
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="bg-dark text-white selection:bg-accent selection:text-dark">
        <TrackingProvider>
          <LenisProvider>
            <Nav />
            <ProgressDots totalSections={12} />
            {children}
            <Footer />
          </LenisProvider>
        </TrackingProvider>
      </body>
    </html>
  )
}
