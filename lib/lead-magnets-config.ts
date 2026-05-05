export interface LeadMagnetAsset {
  id: string;
  slug: string;
  title: string;
  type: 'Guide' | 'Checklist' | 'Template';
  audience: string[];
  description: string;
  relatedServices: { name: string; href: string }[];
  relatedBundles: { name: string; href: string; slug: string }[];
  contentsPreview: string[];
  caveat?: string;
  status: 'available' | 'preview' | 'preparing' | 'requested';
  pdfUrl?: string;
}

export const leadMagnets: LeadMagnetAsset[] = [
  {
    id: 'inspection-buyers-guide',
    slug: 'commercial-drone-inspection-buyers-guide',
    title: 'Commercial Drone Inspection Buyer’s Guide',
    type: 'Guide',
    audience: ['Commercial property owners', 'Facilities managers', 'Managing agents', 'Contractors', 'Insurers', 'Asset managers'],
    description: 'A practical guide to planning commercial drone inspections, understanding deliverables, avoiding poor-quality outputs and preparing a better project brief.',
    relatedServices: [
      { name: 'Drone Inspection', href: '/services/drone-inspection' },
      { name: 'Roof Inspections', href: '/services/roof-inspections' },
      { name: 'Building Envelope Inspections', href: '/services/building-envelope-inspections' },
      { name: 'Commercial Property Drone Surveys', href: '/services/commercial-property-drone-surveys' }
    ],
    relatedBundles: [
      { name: 'Roof Intelligence Pack', href: '/bundles#roof-intelligence-pack', slug: 'roof-intelligence-pack' },
      { name: 'Building Envelope & Asset Condition Pack', href: '/bundles#building-envelope-asset-condition-pack', slug: 'building-envelope-asset-condition-pack' },
      { name: 'Insurance & Incident Evidence Pack', href: '/bundles#insurance-incident-evidence-pack', slug: 'insurance-incident-evidence-pack' }
    ],
    contentsPreview: [
      'When drone inspections make sense',
      'What drones can and cannot inspect',
      'Typical deliverables',
      'Access and safety considerations',
      'Questions to ask before booking',
      'How to compare drone providers',
      'What to include in a project brief'
    ],
    status: 'preparing'
  },
  {
    id: 'roof-inspection-checklist',
    slug: 'drone-roof-inspection-checklist',
    title: 'Drone Roof Inspection Checklist',
    type: 'Checklist',
    audience: ['Facilities managers', 'Landlords', 'Managing agents', 'Commercial property teams', 'Contractors'],
    description: 'A practical checklist for planning a roof, gutter, drainage or high-level building inspection using drone capture.',
    relatedServices: [
      { name: 'Roof Inspections', href: '/services/roof-inspections' },
      { name: 'Thermal Imaging', href: '/services/thermal-imaging' },
      { name: 'Building Envelope Inspections', href: '/services/building-envelope-inspections' }
    ],
    relatedBundles: [
      { name: 'Roof Intelligence Pack', href: '/bundles#roof-intelligence-pack', slug: 'roof-intelligence-pack' }
    ],
    contentsPreview: [
      'Site information to collect',
      'Roof areas to capture',
      'Gutter and drainage checks',
      'Common defects to document',
      'Thermal add-on considerations',
      'Deliverables to request',
      'Contractor briefing notes'
    ],
    status: 'preparing'
  },
  {
    id: 'fm-survey-guide',
    slug: 'facilities-manager-drone-survey-guide',
    title: 'Facilities Manager’s Drone Survey Guide',
    type: 'Guide',
    audience: ['FM teams', 'Facilities managers', 'Property managers', 'Portfolio managers', 'Maintenance teams'],
    description: 'A guide for FM teams using drone inspections, thermal imaging and aerial evidence to support planned maintenance, contractor scoping and portfolio records.',
    relatedServices: [
      { name: 'Facilities Management Inspections', href: '/services/facilities-management-inspections' },
      { name: 'Roof Inspections', href: '/services/roof-inspections' },
      { name: 'Building Envelope Inspections', href: '/services/building-envelope-inspections' },
      { name: 'Thermal Imaging', href: '/services/thermal-imaging' }
    ],
    relatedBundles: [
      { name: 'Roof Intelligence Pack', href: '/bundles#roof-intelligence-pack', slug: 'roof-intelligence-pack' },
      { name: 'Building Envelope & Asset Condition Pack', href: '/bundles#building-envelope-asset-condition-pack', slug: 'building-envelope-asset-condition-pack' },
      { name: 'Solar & Energy Asset Pack', href: '/bundles#solar-energy-asset-pack', slug: 'solar-energy-asset-pack' }
    ],
    contentsPreview: [
      'How drones support FM workflows',
      'Roof and gutter inspection use cases',
      'Building envelope capture',
      'Thermal imaging considerations',
      'Repeat inspection planning',
      'Multi-site portfolio records',
      'What to include in a brief'
    ],
    status: 'preparing'
  },
  {
    id: 'construction-monitoring-template',
    slug: 'construction-progress-monitoring-template',
    title: 'Construction Progress Monitoring Template',
    type: 'Template',
    audience: ['Contractors', 'Developers', 'Project managers', 'Quantity surveyors', 'Client-side teams'],
    description: 'A template for planning repeat drone progress captures, reporting intervals, milestone records and stakeholder updates on construction sites.',
    relatedServices: [
      { name: 'Construction Monitoring', href: '/services/construction-monitoring' },
      { name: 'Construction Progress Photography', href: '/services/construction-progress-photography' },
      { name: 'Drone Time-Lapse Monitoring', href: '/services/drone-time-lapse-monitoring' },
      { name: 'Surveying & Mapping', href: '/services/surveying-mapping' }
    ],
    relatedBundles: [
      { name: 'Construction Progress Pack', href: '/bundles#construction-progress-pack', slug: 'construction-progress-pack' },
      { name: 'Survey Data Pack', href: '/bundles#survey-data-pack', slug: 'survey-data-pack' }
    ],
    contentsPreview: [
      'Visit frequency planner',
      'Repeat viewpoint checklist',
      'Milestone tracking',
      'Stakeholder reporting fields',
      'Image archive structure',
      'Progress report outline',
      'Briefing information checklist'
    ],
    status: 'preparing'
  },
  {
    id: 'insurance-evidence-checklist',
    slug: 'insurance-evidence-drone-capture-checklist',
    title: 'Insurance Evidence Drone Capture Checklist',
    type: 'Checklist',
    audience: ['Property owners', 'Landlords', 'Insurers', 'Loss adjusters', 'Contractors', 'FM teams'],
    description: 'A checklist for planning drone evidence capture after storm damage, roof damage, fire damage, flood impact or access-restricted property incidents.',
    relatedServices: [
      { name: 'Insurance & Loss Adjuster Surveys', href: '/services/insurance-loss-adjuster-surveys' },
      { name: 'Emergency Response', href: '/services/emergency-response' },
      { name: 'Roof Inspections', href: '/services/roof-inspections' },
      { name: 'Thermal Imaging', href: '/services/thermal-imaging' }
    ],
    relatedBundles: [
      { name: 'Insurance & Incident Evidence Pack', href: '/bundles#insurance-incident-evidence-pack', slug: 'insurance-incident-evidence-pack' }
    ],
    contentsPreview: [
      'Incident information to record',
      'Damage areas to capture',
      'Before-and-after evidence',
      'Annotated image requirements',
      'Contractor scoping details',
      'Thermal imaging considerations',
      'Insurance evidence caveats'
    ],
    caveat: 'Drone evidence can support insurance documentation, but acceptance depends on the insurer, policy, claim context and required evidence.',
    status: 'preparing'
  },
  {
    id: 'gaussian-splat-guide',
    slug: 'gaussian-splat-vs-photogrammetry-guide',
    title: 'Gaussian Splat vs Photogrammetry Guide',
    type: 'Guide',
    audience: ['Developers', 'Architects', 'Heritage teams', 'Construction teams', 'Property marketers', 'Surveyors', 'Stakeholder engagement teams'],
    description: 'A plain-English guide comparing Gaussian Splats, photogrammetry, LiDAR, 360 panoramas and drone video for commercial site visualisation and measurement workflows.',
    relatedServices: [
      { name: 'Gaussian Splat Capture', href: '/services/gaussian-splat-capture' },
      { name: 'Drone Photogrammetry', href: '/services/photogrammetry' },
      { name: 'Digital Twin Capture', href: '/services/digital-twin-capture' },
      { name: '360 Aerial Panoramas', href: '/services/360-aerial-panoramas' },
      { name: 'Surveying & Mapping', href: '/services/surveying-mapping' }
    ],
    relatedBundles: [
      { name: 'Immersive Digital Capture Pack', href: '/bundles#immersive-digital-capture-pack', slug: 'immersive-digital-capture-pack' }
    ],
    contentsPreview: [
      'What Gaussian Splats are best for',
      'What photogrammetry is best for',
      'When LiDAR is better',
      'When 360 panoramas are enough',
      'Visualisation vs measurement',
      'Commercial use cases',
      'Choosing the right output'
    ],
    caveat: 'Gaussian Splats are visualisation-first assets. Measurement-critical outputs should be planned with photogrammetry, LiDAR or survey-control workflows where required.',
    status: 'preparing'
  },
  {
    id: 'survey-cost-guide',
    slug: 'drone-survey-cost-guide',
    title: 'Drone Survey Cost Guide',
    type: 'Guide',
    audience: ['Surveyors', 'Contractors', 'Developers', 'Landowners', 'Commercial property teams', 'FM teams'],
    description: 'A guide explaining the factors that affect drone survey, mapping, inspection and aerial data capture costs.',
    relatedServices: [
      { name: 'Surveying & Mapping', href: '/services/surveying-mapping' },
      { name: 'Roof Inspections', href: '/services/roof-inspections' },
      { name: 'Construction Monitoring', href: '/services/construction-monitoring' },
      { name: 'Orthomosaic Mapping', href: '/services/orthomosaic-mapping' },
      { name: 'Stockpile Volume Surveys', href: '/services/stockpile-volume-surveys' }
    ],
    relatedBundles: [
      { name: 'Survey Data Pack', href: '/bundles#survey-data-pack', slug: 'survey-data-pack' },
      { name: 'Roof Intelligence Pack', href: '/bundles#roof-intelligence-pack', slug: 'roof-intelligence-pack' },
      { name: 'Construction Progress Pack', href: '/bundles#construction-progress-pack', slug: 'construction-progress-pack' }
    ],
    contentsPreview: [
      'Why drone project costs vary',
      'Site size and location factors',
      'Airspace and access considerations',
      'Deliverables and processing',
      'Reporting and evidence packs',
      'Survey accuracy requirements',
      'Repeat visits and multi-site work'
    ],
    status: 'preparing'
  }
];

