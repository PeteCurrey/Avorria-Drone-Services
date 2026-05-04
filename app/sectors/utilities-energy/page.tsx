import { Metadata } from 'next'
import SectorLayout from '@/components/sectors/SectorLayout'

export const metadata: Metadata = {
  title: 'Drone Services for Utilities & Energy | Altitude Hire',
  description: 'Drone inspection, thermal imaging, corridor surveys, asset condition evidence and mapping support for utilities, renewable energy, infrastructure and operational energy sites.',
}

export default function UtilitiesEnergySectorPage() {
  return (
    <SectorLayout
      slug="utilities-energy"
      title="Drone Services for Utilities and Energy Assets"
      subtitle="Drone inspection, thermal imaging, corridor surveys, asset condition evidence and mapping support for utilities, renewable energy, infrastructure and operational energy sites."
      heroVideo="/videos/thermal.mp4"
      heroPoster="/images/posters/utilities.jpg"
      badges={["Energy Asset Audits", "Corridor Monitoring", "Thermal Inspections", "Renewable Support", "Altitude Flight Desk Workflow"]}
      painPoints={{
        title: "Why Energy Teams Use Drone Capture",
        text: "Energy and utility assets are often remote, linear, or hard-to-access. Monitoring corridor integrity, inspecting substations, and auditing solar farms requires regular data that can be difficult to gather safely on the ground.\nDrone capture provides visual and thermal intelligence that helps utility teams identify maintenance needs, track vegetation encroachment, and ensure asset performance without the logistical challenges of manual inspection."
      }}
      useCases={[
        { title: "Solar farm visual and thermal checks", href: "/sectors/solar-renewable-energy" },
        { title: "Utilities and substation inspections", href: "/services/utilities-energy-inspections" },
        { title: "Energy corridor route monitoring", href: "/services/pipeline-corridor-surveys" },
        { title: "Renewable energy asset condition", href: "/services/solar-panel-inspections" },
        { title: "Infrastructure structural evidence", href: "/services/infrastructure-inspections" },
        { title: "Thermal heat loss and anomaly checks", href: "/services/thermal-imaging" },
        { title: "Post-incident evidence and claims", href: "/sectors/insurance-loss-adjusters" },
        { title: "Vegetation and land management", href: "/services/surveying-mapping" },
        { title: "Corridor mapping and orthomosaics", href: "/services/orthomosaic-mapping" },
        { title: "LiDAR-supported terrain records", href: "/services/lidar-point-cloud-surveys" }
      ]}
      services={[
        { name: "Utilities & Energy Inspections", href: "/services/utilities-energy-inspections", desc: "Drone support for energy assets, corridors and operational infrastructure." },
        { name: "Solar Panel Inspections", href: "/services/solar-panel-inspections", desc: "Visual and thermal drone inspections for rooftop PV and solar farms." },
        { name: "Thermal Imaging", href: "/services/thermal-imaging", desc: "Specialist thermal auditing for energy assets and infrastructure." },
        { name: "Infrastructure Inspections", href: "/services/infrastructure-inspections", desc: "Aerial inspection evidence for towers, structures and industrial assets." },
        { name: "Pipeline Corridor Surveys", href: "/services/pipeline-corridor-surveys", desc: "Aerial monitoring and corridor capture for utility routes." },
        { name: "LiDAR Point Cloud Surveys", href: "/services/lidar-point-cloud-surveys", desc: "Terrain and corridor capture for infrastructure planning." },
        { name: "Surveying & Mapping", href: "/services/surveying-mapping", desc: "High-accuracy mapping and 3D data for technical energy projects." }
      ]}
      bundles={[
        { 
          name: "Solar & Energy Asset Pack", 
          fit: "Specialist package for renewable energy and energy asset inspections.", 
          outputs: ["Thermal PV capture", "Visual records", "Anomaly evidence", "PDF report"],
          href: "/bundles#solar-energy-asset-pack"
        },
        { 
          name: "Survey Data Pack", 
          fit: "Ideal for technical teams requiring corridor mapping and site-wide 3D records.", 
          outputs: ["Orthomosaic map", "Point cloud", "GIS ready data", "Visual model"],
          href: "/bundles#survey-data-pack"
        },
        { 
          name: "Insurance & Incident Evidence Pack", 
          fit: "Rapid response capture for post-incident energy asset assessment.", 
          outputs: ["Damage imagery", "Annotated evidence", "Context mapping", "Claim support"],
          href: "/bundles#insurance-incident-evidence-pack"
        }
      ]}
      deliverables={[
        { name: "Energy Asset Image Set", href: "/sample-deliverables" },
        { name: "Thermal Anomaly Pack", href: "/sample-deliverables" },
        { name: "Corridor Orthomosaic", href: "/sample-deliverables" },
        { name: "Annotated Inspection Images", href: "/sample-deliverables" },
        { name: "Infrastructure Point Cloud", href: "/sample-deliverables" },
        { name: "PDF Inspection Summary", href: "/sample-deliverables" }
      ]}
      processSteps={[
        { title: "Define energy outcome", desc: "We confirm if you need thermal auditing, corridor monitoring or structural evidence." },
        { title: "Review site and access constraints", desc: "We review operational energy site safety, airspace and corridor permissions." },
        { title: "Select capture workflow", desc: "We select the appropriate thermal or high-resolution zoom sensors for the asset." },
        { title: "Process and verify outputs", desc: "Data is processed into technical reports, thermal sets or mapping data." },
        { title: "Deliver records and next-step guidance", desc: "Final records are issued via the Altitude Operations Standard workflow." }
      ]}
      faqs={[
        { question: "How can drones help utility companies?", answer: "Drones allow for safe, rapid monitoring of corridors and inspection of high-voltage or access-restricted assets." },
        { question: "Can drones inspect solar farms efficiently?", answer: "Yes. Drone capture can audit thousands of solar panels in a fraction of the time of ground-based inspection." },
        { question: "What is thermal drone imaging used for?", answer: "Thermal cameras can identify hotspots, moisture ingress and temperature anomalies that indicate asset failure or performance issues." },
        { question: "Can drones monitor linear corridors?", answer: "Yes. We support corridor mapping for pipelines, utility routes and transport networks." },
        { question: "What information is needed for a utility brief?", answer: "We require site location, asset type, required outputs (visual/thermal) and any site safety protocols." },
        { question: "Are drone inspections safer than manual checks?", answer: "Significantly. Drones remove the need for technicians to work at height or enter hazardous areas for initial evidence capture." }
      ]}
      ctaText="Discuss Energy Asset Capture"
      ctaBriefSource="sector-utilities"
    />
  )
}
