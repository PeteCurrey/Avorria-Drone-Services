import { Metadata } from 'next'
import SectorLayout from '@/components/sectors/SectorLayout'

export const metadata: Metadata = {
  title: 'Drone Services for Heritage & Conservation | Altitude Hire',
  description: 'Sensitive aerial capture, roof inspection, building envelope records, photogrammetry, Gaussian Splats and digital twin-style visual documentation for historic buildings, estates and conservation projects.',
}

export default function HeritageSectorPage() {
  return (
    <SectorLayout
      slug="heritage-conservation"
      title="Drone Services for Heritage and Conservation"
      subtitle="Sensitive aerial capture, roof inspection, building envelope records, photogrammetry, Gaussian Splats and digital twin-style visual documentation for historic buildings, estates and conservation projects."
      heroVideo="/videos/hero.mp4"
      heroPoster="/images/posters/heritage.jpg"
      badges={["Sensitive Capture", "Digital Preservation", "Condition Records", "3D Modelling", "Altitude Flight Desk Workflow"]}
      painPoints={{
        title: "Why Heritage Teams Use Drone Capture",
        text: "Historic buildings and conservation assets often require non-destructive condition auditing. Accessing high-level details on listed buildings, church roofs or historic estates can be challenging and expensive using traditional scaffolding.\nDrone capture provides a sensitive, low-impact way to document asset condition, create high-accuracy digital twins, and support conservation planning without the risks associated with physical access equipment."
      }}
      useCases={[
        { title: "Listed building roof inspections", href: "/services/roof-inspections" },
        { title: "Heritage asset digital preservation", href: "/services/digital-twin-capture" },
        { title: "Historic building envelope records", href: "/services/building-envelope-inspections" },
        { title: "Conservation project documentation", href: "/operations-standard" },
        { title: "Archeological site mapping", href: "/services/surveying-mapping" },
        { title: "Photorealistic 3D Gaussian Splats", href: "/services/gaussian-splat-capture" },
        { title: "Estate boundary and land records", href: "/services/orthomosaic-mapping" },
        { title: "Storm damage evidence for heritage", href: "/sectors/insurance-loss-adjusters" },
        { title: "High-level facade and stone audits", href: "/services/facade-inspections" },
        { title: "Media and marketing for historic sites", href: "/services/aerial-photography-film" }
      ]}
      services={[
        { name: "Heritage & Conservation Drone Surveys", href: "/services/heritage-conservation-archaeology", desc: "Sensitive aerial capture for listed buildings and conservation projects." },
        { name: "Roof Inspections", href: "/services/roof-inspections", desc: "High-resolution roof, gutter and drainage inspection evidence." },
        { name: "Building Envelope Inspections", href: "/services/building-envelope-inspections", desc: "Condition capture for facades, parapets and high-level details." },
        { name: "Drone Photogrammetry", href: "/services/photogrammetry", desc: "3D models, point clouds and textured meshes for heritage assets." },
        { name: "Gaussian Splat Capture", href: "/services/gaussian-splat-capture", desc: "Photorealistic 3D visualisation for historic site records and viewing." },
        { name: "360 Aerial Panoramas", href: "/services/360-aerial-panoramas", desc: "Interactive aerial viewing for estates and heritage sites." },
        { name: "Digital Twin Capture", href: "/services/digital-twin-capture", desc: "Visual digital twin-style capture for digital preservation." },
        { name: "Aerial Photography & Film", href: "/services/aerial-photography-film", desc: "Premium marketing visuals for historic property and venues." }
      ]}
      bundles={[
        { 
          name: "Immersive Digital Capture Pack", 
          fit: "Ideal for creating high-end 3D records and digital twins of heritage assets.", 
          outputs: ["Gaussian Splat", "3D model", "Digital twin record", "Web viewer"],
          href: "/bundles#immersive-digital-capture-pack"
        },
        { 
          name: "Building Envelope & Asset Condition Pack", 
          fit: "Designed for heritage property managers requiring condition visibility across facades and elevations.", 
          outputs: ["Elevation images", "Facade details", "Annotated evidence", "Condition summary"],
          href: "/bundles#building-envelope-asset-condition-pack"
        },
        { 
          name: "Survey Data Pack", 
          fit: "For high-accuracy mapping and terrain data of historic estates and sites.", 
          outputs: ["Orthomosaic map", "Point cloud", "GIS data", "Visual model"],
          href: "/bundles#survey-data-pack"
        }
      ]}
      deliverables={[
        { name: "Historic Asset Image Set", href: "/sample-deliverables" },
        { name: "3D Heritage Model", href: "/sample-deliverables" },
        { name: "Gaussian Splat Visualisation", href: "/sample-deliverables" },
        { name: "Annotated Condition Images", href: "/sample-deliverables" },
        { name: "Digital Twin Record", href: "/sample-deliverables" },
        { name: "360 Aerial Panorama", href: "/sample-deliverables" }
      ]}
      processSteps={[
        { title: "Define conservation outcome", desc: "We confirm if you need inspection evidence, digital preservation or 3D visualisation." },
        { title: "Review site and sensitivity constraints", desc: "We review the historic environment, access constraints and safety requirements." },
        { title: "Select capture workflow", desc: "We use appropriate drones and sensors for low-impact, high-resolution capture." },
        { title: "Process and prepare outputs", desc: "Data is processed into models, reports or interactive viewers for heritage teams." },
        { title: "Deliver records and next-step guidance", desc: "Final records are issued via the Altitude Operations Standard workflow." }
      ]}
      faqs={[
        { question: "Is drone capture safe for historic buildings?", answer: "Yes. Drones provide a non-destructive way to inspect high-level details without the risks of physical access equipment or worker safety at height." },
        { question: "Can drones inspect listed building roofs?", answer: "Drones are an excellent first-step for listed building roof inspections, identifying maintenance needs while respecting the building’s sensitivity." },
        { question: "What is digital preservation?", answer: "Digital preservation involves creating high-accuracy 3D models and digital twins to record asset condition for future reference or reconstruction." },
        { question: "Can Gaussian Splats help visualize heritage sites?", answer: "Yes. Gaussian Splats offer a photorealistic, interactive way for stakeholders and the public to explore historic sites from any angle." },
        { question: "Are drone surveys non-destructive?", answer: "Absolutely. Drone capture is entirely non-contact, making it ideal for sensitive heritage and conservation environments." },
        { question: "What information is needed for a heritage brief?", answer: "We require site location, building type, required deliverables, and any specific conservation or safety protocols." }
      ]}
      ctaText="Plan Heritage Drone Capture"
      ctaBriefSource="sector-heritage"
    />
  )
}
