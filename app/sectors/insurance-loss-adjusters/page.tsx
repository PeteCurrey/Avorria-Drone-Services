import { Metadata } from 'next'
import SectorLayout from '@/components/sectors/SectorLayout'

export const metadata: Metadata = {
  title: 'Drone Evidence for Insurance & Loss Adjusters | Altitude Hire',
  description: 'Aerial evidence capture for storm damage, roof damage, fire damage, flood impact, access-restricted inspections and contractor scoping.',
}

export default function InsuranceSectorPage() {
  return (
    <SectorLayout
      slug="insurance-loss-adjusters"
      title="Drone Evidence for Insurance and Loss Adjusters"
      subtitle="Aerial evidence capture for storm damage, roof damage, fire damage, flood impact, access-restricted inspections and contractor scoping."
      heroVideo="/videos/inspection.mp4"
      heroPoster="/images/posters/insurance.jpg"
      badges={["Damage Evidence", "Storm Damage", "Loss Adjuster Support", "Rapid Response", "Altitude Flight Desk Workflow"]}
      painPoints={{
        title: "Why Insurance Teams Use Drone Capture",
        text: "Damage after a storm, fire or flood can be difficult or unsafe to access physically. Insurers and loss adjusters need reliable visual evidence to assess claims accurately and quickly.\nDrone capture provides high-resolution imagery and reporting that can support property owners, contractors and insurers in scoping repairs and documenting the extent of impact."
      }}
      useCases={[
        { title: "Storm damage visual records", href: "/services/insurance-loss-adjuster-surveys" },
        { title: "Roof damage evidence", href: "/services/roof-inspections" },
        { title: "Fire and flood impact capture", href: "/services/emergency-response" },
        { title: "Loss adjuster site evidence", href: "/services/insurance-loss-adjuster-surveys" },
        { title: "Contractor repair scoping", href: "/operations-standard" },
        { title: "Access-restricted area checks", href: "/services/building-envelope-inspections" },
        { title: "High-level building damage", href: "/services/building-envelope-inspections" },
        { title: "Thermal damage investigation", href: "/services/thermal-imaging" },
        { title: "Surrounding context imagery", href: "/sample-deliverables" },
        { title: "Claim support documentation", href: "/sample-deliverables" }
      ]}
      services={[
        { name: "Insurance & Loss Adjuster Surveys", href: "/services/insurance-loss-adjuster-surveys", desc: "Fast aerial evidence capture for damage assessment and claim support." },
        { name: "Emergency Response", href: "/services/emergency-response", desc: "Urgent drone capture for post-incident evidence and site review." },
        { name: "Roof Inspections", href: "/services/roof-inspections", desc: "High-resolution roof and gutter inspection evidence for damage claims." },
        { name: "Building Envelope Inspections", href: "/services/building-envelope-inspections", desc: "Condition capture for facades and high-level details after an incident." },
        { name: "Thermal Imaging", href: "/services/thermal-imaging", desc: "Thermal surveys to identify moisture ingress or temperature anomalies." },
        { name: "Commercial Property Drone Surveys", href: "/services/commercial-property-drone-surveys", desc: "Aerial evidence for offices and industrial estates after damage." },
        { name: "Storm Damage Drone Surveys", href: "/services/storm-damage-surveys", desc: "Specialist capture for wind, rain and roof-level impact." },
        { name: "Fire & Flood Damage Surveys", href: "/services/fire-flood-surveys", desc: "Aerial monitoring and documentation for incident impact." }
      ]}
      bundles={[
        { 
          name: "Insurance & Incident Evidence Pack", 
          fit: "Rapid response capture designed to document damage for claims and scoping.", 
          outputs: ["Damage image set", "Annotated evidence", "PDF summary", "Contractor pack"],
          href: "/bundles#insurance-incident-evidence-pack"
        },
        { 
          name: "Roof Intelligence Pack", 
          fit: "Ideal for detailed roof-level damage assessments after storm events.", 
          outputs: ["Roof image set", "Gutter checks", "Defect references", "PDF summary"],
          href: "/bundles#roof-intelligence-pack"
        },
        { 
          name: "Building Envelope & Asset Condition Pack", 
          fit: "For documenting external facade and elevation damage.", 
          outputs: ["Elevation images", "Facade details", "Annotated evidence", "Condition summary"],
          href: "/bundles#building-envelope-asset-condition-pack"
        }
      ]}
      deliverables={[
        { name: "Insurance Evidence Pack", href: "/sample-deliverables" },
        { name: "Annotated Defect Image Pack", href: "/sample-deliverables" },
        { name: "Roof Inspection Image Set", href: "/sample-deliverables" },
        { name: "Thermal Image Set", href: "/sample-deliverables" },
        { name: "Building Envelope Condition Pack", href: "/sample-deliverables" }
      ]}
      processSteps={[
        { title: "Define required evidence", desc: "We confirm if you need damage imagery, annotated reports, or access-restricted checks." },
        { title: "Review site and access constraints", desc: "We review the incident site, safety constraints and urgency requirements." },
        { title: "Select capture workflow", desc: "The drone mission is planned to capture the specific damage and context needed." },
        { title: "Process and prepare deliverables", desc: "Evidence is organised into packs and summaries for the insurer or adjuster." },
        { title: "Deliver records and next-step guidance", desc: "Outputs are issued via the Altitude Operations Standard workflow." }
      ]}
      faqs={[
        { question: "Can drone evidence support an insurance claim?", answer: "High-resolution aerial imagery can provide clear objective evidence of damage to support an insurance claim documentation." },
        { question: "Can drones inspect storm-damaged roofs?", answer: "Yes. Drones are the safest and fastest way to inspect roof damage after a storm without deploying ladders or scaffolding." },
        { question: "Can urgent drone inspections be arranged?", answer: "Altitude Hire supports rapid response drone capture for post-incident evidence, subject to weather and permissions." },
        { question: "Can thermal imaging be included?", answer: "Yes. Thermal drone surveys can help identify moisture ingress or temperature issues that may not be visible to the eye." },
        { question: "Can images be annotated for damage evidence?", answer: "Yes. We can provide annotated images that highlight specific areas of concern or damage impact." },
        { question: "Can drones replace loss adjuster site visits?", answer: "Drone capture supports loss adjusters by providing them with high-quality visual data, but it does not necessarily replace their professional site assessment." },
        { question: "What information is needed for an insurance evidence brief?", answer: "We require the site location, type of damage, urgency, and any specific areas of interest for the claim." }
      ]}
      ctaText="Request Insurance Evidence Capture"
      ctaBriefSource="sector-insurance"
    />
  )
}
