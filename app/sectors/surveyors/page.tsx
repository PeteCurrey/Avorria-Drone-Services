import { Metadata } from 'next'
import SectorLayout from '@/components/sectors/SectorLayout'

export const metadata: Metadata = {
  title: 'Drone Surveying Support for Surveyors | Mapping, Point Clouds & Volumes | Altitude Hire',
  description: 'Drone mapping, orthomosaics, point clouds, photogrammetry, LiDAR-supported workflows, volumetric surveys and site data capture for surveyors, consultants and technical teams.',
}

export default function SurveyorsSectorPage() {
  return (
    <SectorLayout
      slug="surveyors"
      title="Drone Services for Surveyors and Mapping Professionals"
      subtitle="Drone mapping, orthomosaics, point clouds, photogrammetry, LiDAR-supported workflows, volumetric surveys and site data capture for surveyors, consultants and technical teams."
      heroVideo="/videos/surveying.mp4"
      heroPoster="/images/posters/surveyors.jpg"
      badges={["Mapping", "Point Clouds", "Orthomosaics", "Volumetrics", "Altitude Flight Desk Workflow"]}
      painPoints={{
        title: "Why Surveying Teams Use Drone Capture",
        text: "Survey and technical teams need efficient site data over large or complex areas. Traditional ground-based methods can be time-consuming and labor-intensive for mapping and measurement.\nDrone capture provides high-resolution visual and 3D outputs that support project understanding, volume calculations, and cut/fill analysis, fitting into CAD/GIS/BIM workflows where required."
      }}
      useCases={[
        { title: "High-resolution orthomosaic maps", href: "/services/orthomosaic-mapping" },
        { title: "3D point cloud and mesh generation", href: "/services/photogrammetry" },
        { title: "Site logistics and context mapping", href: "/services/surveying-mapping" },
        { title: "Stockpile and quarry volumetrics", href: "/services/stockpile-volume-surveys" },
        { title: "Cut and fill earthworks analysis", href: "/services/cut-fill-analysis" },
        { title: "Infrastructure corridor monitoring", href: "/services/rail-corridor-surveys" },
        { title: "Topographic mapping support", href: "/services/surveying-mapping" },
        { title: "Digital twin-style visual records", href: "/services/digital-twin-capture" },
        { title: "LiDAR-supported terrain capture", href: "/services/lidar-point-cloud-surveys" },
        { title: "As-built visual site records", href: "/sample-deliverables" }
      ]}
      services={[
        { name: "Surveying & Mapping", href: "/services/surveying-mapping", desc: "Drone mapping outputs including orthomosaics and survey-ready data." },
        { name: "Orthomosaic Mapping", href: "/services/orthomosaic-mapping", desc: "High-resolution aerial maps for site documentation and measurement." },
        { name: "Drone Photogrammetry", href: "/services/photogrammetry", desc: "3D models, textured meshes and point-cloud outputs from imagery." },
        { name: "LiDAR Point Cloud Surveys", href: "/services/lidar-point-cloud-surveys", desc: "Specialist point-cloud capture for terrain and infrastructure." },
        { name: "Volumetric Surveys", href: "/services/volumetric-surveys", desc: "Drone-based measurement for stockpiles and earthworks." },
        { name: "Stockpile Volume Surveys", href: "/services/stockpile-volume-surveys", desc: "Material quantity evidence for quarry and construction sites." },
        { name: "Cut & Fill Analysis", href: "/services/cut-fill-analysis", desc: "Earthworks comparison and surface analysis reporting." },
        { name: "Infrastructure Surveys", href: "/services/infrastructure-inspections", desc: "Data capture for bridges, towers and industrial structures." }
      ]}
      bundles={[
        { 
          name: "Survey Data Pack", 
          fit: "The standard package for technical teams needing mapping and measurement data.", 
          outputs: ["Orthomosaic map", "Point cloud", "Volume report", "Cut/fill analysis"],
          href: "/bundles#survey-data-pack"
        },
        { 
          name: "Construction Progress Pack", 
          fit: "Ideal for tracking site transformation alongside survey-grade data.", 
          outputs: ["Dated imagery", "Repeat viewpoints", "Progress report", "Mapping context"],
          href: "/bundles#construction-progress-pack"
        },
        { 
          name: "Immersive Digital Capture Pack", 
          fit: "Advanced 3D records for visualisation and stakeholder review.", 
          outputs: ["Gaussian Splat", "3D model", "Digital twin record", "Web viewer"],
          href: "/bundles#immersive-digital-capture-pack"
        }
      ]}
      deliverables={[
        { name: "Orthomosaic Map", href: "/sample-deliverables" },
        { name: "Drone Point Cloud", href: "/sample-deliverables" },
        { name: "Stockpile Volume Report", href: "/sample-deliverables" },
        { name: "Cut and Fill Calculation", href: "/sample-deliverables" },
        { name: "3D Model", href: "/sample-deliverables" },
        { name: "Gaussian Splat Visualisation", href: "/sample-deliverables" }
      ]}
      processSteps={[
        { title: "Define data requirements", desc: "We confirm if you need mapping, point clouds, volume reports or GIS exports." },
        { title: "Review site and control requirements", desc: "We coordinate on ground control points (GCPs) and accuracy needs." },
        { title: "Select capture workflow", desc: "We select the appropriate drone, sensor and overlap pattern for the data type." },
        { title: "Process and verify data", desc: "Imagery is processed into orthomosaics and models with accuracy checks." },
        { title: "Deliver records and next-step guidance", desc: "Technical data is issued through the Altitude Operations Standard workflow." }
      ]}
      faqs={[
        { question: "Can drone data support survey workflows?", answer: "Yes. Drone mapping and 3D capture can provide surveyors with efficient site-wide data for context and measurement." },
        { question: "Are drone surveys survey-grade?", answer: "They can be where the project is planned with the correct methodology, ground control, RTK workflow and processing." },
        { question: "Can outputs be used in CAD or GIS?", answer: "Yes. We can provide standard exports like GeoTIFF, LAS/LAZ and point clouds for use in technical software." },
        { question: "What formats can be provided?", answer: "Common outputs include JPG, PDF, GeoTIFF, DXF, LAS, LAZ, and E57 files." },
        { question: "Can drone data support volume calculations?", answer: "Drone-supported surveys are an excellent way to calculate stockpile and earthworks volumes across large sites." },
        { question: "Can LiDAR be provided?", answer: "Altitude Hire supports LiDAR-supported point cloud capture for specific infrastructure and terrain requirements." },
        { question: "What accuracy information is required before quoting?", answer: "We need to know the required GSD (Ground Sampling Distance) and absolute accuracy requirements." }
      ]}
      ctaText="Discuss Survey Outputs"
      ctaBriefSource="sector-surveyors"
    />
  )
}
