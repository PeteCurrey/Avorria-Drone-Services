// lib/cross-pages.ts
import { servicesData } from './services-data'
import { locationsData } from './locations-data'

export function getCrossPageData(slug: string) {
  // Pattern: {service-slug}-{location-slug}
  // We need to be careful as service slugs can contain hyphens (e.g., drone-inspection)
  
  const allServices = servicesData.map(s => s.slug)
  const allLocations = locationsData.map(l => l.slug)

  // Try to find a match by iterating through potential service prefixes
  for (const serviceSlug of allServices) {
    if (slug.startsWith(serviceSlug + '-')) {
      const locationSlug = slug.replace(serviceSlug + '-', '')
      if (allLocations.includes(locationSlug)) {
        return {
          service: servicesData.find(s => s.slug === serviceSlug)!,
          location: locationsData.find(l => l.slug === locationSlug)!,
        }
      }
    }
  }

  return null
}

export function getAllCrossPageSlugs() {
  const slugs: string[] = []
  servicesData.forEach(s => {
    locationsData.forEach(l => {
      slugs.push(`${s.slug}-${l.slug}`)
    })
  })
  return slugs
}
