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
,
  {
    slug: 'commercial-aerial-photography',
    title: 'Commercial aerial photography UK',
    headline: ["COMMERCIAL","AERIAL","PHOTOGRAPHY"],
    intro: 'Professional commercial aerial photography services tailored for Aerial photography. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Commercial aerial photography UK — Altitude Drone',
    metaDescription: 'Expert commercial aerial photography services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD COMMERCIAL AERIAL PHOTOGRAPHY',
    bodyParagraphs: [
      "When it comes to commercial aerial photography, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need commercial aerial photography that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized service, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['aerial-photography'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'property-aerial-photography',
    title: 'Property aerial photography UK',
    headline: ["PROPERTY AERIAL","PHOTOGRAPHY"],
    intro: 'Professional property aerial photography services tailored for Aerial photography. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Property aerial photography UK — Altitude Drone',
    metaDescription: 'Expert property aerial photography services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD PROPERTY AERIAL PHOTOGRAPHY',
    bodyParagraphs: [
      "When it comes to property aerial photography, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need property aerial photography that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized service, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['aerial-photography'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'development-site-photography',
    title: 'Development site photography UK',
    headline: ["DEVELOPMENT","SITE","PHOTOGRAPHY"],
    intro: 'Professional development site photography services tailored for Aerial photography. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Development site photography UK — Altitude Drone',
    metaDescription: 'Expert development site photography services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD DEVELOPMENT SITE PHOTOGRAPHY',
    bodyParagraphs: [
      "When it comes to development site photography, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need development site photography that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized service, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['aerial-photography'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'industrial-site-photography',
    title: 'Industrial site photography UK',
    headline: ["INDUSTRIAL SITE","PHOTOGRAPHY"],
    intro: 'Professional industrial site photography services tailored for Aerial photography. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Industrial site photography UK — Altitude Drone',
    metaDescription: 'Expert industrial site photography services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD INDUSTRIAL SITE PHOTOGRAPHY',
    bodyParagraphs: [
      "When it comes to industrial site photography, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need industrial site photography that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized service, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['aerial-photography'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'hotel-venue-and-leisure-aerial-photography',
    title: 'Hotel, venue and leisure aerial photography UK',
    headline: ["HOTEL, VENUE","AND LEISURE","AERIAL","PHOTOGRAPHY"],
    intro: 'Professional hotel, venue and leisure aerial photography services tailored for Aerial photography. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Hotel, venue and leisure aerial photography UK — Altitude Drone',
    metaDescription: 'Expert hotel, venue and leisure aerial photography services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD HOTEL, VENUE AND LEISURE AERIAL PHOTOGRAPHY',
    bodyParagraphs: [
      "When it comes to hotel, venue and leisure aerial photography, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need hotel, venue and leisure aerial photography that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized service, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['aerial-photography'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'estate-agent-drone-photography',
    title: 'Estate agent drone photography UK',
    headline: ["ESTATE AGENT","DRONE","PHOTOGRAPHY"],
    intro: 'Professional estate agent drone photography services tailored for Aerial photography. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Estate agent drone photography UK — Altitude Drone',
    metaDescription: 'Expert estate agent drone photography services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD ESTATE AGENT DRONE PHOTOGRAPHY',
    bodyParagraphs: [
      "When it comes to estate agent drone photography, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need estate agent drone photography that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized service, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['aerial-photography'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'land-and-farm-aerial-photography',
    title: 'Land and farm aerial photography UK',
    headline: ["LAND AND FARM","AERIAL","PHOTOGRAPHY"],
    intro: 'Professional land and farm aerial photography services tailored for Aerial photography. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Land and farm aerial photography UK — Altitude Drone',
    metaDescription: 'Expert land and farm aerial photography services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD LAND AND FARM AERIAL PHOTOGRAPHY',
    bodyParagraphs: [
      "When it comes to land and farm aerial photography, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need land and farm aerial photography that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized service, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['aerial-photography'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'marketing-campaign-drone-imagery',
    title: 'Marketing campaign drone imagery UK',
    headline: ["MARKETING","CAMPAIGN DRONE","IMAGERY"],
    intro: 'Professional marketing campaign drone imagery services tailored for Aerial photography. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Marketing campaign drone imagery UK — Altitude Drone',
    metaDescription: 'Expert marketing campaign drone imagery services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD MARKETING CAMPAIGN DRONE IMAGERY',
    bodyParagraphs: [
      "When it comes to marketing campaign drone imagery, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need marketing campaign drone imagery that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized service, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['aerial-photography'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'high-resolution-stitched-aerial-panoramas',
    title: 'High-resolution stitched aerial panoramas UK',
    headline: ["HIGH-RESOLUTION","STITCHED AERIAL","PANORAMAS"],
    intro: 'Professional high-resolution stitched aerial panoramas services tailored for Aerial photography. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'High-resolution stitched aerial panoramas UK — Altitude Drone',
    metaDescription: 'Expert high-resolution stitched aerial panoramas services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD HIGH-RESOLUTION STITCHED AERIAL PANORAMAS',
    bodyParagraphs: [
      "When it comes to high-resolution stitched aerial panoramas, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need high-resolution stitched aerial panoramas that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized service, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['aerial-photography'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'before-and-after-aerial-photography',
    title: 'Before-and-after aerial photography UK',
    headline: ["BEFORE-AND-AFTER","AERIAL","PHOTOGRAPHY"],
    intro: 'Professional before-and-after aerial photography services tailored for Aerial photography. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Before-and-after aerial photography UK — Altitude Drone',
    metaDescription: 'Expert before-and-after aerial photography services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD BEFORE-AND-AFTER AERIAL PHOTOGRAPHY',
    bodyParagraphs: [
      "When it comes to before-and-after aerial photography, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need before-and-after aerial photography that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized service, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['aerial-photography'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'website-hero-imagery',
    title: 'Website hero imagery UK',
    headline: ["WEBSITE HERO","IMAGERY"],
    intro: 'Professional website hero imagery services tailored for Aerial photography. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Website hero imagery UK — Altitude Drone',
    metaDescription: 'Expert website hero imagery services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD WEBSITE HERO IMAGERY',
    bodyParagraphs: [
      "When it comes to website hero imagery, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need website hero imagery that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized outcome, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['aerial-photography'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'brochure-imagery',
    title: 'Brochure imagery UK',
    headline: ["BROCHURE","IMAGERY"],
    intro: 'Professional brochure imagery services tailored for Aerial photography. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Brochure imagery UK — Altitude Drone',
    metaDescription: 'Expert brochure imagery services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD BROCHURE IMAGERY',
    bodyParagraphs: [
      "When it comes to brochure imagery, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need brochure imagery that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized outcome, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['aerial-photography'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'sales-packs',
    title: 'Sales packs UK',
    headline: ["SALES PACKS"],
    intro: 'Professional sales packs services tailored for Aerial photography. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Sales packs UK — Altitude Drone',
    metaDescription: 'Expert sales packs services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD SALES PACKS',
    bodyParagraphs: [
      "When it comes to sales packs, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need sales packs that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized outcome, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['aerial-photography'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'investor-packs',
    title: 'Investor packs UK',
    headline: ["INVESTOR PACKS"],
    intro: 'Professional investor packs services tailored for Aerial photography. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Investor packs UK — Altitude Drone',
    metaDescription: 'Expert investor packs services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD INVESTOR PACKS',
    bodyParagraphs: [
      "When it comes to investor packs, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need investor packs that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized outcome, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['aerial-photography'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'planning-consultation-visuals',
    title: 'Planning consultation visuals UK',
    headline: ["PLANNING","CONSULTATION","VISUALS"],
    intro: 'Professional planning consultation visuals services tailored for Aerial photography. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Planning consultation visuals UK — Altitude Drone',
    metaDescription: 'Expert planning consultation visuals services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD PLANNING CONSULTATION VISUALS',
    bodyParagraphs: [
      "When it comes to planning consultation visuals, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need planning consultation visuals that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized outcome, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['aerial-photography'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'social-media-image-sets',
    title: 'Social media image sets UK',
    headline: ["SOCIAL MEDIA","IMAGE SETS"],
    intro: 'Professional social media image sets services tailored for Aerial photography. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Social media image sets UK — Altitude Drone',
    metaDescription: 'Expert social media image sets services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD SOCIAL MEDIA IMAGE SETS',
    bodyParagraphs: [
      "When it comes to social media image sets, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need social media image sets that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized outcome, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['aerial-photography'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: '360-aerial-panoramas',
    title: '360° aerial panoramas UK',
    headline: ["360° AERIAL","PANORAMAS"],
    intro: 'Professional 360° aerial panoramas services tailored for Aerial photography. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: '360° aerial panoramas UK — Altitude Drone',
    metaDescription: 'Expert 360° aerial panoramas services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD 360° AERIAL PANORAMAS',
    bodyParagraphs: [
      "When it comes to 360° aerial panoramas, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need 360° aerial panoramas that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized outcome, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['aerial-photography'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'print-ready-high-resolution-stills',
    title: 'Print-ready high-resolution stills UK',
    headline: ["PRINT-READY","HIGH-RESOLUTION","STILLS"],
    intro: 'Professional print-ready high-resolution stills services tailored for Aerial photography. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Print-ready high-resolution stills UK — Altitude Drone',
    metaDescription: 'Expert print-ready high-resolution stills services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD PRINT-READY HIGH-RESOLUTION STILLS',
    bodyParagraphs: [
      "When it comes to print-ready high-resolution stills, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need print-ready high-resolution stills that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized outcome, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['aerial-photography'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'location-overview-imagery',
    title: 'Location overview imagery UK',
    headline: ["LOCATION","OVERVIEW","IMAGERY"],
    intro: 'Professional location overview imagery services tailored for Aerial photography. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Location overview imagery UK — Altitude Drone',
    metaDescription: 'Expert location overview imagery services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD LOCATION OVERVIEW IMAGERY',
    bodyParagraphs: [
      "When it comes to location overview imagery, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need location overview imagery that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized outcome, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['aerial-photography'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'commercial-drone-videography',
    title: 'Commercial drone videography UK',
    headline: ["COMMERCIAL","DRONE","VIDEOGRAPHY"],
    intro: 'Professional commercial drone videography services tailored for Drone videography and film. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Commercial drone videography UK — Altitude Drone',
    metaDescription: 'Expert commercial drone videography services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD COMMERCIAL DRONE VIDEOGRAPHY',
    bodyParagraphs: [
      "When it comes to commercial drone videography, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need commercial drone videography that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized service, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['drone-videography-and-film'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'property-drone-video',
    title: 'Property drone video UK',
    headline: ["PROPERTY DRONE","VIDEO"],
    intro: 'Professional property drone video services tailored for Drone videography and film. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Property drone video UK — Altitude Drone',
    metaDescription: 'Expert property drone video services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD PROPERTY DRONE VIDEO',
    bodyParagraphs: [
      "When it comes to property drone video, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need property drone video that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized service, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['drone-videography-and-film'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'construction-project-video',
    title: 'Construction project video UK',
    headline: ["CONSTRUCTION","PROJECT VIDEO"],
    intro: 'Professional construction project video services tailored for Drone videography and film. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Construction project video UK — Altitude Drone',
    metaDescription: 'Expert construction project video services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD CONSTRUCTION PROJECT VIDEO',
    bodyParagraphs: [
      "When it comes to construction project video, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need construction project video that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized service, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['drone-videography-and-film'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'corporate-drone-filming',
    title: 'Corporate drone filming UK',
    headline: ["CORPORATE DRONE","FILMING"],
    intro: 'Professional corporate drone filming services tailored for Drone videography and film. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Corporate drone filming UK — Altitude Drone',
    metaDescription: 'Expert corporate drone filming services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD CORPORATE DRONE FILMING',
    bodyParagraphs: [
      "When it comes to corporate drone filming, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need corporate drone filming that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized service, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['drone-videography-and-film'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'industrial-drone-filming',
    title: 'Industrial drone filming UK',
    headline: ["INDUSTRIAL","DRONE FILMING"],
    intro: 'Professional industrial drone filming services tailored for Drone videography and film. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Industrial drone filming UK — Altitude Drone',
    metaDescription: 'Expert industrial drone filming services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD INDUSTRIAL DRONE FILMING',
    bodyParagraphs: [
      "When it comes to industrial drone filming, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need industrial drone filming that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized service, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['drone-videography-and-film'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'event-drone-filming',
    title: 'Event drone filming UK',
    headline: ["EVENT DRONE","FILMING"],
    intro: 'Professional event drone filming services tailored for Drone videography and film. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Event drone filming UK — Altitude Drone',
    metaDescription: 'Expert event drone filming services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD EVENT DRONE FILMING',
    bodyParagraphs: [
      "When it comes to event drone filming, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need event drone filming that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized service, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['drone-videography-and-film'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'tourism-and-hospitality-drone-video',
    title: 'Tourism and hospitality drone video UK',
    headline: ["TOURISM AND","HOSPITALITY","DRONE VIDEO"],
    intro: 'Professional tourism and hospitality drone video services tailored for Drone videography and film. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Tourism and hospitality drone video UK — Altitude Drone',
    metaDescription: 'Expert tourism and hospitality drone video services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD TOURISM AND HOSPITALITY DRONE VIDEO',
    bodyParagraphs: [
      "When it comes to tourism and hospitality drone video, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need tourism and hospitality drone video that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized service, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['drone-videography-and-film'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'vehicle-tracking-drone-footage',
    title: 'Vehicle tracking drone footage UK',
    headline: ["VEHICLE","TRACKING DRONE","FOOTAGE"],
    intro: 'Professional vehicle tracking drone footage services tailored for Drone videography and film. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Vehicle tracking drone footage UK — Altitude Drone',
    metaDescription: 'Expert vehicle tracking drone footage services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD VEHICLE TRACKING DRONE FOOTAGE',
    bodyParagraphs: [
      "When it comes to vehicle tracking drone footage, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need vehicle tracking drone footage that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized service, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['drone-videography-and-film'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'brand-campaign-aerial-filming',
    title: 'Brand campaign aerial filming UK',
    headline: ["BRAND CAMPAIGN","AERIAL FILMING"],
    intro: 'Professional brand campaign aerial filming services tailored for Drone videography and film. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Brand campaign aerial filming UK — Altitude Drone',
    metaDescription: 'Expert brand campaign aerial filming services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD BRAND CAMPAIGN AERIAL FILMING',
    bodyParagraphs: [
      "When it comes to brand campaign aerial filming, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need brand campaign aerial filming that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized service, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['drone-videography-and-film'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'social-media-drone-content',
    title: 'Social media drone content UK',
    headline: ["SOCIAL MEDIA","DRONE CONTENT"],
    intro: 'Professional social media drone content services tailored for Drone videography and film. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Social media drone content UK — Altitude Drone',
    metaDescription: 'Expert social media drone content services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD SOCIAL MEDIA DRONE CONTENT',
    bodyParagraphs: [
      "When it comes to social media drone content, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need social media drone content that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized service, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['drone-videography-and-film'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: '30-second-social-clips',
    title: '30-second social clips UK',
    headline: ["30-SECOND","SOCIAL CLIPS"],
    intro: 'Professional 30-second social clips services tailored for Drone videography and film. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: '30-second social clips UK — Altitude Drone',
    metaDescription: 'Expert 30-second social clips services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD 30-SECOND SOCIAL CLIPS',
    bodyParagraphs: [
      "When it comes to 30-second social clips, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need 30-second social clips that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized outcome, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['drone-videography-and-film'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: '60-second-brand-films',
    title: '60-second brand films UK',
    headline: ["60-SECOND BRAND","FILMS"],
    intro: 'Professional 60-second brand films services tailored for Drone videography and film. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: '60-second brand films UK — Altitude Drone',
    metaDescription: 'Expert 60-second brand films services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD 60-SECOND BRAND FILMS',
    bodyParagraphs: [
      "When it comes to 60-second brand films, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need 60-second brand films that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized outcome, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['drone-videography-and-film'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'full-length-project-showcase-videos',
    title: 'Full-length project showcase videos UK',
    headline: ["FULL-LENGTH","PROJECT","SHOWCASE VIDEOS"],
    intro: 'Professional full-length project showcase videos services tailored for Drone videography and film. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Full-length project showcase videos UK — Altitude Drone',
    metaDescription: 'Expert full-length project showcase videos services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD FULL-LENGTH PROJECT SHOWCASE VIDEOS',
    bodyParagraphs: [
      "When it comes to full-length project showcase videos, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need full-length project showcase videos that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized outcome, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['drone-videography-and-film'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'website-background-video-loops',
    title: 'Website background video loops UK',
    headline: ["WEBSITE","BACKGROUND","VIDEO LOOPS"],
    intro: 'Professional website background video loops services tailored for Drone videography and film. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Website background video loops UK — Altitude Drone',
    metaDescription: 'Expert website background video loops services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD WEBSITE BACKGROUND VIDEO LOOPS',
    bodyParagraphs: [
      "When it comes to website background video loops, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need website background video loops that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized outcome, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['drone-videography-and-film'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'property-reveal-videos',
    title: 'Property reveal videos UK',
    headline: ["PROPERTY REVEAL","VIDEOS"],
    intro: 'Professional property reveal videos services tailored for Drone videography and film. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Property reveal videos UK — Altitude Drone',
    metaDescription: 'Expert property reveal videos services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD PROPERTY REVEAL VIDEOS',
    bodyParagraphs: [
      "When it comes to property reveal videos, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need property reveal videos that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized outcome, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['drone-videography-and-film'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'investor-update-films',
    title: 'Investor update films UK',
    headline: ["INVESTOR UPDATE","FILMS"],
    intro: 'Professional investor update films services tailored for Drone videography and film. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Investor update films UK — Altitude Drone',
    metaDescription: 'Expert investor update films services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD INVESTOR UPDATE FILMS',
    bodyParagraphs: [
      "When it comes to investor update films, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need investor update films that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized outcome, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['drone-videography-and-film'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'drone-only-footage-packs',
    title: 'Drone-only footage packs UK',
    headline: ["DRONE-ONLY","FOOTAGE PACKS"],
    intro: 'Professional drone-only footage packs services tailored for Drone videography and film. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Drone-only footage packs UK — Altitude Drone',
    metaDescription: 'Expert drone-only footage packs services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD DRONE-ONLY FOOTAGE PACKS',
    bodyParagraphs: [
      "When it comes to drone-only footage packs, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need drone-only footage packs that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized outcome, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['drone-videography-and-film'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'edited-promotional-videos',
    title: 'Edited promotional videos UK',
    headline: ["EDITED","PROMOTIONAL","VIDEOS"],
    intro: 'Professional edited promotional videos services tailored for Drone videography and film. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Edited promotional videos UK — Altitude Drone',
    metaDescription: 'Expert edited promotional videos services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD EDITED PROMOTIONAL VIDEOS',
    bodyParagraphs: [
      "When it comes to edited promotional videos, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need edited promotional videos that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized outcome, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['drone-videography-and-film'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'raw-footage-archive',
    title: 'Raw footage archive UK',
    headline: ["RAW FOOTAGE","ARCHIVE"],
    intro: 'Professional raw footage archive services tailored for Drone videography and film. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Raw footage archive UK — Altitude Drone',
    metaDescription: 'Expert raw footage archive services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD RAW FOOTAGE ARCHIVE',
    bodyParagraphs: [
      "When it comes to raw footage archive, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need raw footage archive that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized outcome, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['drone-videography-and-film'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'social-first-reels-and-shorts',
    title: 'Social-first reels and shorts UK',
    headline: ["SOCIAL-FIRST","REELS AND","SHORTS"],
    intro: 'Professional social-first reels and shorts services tailored for Drone videography and film. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Social-first reels and shorts UK — Altitude Drone',
    metaDescription: 'Expert social-first reels and shorts services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD SOCIAL-FIRST REELS AND SHORTS',
    bodyParagraphs: [
      "When it comes to social-first reels and shorts, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need social-first reels and shorts that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized outcome, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['drone-videography-and-film'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'drone-roof-inspections',
    title: 'Drone roof inspections UK',
    headline: ["DRONE ROOF","INSPECTIONS"],
    intro: 'Professional drone roof inspections services tailored for Roof inspections. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Drone roof inspections UK — Altitude Drone',
    metaDescription: 'Expert drone roof inspections services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD DRONE ROOF INSPECTIONS',
    bodyParagraphs: [
      "When it comes to drone roof inspections, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need drone roof inspections that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized service, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['roof-inspections'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'commercial-roof-surveys',
    title: 'Commercial roof surveys UK',
    headline: ["COMMERCIAL ROOF","SURVEYS"],
    intro: 'Professional commercial roof surveys services tailored for Roof inspections. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Commercial roof surveys UK — Altitude Drone',
    metaDescription: 'Expert commercial roof surveys services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD COMMERCIAL ROOF SURVEYS',
    bodyParagraphs: [
      "When it comes to commercial roof surveys, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need commercial roof surveys that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized service, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['roof-inspections'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'industrial-roof-inspections',
    title: 'Industrial roof inspections UK',
    headline: ["INDUSTRIAL ROOF","INSPECTIONS"],
    intro: 'Professional industrial roof inspections services tailored for Roof inspections. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Industrial roof inspections UK — Altitude Drone',
    metaDescription: 'Expert industrial roof inspections services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD INDUSTRIAL ROOF INSPECTIONS',
    bodyParagraphs: [
      "When it comes to industrial roof inspections, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need industrial roof inspections that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized service, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['roof-inspections'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'flat-roof-drone-inspections',
    title: 'Flat roof drone inspections UK',
    headline: ["FLAT ROOF DRONE","INSPECTIONS"],
    intro: 'Professional flat roof drone inspections services tailored for Roof inspections. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Flat roof drone inspections UK — Altitude Drone',
    metaDescription: 'Expert flat roof drone inspections services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD FLAT ROOF DRONE INSPECTIONS',
    bodyParagraphs: [
      "When it comes to flat roof drone inspections, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need flat roof drone inspections that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized service, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['roof-inspections'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'gutter-and-drainage-drone-inspections',
    title: 'Gutter and drainage drone inspections UK',
    headline: ["GUTTER AND","DRAINAGE DRONE","INSPECTIONS"],
    intro: 'Professional gutter and drainage drone inspections services tailored for Roof inspections. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Gutter and drainage drone inspections UK — Altitude Drone',
    metaDescription: 'Expert gutter and drainage drone inspections services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD GUTTER AND DRAINAGE DRONE INSPECTIONS',
    bodyParagraphs: [
      "When it comes to gutter and drainage drone inspections, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need gutter and drainage drone inspections that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized service, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['roof-inspections'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'storm-damage-roof-inspection',
    title: 'Storm damage roof inspection UK',
    headline: ["STORM DAMAGE","ROOF INSPECTION"],
    intro: 'Professional storm damage roof inspection services tailored for Roof inspections. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Storm damage roof inspection UK — Altitude Drone',
    metaDescription: 'Expert storm damage roof inspection services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD STORM DAMAGE ROOF INSPECTION',
    bodyParagraphs: [
      "When it comes to storm damage roof inspection, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need storm damage roof inspection that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized service, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['roof-inspections'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'dilapidation-roof-survey-support',
    title: 'Dilapidation roof survey support UK',
    headline: ["DILAPIDATION","ROOF SURVEY","SUPPORT"],
    intro: 'Professional dilapidation roof survey support services tailored for Roof inspections. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Dilapidation roof survey support UK — Altitude Drone',
    metaDescription: 'Expert dilapidation roof survey support services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD DILAPIDATION ROOF SURVEY SUPPORT',
    bodyParagraphs: [
      "When it comes to dilapidation roof survey support, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need dilapidation roof survey support that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized service, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['roof-inspections'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'planned-maintenance-roof-inspections',
    title: 'Planned maintenance roof inspections UK',
    headline: ["PLANNED","MAINTENANCE","ROOF","INSPECTIONS"],
    intro: 'Professional planned maintenance roof inspections services tailored for Roof inspections. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Planned maintenance roof inspections UK — Altitude Drone',
    metaDescription: 'Expert planned maintenance roof inspections services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD PLANNED MAINTENANCE ROOF INSPECTIONS',
    bodyParagraphs: [
      "When it comes to planned maintenance roof inspections, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need planned maintenance roof inspections that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized service, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['roof-inspections'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'listed-building-roof-inspections',
    title: 'Listed building roof inspections UK',
    headline: ["LISTED BUILDING","ROOF","INSPECTIONS"],
    intro: 'Professional listed building roof inspections services tailored for Roof inspections. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Listed building roof inspections UK — Altitude Drone',
    metaDescription: 'Expert listed building roof inspections services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD LISTED BUILDING ROOF INSPECTIONS',
    bodyParagraphs: [
      "When it comes to listed building roof inspections, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need listed building roof inspections that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized service, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['roof-inspections'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'insurance-roof-inspection-evidence',
    title: 'Insurance roof inspection evidence UK',
    headline: ["INSURANCE ROOF","INSPECTION","EVIDENCE"],
    intro: 'Professional insurance roof inspection evidence services tailored for Roof inspections. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Insurance roof inspection evidence UK — Altitude Drone',
    metaDescription: 'Expert insurance roof inspection evidence services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD INSURANCE ROOF INSPECTION EVIDENCE',
    bodyParagraphs: [
      "When it comes to insurance roof inspection evidence, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need insurance roof inspection evidence that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized service, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['roof-inspections'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'high-resolution-roof-condition-report',
    title: 'High-resolution roof condition report UK',
    headline: ["HIGH-RESOLUTION","ROOF CONDITION","REPORT"],
    intro: 'Professional high-resolution roof condition report services tailored for Roof inspections. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'High-resolution roof condition report UK — Altitude Drone',
    metaDescription: 'Expert high-resolution roof condition report services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD HIGH-RESOLUTION ROOF CONDITION REPORT',
    bodyParagraphs: [
      "When it comes to high-resolution roof condition report, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need high-resolution roof condition report that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized outcome, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['roof-inspections'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'annotated-defect-images',
    title: 'Annotated defect images UK',
    headline: ["ANNOTATED","DEFECT IMAGES"],
    intro: 'Professional annotated defect images services tailored for Roof inspections. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Annotated defect images UK — Altitude Drone',
    metaDescription: 'Expert annotated defect images services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD ANNOTATED DEFECT IMAGES',
    bodyParagraphs: [
      "When it comes to annotated defect images, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need annotated defect images that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized outcome, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['roof-inspections'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'pdf-inspection-report',
    title: 'PDF inspection report UK',
    headline: ["PDF INSPECTION","REPORT"],
    intro: 'Professional pdf inspection report services tailored for Roof inspections. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'PDF inspection report UK — Altitude Drone',
    metaDescription: 'Expert pdf inspection report services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD PDF INSPECTION REPORT',
    bodyParagraphs: [
      "When it comes to pdf inspection report, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need pdf inspection report that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized outcome, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['roof-inspections'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'defect-schedule',
    title: 'Defect schedule UK',
    headline: ["DEFECT SCHEDULE"],
    intro: 'Professional defect schedule services tailored for Roof inspections. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Defect schedule UK — Altitude Drone',
    metaDescription: 'Expert defect schedule services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD DEFECT SCHEDULE',
    bodyParagraphs: [
      "When it comes to defect schedule, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need defect schedule that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized outcome, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['roof-inspections'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'gutter-blockage-evidence',
    title: 'Gutter/blockage evidence UK',
    headline: ["GUTTER/BLOCKAGE","EVIDENCE"],
    intro: 'Professional gutter/blockage evidence services tailored for Roof inspections. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Gutter/blockage evidence UK — Altitude Drone',
    metaDescription: 'Expert gutter/blockage evidence services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD GUTTER/BLOCKAGE EVIDENCE',
    bodyParagraphs: [
      "When it comes to gutter/blockage evidence, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need gutter/blockage evidence that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized outcome, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['roof-inspections'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'before-and-after-repair-evidence',
    title: 'Before-and-after repair evidence UK',
    headline: ["BEFORE-AND-AFTER","REPAIR EVIDENCE"],
    intro: 'Professional before-and-after repair evidence services tailored for Roof inspections. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Before-and-after repair evidence UK — Altitude Drone',
    metaDescription: 'Expert before-and-after repair evidence services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD BEFORE-AND-AFTER REPAIR EVIDENCE',
    bodyParagraphs: [
      "When it comes to before-and-after repair evidence, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need before-and-after repair evidence that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized outcome, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['roof-inspections'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'insurance-claim-evidence-pack',
    title: 'Insurance claim evidence pack UK',
    headline: ["INSURANCE CLAIM","EVIDENCE PACK"],
    intro: 'Professional insurance claim evidence pack services tailored for Roof inspections. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Insurance claim evidence pack UK — Altitude Drone',
    metaDescription: 'Expert insurance claim evidence pack services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD INSURANCE CLAIM EVIDENCE PACK',
    bodyParagraphs: [
      "When it comes to insurance claim evidence pack, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need insurance claim evidence pack that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized outcome, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['roof-inspections'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'maintenance-planning-pack',
    title: 'Maintenance planning pack UK',
    headline: ["MAINTENANCE","PLANNING PACK"],
    intro: 'Professional maintenance planning pack services tailored for Roof inspections. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Maintenance planning pack UK — Altitude Drone',
    metaDescription: 'Expert maintenance planning pack services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD MAINTENANCE PLANNING PACK',
    bodyParagraphs: [
      "When it comes to maintenance planning pack, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need maintenance planning pack that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized outcome, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['roof-inspections'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  },
  {
    slug: 'access-risk-reduction',
    title: 'Access-risk reduction UK',
    headline: ["ACCESS-RISK","REDUCTION"],
    intro: 'Professional access-risk reduction services tailored for Roof inspections. Delivered with precision, speed, and full CAA compliance.',
    metaTitle: 'Access-risk reduction UK — Altitude Drone',
    metaDescription: 'Expert access-risk reduction services. Fully insured and CAA-approved operations delivering actionable intelligence and premium media.',
    heroStat: [
      { value: '4K', label: 'Ultra HD' },
      { value: '24H', label: 'Turnaround' },
      { value: 'CAA', label: 'Approved' },
    ],
    bodyHeading: 'ELEVATING STANDARD ACCESS-RISK REDUCTION',
    bodyParagraphs: [
      "When it comes to access-risk reduction, standard consumer methods fall short. Altitude Drone brings commercial-grade rigor and advanced sensor technology to every flight.",
      "We understand that our clients require more than just raw data. They need access-risk reduction that integrates seamlessly into their workflows, whether for marketing, engineering, or compliance.",
      "By choosing our specialized outcome, you ensure that you receive exactly the right deliverable, backed by £10M public liability insurance and professional standards."
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Available for fast turnaround across the UK.' },
      { title: 'High Precision', description: 'Captured using industry-leading DJI Enterprise platforms.' },
      { title: 'Fully Insured', description: 'Comprehensive £10M public liability coverage.' },
      { title: 'Secure Delivery', description: 'Data delivered via secure client portal.' }
    ],
    industries: ['Commercial', 'Property', 'Construction', 'Marketing'],
    faqs: [
      { q: 'How quickly can you deliver?', a: 'Standard turnaround is 24-48 hours depending on the scope.' },
      { q: 'Are you fully insured?', a: 'Yes, we carry £10M public liability insurance for all operations.' },
      { q: 'Do you operate nationwide?', a: 'Yes, our network allows us to provide coverage across the entire UK.' },
      { q: 'What is the booking process?', a: 'Simply submit a project brief via our site and we will return a quote same-day.' }
    ],
    relatedServices: ['roof-inspections'],
    cta: { label: 'REQUEST A QUOTE', href: '/contact' }
  }
]
