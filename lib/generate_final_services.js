const services = [
  {
    slug: 'infrastructure-inspections',
    title: 'Infrastructure Drone Inspections UK',
    headline: ['INFRASTRUCTURE', 'INSPECTIONS'],
    category: 'Infrastructure & Energy',
    intro: 'High-detail aerial inspections for bridges, masts, rail, and highways — providing critical asset visibility while eliminating the need for high-risk manual access.',
    metaTitle: 'Infrastructure Drone Inspections UK | Bridge & Mast Surveys | Altitude Hire',
    metaDescription: 'Professional drone inspections for infrastructure assets. Bridge, rail, telecom and highway corridor surveys. CAA approved, high-detail reporting.',
    heroStat: [
      { value: 'ZERO', label: 'Access risk' },
      { value: '4K', label: 'Ultra HD detail' },
      { value: 'GVC', label: 'Certified pilots' }
    ],
    problemStatement: 'Infrastructure assets often require inspection in high-risk environments — over water, near live rail, or at extreme height. Traditional methods involving rope access or under-bridge units are costly and disruptive. Drone inspection delivers high-resolution visual and thermal evidence without the need for line-of-route closures or operative risk.',
    whatWeCapture: [
      'Deck soffit and pier condition',
      'Expansion joint detail',
      'Telecom mast and antenna arrays',
      'Rail corridor condition',
      'Highway surface and drainage',
      'High-level masonry and structural joints'
    ],
    deliverables: [
      'High-resolution visual record',
      'Annotated defect images',
      'Asset condition summary',
      'Thermal inspection data',
      'Bridge/structure detail pack'
    ],
    useCases: [
      { title: 'Bridge Inspection', description: 'Detailed visual checks of soffits, bearings, and piers without lane closures.' },
      { title: 'Telecom Masts', description: 'Inspecting antenna condition and alignment from a safe distance.' },
      { title: 'Rail & Highway', description: 'Monitoring corridor condition and vegetation encroachment at scale.' }
    ],
    capabilities: [
      { title: 'Zoom Payloads', description: '23x optical zoom for detailed inspection from safe standoff distances.' },
      { title: 'Thermal Assessment', description: 'Identifying moisture or structural anomalies in concrete and masonry.' }
    ],
    industries: ['Infrastructure Owners', 'Local Authorities', 'Rail Operators', 'Highways Maintenance'],
    faqs: [
      { q: 'Can drones inspect bridge soffits?', a: 'Yes, using upward-facing gimbals, we can capture high-detail imagery of deck undersides.' },
      { q: 'What is the risk to live rail or roads?', a: 'We operate under strict risk assessments and coordinate with stakeholders to ensure zero disruption.' },
      { q: 'Can you provide timestamped evidence for claims?', a: 'Yes, every image is metadata-rich with GPS and time synchronisation.' }
    ],
    relatedServices: ['utilities-energy-inspections', 'surveying-mapping', 'thermal-imaging'],
    cta: { label: 'DISCUSS INFRASTRUCTURE CAPTURE', href: '/contact' }
  },
  {
    slug: 'utilities-energy-inspections',
    title: 'Utilities & Energy Drone Inspections UK',
    headline: ['UTILITIES', '& ENERGY'],
    category: 'Infrastructure & Energy',
    intro: 'Specialist aerial inspection for powerlines, pylons, substations, and energy assets — improving grid reliability and safety through advanced sensor technology.',
    metaTitle: 'Utilities & Energy Drone Inspections UK | Powerline & Pylon Surveys',
    metaDescription: 'Professional drone inspections for utilities and energy infrastructure. Powerline, pylon and substation surveys. CAA approved, radiometric thermal data.',
    heroStat: [
      { value: 'NO', label: 'Outage required' },
      { value: '±2°C', label: 'Thermal accuracy' },
      { value: '23X', label: 'Optical zoom' }
    ],
    problemStatement: 'Inspecting high-voltage energy assets traditionally requires expensive outages and puts personnel at risk. Drones allow for the inspection of pylons, conductors, and insulators while the grid remains live, identifying hotspots and mechanical failures before they lead to service interruption.',
    whatWeCapture: [
      'Insulator condition and contamination',
      'Conductor surface integrity',
      'Tower structural condition',
      'Substation asset thermal signatures',
      'Vegetation clearance along corridors',
      'Pipeline surface condition'
    ],
    deliverables: [
      'High-detail pylon inspection pack',
      'Radiometric thermal data',
      'Anomaly detection report',
      'Corridor vegetation map',
      'Substation condition summary'
    ],
    useCases: [
      { title: 'Powerline Inspection', description: 'Monitoring pylon and line condition without requiring circuit outages.' },
      { title: 'Substation Monitoring', description: 'Thermal audits of transformers and switches to detect overheating components.' },
      { title: 'Corridor Mapping', description: 'Ensuring safe distances between infrastructure and surrounding vegetation.' }
    ],
    capabilities: [
      { title: 'Thermal Radiometry', description: 'Detecting resistive heating in electrical components with FLIR sensors.' },
      { title: 'Multi-Sensor Payloads', description: 'Simultaneous visual and thermal capture for comprehensive assessment.' }
    ],
    industries: ['Energy Networks', 'Utility Providers', 'Renewable Energy Developers', 'Asset Managers'],
    faqs: [
      { q: 'Can drones fly near high-voltage lines?', a: 'Yes, our enterprise drones are shielded and we maintain safe standoff distances using zoom sensors.' },
      { q: 'Is an outage required for the inspection?', a: 'Typically no, drone inspections are designed to be completed while assets are live.' },
      { q: 'How do you detect hotspots?', a: 'We use high-resolution radiometric thermal sensors that measure absolute temperature differentials.' }
    ],
    relatedServices: ['solar-panel-inspections', 'infrastructure-inspections', 'thermal-imaging'],
    cta: { label: 'INSPECT ENERGY ASSETS', href: '/contact' }
  },
  {
    slug: 'solar-panel-inspections',
    title: 'Solar Panel Drone Inspections UK',
    headline: ['SOLAR PANEL', 'INSPECTIONS'],
    category: 'Infrastructure & Energy',
    intro: 'Efficiency-focused thermal audits for commercial PV arrays and solar farms — identifying cell-level faults and underperforming strings at scale.',
    metaTitle: 'Solar Panel Drone Inspections UK | Thermal PV Audits | Altitude Hire',
    metaDescription: 'Professional solar panel drone inspections. Thermal cell-level fault detection, string audits and anomaly reporting. CAA approved, IEC compliant reporting.',
    heroStat: [
      { value: '100%', label: 'Array coverage' },
      { value: 'CELL', label: 'Level detail' },
      { value: 'FAST', label: 'Large-scale audit' }
    ],
    problemStatement: 'Manual solar inspection is slow, incomplete, and often only covers a fraction of the array. Drone thermal imaging allows for the rapid inspection of thousands of panels in a single flight, identifying cell-level hotspots, bypass diode failures, and string anomalies that are invisible to the naked eye.',
    whatWeCapture: [
      'Radiometric thermal imagery of every panel',
      'String-level temperature variations',
      'Cell-level hotspots and hotspots',
      'Mechanical damage and soiling',
      'Inverter and transformer thermal data',
      'Mounting structure condition'
    ],
    deliverables: [
      'IEC-compliant thermal report',
      'Interactive fault map',
      'Prioritised maintenance list',
      'Radiometric dataset',
      'High-resolution visual record'
    ],
    useCases: [
      { title: 'Commissioning Audits', description: 'Ensuring new arrays are performing to specification before handover.' },
      { title: 'Annual Performance Review', description: 'Maintaining peak efficiency across large commercial solar portfolios.' },
      { title: 'Warranty Claims', description: 'Providing objective evidence of panel failure for manufacturer claims.' }
    ],
    capabilities: [
      { title: 'Thermal Mapping', description: 'Creating a georeferenced thermal map of the entire solar farm.' },
      { title: 'AI Fault Detection', description: 'Automated identification of common PV anomalies across large datasets.' }
    ],
    industries: ['Solar Farm Operators', 'Asset Managers', 'Commercial Landlords', 'O&M Providers'],
    faqs: [
      { q: 'How many panels can you inspect in a day?', a: 'We can typically cover 5-10MW of solar capacity per day depending on site layout.' },
      { q: 'What conditions are needed for solar inspection?', a: 'Ideally clear skies and high solar irradiance (minimum 600W/m²) for accurate thermal signatures.' },
      { q: 'Can you identify cell-level faults?', a: 'Yes, our high-resolution thermal sensors can detect individual failing cells within a panel.' }
    ],
    relatedServices: ['utilities-energy-inspections', 'thermal-imaging', 'infrastructure-inspections'],
    cta: { label: 'AUDIT SOLAR PERFORMANCE', href: '/contact' }
  },
  {
    slug: 'volumetric-surveys',
    title: 'Volumetric Drone Surveys UK',
    headline: ['VOLUMETRIC', 'SURVEYS'],
    category: 'Construction & Surveying',
    intro: 'Accurate stockpile and earthworks volume measurements for construction, quarries, and aggregate sites — delivered with ±0.5% precision.',
    metaTitle: 'Volumetric Drone Surveys UK | Stockpile & Earthworks | Altitude Hire',
    metaDescription: 'Professional volumetric drone surveys for quarries, construction and aggregate sites. Accurate stockpile measurements and cut/fill analysis. CAA approved.',
    heroStat: [
      { value: '±0.5%', label: 'Typical accuracy' },
      { value: '24H', label: 'Report delivery' },
      { value: 'SAFE', label: 'No stockpiling climbing' }
    ],
    problemStatement: 'Traditional stockpile measurement is slow, often inaccurate, and requires personnel to climb hazardous material piles. Drone-based volumetrics use high-density 3D mapping to calculate volumes across an entire site in minutes, providing commercial teams with accurate stock data without the risk.',
    whatWeCapture: [
      'High-density 3D site mapping',
      'Individual stockpile profiles',
      'Base-level surface data',
      'Cut and fill earthworks progress',
      'Site topographic baseline'
    ],
    deliverables: [
      'Stockpile volume report',
      'Cut and fill calculation',
      '3D site mesh model',
      'Orthomosaic site plan',
      'CSV volume data export'
    ],
    useCases: [
      { title: 'Quarry Management', description: 'Monthly stock audits for financial reporting and planning.' },
      { title: 'Earthworks Progress', description: 'Tracking material movement on large construction or infrastructure projects.' },
      { title: 'Aggregate Stock Audits', description: 'Verifying physical stock against commercial records for developers and contractors.' }
    ],
    capabilities: [
      { title: 'Precision Volumetrics', description: 'Calculating volumes using high-density 3D point cloud data.' },
      { title: 'Comparative Analysis', description: 'Comparing site state across multiple visits to track material change.' }
    ],
    industries: ['Quarrying & Mining', 'Main Contractors', 'Earthworks Contractors', 'Aggregate Suppliers'],
    faqs: [
      { q: 'How accurate are drone volume surveys?', a: 'We typically achieve within 0.5% - 1% of total volume when compared to traditional survey methods.' },
      { q: 'What materials can be measured?', a: 'Any bulk material including gravel, sand, topsoil, aggregates, and waste.' },
      { q: 'How often can you provide measurements?', a: 'Many clients choose monthly or quarterly audits to align with commercial cycles.' }
    ],
    relatedServices: ['stockpile-volume-surveys', 'cut-fill-analysis', 'surveying-mapping'],
    cta: { label: 'REQUEST VOLUME AUDIT', href: '/contact' }
  },
  {
    slug: 'stockpile-volume-surveys',
    title: 'Stockpile Volume Surveys UK',
    headline: ['STOCKPILE', 'VOLUME', 'SURVEYS'],
    category: 'Construction & Surveying',
    intro: 'Rapid, safe, and precise volume measurements for aggregate, soil, and material stockpiles — providing accurate stock audits for commercial reporting.',
    metaTitle: 'Stockpile Volume Surveys UK | Aggregate Audits | Altitude Hire',
    metaDescription: 'Professional stockpile volume surveys using drones. Accurate material measurement for quarries and construction sites. CAA approved.',
    heroStat: [
      { value: 'FAST', label: 'Site-wide capture' },
      { value: 'SAFE', label: 'Ground-based operation' },
      { value: '±1%', label: 'Volumetric precision' }
    ],
    problemStatement: 'Traditional stockpile measurement requires surveyors to climb piles, which is hazardous and time-consuming. Drone capture produces a high-resolution 3D model of every pile on site, allowing for precise volume calculation from a safe distance.',
    whatWeCapture: [
      '3D material pile profiles',
      'Accurate base-plane data',
      'High-resolution visual record',
      'Site-wide material distribution'
    ],
    deliverables: [
      'Stockpile volume summary',
      '3D point cloud data',
      'Annotated site map',
      'Material audit report'
    ],
    useCases: [
      { title: 'Commercial Audits', description: 'Verifying stock levels for financial and inventory management.' },
      { title: 'Supply Chain Planning', description: 'Ensuring material levels meet project requirements for contractors.' }
    ],
    capabilities: [
      { title: 'Point Cloud Analysis', description: 'Extracting volumes from millions of 3D data points.' },
      { title: 'Rapid Turnaround', description: 'Reports typically delivered within 24 hours of flight.' }
    ],
    industries: ['Quarrying', 'Construction', 'Waste Management', 'Aggregate Logistics'],
    faqs: [
      { q: 'How are volumes calculated?', a: 'We use photogrammetry or LiDAR to create a 3D model, then calculate the volume between the surface and a defined base plane.' },
      { q: 'Can you measure irregular piles?', a: 'Yes, drones are ideal for irregular shapes that are difficult to measure manually.' },
      { q: 'Is it safer than manual measurement?', a: 'Significantly — nobody needs to climb a stockpile, reducing the risk of slips and falls.' }
    ],
    relatedServices: ['volumetric-surveys', 'cut-fill-analysis', 'surveying-mapping'],
    cta: { label: 'REQUEST STOCKPILE AUDIT', href: '/contact' }
  },
  {
    slug: 'cut-fill-analysis',
    title: 'Cut and Fill Analysis UK',
    headline: ['CUT AND FILL', 'ANALYSIS'],
    category: 'Construction & Surveying',
    intro: 'Comparative earthworks analysis for construction sites — tracking material movement against as-designed models to ensure project balance.',
    metaTitle: 'Cut and Fill Analysis UK | Earthworks Monitoring | Altitude Hire',
    metaDescription: 'Professional drone-based cut and fill analysis. Track material movement against design models for construction and infrastructure. CAA approved.',
    heroStat: [
      { value: 'MODEL', label: 'vs Actual' },
      { value: 'DXF', label: 'Compatible data' },
      { value: 'TRACK', label: 'Project balance' }
    ],
    problemStatement: 'Earthworks balance is critical to construction profitability. Over-dig or under-fill can lead to significant cost variations. Drone-based cut and fill analysis compares the current site surface against the as-designed CAD model, identifying exactly where material needs to be moved.',
    whatWeCapture: [
      'Current topographic surface',
      'As-designed CAD model comparison',
      'Earthworks progress layers',
      'High-resolution site mapping'
    ],
    deliverables: [
      'Cut/Fill heat map',
      'Volumetric variance report',
      'Comparative 3D model',
      'Progress vs Design summary'
    ],
    useCases: [
      { title: 'Earthworks Balance', description: 'Ensuring material is moved efficiently across the site to minimize export/import costs.' },
      { title: 'Contractor Valuations', description: 'Providing objective data for progress payments based on material moved.' }
    ],
    capabilities: [
      { title: 'Design Overlay', description: 'Directly comparing aerial data with architectural or engineering CAD files.' },
      { title: 'Volume Tracking', description: 'Monitoring the total volume of material moved since the project start.' }
    ],
    industries: ['Groundworks Contractors', 'Main Contractors', 'Civil Engineering', 'Developers'],
    faqs: [
      { q: 'Can you compare against my CAD model?', a: 'Yes, we import your as-designed surface to perform direct comparative analysis.' },
      { q: 'How is the data presented?', a: 'Typically as a 2D heat map showing cut/fill areas and a summary table of volumes.' },
      { q: 'Can this prevent variation disputes?', a: 'Absolutely — it provides an objective, timestamped record of earthworks progress.' }
    ],
    relatedServices: ['volumetric-surveys', 'stockpile-volume-surveys', 'surveying-mapping'],
    cta: { label: 'ANALYSE EARTHWORKS', href: '/contact' }
  },
  {
    slug: 'orthomosaic-mapping',
    title: 'Orthomosaic Mapping UK',
    headline: ['ORTHOMOSAIC', 'MAPPING'],
    category: 'Construction & Surveying',
    intro: 'High-resolution, georeferenced aerial maps with 1-3cm per pixel detail — perfect for site management, progress tracking, and as-built verification.',
    metaTitle: 'Orthomosaic Mapping UK | High-Resolution Aerial Maps | Altitude Hire',
    metaDescription: 'Professional drone orthomosaic mapping services. High-resolution georeferenced maps for site management and GIS. CAA approved, 1-3cm GSD.',
    heroStat: [
      { value: '1CM', label: 'Max resolution' },
      { value: 'GEO', label: 'Referenced data' },
      { value: 'GIS', label: 'Ready outputs' }
    ],
    problemStatement: 'Standard aerial imagery is distorted by perspective and camera tilt, making it unsuitable for measurement. Orthomosaic mapping combines hundreds of images into a single, top-down map where every pixel is geometrically corrected, allowing for accurate distance and area measurements.',
    whatWeCapture: [
      'High-overlap NADIR imagery',
      'Ground Control Point (GCP) data',
      'Full site coverage images',
      'Precise GPS positioning'
    ],
    deliverables: [
      'GeoTIFF orthomosaic map',
      'High-resolution PDF site plan',
      'GIS-compatible datasets',
      'Web-viewable interactive map'
    ],
    useCases: [
      { title: 'Site Management', description: 'Providing a clear, current site plan for logistics and safety briefings.' },
      { title: 'As-Built Verification', description: 'Comparing completed works against design plans with overlay accuracy.' },
      { title: 'Environmental Surveys', description: 'Large-scale mapping of habitats, drainage, and land use.' }
    ],
    capabilities: [
      { title: 'GSD Precision', description: 'Achieving ground sampling distances as fine as 1cm per pixel.' },
      { title: 'Coordinate Alignment', description: 'Aligning maps to OSGB36 or custom site grids for total compatibility.' }
    ],
    industries: ['Construction', 'Planning', 'Agriculture', 'Environmental Agencies'],
    faqs: [
      { q: 'What is an orthomosaic map?', a: 'It is a geometrically corrected aerial map made from stitched images, suitable for measurement like a map.' },
      { q: 'Can I use the data in my GIS software?', a: 'Yes, we deliver in GeoTIFF format which is the standard for GIS and CAD platforms.' },
      { q: 'How current is the mapping data?', a: 'As current as the flight — it provides a perfect snapshot of the site at that exact time.' }
    ],
    relatedServices: ['surveying-mapping', 'photogrammetry', 'construction-monitoring'],
    cta: { label: 'REQUEST MAPPING QUOTE', href: '/contact' }
  },
  {
    slug: 'photogrammetry',
    title: 'Drone Photogrammetry UK',
    headline: ['DRONE', 'PHOTOGRAMMETRY'],
    category: 'Construction & Surveying',
    intro: 'Turning aerial imagery into accurate 3D models, point clouds, and maps — the science of extracting precise measurements from drone data.',
    metaTitle: 'Drone Photogrammetry UK | 3D Mapping & Models | Altitude Hire',
    metaDescription: 'Professional drone photogrammetry services. High-accuracy 3D models, maps and point clouds from aerial data. CAA approved, survey-grade results.',
    heroStat: [
      { value: '3D', label: 'Site modelling' },
      { value: 'GCP', label: 'Controlled accuracy' },
      { value: 'LAS', label: 'Standard formats' }
    ],
    problemStatement: 'Traditional site modeling requires significant time and ground-based measurement. Photogrammetry allows us to reconstruct large sites in 3D using overlapping drone imagery, producing accurate models that can be used for engineering, heritage recording, and stakeholder engagement.',
    whatWeCapture: [
      'Multi-angle aerial photography',
      'GCP and RTK positioning data',
      '3D geometry of structures and terrain',
      'High-resolution texture data'
    ],
    deliverables: [
      '3D mesh model (OBJ/FBX)',
      'Dense point cloud (LAS)',
      'Orthomosaic site map',
      'Digital Surface Model (DSM)'
    ],
    useCases: [
      { title: 'Heritage Recording', description: 'Creating detailed 3D replicas of historic structures for preservation.' },
      { title: 'Infrastructure Monitoring', description: 'Monitoring structural changes over time through periodic 3D modeling.' },
      { title: 'Visualisation', description: 'Providing stakeholders with a realistic 3D representation of a site or project.' }
    ],
    capabilities: [
      { title: '3D Reconstruction', description: 'Processing thousands of images into high-fidelity 3D assets.' },
      { title: 'Scale Accuracy', description: 'Ensuring models are correctly scaled and georeferenced for measurement.' }
    ],
    industries: ['Heritage', 'Construction', 'Architecture', 'Media'],
    faqs: [
      { q: 'How accurate is drone photogrammetry?', a: 'With ground control, we can achieve absolute accuracies within 2-5cm across large sites.' },
      { q: 'What is the difference between photogrammetry and LiDAR?', a: 'Photogrammetry uses images to build models, while LiDAR uses laser pulses. Photogrammetry is often better for visual texture.' },
      { q: 'Can it be used for BIM?', a: 'Yes, our point clouds and meshes are compatible with major BIM software.' }
    ],
    relatedServices: ['surveying-mapping', 'orthomosaic-mapping', 'digital-twin-capture'],
    cta: { label: 'DISCUSS 3D CAPTURE', href: '/contact' }
  },
  {
    slug: 'lidar-point-cloud-surveys',
    title: 'LiDAR Point Cloud Surveys UK',
    headline: ['LIDAR POINT CLOUD', 'SURVEYS'],
    category: 'Construction & Surveying',
    intro: 'High-precision laser scanning from altitude — capturing dense 3D point clouds that penetrate vegetation to reveal true ground terrain.',
    metaTitle: 'LiDAR Point Cloud Surveys UK | Drone Laser Scanning | Altitude Hire',
    metaDescription: 'Professional drone LiDAR surveying services. High-density 3D point clouds, vegetation penetration and DTM generation. CAA approved.',
    heroStat: [
      { value: '240', label: 'Points per m²' },
      { value: 'VEG', label: 'Penetration' },
      { value: 'LAZ', label: 'Standard output' }
    ],
    problemStatement: 'Standard photogrammetry cannot see through trees or thick vegetation, making it difficult to map true ground levels in forested or overgrown areas. LiDAR (Light Detection and Ranging) uses laser pulses to penetrate the canopy, delivering accurate terrain data where other sensors fail.',
    whatWeCapture: [
      'Million-point laser scans',
      'Vegetation and ground returns',
      'High-density 3D geometry',
      'Inertial measurement data (IMU)'
    ],
    deliverables: [
      'Classified point cloud (LAS/LAZ)',
      'Digital Terrain Model (DTM)',
      'Digital Surface Model (DSM)',
      'Contour mapping data'
    ],
    useCases: [
      { title: 'Forestry Mapping', description: 'Mapping ground terrain and tree metrics through dense canopy.' },
      { title: 'Infrastructure Corridors', description: 'Detailed mapping of powerlines and rail where vegetation is a factor.' },
      { title: 'Flood Modelling', description: 'Capturing accurate bare-earth models for hydraulic studies.' }
    ],
    capabilities: [
      { title: 'Laser Precision', description: 'Capturing data at 240,000 points per second for unmatched density.' },
      { title: 'Bare Earth Extraction', description: 'Filtering non-ground points to reveal the true site topography.' }
    ],
    industries: ['Forestry', 'Civil Engineering', 'Utilities', 'Environmental Planning'],
    faqs: [
      { q: 'What is the advantage of LiDAR?', a: 'It can capture ground levels through vegetation and is highly accurate over complex geometry.' },
      { q: 'How dense is the point cloud?', a: 'We can achieve densities of up to 240 points per square metre.' },
      { q: 'Is it better than photogrammetry?', a: 'For mapping terrain under trees, yes. For visual realism, photogrammetry is often preferred.' }
    ],
    relatedServices: ['surveying-mapping', 'orthomosaic-mapping', 'volumetric-surveys'],
    cta: { label: 'REQUEST LIDAR SURVEY', href: '/contact' }
  },
  {
    slug: 'building-envelope-inspections',
    title: 'Building Envelope Drone Inspections UK',
    headline: ['BUILDING ENVELOPE', 'INSPECTIONS'],
    category: 'Property & Assets',
    intro: 'External condition capture for facades, cladding, parapets, and high-level plant — providing a complete visual record of building health.',
    metaTitle: 'Building Envelope Drone Inspections UK | Facade & Cladding | Altitude Hire',
    metaDescription: 'Professional drone inspections for building envelopes. Facade, cladding, and asset condition surveys. CAA approved, detailed defect reporting.',
    heroStat: [
      { value: '360°', label: 'Asset visibility' },
      { value: '4K', label: 'Visual evidence' },
      { value: 'SAFE', label: 'No MEWPs required' }
    ],
    problemStatement: 'Inspecting building elevations and cladding traditionally requires expensive MEWPs or cradle access. Drones can inspect every face of a building in hours, capturing high-resolution evidence of masonry, cladding joints, glazing, and parapets without any ground-level disruption.',
    whatWeCapture: [
      'Facade and elevation condition',
      'Cladding and glazing joints',
      'Parapets, chimneys and rooflines',
      'High-level plant and access points',
      'Masonry and structural integrity',
      'Moisture signatures (thermal)'
    ],
    deliverables: [
      'Building elevation image set',
      'Annotated defect images',
      'Condition summary report',
      'Maintenance scoping pack',
      'Asset condition archive'
    ],
    useCases: [
      { title: 'Dilapidation Surveys', description: 'Objective evidence of building condition for lease negotiations.' },
      { title: 'Cladding Audits', description: 'Visual inspection of cladding systems and fire-stopping evidence.' },
      { title: 'Reactive Maintenance', description: 'Fast inspection of reported defects at high level.' }
    ],
    capabilities: [
      { title: 'High-Detail Facades', description: 'Capturing clear imagery of every building face at close range.' },
      { title: 'Asset Archiving', description: 'Providing a permanent visual record of the entire building exterior.' }
    ],
    industries: ['Managing Agents', 'Surveyors', 'FM Providers', 'Housing Associations'],
    faqs: [
      { q: 'What parts of the building can be inspected?', a: 'We can inspect facades, windows, cladding, parapets, rooflines and high-level plant.' },
      { q: 'Can you inspect cladding and facades?', a: 'Yes, drones are perfect for checking cladding joints and surface condition.' },
      { q: 'Do you work with surveyors?', a: 'Yes, we provide the visual data for surveyors to use in their formal assessments.' }
    ],
    relatedServices: ['facade-inspections', 'roof-inspections', 'facilities-management-inspections'],
    cta: { label: 'REQUEST ELEVATION SURVEY', href: '/contact' }
  },
  {
    slug: 'facade-inspections',
    title: 'Facade Drone Inspections UK',
    headline: ['FACADE', 'INSPECTIONS'],
    category: 'Property & Assets',
    intro: 'High-resolution vertical imaging for commercial and residential facades — documenting cladding, masonry, and glazing condition at scale.',
    metaTitle: 'Facade Drone Inspections UK | Vertical Building Surveys | Altitude Hire',
    metaDescription: 'Professional drone facade inspections. Vertical building surveys for cladding, glazing and masonry. CAA approved, detailed defect reporting.',
    heroStat: [
      { value: 'CLOSE', label: 'Visual capture' },
      { value: '4K', label: 'Detail' },
      { value: 'FAST', label: 'Audit speed' }
    ],
    problemStatement: 'Vertical facade inspection is often neglected due to the complexity and cost of access. This leads to unidentified issues with cladding, seals, and masonry. Drones provide a fast, safe, and cost-effective method to audit every square metre of a building facade.',
    whatWeCapture: [
      'Vertical elevation imagery',
      'Cladding panels and fixings',
      'Window seals and fenestration',
      'Masonry and concrete condition',
      'High-level signage and assets'
    ],
    deliverables: [
      'Elevation image archive',
      'Annotated defect schedule',
      'Facade condition report',
      'Contractor briefing imagery'
    ],
    useCases: [
      { title: 'Safety Audits', description: 'Regular checks for loose cladding or deteriorating masonry.' },
      { title: 'Project Handover', description: 'Verifying the quality of new facade installations.' }
    ],
    capabilities: [
      { title: 'Vertical Mapping', description: 'Systematic capture of every facade section for total coverage.' },
      { title: 'Precision Zoom', description: 'Inspecting small details without flying dangerously close to the building.' }
    ],
    industries: ['Property Owners', 'Facilities Management', 'Cladding Contractors', 'Surveyors'],
    faqs: [
      { q: 'Can drones detect loose cladding?', a: 'They can provide visual evidence of gaps, warping, or failed fixings.' },
      { q: 'How long does a facade survey take?', a: 'Most commercial elevations can be fully imaged in a few hours.' },
      { q: 'Can you provide images for defect reporting?', a: 'Yes, we specialise in annotated images that highlight specific issues.' }
    ],
    relatedServices: ['building-envelope-inspections', 'roof-inspections', 'commercial-property-drone-surveys'],
    cta: { label: 'INSPECT BUILDING FACADE', href: '/contact' }
  },
  {
    slug: 'facilities-management-inspections',
    title: 'Facilities Management Drone Services UK',
    headline: ['FACILITIES', 'MANAGEMENT'],
    category: 'Property & Assets',
    intro: 'Outcome-led drone services for FM teams — providing the visual evidence needed for planned maintenance, asset audits, and emergency response.',
    metaTitle: 'Facilities Management Drone Services UK | Asset Condition | Altitude Hire',
    metaDescription: 'Professional drone services for facilities management. Roof, asset and condition surveys to support maintenance and FM reporting. CAA approved.',
    heroStat: [
      { value: 'PRO', label: 'Active reporting' },
      { value: 'EVIDENCE', label: 'Led decision making' },
      { value: 'SAFE', label: 'Audit workflow' }
    ],
    problemStatement: 'Facilities managers are responsible for vast property portfolios but often lack current, clear visibility of high-level assets. Drones bridge this gap, providing the evidence needed to justify maintenance budgets, brief contractors, and verify completed works — all while keeping boots on the ground.',
    whatWeCapture: [
      'Roof and gutter condition',
      'High-level plant and assets',
      'Site boundaries and security',
      'Building envelope integrity',
      'Maintenance priority areas'
    ],
    deliverables: [
      'FM condition report',
      'Maintenance evidence pack',
      'Asset image archive',
      'Annotated defect summary'
    ],
    useCases: [
      { title: 'Budget Justification', description: 'Providing visual proof of required repairs for financial approval.' },
      { title: 'Contractor Management', description: 'Clearly briefing contractors on work scope before they arrive on site.' }
    ],
    capabilities: [
      { title: 'Portfolio Audits', description: 'Systematic visual records across multiple property sites.' },
      { title: 'Emergency Response', description: 'Urgent drone capture after storm or incident damage.' }
    ],
    industries: ['Facilities Managers', 'Managing Agents', 'Property Owners', 'Site Managers'],
    faqs: [
      { q: 'Do you work with FM companies?', a: 'Yes, we are integrated into the workflow of several major UK facilities management providers.' },
      { q: 'Can you support planned maintenance?', a: 'Yes, we provide the aerial baseline for PPM schedules.' },
      { q: 'Can you respond to emergency issues?', a: 'We offer rapid deployment for urgent roof or asset damage assessment.' }
    ],
    relatedServices: ['roof-inspections', 'building-envelope-inspections', 'insurance-loss-adjuster-surveys'],
    cta: { label: 'START FM BRIEFING', href: '/contact' }
  },
  {
    slug: 'heritage-conservation-archaeology',
    title: 'Heritage & Conservation Drone Surveys UK',
    headline: ['HERITAGE', '& CONSERVATION'],
    category: 'Specialist & Response',
    intro: 'Non-invasive aerial surveys and 3D modelling for historic buildings, listed structures, and archaeological sites — preserving the past with modern technology.',
    metaTitle: 'Heritage & Conservation Drone Surveys UK | 3D Site Models | Altitude Hire',
    metaDescription: 'Professional drone surveys for heritage and conservation. 3D site modelling, condition monitoring and digital preservation. CAA approved.',
    heroStat: [
      { value: 'NON', label: 'Invasive capture' },
      { value: '3D', label: 'Site modelling' },
      { value: 'PRE', label: 'Acquisition record' }
    ],
    problemStatement: 'Historic structures are fragile and often difficult to access without risking damage. Drones provide a completely non-contact method to inspect roofs, spires, and masonry, while creating high-fidelity digital replicas that can be used for conservation planning and public engagement.',
    whatWeCapture: [
      'High-detail structural geometry',
      'Historic roof and spire condition',
      'Archaeological site mapping',
      'Digital terrain of historic estates',
      'Texture and material condition'
    ],
    deliverables: [
      'High-fidelity 3D model',
      'Digital preservation archive',
      'Heritage condition report',
      'Public engagement visuals',
      'Orthomosaic site map'
    ],
    useCases: [
      { title: 'Listed Building Audit', description: 'Detailed inspection of roofs and spires for Grant application evidence.' },
      { title: 'Archaeological Mapping', description: 'Capturing site features from the air that are invisible from the ground.' },
      { title: 'Digital Twins', description: 'Creating permanent digital records of historic assets for future reference.' }
    ],
    capabilities: [
      { title: 'Photorealistic Modelling', description: 'Creating stunning 3D models of historic structures using photogrammetry.' },
      { title: 'Detailed Spire Inspection', description: 'Inspecting inaccessible heights with zero physical contact.' }
    ],
    industries: ['Conservation Groups', 'Heritage Organisations', 'Archaeologists', 'Listed Building Owners'],
    faqs: [
      { q: 'Is drone capture safe for fragile structures?', a: 'Yes, it is entirely non-contact and we maintain safe distances using zoom sensors.' },
      { q: 'Can you produce 3D models for public use?', a: 'Yes, we create web-viewable models perfect for museums and online engagement.' },
      { q: 'Do you work with conservation officers?', a: 'Yes, we provide the data they need to approve restoration works.' }
    ],
    relatedServices: ['digital-twin-capture', 'gaussian-splat-capture', 'drone-photogrammetry'],
    cta: { label: 'DISCUSS HERITAGE CAPTURE', href: '/contact' }
  }
];

export default services;
