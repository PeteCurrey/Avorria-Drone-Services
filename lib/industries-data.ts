// lib/industries-data.ts

export interface IndustryData {
  slug: string
  title: string
  headline: string[]
  description: string
  metaTitle: string
  metaDescription: string
  benefits: string[]
  missions: string[]
  relatedServices: string[]
}

export const industriesData: IndustryData[] = [
  {
    slug: 'construction',
    title: 'Drone Services for Construction',
    headline: ['CONSTRUCTION', '& DEVELOPMENT'],
    description: 'From site appraisal to final handover, drone technology provides the aerial intelligence required to keep projects on track, on budget, and site-safe.',
    metaTitle: 'Drone Services for Construction UK — Altitude Hire',
    metaDescription: 'Specialist drone services for the construction industry across the UK. Site progress monitoring, earthworks volumetrics, and as-built verification. CAA approved.',
    benefits: ['Reduce site walkdown time by 80%', 'Millimetre-accurate earthworks tracking', 'Real-time stakeholder site visibility', 'Claim prevention with objective data'],
    missions: ['Weekly progress surveys', 'Stockpile volume calculations', 'Pre-construction site appraisal', 'Roof and facade inspections'],
    relatedServices: ['construction-monitoring', 'surveying-mapping'],
  },
  {
    slug: 'utilities',
    title: 'Drone Services for Utilities',
    headline: ['UTILITIES', '& ENERGY'],
    description: 'Safely inspect high-voltage infrastructure, renewable energy assets, and pipeline corridors without service interruptions.',
    metaTitle: 'Drone Services for Utilities UK — Altitude Hire',
    metaDescription: 'Specialist drone services for utilities and energy sectors. Powerline inspection, solar farm audits, and wind turbine assessment. CAA approved, thermal imaging.',
    benefits: ['Inspect without service outages', 'Eliminate high-voltage risk to life', 'Rapid assessment of remote assets', 'Early detection of thermal anomalies'],
    missions: ['Pylon and insulator checks', 'Solar panel radiometric auditing', 'Vegetation encroachment mapping', 'Pipeline corridor surveillance'],
    relatedServices: ['drone-inspection', 'thermal-imaging'],
  },
  {
    slug: 'agriculture',
    title: 'Drone Services for Agriculture',
    headline: ['AGRICULTURE', '& LAND'],
    description: 'Precision agriculture starts from the sky. Use multispectral data to optimise inputs and maximise yields across your estate.',
    metaTitle: 'Drone Services for Agriculture UK — Altitude Hire',
    metaDescription: 'Specialist drone services for precision agriculture. NDVI crop health analysis, multispectral mapping, and drainage assessment. CAA approved.',
    benefits: ['Variable rate application mapping', 'Early disease and stress detection', 'Accurate drainage and soil mapping', 'Non-contact crop assessment'],
    missions: ['NDVI health scanning', 'Drainage pattern identification', 'Field boundary verification', 'Yield prediction mapping'],
    relatedServices: ['agricultural-surveys', 'surveying-mapping'],
  },
  {
    slug: 'real-estate',
    title: 'Drone Services for Real Estate',
    headline: ['PROPERTY', '& REAL ESTATE'],
    description: 'Cinematic reveals and high-accuracy context shots for industrial, commercial, and luxury residential property marketing.',
    metaTitle: 'Drone Services for Real Estate UK — Altitude Hire',
    metaDescription: 'Specialist drone services for property and real estate. Cinematic sales footage, development reveals, and context mapping. CAA approved.',
    benefits: ['Unlock exclusive property perspectives', 'Show site context and connectivity', 'High-quality 4K/6K marketing assets', 'Fast turnaround for sales cycles'],
    missions: ['High-end property filming', 'Site reveal sequences', 'Viewpoint simulation', 'Boundary mapping'],
    relatedServices: ['aerial-photography', 'events-media'],
  },
  {
    slug: 'insurance',
    title: 'Drone Services for Insurance',
    headline: ['INSURANCE', '& CLAIMS'],
    description: 'Objective, timestamped aerial evidence for loss adjustment, damage assessment, and asset verification.',
    metaTitle: 'Drone Services for Insurance UK — Altitude Hire',
    metaDescription: 'Specialist drone services for insurance and claims. Radiometric thermal damage assessment and post-incident verification. CAA approved.',
    benefits: ['Rapid response site evidence', 'Objective radiometric data', 'Safe access to damaged structures', 'Reduced loss adjustment timescales'],
    missions: ['Post-incident damage survey', 'Roof thermal audits', 'Fraud prevention verification', 'Large loss site recording'],
    relatedServices: ['thermal-imaging', 'drone-inspection'],
  },
  {
    slug: 'events',
    title: 'Drone Services for Events',
    headline: ['EVENTS', '& MEDIA'],
    description: 'Article 16 licensed coverage for major festivals, sporting events, and film productions. Fully legal operations over crowds.',
    metaTitle: 'Drone Services for Events UK — Altitude Hire',
    metaDescription: 'Specialist drone services for events and media. Article 16 licensed for operations over crowds at festivals and sport. CAA approved.',
    benefits: ['Legal operations over crowds', 'Cinematic festival highlights', 'Live FPV feed for production', 'Dynamic tracking shots'],
    missions: ['Festival and concert coverage', 'Sporting event filming', 'Film and TV second unit', 'Corporate event reveals'],
    relatedServices: ['events-media', 'aerial-photography'],
  },
  {
    slug: 'infrastructure',
    title: 'Drone Services for Infrastructure',
    headline: ['INFRASTRUCTURE', '& TRANSPORT'],
    description: 'Precision mapping and structural assessment for railways, highways, bridges, and maritime assets.',
    metaTitle: 'Drone Services for Infrastructure UK — Altitude Hire',
    metaDescription: 'Specialist drone services for infrastructure and transport. Bridge inspection, rail corridor mapping, and port surveys. CAA approved.',
    benefits: ['Minimise asset downtime', 'Reduce operative trackside risk', 'Scalable mapping for long corridors', 'High-accuracy LiDAR data'],
    missions: ['Bridge and pier inspection', 'Rail corridor LiDAR mapping', 'Highway as-built surveys', 'Port and maritime audits'],
    relatedServices: ['surveying-mapping', 'drone-inspection'],
  },
  {
    slug: 'facilities-management',
    title: 'Drone Services for Facilities Management',
    headline: ['FACILITIES', 'MANAGEMENT'],
    description: 'Non-disruptive envelope inspections and thermal audits that inform planned maintenance and protect property value.',
    metaTitle: 'Drone Services for Facilities Management UK — Altitude Hire',
    metaDescription: 'Specialist drone services for facilities management. Planned roof surveys, thermal energy audits, and facade checks. Professional reporting.',
    benefits: ['Zero-scaffold site inspection', 'Budget-certain planned maintenance', 'Total building envelope data', 'Non-disruptive site operation'],
    missions: ['Annual roof inspections', 'Thermal air leakage surveys', 'Facade condition audits', 'Gutter and drainage checks'],
    relatedServices: ['drone-inspection', 'thermal-imaging'],
  },
]
