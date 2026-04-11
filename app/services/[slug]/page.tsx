// app/services/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Shield, Target, Clock, Globe, ArrowRight } from 'lucide-react'
import { ServiceItem } from '@/types'
import VideoBackground from '@/components/ui/VideoBackground'
import FeatureTags from '@/components/ui/FeatureTags'

const SERVICES_DATA: Record<string, ServiceItem> = {
  'inspection': {
    title: 'Industrial Drone Inspection',
    hero: 'PRECISE. SAFE. UNIFORM.',
    desc: 'High-resolution structural analysis and radiometric thermal auditing for critical infrastructure. We deliver comprehensive defect reports with sub-millimeter detail for energy, utilities, and commercial real estate.',
    video: '/videos/inspection.mp4',
    poster: '/images/inspection_poster.png',
    features: ['Precision Roof & Facade Audits', 'Radiometric Thermal Heat Loss', 'Infrastructure Integrity Surveys', 'Confined Space Internal Flight'],
    specs: [
      { label: 'Payload', value: 'Zenmuse H20T / H30' },
      { label: 'Thermal', value: '640x512 Radiometric' },
      { label: 'Zoom', value: '200x Max Optical' },
      { label: 'Compliance', value: 'CAA GVC / OA' }
    ]
  },
  'photography': {
    title: 'Cinematic Aerial Photography',
    hero: 'VISION. MOTION. PRECISION.',
    desc: 'Bespoke 6K aerial cinematography and 45MP architectural photography. Optimized for luxury property marketing, commercial broadcasting, and large-scale industrial site showreels.',
    video: '/videos/photography.mp4',
    poster: '/images/photography_poster.png',
    features: ['6K Raw Cinematic Capture', '45MP High-Resolution Stills', 'Dynamic Site Progression Stills', 'Post-Production Grading Ready'],
    specs: [
      { label: 'Camera', value: 'DJI P1 / Mavic 3E' },
      { label: 'Res', value: '6K Video / 45MP Still' },
      { label: 'Sensor', value: 'Full Frame CMOS' },
      { label: 'Delivery', value: 'ProRes / Raw' }
    ]
  },
  'surveying': {
    title: 'Topographic Surveying & Lidar',
    hero: 'DATA. DEPTH. DEFINITION.',
    desc: 'Digital twin generation through high-density LiDAR and photogrammetry. Centimeter-level absolute accuracy (±2cm) for land development, civil engineering, and volumetric stockpile analysis.',
    video: '/videos/surveying.mp4',
    poster: '/images/surveying_poster.png',
    features: ['LiDAR Point Cloud Generation', '3D Digital Twin Modeling', 'Volumetric Earthworks Calc', '2D High-Res Orthomosaics'],
    specs: [
      { label: 'Precision', value: '±2cm Absolute (RTK)' },
      { label: 'Equipment', value: 'Matrice 350 / L2' },
      { label: 'Output', value: 'LAS / DXF / OBJ' },
      { label: 'Speed', value: 'Up to 2km² / Day' }
    ]
  },
  'construction': {
    title: 'Construction Monitoring',
    hero: 'TRACK. REPORT. RECORD.',
    desc: 'Strategic site oversight through automated flight paths. We provide project managers with consistent, high-accuracy visual data to track progress against BIM designs and verify site safety protocols.',
    video: '/videos/construction.mp4',
    poster: '/images/construction_poster.png',
    features: ['Automated Progress Sets', 'As-Built vs BIM Overlay', '4D Timeline Visualization', 'Monthly Stakeholder Sets'],
    specs: [
      { label: 'Frequency', value: 'Weekly / Bi-Monthly' },
      { label: 'Integration', value: 'Autodesk / Procore' },
      { label: 'Accuracy', value: 'GCP / RTK Verified' },
      { label: 'Reporting', value: 'Interactive Portals' }
    ]
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = SERVICES_DATA[slug]

  if (!service) notFound()

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-start px-10 md:px-20 overflow-hidden">
        <VideoBackground src={service.video} poster={service.poster} brightness={0.35} />
        <div className="relative z-10 max-w-[800px] mt-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-accent" />
            <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">Professional Service</span>
          </div>
          <h1 className="font-display text-hero text-white mb-6 leading-none">{service.title}</h1>
          <p className="font-body text-xl font-light text-white/50 max-w-[600px] mb-12 italic">{service.hero}</p>
          <div className="flex flex-wrap gap-8">
            {service.specs.map((spec) => (
              <div key={spec.label}>
                <div className="font-ui text-[10px] tracking-[0.2em] uppercase text-accent mb-1">{spec.label}</div>
                <div className="font-display text-2xl text-white">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-dark py-32 px-10 md:px-20 flex flex-col md:flex-row gap-20">
        <div className="flex-1">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-8 tracking-wider uppercase">Strategic<br/><span className="text-accent underline underline-offset-8">Intelligence</span></h2>
          <p className="font-body text-lg font-light text-white/40 leading-relaxed max-w-[500px] mb-12">
            {service.desc} Our approach centers on reliability, safety, and the delivery of actionable data sets that allow project managers to make informed decisions from the sky.
          </p>
          <div className="feature-tags">
            <FeatureTags tags={service.features} />
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5 border border-white/10">
          <div className="p-10 bg-dark/40 border-b border-r border-white/5 hover:bg-accent/5 transition-colors group">
            <Shield className="w-6 h-6 text-accent mb-4" />
            <h3 className="font-display text-xl text-white mb-2 tracking-wide">CAA CERTIFIED</h3>
            <p className="font-body text-xs text-white/30 leading-relaxed uppercase tracking-tighter">Fully licensed and insured for high-risk industrial environments.</p>
          </div>
          <div className="p-10 bg-dark/40 border-b border-white/5 hover:bg-accent/5 transition-colors">
            <Target className="w-6 h-6 text-accent mb-4" />
            <h3 className="font-display text-xl text-white mb-2 tracking-wide">RTK PRECISION</h3>
            <p className="font-body text-xs text-white/30 leading-relaxed uppercase tracking-tighter">GPS correction data ensuring centimeter-level positioning accuracy.</p>
          </div>
          <div className="p-10 bg-dark/40 border-r border-white/5 hover:bg-accent/5 transition-colors">
            <Clock className="w-6 h-6 text-accent mb-4" />
            <h3 className="font-display text-xl text-white mb-2 tracking-wide">FAST DELIVERY</h3>
            <p className="font-body text-xs text-white/30 leading-relaxed uppercase tracking-tighter">Internal data processing pipelines for 24-48 hour turnarounds.</p>
          </div>
          <div className="p-10 bg-dark/40 hover:bg-accent/5 transition-colors">
            <Globe className="w-6 h-6 text-accent mb-4" />
            <h3 className="font-display text-xl text-white mb-2 tracking-wide">UK WIDE</h3>
            <p className="font-body text-xs text-white/30 leading-relaxed uppercase tracking-tighter">Fast response teams ready for mobilization across the British Isles.</p>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-mid py-24 px-10 md:px-20 border-t border-white/5 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div>
            <h2 className="font-display text-4xl text-white mb-4">READY TO DEPLOY?</h2>
            <p className="font-body text-white/40 uppercase tracking-widest text-xs">Define your mission parameters through our Project Briefing tool.</p>
          </div>
          <Link 
            href="/brief" 
            className="group flex items-center gap-6 bg-accent text-dark px-10 py-5 font-display text-2xl tracking-[0.2em] transition-all hover:bg-white"
          >
            START PROJECT BRIEF <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </main>
  )
}
