import { Metadata } from 'next'
import SectorLayout from '@/components/sectors/SectorLayout'

export const metadata: Metadata = {
  title: 'Drone Services for Solar PV & Renewable Energy | Altitude Hire',
  description: 'Visual and thermal drone inspections for rooftop solar arrays, commercial PV systems and solar farms. Helping renewable energy teams identify anomalies and monitor asset health.',
}

export default function SolarSectorPage() {
  return (
    <SectorLayout
      slug="solar-renewable-energy"
      title="Drone Services for Solar and Renewable Energy"
      subtitle="Visual and thermal drone inspections for rooftop solar arrays, commercial PV systems and solar farms. Helping renewable energy teams identify anomalies and monitor asset health."
      heroVideo="/videos/thermal.mp4"
      heroPoster="/images/posters/solar.jpg"
      badges={["Solar Audits", "Thermal Anomaly Detection", "Renewable Support", "Asset Health Monitoring", "Altitude Flight Desk Workflow"]}
      painPoints={{
        title: "Why Solar Teams Use Drone Capture",
        text: "Inspecting thousands of solar panels for visual damage or thermal hotspots is time-consuming and labor-intensive when done manually. Issues like string failures, diode issues, and cracked cells can significantly impact yield and ROI.\nDrone-supported visual and thermal audits provide a fast, efficient way to survey solar farms and commercial arrays, identifying anomalies from the air and providing clear evidence for maintenance and warranty claims."
      }}
      useCases={[
        { title: "Solar farm thermal audits", href: "/services/solar-panel-inspections" },
        { title: "Rooftop PV visual inspections", href: "/services/solar-panel-inspections" },
        { title: "String and panel anomaly detection", href: "/services/thermal-imaging" },
        { title: "New installation quality checks", href: "/operations-standard" },
        { title: "Warranty and claim documentation", href: "/sectors/insurance-loss-adjusters" },
        { title: "Pre-acquisition solar site audits", href: "/sample-deliverables" },
        { title: "Vegetation and land management", href: "/services/surveying-mapping" },
        { title: "Solar site mapping and context", href: "/services/orthomosaic-mapping" },
        { title: "Inverter and infrastructure checks", href: "/services/utilities-energy-inspections" }
      ]}
      services={[
        { name: "Solar Panel Inspections", href: "/services/solar-panel-inspections", desc: "Visual and thermal drone inspections for commercial PV systems and solar farms." },
        { name: "Thermal Imaging", href: "/services/thermal-imaging", desc: "Thermal surveys to identify hotspots and temperature anomalies in energy assets." },
        { name: "Utilities & Energy Inspections", href: "/services/utilities-energy-inspections", desc: "Drone support for energy assets and operational infrastructure." },
        { name: "Orthomosaic Mapping", href: "/services/orthomosaic-mapping", desc: "High-resolution mapping for solar site layout and context." },
        { name: "Insurance & Claims", href: "/services/insurance-loss-adjuster-surveys", desc: "Fast aerial evidence capture for damage assessment and claim support." }
      ]}
      bundles={[
        { 
          name: "Solar & Energy Asset Pack", 
          fit: "The standard package for renewable energy asset owners and FM providers.", 
          outputs: ["Thermal PV capture", "Visual records", "Anomaly evidence", "PDF report"],
          href: "/bundles#solar-energy-asset-pack"
        },
        { 
          name: "Insurance & Incident Evidence Pack", 
          fit: "Rapid response capture for storm or fire damage assessment.", 
          outputs: ["Damage imagery", "Annotated evidence", "Urgent reporting", "Contractor pack"],
          href: "/bundles#insurance-incident-evidence-pack"
        },
        { 
          name: "Survey Data Pack", 
          fit: "For solar site mapping and technical documentation.", 
          outputs: ["Orthomosaic map", "Point cloud", "GIS data", "Visual model"],
          href: "/bundles#survey-data-pack"
        }
      ]}
      deliverables={[
        { name: "Thermal Anomaly Evidence Pack", href: "/sample-deliverables" },
        { name: "Visual PV Condition Report", href: "/sample-deliverables" },
        { name: "Solar Farm Orthomosaic", href: "/sample-deliverables" },
        { name: "Annotated Defect Image Pack", href: "/sample-deliverables" },
        { name: "PDF Inspection Summary", href: "/sample-deliverables" },
        { name: "Solar Anomaly List", href: "/sample-deliverables" }
      ]}
      processSteps={[
        { title: "Define inspection outcome", desc: "We confirm if you need thermal auditing, visual condition checks or insurance evidence." },
        { title: "Review site and environmental conditions", desc: "We review weather, irradiance levels (for thermal) and site access." },
        { title: "Select capture workflow", desc: "We use appropriate thermal and visual sensors to audit the array pattern." },
        { title: "Process and identify anomalies", desc: "Imagery is analysed to identify hotspots, damaged panels or string issues." },
        { title: "Deliver records and next-step guidance", desc: "Final findings are issued through the Altitude Operations Standard workflow." }
      ]}
      faqs={[
        { question: "Can drones inspect solar panels efficiently?", answer: "Yes. Drones can survey hundreds of panels in minutes, identifying thermal hotspots that indicate cell or string failure." },
        { question: "What are the benefits of thermal drone audits?", answer: "Thermal audits allow for the rapid identification of yield-impacting anomalies like diode issues, hotspots and cracked cells." },
        { question: "What information is needed for a solar brief?", answer: "We need the site location, array size (MW or panel count), and required deliverables (visual/thermal)." },
        { question: "Can drone audits support warranty claims?", answer: "Detailed visual and thermal evidence can provide objective support for panel warranty and maintenance claims." },
        { question: "What is the best time for thermal solar surveys?", answer: "Thermal surveys are best conducted during high-irradiance periods to ensure anomalies are clearly visible." },
        { question: "Are drone inspections safer than manual checks?", answer: "Drones remove the need for roof-level work or manual panel checks on large farms during initial assessment." }
      ]}
      ctaText="Discuss Solar Asset Capture"
      ctaBriefSource="sector-solar"
    />
  )
}
