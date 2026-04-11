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
    desc: 'The upgraded flagship enterprise platform. It features an all-new video transmission system, more efficient battery management, and a payload capacity that supports complex multi-sensor missions.',
    image: '/images/fleet_m350.png',
    video: '/videos/hero.mp4',
    specs: [
      { label: 'Max Flight Time', value: '55 Mins' },
      { label: 'IP Rating', value: 'IP55' },
      { label: 'Max Payload', value: '2.7 KG' },
      { label: 'Transmission', value: 'O3 Enterprise' }
    ],
    technical: [
      { icon: Cpu, title: 'RTK Precision', text: 'Centimeter-level positioning with multi-GNSS support and real-time correction data.' },
      { icon: Zap, title: 'Triple Payload', text: 'Supports up to three payloads simultaneously for high-efficiency data collection.' },
      { icon: Battery, title: 'Hot-Swap', text: 'Dual-battery system allowing for consecutive missions without powering down.' },
      { icon: Wind, title: 'Stability', text: 'Capable of operation in winds up to 12m/s, ensuring data capture in varied UK weather.' }
    ]
  },
  'm30t': {
    name: 'DJI Matrice 30T',
    subtitle: 'Tactical Thermal Power',
    desc: 'A balance of portability and power. The M30T integrates a wide-angle, zoom, and thermal camera with a laser rangefinder into a single, compact deployable unit.',
    image: '/images/inspection_poster.png',
    video: '/videos/inspection.mp4',
    specs: [
      { label: 'Max Flight Time', value: '41 Mins' },
      { label: 'IP Rating', value: 'IP55' },
      { label: 'Thermal Res', value: '640 x 512' },
      { label: 'Zoom', value: '16x Optical' }
    ],
    technical: [
      { icon: Maximize, title: 'Rapid Deploy', text: 'Foldable design ready for flight in under 60 seconds for emergency scenarios.' },
      { icon: Zap, title: 'Laser Range', text: 'Precise coordinates for targets up to 1200m away for search and rescue.' },
      { icon: Battery, title: 'Endurance', text: 'Self-heating batteries for operation in environments down to -20°C.' },
      { icon: Cpu, title: 'Tactical Edge', text: 'Night-vision FPV camera for safe operations in zero-light environments.' }
    ]
  },
  'm300-rtk': {
    name: 'DJI Matrice 300 RTK',
    subtitle: 'Legacy Performance',
    desc: 'The pioneer of modern enterprise UAVs. The M300 RTK remains a critical asset for infrastructure audits due to its robust construction and high payload modularity.',
    image: '/images/fleet_m350.png',
    video: '/videos/hero.mp4',
    specs: [
      { label: 'Max Flight Time', value: '55 Mins' },
      { label: 'IP Rating', value: 'IP45' },
      { label: 'Range', value: '15 KM' },
      { label: 'Battery', value: 'TB60' }
    ],
    technical: [
      { icon: Cpu, title: 'OcuSync Ent', text: 'Triple-channel 1080p video transmission with professional-grade encryption.' },
      { icon: Zap, title: 'Smart Pin', text: 'Real-time location sharing and mission tracking for distributed field teams.' },
      { icon: Battery, title: 'Redundancy', text: 'Dual IMU, compass, and GNSS modules for fail-safe industrial operations.' },
      { icon: Wind, title: 'Propulsion', text: 'Inverted gimbal mounting support for bridge and ceiling inspections.' }
    ]
  },
  'mavic-3e': {
    name: 'DJI Mavic 3 Enterprise',
    subtitle: 'Precision Mapping',
    desc: 'The compact solution for high-speed surveying. Equipped with a mechanical shutter to avoid motion blur and an RTK module for centimeter-level photogrammetry.',
    image: '/images/surveying_poster.png',
    video: '/videos/surveying.mp4',
    specs: [
      { label: 'Max Flight Time', value: '45 Mins' },
      { label: 'Gimbal', value: '3-Axis' },
      { label: 'Shutter', value: 'Mechanical' },
      { label: 'Zoom', value: '56x Hybrid' }
    ],
    technical: [
      { icon: Maximize, title: 'Survey Ready', text: '4/3 CMOS 20MP sensor with 0.7s interval shooting for high-speed mapping.' },
      { icon: Zap, title: 'Obstacle Sensing', text: 'Omni-directional sensing system for safe flight in complex urban terrain.' },
      { icon: Battery, title: 'Portability', text: 'Folds to fit into a briefcase for rapid response mobilization.' },
      { icon: Cpu, title: 'Data Security', text: 'AES-256 encryption for secure data transmission on every mission.' }
    ]
  },
  'h20t': {
    name: 'Zenmuse H20T',
    subtitle: 'Multi-Sensor Intelligence',
    desc: 'A integrated quad-sensor payload that redefined industrial inspection. It combines a wide camera, 20x optical zoom, radiometric thermal, and a laser rangefinder.',
    image: '/images/inspection_poster.png',
    video: '/videos/inspection.mp4',
    specs: [
      { label: 'Optical Zoom', value: '23x' },
      { label: 'Max Zoom', value: '200x' },
      { label: 'Thermal Res', value: '640 x 512' },
      { label: 'Laser Dist', value: '1200m' }
    ],
    technical: [
      { icon: Cpu, title: 'One-Tap Capture', text: 'Simultaneous data capture from all sensors into a single metadata-synced folder.' },
      { icon: Zap, title: 'Smart Track', text: 'AI-driven identification and tracking of dynamic targets from long range.' },
      { icon: Battery, title: 'Night Vision', text: 'Built-in night scene mode for high-quality visual data in low light.' },
      { icon: Wind, title: 'Grid Photo', text: 'Automated ultra-high-resolution grid photography for defect detection.' }
    ]
  },
  'l1': {
    name: 'Zenmuse L1',
    subtitle: 'LiDAR + RGB Solution',
    desc: 'The go-to solution for high-accuracy digital twins. The L1 integrates a Livox Lidar module, a high-accuracy IMU, and a 20MP visual camera.',
    image: '/images/surveying_poster.png',
    video: '/videos/surveying.mp4',
    specs: [
      { label: 'Vertical Acc', value: '5cm' },
      { label: 'Horizontal Acc', value: '10cm' },
      { label: 'Point Rate', value: '240,000 pts' },
      { label: 'Range', value: '450m' }
    ],
    technical: [
      { icon: Maximize, title: 'True Color', text: 'Real-time true-color point cloud rendering for immediate field verification.' },
      { icon: Zap, title: 'High Density', text: 'Capable of multiple returns to penetrate dense vegetation for terrain modeling.' },
      { icon: Battery, title: 'Efficiency', text: 'Cover 2km² in a single flight with centimeter-level absolute accuracy.' },
      { icon: Cpu, title: 'Post-Process', text: 'Seamless integration with DJI Terra for one-stop mapping solutions.' }
    ]
  },
  'p1': {
    name: 'Zenmuse P1',
    subtitle: 'Full-Frame Photogrammetry',
    desc: 'The ultimate sensor for high-resolution mapping. It features a 45MP full-frame sensor and a global mechanical shutter for maximum detail and zero distortion.',
    image: '/images/photography_poster.png',
    video: '/videos/photography.mp4',
    specs: [
      { label: 'Sensor', value: 'Full Frame' },
      { label: 'Resolution', value: '45 MP' },
      { label: 'Shutter', value: 'Mechanical' },
      { label: 'Focal Length', value: '35mm Fixed' }
    ],
    technical: [
      { icon: Cpu, title: 'Global Shutter', text: 'Eliminates motion blur even when flying at high speeds for surveying.' },
      { icon: Zap, title: 'Oblique Capture', text: 'Smart Oblique Capture system for efficient 3D model generation.' },
      { icon: Battery, title: 'Field Efficiency', text: 'Covers up to 10km² in a single day at 3cm GSD resolution.' },
      { icon: Wind, title: 'Precision Time', text: 'TimeSync 2.0 ensures microsecond-level synchronization between sensor and GPS.' }
    ]
  },
  'z30': {
    name: 'Zenmuse Z30',
    subtitle: 'Long-Range Analytics',
    desc: 'Designed for safe distance monitoring. The Z30 provides unparalleled 30x optical zoom, allowing for detailed inspections of pylons and masts without proximity risk.',
    image: '/images/inspection_poster.png',
    video: '/videos/inspection.mp4',
    specs: [
      { label: 'Optical Zoom', value: '30x' },
      { label: 'Digital Zoom', value: '180x' },
      { label: 'Stabilization', value: '0.01°' },
      { label: 'Aperture', value: 'f/1.6 - f/4.7' }
    ],
    technical: [
      { icon: Maximize, title: 'TapZoom', text: 'Instant zoom into specific areas of interest with a single screen tap.' },
      { icon: Zap, title: 'Defect Analysis', text: 'Clear identification of rust, cracks, and bolt issues from safe distance.' },
      { icon: Battery, title: 'Integration', text: 'Fully compatible with DJI Matrice series for industrial audit stability.' },
      { icon: Cpu, title: 'Auto-Stabilize', text: 'Professional gimbal stabilization ensures clear frames even at 30x zoom.' }
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
