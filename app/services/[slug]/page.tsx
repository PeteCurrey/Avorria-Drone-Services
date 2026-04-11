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
    hero: 'PRECISE. SAFE. UNLIMITED.',
    desc: 'Cutting-edge UAV structural surveys and thermal imaging for infrastructure that builds the world.',
    video: '/videos/inspection.mp4',
    poster: '/images/inspection_poster.png',
    features: ['Structural Defect Analysis', 'Thermal Heat Loss Audits', 'Bridge & Tunnel Surveys', 'Roofing & Facade Reports'],
    specs: [
      { label: 'Accuracy', value: '1mm / pixel' },
      { label: 'Sensors', value: 'FLIR Radiometric' },
      { label: 'Compliance', value: 'CAA GVC / OA' },
      { label: 'Payload', value: 'Dual Zenmuse H20T' }
    ]
  },
  'photography': {
    title: 'Cinematic Aerial Photography',
    hero: 'VISION. MOTION. IMPACT.',
    desc: 'Editorial-grade 4K aerial cinematography and high-resolution stills for prestige property and commercial film.',
    video: '/videos/photography.mp4',
    poster: '/images/photography_poster.png',
    features: ['4K / 6K Raw Footage', 'Luxury Estate Pullbacks', 'Commercial Site Showreels', 'Architectural Stills'],
    specs: [
      { label: 'Resolution', value: '20MP / 4K 60fps' },
      { label: 'Color', value: '10-bit D-Log M' },
      { label: 'Dynamic Range', value: '12.8 Stops' },
      { label: 'Output', value: 'ProRes / H.265' }
    ]
  },
  'surveying': {
    title: 'UAV Surveying & Mapping',
    hero: 'DATA. DEPTH. DETAIL.',
    desc: 'High-precision topographical mapping and 3D photogrammetry for land development and civil engineering.',
    video: '/videos/surveying.mp4',
    poster: '/images/surveying_poster.png',
    features: ['Topographical Surveys', '3D Point Cloud Generation', 'Volumetric Analysis', 'NDVI Vegetation Health'],
    specs: [
      { label: 'Precision', value: 'Sub-3cm Absolute' },
      { label: 'Output', value: 'CAD / BIM / GIS' },
      { label: 'Frequency', value: 'PPK / RTK Ready' },
      { label: 'Area Coverage', value: 'Up to 200Ha/day' }
    ]
  },
  'construction': {
    title: 'Construction Monitoring',
    hero: 'TRACK. REPORT. MANAGE.',
    desc: 'Strategic site progress tracking and stakeholder reporting through consistent, high-altitude perspective.',
    video: '/videos/construction.mp4',
    poster: '/images/construction_poster.png',
    features: ['Weekly Progress Sets', 'Orthomosaic Site Maps', 'As-Built vs Design Comparison', 'Stakeholder Portals'],
    specs: [
      { label: 'Frequency', value: 'Daily / Weekly' },
      { label: 'Visualization', value: '4D Timeline' },
      { label: 'Safety', value: 'Full Risk RAMS' },
      { label: 'Collaborate', value: 'Autodesk Connect' }
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
