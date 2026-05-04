// app/gaussian-splat/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowUpRight, 
  CheckCircle2, 
  HelpCircle, 
  Zap, 
  Target, 
  Layers, 
  Eye, 
  Users,
  Search,
  Building2,
  Box,
  ChevronRight,
  ShieldCheck,
  Activity,
  FileText,
  Database,
  ArrowRight
} from 'lucide-react'
import SectionTag from '@/components/ui/SectionTag'
import FAQAccordion from '@/components/ui/FAQAccordion'

export const metadata: Metadata = {
  title: 'Gaussian Splat Drone Capture UK | Immersive 3D Site Visualisation | Altitude Hire',
  description: 'Altitude Hire provides Gaussian Splat drone capture for immersive 3D site visualisation, property marketing, construction records, heritage documentation, stakeholder engagement and digital twin-style visual assets.',
}

export default function GaussianSplatShowcasePage() {
  const faqs = [
    {
      question: 'What is a Gaussian Splat?',
      answer: 'A Gaussian Splat is a photorealistic 3D reconstruction created from overlapping images. It allows users to explore a captured environment from different viewpoints instead of viewing it only as flat photos or video.'
    },
    {
      question: 'Can a Gaussian Splat be made from drone footage?',
      answer: 'Gaussian Splats are usually created from carefully captured overlapping imagery. Drone imagery can be used, especially when combined with ground-level capture for better coverage and visual continuity.'
    },
    {
      question: 'Is a Gaussian Splat survey-grade?',
      answer: 'Not by default. Gaussian Splats are primarily visualisation assets. For measurement-critical work, capture should be combined with photogrammetry, LiDAR, RTK, ground control or survey-controlled workflows.'
    },
    {
      question: 'What is Gaussian Splat capture best used for?',
      answer: 'It is best for immersive visualisation, stakeholder engagement, site records, property marketing, construction progress, heritage documentation, public consultation and location scouting.'
    },
    {
      question: 'Can the Gaussian Splat be embedded on a website?',
      answer: 'Yes, where technically suitable. A web-viewable model can be prepared using an appropriate viewer workflow. For performance reasons, interactive models should usually load on demand rather than automatically.'
    },
    {
      question: 'How is it different from photogrammetry?',
      answer: 'Photogrammetry is often used for measurable 3D models, meshes, orthomosaics and survey-related outputs. Gaussian Splats usually provide a more photorealistic viewing experience but are not automatically measurement-ready.'
    }
  ]

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <main className="bg-dark text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 px-10 md:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/gaussian-splat/casa-hotel.jpg" 
            alt="Gaussian Splat drone capture example for immersive site visualisation"
            fill
            className="object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/20 via-transparent to-dark" />
        </div>
        
        <div className="relative z-10 max-w-[1000px]">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-accent" />
            <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">3D Visual Intelligence</span>
          </div>
          <h1 className="font-display text-hero leading-none mb-8 tracking-wider uppercase">
            GAUSSIAN SPLAT <br/>
            <span className="text-accent underline underline-offset-8">DRONE CAPTURE</span> <br/>
            FOR IMMERSIVE <br/>SITE VISUALISATION
          </h1>
          <p className="font-body text-xl md:text-2xl text-white/60 leading-relaxed mb-12 max-w-[800px] uppercase tracking-widest font-light">
            Photorealistic 3D visualisation created from drone and ground-level imagery — ideal for property, construction, heritage, public consultation, site records, stakeholder presentations and digital twin-style visual capture.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 mb-16">
            <Link href="/services/gaussian-splat-capture" className="bg-accent text-dark font-display text-2xl tracking-[0.1em] px-12 py-6 hover:bg-white transition-all text-center">
              REQUEST GAUSSIAN SPLAT CAPTURE
            </Link>
            <Link href="/services/photogrammetry" className="border border-white/20 text-white font-display text-2xl tracking-[0.1em] px-12 py-6 hover:bg-white hover:text-dark transition-all text-center">
              VIEW DRONE PHOTOGRAMMETRY
            </Link>
          </div>
          <div className="flex items-center gap-8 text-white/30 font-ui text-[10px] tracking-[0.3em] uppercase">
             <span>Drone capture</span>
             <div className="w-1 h-1 rounded-full bg-accent" />
             <span>Photorealistic 3D visualisation</span>
             <div className="w-1 h-1 rounded-full bg-accent" />
             <span>Web-ready outputs</span>
             <div className="w-1 h-1 rounded-full bg-accent" />
             <span>Commercial site records</span>
          </div>
        </div>
      </section>

      {/* 2. Simple Explanation Section */}
      <section className="py-32 px-10 md:px-20 bg-mid border-y border-white/5">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="svc-tag mb-8"><SectionTag number="01" text="Clarification" /></div>
            <h2 className="font-display text-5xl md:text-6xl text-white mb-10 uppercase leading-none">
              WHAT IS A <br/><span className="text-accent underline underline-offset-8 decoration-accent/30">GAUSSIAN SPLAT?</span>
            </h2>
            <p className="font-body text-xl text-white/50 leading-relaxed mb-8 uppercase tracking-widest font-light">
              A Gaussian Splat is a photorealistic 3D scene reconstructed from overlapping images. Instead of viewing a site as flat photos or a conventional video, users can move through the captured environment and inspect it from different angles.
            </p>
            <p className="font-body text-lg text-white/40 leading-relaxed mb-12">
              For commercial clients, the value is not the technology itself. The value is the ability to preserve, present and explore a real-world location as an immersive visual asset.
            </p>
          </div>
          <div className="bg-dark/40 border border-white/5 p-12 backdrop-blur-sm">
            <h3 className="font-ui text-[10px] tracking-[0.4em] uppercase text-accent mb-8">Best For:</h3>
            <ul className="space-y-6">
              {[
                "Immersive site visualisation",
                "Property and development marketing",
                "Construction progress records",
                "Heritage and conservation documentation",
                "Stakeholder briefings",
                "Film and location scouting",
                "Public consultation",
                "Digital twin-style visual records"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 group">
                  <CheckCircle2 className="w-5 h-5 text-accent/40 group-hover:text-accent transition-colors" />
                  <span className="font-ui text-[11px] tracking-widest uppercase text-white/60 group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Visual Example Section */}
      <section className="py-32 px-10 md:px-20 bg-dark">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col items-center text-center mb-24">
            <div className="svc-tag mb-8"><SectionTag number="02" text="Proof of Output" /></div>
            <h2 className="font-display text-6xl md:text-7xl text-white mb-6 uppercase tracking-tighter">EXPLORE THE OUTPUT <br/><span className="text-accent">BEFORE THE BUILD</span></h2>
            <p className="font-body text-white/40 max-w-2xl uppercase tracking-widest text-sm leading-relaxed">
              Gaussian Splatting captures subtle material properties, lighting and transparency that traditional photogrammetry often struggles to reconstruct.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Casa Hotel Example */}
            <div className="group">
              <div className="relative aspect-[16/9] overflow-hidden border border-white/10 mb-8">
                <Image 
                  src="/images/gaussian-splat/casa-hotel.jpg" 
                  alt="Photorealistic 3D Gaussian Splat model screenshot of commercial asset"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-all" />
                <div className="absolute top-6 left-6 flex gap-2">
                   <span className="bg-dark/80 backdrop-blur-md px-4 py-1.5 border border-white/10 font-ui text-[10px] tracking-widest uppercase text-white/60">Commercial Property</span>
                </div>
              </div>
              <h3 className="font-display text-3xl text-white mb-4 uppercase tracking-widest">PHOTOREALISTIC SITE CAPTURE</h3>
              <p className="font-body text-sm text-white/40 leading-relaxed uppercase tracking-tighter">
                A Gaussian Splat can preserve the spatial feel of a site far more effectively than a flat image set.
              </p>
            </div>

            {/* Heritage House Example */}
            <div className="group">
              <div className="relative aspect-[16/9] overflow-hidden border border-white/10 mb-8">
                <Image 
                  src="/images/gaussian-splat/heritage-house.jpg" 
                  alt="Immersive 3D site capture using Gaussian Splat workflow for heritage project"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-all" />
                <div className="absolute top-6 left-6 flex gap-2">
                   <span className="bg-dark/80 backdrop-blur-md px-4 py-1.5 border border-white/10 font-ui text-[10px] tracking-widest uppercase text-white/60">Heritage & Conservation</span>
                </div>
              </div>
              <h3 className="font-display text-3xl text-white mb-4 uppercase tracking-widest">IMMERSIVE WALKTHROUGH VIEW</h3>
              <p className="font-body text-sm text-white/40 leading-relaxed uppercase tracking-tighter">
                Stakeholders can explore a captured environment from multiple angles without being physically on site.
              </p>
            </div>

            {/* Secondary Row */}
            <div className="group">
              <div className="relative aspect-[16/9] overflow-hidden border border-white/10 mb-8">
                <Image 
                  src="/images/gaussian-splat/casa-hotel.jpg" 
                  alt="Drone-based Gaussian Splat visualisation for commercial property"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-all" />
              </div>
              <h3 className="font-display text-3xl text-white mb-4 uppercase tracking-widest">DRONE AND GROUND-LEVEL CAPTURE</h3>
              <p className="font-body text-sm text-white/40 leading-relaxed uppercase tracking-tighter">
                Combining aerial and ground-level imagery creates a stronger visual record of the space.
              </p>
            </div>

            <div className="group">
              <div className="relative aspect-[16/9] overflow-hidden border border-white/10 mb-8">
                <Image 
                  src="/images/gaussian-splat/heritage-house.jpg" 
                  alt="Photorealistic 3D Gaussian Splat model screenshot"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-all" />
              </div>
              <h3 className="font-display text-3xl text-white mb-4 uppercase tracking-widest">DIGITAL TWIN-STYLE PRESENTATION</h3>
              <p className="font-body text-sm text-white/40 leading-relaxed uppercase tracking-tighter">
                A useful visual layer for asset records, progress reporting and project communication.
              </p>
            </div>
          </div>

          <div className="mt-20 p-8 border border-accent/20 bg-accent/5 text-center">
             <p className="font-ui text-[11px] tracking-[0.3em] uppercase text-accent/60">
               Interactive model viewer coming soon. Current visuals are provided as example Gaussian Splat outputs.
             </p>
          </div>
        </div>
      </section>

      {/* 4. Commercial Use Cases Section */}
      <section className="py-32 px-10 md:px-20 bg-mid">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-20">
            <div className="svc-tag mb-8"><SectionTag number="03" text="Utility" /></div>
            <h2 className="font-display text-6xl text-white uppercase leading-none">WHERE GAUSSIAN SPLATS <br/><span className="text-accent">ADD COMMERCIAL VALUE</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/5">
            {[
              { title: "Property & Development", desc: "Show investors, buyers, tenants or planning stakeholders a location in a more immersive way than photos or video alone." },
              { title: "Construction Progress", desc: "Create visual records of site stages, access conditions, layout changes and project milestones." },
              { title: "Heritage & Conservation", desc: "Capture historic buildings, monuments, estates and sensitive sites as photorealistic visual records." },
              { title: "Public Consultation", desc: "Help stakeholders understand a site, setting or proposed works using immersive visual evidence." },
              { title: "Facilities & Asset Management", desc: "Preserve visual records of estates, buildings, roof areas, plant zones and difficult-to-access locations." },
              { title: "Insurance & Claims", desc: "Create a visual record of condition, damage, access constraints or post-incident site context." },
              { title: "Film, TV & Location Scouting", desc: "Allow creative teams to assess locations remotely using immersive visual context." },
              { title: "Tourism, Venues & Estates", desc: "Create engaging visual experiences for destinations, venues, visitor attractions and private estates." }
            ].map((use) => (
              <div key={use.title} className="bg-dark p-12 group hover:bg-accent/5 transition-all flex flex-col h-full border border-transparent hover:border-accent/20">
                <h3 className="font-display text-2xl text-white mb-6 uppercase tracking-widest group-hover:text-accent transition-colors leading-tight">{use.title}</h3>
                <p className="font-body text-[11px] text-white/30 uppercase tracking-tighter leading-relaxed">
                  {use.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Capture Workflow Section */}
      <section className="py-32 px-10 md:px-20 bg-dark border-y border-white/5 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="svc-tag mb-12"><SectionTag number="04" text="Execution" /></div>
          <h2 className="font-display text-6xl text-white mb-20 uppercase leading-none text-center">HOW DRONE CAPTURE <br/><span className="text-accent">SUPPORTS GAUSSIAN SPLATTING</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-white/5 border border-white/5">
            {[
              { step: '01', title: 'Project Brief', desc: 'Define the area, purpose, required output, access constraints and viewing requirements.' },
              { step: '02', title: 'Capture Planning', desc: 'Plan drone and ground-level image capture with suitable overlap, lighting, viewpoints and coverage.' },
              { step: '03', title: 'Drone & Ground-Level Capture', desc: 'Capture high-overlap imagery from aerial and ground-level positions where appropriate.' },
              { step: '04', title: 'Processing & Cleanup', desc: 'Process the capture into a Gaussian Splat, remove unwanted artefacts, clean floating geometry and set viewer positions.' },
              { step: '05', title: 'Delivery & Presentation', desc: 'Deliver screenshots, flythrough video, web-viewable model or files for later integration depending on project scope.' }
            ].map((p, i) => (
              <div key={i} className="p-10 bg-dark relative group hover:bg-accent/5 transition-all">
                <span className="font-display text-6xl text-accent/10 mb-8 block group-hover:text-accent/30 transition-colors">{p.step}</span>
                <h3 className="font-display text-xl text-white mb-6 tracking-widest uppercase leading-tight">{p.title}</h3>
                <p className="font-body text-[10px] text-white/40 uppercase tracking-widest leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center font-ui text-[11px] tracking-[0.3em] uppercase text-white/20">
            The capture method is planned around the intended output.
          </p>
        </div>
      </section>

      {/* 6. Deliverables Section */}
      <section className="py-32 px-10 md:px-20 bg-mid">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3">
              <div className="svc-tag mb-8"><SectionTag number="05" text="Deliverables" /></div>
              <h2 className="font-display text-5xl mb-8 uppercase tracking-wider">WHAT YOU <br/><span className="text-accent">CAN RECEIVE</span></h2>
              <p className="font-body text-white/40 leading-relaxed uppercase tracking-widest text-xs">
                We deliver Gaussian Splats in formats tailored to the project requirement, ensuring smooth viewing across desktop and web environments.
              </p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
               {[
                 { title: "Gaussian Splat Visualisation", desc: "A photorealistic 3D visual scene created from drone and/or ground-level imagery." },
                 { title: "Web-Ready Viewer", desc: "A browser-viewable presentation format where suitable for the project and hosting setup." },
                 { title: "Screenshot Set", desc: "High-quality still images extracted from the model for reports, presentations and marketing." },
                 { title: "Flythrough Video", desc: "A guided video movement through the Gaussian Splat for easy sharing and stakeholder review." },
                 { title: "Source / Master Files", desc: "Project files may be provided where agreed and technically appropriate." },
                 { title: "Hybrid Capture Pack", desc: "Gaussian Splat combined with photogrammetry, drone video, 360 panoramas or LiDAR-supported outputs where required." }
               ].map((item) => (
                 <div key={item.title} className="p-8 bg-dark border border-white/5 flex flex-col group hover:border-accent/30 transition-all">
                   <h4 className="font-display text-xl text-white mb-4 tracking-widest uppercase group-hover:text-accent transition-colors">{item.title}</h4>
                   <p className="font-body text-[10px] text-white/30 uppercase tracking-tighter leading-relaxed">
                     {item.desc}
                   </p>
                 </div>
               ))}
            </div>
          </div>
          <p className="mt-12 text-center font-ui text-[10px] tracking-[0.2em] uppercase text-white/20 italic">
            Output formats depend on project scope, intended use and viewing environment.
          </p>
        </div>
      </section>

      {/* 7. Comparison Section */}
      <section className="py-32 px-10 md:px-20 bg-dark border-y border-white/5">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-20 text-center">
            <div className="svc-tag mb-8 inline-flex"><SectionTag number="06" text="Benchmarking" /></div>
            <h2 className="font-display text-5xl md:text-6xl text-white mb-6 uppercase tracking-tighter">GAUSSIAN SPLAT VS <br/><span className="text-accent">PHOTOGRAMMETRY, LIDAR AND 360 PANORAMAS</span></h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-left">
                  <th className="py-8 px-6 font-ui text-[11px] tracking-[0.3em] uppercase text-accent">Output Type</th>
                  <th className="py-8 px-6 font-ui text-[11px] tracking-[0.3em] uppercase text-accent">Best For</th>
                  <th className="py-8 px-6 font-ui text-[11px] tracking-[0.3em] uppercase text-accent">Strengths</th>
                  <th className="py-8 px-6 font-ui text-[11px] tracking-[0.3em] uppercase text-accent">Limitations</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { 
                    type: "Gaussian Splat", 
                    for: "Photorealistic visualisation and immersive walkthroughs", 
                    strengths: "Very realistic visual feel, strong for stakeholder engagement, impressive site presentation", 
                    limitations: "Not survey-grade by default; measurement-critical work needs additional workflow" 
                  },
                  { 
                    type: "Photogrammetry", 
                    for: "3D models, meshes, orthomosaics and measurable site outputs", 
                    strengths: "Can support mapping, modelling, measurements and construction/survey workflows", 
                    limitations: "Can look less photorealistic than Gaussian Splat; accuracy depends on capture/control workflow" 
                  },
                  { 
                    type: "LiDAR", 
                    for: "Point clouds, terrain, vegetation, infrastructure and measurement-focused survey data", 
                    strengths: "Strong for geometry, complex sites, vegetation penetration and survey workflows", 
                    limitations: "Less visually photorealistic; specialist hardware and processing required" 
                  },
                  { 
                    type: "360 Panorama", 
                    for: "Simple immersive viewing from fixed viewpoints", 
                    strengths: "Lightweight, easy to embed, strong for property, venues and context views", 
                    limitations: "Limited movement; not a full reconstructed 3D scene" 
                  },
                  { 
                    type: "Drone Video", 
                    for: "Marketing, stakeholder updates and guided storytelling", 
                    strengths: "Easy to understand, highly shareable, strong emotional impact", 
                    limitations: "Viewer cannot freely explore the scene" 
                  }
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
                    <td className="py-8 px-6 font-display text-xl text-white group-hover:text-accent transition-colors">{row.type}</td>
                    <td className="py-8 px-6 font-body text-[12px] text-white/50 uppercase tracking-widest">{row.for}</td>
                    <td className="py-8 px-6 font-body text-[12px] text-white/70 uppercase tracking-tighter leading-relaxed">{row.strengths}</td>
                    <td className="py-8 px-6 font-ui text-[10px] tracking-wider text-white/40 uppercase">{row.limitations}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-12 text-center font-ui text-[11px] tracking-[0.2em] uppercase text-white/20">
            The best output depends on the intended use. Gaussian Splats are often strongest when the goal is photorealistic visualisation rather than measurement.
          </p>
        </div>
      </section>

      {/* 8. Accuracy and Limitations Section */}
      <section className="py-32 px-10 md:px-20 bg-mid">
        <div className="max-w-[1000px] mx-auto text-center">
          <div className="svc-tag mb-12 inline-flex"><SectionTag number="07" text="Disclaimer" /></div>
          <h2 className="font-display text-5xl md:text-6xl text-white mb-10 uppercase leading-tight">VISUALISATION FIRST, <br/><span className="text-accent underline underline-offset-8">MEASUREMENT SECOND</span></h2>
          <div className="bg-dark/40 border border-white/5 p-12 mb-12">
            <p className="font-body text-xl text-white/60 leading-relaxed uppercase tracking-widest font-light mb-8">
              Gaussian Splats are powerful visualisation assets, but they should not be described as survey-grade by default. They are ideal for photorealistic walkthroughs, stakeholder engagement, visual site records and immersive presentations.
            </p>
            <p className="font-body text-lg text-white/40 leading-relaxed">
              For measurement-critical projects, Gaussian Splat capture should be paired with appropriate photogrammetry, LiDAR, RTK, ground control or survey-controlled workflows.
            </p>
          </div>
          <div className="p-8 border-l-4 border-accent bg-accent/5 inline-block text-left max-w-3xl">
             <p className="font-display text-2xl text-accent uppercase tracking-widest italic mb-2">Technical Guidance:</p>
             <p className="font-body text-white/60 leading-relaxed uppercase tracking-widest text-sm font-medium">
               Use Gaussian Splat when you need people to understand and experience the space. Use survey-controlled photogrammetry or LiDAR when you need verified measurements. Use both when the project needs visual impact and technical data.
             </p>
          </div>
        </div>
      </section>

      {/* 9. Sector Section */}
      <section className="py-32 px-10 md:px-20 bg-dark">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col items-center text-center mb-20">
            <div className="svc-tag mb-8"><SectionTag number="08" text="Verticals" /></div>
            <h2 className="font-display text-6xl text-white uppercase mb-6 tracking-tighter">WHO USES <span className="text-accent">GAUSSIAN SPLAT</span> DRONE CAPTURE?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 border border-white/5">
            {[
              { name: "Construction", desc: "Preserve visual records of project stages, site conditions and milestone changes.", href: "/services/construction-monitoring" },
              { name: "Heritage & Conservation", desc: "Create immersive records of historic structures, estates and sensitive environments.", href: "/services/heritage-conservation-archaeology" },
              { name: "Commercial Property", desc: "Give buyers, tenants, investors and stakeholders a more engaging way to understand a site.", href: "/services/commercial-property-drone-surveys" },
              { name: "Facilities Management", desc: "Maintain visual records of assets, roof plant and difficult access areas.", href: "/services/facilities-management-inspections" },
              { name: "Public Sector", desc: "Engage stakeholders with immersive visual evidence of sites and proposed works.", href: "/services" },
              { name: "Insurance", desc: "Capture photorealistic site context for claims, damage or access-restricted areas.", href: "/services/insurance-loss-adjuster-surveys" },
              { name: "Infrastructure", desc: "Immersive visual documentation for bridges, sites and transport networks.", href: "/services/infrastructure-inspections" },
              { name: "Events & Venues", desc: "Immersive previews for marketing, planning and visitor engagement.", href: "/services/events-media" },
              { name: "Tourism & Estates", desc: "Showcase destinations and private estates with cinematic 3D realism.", href: "/services" },
              { name: "Film & Media", desc: "Digital scouting and environment capture for production planning.", href: "/services/fpv-drone-filming" }
            ].map((sector) => (
              <Link key={sector.name} href={sector.href} className="bg-mid p-10 group hover:bg-dark transition-all border border-transparent hover:border-accent/20">
                <h3 className="font-display text-2xl text-white mb-6 uppercase tracking-widest group-hover:text-accent transition-colors leading-tight">{sector.name}</h3>
                <p className="font-body text-[10px] text-white/40 uppercase tracking-widest leading-relaxed">
                  {sector.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Related Services Section */}
      <section className="py-32 px-10 md:px-20 bg-mid border-y border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl text-left">
              <div className="svc-tag mb-6"><SectionTag number="09" text="Service Hub" /></div>
              <h2 className="font-display text-5xl md:text-6xl text-white uppercase leading-none">
                RELATED <br/><span className="text-accent">DRONE SERVICES</span>
              </h2>
            </div>
            <p className="font-body text-sm text-white/40 uppercase tracking-widest max-w-xs text-right">
              Complementary capture workflows for comprehensive site intelligence and visual documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { slug: "photogrammetry", title: "Drone Photogrammetry", desc: "For projects that need 3D model outputs, measurable data or survey-supported geometry." },
              { slug: "digital-twin-capture", title: "Digital Twin Capture", desc: "For clients who want visual records, site context and asset documentation across buildings or estates." },
              { slug: "360-aerial-panoramas", title: "360 Aerial Panoramas", desc: "For lightweight interactive viewing from fixed aerial or site viewpoints." },
              { slug: "aerial-photography-film", title: "Aerial Photography & Film", desc: "Cinematic 4K/6K video and professional stills for marketing and brand content." },
              { slug: "construction-monitoring", title: "Construction Monitoring", desc: "Regular progress capture for project teams, stakeholders and site records." },
              { slug: "heritage-conservation-archaeology", title: "Heritage & Conservation", desc: "Sensitive documentation and digital preservation for listed buildings and historic assets." },
              { slug: "commercial-property-drone-surveys", title: "Commercial Property Surveys", desc: "Aerial condition auditing for office, retail, industrial and managed property portfolios." },
              { slug: "surveying-mapping", title: "Surveying & Mapping", desc: "Precision mapping, orthomosaics and survey-grade data for land and construction sites." }
            ].map((rel) => (
              <Link 
                key={rel.slug} 
                href={`/services/${rel.slug}`}
                className="group p-10 border border-white/5 bg-dark hover:border-accent/30 transition-all duration-500 relative overflow-hidden"
              >
                <div className="relative z-10">
                  <h3 className="font-display text-2xl text-white mb-6 group-hover:text-accent transition-colors uppercase leading-tight">{rel.title}</h3>
                  <p className="font-body text-[10px] text-white/30 uppercase tracking-widest leading-relaxed mb-10">
                    {rel.desc}
                  </p>
                  <div className="flex items-center gap-2 text-accent font-ui text-[11px] tracking-[0.3em] uppercase group-hover:gap-4 transition-all">
                    VIEW SERVICE <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Recommended Bundle Section */}
      <section className="py-24 bg-accent text-dark">
        <div className="max-w-[1200px] mx-auto px-10 md:px-20 text-center">
          <div className="inline-flex mb-8"><SectionTag number="10" text="Recommendation" /></div>
          <h2 className="font-display text-5xl md:text-6xl uppercase leading-tight mb-8 tracking-tighter">
            IMMERSIVE <span className="underline decoration-dark/20 underline-offset-8">DIGITAL CAPTURE PACK</span>
          </h2>
          <p className="font-body text-xl md:text-2xl uppercase tracking-widest font-medium opacity-80 max-w-4xl mx-auto mb-12 leading-relaxed">
            For clients who need Gaussian Splat capture alongside drone imagery, 360 panoramas, photogrammetry, flythrough video or digital twin-style outputs, the Immersive Digital Capture Pack provides a structured route from site capture to usable visual deliverables.
          </p>
          <Link 
            href="/bundles#immersive-digital"
            className="inline-flex items-center gap-6 bg-dark text-white px-12 py-6 font-display text-3xl tracking-widest hover:bg-white hover:text-dark transition-all"
          >
            VIEW IMMERSIVE DIGITAL CAPTURE PACK <ArrowUpRight className="w-8 h-8" />
          </Link>
        </div>
      </section>

      {/* 12. FAQ Section */}
      <section className="py-32 px-10 md:px-20 bg-dark border-y border-white/5">
        <div className="max-w-4xl mx-auto">
           <div className="text-center mb-16">
             <div className="svc-tag mb-8 inline-flex"><SectionTag number="11" text="Support" /></div>
             <h2 className="font-display text-6xl text-white uppercase tracking-tighter">GAUSSIAN SPLAT <span className="text-accent underline underline-offset-8 decoration-accent/20">FAQ</span></h2>
           </div>
           <FAQAccordion faqs={faqs.map(f => ({ question: f.question, answer: f.answer }))} />
        </div>
      </section>

      {/* 13. Final CTA Section */}
      <section className="py-32 px-10 md:px-20 bg-accent text-dark">
        <div className="max-w-[1200px] mx-auto text-center">
          <Box className="w-16 h-16 mx-auto mb-10 text-dark/80" />
          <h2 className="font-display text-6xl md:text-8xl mb-10 uppercase tracking-tighter leading-[0.85]">
            NEED TO CAPTURE A SITE <br/>PEOPLE CAN <span className="underline decoration-dark/30 underline-offset-[10px]">EXPLORE</span>, <br/>NOT JUST VIEW?
          </h2>
          <p className="font-body text-xl md:text-2xl text-dark/70 max-w-3xl mx-auto mb-16 uppercase tracking-widest font-medium leading-relaxed">
            Gaussian Splat drone capture gives clients a more immersive way to present, preserve and understand real-world spaces. Tell us what you need to visualise, and we’ll advise the right capture workflow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link 
              href="/brief"
              className="group flex items-center gap-6 bg-dark text-white px-12 py-8 font-display text-4xl tracking-[0.1em] transition-all hover:bg-white hover:text-dark w-full sm:w-auto shadow-[0_30px_60px_rgba(0,0,0,0.2)]"
            >
              REQUEST GAUSSIAN CAPTURE <ArrowRight className="w-10 h-10 group-hover:translate-x-4 transition-transform duration-500" />
            </Link>
            <Link 
              href="/gaussian-splat#benchmarking"
              className="font-ui text-[14px] font-bold tracking-[0.5em] uppercase text-dark/60 hover:text-dark transition-colors"
            >
              Compare 3D Capture Options
            </Link>
          </div>
          
          <div className="mt-20 pt-10 border-t border-dark/10">
             <h4 className="font-ui text-[12px] tracking-[0.4em] uppercase font-bold mb-6">Interactive Viewer Coming Soon</h4>
             <p className="font-body text-sm text-dark/60 uppercase tracking-widest max-w-xl mx-auto mb-8">
               A live interactive Gaussian Splat viewer can be added to this page once the final web-ready model is prepared. For now, the screenshots show example visual outputs from the Gaussian Splat workflow.
             </p>
             <Link href="/contact" className="inline-flex items-center gap-3 font-ui text-[11px] tracking-widest uppercase text-dark hover:underline underline-offset-4 font-bold">
               ASK ABOUT INTERACTIVE MODEL DELIVERY <ArrowRight className="w-4 h-4" />
             </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
