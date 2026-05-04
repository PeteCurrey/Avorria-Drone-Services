export interface ServiceDetail {
  name: string
  slug: string
  tagline: string
  desc: string
  image: string
  features: { name: string; desc: string }[]
  methodology: { step: string; title: string; desc: string }[]
  deliverables: { name: string; desc: string }[]
  equipment: string[] // slugs from fleet assets
}

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    name: 'Drone Inspection',
    slug: 'inspection',
    tagline: 'Structural Integrity & Asset Auditing',
    desc: 'Eliminate risk and scaffolding. Our high-resolution visual and thermal defect reporting provides actionable data for complex structures, rooftops, and critical infrastructure.',
    image: '/images/inspection_poster.png',
    features: [
      { name: 'Defect Recognition', desc: 'AI-assisted identification of cracks, corrosion, and structural anomalies.' },
      { name: 'Radiometric Thermal', desc: 'Identifying moisture ingress and insulation failures using infrared sensors.' },
      { name: 'High-Altitude Reach', desc: 'Accessing hard-to-reach areas without the need for high-risk manual climbing.' },
      { name: 'Sub-Millimeter Detail', desc: '45MP+ resolution allows for extreme zoom-in capability on critical joints.' }
    ],
    methodology: [
      { step: '01', title: 'Asset Digitalization', desc: 'Creation of a high-resolution 2D or 3D digital model of the structure.' },
      { step: '02', title: 'Systematic Audit', desc: 'Automated flight paths ensure 100% coverage of all mission-critical surfaces.' },
      { step: '03', title: 'Data Analysis', desc: 'Experts review captured data to categorize and prioritize structural defects.' }
    ],
    deliverables: [
      { name: 'Inspection Report', desc: 'Comprehensive PDF/Digital report with geotagged defect findings.' },
      { name: 'Raw High-Res Media', desc: 'Original 4K/45MP photography for internal engineering review.' },
      { name: 'Interactive Map', desc: 'Cloud-based platform to view defects in their exact spatial context.' }
    ],
    equipment: ['m350-rtk', 'm30t', 'h20t']
  },
  {
    name: 'Surveying & Mapping',
    slug: 'surveying',
    tagline: 'Centimeter-Level Spatial Accuracy',
    desc: 'Transform your site into a high-precision digital environment. We utilize RTK positioning and LiDAR to deliver surveys with unprecedented accuracy and speed.',
    image: '/images/surveying_poster.png',
    features: [
      { name: 'LiDAR Acquisition', desc: 'Punching through vegetation to capture true ground topography with laser precision.' },
      { name: 'RTK Workflow', desc: 'Real-time kinematic positioning eliminates the heavy reliance on ground control points.' },
      { name: '3D Digital Twins', desc: 'Photorealistic 3D models for stakeholder visualization and planning.' },
      { name: 'Volumetric Analysis', desc: 'Instant, precise measurement of stockpiles, excavations, and site clearings.' }
    ],
    methodology: [
      { step: '01', title: 'Precision Planning', desc: 'Defining GSD (Global Sample Distance) requirements and flight parameters.' },
      { step: '02', title: 'Capture & Sync', desc: 'Execution of autonomous grid flights with microsecond-synchronization.' },
      { step: '03', title: 'Processing', desc: 'Data reconstruction using industry-leading photogrammetry and LiDAR engines.' }
    ],
    deliverables: [
      { name: 'Orthomosaic Map', desc: 'High-resolution, scale-accurate 2D map of the entire site.' },
      { name: 'Point Cloud (LAS/LAZ)', desc: 'Raw 3D spatial data compatible with CAD and BIM software.' },
      { name: 'Digital Elevation Model (DEM)', desc: 'Topographical height maps for hydrological and drainage analysis.' }
    ],
    equipment: ['m350-rtk', 'mavic-3e', 'l1', 'p1']
  },
  {
    name: 'Agricultural Surveys',
    slug: 'agriculture',
    tagline: 'Precision Farming & Crop Intel',
    desc: 'Leveraging multi-spectral data to optimize agricultural yield and health. Our data allows for early stress detection and precision application of resources.',
    image: '/images/agriculture_poster.jpg',
    features: [
      { name: 'NDVI Mapping', desc: 'Normalized Difference Vegetation Index to visualize plant biomass and health.' },
      { name: 'Crop Counting', desc: 'AI-driven plant counting and stand establishment metrics.' },
      { name: 'Variable Rate Maps', desc: 'Generating shapefiles for precision machinery to optimize fertilization.' },
      { name: 'Stress Detection', desc: 'Identifying irrigation leaks and pest infestations before they spread.' }
    ],
    methodology: [
      { step: '01', title: 'Field Mapping', desc: 'Defining field boundaries and creating optimized multispectral flight paths.' },
      { step: '02', title: 'Spectrum Capture', desc: 'Capturing data across Near-Infrared and Red Edge bands.' },
      { step: '03', title: 'Indice Generation', desc: 'Calculating plant health indices to pinpoint areas of concern.' }
    ],
    deliverables: [
      { name: 'Health Prescription Maps', desc: 'Prescriptive data for targeted crop management.' },
      { name: 'Topographical Water Maps', desc: 'Visualizing field drainage and potential pooling zones.' },
      { name: 'Historical Comparison', desc: 'Side-by-side analysis of crop progress across the season.' }
    ],
    equipment: ['mavic-3e', 'p1']
  }
]