export const sectors = [
  'Facilities Management',
  'Contractor / Construction',
  'Developer / Property Owner',
  'Commercial Property / Managing Agent',
  'Surveyor / Consultant',
  'Insurer / Loss Adjuster',
  'Solar / Energy',
  'Infrastructure / Utilities',
  'Heritage / Conservation',
  'Events / Media',
  'Agriculture / Rural Estates',
  'Other'
];

export const projectTypes = [
  'Roof / building inspection',
  'Construction progress monitoring',
  'Drone surveying / mapping',
  'Thermal imaging',
  'Solar panel inspection',
  'Insurance or incident evidence',
  'Aerial photography / video',
  'Gaussian Splat / 3D capture',
  'Facilities management inspections',
  'Stockpile / volume measurement',
  'Not sure yet'
];

export const getAutomationRoute = (sector: string, projectType: string) => {
  if (sector === 'Facilities Management' || projectType === 'Roof / building inspection' || projectType === 'Facilities management inspections') {
    return {
      name: 'FM Roof Inspection Nurture',
      category: 'FM / Property Inspection',
      recommendedBundle: 'Roof Intelligence Pack',
      secondaryBundle: 'Building Envelope & Asset Condition Pack',
      sectorSlug: 'facilities-management'
    };
  }
  if (sector === 'Contractor / Construction' || projectType === 'Construction progress monitoring' || projectType === 'Drone surveying / mapping' || projectType === 'Stockpile / volume measurement') {
    return {
      name: 'Construction Progress Monitoring Nurture',
      category: 'Construction / Progress',
      recommendedBundle: 'Construction Progress Pack',
      secondaryBundle: 'Survey Data Pack',
      sectorSlug: 'construction'
    };
  }
  if (sector === 'Insurer / Loss Adjuster' || projectType === 'Insurance or incident evidence') {
    return {
      name: 'Insurance Evidence Capture Nurture',
      category: 'Insurance / Incident',
      recommendedBundle: 'Insurance & Incident Evidence Pack',
      secondaryBundle: 'Roof Intelligence Pack',
      sectorSlug: 'insurance-loss-adjusters'
    };
  }
  if (sector === 'Developer / Property Owner' || sector === 'Commercial Property / Managing Agent') {
    return {
      name: 'Property Visualisation and Media Nurture',
      category: 'Commercial Property / Visualisation',
      recommendedBundle: 'Visual Sales Pack',
      secondaryBundle: 'Immersive Digital Capture Pack',
      sectorSlug: 'commercial-property'
    };
  }
  if (sector === 'Surveyor / Consultant') {
    return {
      name: 'Survey Data Pack Nurture',
      category: 'Survey / Mapping',
      recommendedBundle: 'Survey Data Pack',
      secondaryBundle: 'Immersive Digital Capture Pack',
      sectorSlug: 'surveyors'
    };
  }
  if (projectType === 'Gaussian Splat / 3D capture') {
    return {
      name: 'Gaussian Splat / 3D Nurture',
      category: 'Immersive / 3D',
      recommendedBundle: 'Immersive Digital Capture Pack',
      secondaryBundle: 'Visual Sales Pack',
      sectorSlug: 'developers-property-marketing'
    };
  }
  return {
    name: 'General Drone Service Nurture',
    category: 'General Inquiry',
    recommendedBundle: 'Commercial Bundle',
    secondaryBundle: 'Survey Data Pack',
    sectorSlug: 'sectors'
  };
};
