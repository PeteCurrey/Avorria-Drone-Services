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
    bodyHeading: 'WHY DRONE INSPECTION OUTPERFORMS TRADITIONAL ACCESS',
    bodyParagraphs: [
      "Traditional asset inspection methods — scaffolding, rope access, cherry pickers — are slow, expensive, and place operatives in unnecessary danger. Working at height remains the single largest cause of workplace fatalities in the UK. Drone inspection eliminates that risk entirely while delivering superior data: higher resolution imagery, wider coverage, and access to areas that simply cannot be reached safely by any other method.",
      "Our inspection drones carry a range of payloads depending on the asset type. Standard visual inspection uses our DJI Matrice 350 RTK with Zenmuse H20T — a hybrid sensor combining 4K wide, 23× optical zoom, and FLIR thermal imaging in a single gimbal. For structural assessment, the zoom capability allows pixel-level defect identification from a safe standoff distance. For thermal applications, the FLIR sensor delivers radiometric data accurate to ±2°C.",
      "Every Altitude inspection produces a structured defect report — annotated imagery with GPS-tagged defect locations, severity classifications, and recommended remediation priority. Reports are formatted to RICS guidance where required and delivered to your secure client portal within 48 hours of the flight. We work with asset owners, facilities managers, loss adjusters, and engineering consultants across the UK.",
    ],
    capabilities: [
      { title: 'Roofing & Facades', description: 'Full building envelope inspection including flat roofs, pitched roofs, cladding systems, and glazing. Moisture mapping available with thermal payload.' },
      { title: 'Bridges & Structures', description: 'Deck soffit inspection, pier condition assessment, and expansion joint survey. Inaccessible faces imaged with zoom payload from safe standoff.' },
      { title: 'Powerlines & Pylons', description: 'High-voltage infrastructure inspection without outage. Tower condition, insulator check, and conductor assessment at safe operational distance.' },
      { title: 'Solar Panels', description: 'Cell-level fault detection using FLIR radiometric thermal imaging. Identify hotspots, bypass diode failures, and underperforming strings across large arrays in a single flight.' },
    ],
    industries: ['Facilities Management', 'Insurance & Loss Adjustment', 'Civil Engineering', 'Utilities & Energy', 'Local Authority', 'Housing & Property'],
    faqs: [
      { q: 'How close does the drone need to fly to the structure?', a: 'Typically 5–15 metres depending on the sensor and required resolution. Our Zenmuse H20T 23× optical zoom allows pixel-level defect identification from safe standoff distances that keep the drone well clear of the structure.' },
      { q: 'Can you inspect structures in urban or restricted airspace?', a: 'Yes. We hold CAA permissions for operations in congested areas and near controlled airspace. We file all NOTAMs and coordinate with relevant authorities as part of our standard mission planning.' },
      { q: 'What format is the inspection report delivered in?', a: 'Annotated PDF report with GPS-referenced defect imagery, severity classification, and recommended action priority. Raw imagery and video are also delivered to your client portal.' },
      { q: 'Can drone inspection replace a full structural survey?', a: 'Drone inspection provides comprehensive visual and thermal data that is accepted by many engineering teams as a primary condition assessment. For formal structural certification, a qualified engineer reviews the drone data and issues a signed report.' },
    ],
    relatedServices: ['thermal-imaging', 'construction-monitoring'],
    cta: { label: 'GET AN INSPECTION QUOTE', href: '/contact' },
  },

  {
    slug: 'aerial-photography',
    title: 'Aerial Photography & Film UK',
    headline: ['AERIAL', 'PHOTOGRAPHY', '& FILM'],
    intro: 'Cinematic 4K drone footage and ultra-high-resolution stills for property, commercial, and broadcast clients. Every flight is managed by a CAA GVC certified pilot — no cowboys, no compromise.',
    metaTitle: 'Aerial Photography UK — Altitude Drone | 4K Drone Filming',
    metaDescription: 'Professional aerial photography and drone filming services across the UK. 4K/6K video, 45MP stills, real estate, commercial, events, and broadcast. CAA approved, same-day delivery available.',
    heroStat: [
      { value: '4K', label: 'Cinematic video capture' },
      { value: '45MP', label: 'Full-frame stills' },
      { value: '24H', label: 'Highlight delivery' },
    ],
    bodyHeading: 'AERIAL CONTENT THAT ELEVATES YOUR PROJECT',
    bodyParagraphs: [
      "Aerial photography has moved from a luxury to an expectation. Property buyers expect drone footage. Developers present planning applications with aerial context shots. Marketing teams require cinematic content that performs on social. The question is no longer whether to shoot from altitude — it is whether to shoot it properly. Consumer drone operators and unlicensed hobbyists dominate the bottom of this market. We do not compete there.",
      "Altitude operates DJI Mavic 3 Enterprise and Matrice 350 RTK platforms depending on the brief. For cinematic property and commercial work, the Mavic 3 Enterprise delivers a 4/3-inch CMOS sensor at 20MP with 7× hybrid zoom and 45-minute flight endurance. Where absolute resolution is required, the Zenmuse P1 full-frame 45MP payload on the Matrice 350 RTK produces results equivalent to a manned aircraft survey.",
      "We are fully licensed for operations over congested areas, near aerodromes, and at night — permissions that most freelance operators do not hold. Our pilots carry Article 16 authorisation for specified operations over crowds, meaning we can legally cover events and populated sites that other operators have to decline.",
    ],
    capabilities: [
      { title: 'Property & Real Estate', description: 'Sales and development marketing footage for residential, commercial, and mixed-use. Ground-to-altitude reveals, facade profiles, and site context shots.' },
      { title: 'Commercial & Brand', description: 'Campaign content for architecture, infrastructure, energy, and industrial clients. Brief-to-delivery workflow with same-day and rush options.' },
      { title: 'Film & Broadcast', description: 'Aerial second unit for film, TV, and documentary production. Full onset coordination, licensed Recce, and insurance-compliant operations.' },
      { title: 'Events & Sports', description: 'Article 16 licensed coverage over crowds. Festivals, concerts, motorsport, and corporate events. Live FPV feed to production desk available.' },
    ],
    industries: ['Property & Real Estate', 'Film & TV Production', 'Architecture & Design', 'Events & Hospitality', 'Construction & Development', 'Marketing & Advertising'],
    faqs: [
      { q: 'What is the minimum notice period for a shoot?', a: 'Standard bookings require 48 hours notice for airspace checks and NOTAM filing. Rush shoots (24 hours or less) are accommodated where airspace permits, subject to availability and a surcharge.' },
      { q: 'Can you shoot at night?', a: 'Yes. All Altitude pilots hold night operation permissions under their CAA GVC certification. We use platform lighting and thermal awareness systems for safe low-light operations.' },
      { q: 'Do you provide editing and post-production?', a: 'We deliver colour-graded, edited highlight packages alongside raw footage. Extended editing, grade matching, and motion graphics are available as add-ons — specify in your brief.' },
      { q: 'What happens if weather prevents the shoot?', a: 'If conditions are below our safe operating threshold on the scheduled day, we reschedule at no charge. We monitor forecasts 72 hours ahead and advise early if a weather hold looks likely.' },
    ],
    relatedServices: ['drone-inspection', 'events-media'],
    cta: { label: 'DISCUSS YOUR SHOOT', href: '/contact' },
  },

  {
    slug: 'surveying-mapping',
    title: 'Drone Surveying & Mapping UK',
    headline: ['SURVEYING', '& MAPPING'],
    intro: 'Millimetre-accurate topographic surveys, orthomosaic maps, and LiDAR point clouds — delivered faster and at a fraction of the cost of traditional ground survey methods.',
    metaTitle: 'Drone Surveying & Mapping UK — Altitude Drone | LiDAR & Orthomosaic',
    metaDescription: 'Professional drone surveying and mapping services across the UK. Topographic surveys, orthomosaic maps, LiDAR point clouds, 3D models, and volume calculations. CAA approved, GCP accuracy.',
    heroStat: [
      { value: '±1CM', label: 'RTK horizontal accuracy' },
      { value: '200HA', label: 'Coverage per day' },
      { value: '5 DAY', label: 'Point cloud delivery' },
    ],
    bodyHeading: 'DRONE SURVEY ACCURACY AT GROUND SURVEY SPEED',
    bodyParagraphs: [
      "Traditional topographic survey is labour-intensive, slow across large areas, and places operatives on potentially hazardous terrain. Drone surveying changes the economics of data collection entirely. A single Altitude survey flight can cover 200 hectares in a day, producing orthomosaic imagery, digital elevation models, and LiDAR point clouds to a horizontal accuracy of ±1cm when flown with Ground Control Points and RTK correction.",
      "We operate the DJI Matrice 350 RTK with Zenmuse L2 LiDAR payload for high-precision 3D capture and the Zenmuse P1 full-frame 45MP photogrammetry payload for large-area mapping. The L2 produces point clouds at densities up to 240 points/m², capturing ground returns through vegetation canopy — essential for terrain modelling in agricultural, forestry, and archaeological contexts. Outputs are delivered in standard industry formats: LAS, LAZ, GeoTIFF, DXF, and DWG.",
      "Our survey team includes a chartered surveyor — not just drone pilots. We understand the deliverables that engineers, planners, and quantity surveyors actually need. Every survey includes a full accuracy report, GCP log, and coordinate system certification. We work regularly with civil engineering firms, planning consultants, local authorities, and infrastructure contractors across the UK.",
    ],
    capabilities: [
      { title: 'Topographic Survey', description: 'Full DTM and DSM generation for site appraisal, planning applications, flood risk assessment, and engineering design. GCP-controlled to ±2cm.' },
      { title: 'Orthomosaic Mapping', description: 'Georeferenced aerial maps at 1–3cm GSD for site management, progress tracking, and as-built verification. Delivered as GeoTIFF for GIS integration.' },
      { title: 'LiDAR Point Cloud', description: 'Dense 3D point clouds for BIM, heritage recording, forestry analysis, and infrastructure corridor mapping. Vegetation penetration for true ground modelling.' },
      { title: 'Volume Calculations', description: 'Stockpile and earthworks volumetrics accurate to ±0.5% for quarry, aggregate, and construction site management. Regular monitoring packages available.' },
    ],
    industries: ['Civil Engineering', 'Planning & Architecture', 'Mining & Quarrying', 'Agriculture & Forestry', 'Rail & Highways', 'Local Authority & Heritage'],
    faqs: [
      { q: 'How does drone survey accuracy compare to traditional methods?', a: 'With RTK correction and Ground Control Points, drone surveys achieve ±1–2cm horizontal accuracy — equivalent to traditional total station survey for most engineering applications, at a fraction of the field time.' },
      { q: 'What file formats do you deliver?', a: 'Standard deliverables include GeoTIFF orthomosaics, LAS/LAZ point clouds, DEM/DTM rasters, and DXF/DWG contour files. Bespoke formats for specific software platforms are available on request.' },
      { q: 'Can you survey areas with restricted airspace?', a: 'We manage all NOTAM filings and CAA permissions for restricted and controlled airspace. Most infrastructure and urban sites can be accommodated — we advise on any constraints during the project brief stage.' },
      { q: 'How many Ground Control Points are required?', a: 'A minimum of 5 GCPs is standard for most surveys, with additional points for large or irregular site shapes. We supply GCP targets and coordinate measurement as part of the survey package.' },
    ],
    relatedServices: ['construction-monitoring', 'agricultural-surveys'],
    cta: { label: 'REQUEST A SURVEY QUOTE', href: '/contact' },
  },

  {
    slug: 'construction-monitoring',
    title: 'Construction Drone Monitoring UK',
    headline: ['CONSTRUCTION', 'MONITORING'],
    intro: 'Scheduled drone flights that keep stakeholders informed from groundworks to handover — progress reports, volumetric earthworks, time-lapse documentation, and client portal access as standard.',
    metaTitle: 'Construction Drone Monitoring UK — Altitude Drone | Progress Surveys',
    metaDescription: 'Professional construction drone monitoring across the UK. Scheduled progress flights, earthworks volumetrics, 4D time-lapse, and client portal delivery. CAA approved.',
    heroStat: [
      { value: '4D', label: 'Time-lapse documentation' },
      { value: '±0.5%', label: 'Earthworks volumetric accuracy' },
      { value: 'WEEKLY', label: 'Flight frequency available' },
    ],
    bodyHeading: 'AERIAL INTELLIGENCE FOR EVERY STAGE OF CONSTRUCTION',
    bodyParagraphs: [
      "Construction projects generate enormous volumes of decisions daily — and the best decisions are made with the most current site intelligence. A weekly drone survey flight delivers something no site walkdown or static CCTV can: a complete, georeferenced record of the site from every angle, updated on a fixed schedule, accessible to every stakeholder instantly through the client portal. Programme managers, commercial teams, and clients all see the same data.",
      "Our construction monitoring service operates on retainer — one contract covering your project from groundworks to handover. Each visit produces an orthomosaic site plan updated to the current state of works, volumetric earthworks calculations against the as-designed model, annotated progress photographs benchmarked against the programme, and an updated time-lapse sequence. Data is uploaded to your portal within 24 hours of each flight.",
      "For projects requiring BIM integration, our drone survey outputs are delivered in formats compatible with Autodesk BIM 360, Procore, and major GIS platforms. As-built verification flights at milestone stages provide an independent aerial record that protects all parties — particularly valuable for claim prevention and dispute resolution.",
    ],
    capabilities: [
      { title: 'Progress Documentation', description: 'Weekly or fortnightly site surveys producing updated orthomosaic plans, annotated progress photography, and milestone verification against programme.' },
      { title: 'Earthworks Volumetrics', description: 'Cut-and-fill calculations and stockpile measurement to ±0.5% accuracy. Compared against design model to track earthworks balance and identify over-dig.' },
      { title: '4D Time-lapse', description: 'Consistent drone vantage point across each visit builds a compelling time-lapse of the entire project lifecycle — powerful for marketing, planning, and dispute evidence.' },
      { title: 'BIM & GIS Integration', description: 'Survey outputs in DXF, IFC, and GeoTIFF formats for direct import into BIM360, Procore, ArcGIS, and AutoCAD. As-built overlays on design model included.' },
    ],
    industries: ['Main Contractors', 'Quantity Surveyors', 'Project Management Consultants', 'Developers', 'Civil Engineering', 'Infrastructure Owners'],
    faqs: [
      { q: 'How frequently do you fly construction sites?', a: 'Most clients choose weekly or fortnightly visits aligned to their progress reporting cycle. We can increase frequency for fast-moving programmes or reduce it for slower phases — all covered under the same retainer.' },
      { q: 'Can you fly over an active construction site with workers present?', a: 'Yes, with appropriate operational planning. We coordinate with the site safety team, establish exclusion zones during flight, and hold all necessary CAA permissions for operations over people and in congested areas.' },
      { q: 'Is the data delivered in time for weekly progress meetings?', a: 'Standard turnaround is 24 hours from flight. We can accommodate same-day delivery for weekly meetings where required — specify this in your brief.' },
      { q: 'Can drone monitoring help with insurance and claims?', a: 'Yes. Timestamped aerial records with GPS accuracy provide objective evidence of site conditions at any date in the project. This is increasingly used for delay analysis, variation claims, and insurance incident investigation.' },
    ],
    relatedServices: ['drone-inspection', 'surveying-mapping'],
    cta: { label: 'DISCUSS YOUR PROJECT', href: '/contact' },
  },

  {
    slug: 'thermal-imaging',
    title: 'Thermal Drone Imaging UK',
    headline: ['THERMAL', 'IMAGING'],
    intro: 'Radiometric thermal drone surveys that reveal what the eye cannot see — moisture ingress, insulation failure, electrical faults, and energy loss mapped precisely across entire structures in a single flight.',
    metaTitle: 'Thermal Drone Imaging UK — Altitude Drone | FLIR Building Surveys',
    metaDescription: 'Professional thermal drone imaging surveys across the UK. FLIR radiometric surveys for building envelopes, solar farms, electrical inspection, and insurance claims assessment. CAA approved.',
    heroStat: [
      { value: '±2°C', label: 'Radiometric accuracy' },
      { value: 'FLIR', label: 'Radiometric sensor' },
      { value: 'RICS', label: 'Compatible reporting' },
    ],
    bodyHeading: 'HEAT MAPS THAT TELL THE WHOLE STORY',
    bodyParagraphs: [
      "Thermal imaging from altitude transforms building assessment. Where a physical survey sees surface condition, a drone-mounted FLIR radiometric sensor sees temperature differentials across an entire building envelope in minutes — revealing moisture pathways behind cladding, insulation voids within flat roofs, failing seals around fenestration, and heat bridges through the structural frame. Data that would take a ground-based surveyor days to gather partially is captured completely in a single flight.",
      "We operate the FLIR Zenmuse H20T and Zenmuse XT2 radiometric thermal payloads on the DJI Matrice 350 RTK. Both produce true radiometric JPEG imagery — not just visual thermal — meaning every pixel contains a precise temperature value that can be interrogated in post-processing. This is the standard required by loss adjusters, insurance underwriters, and RICS-registered surveyors. We do not use consumer thermal sensors.",
      "Thermal drone surveys are suitable for both commercial and residential properties, solar installations, and industrial plant. Our reports are structured to support planning applications, insurance claims, energy performance assessments, and facilities management planned maintenance programmes. Every report includes annotated thermal imagery, temperature range analysis, defect priority classification, and recommended remediation notes.",
    ],
    capabilities: [
      { title: 'Building Envelope Surveys', description: 'Full roofline and facade thermal mapping for moisture ingress, insulation failure, air leakage, and heat bridge identification. Flat roof moisture mapping a speciality.' },
      { title: 'Solar Farm Audits', description: 'Cell-level fault detection across large PV arrays. Identify hotspots, bypass diode failures, soiling, delamination, and underperforming strings at scale.' },
      { title: 'Insurance & Claims', description: 'Post-incident damage assessment with timestamped radiometric evidence. Accepted by UK loss adjusters and underwriters as primary survey data.' },
      { title: 'Energy Performance', description: 'Pre-EPC and MEES compliance thermal surveys identifying areas of energy loss priority. Supports retrofit planning and SAP assessment.' },
    ],
    industries: ['Facilities Management', 'Insurance & Loss Adjustment', 'Property Investment', 'Solar Energy', 'Local Authority Housing', 'Building Consultancy'],
    faqs: [
      { q: 'What conditions are required for a thermal survey?', a: 'Best results require a minimum 10°C differential between internal and external temperature. Ideal conditions are dry, calm, overcast days or night flights. We advise on optimal scheduling during the project brief.' },
      { q: 'Is the thermal data radiometric or visual only?', a: 'All Altitude thermal surveys produce true radiometric data — each pixel contains an absolute temperature value. This is the standard required for insurance, RICS, and engineering applications. We do not use visual-only thermal sensors.' },
      { q: 'Can thermal imaging detect moisture behind cladding?', a: 'Yes, where sufficient thermal differential exists. Moisture has a higher thermal mass than air, causing distinctive temperature signatures during warming and cooling cycles. This is a primary application for building envelope assessment.' },
      { q: 'Do you supply the report for planning or insurance purposes?', a: 'Yes. Our reports are structured for use in planning applications, insurance claims, and facilities management documentation. We can produce RICS-referenced format reports where required.' },
    ],
    relatedServices: ['drone-inspection', 'agricultural-surveys'],
    cta: { label: 'REQUEST A THERMAL SURVEY', href: '/contact' },
  },

  {
    slug: 'agricultural-surveys',
    title: 'Agricultural Drone Surveys UK',
    headline: ['AGRICULTURAL', 'SURVEYS'],
    intro: 'NDVI crop health analysis, multispectral field mapping, and drainage assessment — giving landowners and agronomists the aerial intelligence to make decisions that improve yield and reduce input costs.',
    metaTitle: 'Agricultural Drone Surveys UK — Altitude Drone | NDVI & Multispectral',
    metaDescription: 'Professional agricultural drone survey services across the UK. NDVI crop health, multispectral imaging, field boundary mapping, drainage assessment, and soil variability analysis. CAA approved.',
    heroStat: [
      { value: '400HA', label: 'Coverage per day' },
      { value: 'NDVI', label: 'Multispectral analysis' },
      { value: '5CM', label: 'Ground sampling distance' },
    ],
    bodyHeading: 'PRECISION AGRICULTURE STARTS WITH PRECISION DATA',
    bodyParagraphs: [
      "UK agriculture operates under intense margin pressure. Input costs — fertiliser, crop protection, water — continue to rise while output prices remain volatile. The farms that will thrive are those that replace blanket application with precision — and precision requires data that tells you where intervention is needed, where it is not, and where the ground itself is working against you. Drone-captured multispectral data delivers exactly this, at a scale and resolution no satellite can match.",
      "We operate the DJI Mavic 3 Multispectral, a purpose-built agricultural survey drone carrying a 5-band multispectral sensor alongside an RGB camera, with an integrated sunlight sensor for automatic irradiance calibration. The system produces NDVI, NDRE, GNDVI, and CWSI maps — the indices that agronomists actually use — in a georeferenced format ready for import into John Deere Operations Center, Trimble Ag Software, and all major precision agriculture platforms.",
      "Beyond crop health, our agricultural drone surveys support drainage assessment, field boundary verification, soil variability mapping from surface indicators, and pre-application site surveys for agri-environment scheme compliance. We offer seasonal monitoring packages — regular scheduled flights aligned to your growing calendar — so you have an aerial baseline to compare against across the whole season.",
    ],
    capabilities: [
      { title: 'NDVI Crop Health Mapping', description: 'Normalised Difference Vegetation Index mapping at 5cm GSD across entire fields in a single flight. Identify stress, disease, waterlogging, and nutrient deficiency zones with precision.' },
      { title: 'Multispectral Analysis', description: '5-band multispectral capture producing NDVI, NDRE, GNDVI, and CWSI indices. Delivered as georeferenced rasters for direct import into precision agriculture platforms.' },
      { title: 'Drainage Assessment', description: 'Surface expression of drainage issues identified through visible and multispectral data. Waterlogging zones, field compaction patterns, and drainage line mapping.' },
      { title: 'Seasonal Monitoring Packages', description: 'Scheduled flights across the growing season provide a consistent aerial baseline. Compare crop development week-on-week and respond to emerging issues before yield is impacted.' },
    ],
    industries: ['Arable Farming', 'Mixed & Livestock Farming', 'Agronomy Consultancy', 'Land Management', 'Environmental Agencies', 'Rural Estate Management'],
    faqs: [
      { q: 'What crop types can be assessed with drone NDVI?', a: 'NDVI is effective for all arable crops — wheat, barley, oilseed rape, sugar beet, maize — as well as grass leys, cover crops, and horticultural production. Multispectral indices vary in effectiveness by crop type; we advise on the most appropriate indices for your specific application.' },
      { q: 'How does drone resolution compare to satellite imagery?', a: 'Our multispectral surveys achieve 5cm ground sampling distance compared to the 3–10 metre resolution of most commercial satellite products. This means we can detect individual plant stress and row-level variation that satellite imagery completely misses.' },
      { q: 'Can you survey during the growing season without damaging crops?', a: 'Drone surveys are entirely non-contact — we fly above the crop with no ground disturbance whatsoever. This makes drone survey far superior to ground-based sampling for in-season assessment of standing crops.' },
      { q: 'Do you offer seasonal monitoring contracts?', a: 'Yes. Our seasonal monitoring packages provide regular scheduled flights across the growing season at a fixed contract price. Flights are planned around key crop development stages and delivered on a consistent schedule.' },
    ],
    relatedServices: ['surveying-mapping', 'thermal-imaging'],
    cta: { label: 'ENQUIRE ABOUT AGRICULTURAL SURVEYS', href: '/contact' },
  },

  {
    slug: 'events-media',
    title: 'Events Drone Coverage UK',
    headline: ['EVENTS', '& MEDIA'],
    intro: 'Article 16 licensed aerial coverage for festivals, sports, film, and corporate events. CAA-approved for operations over crowds — with live FPV feed and same-day highlight delivery.',
    metaTitle: 'Events Drone Coverage UK — Altitude Drone | Festivals, Film & Sport',
    metaDescription: 'Professional events drone coverage across the UK. Article 16 licensed for operations over crowds. Festivals, concerts, sport, film & TV, and corporate events. Live FPV feed. Same-day delivery.',
    heroStat: [
      { value: 'A16', label: 'Article 16 licensed' },
      { value: 'LIVE', label: 'FPV feed available' },
      { value: '24H', label: 'Highlight delivery' },
    ],
    bodyHeading: 'AERIAL COVERAGE THAT MATCHES THE SCALE OF YOUR EVENT',
    bodyParagraphs: [
      "Most drone operators cannot legally fly over your event. Article 16 authorisation — the CAA permission required to operate over crowds — is held by fewer than a small fraction of UK commercial operators. Altitude holds this permission as standard. This means we can cover festivals, concerts, sporting events, and public gatherings where the vast majority of the industry has to decline or fly illegally outside the crowd boundary.",
      "For broadcast and film production, we provide a full aerial second unit service: licensed Recce, shot list development, onset coordination with the first unit, and a fully insured, broadcast-compliant operation. Our Mavic 3 Enterprise and Matrice 350 RTK platforms deliver 4K/6K footage to log profile, ready for post-production colour pipeline. Live FPV feed to a production monitor is available as standard for events requiring real-time director visibility.",
      "For corporate and brand events, we provide edited highlight packages alongside raw footage — delivered to your secure portal within 24 hours of the event. We handle all airspace permissions, NOTAM filings, venue coordination, and stakeholder notifications as part of the booking. You focus on your event. We handle everything from the sky.",
    ],
    capabilities: [
      { title: 'Festivals & Concerts', description: 'Article 16 licensed coverage over large outdoor crowds. Reveal shots, stage coverage, crowd atmosphere, and site context. Live FPV feed to production desk.' },
      { title: 'Film & TV Production', description: 'Aerial second unit service for feature film, documentary, and broadcast TV. Full onset coordination, log profile footage, and insurance-compliant operations.' },
      { title: 'Sports Events', description: 'Dynamic aerial coverage of motorsport, cycling, equestrian, and outdoor sports. Tracking shots, reveal angles, and venue atmosphere. Fast-moving subject experience.' },
      { title: 'Corporate & Brand', description: 'Aerial content for conferences, product launches, site openings, and brand campaigns. Brief-led shot lists and same-day edited delivery available.' },
    ],
    industries: ['Live Events & Festivals', 'Film & TV Production', 'Sports Organisations', 'Corporate Events', 'Marketing & Creative Agencies', 'Broadcast Media'],
    faqs: [
      { q: 'What is Article 16 authorisation and why does it matter for events?', a: 'Article 16 of UK Retained Regulation (EU) 2019/947 allows drone operators to deviate from standard rules — specifically the prohibition on flying over uninvolved people. Without this permission, a drone operator cannot legally fly over a crowd, regardless of how professional they are.' },
      { q: 'Can you provide a live video feed during the event?', a: 'Yes. Our platforms support live FPV (first-person view) feed to a monitor on the ground, allowing directors, producers, or clients to see the drone view in real-time during the event.' },
      { q: 'How far in advance do you need to book for events?', a: 'A minimum of 2 weeks is recommended for events requiring NOTAM filing and Article 16 confirmation. For events near controlled airspace or requiring specific CAA authorisation, 4 weeks is advisable.' },
      { q: 'What is included in the day rate?', a: 'Day rate covers pilot, spotter (required for Article 16 operations), platform and payload, all permits and NOTAM filing, and raw footage delivery. Edited highlight packages, colour grading, and motion graphics are available as add-ons.' },
    ],
    relatedServices: ['aerial-photography', 'drone-inspection'],
    cta: { label: 'DISCUSS YOUR EVENT', href: '/contact' },
  },
]
