// app/fleet/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Cpu, Zap, Wind, Battery, Maximize, ArrowRight } from 'lucide-react'
import VideoBackground from '@/components/ui/VideoBackground'
import { FleetItem } from '@/types'

const FLEET_DATA: Record<string, FleetItem> = {
  'm350-rtk': {
    name: 'DJI Matrice 350 RTK',
    subtitle: 'The Enterprise Workhorse',
    desc: 'Setting a new benchmark for industrial drone operations with IP55 protection, night-vision FPV, and the revolutionary DJI Transmission system.',
    image: '/images/hero_poster.png', // Reusing high-end m350 poster
    video: '/videos/hero.mp4',
    specs: [
      { label: 'Max Flight Time', value: '55 Mins' },
      { label: 'IP Rating', value: 'IP55' },
      { label: 'Max Payload', value: '2.7 KG' },
      { label: 'Transmission', value: '20 KM' }
    ],
    technical: [
      { icon: Cpu, title: 'RTK Precision', text: 'Centimeter-level positioning with multi-GNSS support and real-time correction data.' },
      { icon: Zap, title: 'Flight Safety', text: 'Six-directional sensing and positioning for mission-critical reliability in dense airspaces.' },
      { icon: Battery, title: 'Hot-Swap', text: 'Minimize downtime with dual-battery system allowing for consecutive missions.' },
      { icon: Wind, title: 'Stability', text: 'Capable of operation in winds up to 12m/s, ensuring data capture in varied UK weather.' }
    ]
  },
  'mavic-3e': {
    name: 'DJI Mavic 3 Enterprise',
    subtitle: 'Tactical Precision',
    desc: 'The compact solution for rapid deployment. Equipped with a mechanical shutter for surveying and a 56x hybrid zoom for detail-obsessed inspections.',
    image: '/images/inspection_poster.png',
    video: '/videos/inspection.mp4',
    specs: [
      { label: 'Max Flight Time', value: '45 Mins' },
      { label: 'Gimbal', value: '3-Axis' },
      { label: 'Camera', value: '4/3 CMOS' },
      { label: 'Zoom', value: '56x Hybrid' }
    ],
    technical: [
      { icon: Maximize, title: 'Rapid Deployment', text: 'Folds to fit into a backpack, yet deploys in under 60 seconds for emergency response.' },
      { icon: Zap, title: 'Surveying Ready', text: 'Mechanical shutter avoids motion blur during high-speed mapping missions.' },
      { icon: Battery, title: 'Endurance', text: 'Best-in-class power efficiency for sustained tactical or thermal operations.' },
      { icon: Cpu, title: 'Thermal Version', text: 'Available with high-resolution radiometric thermal sensor for heat loss and SAR.' }
    ]
  }
}

export default async function FleetPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const drone = FLEET_DATA[slug]

  if (!drone) notFound()

  return (
    <main className="min-h-screen bg-dark">
      {/* Visual Header */}
      <section className="relative h-[70vh] flex items-end pb-20 px-10 md:px-20 overflow-hidden">
        <VideoBackground src={drone.video} poster={drone.image} brightness={0.3} />
        <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-end gap-12">
          <div>
            <div className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent mb-4">UAV Fleet Specifications</div>
            <h1 className="font-display text-hero text-white mb-2 leading-none">{drone.name}</h1>
            <p className="font-display text-2xl text-white/40 tracking-wider italic">{drone.subtitle}</p>
          </div>
          <div className="flex gap-10 border-l border-white/10 pl-10">
            {drone.specs.map((spec) => (
              <div key={spec.label}>
                <div className="font-ui text-[9px] tracking-[0.2em] uppercase text-accent mb-1">{spec.label}</div>
                <div className="font-display text-xl text-white">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Deep Dive */}
      <section className="py-32 px-10 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="font-display text-5xl text-white mb-10 tracking-[0.1em]">THE<br/><span className="text-accent underline underline-offset-8">HARDWARE</span></h2>
          <p className="font-body text-xl font-light text-white/45 leading-relaxed mb-12">
            {drone.desc} We operate this platform across a variety of industrial sectors, leveraging its specific capabilities to deliver maximum value.
          </p>
          <div className="grid grid-cols-2 gap-8">
            {drone.technical.map((tech) => (
              <div key={tech.title} className="p-6 bg-white/5 border border-white/5 group hover:border-accent/30 transition-colors">
                <tech.icon className="w-5 h-5 text-accent mb-4" />
                <h3 className="font-display text-lg text-white mb-2 tracking-wide uppercase">{tech.title}</h3>
                <p className="font-body text-[12px] text-white/30 leading-normal">{tech.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative aspect-square bg-white/[0.02] border border-white/10 flex items-center justify-center group overflow-hidden">
          <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          {/* Subtle decoration */}
          <div className="grid-lines opacity-20" />
          <div className="font-display text-[240px] text-white/[0.03] leading-none select-none tracking-tighter">SPEC</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-10 md:px-20 bg-mid border-y border-white/5 flex flex-col md:flex-row items-center justify-between gap-12">
        <h2 className="font-display text-4xl text-white max-w-[500px]">DEPLOY THIS TECHNOLOGY FOR YOUR NEXT MISSION</h2>
        <Link 
          href="/brief" 
          className="group flex items-center gap-6 border border-accent text-accent px-12 py-5 font-display text-2xl tracking-[0.2em] transition-all hover:bg-accent hover:text-dark"
        >
          START PROJECT BRIEF <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-300" />
        </Link>
      </section>
    </main>
  )
}
