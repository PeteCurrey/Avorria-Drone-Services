// lib/services-data.ts

export interface ServiceData {
  slug: string
  title: string
  headline: string[]        // array of lines for Bebas Neue display
  intro: string             // 2-sentence intro for hero
  metaTitle: string
  metaDescription: string
  heroStat: { value: string; label: string }[]  // 3 stats for hero strip
  bodyHeading: string
  bodyParagraphs: string[]  // 3 paragraphs of substantive body copy
  capabilities: { title: string; description: string }[]  // 4 capability cards
  industries: string[]      // industries this service serves
  faqs: { q: string; a: string }[]  // 4 FAQs specific to this service
  relatedServices: string[] // slugs of 2 related services
  cta: { label: string; href: string }
}

export const servicesData: ServiceData[] = [
  {
    slug: 'drone-inspection',
    title: 'Drone Inspection Services UK',
    headline: ['DRONE', 'INSPECTION'],
    intro: 'Eliminate access risk and scaffolding costs. Altitude Drone delivers comprehensive UAV inspection services for structures where traditional access is dangerous, slow, or prohibitively expensive.',
    metaTitle: 'Drone Inspection Services UK — Altitude Drone | CAA Approved',
    metaDescription: 'Professional drone inspection services across the UK. Thermal imaging, defect reporting, and structural assessments for roofing, facades, bridges, pylons, and solar panels. CAA approved, £10M PLI.',
    heroStat: [
      { value: '70%', label: 'Cost saving vs scaffolding' },
      { value: '4K', label: 'Ultra HD capture' },
      { value: '48H', label: 'Report turnaround' },
    ],
