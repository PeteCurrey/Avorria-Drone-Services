// lib/blog-posts.ts

export interface BlogPost {
  slug: string
  title: string
  date: string
  author: string
  category: 'Regulations' | 'Technology' | 'Industry' | 'Cost'
  excerpt: string
  content: string // Markdown or HTML string
  image: string
  readTime: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'drone-inspection-costs-uk-2024',
    title: 'Drone Inspection Costs UK (2024 Guide)',
    date: '2024-03-15',
    author: 'Operations Team',
    category: 'Cost',
    excerpt: 'Detailed breakdown of drone inspection pricing, from day rates to full asset reporting packages.',
    content: `
# Drone Inspection Costs UK: 2024 Pricing Guide

Understanding the cost of drone inspection is critical for facilities managers and asset owners. While significantly cheaper than scaffolding, professional UAV industrial services carry costs related to licensing, insurance, and high-end thermal sensors.

## Typical Pricing Tiers
- **Basic Visual Inspection**: £450 – £850 per day
- **Industrial Thermal Audit**: £850 – £1,500 per day
- **Specialist LiDAR / 3D Mapping**: £1,200 – £2,500 per day

## What Influences the Price?
1. **Payload Complexity**: Radiometric thermal sensors (FLIR) cost significantly more to operate than standard 4K visual cameras.
2. **Airspace Risk**: Operations in London or near airports require complex permitting and extended safety teams.
3. **Data Processing**: A raw video file is cheap; a 40-page defect report with classified severity takes hours of post-flight professional analysis.
    `,
    image: '/images/blog/costs.jpg',
    readTime: '6 min',
  },
  {
    slug: 'caa-regulations-drone-surveying-2024',
    title: 'CAA Regulations for Drone Surveying 2024',
    date: '2024-03-10',
    author: 'Compliance Lead',
    category: 'Regulations',
    excerpt: 'The essential guide to GVC, A2 CofC, and Article 16 permissions for commercial drone use.',
    content: `
# CAA Drone Regulations 2024: The Commercial Reality

If you are hiring a drone operator in the UK, the "hobbyist with a drone" is a major legal risk. The Civil Aviation Authority (CAA) is clear: any flight for "valuable consideration" requires specific certification.

## Key Certifications
- **GVC (General Visual Line of Sight Certificate)**: The standard for industrial operations.
- **Article 16**: Allows specific deviations for operations over crowds (essential for events).
- **Insurance**: Professional operators must carry EC 785/2004 compliant insurance.

Always request the operator\'s Operator ID and their Flyer ID for the specific pilot assigned to your site.
    `,
    image: '/images/blog/regulations.jpg',
    readTime: '8 min',
  },
  {
    slug: 'lidar-vs-photogrammetry-drone-mapping',
    title: 'LiDAR vs Photogrammetry: Which is right?',
    date: '2024-02-28',
    author: 'Survey Department',
    category: 'Technology',
    excerpt: 'Choosing the right sensor for your topographic survey: resolution vs penetration.',
    content: `
# LiDAR vs Photogrammetry in Drone Surveying

The most common question from civil engineers: "Do I need LiDAR or Photogrammetry?". The answer depends entirely on your terrain.

## Photogrammetry (Zenmuse P1)
- **Best for**: Open sites, high-resolution visual maps, 3D building models.
- **Advantage**: Photorealistic detail and massive coverage speed.

## LiDAR (Zenmuse L2)
- **Best for**: Heavily vegetated sites, corridor mapping (rail/power), volume accuracy.
- **Advantage**: "Seeing through" trees to get true ground returns.
    `,
    image: '/images/blog/technology.jpg',
    readTime: '10 min',
  },
  {
    slug: 'thermal-inspection-solar-farms-roi',
    title: 'ROI of Thermal Drone Inspection for Solar',
    date: '2024-02-15',
    author: 'Renewables Lead',
    category: 'Industry',
    excerpt: 'How radiometric auditing identifies string failures and increases asset yield by up to 5%.',
    content: `
# Maximising Solar Asset Yield with Thermal Drones

A single failing diode can impact the performance of an entire string. Finding those failures manually takes weeks. A drone with a FLIR radiometric sensor finds them in minutes.

## The Financial Case
- **Rapid Identification**: Scan 10MW in a few hours.
- **Defect Classification**: Is it a cell crack, soiling, or a total bypass diode failure?
- **Yield Recovery**: Clients typically see a 3-5% increase in generation after remediation of drone-identified faults.
    `,
    image: '/images/blog/solar.jpg',
    readTime: '7 min',
  },
  {
    slug: 'construction-progress-monitoring-workflows',
    title: 'Streamlining Construction Progress Workflows',
    date: '2024-01-20',
    author: 'Digital Construction',
    category: 'Industry',
    excerpt: 'Integrating drone data into BIM360, Procore, and weekly reporting cycles.',
    content: `
# Smart Construction: The Drone RETK Workflow

Site intelligence shouldn't live in a PDF. We integrate aerial data directly into your existing project management stack.

## Integration Points
- **BIM 360 Overlay**: As-built vs As-designed.
- **Procore Photos**: Auto-populate site progress photos by location.
- **Volumetrics**: Earthworks balance tracking in weekly reporting.
    `,
    image: '/images/blog/construction.jpg',
    readTime: '5 min',
  },
  {
    slug: 'drone-roof-survey-benefits',
    title: '7 Benefits of Drone Roof Surveys',
    date: '2024-01-10',
    author: 'Operations Team',
    category: 'Industry',
    excerpt: 'Why property managers are ditching the cherry picker for the UAV.',
    content: `
# 7 Reasons to Switch to Drone Roof Surveys

1. **Zero Risk**: No person leaves the ground.
2. **No Scaffolding**: Save £3k–£10k in setup costs.
3. **Speed**: Inspect 50 properties a day.
4. **Thermal Capability**: Find moisture ingress the eye can't see.
5. **Zoom**: See a loose screw from 20 metres away.
6. **Digital Twin**: Get a high-res 3D map for your records.
7. **Compliance**: Comprehensive reports for insurance and RICS.
    `,
    image: '/images/blog/roof.jpg',
    readTime: '4 min',
  },
]
