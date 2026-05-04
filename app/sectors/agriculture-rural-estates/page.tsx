import { Metadata } from 'next'
import SectorLayout from '@/components/sectors/SectorLayout'

export const metadata: Metadata = {
  title: 'Drone Services for Agriculture & Rural Estates | Altitude Hire',
  description: 'Drone mapping, land surveys, estate visual records, agricultural aerial imagery, drainage context, rural asset inspections and development site capture for farms, estates and landowners.',
}

export default function AgricultureSectorPage() {
  return (
    <SectorLayout
      slug="agriculture-rural-estates"
      title="Drone Services for Agriculture and Rural Estates"
      subtitle="Drone mapping, land surveys, estate visual records, agricultural aerial imagery, drainage context, rural asset inspections and development site capture for farms, estates and landowners."
      heroVideo="/videos/surveying.mp4"
      heroPoster="/images/posters/agriculture.jpg"
      badges={["Land Mapping", "Estate Records", "Crop Health Context", "Asset Inspections", "Altitude Flight Desk Workflow"]}
      painPoints={{
        title: "Why Agriculture Teams Use Drone Capture",
        text: "Managing large rural estates and agricultural land requires regular visibility of boundaries, drainage, asset condition and land use. Traditional ground-based surveys over hundreds of acres are time-consuming and labor-intensive.\nDrone capture provides high-resolution mapping, land-use evidence and asset inspection data that help estate managers and landowners make better decisions about drainage, boundary management, maintenance and potential development."
      }}
      useCases={[
        { title: "Estate boundary and land mapping", href: "/services/orthomosaic-mapping" },
        { title: "Rural asset and building inspections", href: "/services/roof-inspections" },
        { title: "Drainage and water management context", href: "/services/surveying-mapping" },
        { title: "Agricultural land-use evidence", href: "/operations-standard" },
        { title: "Forestry and timber monitoring", href: "/services/lidar-point-cloud-surveys" },
        { title: "Estate marketing and sales visuals", href: "/services/aerial-photography-film" },
        { title: "Development site aerial context", href: "/services/construction-monitoring" },
        { title: "Post-incident land damage records", href: "/sectors/insurance-loss-adjusters" },
        { title: "Infrastructure corridor monitoring", href: "/services/pipeline-corridor-surveys" },
        { title: "Heritage asset checks on estates", href: "/sectors/heritage-conservation" }
      ]}
      services={[
        { name: "Agricultural Surveys", href: "/services/agricultural-surveys-crops", desc: "Drone mapping and land surveys for estates and agriculture." },
        { name: "Surveying & Mapping", href: "/services/surveying-mapping", desc: "High-accuracy site mapping and 3D data for technical land projects." },
        { name: "Orthomosaic Mapping", href: "/services/orthomosaic-mapping", desc: "High-resolution aerial maps for estate context and land records." },
        { name: "Drone Photogrammetry", href: "/services/photogrammetry", desc: "3D models and point clouds for land and structural documentation." },
        { name: "Aerial Photography & Film", href: "/services/aerial-photography-film", desc: "Premium marketing visuals for estates, venues and tourism." },
        { name: "Solar Panel Inspections", href: "/services/solar-panel-inspections", desc: "Visual and thermal inspections for solar farms on rural land." },
        { name: "Infrastructure Inspections", href: "/services/infrastructure-inspections", desc: "Aerial evidence for estate bridges, structures and assets." },
        { name: "Insurance & Claims", href: "/services/insurance-loss-adjuster-surveys", desc: "Fast aerial evidence for storm damage and land impact." }
      ]}
      bundles={[
        { 
          name: "Survey Data Pack", 
          fit: "The standard package for estate managers requiring mapping and land data.", 
          outputs: ["Orthomosaic map", "Point cloud", "GIS data", "Visual model"],
          href: "/bundles#survey-data-pack"
        },
        { 
          name: "Visual Sales Pack", 
          fit: "For estate marketing, venue promotion and high-end property sales.", 
          outputs: ["Edited video", "High-res image set", "360 panorama", "Social clips"],
          href: "/bundles#visual-sales-pack"
        },
        { 
          name: "Solar & Energy Asset Pack", 
          fit: "For estates managing solar arrays or energy infrastructure.", 
          outputs: ["Thermal capture", "Visual records", "Anomaly evidence", "PDF report"],
          href: "/bundles#solar-energy-asset-pack"
        }
      ]}
      deliverables={[
        { name: "Estate Orthomosaic Map", href: "/sample-deliverables" },
        { name: "Land-Use Image Archive", href: "/sample-deliverables" },
        { name: "Rural Asset Inspection Set", href: "/sample-deliverables" },
        { name: "360 Estate Panorama", href: "/sample-deliverables" },
        { name: "Topographic Point Cloud", href: "/sample-deliverables" },
        { name: "Estate Media Pack", href: "/sample-deliverables" }
      ]}
      processSteps={[
        { title: "Define land outcome", desc: "We confirm if you need land mapping, asset inspection or marketing media." },
        { title: "Review site and access constraints", desc: "We review the estate environment, airspace and flight take-off points." },
        { title: "Select capture workflow", desc: "We use appropriate drones and sensors for mapping large areas or structural checks." },
        { title: "Process and verify outputs", desc: "Data is processed into technical maps, image sets or video summaries." },
        { title: "Deliver records and guidance", desc: "Final records are issued via the Altitude Operations Standard workflow." }
      ]}
      faqs={[
        { question: "How can drones help rural estate managers?", answer: "Drones provide fast, site-wide visibility of boundaries, drainage, and asset condition over large acreages." },
        { question: "Can drones map estate boundaries?", answer: "Yes. High-resolution orthomosaic mapping is an excellent tool for documenting estate boundaries and land use." },
        { question: "Can drones inspect estate buildings and roofs?", answer: "Drones provide a safe, efficient way to inspect high-level details on estate buildings without scaffolding." },
        { question: "What information is needed for an agricultural brief?", answer: "We require site location, survey area (hectares/acres), and required deliverables (mapping/media)." },
        { question: "Can drone data support drainage planning?", answer: "Yes. High-resolution mapping can provide valuable context for drainage and water management planning." },
        { question: "Do you operate UK-wide for estates?", answer: "Altitude Hire supports commercial drone work across the UK, subject to project planning and constraints." }
      ]}
      ctaText="Discuss Agricultural Drone Capture"
      ctaBriefSource="sector-agriculture"
    />
  )
}
