import { MetadataRoute } from 'next'

const BASE_URL = 'https://altitude-hire.com'

const services = [
  'drone-inspection',
  'aerial-photography',
  'surveying-mapping',
  'construction-monitoring',
  'thermal-imaging',
  'agricultural-surveys',
  'events-media',
]

const locations = [
  'london', 'manchester', 'birmingham', 'leeds', 'sheffield',
  'bristol', 'edinburgh', 'glasgow', 'liverpool', 'newcastle',
  'nottingham', 'leicester', 'coventry', 'cardiff', 'bradford',
  'belfast', 'hull', 'stoke-on-trent', 'wolverhampton', 'exeter',
  'plymouth', 'derby', 'southampton', 'oxford', 'cambridge',
  'norwich', 'ipswich', 'brighton', 'reading', 'milton-keynes',
  'york', 'sunderland', 'middlesbrough', 'peterborough', 'luton',
  'aberdeen', 'dundee', 'inverness', 'swansea', 'newport',
]

const industries = [
  'construction', 'utilities', 'agriculture', 'real-estate',
  'insurance', 'events', 'infrastructure', 'facilities-management',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/fleet`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/team`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/case-studies`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/brief`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
  ] as MetadataRoute.Sitemap

  const servicePages = services.map(s => ({
    url: `${BASE_URL}/services/${s}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  const locationPages = locations.map(l => ({
    url: `${BASE_URL}/locations/${l}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  const industryPages = industries.map(i => ({
    url: `${BASE_URL}/industries/${i}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  // Cross pages: /drone-inspection-london etc — highest commercial value
  const crossPages = services.flatMap(s =>
    locations.map(l => ({
      url: `${BASE_URL}/${s}-${l}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))
  )

  return [
    ...staticPages,
    ...servicePages,
    ...locationPages,
    ...industryPages,
    ...crossPages,
  ]
}
