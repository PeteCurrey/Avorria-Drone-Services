export interface SpecItem {
  label: string
  value: string
}

export interface FeatureItem {
  name: string
  desc: string
}

export interface FleetAsset {
  name: string
  slug: string
  type: string
  desc: string
  image: string
  heroImage?: string
  specs: SpecItem[]
  features: FeatureItem[]
  payloads?: string[] // Slugs of compatible payloads
}

export const FLEET_ASSETS: FleetAsset[] = [
  {
    name: 'DJI Matrice 350 RTK',
    slug: 'm350-rtk',
    type: 'Heavy Lift Industrial',
    desc: 'The gold standard for critical infrastructure inspection. IP55 rating, triple-payload support, and 55-minute flight endurance for high-stakes industrial missions.',
    image: '/images/fleet_m350.png',
    specs: [
      { label: 'Max Flight Time', value: '55 Minutes' },
      { label: 'IP Rating', value: 'IP55' },
      { label: 'Max Payload', value: '2.7 kg' },
      { label: 'Transmission', value: '20 km (O3 Enterprise)' },
      { label: 'Operating Temp', value: '-20°C to 50°C' },
      { label: 'Positioning', value: 'RTK (Centimeter-level)' }
    ],
    features: [
      { name: 'Triple Payload Support', desc: 'Single upward and dual downward gimbals for multi-spectral capture.' },
      { name: 'Hot-Swap Batteries', desc: 'Switch TB65 batteries without powering down the aircraft for efficient mission continuity.' },
      { name: '6-Directional Sensing', desc: 'Comprehensive obstacle awareness to assist with safe navigation in complex environments.' },
      { name: 'Night Vision FPV', desc: 'Enhanced situational awareness during low-light or night-time operations.' }
    ],
    payloads: ['h20t', 'l1', 'p1']
  },
  {
    name: 'DJI Matrice 30T',
    slug: 'm30t',
    type: 'Tactical Thermal',
    desc: 'The ultimate rapid-deployment asset. Integrated wide, zoom, and thermal sensors with laser rangefinding for complex search and rescue or utility audits.',
    image: '/images/inspection_poster.png',
    specs: [
      { label: 'Max Flight Time', value: '41 Minutes' },
      { label: 'IP Rating', value: 'IP55' },
      { label: 'Thermal Res', value: '640 x 512' },
      { label: 'Zoom', value: '16x Optical (200x Hybrid)' },
      { label: 'Deployment', value: 'Rapid Foldable Design' },
      { label: 'Laser Range', value: '1200m' }
    ],
    features: [
      { name: 'Integrated Sensor Suite', desc: 'No payload switching required; Wide, Zoom, and Thermal all in one.' },
      { name: 'Compact Portability', desc: 'Designed for deployment in hard-to-reach terrain.' },
      { name: 'Low Light Capture', desc: 'Optimized for various light conditions including dusk and dawn utility audits.' },
      { name: 'Weather Resilient', desc: 'Designed for flight in challenging weather conditions.' }
    ]
  },
  {
    name: 'DJI Matrice 300 RTK',
    slug: 'm300-rtk',
    type: 'Legacy Enterprise',
    desc: 'Proven reliability in the field. The M300 RTK remains a pillar of infrastructure auditing, offering high payload modularity and consistent performance.',
    image: '/images/fleet_m350.png', // Fallback to same as 350 for now
    specs: [
      { label: 'Max Flight Time', value: '55 Minutes' },
      { label: 'IP Rating', value: 'IP45' },
      { label: 'Max Payload', value: '2.7 kg' },
      { label: 'Transmission', value: '15 km (OcuSync 2.0)' },
      { label: 'Battery', value: 'TB60 System' },
      { label: 'Reliability', value: 'Field Proven' }
    ],
    features: [
      { name: 'Modular Payload Support', desc: 'Compatible with the entire Zenmuse H20 series and third-party gimbals.' },
      { name: 'Advanced AI Spot-Check', desc: 'Automate routine inspections for consistent data capture every time.' },
      { name: 'Dual Control Mode', desc: 'Two pilots can take control of the aircraft and payload seamlessly.' },
      { name: 'Waypoints 2.0', desc: 'Precision programmed flight paths for complex mapping missions.' }
    ],
    payloads: ['h20t', 'l1', 'p1', 'z30']
  },
  {
    name: 'DJI Mavic 3 Enterprise',
    slug: 'mavic-3e',
    type: 'Precision Mapping',
    desc: 'Portable power optimized for high-speed mapping. Featuring a mechanical shutter and RTK module for precision photogrammetry whereScoped correctly.',
    image: '/images/surveying_poster.png',
    specs: [
      { label: 'Max Flight Time', value: '45 Minutes' },
      { label: 'Shutter', value: 'Mechanical (Global)' },
      { label: 'Sensor', value: '4/3 CMOS (20MP)' },
      { label: 'Interval', value: '0.7s Fast Capture' },
      { label: 'Weight', value: '915g (Ultra Portable)' },
      { label: 'Positioning', value: 'RTK Module Compatible' }
    ],
    features: [
      { name: 'Mechanical Shutter', desc: 'Eliminates rolling shutter distortion for high-speed mapping missions.' },
      { name: 'Omni-Directional Sensing', desc: 'Wide-angle lenses on all sides for zero-blind-spot obstacle avoidance.' },
      { name: 'Extended Battery Life', desc: '45-minute flight time allows for covering up to 2 square kilometers per flight.' },
      { name: 'Loudspeaker Support', desc: 'Optional payload for search and rescue communication or public safety.' }
    ]
  }
]

export const PAYLOADS = [
  {
    name: 'Zenmuse H20T',
    slug: 'h20t',
    type: 'Quad-Sensor Payload',
    desc: 'Thermal, Zoom, Wide, and Laser Rangefinder in one integrated solution.',
    image: '/images/inspection_poster.png',
    specs: [
      { label: 'Thermal Res', value: '640 x 512' },
      { label: 'Zoom', value: '23x Optical' },
      { label: 'Laser Range', value: '1200m' },
      { label: 'IP Rating', value: 'IP44' }
    ]
  },
  {
    name: 'Zenmuse L1',
    slug: 'l1',
    type: 'LiDAR + RGB',
    desc: 'Support for digital twin-style visual records with real-time true-color point clouds.',
    image: '/images/surveying_poster.png',
    specs: [
      { label: 'Points/sec', value: '480,000' },
      { label: 'Returns', value: 'Up to 3' },
      { label: 'RGB Sensor', value: '20MP 1-inch' },
      { label: 'Accuracy', value: 'Typical 5-10cm (Project Scoped)' }
    ]
  },
  {
    name: 'Zenmuse P1',
    slug: 'p1',
    type: 'Full-Frame Photogrammetry',
    desc: '45MP sensor with global shutter for unprecedented mapping detail.',
    image: '/images/photography_poster.png',
    specs: [
      { label: 'Resolution', value: '45 Megapixels' },
      { label: 'Sensor', value: 'Full-Frame' },
      { label: 'Shutter', value: 'Global Mechanical' },
      { label: 'Lens Support', value: '24/35/50mm' }
    ]
  },
  {
    name: 'Zenmuse Z30',
    slug: 'z30',
    type: 'Aerial Zoom',
    desc: '30x optical zoom for safe distance monitoring of critical assets.',
    image: '/images/inspection_poster.png',
    specs: [
      { label: 'Optical Zoom', value: '30x' },
      { label: 'Digital Zoom', value: '6x' },
      { label: 'Stabilization', value: '3-Axis Gimbal' },
      { label: 'Sensor', value: 'CMOS 1/2.8' }
    ]
  }
]
