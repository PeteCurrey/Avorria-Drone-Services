import { MetadataRoute } from 'next'
import { servicesData } from '@/lib/services-data'
import { locationsData } from '@/lib/locations-data'
import { blogPosts } from '@/lib/blog-posts'

const BASE_URL = 'https://altitude-hire.com'

const services = servicesData.map(s => s.slug)

const locations = locationsData.map(l => l.slug)

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
    { url: `${BASE_URL}/portfolio`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/resources`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/brief`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ] as MetadataRoute.Sitemap

  const resourcePages = blogPosts.map(p => ({
    url: `${BASE_URL}/resources/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

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
    ...resourcePages,
    ...locationPages,
    ...industryPages,
    ...crossPages,
  ]
}
