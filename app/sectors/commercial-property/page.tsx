import { Metadata } from 'next'
import SectorLayout from '@/components/sectors/SectorLayout'

export const metadata: Metadata = {
  title: 'Drone Services for Commercial Property | Roof & Building Inspections | Altitude Hire',
  description: 'Commercial drone inspections, roof surveys, building envelope capture, property marketing visuals, insurance evidence and immersive 3D visualisation for property owners, landlords, agents and asset managers.',
}

export default function CommercialPropertySectorPage() {
  return (
    <SectorLayout
      slug="commercial-property"
      title="Drone Services for Commercial Property"
      subtitle="Commercial drone inspections, roof surveys, building envelope capture, property marketing visuals, insurance evidence and immersive 3D visualisation for property owners, landlords, agents and asset managers."
      heroVideo="/videos/hero.mp4"
      heroPoster="/images/posters/commercial-property.jpg"
      badges={["Roof Inspections", "Facade Checks", "Marketing Visuals", "Asset Evidence", "Altitude Flight Desk Workflow"]}
      painPoints={{
        title: "Why Property Teams Use Drone Capture",
        text: "Commercial roofs and facades need regular condition visibility to prevent costly long-term issues. Landlords and managing agents need visual evidence to support maintenance decisions and contractor scoping.\nAgents benefit from premium aerial media to market commercial space, while developers and owners can use immersive 3D visualisation for stakeholder engagement and asset records."
      }}
      useCases={[
        { title: "Roof and facade condition checks", href: "/services/roof-inspections" },
        { title: "Commercial property marketing", href: "/services/aerial-photography-film" },
        { title: "Managing agent reporting", href: "/services/commercial-property-drone-surveys" },
        { title: "Insurance and dilapidation records", href: "/sectors/insurance-loss-adjusters" },
        { title: "Maintenance budget approval evidence", href: "/operations-standard" },
        { title: "Tenant-side repair records", href: "/sample-deliverables" },
        { title: "Pre-acquisition visual surveys", href: "/services/roof-inspections" },
        { title: "Building envelope documentation", href: "/services/building-envelope-inspections" },
        { title: "360 degree site panoramas", href: "/services/360-aerial-panoramas" },
        { title: "Immersive Gaussian Splat records", href: "/services/gaussian-splat-capture" }
      ]}
      services={[
        { name: "Commercial Property Drone Surveys", href: "/services/commercial-property-drone-surveys", desc: "Aerial condition evidence for offices, industrial estates and managed assets." },
        { name: "Roof Inspections", href: "/services/roof-inspections", desc: "High-resolution roof, gutter and drainage inspection evidence." },
        { name: "Building Envelope Inspections", href: "/services/building-envelope-inspections", desc: "Condition capture for facades, cladding, parapets and high-level details." },
        { name: "Facade Inspections", href: "/services/facade-inspections", desc: "Aerial visual inspection support for elevations and glazing." },
        { name: "Aerial Photography & Film", href: "/services/aerial-photography-film", desc: "Premium marketing visuals for commercial property portfolios." },
        { name: "360 Aerial Panoramas", href: "/services/360-aerial-panoramas", desc: "Interactive site context for developments and estates." },
        { name: "Gaussian Splat Capture", href: "/services/gaussian-splat-capture", desc: "Photorealistic 3D visualisation for property marketing and records." },
        { name: "Insurance & Claims", href: "/services/insurance-loss-adjuster-surveys", desc: "Fast aerial evidence capture for damage and claim support." }
      ]}
      bundles={[
        { 
          name: "Roof Intelligence Pack", 
          fit: "Ideal for property teams needing comprehensive visual evidence across commercial roof areas.", 
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
          name: "Visual Sales Pack", 
          fit: "Premium media assets for commercial agents and property marketing teams.", 
          outputs: ["Edited video", "High-res image set", "Social clips", "360 panorama"],
          href: "/bundles#visual-sales-pack"
        },
        { 
          name: "Immersive Digital Capture Pack", 
          fit: "Advanced 3D records for high-value asset visualisation and engagement.", 
          outputs: ["Gaussian Splat", "3D model", "Digital twin record", "Web viewer"],
          href: "/bundles#immersive-digital-capture-pack"
        }
      ]}
      deliverables={[
        { name: "Roof Inspection Image Set", href: "/sample-deliverables" },
        { name: "Building Envelope Condition Pack", href: "/sample-deliverables" },
        { name: "Aerial Media Pack", href: "/sample-deliverables" },
        { name: "360 Aerial Panorama", href: "/sample-deliverables" },
        { name: "Gaussian Splat Visualisation", href: "/sample-deliverables" },
        { name: "Insurance Evidence Pack", href: "/sample-deliverables" }
      ]}
      processSteps={[
        { title: "Define project outcome", desc: "We confirm if you need inspection evidence, marketing media or 3D visualisation." },
        { title: "Review site and access constraints", desc: "We review the property environment, airspace and tenant coordination needs." },
        { title: "Select capture workflow", desc: "We select the appropriate drone, sensor and capture path for the outcome." },
        { title: "Process and prepare deliverables", desc: "Data is processed into reports, image packs or interactive viewers." },
        { title: "Deliver records and next-step guidance", desc: "Outputs are issued via the Altitude Operations Standard workflow." }
      ]}
      faqs={[
        { question: "How can drones help commercial property owners?", answer: "Drones provide fast, high-resolution condition visibility across large roofs and facades, supporting maintenance planning and risk reduction." },
        { question: "Can drones inspect roofs, facades and gutters?", answer: "Yes. Drones are ideally suited for building envelope inspections, capturing detailed visual evidence without scaffolding." },
        { question: "Can drone visuals help market a property?", answer: "Premium aerial photography and video can significantly enhance commercial property marketing and site context." },
        { question: "Can Gaussian Splats support commercial property visualisation?", answer: "Yes. Gaussian Splats provide a photorealistic, interactive 3D record that is excellent for marketing and remote site viewing." },
        { question: "Can drone evidence support maintenance planning?", answer: "Clear visual records allow property teams to prioritise repairs and budget more effectively." },
        { question: "Can drone capture support insurance or dilapidation records?", answer: "Detailed before-and-after visual evidence can be critical for insurance claims and dilapidation negotiations." }
      ]}
      ctaText="Start Commercial Property Brief"
      ctaBriefSource="sector-property"
    />
  )
}
