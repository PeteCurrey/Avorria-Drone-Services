import { Metadata } from 'next'
import SectorLayout from '@/components/sectors/SectorLayout'

export const metadata: Metadata = {
  title: 'Drone Inspection & Survey for Infrastructure | Altitude Hire',
  description: 'Drone inspection, corridor capture, asset condition evidence, thermal imaging, mapping and visual records for bridges, rail, highways, utilities, industrial assets and hard-to-access infrastructure.',
}

export default function InfrastructureSectorPage() {
  return (
    <SectorLayout
      slug="infrastructure"
      title="Drone Services for Infrastructure"
      subtitle="Drone inspection, corridor capture, asset condition evidence, thermal imaging, mapping and visual records for bridges, rail, highways, utilities, industrial assets and hard-to-access infrastructure."
      heroVideo="/videos/inspection.mp4"
      heroPoster="/images/posters/infrastructure.jpg"
      badges={["Bridge Inspections", "Corridor Monitoring", "Structural Evidence", "Thermal Audits", "Altitude Flight Desk Workflow"]}
      painPoints={{
        title: "Why Infrastructure Teams Use Drone Capture",
        text: "Infrastructure assets are often hard to access, dangerous to inspect and critical to maintain. Bridges, towers, transport networks and industrial structures require regular condition evidence that is difficult to capture via traditional means.\nDrone services provide a safer, faster and more consistent way to document asset condition, monitor corridors and support engineering reviews without the logistical overhead of heavy access equipment."
      }}
      useCases={[
        { title: "Bridge structural inspections", href: "/services/bridge-drone-inspections" },
        { title: "Rail and highway corridor surveys", href: "/services/rail-corridor-surveys" },
        { title: "Utilities and energy asset checks", href: "/services/utilities-energy-inspections" },
        { title: "Pipeline route monitoring", href: "/services/pipeline-corridor-surveys" },
        { title: "Industrial asset condition records", href: "/services/infrastructure-inspections" },
        { title: "High-level structural evidence", href: "/services/building-envelope-inspections" },
        { title: "Corridor mapping and orthomosaics", href: "/services/surveying-mapping" },
        { title: "Thermal energy infrastructure audits", href: "/services/thermal-imaging" },
        { title: "Post-incident asset evidence", href: "/sectors/insurance-loss-adjusters" },
        { title: "Digital twin-style visual archives", href: "/services/digital-twin-capture" }
      ]}
      services={[
        { name: "Infrastructure Inspections", href: "/services/infrastructure-inspections", desc: "Aerial inspection evidence for bridges, towers and industrial assets." },
        { name: "Bridge Drone Inspections", href: "/services/bridge-drone-inspections", desc: "High-level visual capture for bridge structures and access-restricted details." },
        { name: "Rail Corridor Surveys", href: "/services/rail-corridor-surveys", desc: "Aerial corridor mapping and monitoring for transport networks." },
        { name: "Pipeline Corridor Surveys", href: "/services/pipeline-corridor-surveys", desc: "Aerial monitoring and corridor capture for pipeline and utility routes." },
        { name: "Utilities & Energy Inspections", href: "/services/utilities-energy-inspections", desc: "Drone support for energy assets, corridors and operational infrastructure." },
        { name: "Thermal Imaging", href: "/services/thermal-imaging", desc: "Specialist thermal auditing for energy assets and infrastructure." },
        { name: "LiDAR Point Cloud Surveys", href: "/services/lidar-point-cloud-surveys", desc: "Terrain and structural capture for infrastructure planning." },
        { name: "Surveying & Mapping", href: "/services/surveying-mapping", desc: "High-accuracy site mapping and 3D data for technical teams." }
      ]}
      bundles={[
        { 
          name: "Building Envelope & Asset Condition Pack", 
          fit: "Designed for infrastructure managers requiring condition visibility across elevations and structures.", 
          outputs: ["Asset images", "Annotated evidence", "Condition summary", "Contractor pack"],
          href: "/bundles#building-envelope-asset-condition-pack"
        },
        { 
          name: "Survey Data Pack", 
          fit: "Ideal for technical teams requiring site mapping and accurate 3D site records.", 
          outputs: ["Orthomosaic map", "Point cloud", "GIS ready data", "Visual model"],
          href: "/bundles#survey-data-pack"
        },
        { 
          name: "Solar & Energy Asset Pack", 
          fit: "For renewable energy infrastructure and energy asset inspections.", 
          outputs: ["Thermal capture", "Visual records", "Anomaly evidence", "PDF report"],
          href: "/bundles#solar-energy-asset-pack"
        },
        { 
          name: "Insurance & Incident Evidence Pack", 
          fit: "Rapid response capture for post-incident infrastructure assessment.", 
          outputs: ["Damage imagery", "Annotated evidence", "Context mapping", "Claim support"],
          href: "/bundles#insurance-incident-evidence-pack"
        }
      ]}
      deliverables={[
        { name: "Asset Condition Image Set", href: "/sample-deliverables" },
        { name: "Annotated Inspection Images", href: "/sample-deliverables" },
        { name: "Orthomosaic Map", href: "/sample-deliverables" },
        { name: "Drone Point Cloud", href: "/sample-deliverables" },
        { name: "Thermal Image Set", href: "/sample-deliverables" },
        { name: "Insurance Evidence Pack", href: "/sample-deliverables" }
      ]}
      processSteps={[
        { title: "Define asset outcome", desc: "We confirm if you need visual evidence, technical mapping or thermal audits." },
        { title: "Review site and access constraints", desc: "We review airspace, railways, roads, utilities and safety requirements." },
        { title: "Select capture workflow", desc: "We select the appropriate drone, long-range sensor or specialist camera." },
        { title: "Process and verify outputs", desc: "Imagery is organised into asset-specific reports or technical datasets." },
        { title: "Deliver records and next-step guidance", desc: "Final records are issued via the Altitude Operations Standard workflow." }
      ]}
      faqs={[
        { question: "How can drones support infrastructure maintenance?", answer: "Drones allow for safe, rapid visual inspection of high-level or access-restricted assets like bridges and towers." },
        { question: "Are drone inspections safer than traditional methods?", answer: "Yes. Drones significantly reduce the need for workers to work at height or enter restricted environments during initial inspection." },
        { question: "Can drones capture corridor data?", answer: "Yes. We support linear corridor monitoring for railways, highways, pipelines and utility routes." },
        { question: "What sensors are used for infrastructure?", answer: "We use high-resolution visual cameras, long-range zoom sensors and thermal imaging cameras where required." },
        { question: "Can you provide reports for bridge inspections?", answer: "We can provide high-resolution visual evidence packs and annotated images to support engineering bridge reviews." },
        { question: "What accuracy is possible for mapping?", answer: "Accuracy depends on the requirement; we can support survey-grade outputs with appropriate ground control." },
        { question: "Do you have operational authorization for infrastructure?", answer: "Altitude Hire operates under CAA guidelines and maintains the required authorizations for commercial drone work." }
      ]}
      ctaText="Start Infrastructure Drone Brief"
      ctaBriefSource="sector-infrastructure"
    />
  )
}
