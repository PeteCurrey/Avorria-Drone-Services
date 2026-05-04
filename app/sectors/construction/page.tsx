import { Metadata } from 'next'
import SectorLayout from '@/components/sectors/SectorLayout'

export const metadata: Metadata = {
  title: 'Drone Services for Construction | Progress Monitoring & Site Surveys | Altitude Hire',
  description: 'Construction drone monitoring, progress photography, site mapping, orthomosaics, stockpile measurement and stakeholder reporting for contractors, developers and project teams.',
}

export default function ConstructionSectorPage() {
  return (
    <SectorLayout
      slug="construction"
      title="Drone Services for Construction"
      subtitle="Construction drone monitoring, progress photography, site mapping, orthomosaics, stockpile measurement and stakeholder reporting for contractors, developers and project teams."
      heroVideo="/videos/construction.mp4"
      heroPoster="/images/posters/construction.jpg"
      badges={["Progress Monitoring", "Site Mapping", "Stakeholder Updates", "Before/After Records", "Altitude Flight Desk Workflow"]}
      painPoints={{
        title: "Why Construction Teams Use Drone Capture",
        text: "Project teams need regular visual progress records to keep stakeholders and investors updated. Site teams need clear before/after evidence to manage variations and potential disputes.\nQuantity and volume tracking through drone-supported surveys can provide site management with accurate earthworks data, while marketing teams benefit from premium project visuals."
      }}
      useCases={[
        { title: "Weekly/Monthly progress capture", href: "/services/construction-monitoring" },
        { title: "Stakeholder and investor updates", href: "/services/construction-monitoring" },
        { title: "Site logistics and planning", href: "/services/surveying-mapping" },
        { title: "Earthworks and stockpile measurement", href: "/services/stockpile-volume-surveys" },
        { title: "Contractor variation evidence", href: "/operations-standard" },
        { title: "Before-and-after site records", href: "/sample-deliverables" },
        { title: "Marketing and sales visuals", href: "/services/aerial-photography-film" },
        { title: "Site mapping and orthomosaics", href: "/services/orthomosaic-mapping" },
        { title: "As-built visual records", href: "/sample-deliverables" },
        { title: "3D site visualisation", href: "/services/gaussian-splat-capture" }
      ]}
      services={[
        { name: "Construction Monitoring", href: "/services/construction-monitoring", desc: "Repeat aerial capture for progress records and site visibility." },
        { name: "Construction Progress Photography", href: "/services/construction-progress-photography", desc: "Consistent site imagery for progress meetings and reporting." },
        { name: "Drone Time-Lapse Monitoring", href: "/services/drone-time-lapse-monitoring", desc: "Long-term visual records of site transformation." },
        { name: "Surveying & Mapping", href: "/services/surveying-mapping", desc: "Drone mapping outputs including orthomosaics and 3D models." },
        { name: "Orthomosaic Mapping", href: "/services/orthomosaic-mapping", desc: "High-resolution aerial maps for site context and measurement." },
        { name: "Stockpile Volume Surveys", href: "/services/stockpile-volume-surveys", desc: "Material quantity evidence for aggregates and earthworks." },
        { name: "Cut & Fill Analysis", href: "/services/cut-fill-analysis", desc: "Drone-supported earthworks measurement and reporting." },
        { name: "Gaussian Splat Capture", href: "/services/gaussian-splat-capture", desc: "Photorealistic 3D site visualisation for stakeholder engagement." }
      ]}
      bundles={[
        { 
          name: "Construction Progress Pack", 
          fit: "Designed for contractors needing consistent visual updates across the project lifecycle.", 
          outputs: ["Dated image archive", "Repeat viewpoint sets", "Progress report", "Optional video summary"],
          href: "/bundles#construction-progress-pack"
        },
        { 
          name: "Survey Data Pack", 
          fit: "Ideal for site teams requiring mapping, volumetrics and measurement-ready data.", 
          outputs: ["Orthomosaic map", "Point cloud", "Volume reports", "Cut/fill analysis"],
          href: "/bundles#survey-data-pack"
        },
        { 
          name: "Visual Sales Pack", 
          fit: "For developers and marketing teams needing premium project visuals.", 
          outputs: ["Edited video", "High-res image set", "FPV flythrough", "360 panoramas"],
          href: "/bundles#visual-sales-pack"
        },
        { 
          name: "Immersive Digital Capture Pack", 
          fit: "Advanced 3D site records for visualisation and stakeholder review.", 
          outputs: ["Gaussian Splat", "3D model", "Digital twin record", "Web viewer"],
          href: "/bundles#immersive-digital-capture-pack"
        }
      ]}
      deliverables={[
        { name: "Construction Progress Image Archive", href: "/sample-deliverables" },
        { name: "Construction Progress Report", href: "/sample-deliverables" },
        { name: "Orthomosaic Map", href: "/sample-deliverables" },
        { name: "Stockpile Volume Report", href: "/sample-deliverables" },
        { name: "Cut and Fill Calculation", href: "/sample-deliverables" },
        { name: "Aerial Progress Video", href: "/sample-deliverables" }
      ]}
      processSteps={[
        { title: "Define project outcome", desc: "We confirm if you need progress imagery, survey data, or stakeholder reporting visuals." },
        { title: "Review site and access constraints", desc: "We coordinate with site teams on take-off points, safety and restricted areas." },
        { title: "Select capture workflow", desc: "We use repeat viewpoint technology or mapping grids to ensure data consistency." },
        { title: "Process and prepare deliverables", desc: "Data is processed into reports, maps or video summaries for your team." },
        { title: "Deliver records and next-step guidance", desc: "Final outputs are delivered through the Altitude Operations Standard workflow." }
      ]}
      faqs={[
        { question: "How often can a construction site be captured by drone?", answer: "Capture frequency is tailored to the project speed — common intervals are weekly, fortnightly or monthly." },
        { question: "Can drone images support progress meetings?", answer: "Yes. High-resolution aerial views provide a clear, shared perspective for site meetings and project reviews." },
        { question: "Can drones help with stockpile measurement?", answer: "Drone mapping can generate volume calculations for site stockpiles, quarry materials and earthworks." },
        { question: "Can construction drone footage be used for marketing?", answer: "Absolutely. We can provide high-end cinematic edits alongside technical progress capture." },
        { question: "Can repeat viewpoints be captured?", answer: "Yes. We use GPS-coordinated flight paths to ensure progress imagery is captured from the same viewpoints every time." },
        { question: "Can drone outputs support dispute or variation records?", answer: "Dated aerial records provide objective evidence of site conditions and progress, supporting variation and dispute resolution." },
        { question: "What information is needed before flying a construction site?", answer: "We require site location, any safety constraints, required deliverables and preferred capture frequency." }
      ]}
      ctaText="Plan Construction Drone Monitoring"
      ctaBriefSource="sector-construction"
    />
  )
}
