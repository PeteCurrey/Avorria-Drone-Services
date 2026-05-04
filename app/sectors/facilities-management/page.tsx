import { Metadata } from 'next'
import SectorLayout from '@/components/sectors/SectorLayout'

export const metadata: Metadata = {
  title: 'Drone Services for Facilities Management | Roof & Asset Inspections | Altitude Hire',
  description: 'Drone inspections, roof surveys, thermal imaging, asset condition capture and planned maintenance evidence for facilities managers, FM providers and property portfolios.',
}

export default function FacilitiesManagementSectorPage() {
  return (
    <SectorLayout
      slug="facilities-management"
      title="Drone Services for Facilities Management"
      subtitle="Drone inspections, roof surveys, thermal imaging, asset condition capture and planned maintenance evidence for facilities managers, FM providers and property portfolios."
      heroVideo="/videos/inspection.mp4"
      heroPoster="/images/posters/inspection.jpg"
      badges={["Inspection Evidence", "Asset Records", "Planned Maintenance", "Contractor Packs", "Altitude Flight Desk Workflow"]}
      painPoints={{
        title: "Why FM Teams Use Drone Capture",
        text: "Facilities management teams need fast, clear visibility across roofs, gutters, facades, plant areas and access-restricted assets. Traditional access methods can be slow, disruptive and expensive at the first inspection stage.\nDrone capture provides visual evidence that can support planned maintenance, contractor scoping, insurance records and portfolio reporting."
      }}
      useCases={[
        { title: "Commercial roof inspections", href: "/services/roof-inspections" },
        { title: "Gutter and drainage checks", href: "/services/roof-inspections" },
        { title: "Building envelope condition capture", href: "/services/building-envelope-inspections" },
        { title: "Roof plant inspection", href: "/services/roof-inspections" },
        { title: "Planned maintenance records", href: "/operations-standard" },
        { title: "Before-and-after repair evidence", href: "/sample-deliverables" },
        { title: "Insurance evidence capture", href: "/sectors/insurance-loss-adjusters" },
        { title: "Thermal building checks", href: "/services/thermal-imaging" },
        { title: "Multi-site portfolio inspections", href: "/bundles" },
        { title: "Contractor briefing packs", href: "/sample-deliverables" }
      ]}
      services={[
        { name: "Facilities Management Inspections", href: "/services/facilities-management-inspections", desc: "Drone-supported planned maintenance evidence for FM teams and property portfolios." },
        { name: "Roof Inspections", href: "/services/roof-inspections", desc: "High-resolution roof, gutter and drainage inspection evidence without scaffolding." },
        { name: "Building Envelope Inspections", href: "/services/building-envelope-inspections", desc: "External condition capture for facades, cladding, parapets and high-level details." },
        { name: "Thermal Imaging", href: "/services/thermal-imaging", desc: "Thermal imaging for buildings, roofs and assets to identify temperature anomalies." },
        { name: "Insurance & Claims", href: "/services/insurance-loss-adjuster-surveys", desc: "Fast aerial evidence capture for storm damage, claims and contractor scoping." },
        { name: "Commercial Property Drone Surveys", href: "/services/commercial-property-drone-surveys", desc: "Aerial condition evidence for offices, retail parks and managed assets." },
        { name: "Solar Panel Inspections", href: "/services/solar-panel-inspections", desc: "Visual and thermal drone inspections for rooftop solar arrays and commercial PV." },
        { name: "Emergency Response", href: "/services/emergency-response", desc: "Urgent drone capture for post-incident evidence and access-restricted review." }
      ]}
      bundles={[
        { 
          name: "Roof Intelligence Pack", 
          fit: "Ideal for FM teams needing comprehensive visual evidence across commercial roof areas.", 
          outputs: ["Roof image set", "Gutter/drainage checks", "Defect references", "PDF summary"],
          href: "/bundles#roof-intelligence-pack"
        },
        { 
          name: "Building Envelope & Asset Condition Pack", 
          fit: "Designed for property managers requiring condition visibility across facades and elevations.", 
          outputs: ["Elevation images", "Facade details", "Annotated evidence", "Condition summary"],
          href: "/bundles#building-envelope-asset-condition-pack"
        },
        { 
          name: "Solar & Energy Asset Pack", 
          fit: "For FM teams managing renewable assets and energy infrastructure.", 
          outputs: ["Thermal PV capture", "Visual solar records", "Anomaly evidence", "PDF report"],
          href: "/bundles#solar-energy-asset-pack"
        },
        { 
          name: "Insurance & Incident Evidence Pack", 
          fit: "Rapid response capture for storm damage, incidents or claim documentation.", 
          outputs: ["Damage imagery", "Annotated evidence", "Urgent reporting", "Contractor pack"],
          href: "/bundles#insurance-incident-evidence-pack"
        }
      ]}
      deliverables={[
        { name: "Roof Inspection Image Set", href: "/sample-deliverables" },
        { name: "Annotated Defect Image Pack", href: "/sample-deliverables" },
        { name: "PDF Roof Inspection Summary", href: "/sample-deliverables" },
        { name: "Thermal Image Set", href: "/sample-deliverables" },
        { name: "Building Envelope Condition Pack", href: "/sample-deliverables" },
        { name: "Insurance Evidence Pack", href: "/sample-deliverables" }
      ]}
      processSteps={[
        { title: "Define required output", desc: "We confirm whether you need visual evidence, maintenance records, or contractor scoping packs." },
        { title: "Review site and access constraints", desc: "We review the property environment, airspace, and any access-restricted areas." },
        { title: "Select capture workflow", desc: "We select the right drone and sensor for roof, facade or thermal capture." },
        { title: "Process and prepare deliverables", desc: "Imagery is organised and reports are prepared for your FM team or contractors." },
        { title: "Deliver records and next-step guidance", desc: "Outputs are issued via the Altitude Operations Standard workflow for your review." }
      ]}
      faqs={[
        { question: "How can drones support facilities management?", answer: "Drones provide fast, high-resolution visibility across roofs, facades and assets, supporting planned maintenance, insurance claims and contractor scoping without the immediate need for scaffolding." },
        { question: "Can drones inspect roofs and gutters without scaffolding?", answer: "Yes. Drones are the preferred first-step inspection method for roof areas, allowing FM teams to identify issues and scope repairs before deploying physical access equipment." },
        { question: "Can drone evidence support contractor quotes?", answer: "Absolutely. Providing contractors with high-resolution imagery and annotated defect packs ensures they can quote accurately and understand the scope of work before arriving on site." },
        { question: "Can thermal imaging be added to FM inspections?", answer: "Yes. Thermal drone surveys can identify temperature anomalies in roofs, insulation and energy assets, supporting energy efficiency audits and heat loss investigations." },
        { question: "Can drone inspections support planned maintenance?", answer: "Regular drone capture allows FM teams to track asset condition over time, supporting a proactive planned maintenance strategy rather than reacting to failures." },
        { question: "Can multiple sites be inspected as part of a portfolio?", answer: "Altitude Hire supports portfolio-wide inspection programs, providing consistent visual records across multiple commercial properties." },
        { question: "Are drone inspections a replacement for professional surveys?", answer: "Drone capture provides high-quality visual evidence that supports surveyors, engineers and FM professionals; however, it does not replace formal professional sign-off where required by a RICS surveyor." }
      ]}
      ctaText="Start FM Drone Brief"
      ctaBriefSource="sector-fm"
      resources={[
        { title: "Drone Surveys for Facilities Managers", href: "/resources/fm-guide" },
        { title: "Drone Roof Inspections: What Commercial Property Teams Need to Know", href: "/resources/roof-inspection-guide" },
        { title: "Can Drone Inspections Replace Scaffolding?", href: "/resources/scaffolding-guide" },
        { title: "Drone Thermal Imaging Surveys", href: "/resources/thermal-guide" }
      ]}
    />
  )
}
