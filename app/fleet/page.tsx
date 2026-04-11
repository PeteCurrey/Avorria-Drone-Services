import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ShieldCheck, Cpu, Zap, Activity } from 'lucide-react'

const TECHNOLOGY = [
  {
    name: 'DJI Matrice 350 RTK',
    slug: 'm350-rtk',
    type: 'Heavy Lift Industrial',
    desc: 'The gold standard for critical infrastructure inspection. IP55 rating, triple-payload support, and 55-minute flight endurance for high-stakes industrial missions.',
    image: '/images/fleet_m350.png'
  },
  {
    name: 'DJI Matrice 30T',
    slug: 'm30t',
    type: 'Tactical Thermal',
    desc: 'The ultimate rapid-deployment asset. Integrated wide, zoom, and thermal sensors with laser rangefinding for complex search and rescue or utility audits.',
    image: '/images/inspection_poster.png'
  },
  {
    name: 'DJI Mavic 3 Enterprise',
    slug: 'mavic-3e',
    type: 'Precision Mapping',
    desc: 'Portable power optimized for high-speed surveying. Featuring a mechanical shutter and RTK module for centimeter-level photogrammetry without GCPs.',
    image: '/images/surveying_poster.png'
  }
]

export default function FleetOverviewPage() {
  return (
    <main className="min-h-screen bg-dark">
      {/* Cinematic Hardware Hero */}
      <section className="relative h-[85vh] flex items-center justify-start px-10 md:px-20 pt-32 md:pt-40 overflow-hidden">
        {/* Using the M350 RTK image as requested for the fleet main page visual */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/fleet_m350.png" 
            alt="DJI Matrice 350 RTK" 
            fill
            priority
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/40 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-[800px]">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-accent" />
            <span className="font-ui text-[11px] tracking-[0.4em] uppercase text-accent">UAV Hardware Portfolio</span>
          </div>
          <h1 className="font-display text-8xl text-white mb-8 tracking-wider leading-none">THE<br/><span className="text-accent underline underline-offset-8">FLEET</span></h1>
          <p className="font-body text-xl text-white/40 leading-relaxed max-w-[600px] mb-12">
            Operating the most advanced enterprise UAV ecosystems in the industry. From heavy-lift structural assets to tactical thermal platforms, our hardware is chosen for one reason: absolute data integrity.
          </p>
          <div className="flex gap-12 border-t border-white/10 pt-12">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-accent" />
              <span className="font-ui text-[10px] tracking-widest text-white/60 uppercase">CAA GVC Certified</span>
            </div>
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-accent" />
              <span className="font-ui text-[10px] tracking-widest text-white/60 uppercase">RTK Enabled</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Selection Grid */}
      <section className="py-32 px-10 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 border border-white/5">
          {TECHNOLOGY.map((item) => (
            <div key={item.slug} className="bg-dark group">
              <div className="relative aspect-[16/9] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
              <Image 
                src={item.image} 
                alt={item.name} 
                fill
                className="object-cover opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent" />
            </div>
              <div className="p-12">
                <div className="font-ui text-[10px] tracking-[0.3em] uppercase text-accent mb-4">{item.type}</div>
                <h3 className="font-display text-4xl text-white mb-6 tracking-wide">{item.name}</h3>
                <p className="font-body text-white/40 leading-relaxed max-w-[400px] mb-10">{item.desc}</p>
                <Link 
                  href={`/fleet/${item.slug}`} 
                  className="inline-flex items-center gap-4 border border-white/20 px-8 py-3 font-ui text-[11px] tracking-widest text-white/70 uppercase hover:text-accent hover:border-accent transition-all"
                >
                  VIEW SPECIFICATIONS <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Capability Stats */}
      <section className="bg-mid py-32 border-t border-white/10 px-10 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-20">
        <div>
          <Cpu className="w-10 h-10 text-accent mb-8" />
          <h4 className="font-display text-2xl text-white mb-4 tracking-wide">COMPUTATIONAL DEPTH</h4>
          <p className="font-body text-sm text-white/30 leading-relaxed">Integrated AI obstacle avoidance and real-time RTK positioning ensuring centimeter-level data accuracy on every flight.</p>
        </div>
        <div>
          <Activity className="w-10 h-10 text-accent mb-8" />
          <h4 className="font-display text-2xl text-white mb-4 tracking-wide">MISSION ENDURANCE</h4>
          <p className="font-body text-sm text-white/30 leading-relaxed">Dual battery hot-swap systems for continuous operational capability, minimizing environmental downtime.</p>
        </div>
        <div>
          <ShieldCheck className="w-10 h-10 text-accent mb-8" />
          <h4 className="font-display text-2xl text-white mb-4 tracking-wide">OPERATIONAL RANGE</h4>
          <p className="font-body text-sm text-white/30 leading-relaxed">High-bandwidth, encrypted transmission systems for low-latency visual data streams in complex interference zones.</p>
        </div>
      </section>
    </main>
  )
}
